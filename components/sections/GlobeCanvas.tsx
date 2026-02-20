"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function latLonToVec3(lat: number, lon: number, r = 1.0): THREE.Vector3 {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  );
}

// ── City markers ──────────────────────────────────────────────────────────────
const CITIES = [
  { lat: 44.4268, lon: 26.1025 }, // Bucharest
  { lat: 51.5074, lon: -0.1278 }, // London
  { lat: 48.1351, lon: 11.5820 }, // Munich
  { lat: 25.2048, lon: 55.2708 }, // Dubai
  { lat: 40.7128, lon: -74.0060 }, // New York
  { lat:  1.3521, lon: 103.8198 }, // Singapore
  { lat: 48.8566, lon:  2.3522 }, // Paris
  { lat: 52.3676, lon:  4.9041 }, // Amsterdam
];
const PULSE_PERIOD = 2.4; // seconds per full pulse cycle
const MARKER_COLOR = 0x56db84;

// ── Starting rotation ─────────────────────────────────────────────────────────
// With the latLonToVec3 convention above, lon = -90° faces the camera (z+).
// Australia centre ≈ lon 133°E. To bring it to face the camera we need an
// initial rotation.y offset of ≈ 2.4 rad (derived analytically).
// Positive rotation.y speed then produces: Australia → Asia → Europe → Americas.
const GLOBE_START_Y = 2.4;   // radians
const GLOBE_SPEED   = 0.1325; // rad / s  (0.052 × 1.3 × 1.4 × 1.4)

export function GlobeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w === 0 || h === 0) return;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0); // transparent background — CSS glow shows through
    renderer.domElement.style.background = "transparent";
    container.appendChild(renderer.domElement);

    // ── Scene / Camera ────────────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
    camera.position.set(0, 0, 3.2);

    // ── Globe group ───────────────────────────────────────────────────────────
    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = 0.22;           // gentle northward tilt
    globeGroup.rotation.y = GLOBE_START_Y;  // Australia facing viewer at t=0
    scene.add(globeGroup);

    // ── Core sphere — near-black base, visible while dots load ────────────────
    const coreGeo = new THREE.SphereGeometry(0.993, 64, 64);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a });
    globeGroup.add(new THREE.Mesh(coreGeo, coreMat));

    // ── City markers ──────────────────────────────────────────────────────────
    const Z_AXIS = new THREE.Vector3(0, 0, 1);
    type MarkerEntry = { dot: THREE.Mesh; ring: THREE.Mesh; offset: number };
    const markerMeshes: MarkerEntry[] = [];

    CITIES.forEach((city, i) => {
      const pos    = latLonToVec3(city.lat, city.lon, 1.012);
      const normal = pos.clone().normalize();
      const quat   = new THREE.Quaternion().setFromUnitVectors(Z_AXIS, normal);

      // Solid dot
      const dotGeo = new THREE.CircleGeometry(0.013, 12);
      const dotMat = new THREE.MeshBasicMaterial({
        color: MARKER_COLOR, transparent: true, opacity: 0.9, depthWrite: false,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos);
      dot.quaternion.copy(quat);
      globeGroup.add(dot);

      // Pulsing ring
      const ringGeo = new THREE.RingGeometry(0.014, 0.026, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: MARKER_COLOR, transparent: true, opacity: 0.7,
        depthWrite: false, side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.quaternion.copy(quat);
      globeGroup.add(ring);

      markerMeshes.push({ dot, ring, offset: i * (PULSE_PERIOD / CITIES.length) });
    });

    // ── Dot cloud — sampled from topology image ───────────────────────────────
    // Topology image: ocean = dark-blue dominant, land = lighter warm tones.
    const STEP        = 1.3;      // degrees between sample points
    const DOT_SIZE    = 0.011;    // ~2.6× the previous size
    const DOT_COLOR   = 0xaaaaaa; // light grey
    const DOT_OPACITY = 0.55;     // subtle, not overpowering

    let dotGeo: THREE.BufferGeometry | null = null;

    const img = document.createElement("img");
    img.crossOrigin = "anonymous";
    img.src = "/earth-topology.png";

    img.onload = () => {
      if (!container) return;

      const SW = 720, SH = 360;
      const cvs = document.createElement("canvas");
      cvs.width = SW; cvs.height = SH;
      const ctx = cvs.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, SW, SH);
      const { data } = ctx.getImageData(0, 0, SW, SH);

      const positions: number[] = [];

      for (let lat = -90; lat <= 90; lat += STEP) {
        for (let lon = -180; lon <= 180; lon += STEP) {
          const px = Math.min(SW - 1, Math.floor(((lon + 180) / 360) * SW));
          const py = Math.min(SH - 1, Math.floor(((90  - lat) / 180) * SH));

          const idx = (py * SW + px) * 4;
          const r = data[idx], g = data[idx + 1], b = data[idx + 2];

          const lum     = r * 0.299 + g * 0.587 + b * 0.114;
          const blueDom = b > r * 1.4 && b > g * 1.1 && b > 30;
          const isLand  = lum > 22 && !blueDom;

          if (isLand) {
            const v = latLonToVec3(lat, lon, 1.003);
            positions.push(v.x, v.y, v.z);
          }
        }
      }

      dotGeo = new THREE.BufferGeometry();
      dotGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

      globeGroup.add(new THREE.Points(dotGeo, new THREE.PointsMaterial({
        color:           DOT_COLOR,
        size:            DOT_SIZE,
        transparent:     true,
        opacity:         DOT_OPACITY,
        sizeAttenuation: true,
        depthWrite:      false,
      })));
    };

    img.onerror = () => { /* silent — dark sphere is already visible */ };

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    // ── Animation loop ────────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let raf: number;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const elapsed = clock.getElapsedTime();

      // Slow westward continental drift: Australia → Asia → Europe → Americas
      globeGroup.rotation.y = GLOBE_START_Y + elapsed * GLOBE_SPEED;
      // Barely perceptible tilt breathing
      globeGroup.rotation.x = 0.22 + Math.sin(elapsed * 0.07) * 0.008;

      // Pulse rings: expand scale 1→2.5, fade opacity 0.7→0
      markerMeshes.forEach(({ ring, offset }) => {
        const t = ((elapsed + offset) % PULSE_PERIOD) / PULSE_PERIOD;
        ring.scale.setScalar(1 + t * 1.5);
        (ring.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.7 * (1 - t));
      });

      renderer.render(scene, camera);
    };
    tick();

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      coreGeo.dispose();
      dotGeo?.dispose();
      markerMeshes.forEach(({ dot, ring }) => {
        dot.geometry.dispose();
        (dot.material as THREE.MeshBasicMaterial).dispose();
        ring.geometry.dispose();
        (ring.material as THREE.MeshBasicMaterial).dispose();
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        background: "transparent",
      }}
    />
  );
}

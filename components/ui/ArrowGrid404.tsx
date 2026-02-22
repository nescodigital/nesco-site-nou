"use client";
import { useEffect, useRef } from "react";

const CELL          = 72;    // px square cell
const ARROW_SIZE    = 57;    // px arrow drawn inside cell
const LAUNCH_INTERVAL = 1800; // ms between bursts
const LAUNCH_DURATION = 900;  // ms rocket flight time
const BURST_COUNT   = 4;     // arrows per burst
const BASE_MIN      = 0.028;
const BASE_MAX      = 0.07;
const TARGET_FPS    = 24;    // decorative bg no need for 60fps
const FRAME_MS      = 1000 / TARGET_FPS;

interface RocketArrow {
  col: number;
  row: number;
  startTime: number;  // performance.now()
  baseOp: number;
}

export function ArrowGrid404() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── State ─────────────────────────────────────────────────────────────────
    let cols = 0;
    let rows = 0;
    let baseOpacities: Float32Array = new Float32Array(0);
    let rockets: RocketArrow[]      = [];
    let greenArrow: HTMLCanvasElement | null = null;
    let raf: number;
    let lastFrameTs = 0;

    // ── Resize ────────────────────────────────────────────────────────────────
    const resize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
      const newCols = Math.ceil(W / CELL) + 1;
      const newRows = Math.ceil(H / CELL) + 1;
      const count   = newCols * newRows;

      // Re-seed only if dimensions changed
      if (newCols !== cols || newRows !== rows) {
        cols = newCols;
        rows = newRows;
        baseOpacities = new Float32Array(count);
        for (let i = 0; i < count; i++) {
          baseOpacities[i] = BASE_MIN + Math.random() * (BASE_MAX - BASE_MIN);
        }
      }
    };

    // ── Create green arrow on an offscreen canvas (done once) ─────────────────
    // Draw SVG → source-in fill with #56db84 → exact colour, transparent bg
    const buildArrow = (img: HTMLImageElement): HTMLCanvasElement => {
      const oc    = document.createElement("canvas");
      oc.width    = ARROW_SIZE;
      oc.height   = ARROW_SIZE;
      const octx  = oc.getContext("2d")!;
      octx.drawImage(img, 0, 0, ARROW_SIZE, ARROW_SIZE);
      octx.globalCompositeOperation = "source-in";
      octx.fillStyle = "#56db84";
      octx.fillRect(0, 0, ARROW_SIZE, ARROW_SIZE);
      return oc;
    };

    // ── Render loop ───────────────────────────────────────────────────────────
    const draw = (ts: number) => {
      raf = requestAnimationFrame(draw);

      // Throttle to TARGET_FPS
      if (ts - lastFrameTs < FRAME_MS) return;
      lastFrameTs = ts;

      if (!greenArrow) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Build a quick lookup of rocket cell indices
      const rocketSet = new Set(rockets.map(r => r.row * cols + r.col));

      // ── 1. Static grid ─────────────────────────────────────────────────────
      const halfPad = (CELL - ARROW_SIZE) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          if (rocketSet.has(idx)) continue; // rocket handles this cell

          ctx.globalAlpha = baseOpacities[idx] ?? BASE_MIN;
          ctx.drawImage(greenArrow, c * CELL + halfPad, r * CELL + halfPad);
        }
      }

      // ── 2. Rockets ─────────────────────────────────────────────────────────
      const now = performance.now();
      rockets = rockets.filter(rocket => {
        const progress = Math.min((now - rocket.startTime) / LAUNCH_DURATION, 1);
        if (progress >= 1) return false; // done cell is empty, will reappear next frame as static

        // Ease-in cubic for acceleration feel
        const eased  = progress * progress * progress;
        const scale  = 1 - eased * 0.95;      // 1 → 0.05
        const alpha  = rocket.baseOp * (1 - progress); // fade out
        const dx     = eased * 130;            // 45° right
        const dy     = -eased * 130;           // 45° up

        const originX = rocket.col * CELL + halfPad + ARROW_SIZE / 2;
        const originY = rocket.row * CELL + halfPad + ARROW_SIZE / 2;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(originX + dx, originY + dy);
        ctx.scale(scale, scale);
        ctx.drawImage(greenArrow!, -ARROW_SIZE / 2, -ARROW_SIZE / 2);
        ctx.restore();

        return true;
      });

      ctx.globalAlpha = 1;
    };

    // ── Load SVG, then start ──────────────────────────────────────────────────
    const img   = new Image();
    img.onload  = () => {
      greenArrow = buildArrow(img);
      resize();
      raf = requestAnimationFrame(draw);
    };
    img.onerror = () => { /* silent blank canvas is fine */ };
    img.src     = "/logo mare Nesco.svg";

    window.addEventListener("resize", resize);

    // ── Burst scheduler ───────────────────────────────────────────────────────
    const burst = () => {
      if (cols === 0 || rows === 0) return;
      const total   = cols * rows;
      const picked  = new Set<number>();
      while (picked.size < BURST_COUNT) {
        picked.add(Math.floor(Math.random() * total));
      }
      const startTime = performance.now();
      picked.forEach(idx => {
        rockets.push({
          col:       idx % cols,
          row:       Math.floor(idx / cols),
          startTime,
          baseOp:    baseOpacities[idx] ?? BASE_MIN,
        });
      });
    };

    const t0 = setTimeout(burst, 300);
    const id  = setInterval(burst, LAUNCH_INTERVAL);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      clearTimeout(t0);
      clearInterval(id);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    />
  );
}

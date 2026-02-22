"use client";

const W = 360;
const H = 380;
const px = (x: number) => (x / 100) * W;
const py = (y: number) => (y / 100) * H;

const SHAPES = [
  { id: 0,  x: 8,  y: 10, sz: 14, type: "circle",   green: true,  op: 0.30, dur: 20, del: 0.0, anim: "geoFloatA" },
  { id: 1,  x: 72, y: 6,  sz: 8,  type: "square",   green: false, op: 0.12, dur: 25, del: 1.5, anim: "geoFloatB" },
  { id: 2,  x: 45, y: 18, sz: 10, type: "hex",      green: true,  op: 0.22, dur: 30, del: 0.8, anim: "geoFloatC" },
  { id: 3,  x: 85, y: 32, sz: 16, type: "triangle", green: false, op: 0.14, dur: 18, del: 2.2, anim: "geoFloatD" },
  { id: 4,  x: 20, y: 42, sz: 12, type: "square",   green: true,  op: 0.28, dur: 22, del: 0.3, anim: "geoFloatA" },
  { id: 5,  x: 60, y: 52, sz: 9,  type: "circle",   green: false, op: 0.18, dur: 35, del: 3.5, anim: "geoFloatB" },
  { id: 6,  x: 30, y: 65, sz: 18, type: "hex",      green: true,  op: 0.20, dur: 28, del: 1.2, anim: "geoFloatC" },
  { id: 7,  x: 88, y: 58, sz: 10, type: "circle",   green: true,  op: 0.25, dur: 16, del: 0.5, anim: "geoFloatD" },
  { id: 8,  x: 50, y: 75, sz: 8,  type: "square",   green: false, op: 0.13, dur: 24, del: 4.0, anim: "geoFloatA" },
  { id: 9,  x: 12, y: 80, sz: 12, type: "triangle", green: true,  op: 0.22, dur: 32, del: 1.8, anim: "geoFloatB" },
  { id: 10, x: 78, y: 80, sz: 10, type: "hex",      green: false, op: 0.16, dur: 20, del: 2.8, anim: "geoFloatC" },
  { id: 11, x: 35, y: 28, sz: 8,  type: "circle",   green: true,  op: 0.35, dur: 19, del: 0.6, anim: "geoFloatD" },
  { id: 12, x: 55, y: 38, sz: 14, type: "square",   green: false, op: 0.10, dur: 40, del: 5.0, anim: "geoFloatA" },
  { id: 13, x: 92, y: 14, sz: 10, type: "circle",   green: true,  op: 0.28, dur: 26, del: 1.1, anim: "geoFloatB" },
  { id: 14, x: 5,  y: 52, sz: 8,  type: "hex",      green: false, op: 0.15, dur: 22, del: 3.2, anim: "geoFloatC" },
  { id: 15, x: 40, y: 90, sz: 12, type: "triangle", green: true,  op: 0.20, dur: 28, del: 0.9, anim: "geoFloatD" },
  { id: 16, x: 68, y: 70, sz: 10, type: "circle",   green: true,  op: 0.32, dur: 21, del: 2.5, anim: "geoFloatA" },
  { id: 17, x: 22, y: 22, sz: 8,  type: "square",   green: false, op: 0.12, dur: 33, del: 4.5, anim: "geoFloatB" },
];

const LINES: [number, number, number][] = [
  [0,  4,  4.5],
  [1,  13, 6.0],
  [2,  11, 5.2],
  [3,  7,  3.8],
  [4,  9,  7.0],
  [5,  16, 5.5],
  [6,  15, 4.2],
  [8,  10, 6.5],
  [11, 17, 4.8],
  [12, 5,  5.8],
];

function getClipPath(type: string): string | undefined {
  if (type === "hex")      return "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
  if (type === "triangle") return "polygon(50% 0%, 0% 100%, 100% 100%)";
  return undefined;
}

function getBorderRadius(type: string): string | undefined {
  if (type === "circle") return "50%";
  if (type === "square") return "3px";
  return undefined;
}

export function GeometricAnimation() {
  return (
    <div
      className="hidden lg:block"
      style={{ position: "relative", width: W, height: H, flexShrink: 0, overflow: "hidden" }}
    >
      <style>{`
        @keyframes geoFloatA {
          from { transform: translate(0px, 0px) rotate(0deg); }
          to   { transform: translate(14px, -18px) rotate(120deg); }
        }
        @keyframes geoFloatB {
          from { transform: translate(0px, 0px) rotate(0deg); }
          to   { transform: translate(-12px, 16px) rotate(-100deg); }
        }
        @keyframes geoFloatC {
          from { transform: translate(0px, 0px) rotate(0deg); }
          to   { transform: translate(10px, 14px) rotate(90deg); }
        }
        @keyframes geoFloatD {
          from { transform: translate(0px, 0px) rotate(0deg); }
          to   { transform: translate(-14px, -16px) rotate(-120deg); }
        }
        @keyframes geoLinePulse {
          0%, 100% { opacity: 0.05; }
          50%      { opacity: 0.22; }
        }
        @keyframes geoCenterPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(86,219,132,0.25), 0 0 40px rgba(86,219,132,0.08);
          }
          50% {
            transform: scale(1.06);
            box-shadow: 0 0 35px rgba(86,219,132,0.45), 0 0 70px rgba(86,219,132,0.15);
          }
        }
      `}</style>

      {/* Dot grid */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          pointerEvents: "none",
        }}
      />

      {/* Connecting lines */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
        aria-hidden="true"
      >
        {LINES.map(([a, b, pDur], i) => (
          <line
            key={i}
            x1={px(SHAPES[a].x)} y1={py(SHAPES[a].y)}
            x2={px(SHAPES[b].x)} y2={py(SHAPES[b].y)}
            stroke="rgba(86,219,132,0.15)"
            strokeWidth="1"
            style={{ animation: `geoLinePulse ${pDur}s ${(i * 0.4).toFixed(1)}s ease-in-out infinite` }}
          />
        ))}
      </svg>

      {/* Floating shapes */}
      {SHAPES.map((s) => {
        const color = s.green
          ? `rgba(86,219,132,${s.op})`
          : `rgba(255,255,255,${s.op})`;
        return (
          <div
            key={s.id}
            style={{
              position: "absolute",
              left: px(s.x),
              top: py(s.y),
              width: s.sz,
              height: s.sz,
              background: color,
              borderRadius: getBorderRadius(s.type),
              clipPath: getClipPath(s.type),
              willChange: "transform",
              animation: `${s.anim} ${s.dur}s ${s.del}s ease-in-out infinite alternate`,
            }}
          />
        );
      })}

      {/* Center focus circle */}
      <div
        style={{
          position: "absolute",
          left: "calc(58% - 30px)",
          top: "calc(44% - 30px)",
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(86,219,132,0.12) 0%, rgba(86,219,132,0.03) 70%)",
          border: "1px solid rgba(86,219,132,0.22)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "geoCenterPulse 4s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 800,
            color: "rgba(86,219,132,0.35)",
            letterSpacing: "0.05em",
          }}
        >
          ND
        </span>
      </div>
    </div>
  );
}

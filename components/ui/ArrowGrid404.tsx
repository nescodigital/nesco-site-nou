"use client";
import { useEffect, useRef, useState } from "react";

const CELL = 72;              // px — cell stays the same → gap shrinks as arrows grow
const ARROW_SIZE = 57;        // px — 38 * 1.5 = 57 (50% bigger)
const LAUNCH_INTERVAL = 1800; // ms between bursts
const LAUNCH_DURATION = 900;  // ms — flight time
const BURST_COUNT = 4;        // arrows launched per burst
const BASE_MIN = 0.028;       // 0.04 * 0.7  (−30% opacity)
const BASE_MAX = 0.07;        // 0.10 * 0.7  (−30% opacity)

export function ArrowGrid404() {
  const [dims, setDims] = useState({ cols: 0, rows: 0 });
  const [launching, setLaunching] = useState<Set<number>>(new Set());
  const baseOpacities = useRef<number[]>([]);

  useEffect(() => {
    const update = () => {
      const cols = Math.ceil(window.innerWidth / CELL) + 1;
      const rows = Math.ceil(window.innerHeight / CELL) + 1;
      const count = cols * rows;
      if (baseOpacities.current.length !== count) {
        baseOpacities.current = Array.from({ length: count }, () =>
          BASE_MIN + Math.random() * (BASE_MAX - BASE_MIN)
        );
      }
      setDims({ cols, rows });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const total = dims.cols * dims.rows;
    if (total === 0) return;

    const burst = () => {
      const picked = new Set<number>();
      while (picked.size < BURST_COUNT) {
        picked.add(Math.floor(Math.random() * total));
      }
      setLaunching(prev => new Set([...prev, ...picked]));
      setTimeout(() => {
        setLaunching(prev => {
          const next = new Set(prev);
          picked.forEach(i => next.delete(i));
          return next;
        });
      }, LAUNCH_DURATION);
    };

    const t0 = setTimeout(burst, 300);
    const id = setInterval(burst, LAUNCH_INTERVAL);
    return () => { clearTimeout(t0); clearInterval(id); };
  }, [dims]);

  const { cols, rows } = dims;
  const total = cols * rows;
  if (total === 0) return null;

  return (
    <>
      {/* Rocket launch keyframe: flies 45° up-right, shrinks, fades out */}
      <style>{`
        @keyframes rocket404 {
          0%   { transform: translate(0,    0)    scale(1);    opacity: var(--op); }
          10%  { transform: translate(6px, -6px)  scale(1.05); opacity: var(--op); }
          100% { transform: translate(130px,-130px) scale(0.05); opacity: 0; }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${CELL}px)`,
          gridTemplateRows: `repeat(${rows}, ${CELL}px)`,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: total }).map((_, i) => {
          const isLaunching = launching.has(i);
          const baseOp = baseOpacities.current[i] ?? BASE_MIN;

          return (
            <div
              key={i}
              style={{
                width: CELL,
                height: CELL,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: ARROW_SIZE,
                  height: ARROW_SIZE,
                  // Mask colours the SVG exactly as #56db84
                  backgroundColor: "rgba(86,219,132,1)",
                  WebkitMaskImage: "url('/logo mare Nesco.svg')",
                  maskImage: "url('/logo mare Nesco.svg')",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  // Opacity drives the base visibility; CSS var for keyframe start
                  ["--op" as string]: baseOp,
                  opacity: isLaunching ? undefined : baseOp,
                  // Rocket flight when launching, soft fade-in when returning
                  animation: isLaunching
                    ? `rocket404 ${LAUNCH_DURATION}ms cubic-bezier(0.4,0,1,1) forwards`
                    : "none",
                  transition: isLaunching ? "none" : "opacity 0.4s ease",
                } as React.CSSProperties}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

const CELL = 72;             // px — square cell size
const LAUNCH_INTERVAL = 1800; // ms between bursts
const LAUNCH_DURATION = 750;  // ms — how long a cell glows
const BURST_COUNT = 4;        // cells lit per burst
const BASE_MIN = 0.04;
const BASE_MAX = 0.10;

export function ArrowGrid404() {
  const [dims, setDims] = useState({ cols: 0, rows: 0 });
  const [launching, setLaunching] = useState<Set<number>>(new Set());
  const baseOpacities = useRef<number[]>([]);

  // Recalculate grid on mount + resize
  useEffect(() => {
    const update = () => {
      const cols = Math.ceil(window.innerWidth / CELL) + 1;
      const rows = Math.ceil(window.innerHeight / CELL) + 1;
      const count = cols * rows;
      // Regenerate base opacities only when count changes
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

  // Launch animation bursts
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
    return () => {
      clearTimeout(t0);
      clearInterval(id);
    };
  }, [dims]);

  const { cols, rows } = dims;
  const total = cols * rows;
  if (total === 0) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        // Exact pixel columns = squares regardless of viewport width
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
            {/*
              CSS mask-image: renders the SVG shape filled with the exact
              Nesco green (#56db84) — no filter math, no color drift.
            */}
            <div
              style={{
                width: 38,
                height: 38,
                backgroundColor: isLaunching
                  ? "rgba(86,219,132,0.55)"
                  : `rgba(86,219,132,${baseOp})`,
                WebkitMaskImage: "url('/logo mare Nesco.svg')",
                maskImage: "url('/logo mare Nesco.svg')",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                transform: isLaunching ? "scale(1.25)" : "scale(1)",
                transition: isLaunching
                  ? "background-color 0.1s ease, transform 0.1s ease"
                  : "background-color 0.65s ease, transform 0.65s ease",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

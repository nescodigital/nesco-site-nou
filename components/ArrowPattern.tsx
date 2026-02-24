"use client";
import { useEffect, useRef, useState } from "react";

const ARROW_SIZE = 80; // px per arrow
const GAP = 20; // px spacing between arrows
const CELL = ARROW_SIZE + GAP; // 100px per cell

const LAUNCH_INTERVAL = 4000; // ms between launches
const LAUNCH_DURATION = 900;  // must match CSS animation duration

export function ArrowPattern() {
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  // Calculate grid dimensions based on viewport
  useEffect(() => {
    function calc() {
      const cols = Math.ceil(window.innerWidth / CELL) + 1;
      const rows = Math.ceil(window.innerHeight / CELL) + 1;
      setGrid({ cols, rows });
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const count = grid.cols * grid.rows;

  // Stable random base opacities, regenerated when grid changes
  const baseOpacities = useRef<number[]>([]);
  if (baseOpacities.current.length !== count) {
    baseOpacities.current = Array.from({ length: count }, () => 0.05 + Math.random() * 0.12);
  }

  // Set of arrow indices currently mid-launch
  const [launching, setLaunching] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (count === 0) return;

    const launch = () => {
      const idx = Math.floor(Math.random() * count);
      setLaunching(prev => new Set(prev).add(idx));
      setTimeout(() => {
        setLaunching(prev => {
          const next = new Set(prev);
          next.delete(idx);
          return next;
        });
      }, LAUNCH_DURATION);
    };

    const first = setTimeout(launch, 800);
    const interval = setInterval(launch, LAUNCH_INTERVAL);

    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, [count]);

  if (count === 0) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        display: "grid",
        gridTemplateColumns: `repeat(${grid.cols}, ${ARROW_SIZE}px)`,
        gridTemplateRows: `repeat(${grid.rows}, ${ARROW_SIZE}px)`,
        gap: `${GAP}px`,
        pointerEvents: "none",
        overflow: "hidden",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const isLaunching = launching.has(i);
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: ARROW_SIZE,
              height: ARROW_SIZE,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/nesco-arrow.svg"
              alt=""
              width={ARROW_SIZE}
              height={ARROW_SIZE}
              className={isLaunching ? "launching" : undefined}
              style={{
                "--base-opacity": baseOpacities.current[i],
                width: ARROW_SIZE,
                height: ARROW_SIZE,
                display: "block",
                filter: "grayscale(1) invert(1) brightness(0.5)",
                opacity: isLaunching ? undefined : baseOpacities.current[i],
              } as React.CSSProperties}
            />
          </div>
        );
      })}
    </div>
  );
}

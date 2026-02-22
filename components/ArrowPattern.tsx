"use client";
import { useEffect, useRef, useState } from "react";

const COLS  = 8;
const ROWS  = 8;
const COUNT = COLS * ROWS; // 64

const LAUNCH_INTERVAL = 4000; // ms between launches
const LAUNCH_DURATION = 900;  // must match CSS animation duration

export function ArrowPattern() {
  // Stable random base opacities, generated once on mount, never change
  const baseOpacities = useRef(
    Array.from({ length: COUNT }, () => 0.05 + Math.random() * 0.12)
  );

  // Set of arrow indices currently mid-launch
  const [launching, setLaunching] = useState<Set<number>>(new Set());

  useEffect(() => {
    const launch = () => {
      const idx = Math.floor(Math.random() * COUNT);

      // Add to launching set
      setLaunching(prev => new Set(prev).add(idx));

      // Remove after animation completes
      setTimeout(() => {
        setLaunching(prev => {
          const next = new Set(prev);
          next.delete(idx);
          return next;
        });
      }, LAUNCH_DURATION);
    };

    // First launch after short delay
    const first = setTimeout(launch, 800);
    // Then every LAUNCH_INTERVAL, multiple can overlap
    const interval = setInterval(launch, LAUNCH_INTERVAL);

    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: COUNT }).map((_, i) => {
        const isLaunching = launching.has(i);
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo mare Nesco.svg"
              alt=""
              width={80}
              height={80}
              className={isLaunching ? "launching" : undefined}
              style={{
                "--base-opacity": baseOpacities.current[i],
                width: 80,
                height: 80,
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

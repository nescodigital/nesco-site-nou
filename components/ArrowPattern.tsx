"use client";
import { useEffect, useState } from "react";

const COLS  = 8;
const ROWS  = 8;
const COUNT = COLS * ROWS; // 64

export function ArrowPattern() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const schedule = () => {
      // Pick a random arrow and pulse it
      const idx = Math.floor(Math.random() * COUNT);
      setActiveIndex(idx);

      // After 2 s start fading back (transition handles the smooth fade)
      const resetTimer = setTimeout(() => setActiveIndex(null), 2000);

      return resetTimer;
    };

    // First pulse after a short initial delay
    const first = setTimeout(schedule, 600);

    // Then repeat every 3 s
    const interval = setInterval(schedule, 3000);

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
      {Array.from({ length: COUNT }).map((_, i) => (
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
            style={{
              width: 80,
              height: 80,
              opacity: activeIndex === i ? 0.18 : 0.04,
              transition: "opacity 0.5s ease-in-out",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  columns?: number;
}

// Parse a formatted stat string into numeric target + prefix + suffix
// e.g. "+15 ani" → { prefix: "+", target: 15, suffix: " ani" }
// e.g. "+€36M"   → { prefix: "+€", target: 36, suffix: "M" }
// e.g. "+23,000" → { prefix: "+", target: 23000, suffix: ",000" }
function parseStat(value: string): { prefix: string; target: number; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d[\d,.]*)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value };
  const prefix = match[1];
  const rawNum = match[2].replace(/[,.]/g, "");
  const target = parseInt(rawNum, 10);
  const suffix = match[3];
  return { prefix, target, suffix };
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function StatsCounter({ stats, columns = 3 }: StatsCounterProps) {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  // Use a ref so the IntersectionObserver closure always sees the latest value
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          setAnimated(true);
          observer.disconnect();

          const duration = 2000;
          const start = performance.now();
          const targets = stats.map((s) => parseStat(s.value).target);

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOut(progress);
            setCounts(targets.map((t) => Math.round(eased * t)));
            if (progress < 1) {
              rafRef.current = requestAnimationFrame(tick);
            }
          }

          rafRef.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      // Only cancel if not yet started, don't kill an in-progress animation
      if (!animatedRef.current && rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gridCols =
    columns === 4
      ? "grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "grid-cols-2"
      : "grid-cols-3";

  return (
    <div ref={ref} className={`grid ${gridCols} gap-3`} style={{ marginTop: "2rem" }}>
      {stats.map((s, i) => {
        const { prefix, target, suffix } = parseStat(s.value);
        const ratio = target > 0 ? counts[i] / target : 1;
        const scaled = Math.round(ratio * target);

        const separatorMatch = s.value.match(/\d([,.])\d{3}/);
        let display: string;
        if (separatorMatch && scaled >= 1000) {
          const sep = separatorMatch[1];
          display = `${prefix}${Math.floor(scaled / 1000)}${sep}${String(scaled % 1000).padStart(3, "0")}${suffix}`;
        } else {
          display = `${prefix}${scaled}${suffix}`;
        }

        return (
          <div
            key={s.label}
            style={{
              padding: "16px 20px",
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px",
              transition: "border-color 0.2s ease",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.14)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
            }}
          >
            <div
              className="font-black tabular-nums whitespace-nowrap"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", color: "#ffffff", letterSpacing: "-0.02em" }}
            >
              {animated ? display : s.value}
            </div>
            <div
              style={{
                fontSize: "0.6875rem",
                color: "rgba(255,255,255,0.3)",
                marginTop: "4px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 500,
              }}
            >
              {s.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

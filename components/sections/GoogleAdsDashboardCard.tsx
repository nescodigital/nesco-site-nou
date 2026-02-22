"use client";
import { useEffect, useState } from "react";

type Locale = "ro" | "en" | "de";

const T = {
  ro: {
    title: "Google Ads — Campanie",
    date:  "Septembrie 2025",
    conv:  "Conversii",
    cpa:   "CPA",
    budget: "Buget folosit",
    status: "ACTIV — Search + Shopping",
    badge1: "+200% conversii în 3 luni",
    badge2: "E-commerce, România",
  },
  en: {
    title:  "Google Ads — Campaign",
    date:   "September 2025",
    conv:   "Conversions",
    cpa:    "CPA",
    budget: "Budget used",
    status: "ACTIVE — Search + Shopping",
    badge1: "+200% conversions in 3 months",
    badge2: "E-commerce, Romania",
  },
  de: {
    title:  "Google Ads — Kampagne",
    date:   "September 2025",
    conv:   "Conversionen",
    cpa:    "CPA",
    budget: "Budget genutzt",
    status: "AKTIV — Search + Shopping",
    badge1: "+200% Conversionen in 3 Monaten",
    badge2: "E-Commerce, Rumänien",
  },
};

interface Props { locale?: Locale }

export function GoogleAdsDashboardCard({ locale = "ro" }: Props) {
  const tr = T[locale];
  const [roas, setRoas] = useState(0);
  const [conv, setConv] = useState(0);
  const [cpa, setCpa]   = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const interval = 1600 / steps;
    let step = 0;
    const t = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setRoas(parseFloat((5.2 * eased).toFixed(1)));
      setConv(Math.round(847 * eased));
      setCpa(Math.round(38 * eased));
      if (step >= steps) clearInterval(t);
    }, interval);
    return () => clearInterval(t);
  }, [started]);

  return (
    <>
      <style>{`
        @keyframes floatMain {
          0%, 100% { transform: rotate(3deg) translateY(0px); }
          50%       { transform: rotate(3deg) translateY(-10px); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: rotate(-2deg) translateY(0px); }
          50%       { transform: rotate(-2deg) translateY(-7px); }
        }
      `}</style>

      <div style={{ position: "relative", padding: "20px 20px 80px 10px" }}>
        {/* ── Main dashboard card ── */}
        <div
          style={{
            background: "#111111",
            border: "1px solid rgba(86,219,132,0.2)",
            borderRadius: "16px",
            padding: "24px 28px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.65), 0 0 48px rgba(86,219,132,0.07)",
            animation: "floatMain 6s ease-in-out infinite",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#56db84", boxShadow: "0 0 6px #56db84" }} />
            <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
              {tr.title}
            </span>
          </div>
          <p style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.28)", marginBottom: "20px", paddingLeft: "16px" }}>
            {tr.date}
          </p>

          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "18px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "13px", marginBottom: "18px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", width: "90px", flexShrink: 0 }}>ROAS</span>
              <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#ffffff", fontVariantNumeric: "tabular-nums", flex: 1 }}>
                {roas.toFixed(1)}x
              </span>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#56db84", background: "rgba(86,219,132,0.1)", padding: "2px 9px", borderRadius: "100px", flexShrink: 0 }}>
                ↑ 23%
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", width: "90px", flexShrink: 0 }}>{tr.conv}</span>
              <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#ffffff", fontVariantNumeric: "tabular-nums", flex: 1 }}>
                {conv.toLocaleString("ro-RO")}
              </span>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#56db84", background: "rgba(86,219,132,0.1)", padding: "2px 9px", borderRadius: "100px", flexShrink: 0 }}>
                ↑ 31%
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", width: "90px", flexShrink: 0 }}>{tr.cpa}</span>
              <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#ffffff", fontVariantNumeric: "tabular-nums", flex: 1 }}>
                {cpa} lei
              </span>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#ef4444", background: "rgba(239,68,68,0.09)", padding: "2px 9px", borderRadius: "100px", flexShrink: 0 }}>
                ↓ 18%
              </span>
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "16px" }} />

          <div style={{ marginBottom: "14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "7px" }}>
              <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.38)" }}>{tr.budget}</span>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#ffffff" }}>94%</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "4px", height: "6px", overflow: "hidden" }}>
              <div
                style={{
                  width: started ? "94%" : "0%",
                  height: "100%",
                  background: "linear-gradient(90deg, #56db84, rgba(86,219,132,0.45))",
                  borderRadius: "4px",
                  transition: "width 1.6s ease",
                }}
              />
            </div>
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(86,219,132,0.05)", border: "1px solid rgba(86,219,132,0.12)", borderRadius: "100px", padding: "4px 10px" }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#56db84" }} />
            <span style={{ fontSize: "0.625rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>
              {tr.status}
            </span>
          </div>
        </div>

        {/* ── Second card ── */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            right: 0,
            background: "#0d0d0d",
            border: "1px solid rgba(86,219,132,0.15)",
            borderRadius: "12px",
            padding: "14px 20px",
            boxShadow: "0 12px 36px rgba(0,0,0,0.55)",
            animation: "floatBadge 7s ease-in-out infinite 1.2s",
          }}
        >
          <div style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#56db84", letterSpacing: "-0.02em", marginBottom: "3px" }}>
            {tr.badge1}
          </div>
          <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.3)" }}>
            {tr.badge2}
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import { useState, useEffect } from "react";

interface AdsDashboardMockupProps {
  locale: "ro" | "en" | "de";
}

const PLATFORMS = [
  { name: "Google Ads",    dot: "#4285F4", metric: "ROAS",  baseVal: 5.2,  unit: "x",    change: "+12%", isUp: true },
  { name: "Facebook Ads",  dot: "#1877F2", metric: "CPL",   baseVal: 24,   unit: " lei", change: "-18%", isUp: false },
  { name: "Instagram Ads", dot: "#d6249f", metric: "ROAS",  baseVal: 4.8,  unit: "x",    change: "+23%", isUp: true },
  { name: "TikTok Ads",    dot: "#ffffff", metric: "CPM",   baseVal: 8,    unit: " lei", change: "-31%", isUp: false },
  { name: "LinkedIn Ads",  dot: "#0A66C2", metric: "CPL",   baseVal: 85,   unit: "\u20ac",   change: "-40%", isUp: false },
];

const CARD2 = {
  ro: { line1: "36M\u20ac+ bugete gestionate", line2: "15 ani \u00b7 23.000+ campanii" },
  en: { line1: "36M\u20ac+ budgets managed",   line2: "15 years \u00b7 23,000+ campaigns" },
  de: { line1: "36M\u20ac+ verwaltete Budgets", line2: "15 Jahre \u00b7 23.000+ Kampagnen" },
};

const BOTTOM_TEXT = {
  ro: "Toate campaniile active",
  en: "All campaigns active",
  de: "Alle Kampagnen aktiv",
};

const BUDGET_LABEL = {
  ro: "Buget lunar utilizat: 94%",
  en: "Monthly budget used: 94%",
  de: "Monatliches Budget genutzt: 94%",
};

export function AdsDashboardMockup({ locale }: AdsDashboardMockupProps) {
  const [values, setValues] = useState(PLATFORMS.map(p => p.baseVal));
  const [budgetWidth, setBudgetWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setBudgetWidth(94), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(prev =>
        prev.map((val, i) => {
          const base = PLATFORMS[i].baseVal;
          const fluctuation = (Math.random() - 0.5) * 0.08 * base;
          const newVal = base + fluctuation;
          return PLATFORMS[i].unit === "x" ? Math.round(newVal * 10) / 10 : Math.round(newVal);
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const c2 = CARD2[locale];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 420, margin: "0 auto" }}>
      <style>{`
        @keyframes adsPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%     { opacity:0.5; transform:scale(1.2); }
        }
        @keyframes adsCardFloat {
          0%,100% { transform: rotate(-2deg) translateY(0px); }
          50%     { transform: rotate(-2deg) translateY(-6px); }
        }
        @keyframes adsParticle {
          0%   { transform: translateY(0) translateX(0); opacity:0; }
          10%  { opacity:0.6; }
          90%  { opacity:0.3; }
          100% { transform: translateY(-100px) translateX(15px); opacity:0; }
        }
      `}</style>

      {[
        { left: "8%",  top: "50%", dur: 5,   delay: 0 },
        { left: "20%", top: "65%", dur: 7,   delay: 1.5 },
        { left: "75%", top: "60%", dur: 6,   delay: 0.8 },
        { left: "88%", top: "55%", dur: 8,   delay: 2 },
        { left: "50%", top: "70%", dur: 5.5, delay: 3 },
        { left: "35%", top: "75%", dur: 7,   delay: 1 },
      ].map((p, i) => (
        <div key={i} style={{
          position: "absolute", left: p.left, top: p.top,
          width: 3, height: 3, borderRadius: "50%", background: "#56db84",
          animation: `adsParticle ${p.dur}s ease-in-out ${p.delay}s infinite`,
          pointerEvents: "none", zIndex: 0,
        }} />
      ))}

      {/* Main dashboard card */}
      <div style={{
        position: "relative", zIndex: 1,
        background: "#111111",
        border: "1px solid rgba(86,219,132,0.2)",
        borderRadius: 20,
        boxShadow: "0 0 40px rgba(86,219,132,0.06), 0 20px 60px rgba(0,0,0,0.6)",
        transform: "rotate(2deg)",
        overflow: "hidden",
      }}>
        {/* Card header */}
        <div style={{ padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28ca41", display: "inline-block" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#56db84", display: "inline-block", animation: "adsPulse 2s ease-in-out infinite" }} />
            Ads Manager Live
          </div>
        </div>

        {/* Platform rows */}
        <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 2 }}>
          {PLATFORMS.map((p, i) => (
            <div key={p.name} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "9px 0",
              borderBottom: i < PLATFORMS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: p.dot, display: "inline-block", flexShrink: 0 }} />
                <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{p.name}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                <span style={{
                  fontSize: "0.875rem", fontWeight: 700, color: "#fff", fontVariantNumeric: "tabular-nums",
                  minWidth: 52, textAlign: "right",
                }}>
                  {p.metric}: {values[i]}{p.unit}
                </span>
                <span style={{
                  fontSize: "0.6875rem", fontWeight: 600,
                  color: "#56db84",
                  background: "rgba(86,219,132,0.1)",
                  borderRadius: 6,
                  padding: "2px 7px",
                  minWidth: 48,
                  textAlign: "center",
                }}>
                  {p.isUp ? "\u2191" : "\u2193"} {p.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Budget bar + status */}
        <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.4)" }}>{BUDGET_LABEL[locale]}</span>
          </div>
          <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 99, overflow: "hidden", marginBottom: 10 }}>
            <div style={{
              height: "100%", background: "linear-gradient(90deg, #56db84, #22c55e)",
              borderRadius: 99,
              width: `${budgetWidth}%`,
              transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
            }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.6875rem", color: "#56db84" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#56db84", display: "inline-block", animation: "adsPulse 2s ease-in-out infinite" }} />
            {BOTTOM_TEXT[locale]}
          </div>
        </div>
      </div>

      {/* Floating second card */}
      <div style={{
        position: "absolute", bottom: -20, right: -12, zIndex: 2,
        background: "#0d0d0d",
        border: "1px solid rgba(86,219,132,0.2)",
        borderRadius: 14, padding: "12px 16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
        animation: "adsCardFloat 4s ease-in-out infinite",
        minWidth: 190,
      }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#56db84", marginBottom: 4 }}>{c2.line1}</div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{c2.line2}</div>
      </div>
    </div>
  );
}

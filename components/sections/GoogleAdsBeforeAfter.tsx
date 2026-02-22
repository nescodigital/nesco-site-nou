"use client";
import { useEffect, useRef, useState } from "react";

interface Metric {
  label: string;
  display?: string;
  numeric?: { target: number; decimals?: number; suffix?: string };
}

const BEFORE: Metric[] = [
  { label: "ROAS",            display: "1.8x" },
  { label: "CPA",             display: "180 lei" },
  { label: "Conversii/lună",  display: "120" },
  { label: "Buget irosit",    display: "~40%" },
  { label: "Strategie",       display: "lipsă" },
  { label: "Raportare",       display: "Excel lunar" },
];

const AFTER: Metric[] = [
  { label: "ROAS",            numeric: { target: 5.2, decimals: 1, suffix: "x" } },
  { label: "CPA",             numeric: { target: 38,  suffix: " lei" } },
  { label: "Conversii/lună",  numeric: { target: 847 } },
  { label: "Buget irosit",    display: "<5%" },
  { label: "Strategie",       display: "full-funnel" },
  { label: "Raportare",       display: "dashboard live" },
];

export function GoogleAdsBeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [roas, setRoas]   = useState(0);
  const [cpa, setCpa]     = useState(0);
  const [conv, setConv]   = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const steps = 60;
    const ms = 1600 / steps;
    let s = 0;
    const t = setInterval(() => {
      s++;
      const e = 1 - Math.pow(1 - s / steps, 3);
      setRoas(parseFloat((5.2 * e).toFixed(1)));
      setCpa(Math.round(38 * e));
      setConv(Math.round(847 * e));
      if (s >= steps) clearInterval(t);
    }, ms);
    return () => clearInterval(t);
  }, [visible]);

  function afterDisplay(m: Metric): string {
    if (!m.numeric) return m.display ?? "";
    if (m.label === "ROAS")           return `${roas.toFixed(1)}x`;
    if (m.label === "CPA")            return `${cpa} lei`;
    if (m.label === "Conversii/lună") return conv.toLocaleString("ro-RO");
    return m.display ?? "";
  }

  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div className="page-container" ref={ref}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="badge mb-6">Înainte &amp; După</span>
          <h2
            className="font-black text-white"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}
          >
            Rezultate reale — Înainte și după Nesco Digital
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ maxWidth: "820px", margin: "0 auto" }}>
          {/* ÎNAINTE */}
          <div
            style={{
              background: "#0a0a0a",
              border: "1px solid rgba(239,68,68,0.18)",
              borderTop: "3px solid rgba(239,68,68,0.5)",
              borderRadius: "16px",
              padding: "28px 32px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#ef4444", letterSpacing: "0.05em", textTransform: "uppercase" }}>Înainte</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {BEFORE.map((m) => (
                <div key={m.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(255,255,255,0.04)", paddingBottom: "14px" }}>
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)" }}>{m.label}</span>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#f87171", fontVariantNumeric: "tabular-nums" }}>{m.display}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DUPĂ */}
          <div
            style={{
              background: "#0a0a0a",
              border: "1px solid rgba(86,219,132,0.18)",
              borderTop: "3px solid #56db84",
              borderRadius: "16px",
              padding: "28px 32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(86,219,132,0.05) 0%, transparent 70%)" }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#56db84", boxShadow: "0 0 6px #56db84" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#56db84", letterSpacing: "0.05em", textTransform: "uppercase" }}>După Nesco</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {AFTER.map((m) => (
                  <div key={m.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(255,255,255,0.04)", paddingBottom: "14px" }}>
                    <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)" }}>{m.label}</span>
                    <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#56db84", fontVariantNumeric: "tabular-nums" }}>{afterDisplay(m)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Source */}
        <p style={{ textAlign: "center", marginTop: "24px", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}>
          E-commerce, România — 6 luni
        </p>
      </div>
    </section>
  );
}

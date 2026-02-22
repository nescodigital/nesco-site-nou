"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const BENCHMARKS: Record<string, number> = {
  ecommerce:  5.0,
  educatie:   4.0,
  b2b:        3.0,
  altul:      3.5,
};

const INDUSTRY_LABELS: Record<string, string> = {
  ecommerce: "E-commerce",
  educatie:  "Educație Online",
  b2b:       "B2B Servicii",
  altul:     "Alt sector",
};

function estimateRoas(industry: string, currentRoas: number): number {
  const bench = BENCHMARKS[industry];
  if (currentRoas === 0) return bench;
  if (currentRoas < bench * 0.7) return bench;
  if (currentRoas < bench)       return bench * 1.1;
  return parseFloat(Math.min(currentRoas * 1.35, bench * 1.4).toFixed(1));
}

function fmt(n: number): string {
  return n >= 1000
    ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`
    : n.toLocaleString("ro-RO");
}

export function GoogleAdsCalculator() {
  const [budget,   setBudget]   = useState(2000);
  const [industry, setIndustry] = useState("ecommerce");
  const [curRoas,  setCurRoas]  = useState(0);

  const estRoas    = useMemo(() => estimateRoas(industry, curRoas), [industry, curRoas]);
  const revenue    = useMemo(() => Math.round(budget * estRoas), [budget, estRoas]);
  const savings    = useMemo(() => Math.max(0, 2800 - Math.round(budget * 0.12)), [budget]);

  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <style>{`
        .calc-slider { -webkit-appearance:none; appearance:none; width:100%; height:5px; background:rgba(255,255,255,0.08); border-radius:4px; outline:none; cursor:pointer; }
        .calc-slider::-webkit-slider-thumb { -webkit-appearance:none; width:20px; height:20px; border-radius:50%; background:#56db84; border:2px solid #050505; box-shadow:0 0 8px rgba(86,219,132,0.45); cursor:pointer; }
        .calc-slider::-moz-range-thumb { width:20px; height:20px; border-radius:50%; background:#56db84; border:2px solid #050505; box-shadow:0 0 8px rgba(86,219,132,0.45); cursor:pointer; }
        .calc-select { background:#111; border:1px solid rgba(255,255,255,0.1); color:#fff; padding:10px 14px; border-radius:10px; font-size:0.875rem; outline:none; width:100%; cursor:pointer; }
        .calc-select option { background:#111; }
      `}</style>

      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="badge mb-6">Calculator</span>
          <h2
            className="font-black text-white"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}
          >
            Estimează-ți potențialul cu Google Ads
          </h2>
        </div>

        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            background: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "20px",
            padding: "40px 40px 36px",
          }}
        >
          {/* Inputs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", marginBottom: "40px" }}>

            {/* Budget */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
                  Buget lunar ads
                </label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#ffffff" }}>
                  {budget.toLocaleString("ro-RO")}€
                </span>
              </div>
              <input
                type="range"
                className="calc-slider"
                min={500} max={50000} step={100}
                value={budget}
                onChange={e => setBudget(Number(e.target.value))}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>500€</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>50.000€</span>
              </div>
            </div>

            {/* Industry */}
            <div>
              <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: "12px" }}>
                Industrie
              </label>
              <select
                className="calc-select"
                value={industry}
                onChange={e => setIndustry(e.target.value)}
              >
                {Object.entries(INDUSTRY_LABELS).map(([val, label]) => (
                  <option key={val} value={val}>{label}</option>
                ))}
              </select>
            </div>

            {/* Current ROAS */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
                  ROAS actual
                </label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#ffffff" }}>
                  {curRoas === 0 ? "Nu rulez" : `${curRoas.toFixed(1)}x`}
                </span>
              </div>
              <input
                type="range"
                className="calc-slider"
                min={0} max={10} step={0.1}
                value={curRoas}
                onChange={e => setCurRoas(Number(e.target.value))}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>Nu rulez</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>10x</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />

          {/* Output */}
          <div style={{ background: "rgba(86,219,132,0.04)", border: "1px solid rgba(86,219,132,0.1)", borderRadius: "14px", padding: "28px 28px 24px", marginBottom: "28px" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(86,219,132,0.6)", marginBottom: "20px" }}>
              Estimare după 90 de zile
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" style={{ marginBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#56db84", letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {estRoas.toFixed(1)}x
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>ROAS estimat</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {fmt(revenue)}€
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Revenue estimat/lună</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: savings > 0 ? "#60a5fa" : "rgba(255,255,255,0.4)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {savings > 0 ? `~${savings.toLocaleString("ro-RO")}€` : "—"}
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Economii vs. angajat intern</div>
              </div>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              La un buget de{" "}
              <strong style={{ color: "#fff" }}>{budget.toLocaleString("ro-RO")}€</strong> și ROAS estimat de{" "}
              <strong style={{ color: "#56db84" }}>{estRoas.toFixed(1)}x</strong>, poți genera{" "}
              <strong style={{ color: "#fff" }}>~{fmt(revenue)}€</strong> revenue lunar din Google Ads.
            </p>
          </div>

          {/* CTA */}
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
            Vrei o estimare reală pentru business-ul tău?{" "}
            <Link href="/contact/" style={{ color: "#56db84", fontWeight: 600, textDecoration: "none" }}>
              Vorbește cu un specialist →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

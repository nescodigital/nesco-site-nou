"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const BENCHMARKS: Record<string, { cpl: number; cvr: number; reachMult: number }> = {
  ecommerce: { cpl: 25,  cvr: 0.025, reachMult: 1500 },
  lead:      { cpl: 40,  cvr: 0.015, reachMult: 1200 },
  brand:     { cpl: 15,  cvr: 0.01,  reachMult: 2000 },
};

const AUDIENCE_MULT: Record<string, number> = {
  ro: 1, eu: 2.5, global: 5 };

function fmt(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : n.toLocaleString("ro-RO");
}

export function MetaAdsCalculator() {
  const [budget, setBudget]     = useState(1000);
  const [industry, setIndustry] = useState("ecommerce");
  const [audience, setAudience] = useState("ro");

  const bench    = useMemo(() => BENCHMARKS[industry], [industry]);
  const audMult  = useMemo(() => AUDIENCE_MULT[audience], [audience]);
  const reach    = useMemo(() => Math.round(budget * bench.reachMult / audMult), [budget, bench, audMult]);
  const conv     = useMemo(() => Math.round(reach * bench.cvr), [reach, bench]);
  const cpl      = useMemo(() => Math.round(budget / Math.max(conv, 1)), [budget, conv]);

  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <style>{`.calc-slider{-webkit-appearance:none;appearance:none;width:100%;height:5px;background:rgba(255,255,255,0.08);border-radius:4px;outline:none;cursor:pointer}.calc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;box-shadow:0 0 8px rgba(86,219,132,0.45);cursor:pointer}.calc-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;cursor:pointer}.calc-select{background:#111;border:1px solid rgba(255,255,255,0.1);color:#fff;padding:10px 14px;border-radius:10px;font-size:0.875rem;outline:none;width:100%;cursor:pointer}.calc-select option{background:#111}`}</style>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="badge mb-6">Calculator</span>
          <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Estimează reach-ul și conversiile cu Meta Ads</h2>
        </div>
        <div style={{ maxWidth: "760px", margin: "0 auto", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", marginBottom: "40px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Buget lunar ads</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{budget.toLocaleString("ro-RO")}€</span>
              </div>
              <input type="range" className="calc-slider" min={300} max={20000} step={100} value={budget} onChange={e => setBudget(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>300€</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>20.000€</span>
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: "12px" }}>Tip business</label>
              <select className="calc-select" value={industry} onChange={e => setIndustry(e.target.value)}>
                <option value="ecommerce">E-commerce</option>
                <option value="lead">Lead Generation</option>
                <option value="brand">Brand Awareness</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: "12px" }}>Audiență țintă</label>
              <select className="calc-select" value={audience} onChange={e => setAudience(e.target.value)}>
                <option value="ro">România</option>
                <option value="eu">Europa</option>
                <option value="global">Global</option>
              </select>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />
          <div style={{ background: "rgba(86,219,132,0.04)", border: "1px solid rgba(86,219,132,0.1)", borderRadius: "14px", padding: "28px", marginBottom: "28px" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(86,219,132,0.6)", marginBottom: "20px" }}>Estimare lunară</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" style={{ marginBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: "#56db84", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(reach)}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Reach estimat</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(conv)}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Conversii estimate</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: "#60a5fa", letterSpacing: "-0.03em", lineHeight: 1 }}>{cpl} lei</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>CPL / CPA estimat</div>
              </div>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              La un buget de <strong style={{ color: "#fff" }}>{budget.toLocaleString("ro-RO")}€</strong> poți ajunge la <strong style={{ color: "#56db84" }}>~{fmt(reach)}</strong> persoane și genera <strong style={{ color: "#fff" }}>~{fmt(conv)}</strong> conversii.
            </p>
          </div>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
            Vrei o estimare reală pentru business-ul tău?{" "}
            <Link href="/contact/" style={{ color: "#56db84", fontWeight: 600, textDecoration: "none" }}>Vorbește cu un specialist →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

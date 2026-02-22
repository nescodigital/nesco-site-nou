"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const BENCHMARKS: Record<string, { leadRate: number; reachMult: number }> = {
  saas:     { leadRate: 0.015, reachMult: 5 },
  it:       { leadRate: 0.018, reachMult: 5.5 },
  consult:  { leadRate: 0.020, reachMult: 6 },
  mfg:      { leadRate: 0.012, reachMult: 4.5 },
  realestate:{ leadRate: 0.022, reachMult: 5 },
  altul:    { leadRate: 0.015, reachMult: 5 },
};

function fmt(n: number, currency = false): string {
  if (currency) return n >= 1000 ? `${Math.round(n / 1000)}k€` : `${n}€`;
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n.toString();
}

export function LinkedInCalculator() {
  const [budget,   setBudget]   = useState(2000);
  const [clientVal, setClientVal] = useState(10000);
  const [industry, setIndustry] = useState("saas");

  const bench     = useMemo(() => BENCHMARKS[industry], [industry]);
  const decisions = useMemo(() => Math.round(budget * bench.reachMult), [budget, bench]);
  const leads     = useMemo(() => Math.round(decisions * bench.leadRate), [decisions, bench]);
  const pipeline  = useMemo(() => Math.round(leads * clientVal * 0.20), [leads, clientVal]);
  const roi       = useMemo(() => Math.round((pipeline / budget) * 100), [pipeline, budget]);

  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <style>{`.calc-slider{-webkit-appearance:none;appearance:none;width:100%;height:5px;background:rgba(255,255,255,0.08);border-radius:4px;outline:none;cursor:pointer}.calc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;box-shadow:0 0 8px rgba(86,219,132,0.45);cursor:pointer}.calc-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;cursor:pointer}.calc-select{background:#111;border:1px solid rgba(255,255,255,0.1);color:#fff;padding:10px 14px;border-radius:10px;font-size:0.875rem;outline:none;width:100%;cursor:pointer}.calc-select option{background:#111}`}</style>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="badge mb-6">Calculator B2B</span>
          <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Calculează potențialul tău de lead-uri B2B</h2>
        </div>
        <div style={{ maxWidth: "760px", margin: "0 auto", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", marginBottom: "40px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Buget lunar</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{budget.toLocaleString("ro-RO")}€</span>
              </div>
              <input type="range" className="calc-slider" min={800} max={15000} step={100} value={budget} onChange={e => setBudget(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>800€</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>15.000€</span>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Valoarea medie a unui client</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{clientVal.toLocaleString("ro-RO")}€</span>
              </div>
              <input type="range" className="calc-slider" min={1000} max={100000} step={1000} value={clientVal} onChange={e => setClientVal(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>1.000€</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>100.000€</span>
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: "12px" }}>Industrie țintă</label>
              <select className="calc-select" value={industry} onChange={e => setIndustry(e.target.value)}>
                <option value="saas">SaaS</option>
                <option value="it">IT Services</option>
                <option value="consult">Consultanță</option>
                <option value="mfg">Manufacturing</option>
                <option value="realestate">Real Estate B2B</option>
                <option value="altul">Altul</option>
              </select>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />
          <div style={{ background: "rgba(86,219,132,0.04)", border: "1px solid rgba(86,219,132,0.1)", borderRadius: "14px", padding: "28px", marginBottom: "28px" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(86,219,132,0.6)", marginBottom: "20px" }}>Estimare lunară</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5" style={{ marginBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "#0A66C2", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(decisions)}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Decidenți atinși</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "#56db84", letterSpacing: "-0.03em", lineHeight: 1 }}>{leads}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Lead-uri estimate</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(pipeline, true)}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Pipeline estimat</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "#fb923c", letterSpacing: "-0.03em", lineHeight: 1 }}>{roi}%</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>ROI estimat</div>
              </div>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              La <strong style={{ color: "#fff" }}>{budget.toLocaleString("ro-RO")}€/lună</strong> poți genera <strong style={{ color: "#56db84" }}>~{leads} lead-uri</strong> și un pipeline de <strong style={{ color: "#fff" }}>~{fmt(pipeline, true)}</strong>.
            </p>
          </div>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
            Vrei o analiză reală pentru business-ul tău?{" "}
            <Link href="/contact/" style={{ color: "#56db84", fontWeight: 600, textDecoration: "none" }}>Vorbește cu un specialist →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

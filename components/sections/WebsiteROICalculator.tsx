"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

export function WebsiteROICalculator() {
  const [visitors, setVisitors] = useState(3000);
  const [submissions, setSubmissions] = useState(5);
  const [dealValue, setDealValue] = useState(5000);

  const currentRate = useMemo(() => ((submissions / Math.max(visitors, 1)) * 100), [submissions, visitors]);
  const potentialLeads = useMemo(() => Math.round(visitors * 0.02), [visitors]);
  const additionalLeads = useMemo(() => Math.max(0, potentialLeads - submissions), [potentialLeads, submissions]);
  const additionalRevenue = useMemo(() => additionalLeads * dealValue, [additionalLeads, dealValue]);

  function fmt(n: number): string {
    return n >= 1000 ? `${(n / 1000).toFixed(0)}k` : n.toString();
  }

  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <style>{`.calc-slider{-webkit-appearance:none;appearance:none;width:100%;height:5px;background:rgba(255,255,255,0.08);border-radius:4px;outline:none;cursor:pointer}.calc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;box-shadow:0 0 8px rgba(86,219,132,0.45);cursor:pointer}.calc-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;cursor:pointer}`}</style>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="badge mb-6">Calculator ROI Website</span>
          <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Ce revenue generează (sau pierde) site-ul tău?</h2>
        </div>
        <div style={{ maxWidth: "760px", margin: "0 auto", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", marginBottom: "40px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Vizitatori lunari</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{visitors.toLocaleString("ro-RO")}</span>
              </div>
              <input type="range" className="calc-slider" min={100} max={20000} step={100} value={visitors} onChange={e => setVisitors(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>100</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>20.000</span>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Contacte primite/lună</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{submissions}</span>
              </div>
              <input type="range" className="calc-slider" min={0} max={100} step={1} value={submissions} onChange={e => setSubmissions(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>0</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>100</span>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Valoarea medie a unui client</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{dealValue.toLocaleString("ro-RO")}€</span>
              </div>
              <input type="range" className="calc-slider" min={500} max={50000} step={500} value={dealValue} onChange={e => setDealValue(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>500€</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>50.000€</span>
              </div>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />
          <div style={{ background: "rgba(86,219,132,0.04)", border: "1px solid rgba(86,219,132,0.1)", borderRadius: "14px", padding: "28px", marginBottom: "28px" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(86,219,132,0.6)", marginBottom: "20px" }}>Estimare lunară</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" style={{ marginBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: currentRate >= 2 ? "#56db84" : "#fb923c", letterSpacing: "-0.03em", lineHeight: 1 }}>{currentRate.toFixed(2)}%</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Rată conversie actuală</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: "#56db84", letterSpacing: "-0.03em", lineHeight: 1 }}>{potentialLeads}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Contacte potențiale la 2%</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: "#60a5fa", letterSpacing: "-0.03em", lineHeight: 1 }}>{additionalRevenue >= 1000 ? `${fmt(additionalRevenue)}€` : `${additionalRevenue}€`}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Revenue suplimentar/lună</div>
              </div>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              Cu rata actuală de <strong style={{ color: "#fff" }}>{currentRate.toFixed(2)}%</strong>, primești <strong style={{ color: "rgba(255,255,255,0.4)" }}>{submissions} contacte/lună</strong>. Un site optimizat la <strong style={{ color: "#56db84" }}>2%</strong> ar genera <strong style={{ color: "#56db84" }}>{potentialLeads} contacte</strong> — adică <strong style={{ color: "#60a5fa" }}>+{additionalRevenue >= 1000 ? `${fmt(additionalRevenue)}€` : `${additionalRevenue}€`}/lună</strong> revenue potențial.
            </p>
          </div>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
            Vrei un website care convertește mai mult?{" "}
            <Link href="/contact/" style={{ color: "#56db84", fontWeight: 600, textDecoration: "none" }}>Vorbește cu un specialist →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

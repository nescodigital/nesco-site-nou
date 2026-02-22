"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

export function LeadGenCalculator() {
  const [convRate, setConvRate] = useState(1.0);
  const [visitors, setVisitors] = useState(5000);
  const AVG_DEAL = 500;
  const TARGET_RATE = 3.0;

  const currentLeads = useMemo(() => Math.round(visitors * convRate / 100), [visitors, convRate]);
  const potentialLeads = useMemo(() => Math.round(visitors * TARGET_RATE / 100), [visitors]);
  const lostLeads = useMemo(() => Math.max(0, potentialLeads - currentLeads), [potentialLeads, currentLeads]);
  const lostRevenue = useMemo(() => lostLeads * AVG_DEAL, [lostLeads]);

  function fmt(n: number): string {
    return n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : n.toString();
  }

  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <style>{`.calc-slider{-webkit-appearance:none;appearance:none;width:100%;height:5px;background:rgba(255,255,255,0.08);border-radius:4px;outline:none;cursor:pointer}.calc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;box-shadow:0 0 8px rgba(86,219,132,0.45);cursor:pointer}.calc-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;cursor:pointer}`}</style>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="badge mb-6">Calculator Lead Gen</span>
          <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Câte lead-uri pierzi lunar din cauza ratei de conversie?</h2>
        </div>
        <div style={{ maxWidth: "760px", margin: "0 auto", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", marginBottom: "40px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Vizitatori lunari pe site</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{visitors.toLocaleString("ro-RO")}</span>
              </div>
              <input type="range" className="calc-slider" min={100} max={50000} step={100} value={visitors} onChange={e => setVisitors(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>100</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>50.000</span>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Rata de conversie actuală</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{convRate.toFixed(1)}%</span>
              </div>
              <input type="range" className="calc-slider" min={0.1} max={5} step={0.1} value={convRate} onChange={e => setConvRate(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>0.1%</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>5%</span>
              </div>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />
          <div style={{ background: "rgba(86,219,132,0.04)", border: "1px solid rgba(86,219,132,0.1)", borderRadius: "14px", padding: "28px", marginBottom: "28px" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(86,219,132,0.6)", marginBottom: "20px" }}>Situația ta lunară</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5" style={{ marginBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "rgba(255,255,255,0.4)", letterSpacing: "-0.03em", lineHeight: 1 }}>{currentLeads}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Lead-uri actuale</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "#56db84", letterSpacing: "-0.03em", lineHeight: 1 }}>{potentialLeads}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Potențial la 3%</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "#fb923c", letterSpacing: "-0.03em", lineHeight: 1 }}>{lostLeads}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Lead-uri pierdute</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "#60a5fa", letterSpacing: "-0.03em", lineHeight: 1 }}>{lostRevenue >= 1000 ? `${fmt(lostRevenue)}€` : `${lostRevenue}€`}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Revenue pierdut/lună</div>
              </div>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              Cu <strong style={{ color: "#fff" }}>{visitors.toLocaleString("ro-RO")} vizitatori/lună</strong> și o rată de conversie de <strong style={{ color: "#fff" }}>{convRate.toFixed(1)}%</strong>, generezi <strong style={{ color: "rgba(255,255,255,0.4)" }}>{currentLeads} lead-uri</strong>. La o rată de <strong style={{ color: "#56db84" }}>3% (benchmark industrie)</strong>, ai putea genera <strong style={{ color: "#56db84" }}>{potentialLeads} lead-uri</strong> — o diferență de <strong style={{ color: "#fb923c" }}>{lostLeads} lead-uri = ~{lostRevenue >= 1000 ? `${fmt(lostRevenue)}€` : `${lostRevenue}€`} revenue lunar</strong>.
            </p>
          </div>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
            Vrei să-ți optimizezi rata de conversie?{" "}
            <Link href="/contact/" style={{ color: "#56db84", fontWeight: 600, textDecoration: "none" }}>Vorbește cu un specialist →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

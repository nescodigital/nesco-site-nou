"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const BENCHMARKS: Record<string, { cpo: number; reachMult: number }> = {
  fashion:  { cpo: 11,  reachMult: 3200 },
  beauty:   { cpo: 15,  reachMult: 2800 },
  food:     { cpo: 8,   reachMult: 3600 },
  educatie: { cpo: 22,  reachMult: 2400 },
  altul:    { cpo: 14,  reachMult: 2800 },
};

function fmt(n: number): string {
  return n >= 1000000 ? `${(n / 1000000).toFixed(1)}M` : n >= 1000 ? `${(n / 1000).toFixed(0)}k` : n.toLocaleString("ro-RO");
}

export function TikTokAdsCalculator() {
  const [budget, setBudget]     = useState(1000);
  const [industry, setIndustry] = useState("fashion");
  const [hasVideo, setHasVideo] = useState("da");

  const videoMult = hasVideo === "da" ? 1 : 0.65;
  const bench     = useMemo(() => BENCHMARKS[industry], [industry]);
  const views     = useMemo(() => Math.round(budget * bench.reachMult * videoMult), [budget, bench, videoMult]);
  const orders    = useMemo(() => Math.round(budget / bench.cpo * videoMult), [budget, bench, videoMult]);
  const cpo       = useMemo(() => Math.round(bench.cpo / videoMult), [bench, videoMult]);

  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <style>{`.calc-slider{-webkit-appearance:none;appearance:none;width:100%;height:5px;background:rgba(255,255,255,0.08);border-radius:4px;outline:none;cursor:pointer}.calc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;box-shadow:0 0 8px rgba(86,219,132,0.45);cursor:pointer}.calc-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;cursor:pointer}.calc-select{background:#111;border:1px solid rgba(255,255,255,0.1);color:#fff;padding:10px 14px;border-radius:10px;font-size:0.875rem;outline:none;width:100%;cursor:pointer}.calc-select option{background:#111}`}</style>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="badge mb-6">Calculator</span>
          <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Estimează costul per comandă pe TikTok</h2>
        </div>
        <div style={{ maxWidth: "760px", margin: "0 auto", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", marginBottom: "40px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Buget lunar</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{budget.toLocaleString("ro-RO")}€</span>
              </div>
              <input type="range" className="calc-slider" min={300} max={20000} step={100} value={budget} onChange={e => setBudget(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>300€</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>20.000€</span>
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: "12px" }}>Industrie</label>
              <select className="calc-select" value={industry} onChange={e => setIndustry(e.target.value)}>
                <option value="fashion">Fashion &amp; Lifestyle</option>
                <option value="beauty">Beauty &amp; Cosmetice</option>
                <option value="food">Food &amp; Beverage</option>
                <option value="educatie">Educație</option>
                <option value="altul">Altul</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: "12px" }}>Ai conținut video disponibil?</label>
              <select className="calc-select" value={hasVideo} onChange={e => setHasVideo(e.target.value)}>
                <option value="da">Da am videoclipuri</option>
                <option value="nu">Nu pornim de la zero</option>
              </select>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />
          <div style={{ background: "rgba(86,219,132,0.04)", border: "1px solid rgba(86,219,132,0.1)", borderRadius: "14px", padding: "28px", marginBottom: "28px" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(86,219,132,0.6)", marginBottom: "20px" }}>Estimare lunară</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" style={{ marginBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: "#56db84", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(views)}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Vizualizări estimate</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(orders)}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Comenzi estimate</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: "#fb923c", letterSpacing: "-0.03em", lineHeight: 1 }}>{cpo}€</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Cost per comandă est.</div>
              </div>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              La <strong style={{ color: "#fff" }}>{budget.toLocaleString("ro-RO")}€/lună</strong> poți genera <strong style={{ color: "#56db84" }}>~{fmt(views)}</strong> vizualizări și <strong style={{ color: "#fff" }}>~{fmt(orders)}</strong> comenzi la ~<strong style={{ color: "#fb923c" }}>{cpo}€</strong>/comandă.
            </p>
          </div>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
            Vrei o estimare reală?{" "}
            <Link href="/contact/" style={{ color: "#56db84", fontWeight: 600, textDecoration: "none" }}>Vorbește cu un specialist →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

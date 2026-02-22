"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

export function EcommerceCalculator() {
  const [visitors, setVisitors] = useState(10000);
  const [convRate, setConvRate] = useState(1.0);
  const [aov, setAov] = useState(80);

  const orders = useMemo(() => Math.round(visitors * convRate / 100), [visitors, convRate]);
  const revenue = useMemo(() => orders * aov, [orders, aov]);
  const potentialOrders = useMemo(() => Math.round(visitors * 0.02), [visitors]);
  const potentialRevenue = useMemo(() => potentialOrders * aov, [potentialOrders, aov]);
  const uplift = useMemo(() => Math.max(0, potentialRevenue - revenue), [potentialRevenue, revenue]);

  function fmt(n: number): string {
    return n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : n.toString();
  }

  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <style>{`.calc-slider{-webkit-appearance:none;appearance:none;width:100%;height:5px;background:rgba(255,255,255,0.08);border-radius:4px;outline:none;cursor:pointer}.calc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;box-shadow:0 0 8px rgba(86,219,132,0.45);cursor:pointer}.calc-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;cursor:pointer}`}</style>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="badge mb-6">Calculator E-commerce</span>
          <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Calculează potențialul magazinului tău online</h2>
        </div>
        <div style={{ maxWidth: "760px", margin: "0 auto", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", marginBottom: "40px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Vizitatori lunari</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{visitors.toLocaleString("ro-RO")}</span>
              </div>
              <input type="range" className="calc-slider" min={1000} max={100000} step={1000} value={visitors} onChange={e => setVisitors(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>1.000</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>100.000</span>
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
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Valoarea medie a coșului</label>
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#fff" }}>{aov}€</span>
              </div>
              <input type="range" className="calc-slider" min={20} max={500} step={5} value={aov} onChange={e => setAov(Number(e.target.value))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>20€</span>
                <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)" }}>500€</span>
              </div>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />
          <div style={{ background: "rgba(86,219,132,0.04)", border: "1px solid rgba(86,219,132,0.1)", borderRadius: "14px", padding: "28px", marginBottom: "28px" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(86,219,132,0.6)", marginBottom: "20px" }}>Estimare lunară</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5" style={{ marginBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "rgba(255,255,255,0.5)", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(orders)}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Comenzi actuale</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{revenue >= 1000 ? `${fmt(revenue)}€` : `${revenue}€`}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Revenue actual</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "#56db84", letterSpacing: "-0.03em", lineHeight: 1 }}>{potentialRevenue >= 1000 ? `${fmt(potentialRevenue)}€` : `${potentialRevenue}€`}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Potențial la 2% conv.</div>
              </div>
              <div>
                <div style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 900, color: "#60a5fa", letterSpacing: "-0.03em", lineHeight: 1 }}>{uplift > 0 ? `+${fmt(uplift)}€` : "—"}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: "6px" }}>Revenue suplimentar</div>
              </div>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              La <strong style={{ color: "#fff" }}>{visitors.toLocaleString("ro-RO")} vizitatori</strong> și <strong style={{ color: "#fff" }}>{convRate.toFixed(1)}% conversie</strong>, generezi <strong style={{ color: "rgba(255,255,255,0.5)" }}>{revenue >= 1000 ? `${fmt(revenue)}€` : `${revenue}€`}/lună</strong>. Optimizând magazinul la <strong style={{ color: "#56db84" }}>2% conv.</strong>, poți ajunge la <strong style={{ color: "#56db84" }}>{potentialRevenue >= 1000 ? `${fmt(potentialRevenue)}€` : `${potentialRevenue}€`}/lună</strong>.
            </p>
          </div>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
            Vrei un magazin online optimizat pentru conversii?{" "}
            <Link href="/contact/" style={{ color: "#56db84", fontWeight: 600, textDecoration: "none" }}>Vorbește cu un specialist →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

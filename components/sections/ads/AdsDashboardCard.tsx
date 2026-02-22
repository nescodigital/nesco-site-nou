"use client";
import { useEffect, useState } from "react";

export interface DashboardMetric {
  label: string;
  static?: string;
  animated?: { target: number; decimals?: number; suffix?: string };
  badge: { text: string; positive: boolean };
}

export interface AdsDashboardCardProps {
  emoji: string;
  title: string;
  date: string;
  metrics: DashboardMetric[];
  barPercent: number;
  barLabel?: string;
  status: string;
  badge1: string;
  badge2: string;
}

export function AdsDashboardCard({ emoji, title, date, metrics, barPercent, barLabel = "Buget folosit", status, badge1, badge2 }: AdsDashboardCardProps) {
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const ms = 1600 / steps;
    let s = 0;
    const t = setInterval(() => {
      s++;
      setProgress(1 - Math.pow(1 - s / steps, 3));
      if (s >= steps) clearInterval(t);
    }, ms);
    return () => clearInterval(t);
  }, [started]);

  function displayMetric(m: DashboardMetric): string {
    if (m.static) return m.static;
    if (!m.animated) return "";
    const raw = m.animated.target * progress;
    const val = m.animated.decimals
      ? parseFloat(raw.toFixed(m.animated.decimals))
      : Math.round(raw);
    const formatted = typeof val === "number" && !m.animated.decimals
      ? val.toLocaleString("ro-RO")
      : val;
    return `${formatted}${m.animated.suffix ?? ""}`;
  }

  return (
    <>
      <style>{`
        @keyframes floatMain { 0%,100%{transform:rotate(3deg) translateY(0)} 50%{transform:rotate(3deg) translateY(-10px)} }
        @keyframes floatBadge{ 0%,100%{transform:rotate(-2deg) translateY(0)} 50%{transform:rotate(-2deg) translateY(-7px)} }
      `}</style>
      <div style={{ position: "relative", padding: "20px 20px 80px 10px" }}>
        {/* Main card */}
        <div style={{ background:"#111111", border:"1px solid rgba(86,219,132,0.2)", borderRadius:"16px", padding:"24px 28px", boxShadow:"0 24px 64px rgba(0,0,0,0.65),0 0 48px rgba(86,219,132,0.07)", animation:"floatMain 6s ease-in-out infinite" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px" }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"#56db84", boxShadow:"0 0 6px #56db84" }} />
            <span style={{ fontSize:"0.8125rem", fontWeight:700, color:"#fff", letterSpacing:"-0.01em" }}>{emoji} {title}</span>
          </div>
          <p style={{ fontSize:"0.6875rem", color:"rgba(255,255,255,0.28)", marginBottom:"20px", paddingLeft:"16px" }}>{date}</p>
          <div style={{ height:1, background:"rgba(255,255,255,0.06)", marginBottom:"18px" }} />
          <div style={{ display:"flex", flexDirection:"column", gap:"13px", marginBottom:"18px" }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center" }}>
                <span style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.38)", width:"90px", flexShrink:0 }}>{m.label}</span>
                <span style={{ fontSize:"0.9375rem", fontWeight:800, color:"#fff", fontVariantNumeric:"tabular-nums", flex:1 }}>{displayMetric(m)}</span>
                <span style={{ fontSize:"0.6875rem", fontWeight:700, color: m.badge.positive ? "#56db84":"#ef4444", background: m.badge.positive ? "rgba(86,219,132,0.1)":"rgba(239,68,68,0.09)", padding:"2px 9px", borderRadius:"100px", flexShrink:0 }}>{m.badge.text}</span>
              </div>
            ))}
          </div>
          <div style={{ height:1, background:"rgba(255,255,255,0.06)", marginBottom:"16px" }} />
          <div style={{ marginBottom:"14px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"7px" }}>
              <span style={{ fontSize:"0.6875rem", color:"rgba(255,255,255,0.38)" }}>{barLabel}</span>
              <span style={{ fontSize:"0.6875rem", fontWeight:700, color:"#fff" }}>{barPercent}%</span>
            </div>
            <div style={{ background:"rgba(255,255,255,0.06)", borderRadius:"4px", height:"6px", overflow:"hidden" }}>
              <div style={{ width: started ? `${barPercent}%`:"0%", height:"100%", background:"linear-gradient(90deg,#56db84,rgba(86,219,132,0.45))", borderRadius:"4px", transition:"width 1.6s ease" }} />
            </div>
          </div>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:"rgba(86,219,132,0.05)", border:"1px solid rgba(86,219,132,0.12)", borderRadius:"100px", padding:"4px 10px" }}>
            <div style={{ width:5, height:5, borderRadius:"50%", background:"#56db84" }} />
            <span style={{ fontSize:"0.625rem", fontWeight:600, color:"rgba(255,255,255,0.4)", letterSpacing:"0.04em" }}>{status}</span>
          </div>
        </div>
        {/* Badge card */}
        <div style={{ position:"absolute", bottom:16, right:0, background:"#0d0d0d", border:"1px solid rgba(86,219,132,0.15)", borderRadius:"12px", padding:"14px 20px", boxShadow:"0 12px 36px rgba(0,0,0,0.55)", animation:"floatBadge 7s ease-in-out infinite 1.2s" }}>
          <div style={{ fontSize:"0.9375rem", fontWeight:800, color:"#56db84", letterSpacing:"-0.02em", marginBottom:"3px" }}>{badge1}</div>
          <div style={{ fontSize:"0.6875rem", color:"rgba(255,255,255,0.3)" }}>{badge2}</div>
        </div>
      </div>
    </>
  );
}

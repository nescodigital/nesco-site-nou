const STAGES = [
  {
    emoji: "🎯",
    label: "TOF",
    title: "Top of Funnel Awareness",
    color: "#60a5fa",
    budget: "40%",
    details: [
      "Audiență: Interese + Lookalike 3–5%",
      "Format: Video 15–30s, Reels",
      "Obiectiv: Reach, ThruPlay",
      "KPI: Cost per ThruPlay, Reach unic",
    ],
  },
  {
    emoji: "💡",
    label: "MOF",
    title: "Middle of Funnel Consideration",
    color: "#a78bfa",
    budget: "30%",
    details: [
      "Audiență: Video viewers 25%+, engagements 30 zile",
      "Format: Carousel, Collection, Lead Ads",
      "Obiectiv: Traffic, Lead Generation",
      "KPI: CPL, CTR, Time on site",
    ],
  },
  {
    emoji: "💰",
    label: "BOF",
    title: "Bottom of Funnel Conversion",
    color: "#56db84",
    budget: "30%",
    details: [
      "Audiență: Vizitatori site 14 zile, abandonuri coș",
      "Format: Single image, Dynamic Product Ads",
      "Obiectiv: Conversions, Catalog Sales",
      "KPI: ROAS, CPA, Revenue",
    ],
  },
];

export function MetaAdsFunnel() {
  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="badge mb-6">Funnel Meta Ads</span>
          <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>
            Cum construim un funnel Meta Ads profitabil
          </h2>
        </div>
        {/* Connector */}
        <div className="relative hidden md:block" style={{ marginBottom: "-16px", zIndex: 1 }}>
          <div style={{ position: "absolute", top: "20px", left: "calc(16.66% + 20px)", right: "calc(16.66% + 20px)", height: "2px", background: "linear-gradient(90deg,#60a5fa,#a78bfa,#56db84)" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ position: "relative", zIndex: 2 }}>
          {STAGES.map((s, i) => (
            <div key={i} className="card-hover" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderTop: `2px solid ${s.color}`, borderRadius: "16px", padding: "28px 28px 32px" }}>
              <div className="hidden md:block" style={{ width: 12, height: 12, borderRadius: "50%", background: s.color, marginBottom: "20px", boxShadow: `0 0 8px ${s.color}` }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: s.color }}>{s.label}</p>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: s.color, background: `rgba(${s.color === "#60a5fa" ? "96,165,250" : s.color === "#a78bfa" ? "167,139,250" : "86,219,132"},0.1)`, padding: "2px 8px", borderRadius: "100px" }}>
                  {s.budget} buget
                </span>
              </div>
              <h3 className="font-bold text-white" style={{ fontSize: "0.9375rem", letterSpacing: "-0.01em", marginBottom: "20px" }}>{s.emoji} {s.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {s.details.map((d, j) => (
                  <li key={j} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: s.color, fontSize: "0.6875rem", marginTop: "3px", flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

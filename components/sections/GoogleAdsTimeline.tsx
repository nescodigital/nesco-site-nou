const PHASES = [
  {
    emoji: "📋",
    range: "Zilele 1–30",
    title: "Audit & Structură",
    color: "#60a5fa",
    items: [
      "Audit complet al contului existent",
      "Restructurare campanii și grupuri de anunțuri",
      "Setup tracking corect (GA4 + conversii)",
      "Cercetare cuvinte cheie și competitori",
      "Primele campanii lansate",
    ],
  },
  {
    emoji: "📈",
    range: "Zilele 31–60",
    title: "Optimizare & Date",
    color: "#a78bfa",
    items: [
      "Optimizare zilnică bazată pe date reale",
      "A/B testing anunțuri",
      "Ajustare bid-uri și bugete",
      "Extindere în categorii profitabile",
      "Primul raport de performanță",
    ],
  },
  {
    emoji: "🚀",
    range: "Zilele 61–90",
    title: "Scalare",
    color: "#56db84",
    items: [
      "Scalare bugete pe campaniile profitabile",
      "Lansare campanii noi (remarketing, PMAX)",
      "Optimizare landing pages pentru CRO",
      "Strategie pentru luna 4+",
    ],
  },
];

export function GoogleAdsTimeline() {
  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="badge mb-6">Roadmap</span>
          <h2
            className="font-black text-white"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}
          >
            Primele 90 de zile cu Nesco Digital
          </h2>
        </div>

        {/* Connector line — desktop only */}
        <div className="relative hidden md:block" style={{ marginBottom: "-16px", zIndex: 1 }}>
          <div style={{ position: "absolute", top: "20px", left: "calc(16.66% + 20px)", right: "calc(16.66% + 20px)", height: "2px", background: "linear-gradient(90deg, #60a5fa, #a78bfa, #56db84)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ position: "relative", zIndex: 2 }}>
          {PHASES.map((phase, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "#0a0a0a",
                border: `1px solid rgba(255,255,255,0.06)`,
                borderTop: `2px solid ${phase.color}`,
                borderRadius: "16px",
                padding: "28px 28px 32px",
              }}
            >
              {/* Node dot — visible in desktop timeline */}
              <div
                className="hidden md:block"
                style={{ width: 12, height: 12, borderRadius: "50%", background: phase.color, marginBottom: "20px", boxShadow: `0 0 8px ${phase.color}` }}
              />

              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: phase.color, marginBottom: "4px" }}>
                {phase.range}
              </p>
              <h3 className="font-bold text-white" style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em", marginBottom: "20px" }}>
                {phase.emoji} {phase.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {phase.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: phase.color, fontSize: "0.6875rem", marginTop: "3px", flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>{item}</span>
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

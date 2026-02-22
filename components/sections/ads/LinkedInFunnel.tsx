const STAGES = [
  {
    emoji: "🎯",
    title: "Identificare",
    color: "#0A66C2",
    details: [
      "Upload listă companii țintă (până la 300.000)",
      "LinkedIn le potrivește cu profilurile angajaților",
      "Targetăm toți decidenții din companiile selectate",
      "Coverage: CEO, CFO, CTO, Head of, Director, VP",
    ],
  },
  {
    emoji: "📢",
    title: "Engagement",
    color: "#60a5fa",
    details: [
      "Sponsored Content în feed-ul lor profesional",
      "Message Ads direct în inbox (50–60% open rate)",
      "Thought leadership articles care construiesc autoritate",
      "Video ads care explică problema pe care o rezolvi",
    ],
  },
  {
    emoji: "🤝",
    title: "Conversie",
    color: "#56db84",
    details: [
      "Lead Gen Forms pre-completate",
      "Retargeting pe cei care au interacționat",
      "Integrare directă cu CRM",
      "Notificare sales când un lead calificat acționează",
    ],
  },
];

export function LinkedInFunnel() {
  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="badge mb-6">Account-Based Marketing</span>
          <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>
            Cum targetăm exact companiile aliniate cu oferta ta
          </h2>
        </div>
        <div className="relative hidden md:block" style={{ marginBottom: "-16px", zIndex: 1 }}>
          <div style={{ position: "absolute", top: "20px", left: "calc(16.66% + 20px)", right: "calc(16.66% + 20px)", height: "2px", background: "linear-gradient(90deg,#0A66C2,#60a5fa,#56db84)" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ position: "relative", zIndex: 2 }}>
          {STAGES.map((s, i) => (
            <div key={i} className="card-hover" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderTop: `2px solid ${s.color}`, borderRadius: "16px", padding: "28px 28px 32px" }}>
              <div className="hidden md:block" style={{ width: 12, height: 12, borderRadius: "50%", background: s.color, marginBottom: "20px", boxShadow: `0 0 8px ${s.color}` }} />
              <h3 className="font-bold text-white" style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em", marginBottom: "20px" }}>{s.emoji} {s.title}</h3>
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

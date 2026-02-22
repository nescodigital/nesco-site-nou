const FORMATS = [
  { emoji: "📱", title: "Stories (15s)", color: "#f472b6", details: ["Fullscreen 9:16", "Rata vizualizare 3–5x față de banner", "CTA swipe-up direct la checkout", "Ideal pentru: awareness + oferte limitate"] },
  { emoji: "🎬", title: "Reels", color: "#a78bfa", details: ["Formatul cu cel mai mare reach organic", "Amplificăm conținut viral cu buget", "Durata optimă: 7–15 secunde", "Ideal pentru: awareness + brand building"] },
  { emoji: "🖼️", title: "Feed (Square/Portrait)", color: "#60a5fa", details: ["Prezentare premium în feed", "Timp de atenție mai mare", "Ideal pentru: considerare + conversie", "Format: 1:1 sau 4:5"] },
  { emoji: "🛍️", title: "Instagram Shopping", color: "#56db84", details: ["Taguri produse direct în imagine", "De la postare la checkout în 2 clickuri", "Catalog sincronizat automat", "Ideal pentru: e-commerce direct"] },
];

export function InstaAdsFormats() {
  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="badge mb-6">Formate</span>
          <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Formatele pe care le folosim</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FORMATS.map((f, i) => (
            <div key={i} className="card-hover" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderTop: `2px solid ${f.color}`, borderRadius: "16px", padding: "28px" }}>
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{f.emoji}</div>
              <h3 className="font-bold text-white" style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "16px" }}>{f.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {f.details.map((d, j) => (
                  <li key={j} style={{ display: "flex", gap: "7px", alignItems: "flex-start" }}>
                    <span style={{ color: f.color, fontSize: "0.6875rem", marginTop: "3px", flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{d}</span>
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

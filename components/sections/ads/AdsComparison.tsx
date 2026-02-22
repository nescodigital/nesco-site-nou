export function AdsComparison({ title = "Gestionat prost vs. profesionist", bad, good, badLabel = "❌  Gestionat prost", goodLabel = "✓  Profesionist cu Nesco" }: { title?: string; bad: string[]; good: string[]; badLabel?: string; goodLabel?: string }) {
  return (
    <section className="relative" style={{ backgroundColor:"#050505", padding:"100px 0" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign:"center", marginBottom:"56px" }}>
          <span className="badge mb-6">Comparație</span>
          <h2 className="font-black text-white" style={{ fontSize:"clamp(1.75rem,3.5vw,2.75rem)", lineHeight:1.05, letterSpacing:"-0.025em", marginTop:"20px" }}>{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ maxWidth:"860px", margin:"0 auto" }}>
          <div style={{ background:"#0a0a0a", border:"1px solid rgba(239,68,68,0.12)", borderRadius:"16px", padding:"32px" }}>
            <p style={{ fontSize:"0.75rem", fontWeight:700, color:"#f87171", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"24px" }}>{badLabel}</p>
            <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"14px" }}>
              {bad.map((item, i) => (
                <li key={i} style={{ display:"flex", gap:"10px", alignItems:"flex-start" }}>
                  <span style={{ color:"#ef4444", fontSize:"0.75rem", marginTop:"2px", flexShrink:0 }}>✕</span>
                  <span style={{ fontSize:"0.875rem", color:"rgba(255,255,255,0.45)", lineHeight:1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background:"#0a0a0a", border:"1px solid rgba(86,219,132,0.14)", borderRadius:"16px", padding:"32px", position:"relative", overflow:"hidden" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse at 80% 20%,rgba(86,219,132,0.04) 0%,transparent 60%)" }} />
            <div style={{ position:"relative" }}>
              <p style={{ fontSize:"0.75rem", fontWeight:700, color:"#56db84", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"24px" }}>{goodLabel}</p>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"14px" }}>
                {good.map((item, i) => (
                  <li key={i} style={{ display:"flex", gap:"10px", alignItems:"flex-start" }}>
                    <span style={{ color:"#56db84", fontSize:"0.75rem", marginTop:"2px", flexShrink:0 }}>✓</span>
                    <span style={{ fontSize:"0.875rem", color:"rgba(255,255,255,0.65)", lineHeight:1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

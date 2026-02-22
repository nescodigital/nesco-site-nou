export interface TimelinePhase {
  emoji: string;
  range: string;
  title: string;
  color: string;
  items: string[];
}

export function AdsTimeline({ title = "Primele 90 de zile cu Nesco Digital", phases }: { title?: string; phases: TimelinePhase[] }) {
  return (
    <section className="relative" style={{ backgroundColor:"#050505", padding:"100px 0" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign:"center", marginBottom:"56px" }}>
          <span className="badge mb-6">Roadmap</span>
          <h2 className="font-black text-white" style={{ fontSize:"clamp(1.75rem,3.5vw,2.75rem)", lineHeight:1.05, letterSpacing:"-0.025em", marginTop:"20px" }}>{title}</h2>
        </div>
        <div className="relative hidden md:block" style={{ marginBottom:"-16px", zIndex:1 }}>
          <div style={{ position:"absolute", top:"20px", left:"calc(16.66% + 20px)", right:"calc(16.66% + 20px)", height:"2px", background:`linear-gradient(90deg,${phases[0]?.color ?? "#60a5fa"},${phases[1]?.color ?? "#a78bfa"},${phases[2]?.color ?? "#56db84"})` }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ position:"relative", zIndex:2 }}>
          {phases.map((phase, i) => (
            <div key={i} className="card-hover" style={{ background:"#0a0a0a", border:"1px solid rgba(255,255,255,0.06)", borderTop:`2px solid ${phase.color}`, borderRadius:"16px", padding:"28px 28px 32px" }}>
              <div className="hidden md:block" style={{ width:12, height:12, borderRadius:"50%", background:phase.color, marginBottom:"20px", boxShadow:`0 0 8px ${phase.color}` }} />
              <p style={{ fontSize:"0.6875rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:phase.color, marginBottom:"4px" }}>{phase.range}</p>
              <h3 className="font-bold text-white" style={{ fontSize:"1.0625rem", letterSpacing:"-0.01em", marginBottom:"20px" }}>{phase.emoji} {phase.title}</h3>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"10px" }}>
                {phase.items.map((item, j) => (
                  <li key={j} style={{ display:"flex", gap:"8px", alignItems:"flex-start" }}>
                    <span style={{ color:phase.color, fontSize:"0.6875rem", marginTop:"3px", flexShrink:0 }}>▸</span>
                    <span style={{ fontSize:"0.8125rem", color:"rgba(255,255,255,0.5)", lineHeight:1.55 }}>{item}</span>
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

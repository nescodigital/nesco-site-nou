import type { ReactNode } from "react";

export interface TrustBarItem {
  icon?: ReactNode;
  label: string;
  stat?: string;
}

export function AdsTrustBar({ items }: { items: TrustBarItem[] }) {
  return (
    <div style={{ backgroundColor:"#050505", borderTop:"1px solid rgba(255,255,255,0.05)", borderBottom:"1px solid rgba(255,255,255,0.05)", padding:"18px 0" }}>
      <div className="page-container">
        <div className="hidden md:flex flex-wrap items-center justify-center" style={{ gap:"28px" }}>
          {items.map((item, i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:"28px" }}>
              {i > 0 && <div style={{ width:1, height:14, background:"rgba(255,255,255,0.08)", flexShrink:0 }} />}
              <div style={{ display:"flex", alignItems:"center", gap:"7px" }}>
                {item.icon}
                {item.stat && <span style={{ fontSize:"0.8125rem", fontWeight:800, color:"#56db84" }}>{item.stat}</span>}
                <span style={{ fontSize:"0.75rem", fontWeight:500, color:"rgba(255,255,255,0.38)", letterSpacing:"0.01em" }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

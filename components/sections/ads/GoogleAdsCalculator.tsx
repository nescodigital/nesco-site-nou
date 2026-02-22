"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

type Locale = "ro" | "en" | "de";

const BENCHMARKS: Record<string, number> = { ecommerce: 5.0, educatie: 4.0, b2b: 3.0, altul: 3.5 };

const TR = {
  ro: { title:"Estimează-ți potențialul cu Google Ads", badge:"Calculator", budgetLabel:"Buget lunar ads", industryLabel:"Industrie", roasLabel:"ROAS actual", noRoas:"Nu rulez", estTitle:"Estimare după 90 de zile", roasOut:"ROAS estimat", revOut:"Revenue estimat/lună", savOut:"Economii vs. angajat intern", ctaText:"Vrei o estimare reală pentru business-ul tău?", ctaLink:"Vorbește cu un specialist →", href:"/contact/",
    industries:{ ecommerce:"E-commerce", educatie:"Educație Online", b2b:"B2B Servicii", altul:"Alt sector" },
    summary:(budget:number,roas:string,rev:string)=>`La un buget de ${budget.toLocaleString("ro-RO")}€ și ROAS estimat de ${roas}, poți genera ~${rev} revenue lunar.` },
  en: { title:"Estimate your Google Ads potential", badge:"Calculator", budgetLabel:"Monthly ad budget", industryLabel:"Industry", roasLabel:"Current ROAS", noRoas:"Not running", estTitle:"Estimate after 90 days", roasOut:"Estimated ROAS", revOut:"Estimated revenue/month", savOut:"Savings vs. in-house hire", ctaText:"Want a real estimate for your business?", ctaLink:"Talk to a specialist →", href:"/en/lets-talk/",
    industries:{ ecommerce:"E-commerce", educatie:"Online Education", b2b:"B2B Services", altul:"Other" },
    summary:(budget:number,roas:string,rev:string)=>`At a budget of €${budget.toLocaleString("en-GB")} and estimated ROAS of ${roas}, you can generate ~€${rev} monthly revenue.` },
  de: { title:"Schätzen Sie Ihr Google-Ads-Potenzial", badge:"Kalkulator", budgetLabel:"Monatliches Budget", industryLabel:"Branche", roasLabel:"Aktueller ROAS", noRoas:"Läuft nicht", estTitle:"Schätzung nach 90 Tagen", roasOut:"Geschätzter ROAS", revOut:"Geschätzter Umsatz/Monat", savOut:"Ersparnis vs. interner Mitarbeiter", ctaText:"Sie möchten eine reale Schätzung?", ctaLink:"Mit einem Experten sprechen →", href:"/ge/lass-uns-reden/",
    industries:{ ecommerce:"E-Commerce", educatie:"Online-Bildung", b2b:"B2B-Dienstleistungen", altul:"Sonstiges" },
    summary:(budget:number,roas:string,rev:string)=>`Bei einem Budget von ${budget.toLocaleString("de-DE")}€ und einem geschätzten ROAS von ${roas} können Sie ~${rev}€ monatlichen Umsatz erzielen.` },
};

function estimateRoas(industry: string, cur: number): number {
  const bench = BENCHMARKS[industry];
  if (cur === 0) return bench;
  if (cur < bench * 0.7) return bench;
  if (cur < bench) return bench * 1.1;
  return parseFloat(Math.min(cur * 1.35, bench * 1.4).toFixed(1));
}

function fmtRev(n: number, locale: Locale): string {
  const s = n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : n.toLocaleString("ro-RO");
  return locale === "ro" ? `${s}€` : `€${s}`;
}

export function GoogleAdsCalculator({ locale = "ro" }: { locale?: Locale }) {
  const tr = TR[locale];
  const [budget,   setBudget]   = useState(2000);
  const [industry, setIndustry] = useState("ecommerce");
  const [curRoas,  setCurRoas]  = useState(0);

  const estRoas = useMemo(() => estimateRoas(industry, curRoas), [industry, curRoas]);
  const revenue = useMemo(() => Math.round(budget * estRoas), [budget, estRoas]);
  const savings = useMemo(() => Math.max(0, 2800 - Math.round(budget * 0.12)), [budget]);

  return (
    <section className="relative" style={{ backgroundColor:"#050505", padding:"100px 0" }}>
      <style>{`.calc-slider{-webkit-appearance:none;appearance:none;width:100%;height:5px;background:rgba(255,255,255,0.08);border-radius:4px;outline:none;cursor:pointer}.calc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;box-shadow:0 0 8px rgba(86,219,132,0.45);cursor:pointer}.calc-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#56db84;border:2px solid #050505;cursor:pointer}.calc-select{background:#111;border:1px solid rgba(255,255,255,0.1);color:#fff;padding:10px 14px;border-radius:10px;font-size:0.875rem;outline:none;width:100%;cursor:pointer}.calc-select option{background:#111}`}</style>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
      <div className="page-container">
        <div style={{ textAlign:"center", marginBottom:"48px" }}>
          <span className="badge mb-6">{tr.badge}</span>
          <h2 className="font-black text-white" style={{ fontSize:"clamp(1.75rem,3.5vw,2.75rem)", lineHeight:1.05, letterSpacing:"-0.025em", marginTop:"20px" }}>{tr.title}</h2>
        </div>
        <div style={{ maxWidth:"760px", margin:"0 auto", background:"#0a0a0a", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"20px", padding:"40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"32px", marginBottom:"40px" }}>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"12px" }}>
                <label style={{ fontSize:"0.8125rem", color:"rgba(255,255,255,0.5)", fontWeight:500 }}>{tr.budgetLabel}</label>
                <span style={{ fontSize:"0.9375rem", fontWeight:800, color:"#fff" }}>{budget.toLocaleString("ro-RO")}€</span>
              </div>
              <input type="range" className="calc-slider" min={500} max={50000} step={100} value={budget} onChange={e => setBudget(Number(e.target.value))} />
              <div style={{ display:"flex", justifyContent:"space-between", marginTop:"6px" }}>
                <span style={{ fontSize:"0.6875rem", color:"rgba(255,255,255,0.2)" }}>500€</span>
                <span style={{ fontSize:"0.6875rem", color:"rgba(255,255,255,0.2)" }}>50.000€</span>
              </div>
            </div>
            <div>
              <label style={{ display:"block", fontSize:"0.8125rem", color:"rgba(255,255,255,0.5)", fontWeight:500, marginBottom:"12px" }}>{tr.industryLabel}</label>
              <select className="calc-select" value={industry} onChange={e => setIndustry(e.target.value)}>
                {Object.entries(tr.industries).map(([val, label]) => <option key={val} value={val}>{label}</option>)}
              </select>
            </div>
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"12px" }}>
                <label style={{ fontSize:"0.8125rem", color:"rgba(255,255,255,0.5)", fontWeight:500 }}>{tr.roasLabel}</label>
                <span style={{ fontSize:"0.9375rem", fontWeight:800, color:"#fff" }}>{curRoas === 0 ? tr.noRoas : `${curRoas.toFixed(1)}x`}</span>
              </div>
              <input type="range" className="calc-slider" min={0} max={10} step={0.1} value={curRoas} onChange={e => setCurRoas(Number(e.target.value))} />
              <div style={{ display:"flex", justifyContent:"space-between", marginTop:"6px" }}>
                <span style={{ fontSize:"0.6875rem", color:"rgba(255,255,255,0.2)" }}>{tr.noRoas}</span>
                <span style={{ fontSize:"0.6875rem", color:"rgba(255,255,255,0.2)" }}>10x</span>
              </div>
            </div>
          </div>
          <div style={{ height:1, background:"rgba(255,255,255,0.06)", marginBottom:"32px" }} />
          <div style={{ background:"rgba(86,219,132,0.04)", border:"1px solid rgba(86,219,132,0.1)", borderRadius:"14px", padding:"28px", marginBottom:"28px" }}>
            <p style={{ fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(86,219,132,0.6)", marginBottom:"20px" }}>{tr.estTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" style={{ marginBottom:"20px" }}>
              <div>
                <div style={{ fontSize:"clamp(1.5rem,3vw,2rem)", fontWeight:900, color:"#56db84", letterSpacing:"-0.03em", lineHeight:1 }}>{estRoas.toFixed(1)}x</div>
                <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.38)", marginTop:"6px" }}>{tr.roasOut}</div>
              </div>
              <div>
                <div style={{ fontSize:"clamp(1.5rem,3vw,2rem)", fontWeight:900, color:"#fff", letterSpacing:"-0.03em", lineHeight:1 }}>{fmtRev(revenue, locale)}</div>
                <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.38)", marginTop:"6px" }}>{tr.revOut}</div>
              </div>
              <div>
                <div style={{ fontSize:"clamp(1.5rem,3vw,2rem)", fontWeight:900, color: savings > 0 ? "#60a5fa":"rgba(255,255,255,0.4)", letterSpacing:"-0.03em", lineHeight:1 }}>{savings > 0 ? `~${savings.toLocaleString("ro-RO")}€` : ""}</div>
                <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.38)", marginTop:"6px" }}>{tr.savOut}</div>
              </div>
            </div>
            <p style={{ fontSize:"0.8125rem", color:"rgba(255,255,255,0.4)", lineHeight:1.6 }} dangerouslySetInnerHTML={{ __html: tr.summary(budget, `${estRoas.toFixed(1)}x`, fmtRev(revenue, locale)) }} />
          </div>
          <p style={{ fontSize:"0.8125rem", color:"rgba(255,255,255,0.35)", textAlign:"center" }}>
            {tr.ctaText}{" "}
            <Link href={tr.href} style={{ color:"#56db84", fontWeight:600, textDecoration:"none" }}>{tr.ctaLink}</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

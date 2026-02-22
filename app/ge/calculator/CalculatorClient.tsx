"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SPECIALISTS = [
  { id: "paid-ads", label: "Paid-Ads-Spezialist (Google, Meta, TikTok)" },
  { id: "seo", label: "SEO-Spezialist" },
  { id: "webdesign", label: "Webdesigner / Entwickler" },
  { id: "email", label: "E-Mail-Marketing-Spezialist" },
  { id: "manager", label: "Marketing-Manager / Stratege" },
];

const EXPERIENCE_OPTIONS = [
  { value: "junior", label: "Junior", sublabel: "1\u20132 Jahre", factor: 0.7 },
  { value: "mid", label: "Mid", sublabel: "3\u20135 Jahre", factor: 1.0 },
  { value: "senior", label: "Senior", sublabel: "5+ Jahre", factor: 1.5 },
];

function getNescoCost(count: number): number {
  if (count === 0) return 0;
  if (count === 1) return 1500;
  if (count === 2) return 2500;
  if (count === 3) return 3500;
  return 4500;
}

function useAnimatedNumber(target: number): number {
  const [current, setCurrent] = useState(target);
  const prevRef = useRef(target);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = prevRef.current;
    const end = target;
    const duration = 500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(start + (end - start) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        prevRef.current = end;
      }
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target]);

  return current;
}

export function CalculatorClientDE() {
  const [selected, setSelected] = useState<Set<string>>(new Set(["paid-ads"]));
  const [salary, setSalary] = useState(2500);
  const [experience, setExperience] = useState<string>("mid");

  const expFactor = EXPERIENCE_OPTIONS.find(e => e.value === experience)?.factor ?? 1.0;
  const effectiveNet = Math.round(salary * expFactor);
  const gross = Math.round(effectiveNet * 1.7);
  const count = selected.size;

  const equipment = 200;
  const training = 100;
  const office = 150;
  const rotationRisk = Math.round((0.4 * 2 * gross) / 12);
  const perSpecialistCost = gross + equipment + training + office + rotationRisk;

  const totalInternMonthly = count * perSpecialistCost;
  const nescoCost = getNescoCost(count);
  const monthlySavings = Math.max(0, totalInternMonthly - nescoCost);
  const annualSavings = monthlySavings * 12;
  const equivalentSalaries =
    effectiveNet > 0 ? (annualSavings / (effectiveNet * 12)).toFixed(1) : "0";

  const animIntern = useAnimatedNumber(totalInternMonthly);
  const animNesco = useAnimatedNumber(nescoCost);
  const animMonthlySavings = useAnimatedNumber(monthlySavings);
  const animAnnualSavings = useAnimatedNumber(annualSavings);

  const toggleSpecialist = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id) && next.size > 1) next.delete(id);
      else if (!next.has(id)) next.add(id);
      return next;
    });
  };

  const fmt = (n: number) => n.toLocaleString("de-DE") + "\u20AC";

  return (
    <div style={{ backgroundColor: "#050505" }}>
      {/* -- Hero -- */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "80px" }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div
          className="absolute pointer-events-none"
          style={{ top: "-20%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(86,219,132,0.06) 0%, transparent 70%)", animation: "heroGlow 14s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #050505, transparent)" }}
        />
        <div className="relative page-container">
          <span className="badge mb-6" style={{ display: "inline-flex" }}>Rechner</span>
          <h1
            className="font-black"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              marginTop: "16px",
              marginBottom: "24px",
              maxWidth: "760px",
              background: "linear-gradient(135deg, #ffffff 20%, #56db84 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Intern oder Agentur?<br />Berechnen Sie die echten Kosten
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "560px", letterSpacing: "0.01em" }}>
            Entdecken Sie, was sich hinter einem Gehalt verbirgt und wie viel ein interner Marketing-Spezialist im Vergleich zu Nesco Digital wirklich kostet.
          </p>
        </div>
      </section>

      {/* -- Calculator -- */}
      <section className="relative" style={{ backgroundColor: "#050505", padding: "0 0 100px" }}>
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">

            {/* LEFT Inputs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ padding: "36px 32px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px" }}>
                <h2 className="font-bold text-white" style={{ fontSize: "1.25rem", letterSpacing: "-0.02em", marginBottom: "28px" }}>
                  Konfigurieren Sie Ihre Situation
                </h2>

                {/* Specialists */}
                <div style={{ marginBottom: "28px" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                    Benoetigte Spezialisten
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {SPECIALISTS.map(sp => (
                      <label
                        key={sp.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px 16px",
                          borderRadius: "12px",
                          border: `1px solid ${selected.has(sp.id) ? "rgba(86,219,132,0.3)" : "rgba(255,255,255,0.06)"}`,
                          background: selected.has(sp.id) ? "rgba(86,219,132,0.05)" : "transparent",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={selected.has(sp.id)}
                          onChange={() => toggleSpecialist(sp.id)}
                          style={{ accentColor: "#56db84", width: 16, height: 16, flexShrink: 0, cursor: "pointer" }}
                        />
                        <span style={{
                          fontSize: "0.875rem",
                          color: selected.has(sp.id) ? "#fff" : "rgba(255,255,255,0.5)",
                          fontWeight: selected.has(sp.id) ? 500 : 400,
                          transition: "color 0.2s ease",
                          flex: 1,
                        }}>
                          {sp.label}
                        </span>
                        {selected.has(sp.id) && (
                          <span style={{ fontSize: "0.75rem", color: "#56db84", fontWeight: 600, flexShrink: 0 }}>
                            +{fmt(perSpecialistCost)}/Monat
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Salary slider */}
                <div style={{ marginBottom: "28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Gewuenschtes Nettogehalt pro Spezialist
                    </span>
                    <span style={{ color: "#56db84", fontWeight: 700, fontSize: "1rem" }}>{fmt(salary)}</span>
                  </div>
                  <input
                    type="range"
                    min={1500}
                    max={5000}
                    step={100}
                    value={salary}
                    onChange={e => setSalary(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "#56db84", cursor: "pointer" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>1.500\u20AC</span>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>5.000\u20AC</span>
                  </div>
                  {experience !== "mid" && (
                    <div style={{ marginTop: "8px", fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
                      Effektives Gehalt mit Faktor {expFactor}x:{" "}
                      <span style={{ color: "#56db84", fontWeight: 600 }}>{fmt(effectiveNet)}</span>
                    </div>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                    Gewuenschte Erfahrung
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                    {EXPERIENCE_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setExperience(opt.value)}
                        style={{
                          padding: "12px 8px",
                          borderRadius: "12px",
                          border: `1px solid ${experience === opt.value ? "rgba(86,219,132,0.4)" : "rgba(255,255,255,0.06)"}`,
                          background: experience === opt.value ? "rgba(86,219,132,0.08)" : "transparent",
                          color: experience === opt.value ? "#56db84" : "rgba(255,255,255,0.4)",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ fontWeight: 700, fontSize: "0.9375rem" }}>{opt.label}</div>
                        <div style={{ fontSize: "0.75rem", opacity: 0.7, marginTop: "2px" }}>{opt.sublabel}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cost breakdown mini-card */}
              <div style={{ padding: "20px 24px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                  Kostenaufschluesselung pro Spezialist / Monat
                </div>
                {[
                  { label: "Bruttogehalt (Netto x 1,7)", value: fmt(gross) },
                  { label: "Ausstattung, Software, Lizenzen", value: fmt(equipment) },
                  { label: "Schulungen und Kurse", value: fmt(training) },
                  { label: "Bueroflaeche (geschaetzt)", value: fmt(office) },
                  { label: "Fluktuationsrisiko (monatliche Rueckstellungen)", value: fmt(rotationRisk) },
                ].map(row => (
                  <div
                    key={row.label}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: "0.875rem" }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.35)" }}>{row.label}</span>
                    <span style={{ color: "#fff", fontWeight: 600 }}>{row.value}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px", marginTop: "4px" }}>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>Gesamt pro Spezialist</span>
                  <span style={{ color: "#56db84", fontWeight: 700, fontSize: "1rem" }}>{fmt(perSpecialistCost)}/Monat</span>
                </div>
              </div>
            </div>

            {/* RIGHT Results */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Cost comparison */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div style={{ padding: "24px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px" }}>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Interne Kosten / Monat
                  </div>
                  <div className="font-black tabular-nums" style={{ fontSize: "1.875rem", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {fmt(animIntern)}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginTop: "6px" }}>
                    {count} Spezialist{count !== 1 ? "en" : ""}
                  </div>
                </div>
                <div style={{ padding: "24px", background: "rgba(86,219,132,0.04)", border: "1px solid rgba(86,219,132,0.2)", borderRadius: "16px" }}>
                  <div style={{ fontSize: "0.7rem", color: "rgba(86,219,132,0.7)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Nesco Digital / Monat
                  </div>
                  <div className="font-black tabular-nums" style={{ fontSize: "1.875rem", color: "#56db84", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {fmt(animNesco)}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(86,219,132,0.4)", marginTop: "6px" }}>
                    Alle Kanaele inklusive
                  </div>
                </div>
              </div>

              {/* Big savings card */}
              <div style={{ padding: "32px", background: "rgba(86,219,132,0.06)", border: "1px solid rgba(86,219,132,0.2)", borderRadius: "20px" }}>
                <div style={{ fontSize: "0.7rem", color: "#56db84", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
                  Monatliche Ersparnis
                </div>
                <div className="font-black tabular-nums" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#56db84", lineHeight: 1, letterSpacing: "-0.03em" }}>
                  {fmt(animMonthlySavings)}
                  <span style={{ fontSize: "1rem", opacity: 0.55, fontWeight: 400 }}>/Monat</span>
                </div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", marginTop: "10px", lineHeight: 1.6 }}>
                  Die Differenz zwischen den gesamten internen Kosten und Nesco Digital
                </div>
              </div>

              {/* Annual savings + time */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div style={{ padding: "24px", background: "rgba(86,219,132,0.04)", border: "1px solid rgba(86,219,132,0.12)", borderRadius: "16px" }}>
                  <div style={{ fontSize: "0.7rem", color: "#56db84", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Jaehrliche Ersparnis
                  </div>
                  <div className="font-black tabular-nums" style={{ fontSize: "1.5rem", color: "#56db84", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {fmt(animAnnualSavings)}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginTop: "6px" }}>
                    {"\u2248"} {equivalentSalaries} Gehaelter / Jahr
                  </div>
                </div>
                <div style={{ padding: "24px", background: "rgba(96,165,250,0.04)", border: "1px solid rgba(96,165,250,0.12)", borderRadius: "16px" }}>
                  <div style={{ fontSize: "0.7rem", color: "#60a5fa", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Zeit bis zu Ergebnissen
                  </div>
                  <div style={{ marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>Intern: </span>
                    <span style={{ fontSize: "0.875rem", color: "#fff", fontWeight: 600 }}>3\u20136 Monate</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>Nesco: </span>
                    <span style={{ fontSize: "0.875rem", color: "#60a5fa", fontWeight: 600 }}>2\u20134 Wochen</span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(96,165,250,0.5)", marginTop: "6px" }}>~4 Monate gewonnen</div>
                </div>
              </div>

              {/* Nesco note */}
              <div style={{ padding: "14px 18px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px" }}>
                <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>
                  <span style={{ color: "#56db84", fontWeight: 600 }}>Nesco Digital beinhaltet:</span>{" "}
                  Strategie, Umsetzung, Reporting und garantierte Kontinuitaet ueber alle ausgewaehlten Kanaele.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Comparison table -- */}
      <section className="relative" style={{ backgroundColor: "#050505", padding: "80px 0 100px" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="badge mb-4" style={{ display: "inline-flex" }}>Detaillierter Vergleich</span>
            <h2
              className="font-black text-white"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em", marginTop: "16px" }}
            >
              Intern vs. Nesco Digital
            </h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, minWidth: "580px" }}>
              <thead>
                <tr>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Kriterium</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontSize: "0.875rem", color: "rgba(255,100,100,0.6)", fontWeight: 600 }}>Interner Mitarbeiter</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontSize: "0.875rem", color: "#56db84", fontWeight: 700, background: "rgba(86,219,132,0.04)", borderRadius: "12px 12px 0 0" }}>Nesco Digital</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterion: "Monatliche Kosten", intern: fmt(totalInternMonthly), nesco: fmt(nescoCost) },
                  { criterion: "Setup & Onboarding", intern: "3\u20136 Monate", nesco: "2\u20134 Wochen" },
                  { criterion: "Kanalabdeckung", intern: "1 Kanal / Person", nesco: "Alle Kanaele" },
                  { criterion: "Fluktuationsrisiko", intern: "Hoch (40 %/Jahr)", nesco: "Null" },
                  { criterion: "Know-how bei Austritt", intern: "Vollstaendig verloren", nesco: "Bleibt bei Ihnen" },
                  { criterion: "Reporting", intern: "Intern, inkonsistent", nesco: "Live-Dashboard" },
                  { criterion: "Schnelle Skalierung", intern: "Neueinstellung (3\u20136 Monate)", nesco: "Sofort" },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: "14px 20px", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", borderTop: "1px solid rgba(255,255,255,0.04)", fontWeight: 500 }}>
                      {row.criterion}
                    </td>
                    <td style={{ padding: "14px 20px", textAlign: "center", fontSize: "0.875rem", color: "rgba(255,100,100,0.65)", borderTop: "1px solid rgba(255,255,255,0.04)", fontWeight: 500 }}>
                      {row.intern}
                    </td>
                    <td style={{ padding: "14px 20px", textAlign: "center", fontSize: "0.875rem", color: "#56db84", borderTop: "1px solid rgba(86,219,132,0.06)", fontWeight: 600, background: "rgba(86,219,132,0.02)" }}>
                      {row.nesco}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -- Hidden costs -- */}
      <section className="relative" style={{ backgroundColor: "#050505", padding: "0 0 100px" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
        <div className="page-container" style={{ paddingTop: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="badge mb-4" style={{ display: "inline-flex" }}>Versteckte Kosten</span>
            <h2
              className="font-black text-white"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em", marginTop: "16px" }}
            >
              Was nicht auf der Gehaltsabrechnung steht
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "\uD83D\uDD0D", title: "Rekrutierungskosten", desc: "1\u20133 Monate Suche + Personalvermittlung (10\u201320 % des Jahresgehalts) + Management-Zeit fuer Vorstellungsgespraeche." },
              { icon: "\u23F3", title: "Onboarding", desc: "3\u20136 Monate, bis ein neuer Mitarbeiter die volle Leistung erbringt. Sie bezahlen in dieser Zeit fuer 50 % Produktivitaet." },
              { icon: "\uD83D\uDD04", title: "Personalfluktuation", desc: "40 % der Marketing-Mitarbeiter verlassen das Unternehmen im ersten Jahr. Zurueck auf Anfang: Rekrutierung, Onboarding, verlorenes Know-how." },
              { icon: "\uD83D\uDCB0", title: "Opportunitaetskosten", desc: "Waehrend Ihr Mitarbeiter noch lernt, optimieren und wachsen Ihre Wettbewerber mit Agenturen bereits." },
            ].map((card, idx) => (
              <div
                key={idx}
                className="card-hover"
                style={{ padding: "28px 24px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid rgba(251,146,60,0.45)", borderRadius: "16px" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{card.icon}</div>
                <h3 className="font-bold text-white" style={{ fontSize: "0.9375rem", marginBottom: "10px", letterSpacing: "-0.01em" }}>{card.title}</h3>
                <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.65 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Final CTA -- */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#050505", padding: "120px 0 160px" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(86,219,132,0.07) 0%, transparent 70%)" }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "48rem", width: "100%", margin: "0 auto", textAlign: "center", padding: "0 2rem" }}>
          <h2
            className="font-black text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "20px" }}
          >
            Bereit, Ihre reale Situation zu berechnen?
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "40px", maxWidth: "460px", marginLeft: "auto", marginRight: "auto" }}>
            Lassen Sie uns 30 Minuten sprechen und wir praesentieren Ihnen ein individuelles Angebot.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <Link
              href="/ge/lass-uns-reden"
              className="group inline-flex items-center gap-3 btn-primary"
              style={{ fontSize: "1rem", padding: "18px 40px" }}
            >
              Kostenloses Gespraech vereinbaren
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="mailto:hello@nescodigital.com"
              style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.3)", textDecoration: "underline" }}
            >
              Oder senden Sie uns Ihre Berechnung per E-Mail
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

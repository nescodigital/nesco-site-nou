"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, XCircle, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

/* ── Red cards (NEIN) ──────────────────────────────────────────────────────── */

const neinCards = [
  {
    title: "Sie Ergebnisse in den ersten 2 Wochen erwarten",
    desc: "Digitales Marketing funktioniert mittel- und langfristig. Wenn die Erwartung ist, den Umsatz im ersten Monat zu verdoppeln, werden wir beide enttäuscht sein.",
  },
  {
    title: "Ihr gesamtes Marketingbudget unter 1.000\u20AC/Monat liegt",
    desc: "Unter diesem Betrag gibt es nicht genug Spielraum f\u00FCr Tests, Optimierung und qualitatives Management. Wir beginnen lieber gar nicht, als Mittelmä\u00DFigkeit zu liefern.",
  },
  {
    title: "Sie bereits 3+ Agenturen hatten und keine funktioniert hat",
    desc: "Manchmal liegt das Problem bei der Agentur. Manchmal liegt es woanders. Wenn sich das Muster wiederholt, ist es wichtig zu verstehen, warum — bevor wir zusammenarbeiten.",
  },
  {
    title: "Sie jede Anzeige, jeden Titel und jedes Bild genehmigen möchten",
    desc: "Wir brauchen kreative Freiheit und Ausführungsgeschwindigkeit. Ein 2-wöchiger Genehmigungsprozess pro Anzeige tötet die Kampagnenleistung.",
  },
  {
    title: "Ihr Produkt oder Ihre Dienstleistung nicht validiert ist",
    desc: "Wir können kein gutes Marketing für etwas machen, von dem wir nicht wissen, ob es funktioniert. Wir brauchen Belege, dass der Markt will, was Sie verkaufen.",
  },
  {
    title: "Sie den günstigsten Anbieter suchen",
    desc: "Es gibt günstigere Agenturen. Wenn der Preis das einzige Kriterium ist, sind wir nicht die richtige Wahl — und Sie sind nicht der richtige Kunde für uns.",
  },
  {
    title: "Sie nicht bereit sind, Geschäftsdaten zu teilen",
    desc: "Ohne Zugang zu realen Daten — Margen, LTV, Verkaufszahlen — optimieren wir blind. Transparenz funktioniert in beide Richtungen.",
  },
  {
    title: "Sie komplett auslagern und nichts mehr davon hören möchten",
    desc: "Wir sind ein Partner, kein unsichtbarer Dienstleister. Wir brauchen Ihre minimale monatliche Beteiligung, um echte Ergebnisse zu liefern.",
  },
];

/* ── Green cards (JA) ──────────────────────────────────────────────────────── */

const jaCards = [
  {
    title: "Sie ein validiertes Produkt haben und skalieren möchten",
    desc: "Sie wissen, dass Ihr Produkt funktioniert. Sie haben Ihre ersten zufriedenen Kunden. Jetzt möchten Sie mehr erreichen.",
  },
  {
    title: "Sie verstehen, dass Marketing eine Investition ist, keine Ausgabe",
    desc: "Sie betrachten das Marketingbudget als Wachstumskapital, nicht als Kosten, die zuerst gestrichen werden, wenn es schwierig wird.",
  },
  {
    title: "Sie bereit sind, 60-90 Tage auf solide Ergebnisse zu warten",
    desc: "Sie wissen, dass echte Optimierung Zeit braucht, und sind bereit, etwas Nachhaltiges aufzubauen.",
  },
  {
    title: "Sie einen Partner wollen, keinen Ausführenden",
    desc: "Sie schätzen es, wenn Ihnen jemand sagt, dass eine Idee nicht funktionieren wird — nicht nur, wenn er ausführt, was ihm gesagt wird.",
  },
  {
    title: "Sie mindestens 1.500\u20AC/Monat für Ads + Management bereitstellen können",
    desc: "Sie haben die Ressourcen, um richtig zu testen, zu optimieren und zu skalieren.",
  },
  {
    title: "Sie direkt kommunizieren und totale Transparenz schätzen",
    desc: "Sie möchten wissen, was passiert, wann es passiert — ob gut oder schlecht.",
  },
];

/* ── Scroll animation hook ─────────────────────────────────────────────────── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export default function MitWemWirNichtArbeitenPage() {
  const neinRef = useScrollReveal();
  const jaRef = useScrollReveal();

  return (
    <>
      <Header locale="de" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "100px" }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%", right: "-10%",
              width: 700, height: 700, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />

          <div className="relative page-container">
            <FadeInSection>
              <span className="badge mb-6">Ehrlichkeit zuerst</span>
              <h1
                className="font-black text-white"
                style={{
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  fontFeatureSettings: '"kern" 1, "liga" 1',
                  marginTop: "16px",
                  marginBottom: "28px",
                  maxWidth: "800px",
                  paddingBottom: "0.12em",
                  overflow: "visible",
                }}
              >
                Wir arbeiten nicht{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  mit jedem.
                </span>
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  maxWidth: "620px",
                  letterSpacing: "0.01em",
                }}
              >
                Wir sind selektiv, weil wir echte Ergebnisse liefern wollen. Eine schlechte
                Partnerschaft ist schlimmer als gar keine Zusammenarbeit.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ── NEIN section (red) ───────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container" ref={neinRef}>
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "4px 14px",
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    borderRadius: "9999px",
                    color: "#f87171",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  Nein
                </span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "20px",
                  }}
                >
                  Wir passen wahrscheinlich nicht zusammen, wenn...
                </h2>
              </div>
            </FadeInSection>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
                gap: "16px",
              }}
            >
              {neinCards.map((card, i) => (
                <div
                  key={i}
                  data-reveal
                  style={{
                    opacity: 0,
                    transform: "translateY(28px)",
                    transition: `opacity 0.55s ease ${i * 80}ms, transform 0.55s ease ${i * 80}ms`,
                    padding: "28px 28px 28px 24px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: "3px solid #ef4444",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <XCircle
                    size={20}
                    style={{ color: "#ef4444", marginTop: "2px", flexShrink: 0 }}
                  />
                  <div>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "8px" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.7,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JA section (green) ───────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container" ref={jaRef}>
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "4px 14px",
                    background: "rgba(86,219,132,0.08)",
                    border: "1px solid rgba(86,219,132,0.2)",
                    borderRadius: "9999px",
                    color: "#56db84",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  Ja
                </span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "20px",
                  }}
                >
                  Wir passen gut zusammen, wenn...
                </h2>
              </div>
            </FadeInSection>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
                gap: "16px",
              }}
            >
              {jaCards.map((card, i) => (
                <div
                  key={i}
                  data-reveal
                  style={{
                    opacity: 0,
                    transform: "translateY(28px)",
                    transition: `opacity 0.55s ease ${i * 80}ms, transform 0.55s ease ${i * 80}ms`,
                    padding: "28px 28px 28px 24px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(86,219,132,0.15)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <CheckCircle
                    size={20}
                    style={{ color: "#56db84", marginTop: "2px", flexShrink: 0 }}
                  />
                  <div>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "8px" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.7,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quote ────────────────────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "80px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div
                style={{
                  maxWidth: "720px",
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "48px 40px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.4), transparent)" }}
                />
                <p
                  style={{
                    fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    fontWeight: 500,
                    marginBottom: "20px",
                  }}
                >
                  &ldquo;Wir verlieren lieber einen Kunden, bevor wir anfangen, als ihn nach 3 Monaten
                  zu enttäuschen.&rdquo;
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#56db84",
                    fontWeight: 600,
                  }}
                >
                  — Das Nesco Digital Team
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    marginBottom: "20px",
                  }}
                >
                  Glauben Sie, dass wir zusammenpassen?
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "40px",
                  }}
                >
                  Wenn Sie bis hierhin gelesen haben und sich nicht in der obigen Liste
                  wiedergefunden haben, haben wir wahrscheinlich etwas zu besprechen.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "16px",
                  }}
                >
                  <Link
                    href="/ge/lass-uns-reden/"
                    className="group inline-flex items-center gap-3 btn-primary"
                    style={{ fontSize: "1rem", padding: "18px 40px" }}
                  >
                    Lassen Sie uns 30 Minuten sprechen
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/ge/wie-wir-arbeiten/"
                    className="group inline-flex items-center gap-3 btn-ghost"
                    style={{ fontSize: "1rem", padding: "18px 32px" }}
                  >
                    Sehen Sie, wie wir arbeiten
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

      </main>
      <Footer locale="de" />
    </>
  );
}

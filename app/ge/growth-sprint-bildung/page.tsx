import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { buildMetadata } from "@/lib/seo";
import { CheckCircle, XCircle, ArrowRight, Zap } from "lucide-react";
import { GrowthSprintCta } from "@/components/GrowthSprintCta";
import { GrowthSprintApplyButton } from "@/components/GrowthSprintApplyButton";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Growth Sprint für Online-Bildung | Umsatzlecks beheben | Nesco Digital",
  description:
    "Ein fokussiertes 6-Wochen-Engagement für Online-Bildungsmarken mit 10k–100k+/Monat. Wir auditieren Ihr gesamtes Umsatzsystem und implementieren die wirkungsvollsten Korrekturen. Keine Berichte, Ausführung.",
  path: "/ge/growth-sprint-bildung/",
  routeKey: "growthSprintEducation",
});

const included = {
  audit: [
    ["Funnel-Architektur-Review", "Wo Leads abspringen und warum"],
    ["E-Mail-System-Analyse", "Öffnungsraten, Klickraten, Umsatz pro Abonnent"],
    ["Angebots- und Preisstruktur-Review", "Lassen Sie Geld auf dem Tisch?"],
    ["Paid-Acquisition-Effizienz", "Generieren Ihre Anzeigen Gewinn oder nur Traffic?"],
    ["Operative Engpässe", "Was verlangsamt das Wachstum?"],
    ["KPI-Mapping", "Haben Sie die richtigen Zahlen vor Augen?"],
  ],
  impl: [
    ["Die wirkungsvollsten Umsatzlecks beheben", "Identifiziert im Audit"],
    ["Funnel-Stufen neu aufbauen oder optimieren", "Unterperformende Stufen werden behoben"],
    ["E-Mail-Sequenzen restrukturieren", "Für höhere Umsatzleistung"],
    ["Tracking und Reporting implementieren", "Klare Struktur, auf die Sie handeln können"],
    ["Operative Prozesse optimieren", "Friction entfernen, die die Ausführung verlangsamt"],
  ],
};

const forList = [
  "Online-Kursersteller und wissensbasierte Unternehmen mit einer bestehenden Zielgruppe",
  "Personal Brands, die Umsatz generieren und ohne zusätzliche Komplexität skalieren wollen",
  "Unternehmer, die Empfehlungen satt haben und Ausführung wollen",
  "Bestehende Betriebe , Sie brauchen etwas zu optimieren, nicht von Grund auf aufzubauen",
];

const notForList = [
  "Unternehmen, die noch keinen ersten Verkauf getätigt haben",
  "Gründer, die überzeugt werden wollen, nicht herausgefordert",
  "Wer einen hands-off Wachstumspartner sucht",
];

export default function GrowthSprintBildungPage() {
  return (
    <>
      <Header locale="de" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "100px" }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />

          {/* Animated orbs */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%", right: "-10%",
              width: 700, height: 700, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.06) 0%, transparent 70%)",
              animation: "heroGlow 14s ease-in-out infinite",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-10%", left: "-5%",
              width: 500, height: 500, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.03) 0%, transparent 70%)",
              animation: "heroGlow 18s ease-in-out infinite reverse",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "5%", left: "30%",
              width: 400, height: 400, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.025) 0%, transparent 70%)",
              animation: "heroGlow 22s ease-in-out infinite",
            }}
          />

          {/* Logo watermark */}
          <div
            className="absolute hidden lg:block pointer-events-none select-none"
            style={{
              top: "50%",
              right: "3%",
              transform: "translateY(-50%)",
              width: 480,
              height: 480,
              opacity: 0.05,
              filter: "invert(1) hue-rotate(180deg) contrast(1.8)",
              mixBlendMode: "screen",
              zIndex: 0,
            }}
          >
            <Image
              src="/logo mare Nesco.avif"
              alt=""
              width={480}
              height={480}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />

          <div className="relative page-container" style={{ zIndex: 1 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="badge">Growth Sprint · Online-Bildung</span>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(251,146,60,0.08)",
                  border: "1px solid rgba(251,146,60,0.2)",
                  color: "#fb923c",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Begrenzte Plätze
              </span>
            </div>

            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                fontFeatureSettings: '"kern" 1, "liga" 1',
                marginTop: "16px",
                marginBottom: "28px",
                maxWidth: "820px",
              }}
            >
              Growth Sprint{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Online-Bildung.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "580px",
                letterSpacing: "0.01em",
                marginBottom: "12px",
              }}
            >
              Für Online-Bildungsmarken mit{" "}
              <strong style={{ color: "#ffffff", fontWeight: 700 }}>10k–100k+/Monat</strong>{" "}
              die Geld auf dem Tisch liegen lassen.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.7,
                maxWidth: "540px",
                marginBottom: "40px",
              }}
            >
              Ein fokussiertes{" "}
              <strong style={{ color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>6-Wochen-Engagement</strong>{" "}
              in dem wir direkt in Ihrem Unternehmen arbeiten. Keine Berichte. Ausführung.
            </p>

            <GrowthSprintCta source="growth-sprint-bildung" locale="de" />

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                paddingTop: "40px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                maxWidth: "520px",
              }}
            >
              {[
                { value: "6 Wochen", label: "Festes Engagement" },
                { value: "10k–100k+/mo", label: "Monatlicher Umsatz" },
                { value: "100% Ausführung", label: "Keine Berichte" },
              ].map((s, i) => (
                <div key={i}>
                  <div
                    className="font-black tabular-nums"
                    style={{ fontSize: "1.375rem", color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "4px" }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Das Problem ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ maxWidth: "680px" }}>
                <span className="badge mb-6">Das Problem</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                    marginBottom: "32px",
                  }}
                >
                  Sie haben die Zielgruppe. Sie haben das Angebot.{" "}
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>Irgendwo leckt es.</span>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                    Sie haben eine Zielgruppe. Sie haben ein Angebot. Sie generieren Umsatz. Aber irgendwo zwischen Ihrem Funnel, Ihrem E-Mail-System, Ihrer Preisgestaltung und Ihren Abläufen gibt es Lecks.
                  </p>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                    Sie spüren es. Das Wachstum hat sich abgeflacht. Ihre Conversion-Raten sind nicht dort, wo sie sein sollten. Sie geben Geld für Werbung aus, aber die Zahlen stimmen nicht. Ihre E-Mail-Liste generiert nicht das, was sie könnte.
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.8,
                      fontWeight: 500,
                    }}
                  >
                    Das eigentliche Problem ist nicht der Aufwand. Es ist, dass Sie jemanden brauchen, der in die Maschine geht, genau findet, was kaputt ist, und es repariert , keinen Bericht schreibt, kein Strategie-Deck übergibt.{" "}
                    <span style={{ color: "#56db84" }}>Es tatsächlich repariert.</span>
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Was Es Ist ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div
                style={{
                  padding: "48px 56px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "24px",
                  position: "relative",
                  overflow: "hidden",
                  maxWidth: "800px",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.4), transparent)" }}
                />
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: "-40%", right: "-20%",
                    width: 300, height: 300, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
                  }}
                />
                <span className="badge mb-6">Was Der Growth Sprint Ist</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  Wir übergeben Ihnen keine Roadmap und verschwinden nicht.
                </h2>
                <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: "16px" }}>
                  Ein fokussiertes 6-Wochen-Engagement, in dem Nesco Digital direkt in Ihrem Unternehmen arbeitet, wir auditieren Ihr gesamtes Umsatzsystem und implementieren die wirkungsvollsten Korrekturen in Ihrem Funnel, E-Mail, Angebotsstruktur und Betrieb.
                </p>
                <p style={{ fontSize: "1rem", color: "#56db84", fontWeight: 600 }}>
                  Das ist keine Beratung. Wir führen aus.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Was Enthalten Ist ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Was Enthalten Ist</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                    marginBottom: "12px",
                  }}
                >
                  6 Wochen direkte Implementierung
                </h2>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "1rem" }}>
                  Zwei klare Phasen. Ein Ziel: mehr Umsatz.
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Wochen 1-2 */}
              <FadeInSection delay={0}>
                <div
                  style={{
                    padding: "40px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "4px 14px",
                      background: "rgba(96,165,250,0.08)",
                      border: "1px solid rgba(96,165,250,0.2)",
                      borderRadius: "9999px",
                      color: "#60a5fa",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "24px",
                    }}
                  >
                    Wochen 1–2
                  </div>
                  <h3
                    className="font-black text-white"
                    style={{ fontSize: "1.25rem", letterSpacing: "-0.01em", marginBottom: "24px" }}
                  >
                    Vollständiges Umsatzaudit
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {included.audit.map(([title, desc], i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <CheckCircle size={15} style={{ color: "#56db84", marginTop: "2px", flexShrink: 0 }} />
                        <div>
                          <span style={{ color: "#ffffff", fontSize: "0.875rem", fontWeight: 600 }}>{title}</span>
                          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8125rem" }}>, {desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>

              {/* Wochen 3-6 */}
              <FadeInSection delay={120}>
                <div
                  style={{
                    padding: "40px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(86,219,132,0.2)",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.4), transparent)" }}
                  />
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      top: "-30%", right: "-15%",
                      width: 250, height: 250, borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
                    }}
                  />
                  <div
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
                      marginBottom: "24px",
                    }}
                  >
                    Wochen 3–6
                  </div>
                  <h3
                    className="font-black text-white"
                    style={{ fontSize: "1.25rem", letterSpacing: "-0.01em", marginBottom: "24px" }}
                  >
                    Direkte Implementierung
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {included.impl.map(([title, desc], i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <ArrowRight size={15} style={{ color: "#56db84", marginTop: "2px", flexShrink: 0 }} />
                        <div>
                          <span style={{ color: "#ffffff", fontSize: "0.875rem", fontWeight: 600 }}>{title}</span>
                          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8125rem" }}>, {desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            </div>

            {/* End Deliverable */}
            <FadeInSection delay={200}>
              <div
                style={{
                  marginTop: "20px",
                  padding: "28px 32px",
                  background: "rgba(86,219,132,0.04)",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: "12px",
                    background: "rgba(86,219,132,0.1)",
                    border: "1px solid rgba(86,219,132,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Zap size={18} style={{ color: "#56db84" }} />
                </div>
                <div>
                  <div className="font-bold text-white" style={{ fontSize: "0.9375rem", marginBottom: "6px" }}>
                    End-Deliverable
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                    Ein saubereres, besser konvertierendes Umsatzsystem, vollständig implementiert, dokumentiert und bereit, ohne uns zu laufen.{" "}
                    <strong style={{ color: "#ffffff" }}>Sie behalten alles, was wir aufbauen.</strong>
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Für Wen ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Passend</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                  }}
                >
                  Ist das für Sie?
                </h2>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* For */}
              <FadeInSection delay={0}>
                <div>
                  <div
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
                      marginBottom: "24px",
                    }}
                  >
                    Das ist für Sie, wenn...
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {forList.map((p, i) => (
                      <div
                        key={i}
                        className="card-hover"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          padding: "16px 20px",
                          background: "#0a0a0a",
                          border: "1px solid rgba(255,255,255,0.06)",
                          borderRadius: "12px",
                        }}
                      >
                        <CheckCircle size={16} style={{ color: "#56db84", marginTop: "1px", flexShrink: 0 }} />
                        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Not for */}
              <FadeInSection delay={120}>
                <div>
                  <div
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
                      marginBottom: "24px",
                    }}
                  >
                    Das ist NICHT für Sie, wenn...
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {notForList.map((p, i) => (
                      <div
                        key={i}
                        className="card-hover"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          padding: "16px 20px",
                          background: "#0a0a0a",
                          border: "1px solid rgba(239,68,68,0.08)",
                          borderRadius: "12px",
                        }}
                      >
                        <XCircle size={16} style={{ color: "#f87171", marginTop: "1px", flexShrink: 0 }} />
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ── Investition ── */}
        <section id="investition" className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Investition</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                    marginBottom: "12px",
                  }}
                >
                  Einfache, transparente Preisgestaltung
                </h2>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "1rem" }}>
                  Zwei Optionen. Dasselbe 6-Wochen-Engagement.
                </p>
              </div>
            </FadeInSection>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                maxWidth: "760px",
                margin: "0 auto",
              }}
            >
              {/* Option A */}
              <FadeInSection delay={0} className="h-full">
                <div
                  style={{
                    padding: "40px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(86,219,132,0.25)",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.5), transparent)" }}
                  />
                  <div
                    style={{
                      display: "inline-block",
                      padding: "3px 12px",
                      background: "#56db84",
                      color: "#000",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      borderRadius: "9999px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "20px",
                    }}
                  >
                    Empfohlen
                  </div>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}
                  >
                    Option A · Vollzahlung
                  </div>
                  <div
                    className="font-black tabular-nums"
                    style={{ fontSize: "3.5rem", lineHeight: 1, color: "#ffffff", letterSpacing: "-0.04em", marginBottom: "4px" }}
                  >
                    4.500{" "}
                    <span style={{ fontSize: "1.75rem", color: "rgba(255,255,255,0.4)" }}>€</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", marginBottom: "32px", lineHeight: 1.6 }}>
                    Vor Kick-off bezahlt. Bestes Preis-Leistungs-Verhältnis.
                  </p>
                  <div style={{ marginTop: "auto" }}>
                  <GrowthSprintApplyButton
                    planLabel="4.500 € , Vollzahlung"
                    variant="primary"
                    label="Für diese Option bewerben"
                  />
                  </div>
                </div>
              </FadeInSection>

              {/* Option B */}
              <FadeInSection delay={120} className="h-full">
                <div
                  style={{
                    padding: "40px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: "26px", marginBottom: "20px" }} />
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}
                  >
                    Option B · Ratenzahlung
                  </div>
                  <div
                    className="font-black tabular-nums"
                    style={{ fontSize: "3.5rem", lineHeight: 1, color: "#ffffff", letterSpacing: "-0.04em", marginBottom: "4px" }}
                  >
                    5.500{" "}
                    <span style={{ fontSize: "1.75rem", color: "rgba(255,255,255,0.4)" }}>€</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", marginBottom: "8px", lineHeight: 1.6 }}>
                    2.750 € bei Unterzeichnung + 2.750 € in Woche 3
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", marginBottom: "32px" }}>
                    Vollständiges 6-Wochen-Engagement inklusive.
                  </p>
                  <div style={{ marginTop: "auto" }}>
                  <GrowthSprintApplyButton
                    planLabel="5.500 € , Ratenzahlung"
                    variant="ghost"
                    label="Für diese Option bewerben"
                  />
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <CtaBanner locale="de" />

      </main>
      <Footer locale="de" />
    </>
  );
}

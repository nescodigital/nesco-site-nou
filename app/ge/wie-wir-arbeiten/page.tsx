"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Phone,
  MessageCircle,
  BarChart3,
  FileText,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

/* ── Checklist items for hero animation ────────────────────────────────────── */

const CHECKLIST = [
  "Discovery-Gespräch (30 Min.)",
  "Audit und Angebot",
  "Onboarding und Kontozugang",
  "Erste Kampagnen live",
  "Kontinuierliche Optimierung",
  "Skalierung und Wachstum",
];

/* ── Onboarding timeline data ──────────────────────────────────────────────── */

const ONBOARDING_TIMELINE = [
  {
    days: "Tag 1-2",
    items: [
      "Zugang zu allen Konten (Google Ads, Meta, Analytics, Search Console)",
      "Vollständiges technisches Audit",
      "Identifizierung kritischer Probleme",
    ],
  },
  {
    days: "Tag 3-5",
    items: [
      "Wettbewerbs- und Marktanalyse",
      "Definition von ICP und Zielgruppensegmenten",
      "Keyword- und Interessenrecherche",
    ],
  },
  {
    days: "Tag 6-10",
    items: [
      "Kampagnenstrategie und -plan",
      "Erstellung von Konto- und Kampagnenstrukturen",
      "Vollständiges Tracking-Setup (GA4, Pixel, Conversions)",
    ],
  },
  {
    days: "Tag 11-14",
    items: [
      "Erste Kampagnen live",
      "Intensive Überwachung der ersten 48h",
      "Schnelle Anpassungen basierend auf ersten Daten",
    ],
  },
];

/* ── Months data ───────────────────────────────────────────────────────────── */

const MONTHS = [
  {
    icon: "\uD83D\uDCCB",
    badge: "Monat 1",
    badgeColor: "#60a5fa",
    title: "Daten & Richtung",
    items: [
      "Tägliche Optimierung basierend auf realen Daten",
      "A/B-Testing von Creatives und Zielgruppen",
      "Identifizierung was funktioniert und was nicht",
      "Wöchentlicher Bericht + 30-Minuten-Call",
    ],
    kpi: "KPI-Fokus: Stabilisierung CPL/CPA",
  },
  {
    icon: "\uD83D\uDCC8",
    badge: "Monat 2",
    badgeColor: "#56db84",
    title: "Optimierung",
    items: [
      "Skalierung profitabler Kampagnen",
      "Eliminierung von Nichtfunktionierendem",
      "Expansion in neue Zielgruppen",
      "Wöchentlicher Bericht + Call",
    ],
    kpi: "KPI-Fokus: Verbesserung ROAS/CPL um 20-30%",
  },
  {
    icon: "\uD83D\uDE80",
    badge: "Monat 3",
    badgeColor: "#fb923c",
    title: "Skalierung",
    items: [
      "Budgeterhöhung bei validierten Kampagnen",
      "Neue Kampagnen (Remarketing, Lookalike)",
      "Landing-Page-Optimierung",
      "Strategie für Monat 4+",
    ],
    kpi: "KPI-Fokus: Profitable Skalierung",
  },
];

/* ── Communication channels ────────────────────────────────────────────────── */

const COMM_CHANNELS = [
  {
    Icon: MessageCircle,
    label: "WhatsApp / Telegram",
    desc: "Tägliche Kommunikation für Dringendes und schnelle Updates. Antwort innerhalb von 4h während der Geschäftszeiten.",
  },
  {
    Icon: Phone,
    label: "Wöchentlicher Call",
    desc: "30 Minuten jede Woche. Wir analysieren Daten, besprechen die Richtung, beantworten Fragen.",
  },
  {
    Icon: BarChart3,
    label: "Live-Dashboard",
    desc: "Permanenter Zugang zu Ihrem Dashboard mit allen Metriken in Echtzeit. Kein Warten auf den Monatsbericht.",
  },
  {
    Icon: FileText,
    label: "Monatsbericht",
    desc: "Vollständiges Dokument mit allem, was letzten Monat passiert ist, und dem Plan für den nächsten Monat.",
  },
];

/* ── What we never do ──────────────────────────────────────────────────────── */

const NEVER_DO = [
  {
    title: "Berichte, die schlechte Ergebnisse verbergen",
    desc: "Wenn ein Monat schwach war, sagen wir es Ihnen direkt und erklären warum und was wir anders machen.",
  },
  {
    title: "Ausreden über Algorithmen oder den Markt",
    desc: "Der Markt ist für alle gleich. Wenn Ihre Wettbewerber wachsen und Sie nicht, liegt das Problem nicht am Markt.",
  },
  {
    title: "Garantierte Ergebnisversprechen",
    desc: "Keine seriöse Agentur garantiert ROAS oder Positionen. Wir garantieren den Prozess, die Transparenz und das totale Engagement.",
  },
];

/* ── Pricing tiers ─────────────────────────────────────────────────────────── */

const PRICING = [
  {
    tier: "Entry",
    channels: "1 Kanal",
    price: "Ab 1.500\u20AC/Monat",
    desc: "Management 1 Plattform + Strategie + Reporting",
  },
  {
    tier: "Growth",
    channels: "2-3 Kanäle",
    price: "Ab 2.500\u20AC/Monat",
    desc: "Multi-Kanal-Management + integrierte Strategie",
    featured: true,
  },
  {
    tier: "Scale",
    channels: "Full Service",
    price: "Ab 4.500\u20AC/Monat",
    desc: "Alle Kanäle + Webdesign + E-Mail + CRO",
  },
];

/* ── Animated checklist component ──────────────────────────────────────────── */

function AnimatedChecklist() {
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let count = 0;
          const interval = setInterval(() => {
            count += 1;
            setVisibleCount(count);
            if (count >= CHECKLIST.length) clearInterval(interval);
          }, 350);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {CHECKLIST.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            opacity: i < visibleCount ? 1 : 0.15,
            transform: i < visibleCount ? "translateX(0)" : "translateX(12px)",
            transition: "opacity 0.45s ease, transform 0.45s ease",
          }}
        >
          <CheckCircle
            size={18}
            style={{
              color: i < visibleCount ? "#56db84" : "rgba(255,255,255,0.15)",
              flexShrink: 0,
              transition: "color 0.45s ease",
            }}
          />
          <span
            style={{
              fontSize: "0.9375rem",
              color: i < visibleCount ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)",
              fontWeight: 500,
              transition: "color 0.45s ease",
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export default function WieWirArbeitenPage() {
  return (
    <>
      <style>{`
        @keyframes heroGlow {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
      `}</style>
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
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />

          <div className="relative page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <FadeInSection>
                  <span className="badge mb-6">Unser Prozess</span>
                  <h1
                    className="font-black text-white"
                    style={{
                      fontSize: "clamp(3rem, 7vw, 5.5rem)",
                      lineHeight: 0.92,
                      letterSpacing: "-0.03em",
                      fontFeatureSettings: '"kern" 1, "liga" 1',
                      marginTop: "16px",
                      marginBottom: "28px",
                      maxWidth: "700px",
                      paddingBottom: "0.12em",
                      overflow: "visible",
                    }}
                  >
                    Was passiert, nachdem Sie uns{" "}
                    <span
                      style={{
                        background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      kontaktieren
                    </span>
                  </h1>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      maxWidth: "560px",
                      letterSpacing: "0.01em",
                      marginBottom: "40px",
                    }}
                  >
                    Keine Überraschungen, keine undurchsichtigen Prozesse. So sieht eine
                    Zusammenarbeit mit Nesco Digital aus — vom ersten Gespräch bis zur Skalierung.
                  </p>
                  <Link
                    href="/ge/lass-uns-reden/"
                    className="group inline-flex items-center gap-3 btn-primary"
                    style={{ fontSize: "1rem", padding: "18px 40px" }}
                  >
                    Starten Sie den Prozess
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                </FadeInSection>
              </div>

              {/* Right - animated checklist (desktop) */}
              <div className="hidden lg:block">
                <div
                  style={{
                    padding: "40px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(86,219,132,0.15)",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
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
                  <AnimatedChecklist />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Erster Anruf ─────────────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <span className="badge mb-6">Bevor wir irgendetwas unterschreiben</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  fontFeatureSettings: '"kern" 1, "liga" 1',
                  marginTop: "20px",
                  marginBottom: "40px",
                }}
              >
                Das Discovery-Gespräch — 30 Minuten
              </h2>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div
                style={{
                  padding: "40px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "20px",
                  maxWidth: "720px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.4), transparent)" }}
                />
                <ul style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
                  {[
                    "Wir verstehen Ihr Unternehmen, Ihre Ziele und Ihre aktuelle Situation",
                    "Wir sagen Ihnen ehrlich, ob und wie wir helfen können",
                    "Wenn kein echtes Potenzial für eine Zusammenarbeit besteht, sagen wir es Ihnen direkt",
                    "Kein Pitch, kein Druck, keine PowerPoint-Präsentationen",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <CheckCircle size={16} style={{ color: "#56db84", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    padding: "16px 20px",
                    background: "rgba(86,219,132,0.04)",
                    border: "1px solid rgba(86,219,132,0.15)",
                    borderRadius: "12px",
                  }}
                >
                  <span style={{ fontSize: "0.8125rem", color: "#56db84", fontWeight: 600 }}>
                    Output:
                  </span>{" "}
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)" }}>
                    Sie wissen noch am selben Tag, ob wir zusammenarbeiten
                  </span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Onboarding — Tag 1-14 ────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Onboarding — Tag 1-14</span>
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
                  Die ersten 2 Wochen — Das Fundament
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ONBOARDING_TIMELINE.map((block, bi) => (
                <FadeInSection key={bi} delay={bi * 100}>
                  <div
                    style={{
                      padding: "28px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        padding: "3px 12px",
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
                      {block.days}
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {block.items.map((item, ii) => (
                        <li key={ii} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <CheckCircle size={14} style={{ color: "#56db84", marginTop: "3px", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={500}>
              <div
                style={{
                  marginTop: "20px",
                  padding: "16px 20px",
                  background: "rgba(86,219,132,0.04)",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "0.875rem", color: "#56db84", fontWeight: 600 }}>
                  Output:
                </span>{" "}
                <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)" }}>
                  Am Ende von Woche 2 laufen die Kampagnen und die Daten fließen
                </span>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Monat 1-3 ────────────────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Die ersten 90 Tage</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                  }}
                >
                  Monat 1 bis Monat 3
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {MONTHS.map((month, mi) => (
                <FadeInSection key={mi} delay={mi * 120}>
                  <div
                    style={{
                      padding: "32px",
                      background: "#0a0a0a",
                      border: `1px solid ${mi === 2 ? "rgba(251,146,60,0.2)" : mi === 1 ? "rgba(86,219,132,0.15)" : "rgba(255,255,255,0.06)"}`,
                      borderRadius: "20px",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {mi > 0 && (
                      <div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${mi === 2 ? "rgba(251,146,60,0.3)" : "rgba(86,219,132,0.3)"}, transparent)`,
                        }}
                      />
                    )}
                    <div style={{ fontSize: "1.75rem", marginBottom: "16px" }}>{month.icon}</div>
                    <div
                      style={{
                        display: "inline-block",
                        padding: "3px 12px",
                        background: `${month.badgeColor}14`,
                        border: `1px solid ${month.badgeColor}33`,
                        borderRadius: "9999px",
                        color: month.badgeColor,
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "16px",
                      }}
                    >
                      {month.badge}
                    </div>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1.125rem", letterSpacing: "-0.01em", marginBottom: "20px" }}
                    >
                      {month.title}
                    </h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                      {month.items.map((item, ii) => (
                        <li key={ii} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <CheckCircle size={14} style={{ color: month.badgeColor, marginTop: "3px", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div
                      style={{
                        padding: "10px 14px",
                        background: `${month.badgeColor}0a`,
                        borderRadius: "10px",
                        fontSize: "0.75rem",
                        color: month.badgeColor,
                        fontWeight: 600,
                      }}
                    >
                      {month.kpi}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Kommunikation ────────────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Kommunikation</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                  }}
                >
                  Wie wir kommunizieren
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {COMM_CHANNELS.map((ch, ci) => {
                const IconComp = ch.Icon;
                return (
                  <FadeInSection key={ci} delay={ci * 100}>
                    <div
                      className="card-hover"
                      style={{
                        padding: "32px",
                        background: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "16px",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "12px",
                          background: "rgba(86,219,132,0.08)",
                          border: "1px solid rgba(86,219,132,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "20px",
                        }}
                      >
                        <IconComp size={20} style={{ color: "#56db84" }} />
                      </div>
                      <h3
                        className="font-bold text-white"
                        style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "10px" }}
                      >
                        {ch.label}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
                        {ch.desc}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Was wir nicht tun (red) ──────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
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
                  Transparenz
                </span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                  }}
                >
                  Was Sie von uns niemals sehen werden
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {NEVER_DO.map((item, i) => (
                <FadeInSection key={i} delay={i * 120}>
                  <div
                    style={{
                      padding: "32px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(239,68,68,0.12)",
                      borderRadius: "20px",
                      height: "100%",
                    }}
                  >
                    <XCircle size={24} style={{ color: "#ef4444", marginBottom: "16px" }} />
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "12px" }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                      {item.desc}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Preise ───────────────────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
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
                  Was es kostet
                </h2>
              </div>
            </FadeInSection>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
              style={{ maxWidth: "960px", margin: "0 auto" }}
            >
              {PRICING.map((plan, pi) => (
                <FadeInSection key={pi} delay={pi * 120}>
                  <div
                    style={{
                      padding: "36px",
                      background: "#0a0a0a",
                      border: plan.featured
                        ? "1px solid rgba(86,219,132,0.25)"
                        : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "20px",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {plan.featured && (
                      <>
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
                            marginBottom: "16px",
                            alignSelf: "flex-start",
                          }}
                        >
                          Empfohlen
                        </div>
                      </>
                    )}
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
                      {plan.tier} · {plan.channels}
                    </div>
                    <div
                      className="font-black"
                      style={{
                        fontSize: "1.75rem",
                        lineHeight: 1.1,
                        color: "#ffffff",
                        letterSpacing: "-0.02em",
                        marginBottom: "12px",
                      }}
                    >
                      {plan.price}
                    </div>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.65,
                        flex: 1,
                      }}
                    >
                      {plan.desc}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={400}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.35)",
                  marginTop: "24px",
                }}
              >
                Alle Pakete beinhalten kostenloses Setup im ersten Monat
              </p>
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
                  Bereit zu starten?
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "16px",
                    marginTop: "32px",
                  }}
                >
                  <Link
                    href="/ge/lass-uns-reden/"
                    className="group inline-flex items-center gap-3 btn-primary"
                    style={{ fontSize: "1rem", padding: "18px 40px" }}
                  >
                    Discovery-Gespräch vereinbaren
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/ge/mit-wem-wir-nicht-arbeiten/"
                    className="group inline-flex items-center gap-3 btn-ghost"
                    style={{ fontSize: "1rem", padding: "18px 32px" }}
                  >
                    Sehen Sie, mit wem wir nicht arbeiten
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

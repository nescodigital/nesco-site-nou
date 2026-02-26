"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* ─── Checklist items (hero animation) ────────────────────────────────────────── */

const CHECKLIST = [
  "Apel de discovery (30 min)",
  "Audit \u0219i propunere",
  "Proces de start \u0219i acces conturi",
  "Primele campanii live",
  "Optimizare continu\u0103",
  "Scalare \u0219i cre\u0219tere",
];

/* ─── Timeline data ──────────────────────────────────────────────────────────── */

const TIMELINE = [
  {
    label: "Ziua 1-2",
    items: [
      "Acces la toate conturile (Google Ads, Meta, Analytics, Search Console)",
      "Audit tehnic complet",
      "Identificare probleme critice",
    ],
  },
  {
    label: "Ziua 3-5",
    items: [
      "Analiz\u0103 competi\u021bie \u0219i pia\u021b\u0103",
      "Definire ICP \u0219i segmente de audien\u021b\u0103",
      "Cercetare cuvinte cheie \u0219i interese",
    ],
  },
  {
    label: "Ziua 6-10",
    items: [
      "Strategie \u0219i plan de campanii",
      "Creare structur\u0103 conturi \u0219i campanii",
      "Setup tracking complet (GA4, Pixel, conversii)",
    ],
  },
  {
    label: "Ziua 11-14",
    items: [
      "Primele campanii live",
      "Monitorizare intensiv\u0103 primele 48h",
      "Ajust\u0103ri rapide bazate pe primele date",
    ],
  },
];

/* ─── Months data ────────────────────────────────────────────────────────────── */

const MONTHS = [
  {
    icon: "\ud83d\udccb",
    title: "Luna 1 \u2014 Date \u0219i direc\u021bie",
    items: [
      "Optimizare zilnic\u0103 bazat\u0103 pe date reale",
      "A/B testing creatives \u0219i audien\u021be",
      "Identificare ce func\u021bioneaz\u0103 \u0219i ce nu",
      "Raport s\u0103pt\u0103m\u00e2nal + call de 30 minute",
    ],
    kpi: "KPI focus: Stabilizare CPL/CPA",
  },
  {
    icon: "\ud83d\udcc8",
    title: "Luna 2 \u2014 Optimizare",
    items: [
      "Scalare pe campaniile profitabile",
      "Eliminare ce nu func\u021bioneaz\u0103",
      "Extindere \u00een audien\u021be noi",
      "Raport + call s\u0103pt\u0103m\u00e2nal",
    ],
    kpi: "KPI focus: \u00cembun\u0103t\u0103\u021bire ROAS/CPL cu 20-30%",
  },
  {
    icon: "\ud83d\ude80",
    title: "Luna 3 \u2014 Scalare",
    items: [
      "Cre\u0219tere bugete pe campanii validate",
      "Campanii noi (remarketing, lookalike)",
      "Optimizare landing pages",
      "Strategie pentru luna 4+",
    ],
    kpi: "KPI focus: Scalare profitabil\u0103",
  },
];

/* ─── Communication cards ────────────────────────────────────────────────────── */

const COMMUNICATION = [
  {
    icon: "\ud83d\udcf1",
    title: "WhatsApp / Telegram",
    desc: "Comunicare zilnic\u0103 pentru urgen\u021be \u0219i updates rapide. R\u0103spuns \u00een max 4h \u00een timpul programului.",
  },
  {
    icon: "\ud83d\udcde",
    title: "Call s\u0103pt\u0103m\u00e2nal",
    desc: "30 minute \u00een fiecare s\u0103pt\u0103m\u00e2n\u0103. Analiz\u0103m datele, discut\u0103m direc\u021bia, r\u0103spundem la \u00eentreb\u0103ri.",
  },
  {
    icon: "\ud83d\udcca",
    title: "Dashboard live",
    desc: "Acces permanent la dashboard-ul t\u0103u cu toate metricile \u00een timp real. Nu a\u0219tep\u021bi raportul lunar s\u0103 \u0219tii ce se \u00eent\u00e2mpl\u0103.",
  },
  {
    icon: "\ud83d\udcc4",
    title: "Raport lunar",
    desc: "Document complet cu tot ce s-a \u00eent\u00e2mplat luna trecut\u0103 \u0219i planul pentru luna urm\u0103toare.",
  },
];

/* ─── "Ce nu facem" cards ────────────────────────────────────────────────────── */

const DONT_DO = [
  {
    title: "Rapoarte care ascund rezultatele slabe",
    desc: "Dac\u0103 o lun\u0103 a fost slab\u0103, \u00ee\u021bi spunem direct \u0219i \u00ee\u021bi explic\u0103m de ce \u0219i ce facem diferit.",
  },
  {
    title: "Scuze despre algoritmi sau pia\u021b\u0103",
    desc: "Pia\u021ba e aceea\u0219i pentru to\u021bi. Dac\u0103 concuren\u021bii t\u0103i cresc \u0219i tu nu, problema nu e pia\u021ba.",
  },
  {
    title: "Promisiuni de rezultate garantate",
    desc: "Nicio agen\u021bie serioas\u0103 nu garanteaz\u0103 ROAS sau pozi\u021bii. Garant\u0103m procesul, transparen\u021ba \u0219i implicarea total\u0103.",
  },
];

/* ─── Pricing cards ──────────────────────────────────────────────────────────── */

const PRICING = [
  {
    tier: "Entry",
    subtitle: "1 canal",
    price: "De la 1.500\u20ac/lun\u0103",
    desc: "Management 1 platform\u0103 + strategie + raportare",
  },
  {
    tier: "Growth",
    subtitle: "2-3 canale",
    price: "De la 2.500\u20ac/lun\u0103",
    desc: "Management multi-canal + strategie integrat\u0103",
  },
  {
    tier: "Scale",
    subtitle: "full service",
    price: "De la 4.500\u20ac/lun\u0103",
    desc: "Toate canalele + webdesign + email + CRO",
  },
];

/* ─── Scroll animation hook ───────────────────────────────────────────────────── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll<HTMLElement>(".scroll-reveal");
    children.forEach((child) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(28px)";
      child.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

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
      { threshold: 0.1 }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─── Page ────────────────────────────────────────────────────────────────────── */

export default function CumLucramPage() {
  const wrapperRef = useScrollReveal();

  return (
    <>
      {/* Checklist loop animation keyframes */}
      <style>{`
        @keyframes checkIn {
          0%   { opacity: 0; transform: translateX(-8px); }
          15%  { opacity: 1; transform: translateX(0); }
          85%  { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(8px); }
        }
      `}</style>

      <Header locale="ro" />

      <main style={{ backgroundColor: "#050505" }} ref={wrapperRef}>
        {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "100px" }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%",
              right: "-10%",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />

          <div className="relative page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div className="scroll-reveal">
                <span className="badge mb-6" style={{ display: "inline-flex" }}>Procesul Nostru</span>
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
                  }}
                >
                  Ce se &#x00ee;nt&#x00e2;mpl&#x103; dup&#x103; ce ne contactezi
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
                  F&#x103;r&#x103; surprize, f&#x103;r&#x103; procese obscure. Iat&#x103; exact cum arat&#x103; o colaborare cu Nesco Digital de la prima discu&#x021b;ie p&#x00e2;n&#x103; la scalare.
                </p>
                <Link
                  href="/contact/"
                  className="btn-primary"
                  style={{ fontSize: "1rem", padding: "18px 40px" }}
                >
                  &#x00ce;ncepe procesul &rarr;
                </Link>
              </div>

              {/* Right — animated checklist (desktop only) */}
              <div className="hidden lg:flex flex-col gap-3" style={{ paddingLeft: "32px" }}>
                {CHECKLIST.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 20px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "12px",
                      animation: `checkIn 6s ${i * 0.5}s ease-in-out infinite`,
                    }}
                  >
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "6px",
                        background: "rgba(86,219,132,0.12)",
                        border: "1px solid rgba(86,219,132,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        color: "#56db84",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      &#x2713;
                    </span>
                    <span style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PRIMUL APEL ═══════════════════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="scroll-reveal" style={{ marginBottom: "48px" }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>&#x00ce;nainte de orice</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                &#x00ce;nainte s&#x103; semn&#x103;m orice
              </h2>
            </div>

            <div
              className="scroll-reveal"
              style={{
                padding: "40px",
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                maxWidth: "720px",
              }}
            >
              <h3
                className="font-bold text-white"
                style={{ fontSize: "1.125rem", letterSpacing: "-0.01em", marginBottom: "24px" }}
              >
                Apelul de discovery &mdash; 30 minute
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "\u00cen\u021belegem business-ul t\u0103u, obiectivele \u0219i situa\u021bia actual\u0103",
                  "\u00ce\u021bi spunem sincer dac\u0103 \u0219i cum te putem ajuta",
                  "Dac\u0103 nu exist\u0103 poten\u021bial real de colaborare, \u00ee\u021bi spunem direct",
                  "F\u0103r\u0103 prezentare, f\u0103r\u0103 presiune, f\u0103r\u0103 prezent\u0103ri PowerPoint",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ color: "#56db84", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>&bull;</span>
                    <span style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: "28px",
                  padding: "14px 20px",
                  background: "rgba(86,219,132,0.06)",
                  border: "1px solid rgba(86,219,132,0.2)",
                  borderRadius: "12px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#56db84",
                }}
              >
                &#x2192; &#x0218;tii dac&#x103; colabor&#x103;m sau nu &#x00ee;n aceea&#x0219;i zi
              </div>
            </div>
          </div>
        </section>

        {/* ══ ONBOARDING — ZIUA 1-14 ═════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="scroll-reveal" style={{ marginBottom: "48px" }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>Ziua 1-14</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Primele 2 s&#x103;pt&#x103;m&#x00e2;ni &mdash; Funda&#x021b;ia
              </h2>
            </div>

            {/* Vertical timeline */}
            <div style={{ position: "relative", paddingLeft: "40px" }}>
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: "11px",
                  top: "8px",
                  bottom: "8px",
                  width: "2px",
                  background: "linear-gradient(to bottom, #56db84, rgba(86,219,132,0.1))",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                {TIMELINE.map((step, i) => (
                  <div key={i} className="scroll-reveal" style={{ position: "relative" }}>
                    {/* Green dot */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-33px",
                        top: "6px",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        background: "#56db84",
                        border: "3px solid #050505",
                        boxShadow: "0 0 12px rgba(86,219,132,0.4)",
                      }}
                    />
                    <div
                      style={{
                        padding: "28px",
                        background: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "16px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#56db84",
                          marginBottom: "12px",
                        }}
                      >
                        {step.label}
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                        {step.items.map((item, j) => (
                          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                            <span style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0, marginTop: "2px" }}>&bull;</span>
                            <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Output highlight */}
              <div
                className="scroll-reveal"
                style={{
                  marginTop: "32px",
                  padding: "14px 20px",
                  background: "rgba(86,219,132,0.06)",
                  border: "1px solid rgba(86,219,132,0.2)",
                  borderRadius: "12px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#56db84",
                }}
              >
                &#x2192; La final de s&#x103;pt&#x103;m&#x00e2;na 2, campaniile ruleaz&#x103; &#x0219;i datele curg
              </div>
            </div>
          </div>
        </section>

        {/* ══ LUNA 1-3 ═══════════════════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>Luna 1-3</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Primele 3 luni de colaborare
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {MONTHS.map((month, i) => (
                <div
                  key={i}
                  className="scroll-reveal card-hover"
                  style={{
                    padding: "32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{month.icon}</div>
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "16px" }}
                  >
                    {month.title}
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                    {month.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span style={{ color: "#56db84", flexShrink: 0, marginTop: "2px", fontSize: "0.75rem" }}>&bull;</span>
                        <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: "20px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#56db84",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {month.kpi}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COMUNICARE ═════════════════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>Comunicare</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Cum comunic&#x103;m
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {COMMUNICATION.map((card, i) => (
                <div
                  key={i}
                  className="scroll-reveal card-hover"
                  style={{
                    padding: "32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{card.icon}</div>
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "10px" }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CE NU FACEM ════════════════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
              <span
                className="badge mb-6"
                style={{
                  display: "inline-flex",
                  borderColor: "rgba(239,68,68,0.3)",
                  color: "#ef4444",
                  background: "rgba(239,68,68,0.08)",
                }}
              >
                Transparen&#x021b;&#x103;
              </span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Ce nu vei vedea niciodat&#x103; de la noi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {DONT_DO.map((card, i) => (
                <div
                  key={i}
                  className="scroll-reveal card-hover"
                  style={{
                    padding: "32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: "3px solid #ef4444",
                    borderRadius: "16px",
                  }}
                >
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "10px" }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PRICING ════════════════════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>Investi&#x021b;ie</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                C&#x00e2;t cost&#x103;
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PRICING.map((pkg, i) => (
                <div
                  key={i}
                  className="scroll-reveal card-hover"
                  style={{
                    padding: "36px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#56db84",
                      marginBottom: "8px",
                    }}
                  >
                    {pkg.tier} ({pkg.subtitle})
                  </div>
                  <div
                    className="font-black text-white"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                      marginBottom: "12px",
                    }}
                  >
                    {pkg.price}
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                    {pkg.desc}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="scroll-reveal"
              style={{
                textAlign: "center",
                marginTop: "28px",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.35)",
                fontStyle: "italic",
              }}
            >
              Toate pachetele includ setup gratuit &#x00ee;n prima lun&#x103;
            </p>
          </div>
        </section>

        {/* ══ CTA FINAL ══════════════════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container text-center">
            <div className="scroll-reveal">
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginBottom: "16px",
                }}
              >
                Gata s&#x103; &#x00ee;ncepem?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                  margin: "0 auto 40px",
                }}
              >
                Programeaz&#x103; un apel gratuit de 30 de minute &#x0219;i hai s&#x103; vedem dac&#x103; ne potrivim.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                <Link
                  href="/contact/"
                  className="btn-primary"
                  style={{ fontSize: "1rem", padding: "18px 40px" }}
                >
                  Programeaz&#x103; apelul de discovery &rarr;
                </Link>
                <Link
                  href="/cu-cine-nu-lucram/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "18px 28px",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  Vezi cu cine nu lucr&#x103;m &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="ro" />
    </>
  );
}

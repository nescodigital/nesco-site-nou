import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Zap, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Growth Sprint E-commerce | Scalare Profitabilă 50k–500k+/lună | Nesco Digital",
  description:
    "Un angajament de 6 săptămâni pentru branduri e-commerce cu vânzări de 50k–500k+/lună. Audităm fiecare sistem de revenue și implementăm fix-urile cu cel mai mare impact în achiziție, conversie, retenție și operațiuni.",
  path: "/growth-sprint-ecommerce/",
  routeKey: "growthSprintEcommerce",
});

const auditItems = [
  "Audit achiziție plătită — ROAS, CPM, eficiența funnel-ului, alocarea bugetului",
  "Analiza conversiei pe pagini de produs și checkout — unde pierzi cumpărători",
  "Audit revenue email și SMS — flow-uri, secvențe, revenue per subscriber",
  "Structura AOV și LTV — upsell-uri, bundle-uri, rate de reachizitie",
  "Review operațional — fricțiune fulfillment, blocaje echipă, gaps de proces",
  "Structura KPI și tracking — măsori ce contează cu adevărat?",
];

const implItems = [
  "Rezolvăm cele mai importante leak-uri de conversie și retenție din audit",
  "Reconstruim sau optimizăm flow-urile de email și SMS cu performanță slabă",
  "Restructurăm strategia de achiziție pentru profitabilitate, nu doar volum",
  "Implementăm îmbunătățiri AOV și LTV — flow-uri upsell, structuri bundle",
  "Configurăm tracking KPI curat și sisteme de raportare",
];

const forList = [
  "Branduri e-commerce la 50k–500k+/lună cu buget real de ads și operațiuni existente",
  "Fondatori care simt că creșterea s-a oprit deși cheltuielile de marketing cresc",
  "Business owners care vor un operator, nu un alt vendor",
  "Branduri cu tech stack existent — Shopify, Klaviyo, Meta, Google — gata de optimizat",
];

const notForList = [
  "Branduri fără revenue lunar consistent",
  "Businesses care caută pe cineva să le gestioneze ads-urile zilnic",
  "Fondatori care vor slide-uri de strategie, nu implementare",
];

export default function GrowthSprintEcommercePage() {
  return (
    <>
      <Header locale="ro" />
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
            <div className="flex items-center flex-wrap gap-2 mb-6">
              <span className="badge">Growth Sprint</span>
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
                E-Commerce
              </span>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(96,165,250,0.08)",
                  border: "1px solid rgba(96,165,250,0.2)",
                  color: "#60a5fa",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Scalare Profitabilă
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
              Growth Sprint
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                E-commerce.
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
              Pentru branduri de e-commerce cu vânzări de{" "}
              <strong style={{ color: "#ffffff", fontWeight: 700 }}>50k–500k+/lună</strong>{" "}
              care scalează cheltuielile de ads dar nu scalează profitul.
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
              Un engagement concentrat de{" "}
              <strong style={{ color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>6 săptămâni</strong>{" "}
              în care Nesco Digital operează direct în afacerea ta.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <Link href="/contact/" className="btn-primary">
                <Zap size={16} />
                Programează un Apel
                <ArrowRight size={16} />
              </Link>
              <a href="#investitie" className="btn-ghost">
                Vezi prețuri
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                paddingTop: "40px",
                maxWidth: "520px",
              }}
            >
              {[
                { value: "6 săptămâni", label: "implementare directă" },
                { value: "50k–500k+", label: "venituri lunare target" },
                { value: "100%", label: "executat, nu prezentat" },
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

        {/* ── Problema ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ maxWidth: "680px" }}>
                <span className="badge mb-6">Problema</span>
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
                  Rulezi ads. Ai trafic.{" "}
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>Profitul nu crește.</span>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                    Rulezi campanii. Procesezi comenzi. Dar marginile sunt mai mici decât ar trebui, ROAS-ul scade constant, și cu cât cheltuiești mai mult, cu atât pare mai puțin profitabil.
                  </p>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                    Ai optimizat ce poți vedea — reclamele, poate homepage-ul. Dar pierderile reale sunt ascunse: în drop-off-urile din funnel, în performanța slabă a emailului și SMS-ului, în gap-urile de AOV și LTV, și în fricțiunea operațională care îți mănâncă eficiența.
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.8,
                      fontWeight: 500,
                    }}
                  >
                    Nu ai nevoie de o altă agenție care să-ți gestioneze campaniile. Ai nevoie de cineva care să intre în business, să găsească unde se pierd banii și să{" "}
                    <span style={{ color: "#56db84" }}>închidă găurile.</span>
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Ce Este ── */}
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
                <span className="badge mb-6">Ce Este Growth Sprint</span>
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
                  Nu îți oferim un plan de acțiune și dispărem.
                </h2>
                <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: "16px" }}>
                  Un engagement concentrat de 6 săptămâni în care Nesco Digital operează direct în afacerea ta e-commerce — auditând fiecare sistem de revenue și implementând cele mai importante fix-uri în achiziție, conversie, retenție și operațiuni.
                </p>
                <p style={{ fontSize: "1rem", color: "#56db84", fontWeight: 600 }}>
                  Acesta nu este consultanță. Noi executăm.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Ce Include ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Ce Include</span>
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
                  6 săptămâni de implementare directă
                </h2>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "1rem" }}>
                  Două faze clare. Un singur obiectiv: mai mult profit.
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Week 1-2 */}
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
                    Săptămânile 1–2
                  </div>
                  <h3
                    className="font-black text-white"
                    style={{ fontSize: "1.25rem", letterSpacing: "-0.01em", marginBottom: "24px" }}
                  >
                    Audit Complet al Revenue-ului
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {auditItems.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <CheckCircle size={15} style={{ color: "#56db84", marginTop: "3px", flexShrink: 0 }} />
                        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>

              {/* Week 3-6 */}
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
                    Săptămânile 3–6
                  </div>
                  <h3
                    className="font-black text-white"
                    style={{ fontSize: "1.25rem", letterSpacing: "-0.01em", marginBottom: "24px" }}
                  >
                    Implementare Directă
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {implItems.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <ArrowRight size={15} style={{ color: "#56db84", marginTop: "3px", flexShrink: 0 }} />
                        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            </div>

            {/* Deliverable */}
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
                    Livrabil Final
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                    Un sistem de revenue mai profitabil și mai bine convertit — implementat, documentat și pregătit să scaleze.{" "}
                    <strong style={{ color: "#ffffff" }}>Păstrezi tot ce construim.</strong>
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Cui se adresează ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Potrivire</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                  }}
                >
                  Este pentru tine?
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
                    Cui se adresează...
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
                    Acesta NU este pentru...
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

        {/* ── Investiție ── */}
        <section id="investitie" className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Investiție</span>
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
                  Prețuri simple și transparente
                </h2>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "1rem" }}>
                  Două opțiuni. Același engagement de 6 săptămâni.
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
              <FadeInSection delay={0}>
                <div
                  style={{
                    padding: "40px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(86,219,132,0.25)",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
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
                    Recomandat
                  </div>
                  <div
                    className="font-black tabular-nums"
                    style={{ fontSize: "3.5rem", lineHeight: 1, color: "#ffffff", letterSpacing: "-0.04em", marginBottom: "4px" }}
                  >
                    5.500{" "}
                    <span style={{ fontSize: "1.75rem", color: "rgba(255,255,255,0.4)" }}>€</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", marginBottom: "32px", lineHeight: 1.6 }}>
                    Plată integrală înainte de kick-off. Cea mai bună valoare.
                  </p>
                  <Link
                    href="/contact/"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Aplică pentru această opțiune
                  </Link>
                </div>
              </FadeInSection>

              {/* Option B */}
              <FadeInSection delay={120}>
                <div
                  style={{
                    padding: "40px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                  }}
                >
                  <div style={{ height: "26px", marginBottom: "20px" }} />
                  <div
                    className="font-black tabular-nums"
                    style={{ fontSize: "3.5rem", lineHeight: 1, color: "#ffffff", letterSpacing: "-0.04em", marginBottom: "4px" }}
                  >
                    6.500{" "}
                    <span style={{ fontSize: "1.75rem", color: "rgba(255,255,255,0.4)" }}>€</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", marginBottom: "8px", lineHeight: 1.6 }}>
                    3.250 € + 3.250 €. Prima tranșă la semnare, a doua la săptămâna 3.
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", marginBottom: "32px" }}>
                    Angajamentul complet de 6 săptămâni inclus.
                  </p>
                  <Link
                    href="/contact/"
                    className="btn-ghost"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Aplică pentru această opțiune
                  </Link>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CtaBanner locale="ro" />

      </main>
      <Footer locale="ro" />
    </>
  );
}

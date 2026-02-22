import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Zap, CheckCircle, XCircle } from "lucide-react";
import { GrowthSprintCta } from "@/components/GrowthSprintCta";
import { GrowthSprintApplyButton } from "@/components/GrowthSprintApplyButton";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Growth Sprint pentru Educație Online | Rezolvăm Scurgerile de Venituri | Nesco Digital",
  description:
    "Un angajament de 6 săptămâni pentru branduri de educație online cu venituri de 10k–100k+/lună. Audităm întregul sistem de venituri și implementăm soluțiile cu cel mai mare impact. Nu rapoarte, execuție.",
  path: "/growth-sprint-educatie/",
  routeKey: "growthSprintEducation",
});

const included = {
  audit: [
    ["Revizuirea arhitecturii funnel-ului", "Unde se pierd lead-urile și de ce"],
    ["Analiza sistemului de email", "Rate de deschidere, click-uri, venituri per abonat"],
    ["Revizuirea ofertei și prețurilor", "Lași bani pe masă?"],
    ["Eficiența achiziției plătite", "Reclamele generează profit sau doar trafic?"],
    ["Blocaje operaționale", "Ce încetinește creșterea?"],
    ["Maparea KPI", "Ai cifrele corecte în față?"],
  ],
  impl: [
    ["Rezolvarea scurgerilor de venituri", "Cele mai importante găsite în audit"],
    ["Reconstruirea etapelor de funnel", "Optimizare etape cu performanță slabă"],
    ["Restructurarea secvențelor de email", "Pentru venituri mai mari"],
    ["Implementarea structurii de tracking", "Raportare pe care poți acționa"],
    ["Curățarea proceselor operaționale", "Eliminăm fricțiunea din execuție"],
  ],
};

const forList = [
  "Creatori de cursuri online și afaceri bazate pe cunoaștere cu o audiență existentă",
  "Personal branduri care generează venituri și vor să scaleze fără complexitate adăugată",
  "Antreprenori care sunt sătui de recomandări și vor execuție",
  "Operațiuni deja existente , ai nevoie de ceva de optimizat, nu de construit de la zero",
];

const notForList = [
  "Afaceri care nu au realizat încă prima vânzare",
  "Fondatori care vor să fie convinși, nu provocați",
  "Oricine caută un partener de creștere complet pasiv",
];

export default function GrowthSprintEducatiePage() {
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
            <div className="flex items-center gap-3 mb-6">
              <span className="badge">Growth Sprint · Educație Online</span>
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
                Locuri limitate
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
                Educație Online.
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
              Pentru branduri de educație online cu venituri de{" "}
              <strong style={{ color: "#ffffff", fontWeight: 700 }}>10k–100k+/lună</strong>{" "}
              care pierd oportunități de venit.
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
              Un angajament concentrat de{" "}
              <strong style={{ color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>6 săptămâni</strong>{" "}
              în care operăm direct în afacerea ta. Implementare reală, nu doar recomandări.
            </p>

            <GrowthSprintCta source="growth-sprint-educatie" />

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
                { value: "6 săptămâni", label: "Angajament fix" },
                { value: "10k–100k+", label: "Venituri lunare" },
                { value: "100%", label: "Execuție directă" },
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
                  Ai audiența. Ai oferta.{" "}
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>Ceva se scurge.</span>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                    Ai o audiență. Ai o ofertă. Generezi venituri. Dar undeva între funnel-ul tău, sistemul de email, structura de prețuri și operațiuni, există scurgeri de venituri.
                  </p>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                    Le simți. Creșterea a stagnat. Ratele de conversie nu sunt unde ar trebui. Cheltuiești pe reclame, dar cifrele nu se adună. Lista de email nu generează ce ar putea.
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.8,
                      fontWeight: 500,
                    }}
                  >
                    Problema reală nu e efortul. E că ai nevoie de cineva care să intre în mașinărie, să identifice exact ce e stricat și să repare.{" "}
                    <span style={{ color: "#56db84" }}>Să repare efectiv.</span>
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
                  Un angajament concentrat de 6 săptămâni în care Nesco Digital operează direct în afacerea ta, auditând întregul sistem de venituri și implementând cele mai importante soluții în funnel, email, structura ofertei și operațiuni.
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
                  Două faze clare. Un singur obiectiv: mai mult revenue.
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
                    Audit Complet al Veniturilor
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
                    Un sistem de venituri mai curat, cu conversie mai bună, complet implementat, documentat și pregătit să funcționeze fără noi.{" "}
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
                  Două opțiuni. Același angajament de 6 săptămâni.
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
                    Recomandat
                  </div>
                  <div
                    className="font-black tabular-nums"
                    style={{ fontSize: "3.5rem", lineHeight: 1, color: "#ffffff", letterSpacing: "-0.04em", marginBottom: "4px" }}
                  >
                    4.500{" "}
                    <span style={{ fontSize: "1.75rem", color: "rgba(255,255,255,0.4)" }}>€</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", marginBottom: "32px", lineHeight: 1.6 }}>
                    Plătit înainte de start. Cel mai bun raport calitate-preț.
                  </p>
                  <div style={{ marginTop: "auto" }}>
                    <GrowthSprintApplyButton
                      planLabel="4.500 € , Plată integrală"
                      variant="primary"
                    />
                  </div>
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
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: "26px", marginBottom: "20px" }} />
                  <div
                    className="font-black tabular-nums"
                    style={{ fontSize: "3.5rem", lineHeight: 1, color: "#ffffff", letterSpacing: "-0.04em", marginBottom: "4px" }}
                  >
                    5.500{" "}
                    <span style={{ fontSize: "1.75rem", color: "rgba(255,255,255,0.4)" }}>€</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", marginBottom: "8px", lineHeight: 1.6 }}>
                    2.750 € la semnare + 2.750 € în Săptămâna 3
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", marginBottom: "32px" }}>
                    Angajamentul complet de 6 săptămâni inclus.
                  </p>
                  <div style={{ marginTop: "auto" }}>
                    <GrowthSprintApplyButton
                      planLabel="5.500 € , Rate în 2 tranșe"
                      variant="ghost"
                    />
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ── CTA / Cum Începi ── */}
        <CtaBanner locale="ro" />

      </main>
      <Footer locale="ro" />
    </>
  );
}

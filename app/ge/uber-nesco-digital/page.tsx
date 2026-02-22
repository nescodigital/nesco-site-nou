"use client";
import { useRef } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { orgSchema } from "@/lib/seo";
import { CheckCircle, Zap, TrendingUp, Users } from "lucide-react";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { GeometricAnimation } from "@/components/sections/GeometricAnimation";

const stats = [
  { value: "+15 Jahre", label: "Erfahrung" },
  { value: "+€36M", label: "Verwaltetes Budget" },
  { value: "+23.000", label: "Durchgeführte Kampagnen" },
  { value: "+500", label: "Zufriedene Kunden" },
];

const values = [
  { icon: Zap,         title: "Innovation",     desc: "Wir denken anders und schlagen moderne Lösungen vor, die an die digitale Realität angepasst sind." },
  { icon: TrendingUp,  title: "Leistung",       desc: "Wir konzentrieren uns ausschließlich auf greifbare, messbare, echte Ergebnisse." },
  { icon: Users,       title: "Zusammenarbeit", desc: "Wir bauen authentische, langfristige Partnerschaften mit unseren Kunden auf." },
  { icon: CheckCircle, title: "Transparenz",    desc: "Wir kommunizieren jeden Schritt, jede Entscheidung, jedes Ergebnis klar und deutlich." },
];

const team = [
  {
    photo: "/team/markus.png",
    name: "Markus",
    role: "The Strategist",
    bio: "Nimmt das Ziel entgegen und verwandelt es in einen umsetzbaren Plan. Setzt Prioritäten, verteilt Aufgaben und validiert jeden Output vor der Auslieferung. Denkt und steuert die Richtung, führt nicht selbst aus.",
  },
  {
    photo: "/team/sofia.png",
    name: "Sofia",
    role: "The Curator",
    bio: "Beobachtet Trends, filtert relevante Informationen und bereitet das Rohmaterial für die Kommunikation auf. Ohne Sofia würde das Team mit unvollständigen Daten und fehlendem Kontext arbeiten.",
  },
  {
    photo: "/team/bogdan.png",
    name: "George",
    role: "The Copywriter",
    bio: "Schreibt E-Mails, Werbetexte und Posts, die konvertieren. Arbeitet strukturiert, mit klaren Hooks und getesteten CTAs, und fordert strategische Validierung, wenn der Kontext es erfordert.",
  },
  {
    photo: "/team/paula.png",
    name: "Paula",
    role: "The Prospector",
    bio: "Identifiziert neue Chancen und erstellt saubere, qualifizierte Outreach-Listen. Verhandelt nicht, schließt nicht ab. Bereitet den Boden für Gespräche mit echten Erfolgsaussichten.",
  },
  {
    photo: "/team/diana.png",
    name: "Diana",
    role: "The Ops Manager",
    bio: "Hält alle Fäden in der Hand: überwacht den Fortschritt, meldet Blockaden und stellt sicher, dass Lieferobjekte rechtzeitig ankommen. Das Nervensystem des Teams, wie wir gerne sagen.",
  },
  {
    photo: "/team/alex.png",
    name: "Alex",
    role: "Head of Performance",
    bio: "Verfolgt ROAS, CPA und LTV mit chirurgischer Präzision. Entscheidet, wo Budgets wachsen und wo sie stoppen, und optimiert kontinuierlich für echten Gewinn, nicht nur Traffic.",
  },
];

const steps = [
  {
    step: "01",
    title: "Entdeckung",
    desc: "Wir analysieren Ihr Unternehmen, Ihren Markt und Ihre Wettbewerber tiefgreifend, um den vollständigen Kontext vor jeder Maßnahme zu verstehen.",
  },
  {
    step: "02",
    title: "Aufbau",
    desc: "Detaillierte, akribische Implementierung: Strategie, Kampagnen, Assets, Tracking, alles auf Performance ausgerichtet.",
  },
  {
    step: "03",
    title: "Skalierung",
    desc: "Kontinuierliche Optimierung und nachhaltiges Skalieren auf Basis echter Daten, nicht auf Intuition.",
  },
];

const PARTICLES = [
  { left: "8%",  top: "15%", size: 3, duration: 7,  delay: 0,   color: "rgba(86,219,132,0.35)" },
  { left: "18%", top: "60%", size: 2, duration: 9,  delay: 1.2, color: "rgba(86,219,132,0.2)" },
  { left: "32%", top: "30%", size: 4, duration: 11, delay: 0.5, color: "rgba(86,219,132,0.25)" },
  { left: "52%", top: "75%", size: 2, duration: 8,  delay: 2,   color: "rgba(100,180,255,0.2)" },
  { left: "68%", top: "20%", size: 3, duration: 10, delay: 0.8, color: "rgba(86,219,132,0.3)" },
  { left: "78%", top: "55%", size: 2, duration: 12, delay: 1.5, color: "rgba(100,180,255,0.15)" },
  { left: "88%", top: "40%", size: 3, duration: 9,  delay: 0.3, color: "rgba(86,219,132,0.2)" },
  { left: "92%", top: "70%", size: 2, duration: 11, delay: 1.8, color: "rgba(86,219,132,0.15)" },
];

function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-2px)`;
  };
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)";
  };
  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease", ...style }}>
      {children}
    </div>
  );
}

export default function UeberNescoDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0px) scale(1);   opacity: 1; }
          100% { transform: translateY(-80px) scale(0.5); opacity: 0; }
        }
      `}</style>
      <Header locale="de" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* Hero */}
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

          {/* Floating particles */}
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="pointer-events-none"
              style={{
                position: "absolute",
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                background: p.color,
                animation: `floatUp ${p.duration}s ${p.delay}s ease-in infinite`,
              }}
            />
          ))}

          <div className="relative page-container">
            <div className="flex items-start justify-between gap-12">
              {/* Left: existing content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <span className="badge mb-6">Über uns</span>
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
                  <span className="block">Über</span>
                  <span
                    className="block"
                    style={{
                      background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Nesco Digital.
                  </span>
                </h1>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    maxWidth: "560px",
                    letterSpacing: "0.01em",
                  }}
                >
                  Wir sind nicht einfach eine Agentur. Wir sind Ihr Premium-Ausführungspartner, von der Strategie bis zu Kampagnen, die echten Umsatz generieren.
                </p>
              </div>

              <GeometricAnimation />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "80px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <StatsCounter stats={stats} columns={4} />
          </div>
        </section>

        <ClientLogos label="Referenzkunden" />

        {/* Mission */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div style={{ maxWidth: "680px" }}>
              <span className="badge mb-6">Unsere Mission</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  fontFeatureSettings: '"kern" 1, "liga" 1',
                  marginTop: "20px",
                  marginBottom: "24px",
                }}
              >
                Effiziente digitale Strategien, die eine Online-Präsenz mit echten Ergebnissen aufbauen.
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                Bei Nesco Digital bieten wir maßgeschneiderte digitale Marketinglösungen für Unternehmen jeder Größe. Von Startups bis zu etablierten Unternehmen entwickeln wir Strategien, die nachhaltiges Wachstum generieren, indem wir Daten, Kreativität und makellose Ausführung kombinieren.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="text-center" style={{ marginBottom: "64px" }}>
              <span className="badge mb-6">Unser Team</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  fontFeatureSettings: '"kern" 1, "liga" 1',
                  marginTop: "20px",
                }}
              >
                Die Menschen hinter den Ergebnissen
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {team.map((member) => (
                <TiltCard key={member.name}>
                  <div
                    className="group"
                    style={{
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      height: "100%",
                    }}
                  >
                    {/* Photo */}
                    <div
                      style={{
                        position: "relative",
                        background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(86,219,132,0.07) 0%, transparent 70%)",
                      }}
                    >
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={1024}
                        height={1536}
                        style={{
                          display: "block",
                          width: "75%",
                          height: "auto",
                          margin: "0 auto",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "55%",
                          height: "1px",
                          background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.35), transparent)",
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div style={{ padding: "20px 22px 24px" }}>
                      <h3
                        className="font-black text-white"
                        style={{ fontSize: "1.0625rem", letterSpacing: "-0.015em", marginBottom: "3px" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.6875rem",
                          color: "#56db84",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "12px",
                        }}
                      >
                        {member.role}
                      </p>
                      <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.65 }}>
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="text-center mb-16">
              <span className="badge mb-6">Unsere Werte</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Warum Sie uns wählen sollten
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="group card-hover"
                    style={{
                      padding: "32px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
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
                      <Icon size={20} style={{ color: "#56db84" }} />
                    </div>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "10px" }}
                    >
                      {v.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="text-center mb-16">
              <span className="badge mb-6">Unser Prozess</span>
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
                Unser Ansatz
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}>
                Es gibt keine Wunderlösungen, nur einen gut durchdachten Prozess.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="group card-hover"
                  style={{
                    padding: "36px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Step number watermark */}
                  <div
                    className="font-black"
                    style={{
                      fontSize: "5rem",
                      lineHeight: 1,
                      color: "rgba(255,255,255,0.04)",
                      letterSpacing: "-0.04em",
                      marginBottom: "8px",
                      fontFeatureSettings: '"tnum"',
                    }}
                  >
                    {s.step}
                  </div>
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "1.125rem", letterSpacing: "-0.01em", marginBottom: "12px" }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner locale="de" />
      </main>
      <Footer locale="de" />
    </>
  );
}

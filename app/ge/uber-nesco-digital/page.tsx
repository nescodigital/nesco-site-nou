import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { buildMetadata, orgSchema } from "@/lib/seo";
import { CheckCircle, Zap, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Über Nesco Digital | Premium Partner für Digitales Marketing",
  description: "14+ Jahre Erfahrung im digitalen Marketing. Premium-Ausführungspartner für Unternehmen, die wachsen wollen.",
  path: "/ge/uber-nesco-digital/",
  routeKey: "about",
});

const stats = [
  { value: "+14 Jahre", label: "Erfahrung" },
  { value: "+€33M", label: "Verwaltetes Budget" },
  { value: "+21.000", label: "Ausgeführte Kampagnen" },
  { value: "+500", label: "Zufriedene Kunden" },
];

const values = [
  { icon: Zap,         title: "Innovation",     desc: "Wir denken anders und schlagen moderne Lösungen vor, die der digitalen Realität entsprechen." },
  { icon: TrendingUp,  title: "Leistung",       desc: "Wir konzentrieren uns ausschließlich auf greifbare, messbare, echte Ergebnisse." },
  { icon: Users,       title: "Zusammenarbeit", desc: "Wir bauen authentische, langfristige Partnerschaften mit unseren Kunden auf." },
  { icon: CheckCircle, title: "Transparenz",    desc: "Wir kommunizieren jeden Schritt, jede Entscheidung, jedes Ergebnis klar." },
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
    desc: "Detaillierte, akribische Implementierung: Strategie, Kampagnen, Assets, Tracking — alles auf Performance ausgerichtet.",
  },
  {
    step: "03",
    title: "Skalierung",
    desc: "Kontinuierliche Optimierung und nachhaltiges Skalieren auf Basis echter Daten, nicht auf Intuition.",
  },
];

export default function UeberNescoDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Header locale="de" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* ── Hero ── */}
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
          <div className="relative max-w-7xl mx-auto px-[5%]">
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
              }}
            >
              Über{" "}
              <span
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
              Wir sind nicht nur eine Agentur. Wir sind Ihr Premium-Ausführungspartner — von der Strategie bis zu Kampagnen, die echten Umsatz generieren.
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "80px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="max-w-7xl mx-auto px-[5%]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <FadeInSection key={i} delay={i * 80}>
                  <div
                    style={{
                      padding: "28px 24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      className="font-black tabular-nums"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#ffffff", letterSpacing: "-0.025em", marginBottom: "8px" }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="max-w-7xl mx-auto px-[5%]">
            <FadeInSection>
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
                  Bei Nesco Digital bieten wir maßgeschneiderte digitale Marketinglösungen für Unternehmen jeder Größe. Von Startups bis zu etablierten Unternehmen entwickeln wir Strategien, die nachhaltiges Wachstum generieren — eine Kombination aus Daten, Kreativität und makelloser Ausführung.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="max-w-7xl mx-auto px-[5%]">
            <FadeInSection>
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
                  Warum uns wählen?
                </h2>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <FadeInSection key={i} delay={i * 80}>
                    <div
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
                          width: 44, height: 44, borderRadius: "12px",
                          background: "rgba(86,219,132,0.08)",
                          border: "1px solid rgba(86,219,132,0.15)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          marginBottom: "20px",
                        }}
                      >
                        <Icon size={20} style={{ color: "#56db84" }} />
                      </div>
                      <h3 className="font-bold text-white" style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "10px" }}>
                        {v.title}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
                        {v.desc}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="max-w-7xl mx-auto px-[5%]">
            <FadeInSection>
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
                  Es gibt keine Wunderlösungen — nur einen gut durchdachten Prozess.
                </p>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((s, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div
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
                    <div
                      className="font-black"
                      style={{
                        fontSize: "5rem", lineHeight: 1,
                        color: "rgba(255,255,255,0.04)",
                        letterSpacing: "-0.04em",
                        marginBottom: "8px",
                        fontFeatureSettings: '"tnum"',
                      }}
                    >
                      {s.step}
                    </div>
                    <h3 className="font-bold text-white" style={{ fontSize: "1.125rem", letterSpacing: "-0.01em", marginBottom: "12px" }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                      {s.desc}
                    </p>
                  </div>
                </FadeInSection>
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

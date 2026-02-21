import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata, orgSchema } from "@/lib/seo";
import { CheckCircle, Zap, TrendingUp, Users } from "lucide-react";
import { StatsCounter } from "@/components/ui/StatsCounter";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Despre Nesco Digital | Partener Premium de Marketing Digital",
  description: "15+ ani de experiență în marketing digital. Partener premium de execuție pentru afaceri care vor să crească.",
  path: "/despre-nesco-digital/",
  routeKey: "about",
});

const stats = [
  { value: "+15 ani", label: "Experiență" },
  { value: "+€36M", label: "Buget administrat" },
  { value: "+23.000", label: "Campanii executate" },
  { value: "+500", label: "Clienți mulțumiți" },
];

const values = [
  { icon: Zap,         title: "Inovație",     desc: "Gândim diferit și propunem soluții moderne adaptate realității digitale." },
  { icon: TrendingUp,  title: "Performanță",  desc: "Ne concentrăm exclusiv pe rezultate tangibile, măsurabile, reale." },
  { icon: Users,       title: "Colaborare",   desc: "Construim parteneriate autentice și pe termen lung cu clienții noștri." },
  { icon: CheckCircle, title: "Transparență", desc: "Comunicăm clar fiecare pas, fiecare decizie, fiecare rezultat." },
];

const steps = [
  {
    step: "01",
    title: "Descoperire",
    desc: "Analizăm profund afacerea, piața și concurenții tăi pentru a înțelege contextul complet înainte de orice acțiune.",
  },
  {
    step: "02",
    title: "Construire",
    desc: "Implementare detaliată și meticuloasă: strategie, campanii, asset-uri, tracking , totul setat pentru performanță.",
  },
  {
    step: "03",
    title: "Scalare",
    desc: "Optimizare continuă și scalare sustenabilă bazate pe date reale, nu pe intuiție.",
  },
];

export default function DespreNescoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Header locale="ro" />
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

          <div className="relative page-container">
            <span className="badge mb-6">Despre Noi</span>
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
              Despre{" "}
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
              Nu suntem o agenție obișnuită. Suntem partenerul tău premium de execuție , de la strategie la campanii care generează revenue real.
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "80px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <StatsCounter stats={stats} columns={4} />
          </div>
        </section>

        {/* ── Mission ── */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div style={{ maxWidth: "680px" }}>
              <span className="badge mb-6">Misiunea Noastră</span>
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
                Strategii digitale eficiente care construiesc o prezență online cu rezultate reale.
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                La Nesco Digital, oferim soluții de marketing digital personalizate pentru afaceri de toate dimensiunile. De la startup-uri la companii consolidate, construim strategii care generează creștere sustenabilă, combinând date, creativitate și execuție impecabilă.
              </p>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="text-center mb-16">
              <span className="badge mb-6">Valorile Noastre</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                De ce să ne alegi?
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

        {/* ── Process ── */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="text-center mb-16">
              <span className="badge mb-6">Procesul Nostru</span>
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
                Abordarea noastră
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}>
                Nu există soluții magice , ci un proces bine gândit.
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

        <CtaBanner locale="ro" />
      </main>
      <Footer locale="ro" />
    </>
  );
}

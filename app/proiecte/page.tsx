import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Proiecte | Studii de Caz Marketing Digital | Nesco Digital",
  description: "Rezultate reale pentru clienți reali. Revenue de 7 cifre, creștere 400%, ROI de 5X — explorează studiile noastre de caz.",
  path: "/proiecte/",
  routeKey: "projects",
});

export default function ProiecteRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "80px" }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%", right: "-10%",
              width: 600, height: 600, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
              animation: "heroGlow 14s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />
          <div className="relative page-container">
            <span className="badge mb-6">Portofoliu</span>
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                fontFeatureSettings: '"kern" 1, "liga" 1',
                marginTop: "16px",
                marginBottom: "24px",
              }}
            >
              Proiecte
              <span
                style={{
                  background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginLeft: "0.2em",
                }}
              >
                realizate.
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Rezultate reale pentru clienți reali în e-commerce, B2B, SaaS, DTC și sănătate.
            </p>
          </div>
        </section>

        {/* ── Filters + Grid ── */}
        <section className="relative" style={{ backgroundColor: "#050505" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <ProjectsGrid locale="ro" />
        </section>

        <CtaBanner locale="ro" />
      </main>
      <Footer locale="ro" />
    </>
  );
}

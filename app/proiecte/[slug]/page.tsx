import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { buildMetadata } from "@/lib/seo";
import { projects, getProjectBySlug } from "@/lib/projectData";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    locale: "ro",
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/proiecte/${project.slug}/`,
    routeKey: "projects",
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Header locale="ro" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* ── Breadcrumb ── */}
        <div
          style={{
            backgroundColor: "#050505",
            paddingTop: "100px",
            paddingBottom: "0",
          }}
        >
          <div className="max-w-7xl mx-auto px-[5%]">
            <nav style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}>Acasă</Link>
              <span>/</span>
              <Link href="/proiecte/" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}>Proiecte</Link>
              <span>/</span>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>{project.shortTitle}</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "48px", paddingBottom: "100px" }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%", right: "-10%",
              width: 700, height: 700, borderRadius: "50%",
              background: `radial-gradient(circle, ${project.accentColor.replace("0.1", "0.06")} 0%, transparent 70%)`,
              animation: "heroGlow 14s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />

          <div className="relative max-w-7xl mx-auto px-[5%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginBottom: "24px",
                  }}
                >
                  {project.title}
                </h1>
                <p
                  style={{
                    fontSize: "1.0625rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "40px",
                    maxWidth: "520px",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Link href="/contact/" className="btn-primary">
                    Discută despre proiect
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/proiecte/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.4)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                  >
                    <ArrowLeft size={14} />
                    Toate proiectele
                  </Link>
                </div>
              </div>

              {/* Right — Main metric */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    padding: "48px 56px",
                    background: "#0a0a0a",
                    border: `1px solid ${project.accentColor.replace("0.1", "0.2")}`,
                    borderRadius: "24px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    minWidth: "280px",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accentText}60, transparent)` }}
                  />
                  <div
                    className="font-black tabular-nums"
                    style={{
                      fontSize: "clamp(4rem, 8vw, 6rem)",
                      lineHeight: 1,
                      color: project.accentText,
                      letterSpacing: "-0.04em",
                      marginBottom: "12px",
                    }}
                  >
                    {project.metricMain}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 500,
                    }}
                  >
                    {project.metricSub}
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      paddingTop: "20px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.25)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {project.industry} · {project.timeline}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hero Image ── */}
        {project.heroImage && (
          <section className="relative" style={{ backgroundColor: "#050505", padding: "0 0 100px" }}>
            <div className="max-w-7xl mx-auto px-[5%]">
              <FadeInSection>
                <div
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    width={1280}
                    height={640}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </FadeInSection>
            </div>
          </section>
        )}

        {/* ── Challenge & Solution ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="max-w-7xl mx-auto px-[5%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <FadeInSection>
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
                      padding: "4px 14px",
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.15)",
                      borderRadius: "9999px",
                      color: "#f87171",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "20px",
                    }}
                  >
                    Provocarea
                  </div>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                    {project.challenge}
                  </p>
                </div>
              </FadeInSection>
              <FadeInSection delay={120}>
                <div
                  style={{
                    padding: "40px",
                    background: "#0a0a0a",
                    border: `1px solid ${project.accentColor.replace("0.1", "0.15")}`,
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accentText}50, transparent)` }}
                  />
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "4px 14px",
                      background: `${project.accentColor}`,
                      border: `1px solid ${project.accentText}30`,
                      borderRadius: "9999px",
                      color: project.accentText,
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "20px",
                    }}
                  >
                    Soluția noastră
                  </div>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                    {project.solution}
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ── Results ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="max-w-7xl mx-auto px-[5%]">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Rezultate</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                  }}
                >
                  Rezultate obținute
                </h2>
              </div>
            </FadeInSection>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              {project.metrics.map((m, i) => (
                <FadeInSection key={i} delay={i * 80}>
                  <div
                    style={{
                      padding: "32px 24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "20px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      className="font-black tabular-nums"
                      style={{
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                        lineHeight: 1,
                        color: project.accentText,
                        letterSpacing: "-0.03em",
                        marginBottom: "8px",
                      }}
                    >
                      {m.value}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>
                      {m.label}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Used ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="max-w-7xl mx-auto px-[5%]">
            <FadeInSection>
              <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
                <span className="badge mb-6">Servicii utilizate</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                    marginBottom: "32px",
                  }}
                >
                  Ce am implementat
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                  {project.services.map((s) => (
                    <span
                      key={s}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 20px",
                        background: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "9999px",
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.55)",
                        fontWeight: 500,
                      }}
                    >
                      <CheckCircle size={12} style={{ color: "#56db84" }} />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <CtaBanner locale="ro" />
      </main>
      <Footer locale="ro" />
    </>
  );
}

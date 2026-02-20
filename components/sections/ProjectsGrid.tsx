"use client";
import Link from "next/link";
import { useState } from "react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { TrendingUp } from "lucide-react";
import { projects, getLocalizedProject, type ProjectCategory } from "@/lib/projectData";
import type { Locale } from "@/lib/translations";

const ALL_LABEL: Record<Locale, string> = { ro: "Toate", en: "All", de: "Alle" };
const CTA_FEATURED: Record<Locale, string> = { ro: "Vezi studiu de caz", en: "View case study", de: "Fallstudie ansehen" };
const CTA_REST: Record<Locale, string> = { ro: "Vezi detalii", en: "View details", de: "Details ansehen" };
const EMPTY: Record<Locale, string> = {
  ro: "Nu există proiecte în această categorie.",
  en: "No projects in this category.",
  de: "Keine Projekte in dieser Kategorie.",
};
const PROJECT_BASE: Record<Locale, string> = {
  ro: "/proiecte/",
  en: "/en/projects/",
  de: "/ge/projekte/",
};

const ALL_CATEGORIES: ProjectCategory[] = ["E-commerce", "B2B", "SaaS", "DTC", "Sănătate", "Performance Marketing", "Online Education", "Growth Sprint"];

interface ProjectsGridProps {
  locale: Locale;
}

export function ProjectsGrid({ locale }: ProjectsGridProps) {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.categories.includes(active as ProjectCategory));

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* Category Filters */}
      <div className="page-container" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <button
            onClick={() => setActive("all")}
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: active === "all" ? "#56db84" : "#0a0a0a",
              border: active === "all" ? "1px solid #56db84" : "1px solid rgba(255,255,255,0.08)",
              color: active === "all" ? "#000" : "rgba(255,255,255,0.45)",
            }}
          >
            {ALL_LABEL[locale]}
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                fontSize: "0.8125rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: active === cat ? "#56db84" : "#0a0a0a",
                border: active === cat ? "1px solid #56db84" : "1px solid rgba(255,255,255,0.08)",
                color: active === cat ? "#000" : "rgba(255,255,255,0.45)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="page-container" style={{ paddingTop: 0, paddingBottom: "100px" }}>
        {/* Featured grid */}
        {featured.length > 0 && (
          <div className={`grid gap-5 ${featured.length === 4 ? "grid-cols-1 sm:grid-cols-2 mb-20" : "grid-cols-1 md:grid-cols-3 mb-14"}`}>
            {featured.map((p, i) => {
              const lp = getLocalizedProject(p, locale);
              return (
                <FadeInSection key={p.slug} delay={i * 80}>
                  <Link href={`${PROJECT_BASE[locale]}${p.slug}/`} style={{ display: "block", textDecoration: "none", height: "100%" }}>
                    <div
                      className="group card-hover"
                      style={{
                        padding: "36px",
                        background: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "20px",
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                        height: "100%",
                      }}
                    >
                      {p.heroImage && (
                        <div
                          style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: "55%",
                            pointerEvents: "none",
                            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 24%, black 72%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                            WebkitMaskComposite: "destination-in",
                            maskImage: "linear-gradient(to right, transparent 0%, black 24%, black 72%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                            maskComposite: "intersect",
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.heroImage}
                            alt=""
                            aria-hidden="true"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                              opacity: 0.6,
                            }}
                          />
                        </div>
                      )}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at 20% 80%, ${p.accentColor}, transparent 70%)` }}
                      />
                      <div className="relative">
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: "0.6875rem", fontWeight: 600,
                                padding: "3px 10px", borderRadius: "9999px",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.4)",
                                letterSpacing: "0.06em",
                                textTransform: "uppercase" as const,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div
                          className="font-black tabular-nums"
                          style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1, color: p.accentText, letterSpacing: "-0.03em", marginBottom: "8px" }}
                        >
                          {lp.metricMain}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>
                          {lp.metricSub}
                        </div>
                        <h3 className="font-bold text-white" style={{ fontSize: "1.125rem", letterSpacing: "-0.01em", marginBottom: "10px" }}>
                          {lp.shortTitle}
                        </h3>
                        <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.6, marginBottom: "20px" }}>
                          {lp.description.slice(0, 100)}...
                        </p>
                        <div
                          className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ fontSize: "0.8125rem", color: p.accentText, fontWeight: 600 }}
                        >
                          <TrendingUp size={13} />
                          {CTA_FEATURED[locale]}
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              );
            })}
          </div>
        )}

        {/* Rest grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p, i) => {
              const lp = getLocalizedProject(p, locale);
              return (
                <FadeInSection key={p.slug} delay={i * 80}>
                  <Link href={`${PROJECT_BASE[locale]}${p.slug}/`} style={{ display: "block", textDecoration: "none", height: "100%" }}>
                    <div
                      className="group card-hover"
                      style={{
                        padding: "32px",
                        background: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "16px",
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                        height: "100%",
                      }}
                    >
                      {p.heroImage && (
                        <div
                          style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: "50%",
                            pointerEvents: "none",
                            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 28%, black 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                            WebkitMaskComposite: "destination-in",
                            maskImage: "linear-gradient(to right, transparent 0%, black 28%, black 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                            maskComposite: "intersect",
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.heroImage}
                            alt=""
                            aria-hidden="true"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                              opacity: 0.5,
                            }}
                          />
                        </div>
                      )}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at 20% 80%, ${p.accentColor}, transparent 70%)` }}
                      />
                      <div className="relative">
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                          {p.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: "0.6875rem", fontWeight: 600,
                                padding: "3px 10px", borderRadius: "9999px",
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                color: "rgba(255,255,255,0.3)",
                                letterSpacing: "0.06em",
                                textTransform: "uppercase" as const,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div
                          className="font-black tabular-nums"
                          style={{ fontSize: "2.25rem", lineHeight: 1, color: p.accentText, letterSpacing: "-0.03em", marginBottom: "6px" }}
                        >
                          {lp.metricMain}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", marginBottom: "12px" }}>
                          {lp.metricSub}
                        </div>
                        <h3 className="font-semibold text-white" style={{ fontSize: "0.9375rem", letterSpacing: "-0.01em", marginBottom: "8px" }}>
                          {lp.shortTitle}
                        </h3>
                        <div
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ fontSize: "0.75rem", color: p.accentText, fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}
                        >
                          <TrendingUp size={11} />
                          {CTA_REST[locale]}
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              );
            })}
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(255,255,255,0.3)" }}>
            {EMPTY[locale]}
          </div>
        )}
      </div>
    </>
  );
}

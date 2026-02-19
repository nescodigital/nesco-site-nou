"use client";
import Link from "next/link";
import { useState } from "react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { TrendingUp } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/projectData";

const ALL_CATEGORIES: (ProjectCategory | "Toate")[] = [
  "Toate", "E-commerce", "B2B", "SaaS", "DTC", "Sănătate", "Performance Marketing",
];

export function ProjectsGrid() {
  const [active, setActive] = useState<ProjectCategory | "Toate">("Toate");

  const filtered = active === "Toate"
    ? projects
    : projects.filter((p) => p.categories.includes(active as ProjectCategory));

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* Category Filters */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 5% 40px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 5% 100px",
        }}
      >
        {/* Featured grid */}
        {featured.length > 0 && (
          <div className={`grid gap-5 ${featured.length === 4 ? "grid-cols-1 sm:grid-cols-2 mb-10" : "grid-cols-1 md:grid-cols-3 mb-5"}`}>
            {featured.map((p, i) => (
              <FadeInSection key={p.slug} delay={i * 80}>
                <Link href={`/proiecte/${p.slug}/`} style={{ display: "block", textDecoration: "none", height: "100%" }}>
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
                        {p.metricMain}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>
                        {p.metricSub}
                      </div>
                      <h3 className="font-bold text-white" style={{ fontSize: "1.125rem", letterSpacing: "-0.01em", marginBottom: "10px" }}>
                        {p.shortTitle}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.6, marginBottom: "20px" }}>
                        {p.description.slice(0, 100)}...
                      </p>
                      <div
                        className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ fontSize: "0.8125rem", color: p.accentText, fontWeight: 600 }}
                      >
                        <TrendingUp size={13} />
                        Vezi studiu de caz
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        )}

        {/* Rest grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p, i) => (
              <FadeInSection key={p.slug} delay={i * 80}>
                <Link href={`/proiecte/${p.slug}/`} style={{ display: "block", textDecoration: "none", height: "100%" }}>
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
                        {p.metricMain}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", marginBottom: "12px" }}>
                        {p.metricSub}
                      </div>
                      <h3 className="font-semibold text-white" style={{ fontSize: "0.9375rem", letterSpacing: "-0.01em", marginBottom: "8px" }}>
                        {p.shortTitle}
                      </h3>
                      <div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ fontSize: "0.75rem", color: p.accentText, fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}
                      >
                        <TrendingUp size={11} />
                        Vezi detalii
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(255,255,255,0.3)" }}>
            Nu există proiecte în această categorie.
          </div>
        )}
      </div>
    </>
  );
}

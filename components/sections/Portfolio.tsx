"use client";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { type Locale, t } from "@/lib/translations";
import { routes } from "@/lib/routes";
import { projects, getLocalizedProject } from "@/lib/projectData";

interface PortfolioProps {
  locale: Locale;
}

const CTA_LABEL: Record<Locale, string> = {
  ro: "Vezi detalii",
  en: "View details",
  de: "Details ansehen",
};

// Show the first 6 projects (4 featured + 2 non-featured)
const PREVIEW_PROJECTS = projects.slice(0, 6);

export function Portfolio({ locale }: PortfolioProps) {
  const tr = t(locale);
  const r = routes[locale];

  return (
    <section className="section relative" style={{ backgroundColor: "#050505" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="page-container">
        {/* Header */}
        <div className="mb-20">
          <span className="badge mb-6">{tr.portfolio.badge}</span>
          {/* h2 + button in a flex row */}
          <div
            className="flex items-center justify-between mb-8"
            style={{ marginTop: "20px" }}
          >
            <h2
              className="font-black text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                fontFeatureSettings: '"kern" 1, "liga" 1',
                marginBottom: 0,
              }}
            >
              {tr.portfolio.headline}
            </h2>
            <Link
              href={r.projects}
              className="inline-flex items-center gap-2 group shrink-0"
              style={{
                padding: "9px 20px",
                background: "#56db84",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#000",
                textDecoration: "none",
                transition: "all 0.2s ease",
                boxShadow: "0 0 0 0 rgba(86,219,132,0)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "scale(1.02)";
                el.style.boxShadow = "0 0 20px rgba(86,219,132,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "scale(1)";
                el.style.boxShadow = "0 0 0 0 rgba(86,219,132,0)";
              }}
            >
              {tr.portfolio.cta}
              <ArrowRight size={13} />
            </Link>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem", lineHeight: 1.6 }}>
            {tr.portfolio.subheadline}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {PREVIEW_PROJECTS.map((project) => {
            const lp = getLocalizedProject(project, locale);
            return (
              <Link
                key={project.slug}
                href={`/proiecte/${project.slug}/`}
                style={{ display: "block", textDecoration: "none" }}
              >
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
                  }}
                >
                  {/* Hover bg */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 20% 80%, ${project.accentColor}, transparent 70%)` }}
                  />

                  <div className="relative">
                    {/* Tag */}
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: "20px",
                      }}
                    >
                      {project.categories[0]}
                    </span>

                    {/* Metric */}
                    <div
                      className="font-black tabular-nums"
                      style={{
                        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                        lineHeight: 1,
                        color: project.accentText,
                        letterSpacing: "-0.03em",
                        marginBottom: "8px",
                      }}
                    >
                      {lp.metricMain}
                    </div>

                    {/* Title */}
                    <div
                      className="font-bold text-white"
                      style={{ fontSize: "1.125rem", letterSpacing: "-0.01em", marginBottom: "6px" }}
                    >
                      {lp.shortTitle}
                    </div>

                    {/* Desc */}
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)" }}>
                      {lp.industry}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", marginTop: "3px" }}>
                      {lp.metricSub}
                    </p>

                    {/* Hover CTA */}
                    <div
                      className="flex items-center gap-1.5 mt-5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ fontSize: "0.8125rem", color: project.accentText, fontWeight: 600 }}
                    >
                      <TrendingUp size={13} />
                      {CTA_LABEL[locale]}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, XCircle } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { type Locale, t } from "@/lib/translations";
import { routes } from "@/lib/routes";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export interface ServiceCase {
  label: string;
  metric: string;
  industry: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ServicePageData {
  locale: Locale;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  problems: Array<{ title: string; desc: string }>;
  solutions: Array<{ title: string; desc: string }>;
  cases: ServiceCase[];
  omnichannelServices?: string[];
  faq?: FAQ[];
  testimonial?: ServiceTestimonial;
  tools?: string[];
  toolsSectionTitle?: string;
  freeAuditBadge?: string;
}

interface ServicePageProps {
  data: ServicePageData;
}

const RESULT_ACCENTS = [
  { bg: "rgba(86,219,132,0.10)", border: "rgba(86,219,132,0.15)", text: "#56db84" },
  { bg: "rgba(96,165,250,0.10)", border: "rgba(96,165,250,0.15)", text: "#60a5fa" },
  { bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.15)", text: "#a78bfa" },
  { bg: "rgba(251,146,60,0.10)", border: "rgba(251,146,60,0.15)", text: "#fb923c" },
  { bg: "rgba(244,114,182,0.10)", border: "rgba(244,114,182,0.15)", text: "#f472b6" },
  { bg: "rgba(34,211,238,0.10)", border: "rgba(34,211,238,0.15)", text: "#22d3ee" },
];

export function ServicePageTemplate({ data }: ServicePageProps) {
  const { locale, hero, problems, solutions, cases, omnichannelServices, faq, testimonial, tools, toolsSectionTitle, freeAuditBadge } = data;
  const tr = t(locale);
  const r = routes[locale];

  const freeAuditSubtitle =
    locale === "ro"
      ? "Analizăm situația ta actuală fără costuri și fără angajament."
      : locale === "de"
      ? "Wir analysieren Ihre aktuelle Situation kostenlos und unverbindlich."
      : "We analyze your current situation at no cost and with no commitment.";

  return (
    <>
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
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, #050505, transparent)" }}
        />
        <div className="relative page-container">
          <span className="badge mb-6">{hero.badge}</span>
          <h1
            className="font-black"
            style={{
              fontSize: "clamp(3rem, 7vw, 5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              fontFeatureSettings: '"kern" 1, "liga" 1',
              marginTop: "16px",
              marginBottom: "28px",
              maxWidth: "800px",
              background: "linear-gradient(135deg, #ffffff 20%, #56db84 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {hero.title}
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
              maxWidth: "560px",
              letterSpacing: "0.01em",
              marginBottom: "40px",
            }}
          >
            {hero.subtitle}
          </p>
          <Link href={r.contact} className="btn-primary">
            {tr.common.requestOffer}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
        />
        <div className="page-container">
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge mb-6">Provocări</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                {tr.common.commonProblems}
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((p, idx) => (
              <FadeInSection key={idx} delay={idx * 80}>
                <div
                  className="card-hover"
                  style={{
                    padding: "28px 24px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 36, height: 36, borderRadius: "10px",
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <XCircle size={16} style={{ color: "#f87171" }} />
                  </div>
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "0.9375rem", letterSpacing: "-0.01em", marginBottom: "8px" }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
        />
        <div className="page-container">
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge mb-6">Cum ajutăm</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                {tr.common.solutions}
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s, idx) => (
              <FadeInSection key={idx} delay={idx * 80}>
                <div
                  className="group card-hover"
                  style={{
                    padding: "32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    height: "100%",
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
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#56db84" }} />
                  </div>
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "10px" }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
                    {s.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
        />
        <div className="page-container">
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
                {tr.common.results}
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map((c, idx) => {
              const accent = RESULT_ACCENTS[idx % RESULT_ACCENTS.length];
              return (
                <FadeInSection key={idx} delay={idx * 80}>
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
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 20% 80%, ${accent.bg}, transparent 70%)` }}
                    />
                    <div className="relative">
                      <div
                        className="font-black tabular-nums"
                        style={{
                          fontSize: "clamp(2rem, 4vw, 3rem)",
                          lineHeight: 1,
                          color: accent.text,
                          letterSpacing: "-0.03em",
                          marginBottom: "8px",
                        }}
                      >
                        {c.metric}
                      </div>
                      <div
                        className="font-semibold text-white"
                        style={{ fontSize: "0.9375rem", marginBottom: "6px" }}
                      >
                        {c.label}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
                        {c.industry}
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Omnichannel ── */}
      {omnichannelServices && omnichannelServices.length > 0 && (
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
                <span className="badge mb-6">Abordare 360°</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                    marginBottom: "16px",
                  }}
                >
                  {tr.common.omnichannelTitle}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem", marginBottom: "40px", lineHeight: 1.7 }}>
                  {tr.common.omnichannelDesc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                  {omnichannelServices.map((s, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: "8px 20px",
                        background: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "9999px",
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 500,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* ── Tool Stack ── */}
      {tools && tools.length > 0 && (
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    marginBottom: "24px",
                  }}
                >
                  {toolsSectionTitle ?? "INSTRUMENTELE PE CARE LE FOLOSIM"}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    justifyContent: "center",
                  }}
                >
                  {tools.map((tool, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: "6px 16px",
                        background: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "9999px",
                        fontSize: "0.8125rem",
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 500,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* ── Testimonial ── */}
      {testimonial && (
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ maxWidth: "760px", margin: "0 auto" }}>
                <div
                  style={{
                    padding: "40px 48px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(86,219,132,0.15)",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #56db84, rgba(86,219,132,0.2))",
                      borderRadius: "20px 20px 0 0",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "3.5rem",
                      color: "#56db84",
                      lineHeight: 0.8,
                      marginBottom: "16px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    &ldquo;
                  </div>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      color: "#ffffff",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                      marginBottom: "28px",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {testimonial.quote}
                  </p>
                  <div>
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {testimonial.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(255,255,255,0.4)",
                        marginLeft: "8px",
                      }}
                    >
                      — {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faq && faq.length > 0 && (
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <span className="badge mb-6">FAQ</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                  }}
                >
                  {locale === "ro"
                    ? "Întrebări frecvente"
                    : locale === "de"
                    ? "Häufig gestellte Fragen"
                    : "Frequently Asked Questions"}
                </h2>
              </div>
            </FadeInSection>
            <div style={{ maxWidth: "760px", margin: "0 auto" }}>
              <FaqAccordion items={faq} />
            </div>
          </div>
        </section>
      )}

      {/* ── Free Audit Badge ── */}
      {freeAuditBadge && (
        <section className="relative" style={{ backgroundColor: "#050505", padding: "60px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    background: "rgba(86,219,132,0.08)",
                    border: "1px solid rgba(86,219,132,0.25)",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#56db84",
                    letterSpacing: "0.02em",
                    marginBottom: "16px",
                  }}
                >
                  {freeAuditBadge}
                </span>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.6,
                  }}
                >
                  {freeAuditSubtitle}
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CtaBanner locale={locale} />
    </>
  );
}

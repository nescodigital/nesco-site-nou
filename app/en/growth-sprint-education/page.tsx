import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { buildMetadata } from "@/lib/seo";
import { CheckCircle, XCircle, ArrowRight, Zap } from "lucide-react";
import { GrowthSprintCta } from "@/components/GrowthSprintCta";
import { GrowthSprintApplyButton } from "@/components/GrowthSprintApplyButton";
import { TrustBadges } from "@/components/ui/TrustBadges";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Growth Sprint for Online Education | Fix Revenue Leaks | Nesco Digital",
  description:
    "A focused 6-week engagement for online education brands doing 10k–100k+/month. We audit your entire revenue system and implement the highest-impact fixes, not reports, execution.",
  path: "/en/growth-sprint-education/",
  routeKey: "growthSprintEducation",
});

const included = {
  audit: [
    ["Funnel architecture review", "Where leads drop off and why"],
    ["Email system analysis", "Open rates, click rates, revenue per subscriber"],
    ["Offer and pricing review", "Are you leaving money on the table?"],
    ["Paid acquisition efficiency", "Are your ads generating profit or just traffic?"],
    ["Operational bottlenecks", "What's slowing down growth?"],
    ["KPI mapping", "Do you have the right numbers in front of you?"],
  ],
  impl: [
    ["Fix the highest-impact revenue leaks", "Identified in the audit"],
    ["Rebuild or optimize funnel stages", "Underperforming stages rebuilt"],
    ["Restructure email sequences", "For higher revenue output"],
    ["Implement tracking and reporting", "Clean structure you can act on"],
    ["Clean up operational processes", "Remove friction that slows execution"],
  ],
};

const forList = [
  "Online course creators and knowledge-based businesses with an existing audience",
  "Personal brands generating revenue who want to scale without adding complexity",
  "Business owners who are tired of getting recommendations and want execution",
  "Established operations, you need something to optimize, not build from zero",
];

const notForList = [
  "Businesses that haven't made their first sale yet",
  "Founders who want to be sold to, not challenged",
  "Anyone looking for a hands-off growth partner",
];

export default function GrowthSprintEducationPage() {
  return (
    <>
      <Header locale="en" />
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
              <span className="badge">Growth Sprint · Online Education</span>
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
                Limited spots
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
                Online Education.
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
              For online education brands doing{" "}
              <strong style={{ color: "#ffffff", fontWeight: 700 }}>10k–100k+/month</strong>{" "}
              who are leaving money on the table.
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
              A focused{" "}
              <strong style={{ color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>6-week engagement</strong>{" "}
              where we operate directly inside your business. Not reports. Execution.
            </p>

            <GrowthSprintCta source="growth-sprint-education" locale="en" />

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                paddingTop: "40px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                maxWidth: "520px",
              }}
            >
              {[
                { value: "6 weeks", label: "Fixed engagement" },
                { value: "10k–100k+/month", label: "Monthly revenue" },
                { value: "100% Execution", label: "Not reports" },
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

            <TrustBadges locale="en" />
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ maxWidth: "680px" }}>
                <span className="badge mb-6">The Problem</span>
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
                  You have the audience. You have the offer.{" "}
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>Something is leaking.</span>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                    You have an audience. You have an offer. You're generating revenue. But somewhere between your funnel, your email system, your pricing, and your operations, there are leaks.
                  </p>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                    You feel it. Growth has plateaued. Your conversion rates aren't where they should be. You're spending on ads but the numbers don't add up. Your email list isn't generating what it could.
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.8,
                      fontWeight: 500,
                    }}
                  >
                    The real problem isn't effort. It's that you need someone to go inside the machine, identify exactly what's broken, and fix it, not write a report, not hand you a strategy deck.{" "}
                    <span style={{ color: "#56db84" }}>Actually fix it.</span>
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── What It Is ── */}
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
                <span className="badge mb-6">What The Growth Sprint Is</span>
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
                  We don&apos;t hand you a roadmap and disappear.
                </h2>
                <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: "16px" }}>
                  A focused 6-week engagement where Nesco Digital operates directly inside your business, auditing your entire revenue system and implementing the highest-impact fixes across your funnel, email, offer structure, and operations.
                </p>
                <p style={{ fontSize: "1rem", color: "#56db84", fontWeight: 600 }}>
                  This is not consulting. We execute.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">What&apos;s Included</span>
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
                  6 weeks of direct implementation
                </h2>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "1rem" }}>
                  Two clear phases. One goal: more revenue.
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Weeks 1-2 */}
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
                    Weeks 1–2
                  </div>
                  <h3
                    className="font-black text-white"
                    style={{ fontSize: "1.25rem", letterSpacing: "-0.01em", marginBottom: "24px" }}
                  >
                    Full Revenue Audit
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

              {/* Weeks 3-6 */}
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
                    Weeks 3–6
                  </div>
                  <h3
                    className="font-black text-white"
                    style={{ fontSize: "1.25rem", letterSpacing: "-0.01em", marginBottom: "24px" }}
                  >
                    Direct Implementation
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

            {/* End Deliverable */}
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
                    End Deliverable
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                    A cleaner, higher-converting revenue system, fully implemented, documented, and ready to run without us.{" "}
                    <strong style={{ color: "#ffffff" }}>You keep everything we build.</strong>
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Fit</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                  }}
                >
                  Is this for you?
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
                    This is for you if...
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
                    This is NOT for you if...
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

        {/* ── CTA Banner ── */}
        <CtaBanner locale="en" />

      </main>
      <Footer locale="en" />
    </>
  );
}

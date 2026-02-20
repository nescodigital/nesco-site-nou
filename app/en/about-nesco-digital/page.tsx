import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { buildMetadata, orgSchema, buildWebPageSchema } from "@/lib/seo";
import { CheckCircle, Zap, TrendingUp, Users } from "lucide-react";
import { StatsCounter } from "@/components/ui/StatsCounter";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "About Nesco Digital | Premium Digital Marketing Partner",
  description: "15+ years of digital marketing expertise. Premium execution partner for businesses that want to grow — from strategy to campaigns that generate real revenue.",
  path: "/en/about-nesco-digital/",
  routeKey: "about",
});

const stats = [
  { value: "+15 years", label: "Experience" },
  { value: "+€36M", label: "Budget managed" },
  { value: "+23,000", label: "Campaigns executed" },
  { value: "+500", label: "Satisfied clients" },
];

const values = [
  { icon: Zap,         title: "Innovation",     desc: "We think differently and propose modern solutions adapted to the digital reality." },
  { icon: TrendingUp,  title: "Performance",    desc: "We focus exclusively on tangible, measurable, real results." },
  { icon: Users,       title: "Collaboration",  desc: "We build authentic, long-term partnerships with our clients." },
  { icon: CheckCircle, title: "Transparency",   desc: "We clearly communicate every step, every decision, every result." },
];

const steps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We deeply analyze your business, market, and competitors to fully understand the context before taking any action.",
  },
  {
    step: "02",
    title: "Build",
    desc: "Detailed, meticulous implementation: strategy, campaigns, assets, tracking — everything set for performance.",
  },
  {
    step: "03",
    title: "Scale",
    desc: "Continuous optimization and sustainable scaling based on real data, not intuition.",
  },
];

export default function AboutEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebPageSchema({
        url: "https://nescodigital.com/en/about-nesco-digital/",
        title: "About Nesco Digital | Premium Digital Marketing Partner",
      })) }} />
      <Header locale="en" />
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
            <span className="badge mb-6">About Us</span>
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
              About{" "}
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
              We are not just an agency. We are your premium execution partner — from strategy to campaigns that generate real revenue.
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
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ maxWidth: "680px" }}>
                <span className="badge mb-6">Our Mission</span>
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
                  Efficient digital strategies that build an online presence with real results.
                </h2>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                  At Nesco Digital, we provide customized digital marketing solutions for businesses of all sizes. From startups to established enterprises, we build strategies that generate sustainable growth — combining data, creativity, and flawless execution.
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
          <div className="page-container">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="badge mb-6">Our Values</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    marginTop: "20px",
                  }}
                >
                  Why choose us?
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
          <div className="page-container">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="badge mb-6">Our Process</span>
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
                  Our approach
                </h2>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}>
                  There are no magic solutions — only a well-thought-out process.
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

        <CtaBanner locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}

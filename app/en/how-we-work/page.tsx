"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { routes } from "@/lib/routes";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  MessageSquare,
  Phone,
  BarChart3,
  FileText,
} from "lucide-react";

const r = routes.en;

/* ── DATA ── */
const heroChecklist = [
  "Discovery call (30 min)",
  "Audit and proposal",
  "Onboarding and account access",
  "First campaigns live",
  "Continuous optimization",
  "Scaling and growth",
];

const discoveryBullets = [
  "We understand your business, goals, and current situation",
  "We honestly tell you if and how we can help",
  "If there\u2019s no real potential for collaboration, we tell you directly",
  "No pitch, no pressure, no PowerPoint presentations",
];

const onboardingSteps = [
  {
    days: "Day 1\u20132",
    items: [
      "Access to all accounts (Google Ads, Meta, Analytics, Search Console)",
      "Complete technical audit",
      "Critical issue identification",
    ],
  },
  {
    days: "Day 3\u20135",
    items: [
      "Competition and market analysis",
      "ICP and audience segment definition",
      "Keyword and interest research",
    ],
  },
  {
    days: "Day 6\u201310",
    items: [
      "Campaign strategy and plan",
      "Account and campaign structure creation",
      "Complete tracking setup (GA4, Pixel, conversions)",
    ],
  },
  {
    days: "Day 11\u201314",
    items: [
      "First campaigns live",
      "Intensive monitoring first 48h",
      "Quick adjustments based on initial data",
    ],
  },
];

const monthColumns = [
  {
    emoji: "\uD83D\uDCCB",
    title: "Month 1 \u2014 Data & Direction",
    items: [
      "Daily optimization based on real data",
      "A/B testing creatives and audiences",
      "Identifying what works and what doesn\u2019t",
      "Weekly report + 30-minute call",
    ],
    kpi: "KPI focus: Stabilize CPL/CPA",
  },
  {
    emoji: "\uD83D\uDCC8",
    title: "Month 2 \u2014 Optimization",
    items: [
      "Scaling profitable campaigns",
      "Eliminating what doesn\u2019t work",
      "Expanding into new audiences",
      "Weekly report + call",
    ],
    kpi: "KPI focus: Improve ROAS/CPL by 20\u201330%",
  },
  {
    emoji: "\uD83D\uDE80",
    title: "Month 3 \u2014 Scaling",
    items: [
      "Increasing budgets on validated campaigns",
      "New campaigns (remarketing, lookalike)",
      "Landing page optimization",
      "Strategy for month 4+",
    ],
    kpi: "KPI focus: Profitable scaling",
  },
];

const commCards = [
  {
    Icon: MessageSquare,
    title: "WhatsApp / Telegram",
    desc: "Daily communication for urgencies and quick updates. Response within 4h during business hours.",
  },
  {
    Icon: Phone,
    title: "Weekly call",
    desc: "30 minutes every week. We analyze data, discuss direction, answer questions.",
  },
  {
    Icon: BarChart3,
    title: "Live dashboard",
    desc: "Permanent access to your dashboard with all metrics in real time. No waiting for the monthly report to know what\u2019s happening.",
  },
  {
    Icon: FileText,
    title: "Monthly report",
    desc: "Complete document with everything that happened last month and the plan for next month.",
  },
];

const dontDoCards = [
  {
    title: "Reports that hide poor results",
    desc: "If a month was weak, we tell you directly and explain why and what we\u2019re doing differently.",
  },
  {
    title: "Excuses about algorithms or the market",
    desc: "The market is the same for everyone. If your competitors are growing and you\u2019re not, the problem isn\u2019t the market.",
  },
  {
    title: "Guaranteed results promises",
    desc: "No serious agency guarantees ROAS or positions. We guarantee the process, transparency, and total commitment.",
  },
];

const pricingCards = [
  {
    tier: "Entry",
    channels: "1 channel",
    price: "From \u20AC1,500/month",
    desc: "1 platform management + strategy + reporting",
  },
  {
    tier: "Growth",
    channels: "2\u20133 channels",
    price: "From \u20AC2,500/month",
    desc: "Multi-channel management + integrated strategy",
  },
  {
    tier: "Scale",
    channels: "full service",
    price: "From \u20AC4,500/month",
    desc: "All channels + webdesign + email + CRO",
  },
];

export default function HowWeWorkEnPage() {
  /* Animated hero checklist */
  const [visibleChecks, setVisibleChecks] = useState(0);

  useEffect(() => {
    let count = 0;
    const iv = setInterval(() => {
      count += 1;
      setVisibleChecks(count);
      if (count >= heroChecklist.length) clearInterval(iv);
    }, 350);
    return () => clearInterval(iv);
  }, []);

  /* Timeline reveal */
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header locale="en" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "100px" }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%",
              right: "-10%",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.06) 0%, transparent 70%)",
              animation: "heroGlow 14s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />

          <div className="relative page-container" style={{ zIndex: 1 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <span className="badge mb-6">Our Process</span>
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
                    paddingBottom: "0.12em",
                  }}
                >
                  What happens{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    after you contact us
                  </span>
                </h1>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    maxWidth: "580px",
                    letterSpacing: "0.01em",
                    marginBottom: "40px",
                  }}
                >
                  No surprises, no obscure processes. Here&apos;s exactly what a collaboration with Nesco Digital looks like from the first conversation to scaling.
                </p>
                <Link
                  href={r.contact}
                  className="group inline-flex items-center gap-3 btn-primary"
                  style={{ fontSize: "1rem", padding: "18px 40px" }}
                >
                  Start the process
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Right: animated checklist */}
              <div className="hidden lg:block">
                <div
                  style={{
                    padding: "36px 32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(86,219,132,0.15)",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.4), transparent)" }}
                  />
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      top: "-30%",
                      right: "-15%",
                      width: 250,
                      height: 250,
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {heroChecklist.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          opacity: i < visibleChecks ? 1 : 0.15,
                          transform: i < visibleChecks ? "translateX(0)" : "translateX(8px)",
                          transition: "opacity 0.45s ease, transform 0.45s ease",
                        }}
                      >
                        <CheckCircle
                          size={18}
                          style={{
                            color: i < visibleChecks ? "#56db84" : "rgba(255,255,255,0.15)",
                            transition: "color 0.45s ease",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.9375rem",
                            color: i < visibleChecks ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.2)",
                            fontWeight: 500,
                            transition: "color 0.45s ease",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DISCOVERY CALL ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ marginBottom: "48px" }}>
                <span className="badge mb-6">Before We Sign Anything</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "20px",
                  }}
                >
                  Before we sign anything
                </h2>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div
                style={{
                  padding: "40px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "20px",
                  maxWidth: "720px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.4), transparent)" }}
                />
                <h3
                  className="font-black text-white"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.01em", marginBottom: "24px" }}
                >
                  The discovery call &mdash; 30 minutes
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
                  {discoveryBullets.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <CheckCircle size={15} style={{ color: "#56db84", marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    padding: "16px 20px",
                    background: "rgba(86,219,132,0.04)",
                    border: "1px solid rgba(86,219,132,0.12)",
                    borderRadius: "12px",
                  }}
                >
                  <p style={{ fontSize: "0.875rem", color: "#56db84", fontWeight: 600 }}>
                    Output: You&apos;ll know if we&apos;re working together on the same day
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── ONBOARDING TIMELINE (Day 1-14) ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
                  Onboarding &mdash; Day 1&ndash;14
                </div>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "20px",
                  }}
                >
                  The first 2 weeks &mdash; The Foundation
                </h2>
              </div>
            </FadeInSection>

            {/* Vertical timeline */}
            <div
              ref={timelineRef}
              style={{ maxWidth: "680px", margin: "0 auto", position: "relative" }}
            >
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background: "linear-gradient(to bottom, rgba(86,219,132,0.3), rgba(86,219,132,0.05))",
                }}
              />

              {onboardingSteps.map((step, i) => (
                <div
                  key={i}
                  data-reveal
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "28px",
                    marginBottom: i < onboardingSteps.length - 1 ? "32px" : "0",
                    paddingLeft: "0",
                    opacity: 0,
                    transform: "translateY(28px)",
                    transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "rgba(86,219,132,0.1)",
                      border: "2px solid rgba(86,219,132,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#56db84" }}>
                      {i + 1}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      flex: 1,
                      padding: "28px 28px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <div
                      className="font-bold"
                      style={{
                        fontSize: "0.75rem",
                        color: "#56db84",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "14px",
                      }}
                    >
                      {step.days}
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {step.items.map((item, j) => (
                        <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <CheckCircle size={14} style={{ color: "#56db84", marginTop: "3px", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Output */}
              <FadeInSection delay={500}>
                <div
                  style={{
                    marginTop: "28px",
                    marginLeft: "70px",
                    padding: "16px 20px",
                    background: "rgba(86,219,132,0.04)",
                    border: "1px solid rgba(86,219,132,0.12)",
                    borderRadius: "12px",
                  }}
                >
                  <p style={{ fontSize: "0.875rem", color: "#56db84", fontWeight: 600 }}>
                    By the end of week 2, campaigns are running and data is flowing
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ── MONTHS 1-3 ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
                  Months 1&ndash;3
                </div>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "20px",
                  }}
                >
                  From launch to profitable scaling
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {monthColumns.map((col, i) => (
                <FadeInSection key={i} delay={i * 120}>
                  <div
                    style={{
                      padding: "36px",
                      background: "#0a0a0a",
                      border: i === 2 ? "1px solid rgba(86,219,132,0.2)" : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "20px",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {i === 2 && (
                      <div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.4), transparent)" }}
                      />
                    )}
                    <div style={{ fontSize: "1.75rem", marginBottom: "12px" }}>{col.emoji}</div>
                    <h3
                      className="font-black text-white"
                      style={{ fontSize: "1.125rem", letterSpacing: "-0.01em", marginBottom: "20px" }}
                    >
                      {col.title}
                    </h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                      {col.items.map((item, j) => (
                        <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <CheckCircle size={14} style={{ color: "#56db84", marginTop: "3px", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div
                      style={{
                        padding: "12px 16px",
                        background: "rgba(86,219,132,0.04)",
                        border: "1px solid rgba(86,219,132,0.1)",
                        borderRadius: "10px",
                      }}
                    >
                      <p style={{ fontSize: "0.75rem", color: "#56db84", fontWeight: 600, letterSpacing: "0.02em" }}>
                        {col.kpi}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMUNICATION ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Communication</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "20px",
                  }}
                >
                  How we communicate
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {commCards.map((card, i) => {
                const Icon = card.Icon;
                return (
                  <FadeInSection key={i} delay={i * 80}>
                    <div
                      className="card-hover"
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
                        {card.title}
                      </h3>
                      <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                        {card.desc}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHAT WE DON'T DO (RED) ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
                  Our commitment
                </div>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "20px",
                  }}
                >
                  What you&apos;ll never see from us
                </h2>
              </div>
            </FadeInSection>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
              style={{ maxWidth: "960px", margin: "0 auto" }}
            >
              {dontDoCards.map((card, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div
                    style={{
                      padding: "32px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(239,68,68,0.1)",
                      borderRadius: "20px",
                      height: "100%",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                      <XCircle size={18} style={{ color: "#f87171", marginTop: "2px", flexShrink: 0 }} />
                      <h3
                        className="font-bold text-white"
                        style={{ fontSize: "1rem", letterSpacing: "-0.01em" }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                      {card.desc}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Investment</span>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "20px",
                  }}
                >
                  How much does it cost
                </h2>
              </div>
            </FadeInSection>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
              style={{ maxWidth: "960px", margin: "0 auto" }}
            >
              {pricingCards.map((card, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div
                    style={{
                      padding: "36px",
                      background: "#0a0a0a",
                      border: i === 2 ? "1px solid rgba(86,219,132,0.25)" : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "20px",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {i === 2 && (
                      <div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.5), transparent)" }}
                      />
                    )}
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        color: "rgba(255,255,255,0.35)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 600,
                        marginBottom: "8px",
                      }}
                    >
                      {card.tier} ({card.channels})
                    </div>
                    <div
                      className="font-black"
                      style={{
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        lineHeight: 1.1,
                        color: "#ffffff",
                        letterSpacing: "-0.02em",
                        marginBottom: "12px",
                      }}
                    >
                      {card.price}
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                      {card.desc}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={400}>
              <div style={{ textAlign: "center", marginTop: "28px" }}>
                <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>
                  All packages include free setup in the first month
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "120px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(86,219,132,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="page-container" style={{ position: "relative", zIndex: 1 }}>
            <FadeInSection>
              <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginBottom: "20px",
                  }}
                >
                  Ready to get started?
                </h2>
                <p
                  style={{
                    fontSize: "1.0625rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    letterSpacing: "0.01em",
                    marginBottom: "40px",
                  }}
                >
                  Schedule your free discovery call and let&apos;s see if we&apos;re the right fit.
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                  <Link
                    href={r.contact}
                    className="group inline-flex items-center gap-3 btn-primary"
                    style={{ fontSize: "1rem", padding: "18px 40px" }}
                  >
                    Schedule the discovery call
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href={r.whoWeDontWorkWith}
                    className="group inline-flex items-center gap-3 btn-ghost"
                    style={{ fontSize: "1rem", padding: "18px 32px" }}
                  >
                    See who we don&apos;t work with
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

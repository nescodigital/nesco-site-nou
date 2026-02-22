"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { routes } from "@/lib/routes";
import {
  ArrowRight,
  TrendingUp,
  Mail,
  Users,
  BarChart3,
  Search,
  Share2,
} from "lucide-react";
import { MarketingOrbitMockup } from "@/components/sections/MarketingOrbitMockup";

const r = routes.en;

/* DATA */
const serviceCards = [
  {
    Icon: TrendingUp,
    title: "Digital Strategy",
    desc: "Clear growth plan based on data. Audit, objectives, KPIs and an actionable roadmap.",
    price: "From EUR800/month",
    href: r.digitalStrategy,
  },
  {
    Icon: Mail,
    title: "Email Marketing",
    desc: "Automated campaigns with proven 42:1 ROI. Klaviyo, Mailchimp, ActiveCampaign.",
    price: "From EUR600/month",
    href: r.emailMarketing,
  },
  {
    Icon: Users,
    title: "CRM Solutions",
    desc: "HubSpot, Salesforce, Zoho implementation and optimization. Automated pipeline.",
    price: "From EUR700/month",
    href: r.crmSolutions,
  },
  {
    Icon: BarChart3,
    title: "CRO Solutions",
    desc: "A/B testing, heatmaps, conversion optimization. More sales, same budget.",
    price: "From EUR900/month",
    href: r.croSolutions,
  },
  {
    Icon: Search,
    title: "SEO",
    desc: "Quality organic traffic. Technical SEO, content strategy, link building.",
    price: "From EUR800/month",
    href: r.seoSolutions,
  },
  {
    Icon: Share2,
    title: "Social Media",
    desc: "Community, engagement and content that converts across all platforms.",
    price: "From EUR500/month",
    href: r.socialMedia,
  },
];

const orbitLabels = ["SEO", "Email\nMktg", "CRM", "CRO", "Social\nMedia", "GEO"];

const chartData = {
  months: [1, 2, 3, 4, 5, 6],
  lines: [
    {
      label: "Email Marketing (ROI 42:1)",
      color: "#56db84",
      points: [4, 10, 18, 28, 36, 42],
    },
    {
      label: "Google Ads (ROI 8:1)",
      color: "#60a5fa",
      points: [2, 3.5, 5, 6, 7, 8],
    },
    {
      label: "Industry Average (ROI 2:1)",
      color: "rgba(255,255,255,0.25)",
      points: [0.5, 0.8, 1.2, 1.5, 1.8, 2],
    },
  ],
};

const comparisonRows = [
  {
    feature: "Experience",
    standard: "3-5 years",
    freelancer: "Variable",
    nesco: "15+ years",
    standardOk: false,
    freelancerOk: null,
  },
  {
    feature: "Transparency",
    standard: "Monthly reports",
    freelancer: "Sometimes",
    nesco: "Live dashboard",
    standardOk: false,
    freelancerOk: null,
  },
  {
    feature: "Channels covered",
    standard: "1-2",
    freelancer: "1",
    nesco: "Full-stack",
    standardOk: false,
    freelancerOk: false,
  },
  {
    feature: "Reporting",
    standard: "Static PDF",
    freelancer: "Excel",
    nesco: "Real-time KPIs",
    standardOk: false,
    freelancerOk: false,
  },
  {
    feature: "Response time",
    standard: "48-72h",
    freelancer: "Variable",
    nesco: "Under 4h",
    standardOk: false,
    freelancerOk: null,
  },
  {
    feature: "Results guarantee",
    standard: "No",
    freelancer: "No",
    nesco: "Yes",
    standardOk: false,
    freelancerOk: false,
  },
];

const tickerItems = [
  "Email ROI 42:1",
  "Organic traffic +180%",
  "Conversions +63%",
  "Cost per lead -44%",
  "E-com sales +210%",
  "CRM pipeline +3x",
  "Email open rate 38%",
  "Bounce rate -28%",
  "Qualified leads +90%",
  "Google Ads ROAS 9.4x",
];

/* SVG CHART helpers */
const CHART_W = 640;
const CHART_H = 280;
const PAD = { top: 20, right: 20, bottom: 40, left: 50 };

function toSvgX(month: number) {
  const innerW = CHART_W - PAD.left - PAD.right;
  return PAD.left + ((month - 1) / 5) * innerW;
}
function toSvgY(roi: number) {
  const innerH = CHART_H - PAD.top - PAD.bottom;
  const maxRoi = 50;
  return PAD.top + (1 - roi / maxRoi) * innerH;
}
function pointsToPath(pts: number[]) {
  return pts
    .map((y, i) => {
      const svgX = toSvgX(i + 1);
      const svgY = toSvgY(y);
      return `${i === 0 ? "M" : "L"} ${svgX} ${svgY}`;
    })
    .join(" ");
}
function pathLength(pts: number[]): number {
  let len = 0;
  for (let i = 1; i < pts.length; i++) {
    const dx = toSvgX(i + 1) - toSvgX(i);
    const dy = toSvgY(pts[i]) - toSvgY(pts[i - 1]);
    len += Math.sqrt(dx * dx + dy * dy);
  }
  return len;
}

/* PAGE COMPONENT */
export default function DigitalMarketingPage() {
  /* chart draw-on-scroll */
  const chartRef = useRef<SVGSVGElement>(null);
  const [chartVisible, setChartVisible] = useState(false);

  /* comparison table animate */
  const tableRef = useRef<HTMLDivElement>(null);
  const [tableVisible, setTableVisible] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    if (chartRef.current) {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setChartVisible(true); },
        { threshold: 0.3 }
      );
      obs.observe(chartRef.current);
      observers.push(obs);
    }
    if (tableRef.current) {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setTableVisible(true); },
        { threshold: 0.2 }
      );
      obs.observe(tableRef.current);
      observers.push(obs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <Header locale="en" />
      <main style={{ backgroundColor: "#050505", overflowX: "hidden" }}>

        {/* SECTION 1: HERO */}
        <section
          className="relative overflow-hidden"
          style={{ paddingTop: 140, paddingBottom: 100 }}
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
              background:
                "radial-gradient(circle, rgba(86,219,132,0.07) 0%, transparent 70%)",
              animation: "heroGlow 14s ease-in-out infinite",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: 0,
              left: 0,
              right: 0,
              height: 120,
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />

          <div className="relative page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
            <span className="badge mb-6" style={{ display: "inline-flex" }}>
              Digital Marketing
            </span>

            <h1
              className="font-black"
              style={{
                fontSize: "clamp(3rem, 7vw, 5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                marginTop: 16,
                marginBottom: 28,
                maxWidth: 820,
              }}
            >
              <span style={{ color: "#fff" }}>Digital marketing that</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                drives growth.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: 560,
                marginBottom: 40,
              }}
            >
              We don&apos;t do marketing for the sake of marketing. Every euro invested
              must come back multiplied. Strategy, execution and continuous
              optimization, all under one roof.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href={r.contact}
                className="group inline-flex items-center gap-3 btn-primary"
                style={{ fontSize: "1rem", padding: "18px 40px" }}
              >
                Talk to a specialist
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <Link
                href={r.projects}
                className="group inline-flex items-center gap-3 btn-ghost"
                style={{ fontSize: "1rem", padding: "18px 32px" }}
              >
                See projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <MarketingOrbitMockup locale="en" />
            </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SOLAR SYSTEM ORBIT DIAGRAM */}
        <section className="relative" style={{ padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }}
          />

          <style>{`
            @keyframes slowOrbit {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            @keyframes counterOrbit {
              from { transform: rotate(0deg); }
              to   { transform: rotate(-360deg); }
            }
            @keyframes roiDraw {
              from { stroke-dashoffset: var(--len); }
              to   { stroke-dashoffset: 0; }
            }
          `}</style>

          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>
                Digital Ecosystem
              </span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: 20,
                }}
              >
                All channels, one strategy
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 16,
                  maxWidth: 480,
                  margin: "16px auto 0",
                  lineHeight: 1.65,
                }}
              >
                Every channel works in sync for a coherent and profitable
                digital ecosystem.
              </p>
            </div>

            {/* Orbit diagram */}
            <div
              style={{
                position: "relative",
                width: "min(560px, 90vw)",
                height: "min(560px, 90vw)",
                margin: "0 auto",
              }}
            >
              {/* Orbit ring outer */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "92%",
                  height: "92%",
                  borderRadius: "50%",
                  border: "1px dashed rgba(255,255,255,0.06)",
                }}
              />
              {/* Orbit ring inner */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "66%",
                  height: "66%",
                  borderRadius: "50%",
                  border: "1px dashed rgba(86,219,132,0.12)",
                }}
              />

              {/* Center node */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 108,
                  height: 108,
                  borderRadius: "50%",
                  background: "rgba(86,219,132,0.12)",
                  border: "1.5px solid rgba(86,219,132,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 32px rgba(86,219,132,0.15)",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    color: "#56db84",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textAlign: "center",
                    lineHeight: 1.4,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  Digital<br />Strategy
                </span>
              </div>

              {/* Rotating group of nodes */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  animation: "slowOrbit 60s linear infinite",
                }}
              >
                {orbitLabels.map((label, i) => {
                  const angleDeg = i * 60 - 90;
                  const angleRad = (angleDeg * Math.PI) / 180;
                  const radiusPct = 46;
                  const cx = 50 + radiusPct * Math.cos(angleRad);
                  const cy = 50 + radiusPct * Math.sin(angleRad);

                  return (
                    <div
                      key={label}
                      style={{
                        position: "absolute",
                        top: `${cy}%`,
                        left: `${cx}%`,
                        transform: "translate(-50%,-50%)",
                      }}
                    >
                      <div
                        style={{
                          animation: "counterOrbit 60s linear infinite",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <div
                          style={{
                            width: 52,
                            height: 52,
                            borderRadius: "50%",
                            background: "#0a0a0a",
                            border: "1px solid rgba(86,219,132,0.25)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 16px rgba(86,219,132,0.08)",
                          }}
                        >
                          <div
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: "#56db84",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.65)",
                            textAlign: "center",
                            whiteSpace: "pre",
                            lineHeight: 1.3,
                            letterSpacing: "0.03em",
                          }}
                        >
                          {label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ROI LINE CHART */}
        <section className="relative" style={{ padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }}
          />

          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>
                ROI
              </span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: 20,
                }}
              >
                Measurable results over time
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 16,
                  maxWidth: 460,
                  margin: "16px auto 0",
                  lineHeight: 1.65,
                }}
              >
                ROI evolution across main channels in the first 6 months of
                collaboration.
              </p>
            </div>

            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "32px 24px 24px",
                maxWidth: 720,
                margin: "0 auto",
              }}
            >
              <svg
                ref={chartRef}
                viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                {/* Y axis labels */}
                {[0, 10, 20, 30, 40, 50].map((v) => (
                  <g key={v}>
                    <line
                      x1={PAD.left}
                      y1={toSvgY(v)}
                      x2={CHART_W - PAD.right}
                      y2={toSvgY(v)}
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth={1}
                    />
                    <text
                      x={PAD.left - 8}
                      y={toSvgY(v) + 4}
                      textAnchor="end"
                      fill="rgba(255,255,255,0.3)"
                      fontSize={11}
                    >
                      {v}x
                    </text>
                  </g>
                ))}

                {/* X axis labels */}
                {chartData.months.map((m) => (
                  <text
                    key={m}
                    x={toSvgX(m)}
                    y={CHART_H - 8}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.3)"
                    fontSize={11}
                  >
                    Month {m}
                  </text>
                ))}

                {/* Chart lines */}
                {chartData.lines.map((line) => {
                  const d = pointsToPath(line.points);
                  const len = pathLength(line.points);
                  return (
                    <path
                      key={line.label}
                      d={d}
                      fill="none"
                      stroke={line.color}
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: len,
                        strokeDashoffset: chartVisible ? 0 : len,
                        transition: chartVisible
                          ? "stroke-dashoffset 1.6s cubic-bezier(0.4,0,0.2,1)"
                          : "none",
                      }}
                    />
                  );
                })}

                {/* Dots at final point */}
                {chartData.lines.map((line) => {
                  const last = line.points[line.points.length - 1];
                  return (
                    <circle
                      key={line.label}
                      cx={toSvgX(6)}
                      cy={toSvgY(last)}
                      r={4}
                      fill={line.color}
                      style={{
                        opacity: chartVisible ? 1 : 0,
                        transition: "opacity 0.4s 1.5s",
                      }}
                    />
                  );
                })}
              </svg>

              {/* Legend */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px 24px",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                {chartData.lines.map((line) => (
                  <div
                    key={line.label}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 2.5,
                        background: line.color,
                        borderRadius: 2,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {line.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SERVICE CARDS WITH PRICING */}
        <section className="relative" style={{ padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }}
          />

          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>
                Services
              </span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: 20,
                }}
              >
                Complete solutions, clear pricing
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceCards.map(({ Icon, title, desc, price, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className="group card-hover block"
                  style={{
                    padding: "32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 20,
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    minHeight: 240,
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(86,219,132,0.08)",
                      border: "1px solid rgba(86,219,132,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} style={{ color: "#56db84" }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-white group-hover:text-brand-green transition-colors"
                    style={{
                      fontSize: "1.0625rem",
                      letterSpacing: "-0.01em",
                      marginBottom: 10,
                    }}
                  >
                    {title}
                  </h3>

                  {/* Desc */}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.4)",
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {desc}
                  </p>

                  {/* Footer row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 24,
                    }}
                  >
                    <span
                      className="flex items-center gap-1.5 group-hover:gap-2.5 transition-all font-semibold"
                      style={{ fontSize: "0.8125rem", color: "#56db84" }}
                    >
                      Details <ArrowRight size={13} />
                    </span>
                    {/* Price badge */}
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "rgba(86,219,132,0.8)",
                        background: "rgba(86,219,132,0.08)",
                        border: "1px solid rgba(86,219,132,0.18)",
                        borderRadius: 999,
                        padding: "4px 10px",
                        letterSpacing: "0.02em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPARISON TABLE */}
        <section className="relative" style={{ padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }}
          />

          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>
                Comparison
              </span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: 20,
                }}
              >
                Nesco vs other agencies
              </h2>
            </div>

            <div
              ref={tableRef}
              style={{
                maxWidth: 860,
                margin: "0 auto",
                overflowX: "auto",
                opacity: tableVisible ? 1 : 0,
                transform: tableVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: "14px 20px",
                        textAlign: "left",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.3)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      Criteria
                    </th>
                    {[
                      { label: "Standard Agency", isNesco: false },
                      { label: "Freelancer", isNesco: false },
                      { label: "Nesco Digital", isNesco: true },
                    ].map(({ label, isNesco }) => (
                      <th
                        key={label}
                        style={{
                          padding: "14px 20px",
                          textAlign: "center",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          color: isNesco ? "#56db84" : "rgba(255,255,255,0.55)",
                          letterSpacing: "-0.01em",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          background: isNesco
                            ? "rgba(86,219,132,0.04)"
                            : "transparent",
                          borderLeft: isNesco
                            ? "1px solid rgba(86,219,132,0.15)"
                            : undefined,
                          borderRight: isNesco
                            ? "1px solid rgba(86,219,132,0.15)"
                            : undefined,
                          borderTop: isNesco
                            ? "1px solid rgba(86,219,132,0.15)"
                            : undefined,
                          borderRadius: isNesco ? "8px 8px 0 0" : undefined,
                        }}
                      >
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => {
                    const isLast = idx === comparisonRows.length - 1;
                    return (
                      <tr
                        key={row.feature}
                        style={{
                          opacity: tableVisible ? 1 : 0,
                          transform: tableVisible
                            ? "translateY(0)"
                            : "translateY(12px)",
                          transition: `opacity 0.5s ${idx * 80 + 200}ms ease, transform 0.5s ${idx * 80 + 200}ms ease`,
                        }}
                      >
                        <td
                          style={{
                            padding: "16px 20px",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.7)",
                            borderBottom: isLast
                              ? "none"
                              : "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          {row.feature}
                        </td>
                        {/* Standard Agency */}
                        <td
                          style={{
                            padding: "16px 20px",
                            textAlign: "center",
                            borderBottom: isLast
                              ? "none"
                              : "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          <span style={{ fontSize: "0.78rem" }}>
                            {row.standardOk === false ? (
                              <span style={{ color: "#f87171" }}>&#x2715;</span>
                            ) : (
                              <span style={{ color: "#facc15" }}>~</span>
                            )}
                            <span
                              style={{
                                marginLeft: 6,
                                color: "rgba(255,255,255,0.35)",
                              }}
                            >
                              {row.standard}
                            </span>
                          </span>
                        </td>
                        {/* Freelancer */}
                        <td
                          style={{
                            padding: "16px 20px",
                            textAlign: "center",
                            borderBottom: isLast
                              ? "none"
                              : "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          <span style={{ fontSize: "0.78rem" }}>
                            {row.freelancerOk === false ? (
                              <span style={{ color: "#f87171" }}>&#x2715;</span>
                            ) : (
                              <span style={{ color: "#facc15" }}>~</span>
                            )}
                            <span
                              style={{
                                marginLeft: 6,
                                color: "rgba(255,255,255,0.35)",
                              }}
                            >
                              {row.freelancer}
                            </span>
                          </span>
                        </td>
                        {/* Nesco */}
                        <td
                          style={{
                            padding: "16px 20px",
                            textAlign: "center",
                            background: "rgba(86,219,132,0.04)",
                            borderLeft: "1px solid rgba(86,219,132,0.15)",
                            borderRight: "1px solid rgba(86,219,132,0.15)",
                            borderBottom: isLast
                              ? "1px solid rgba(86,219,132,0.15)"
                              : "1px solid rgba(86,219,132,0.08)",
                            borderRadius: isLast ? "0 0 8px 8px" : undefined,
                          }}
                        >
                          <span style={{ fontSize: "0.78rem" }}>
                            <span style={{ color: "#56db84", fontWeight: 700 }}>
                              &#x2713;
                            </span>
                            <span
                              style={{
                                marginLeft: 6,
                                color: "rgba(255,255,255,0.6)",
                              }}
                            >
                              {row.nesco}
                            </span>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 6: INFINITE TICKER */}
        <section className="relative" style={{ padding: "60px 0", overflow: "hidden" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }}
          />

          <style>{`
            @keyframes tickerMove {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `}</style>

          <div style={{ display: "flex", overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                gap: 0,
                animation: "tickerMove 28s linear infinite",
                whiteSpace: "nowrap",
                willChange: "transform",
              }}
            >
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "0 32px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.55)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item}
                  </span>
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#56db84",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <CtaBanner locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}

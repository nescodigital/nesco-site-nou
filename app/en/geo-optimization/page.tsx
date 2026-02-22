import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Brain, Search, FileText, Database, BarChart3, Shield } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "GEO - AI Optimization | ChatGPT, Perplexity, Gemini | Nesco Digital",
  description: "Be recommended by ChatGPT, Perplexity and Gemini when your clients search for services. GEO is the new SEO - optimization for AI-based search engines.",
  path: "/en/geo-optimization/",
  routeKey: "geoOptimization",
});

export default function GeoOptimizationEnPage() {
  return (
    <>
      <style>{`
        @keyframes geoPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        .geo-pulse { animation: geoPulse 2s ease-in-out infinite; }
        .geo-dot-ring {
          position: relative;
          display: inline-block;
        }
        .geo-dot-ring::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(86,219,132,0.3);
          animation: geoPulse 2s ease-in-out infinite;
        }
      `}</style>
      <Header locale="en" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* Section 1: Hero */}
        <section
          style={{
            paddingTop: "140px",
            paddingBottom: "100px",
            backgroundColor: "#050505",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Grid background */}
          <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

          {/* Green radial glow top right */}
          <div
            style={{
              position: "absolute",
              top: "-180px",
              right: "-180px",
              width: "700px",
              height: "700px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Electric blue radial glow bottom left */}
          <div
            style={{
              position: "absolute",
              bottom: "-200px",
              left: "-200px",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="page-container" style={{ position: "relative", zIndex: 1 }}>
            {/* Badges row */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
              <span className="badge">Digital Marketing</span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "#56db84",
                  background: "rgba(86,219,132,0.08)",
                  border: "1px solid rgba(86,219,132,0.2)",
                  borderRadius: "999px",
                  padding: "4px 12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  className="geo-pulse"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#56db84",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                NEW
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                marginBottom: "28px",
                maxWidth: "800px",
                fontWeight: 800,
                color: "#fff",
              }}
            >
              <span style={{ display: "block" }}>GEO Generative</span>
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #fff 0%, #56db84 50%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Engine Optimization.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "1.125rem",
                maxWidth: "560px",
                lineHeight: 1.65,
                marginBottom: "40px",
              }}
            >
              Ranking in Google is no longer enough. Your clients now ask ChatGPT,
              Perplexity and Gemini. We make sure you get recommended by these AI
              engines in real time.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/en/lets-talk/" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Start GEO Optimization
                <ArrowRight size={16} />
              </Link>
              <Link href="/en/projects/" className="btn-ghost">
                Case studies
              </Link>
            </div>

            {/* Floating AI Status Cards */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "ChatGPT", status: "Recommended" },
                { label: "Perplexity", status: "Recommended" },
                { label: "Gemini", status: "Recommended" },
              ].map(({ label, status }) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(86,219,132,0.05)",
                    border: "1px solid rgba(86,219,132,0.15)",
                    borderRadius: "12px",
                    padding: "12px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    className="geo-pulse"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#56db84",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                    {label}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#56db84", fontWeight: 500 }}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: What is GEO */}
        <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
          {/* Separator */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: "100px",
            }}
          />
          <div className="page-container">
            {/* Badge + heading */}
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
                What is GEO?
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  marginBottom: "16px",
                  lineHeight: 1.1,
                }}
              >
                The new frontier of online visibility
              </h2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.0625rem", maxWidth: "540px", margin: "0 auto", lineHeight: 1.65 }}>
                Millions of users have changed how they search for information. Now,
                they ask AI, and AI recommends the brands it considers trustworthy.
              </p>
            </div>

            {/* 3 cards grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  icon: <Brain size={28} color="#56db84" />,
                  title: "AI engines as sources",
                  desc: "ChatGPT, Perplexity, Gemini, Claude and other LLMs are becoming the primary information source for millions of users.",
                },
                {
                  icon: <Search size={28} color="#60a5fa" />,
                  title: "No traditional links",
                  desc: "AI does not display a list of links. It directly recommends brands, products and services it considers trustworthy and relevant.",
                },
                {
                  icon: <Shield size={28} color="#56db84" />,
                  title: "New digital authority",
                  desc: "AI optimization requires a different approach: structured content, schema markup, citability and domain authority.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="card-hover"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    padding: "36px 32px",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      background: "rgba(255,255,255,0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    {icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: SEO vs GEO Comparator */}
        <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: "100px",
            }}
          />
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
                SEO vs GEO
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                What changes?
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                maxWidth: "880px",
                margin: "0 auto",
              }}
            >
              {/* Traditional SEO */}
              <div
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  padding: "36px 32px",
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Traditional SEO
                  </span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    "Optimization for Google algorithms",
                    "Keyword stuffing and meta tags",
                    "Backlink quantity focus",
                    "Rank #1 in SERP",
                    "Organic traffic from clicks",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                    >
                      <span
                        style={{
                          color: "rgba(239,68,68,1)",
                          fontWeight: 700,
                          fontSize: "1rem",
                          lineHeight: 1.5,
                          flexShrink: 0,
                        }}
                      >
                        x
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9375rem", lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GEO Optimization */}
              <div
                style={{
                  background: "rgba(86,219,132,0.04)",
                  border: "1px solid rgba(86,219,132,0.2)",
                  borderRadius: "20px",
                  padding: "36px 32px",
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#56db84",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    GEO Optimization
                  </span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    "Optimization for AI models",
                    "Semantic and structured content",
                    "Authority and citability",
                    "Recommended by AI as a source",
                    "Presence in AI responses",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                    >
                      <span
                        style={{
                          color: "#56db84",
                          fontWeight: 700,
                          fontSize: "1rem",
                          lineHeight: 1.5,
                          flexShrink: 0,
                        }}
                      >
                        &#x2713;
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem", lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 6 Services Grid */}
        <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: "100px",
            }}
          />
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
                GEO Services
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                What we include
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  icon: <FileText size={24} color="#56db84" />,
                  title: "LLMs.txt Implementation",
                  desc: "An instruction file for AI crawlers that tells ChatGPT and Perplexity exactly what you are and what you offer.",
                  accentColor: "#56db84",
                },
                {
                  icon: <Database size={24} color="#60a5fa" />,
                  title: "Advanced Schema Markup",
                  desc: "Structured JSON-LD to give AI engines full context about your business.",
                  accentColor: "#60a5fa",
                },
                {
                  icon: <Brain size={24} color="#56db84" />,
                  title: "Semantic Content",
                  desc: "Content creation and optimization to answer the questions your clients ask AI engines.",
                  accentColor: "#56db84",
                },
                {
                  icon: <Search size={24} color="#60a5fa" />,
                  title: "AI Citability Audit",
                  desc: "We evaluate how LLMs perceive you and identify gaps versus competitors.",
                  accentColor: "#60a5fa",
                },
                {
                  icon: <BarChart3 size={24} color="#56db84" />,
                  title: "AI Presence Monitoring",
                  desc: "We track your brand mentions and recommendations in the main AI engines.",
                  accentColor: "#56db84",
                },
                {
                  icon: <Shield size={24} color="#60a5fa" />,
                  title: "Digital Authority",
                  desc: "We build the authority signals that make AI recommend you: links, mentions, co-citations.",
                  accentColor: "#60a5fa",
                },
              ].map(({ icon, title, desc, accentColor }) => (
                <div
                  key={title}
                  className="card-hover"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    padding: "32px",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      background: `rgba(${accentColor === "#56db84" ? "86,219,132" : "96,165,250"},0.08)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "18px",
                    }}
                  >
                    {icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Pricing */}
        <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: "100px",
            }}
          />
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
                Investment
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                GEO Package
              </h2>
            </div>

            {/* Pricing card */}
            <div
              style={{
                maxWidth: "520px",
                margin: "0 auto",
                background: "rgba(86,219,132,0.04)",
                border: "1px solid rgba(86,219,132,0.2)",
                borderRadius: "20px",
                padding: "48px",
              }}
            >
              {/* Label */}
              <div style={{ marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#56db84",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  GEO Optimization
                </span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: "6px" }}>
                <span
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  800EUR
                </span>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", marginLeft: "6px" }}>
                  /month
                </span>
              </div>

              {/* Setup note */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "36px",
                  lineHeight: 1.5,
                }}
              >
                Initial setup: 1,200EUR (audit and implementation)
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(86,219,132,0.12)",
                  marginBottom: "28px",
                }}
              />

              {/* Included items */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "LLMs.txt and robots.txt optimization",
                  "Complete Schema Markup (LocalBusiness, FAQPage, Service)",
                  "Semantic content audit and optimization (4 pages/month)",
                  "Monthly AI Presence report (ChatGPT, Perplexity, Gemini)",
                  "Brand mentions monitoring in AI",
                  "Monthly GEO strategy and consulting",
                ].map((item) => (
                  <li
                    key={item}
                    style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                  >
                    <span
                      style={{
                        color: "#56db84",
                        fontWeight: 700,
                        fontSize: "1rem",
                        lineHeight: 1.5,
                        flexShrink: 0,
                      }}
                    >
                      &#x2713;
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/en/lets-talk/"
                className="btn-primary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Start GEO Optimization
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: "100px",
            }}
          />
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
                FAQ
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                Frequently asked questions
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "760px",
                margin: "0 auto",
              }}
            >
              {[
                {
                  q: "How long until I appear in AI responses?",
                  a: "First results are visible in 4-8 weeks. AI optimization is a continuous process, similar to SEO, but with faster dynamics.",
                },
                {
                  q: "Does GEO replace SEO?",
                  a: "No, they complement each other. SEO remains important for organic traffic from Google. GEO adds a new channel: AI recommendations.",
                },
                {
                  q: "How do you know AI is recommending me?",
                  a: "Through regular monitoring: we test relevant prompts for your industry in ChatGPT, Perplexity and Gemini and track whether your brand appears in responses.",
                },
                {
                  q: "Does it work for any industry?",
                  a: "Yes, but impact varies. It works best for professional services, B2B, education, health, legal and finance - industries where people seek AI recommendations.",
                },
                {
                  q: "What happens if my competitors do GEO and I don't?",
                  a: "AI will recommend your competitors. Unlike SEO where you can recover ground relatively quickly, AI authority builds slowly. The later you start, the wider the gap grows.",
                },
              ].map(({ q, a }, index) => (
                <div
                  key={index}
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    padding: "28px 32px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "12px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                    }}
                  >
                    {q}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}

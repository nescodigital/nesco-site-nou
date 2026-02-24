import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function ArticlePage() {
  return (
    <>
      <Header locale="en" />
      <main style={{ backgroundColor: "#050505" }}>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "#050505",
            paddingTop: "140px",
            paddingBottom: "80px",
          }}
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
                "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div
            className="relative page-container"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            <span
              className="badge mb-4"
              style={{
                background: "rgba(59,130,246,0.10)",
                color: "#3b82f6",
                border: "1px solid rgba(59,130,246,0.18)",
              }}
            >
              Strategy
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              February 3, 2026 &middot; 8 min read
            </p>
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Why Your{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Digital Marketing Isn&apos;t Working
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              10 real reasons why campaigns fail and how to diagnose and fix
              each one &mdash; step by step.
            </p>
          </div>
        </section>

        {/* ── Article Content ── */}
        <article
          className="page-container"
          style={{ maxWidth: "720px", margin: "0 auto", paddingBottom: "80px" }}
        >
          {/* Intro */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                &ldquo;We tried Google Ads and it didn&apos;t work.&rdquo;
                &ldquo;We invested in SEO for 3 months and nothing
                happened.&rdquo; &ldquo;Social media marketing is a waste of
                money.&rdquo; Sound familiar?
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The problem usually isn&apos;t the channel &mdash; it&apos;s the
                execution. After years of working with dozens of companies that
                came to us &ldquo;burned&rdquo; by previous digital marketing
                experiences, we&apos;ve identified a clear pattern: the same 10
                mistakes appear repeatedly, regardless of industry or budget.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In this article, we break down each reason in detail and give
                you the concrete solution for each one. If you recognize
                yourself in at least 3 of the items below, you&apos;ve found why
                your digital marketing isn&apos;t working.
              </p>
            </div>
          </FadeInSection>

          {/* 10 real reasons */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                10 real reasons why digital marketing fails
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Each reason comes with a specific problem and an actionable
                solution. Read them all &mdash; you might recognize more than
                you expect.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    title: "1. No clear strategy",
                    problem:
                      "Running ads without a documented strategy is like driving without GPS \u2014 you end up somewhere, but rarely where you need to be. Without a clear plan, your budget gets wasted on disconnected actions that don\u2019t tie together.",
                    solution:
                      "Start with SMART objectives, define your target audience, choose channels based on data, and create an editorial calendar. A strategy doesn\u2019t need to be a 50-page document \u2014 but it needs to exist and be followed consistently.",
                  },
                  {
                    title: "2. Targeting everyone",
                    problem:
                      "\"Everyone aged 18\u201365\" isn\u2019t targeting. When you try to sell to everyone, you sell to no one. The message becomes generic, CTR drops, and cost per conversion skyrockets.",
                    solution:
                      "Create 2\u20133 buyer personas with specific demographics, interests, pain points, and motivations. Segment campaigns by these profiles and adapt messaging for each. A relevant message for 1,000 people beats a generic one for 100,000.",
                  },
                  {
                    title: "3. Your website doesn\u2019t convert",
                    problem:
                      "Great ads leading to a poor landing page equals wasted budget. If your site loads slowly, isn\u2019t mobile-optimized, or lacks clear CTAs, visitors leave within 3 seconds. A bounce rate of 80%+ is a clear sign.",
                    solution:
                      "Optimize landing pages before scaling your ad budget. Check load speed (under 3 seconds), responsive design, consistent messaging with ads, and visible CTAs above the fold. Test with Google PageSpeed Insights.",
                  },
                  {
                    title: "4. No proper tracking",
                    problem:
                      "If you can\u2019t measure, you can\u2019t improve. Many companies run campaigns without properly configured Google Analytics 4, without conversion tracking, or without UTM parameters. You\u2019re essentially throwing money in the dark.",
                    solution:
                      "Set up Google Analytics 4 with custom events, install conversion pixels on all platforms, use UTM parameters for every campaign, and create a reporting dashboard. Correct data is the foundation of any optimization.",
                  },
                  {
                    title: "5. Budget too small",
                    problem:
                      "\u20AC200/month on Google Ads won\u2019t generate enough data to learn what works. A small budget split across 5 channels means none of them get enough fuel to produce measurable results.",
                    solution:
                      "Concentrate your budget on one channel, reach statistical significance, optimize, then scale. It\u2019s better to invest \u20AC500/month on one working channel than \u20AC100/month on 5 channels that lack sufficient data.",
                  },
                  {
                    title: "6. Unrealistic expectations",
                    problem:
                      "SEO produces results in 6\u201312 months, not 2 weeks. Google Ads needs a 2\u20134 week learning phase. Building a brand takes years. When expectations don\u2019t align with reality, every channel looks like it \u201Cdoesn\u2019t work.\u201D",
                    solution:
                      "Set realistic timelines per channel: Google Ads (2\u20134 weeks learning + 2\u20133 months optimization), SEO (6\u201312 months for significant results), organic Social Media (3\u20136 months for traction). Compare against industry benchmarks, not wishful thinking.",
                  },
                  {
                    title: "7. Generic content",
                    problem:
                      "\u201CWe are the best agency\u201D or \u201CQuality at the best price\u201D doesn\u2019t resonate with anyone. Generic content fails to address your audience\u2019s specific pain points and doesn\u2019t differentiate you from competitors. The result? Endless scrolling and zero engagement.",
                    solution:
                      "Create content that addresses specific problems with data and concrete examples. Use your audience\u2019s language, not corporate jargon. Tell real stories, showcase case studies, and provide value before asking for anything in return.",
                  },
                  {
                    title: "8. No A/B testing",
                    problem:
                      "You\u2019re guessing instead of testing. Running a single headline variant, one CTA, one audience \u2014 and if it doesn\u2019t work, you change everything. Without systematic testing, optimization is impossible.",
                    solution:
                      "Test one element at a time: headlines, CTAs, audiences, creatives. Let tests run until they reach statistical significance (minimum 100 conversions per variant). Document results and apply learnings to future campaigns.",
                  },
                  {
                    title: "9. Ignoring data",
                    problem:
                      "Making decisions based on feelings instead of analytics. \u201CI like this creative\u201D or \u201CI feel Facebook is better than Google\u201D aren\u2019t valid arguments. Subjective biases are the #1 enemy of performance.",
                    solution:
                      "Implement weekly data reviews. Analyze CTR, CPC, conversion rate, ROAS, and CPA per channel, audience, and creative. Make data-driven decisions, not opinion-based ones. A clear dashboard and defined KPIs make all the difference.",
                  },
                  {
                    title: "10. Changing strategy too often",
                    problem:
                      "Google Ads this month, TikTok next month, SEO two weeks later. When you switch channels or strategies every month, none of them have time to produce results. It\u2019s the digital equivalent of planting a tree and digging it up after a week to check if it\u2019s grown.",
                    solution:
                      "Commit to a strategy for at least 3 months before pivoting. Define intermediate KPIs (not just final sales) and evaluate progress monthly. If after 3 months the data shows it\u2019s not working, pivot based on what you\u2019ve learned, not on frustration.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        marginBottom: "12px",
                      }}
                    >
                      <strong style={{ color: "rgba(255,255,255,0.6)" }}>
                        Problem:
                      </strong>{" "}
                      {item.problem}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      <strong style={{ color: "#3b82f6" }}>
                        Solution:
                      </strong>{" "}
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Quick diagnostic */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Quick diagnostic: 2-minute checklist
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Answer Yes or No to each question. Every &ldquo;No&rdquo;
                indicates a problem area that needs to be addressed as a
                priority.
              </p>

              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    "Do you have a documented marketing strategy with clear objectives?",
                    "Have you defined 2\u20133 specific buyer personas?",
                    "Do your landing pages load in under 3 seconds and are they mobile-optimized?",
                    "Is Google Analytics 4 configured with active conversion tracking?",
                    "Is your ad budget concentrated on 1\u20132 main channels?",
                    "Do you have realistic expectations aligned with each channel\u2019s timeline?",
                    "Does your content address specific pain points of your target audience?",
                    "Do you run systematic A/B tests on your campaigns?",
                    "Do you hold weekly data and KPI reviews?",
                    "Has your current strategy been consistently implemented for at least 3 months?",
                  ].map((question, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "12px",
                        borderBottom:
                          i < 9
                            ? "1px solid rgba(255,255,255,0.04)"
                            : "none",
                      }}
                    >
                      <span
                        style={{
                          color: "#3b82f6",
                          fontWeight: 700,
                          flexShrink: 0,
                          minWidth: "24px",
                        }}
                      >
                        {i + 1}.
                      </span>
                      {question}
                    </li>
                  ))}
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginTop: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>8\u201310 Yes:</strong> Your
                strategy is solid &mdash; look for granular optimizations.{" "}
                <strong style={{ color: "#fff" }}>5\u20137 Yes:</strong> You have
                the foundation, but there are significant gaps to address.{" "}
                <strong style={{ color: "#fff" }}>Under 5 Yes:</strong> Your
                digital marketing needs a complete restructure before you invest
                more.
              </p>
            </div>
          </FadeInSection>

          {/* CTA Box */}
          <FadeInSection>
            <div
              style={{
                padding: "40px",
                background: "#0a0a0a",
                borderRadius: "20px",
                border: "1px solid rgba(86,219,132,0.2)",
                textAlign: "center",
                marginBottom: "64px",
              }}
            >
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.5rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Want a free diagnostic?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  maxWidth: "480px",
                  margin: "0 auto 28px",
                }}
              >
                Our team will analyze your current campaigns, identify the
                problems, and provide you with a concrete action plan &mdash;
                free of charge, no strings attached.
              </p>
              <Link href="/en/lets-talk/" className="btn-primary">
                Get in touch <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>

          {/* Related Articles */}
          <FadeInSection>
            <div style={{ marginBottom: "40px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.375rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "24px",
                }}
              >
                Related articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  style={{
                    padding: "28px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#3b82f6",
                    }}
                  >
                    Strategy
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    How to Choose the Right Marketing Agency: 10-Step Checklist
                  </h3>
                  <Link
                    href="/en/blog/how-to-choose-marketing-agency/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#56db84",
                      textDecoration: "none",
                    }}
                  >
                    Read <ArrowRight size={14} />
                  </Link>
                </div>
                <div
                  style={{
                    padding: "28px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#3b82f6",
                    }}
                  >
                    Strategy
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Digital Marketing Strategy: The Complete Guide for 2026
                  </h3>
                  <Link
                    href="/en/blog/digital-marketing-strategy-guide/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#56db84",
                      textDecoration: "none",
                    }}
                  >
                    Read <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="en" />
    </>
  );
}

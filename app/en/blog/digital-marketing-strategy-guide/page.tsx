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
                "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
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
              February 6, 2026 &middot; 14 min read
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
              Digital Marketing Strategy Step by Step{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                (2026 Guide)
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
              The complete 7-step framework for building a digital marketing
              strategy from scratch &mdash; from audit to execution and
              reporting.
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
                Most businesses skip strategy and jump straight to tactics.
                They run Meta ads without knowing their audience, create content
                without a plan, and wonder why nothing works. The lack of a
                coherent strategy is the number one reason marketing budgets
                evaporate without measurable results.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In this guide, we share the exact framework we use at Nesco
                Digital when building digital marketing strategies for our
                clients. There are 7 clear steps, in logical order, that you
                can apply regardless of industry, budget, or team size.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                This isn&apos;t textbook theory &mdash; it&apos;s the real
                process, tested on dozens of projects, from startups with
                budgets of &euro;2,000/month to companies spending over
                &euro;50,000/month.
              </p>
            </div>
          </FadeInSection>

          {/* Step 1: Audit */}
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
                Step 1: Audit &mdash; Where Are You Now?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Before deciding where you want to go, you need to understand
                exactly where you are. A complete digital marketing audit
                analyzes everything about your online presence &mdash; from
                website and analytics to existing campaigns and the competitive
                landscape.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Analyze: current traffic (Google Analytics), existing campaign
                performance (ROAS, CPA, CTR), SEO positioning (keywords,
                backlinks, Core Web Vitals), social media presence, and direct
                competitor behavior. Conduct a SWOT analysis &mdash; strengths,
                weaknesses, opportunities, and threats.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                The outcome of this step is a clear picture: what&apos;s
                working, what&apos;s not, and where the gaps are. Without this
                data foundation, every strategic decision is just guesswork.
              </p>
            </div>
          </FadeInSection>

          {/* Step 2: SMART Goals */}
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
                Step 2: SMART Goals
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                &ldquo;I want more customers&rdquo; is not a goal &mdash;
                it&apos;s a wish. Goals that actually work are Specific,
                Measurable, Achievable, Relevant, and Time-bound (SMART).
                Every channel, every campaign must have a clear target tied
                to a concrete number.
              </p>

              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "24px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  SMART goal examples:
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    "Increase organic traffic by 50% in 6 months (from 8,000 to 12,000 sessions/month)",
                    "Generate 100 qualified leads/month via Google Ads by month 3",
                    "Achieve a ROAS of 5:1 on Google Shopping within 90 days",
                    "Reduce CPA on Meta Ads from $45 to $25 within the next 60 days",
                  ].map((goal) => (
                    <li
                      key={goal}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: "#3b82f6", flexShrink: 0 }}>
                        &#9679;
                      </span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Every goal must be tied to a measurable KPI. If you can&apos;t
                measure weekly progress, the goal isn&apos;t specific enough.
              </p>
            </div>
          </FadeInSection>

          {/* Step 3: Buyer Personas */}
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
                Step 3: Buyer Personas
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Who are you selling to? Not &ldquo;everyone&rdquo; &mdash; but
                2-3 ideal customer profiles, defined in detail. Without clear
                buyer personas, your marketing message will be generic and
                won&apos;t resonate with anyone specifically.
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
                    title: "Demographics",
                    desc: "Age, location, income, job title, company size. For example: male, 35-45, business owner with a company doing $500K-$2M/year revenue, based in a major metro area.",
                  },
                  {
                    title: "Pain points",
                    desc: "What problems are they trying to solve? Not enough leads? Customer acquisition cost too high? Don't know which channels work? Identify 3-5 concrete pain points.",
                  },
                  {
                    title: "Buying triggers",
                    desc: "What makes them look for a solution right now? An important season approaching, a competitor that's growing, a campaign that stopped working, pressure from investors.",
                  },
                  {
                    title: "Preferred channels",
                    desc: "Where do they spend time online? LinkedIn for B2B, Instagram and TikTok for younger consumers, Google Search when actively looking for solutions, YouTube for research.",
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
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Define at least 2 different personas. Your entire strategy for
                channels, messaging, and budget will be built around these
                profiles.
              </p>
            </div>
          </FadeInSection>

          {/* Step 4: Channel Selection */}
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
                Step 4: Channel Selection
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                You don&apos;t need to be on every channel &mdash; you need to
                be on the right channels. The choice depends on your buyer
                personas, budget, and goals. Here&apos;s a quick comparison:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "640px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Channel", "Best For", "Budget", "Timeline to Results"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #3b82f6",
                              textAlign: "left",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                            }}
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Google Search Ads", "High-intent buyers", "Medium-High", "1-2 weeks"],
                      ["Meta Ads", "Awareness, retargeting", "Medium", "2-4 weeks"],
                      ["SEO", "Long-term organic traffic", "Low-Medium", "3-6 months"],
                      ["Email Marketing", "Retention, nurture", "Low", "2-4 weeks"],
                      ["TikTok Ads", "Gen Z / Millennials", "Medium", "2-4 weeks"],
                      ["LinkedIn Ads", "B2B lead generation", "High", "2-4 weeks"],
                      ["Content Marketing", "Authority, SEO", "Low-Medium", "3-12 months"],
                    ].map(([channel, bestFor, budget, timeline], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {channel}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {bestFor}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {budget}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {timeline}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Rule of thumb: start with 2-3 channels you can execute well.
                It&apos;s better to be excellent on 2 channels than mediocre
                on 7. Only add new channels once you&apos;ve optimized the
                existing ones.
              </p>
            </div>
          </FadeInSection>

          {/* Step 5: Budget Allocation */}
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
                Step 5: Budget Allocation &mdash; The 70-20-10 Rule
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                How do you split your marketing budget across channels? We use
                the 70-20-10 rule:{" "}
                <strong style={{ color: "#fff" }}>70%</strong> on proven
                channels that deliver results,{" "}
                <strong style={{ color: "#fff" }}>20%</strong> on scaling
                promising channels, and{" "}
                <strong style={{ color: "#fff" }}>10%</strong> on experiments
                with new channels or tactics.
              </p>

              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "24px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Sample allocation for a &euro;5,000/month budget:
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    ["Google Ads (70%)", "\u20AC3,500"],
                    ["Meta Ads - scaling (20%)", "\u20AC1,000"],
                    ["TikTok Ads - experiment (10%)", "\u20AC500"],
                  ].map(([label, value]) => (
                    <li
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span>{label}</span>
                      <span
                        style={{ color: "#fff", fontWeight: 600 }}
                      >
                        {value}
                      </span>
                    </li>
                  ))}
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#3b82f6",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Monthly total</span>
                    <span>&euro;5,000</span>
                  </li>
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                For larger businesses (budget &euro;15,000+/month), the
                experiment portion can increase to 15-20%, since you have a
                solid revenue base from your main channels that allows you to
                test more aggressively.
              </p>
            </div>
          </FadeInSection>

          {/* Step 6: Execution Calendar */}
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
                Step 6: Execution Calendar
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A strategy without an execution calendar is just a nice
                PowerPoint. Here&apos;s a realistic monthly plan for the first
                6 months:
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
                    title: "Month 1: Setup & Launch",
                    desc: "Configure tracking (GA4, GTM, conversions), create ad accounts, set up initial campaigns, technical website audit, define UTMs and reporting dashboard.",
                  },
                  {
                    title: "Month 2-3: Optimize",
                    desc: "Analyze first data, A/B test ads and landing pages, adjust audiences, optimize bidding, first creative iterations based on real data.",
                  },
                  {
                    title: "Month 4-6: Scale Winners",
                    desc: "Increase budget on performing channels, stop underperformers, test new channels from the 10% experiment bucket, expand into lookalike audiences.",
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
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Important: month 1 is always the slowest in terms of results.
                Don&apos;t panic &mdash; it&apos;s the month where you build
                the foundation. Real results start appearing in months 2-3,
                and significant scaling happens from month 4 onward.
              </p>
            </div>
          </FadeInSection>

          {/* Step 7: KPIs & Reporting */}
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
                Step 7: KPIs &amp; Reporting
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Without measurement, there is no optimization. Each channel
                has its own specific KPIs, and the reporting rhythm must be
                consistent and structured.
              </p>

              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "24px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Essential KPIs per channel:
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    ["Google Ads", "ROAS, CPA, CTR, Quality Score"],
                    ["Meta Ads", "CPM, CPC, CPA, ROAS, Frequency"],
                    ["SEO", "Organic traffic, keyword rankings, backlinks"],
                    ["Email", "Open rate, CTR, conversion rate, unsubscribe rate"],
                    ["Overall", "CAC (Customer Acquisition Cost), LTV, MQL, SQL"],
                  ].map(([label, value]) => (
                    <li
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: "#fff", fontWeight: 600 }}>
                        {label}
                      </span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Recommended reporting cadence:{" "}
                <strong style={{ color: "#fff" }}>weekly</strong> &mdash;
                quick spend and performance check,{" "}
                <strong style={{ color: "#fff" }}>monthly</strong> &mdash;
                detailed analysis with optimization decisions,{" "}
                <strong style={{ color: "#fff" }}>quarterly</strong> &mdash;
                strategic review and goal adjustment.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                The biggest danger is collecting data without acting on it.
                Every report should end with 2-3 concrete actions to be
                implemented the following week. Data without action is just
                numbers on a screen.
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
                Build your strategy
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
                Don&apos;t have the time or team to build a complete strategy
                on your own? The Nesco Digital team can create a personalized
                digital marketing plan with clear goals, selected channels,
                and an execution calendar.
              </p>
              <Link href="/en/digital-strategy/" className="btn-primary">
                I want a strategy <ArrowRight size={16} />
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
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
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
                    What Is a Growth Sprint and Why Do You Need One?
                  </h3>
                  <Link
                    href="/en/blog/what-is-growth-sprint/"
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
                    Why Isn&apos;t Digital Marketing Working for You?
                  </h3>
                  <Link
                    href="/en/blog/why-digital-marketing-not-working/"
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

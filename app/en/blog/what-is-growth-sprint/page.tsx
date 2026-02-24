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
              February 13, 2026 &middot; 7 min read
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
              What Is a Growth Sprint and How It{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Accelerates Growth?
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
              6 weeks. One single objective. Audit, strategy, execution,
              optimization and results &mdash; compressed into an intensive
              sprint that replaces months of waiting.
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
                Traditional agency models run on monthly retainers. You pay
                monthly, receive deliverables, and wait for results. The
                problem? No urgency. Strategy stretches over months, execution
                is fragmented, and the first real results show up after 3 to 6
                months &mdash; if they show up at all.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A <strong style={{ color: "#fff" }}>Growth Sprint</strong> is
                the opposite of that model. It&rsquo;s an intensive 6-week
                engagement, structured in clear phases: audit &rarr; strategy
                &rarr; execution &rarr; optimization &rarr; results. Every
                week has concrete objectives and measurable deliverables.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                It&rsquo;s designed for businesses that can&rsquo;t afford to
                wait. Those that need fast, measurable growth with a fixed
                budget and a tight timeline. Instead of losing 3 months on
                &ldquo;onboarding,&rdquo; in a Growth Sprint you&rsquo;re
                already in execution by week three.
              </p>
            </div>
          </FadeInSection>

          {/* Section: The problem with traditional models */}
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
                The problem with the traditional agency model
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Monthly retainers have been the industry standard for over a
                decade. But for many businesses &mdash; especially those in
                early stages or scaling phases &mdash; this model comes with
                structural problems:
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
                    title: "No sense of urgency",
                    desc: "When the contract runs for 6 to 12 months, there's no pressure for fast results. Deliverables get stretched, meetings multiply, but real impact is delayed.",
                  },
                  {
                    title: "Strategy is separated from execution",
                    desc: "One team builds the strategy, another executes it. Information gets lost between departments and the original vision gets diluted along the way.",
                  },
                  {
                    title: "2-3 months of onboarding",
                    desc: "Before any real work starts, traditional agencies need months of \"getting to know you,\" extended audits, and alignment meetings. During all of which you're paying without seeing results.",
                  },
                  {
                    title: "Diffuse accountability",
                    desc: "KPIs are vague, reports show vanity metrics (impressions, reach), and when you ask \"what concrete results do we have?\" the answer is always \"we need more time.\"",
                  },
                  {
                    title: "Higher financial risk",
                    desc: "You commit to 6 to 12 months with a recurring monthly fee, with no guarantee the model is right for you. If it doesn't work, you've lost months of budget.",
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
            </div>
          </FadeInSection>

          {/* Section: How a Growth Sprint works */}
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
                How a Growth Sprint works
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                A Nesco Digital Growth Sprint follows a fixed 6-week timeline
                with clearly defined phases. Each week has specific objectives
                and concrete deliverables:
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
                    week: "Week 1",
                    title: "Deep audit",
                    desc: "Complete analysis of existing analytics, competitors, market landscape and current performance. We identify gaps, opportunities and quick wins. Deliverable: actionable audit report with clear conclusions.",
                  },
                  {
                    week: "Week 2",
                    title: "Strategy & roadmap",
                    desc: "Based on the audit, we build the strategy: priority channels, budget allocation, target KPIs, creative direction and execution calendar. Everything documented in a clear roadmap.",
                  },
                  {
                    week: "Week 3-4",
                    title: "Rapid execution",
                    desc: "Campaigns go live. Optimized landing pages, complete tracking setup, tested creatives, audiences configured. Within two weeks we already have real performance data.",
                  },
                  {
                    week: "Week 5",
                    title: "Optimization",
                    desc: "A/B testing on creatives and landing pages, budget reallocation to what works, iteration on messaging and audiences. Every decision is based on data, not assumptions.",
                  },
                  {
                    week: "Week 6",
                    title: "Results review + scale plan",
                    desc: "We analyze what worked, what didn't, and build the scaling plan: which channels to double down on, what to stop, what to keep testing. You receive a complete playbook.",
                  },
                ].map((item) => (
                  <div
                    key={item.week}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#3b82f6",
                      }}
                    >
                      {item.week}
                    </span>
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "8px",
                        marginTop: "8px",
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
            </div>
          </FadeInSection>

          {/* Section: Growth Sprint vs Traditional Retainer */}
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
                Growth Sprint vs. Traditional Retainer
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                To better understand the differences, here&rsquo;s a
                side-by-side comparison of both models:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "540px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Aspect", "Growth Sprint", "Traditional Retainer"].map(
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
                      ["Duration", "6 focused weeks", "Ongoing (3-12 months)"],
                      ["Speed to results", "2-3 weeks", "2-3 months"],
                      ["Commitment", "Fixed project", "Monthly recurring"],
                      ["Risk", "Low (defined scope)", "Higher (long commitment)"],
                      ["Focus", "1-2 priority channels", "All channels at once"],
                      ["Accountability", "Clear KPIs from day 1", "Often vague deliverables"],
                      ["Investment", "Fixed budget", "Variable monthly fees"],
                      ["Best for", "Testing, pivoting, scaling", "Established, stable brands"],
                    ].map(([aspect, sprint, retainer], i) => (
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
                          {aspect}
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
                          {sprint}
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
                          {retainer}
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
                A Growth Sprint doesn&rsquo;t necessarily replace a long-term
                retainer. But it&rsquo;s the ideal way to{" "}
                <strong style={{ color: "#fff" }}>quickly validate</strong>{" "}
                what works before committing to months of engagement.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Who it's for */}
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
                Who is a Growth Sprint for
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A Growth Sprint isn&rsquo;t for everyone. But if you recognize
                yourself in at least two of the scenarios below, it&rsquo;s
                probably the right model for you:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                {[
                  "You're launching a new product or service and need fast traction",
                  "You're switching agencies and want immediate results, not another 3 months of onboarding",
                  "You're a startup that needs rapid market validation",
                  "You have an e-commerce store entering a new market or segment",
                  "You want to test paid advertising ROI before committing a large budget",
                  "You have a seasonal peak approaching and need to be ready now",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.7,
                    }}
                  >
                    <span style={{ color: "#56db84", flexShrink: 0 }}>
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                If, on the other hand, you have a mature brand with established
                marketing processes and need continuous maintenance across 5+
                channels, a traditional retainer might be a better fit. The
                Growth Sprint is for those who need{" "}
                <strong style={{ color: "#fff" }}>
                  speed and clarity
                </strong>
                , not autopilot continuity.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Typical results */}
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
                Typical results after 6 weeks
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Every business is different, but at the end of a Growth Sprint
                our clients typically have:
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
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {[
                    "Clear data on which channels work and which don't — no guesswork",
                    "First conversions and leads from paid campaigns, with documented cost-per-lead",
                    "Optimized landing pages with real A/B testing data",
                    "A documented scaling strategy: what to double down on, what to stop, what to keep testing",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: "#56db84", flexShrink: 0 }}>
                        &#10003;
                      </span>
                      {item}
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
                The goal isn&rsquo;t just to get results in 6 weeks, but to
                have a{" "}
                <strong style={{ color: "#fff" }}>tested playbook</strong> you
                can use in the following months &mdash; whether you continue
                with us or internalize the execution.
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
                Start a Growth Sprint
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
                Learn how the Growth Sprint model works, what it includes,
                and how you can compress months of growth into just 6 focused
                weeks.
              </p>
              <Link
                href="/en/growth-sprint-education/"
                className="btn-primary"
              >
                Discover Growth Sprint <ArrowRight size={16} />
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
                    Digital Marketing Strategy Step by Step (2026 Guide)
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
                    Read more <ArrowRight size={14} />
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
                    Read more <ArrowRight size={14} />
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

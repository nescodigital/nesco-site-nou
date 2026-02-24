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
                "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)",
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
                background: "rgba(236,72,153,0.10)",
                color: "#ec4899",
                border: "1px solid rgba(236,72,153,0.18)",
              }}
            >
              Automation
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              January 28, 2026 &middot; 9 min read
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
              How Companies Use AI in{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Marketing in 2026
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
              Practical applications, tested tools, and strategies that actually
              work &mdash; the complete guide for marketers who want to use AI
              intelligently, not just follow the trend.
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
                AI isn&rsquo;t replacing marketers &mdash; it&rsquo;s making
                them 10x more productive. But the reality is that most companies
                either don&rsquo;t use AI in marketing at all, or they use it
                wrong: generate text with ChatGPT, copy-paste it without editing,
                and wonder why it doesn&rsquo;t work.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In this guide, we show you what the smartest companies are doing
                with AI in marketing in 2026: where they apply it, which tools
                they use, what works and what doesn&rsquo;t &mdash; with
                concrete examples and real numbers.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                This isn&rsquo;t about hype. It&rsquo;s about measurable
                efficiency and the competitive advantage you gain when you know
                what you&rsquo;re doing.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Where AI is used in marketing */}
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
                Where AI is used in marketing
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                AI is not a single magic tool &mdash; it&rsquo;s an ecosystem
                of solutions covering nearly every stage of the marketing
                process. Here&rsquo;s where it&rsquo;s used most effectively in
                2026:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "600px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Application", "Tools", "Time Saved", "Impact"].map(
                        (h) => (
                          <th
                            key={h}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #ec4899",
                              textAlign: "left",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                            }}
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Content creation (drafts)", "ChatGPT, Claude, Jasper", "60-70%", "Medium"],
                      ["Ad copy generation", "ChatGPT, Copy.ai", "50-60%", "Medium-High"],
                      ["Image/video creation", "Midjourney, DALL-E, Runway", "70-80%", "High"],
                      ["Email personalization", "Klaviyo AI, ActiveCampaign", "40-50%", "High"],
                      ["Campaign optimization", "Google AI, Meta Advantage+", "30-40%", "Very High"],
                      ["Analytics & reporting", "GA4 AI insights, Looker", "50-60%", "Medium"],
                      ["Customer service", "Chatbots, AI assistants", "60-70%", "Medium"],
                      ["SEO content optimization", "Surfer SEO, Clearscope", "40-50%", "High"],
                    ].map(([app, tools, time, impact], i) => (
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
                          {app}
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
                          {tools}
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
                          {time}
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
                          {impact}
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
                The biggest impact comes from{" "}
                <strong style={{ color: "#fff" }}>paid campaign optimization</strong> &mdash;
                Google and Meta algorithms have become extremely good at budget
                allocation. But the surprise comes from{" "}
                <strong style={{ color: "#fff" }}>visual creation</strong>: tools
                like Midjourney and Runway have reduced production time by
                70-80%.
              </p>
            </div>
          </FadeInSection>

          {/* Section: What works and what doesn't */}
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
                What works and what doesn&rsquo;t
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                We&rsquo;ve tested dozens of approaches with our clients.
                Here&rsquo;s what we&rsquo;ve seen work consistently &mdash; and
                what fails every time:
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
                    works: true,
                    title: "AI for first drafts, then human editing",
                    desc: "Generate a skeleton with ChatGPT or Claude, then adapt the brand tone, add expertise, and personalize the message. You save 60% of the time without sacrificing quality.",
                  },
                  {
                    works: false,
                    title: "Publishing raw AI content without editing",
                    desc: "Raw AI-generated content is generic, lacks personality, and sometimes contains inaccurate information. Google detects it, audiences sense it, and results suffer.",
                  },
                  {
                    works: true,
                    title: "AI for data analysis and pattern recognition",
                    desc: "AI excels at finding correlations in large data sets: which audience converts, at what time, on which device, with what message. Decisions based on these insights are significantly better.",
                  },
                  {
                    works: false,
                    title: "AI making strategic decisions without human oversight",
                    desc: "Algorithms optimize for metrics, not business objectives. Without human context, AI can optimize for cheap clicks that lead nowhere.",
                  },
                  {
                    works: true,
                    title: "AI for A/B test hypothesis generation",
                    desc: "Instead of thinking up variants yourself, let AI generate 20 headlines, 10 CTAs, 15 image variations. You choose what to test, but the portfolio of options is much larger.",
                  },
                  {
                    works: false,
                    title: "Relying on AI for creative strategy",
                    desc: "The creative work that resonates emotionally, that surprises, that stays in people's minds — still requires human intuition. AI is excellent at execution, not at vision.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: `1px solid ${item.works ? "rgba(86,219,132,0.15)" : "rgba(239,68,68,0.15)"}`,
                      borderRadius: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: item.works ? "#56db84" : "#ef4444",
                        marginBottom: "8px",
                        display: "block",
                      }}
                    >
                      {item.works ? "Works" : "Doesn't work"}
                    </span>
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

          {/* Section: 5 practical use cases */}
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
                5 practical use cases
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                These are the real cases where we&rsquo;ve seen the biggest
                impact of AI in marketing &mdash; not theory, but measurable
                results:
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
                    nr: "01",
                    title: "E-commerce product descriptions",
                    desc: "A client with 500 products needed unique, SEO-optimized descriptions. Manually: 2 months of work. With AI (Claude + human editing): 2 days. Each description was customized to the brand voice and optimized for relevant keywords.",
                  },
                  {
                    nr: "02",
                    title: "Ad creative variations",
                    desc: "Instead of 3-5 ad variants, we generated 50 variations in less than an hour: different headlines, messaging angles, CTAs. We tested all 50 and found winners we would have never discovered manually.",
                  },
                  {
                    nr: "03",
                    title: "Email subject line optimization",
                    desc: "AI suggests 15-20 subject line variations based on your historical data. You pick 4-5 for A/B testing. Open rates increased by 23% on average after implementation.",
                  },
                  {
                    nr: "04",
                    title: "Customer segmentation",
                    desc: "AI analyzes purchase behavior and finds patterns the human eye misses: customers who only buy on weekends, who return after 47 days, who respond to discounts but not free shipping.",
                  },
                  {
                    nr: "05",
                    title: "Predictive churn analysis",
                    desc: "AI models can predict with 80-85% accuracy which customers are about to leave. This means you can proactively intervene with personalized offers before it's too late.",
                  },
                ].map((item) => (
                  <div
                    key={item.nr}
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
                        fontWeight: 800,
                        color: "#ec4899",
                        marginBottom: "8px",
                        display: "block",
                      }}
                    >
                      {item.nr}
                    </span>
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

          {/* Section: Risks and limitations */}
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
                Risks and limitations
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                AI in marketing isn&rsquo;t perfect and it&rsquo;s not without
                risks. Here&rsquo;s what you need to know before implementing:
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
                  "Hallucinations — AI can generate false information presented with confidence. Every output must be verified by a human, especially in technical or regulated industries.",
                  "Brand voice inconsistency — without clear guidelines and well-written prompts, AI produces generic content that doesn't reflect your brand personality.",
                  "Copyright concerns — AI-generated content raises legal questions, especially for images. Make sure you have commercial usage rights.",
                  "Over-reliance — if your entire team relies on AI without understanding marketing fundamentals, you lose the ability to think strategically.",
                  "Data privacy — never input sensitive customer data into public AI tools. Use enterprise solutions with security guarantees.",
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
                    <span style={{ color: "#ef4444", flexShrink: 0 }}>
                      &#9888;
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
                None of these risks are reasons to avoid AI. They are reasons to
                implement it{" "}
                <strong style={{ color: "#fff" }}>thoughtfully</strong>, with
                clear processes and human oversight at every step.
              </p>
            </div>
          </FadeInSection>

          {/* Section: How to start */}
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
                How to start
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The biggest mistake we see companies make is trying to
                &ldquo;AI-ify&rdquo; everything at once. Instead, follow this
                4-step approach:
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
                    step: "Step 1",
                    title: "Pick one area",
                    desc: "Identify the marketing process that consumes the most time or has the highest improvement potential. Start there.",
                  },
                  {
                    step: "Step 2",
                    title: "Start small",
                    desc: "Don't buy enterprise tools from the start. Test with free versions or ChatGPT. Learn what works in your specific context.",
                  },
                  {
                    step: "Step 3",
                    title: "Measure results",
                    desc: "Compare metrics before and after AI implementation: time saved, output quality, impact on conversions. Without data, you don't know if it works.",
                  },
                  {
                    step: "Step 4",
                    title: "Scale what works",
                    desc: "Once you have clear proof that AI adds value in one area, expand to the next. But always keep the human component for verification and strategy.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#ec4899",
                        marginBottom: "8px",
                        display: "block",
                      }}
                    >
                      {item.step}
                    </span>
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
                Companies that adopted AI step by step achieved{" "}
                <strong style={{ color: "#fff" }}>2-3x better results</strong>{" "}
                than those that tried to implement everything at once. Patience
                and iteration are key.
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
                Integrate AI into your strategy
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
                You need a digital strategy that integrates AI where it matters.
                We help you identify opportunities, choose the right tools, and
                measure the results.
              </p>
              <Link href="/en/digital-strategy/" className="btn-primary">
                Get a digital strategy <ArrowRight size={16} />
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
                      color: "#14b8a6",
                    }}
                  >
                    SEO
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    GEO: How to Optimize Your Business for AI Search
                  </h3>
                  <Link
                    href="/en/blog/geo-optimization-ai-search/"
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
                      color: "#ec4899",
                    }}
                  >
                    Automation
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Email Marketing for E-commerce: How to Boost Sales
                  </h3>
                  <Link
                    href="/en/blog/email-marketing-ecommerce/"
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

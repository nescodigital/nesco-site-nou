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
                "radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)",
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
                background: "rgba(20,184,166,0.10)",
                color: "#14b8a6",
                border: "1px solid rgba(20,184,166,0.18)",
              }}
            >
              SEO
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              February 14, 2026 &middot; 8 min read
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
              How AI Overviews Affect{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #14b8a6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                SEO and What You Should Do
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
              Google AI Overviews are reshaping the SEO landscape.
              AI-generated summaries now appear above organic results,
              reducing clicks to websites &mdash; unless you adapt.
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
                Google AI Overviews (formerly known as Search Generative
                Experience or SGE) are fundamentally transforming how users
                interact with search results. AI-generated summaries now
                appear above traditional organic results for approximately
                30% of queries, providing direct answers without requiring
                users to click through to any website.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                What does this mean for your business? Fewer clicks, less
                organic traffic, and an urgent need to adapt your SEO
                strategy. In this article, we explain exactly what is
                happening, which query types are affected, and most
                importantly, what you can do to stay visible and relevant
                in this new search reality.
              </p>
            </div>
          </FadeInSection>

          {/* Section: What are AI Overviews */}
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
                What are AI Overviews?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                AI Overviews are answers automatically generated by Google
                using artificial intelligence, displayed in a dedicated block
                at the top of the search results page (SERP). Unlike
                traditional featured snippets that extract a single fragment
                from one source, AI Overviews synthesize information from
                multiple websites and present it in a conversational format.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In practice, users receive a comprehensive summary right on
                the search page &mdash; with links to the sources used, but
                in a format that significantly reduces the need to click
                through. The AI Overview block typically occupies the
                equivalent space of 3-5 traditional organic results, pushing
                classic results much further down the page.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google initially launched AI Overviews in the US in May 2024
                and has gradually expanded them to over 100 countries. The
                feature is also active in Europe, albeit with some
                limitations related to AI Act regulations. Whether you
                operate locally or internationally, AI Overviews are already
                affecting your search visibility.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Impact on organic traffic */}
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
                Impact on organic traffic
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Studies from 2025 show that AI Overviews reduce click-through
                rates (CTR) by{" "}
                <strong style={{ color: "#fff" }}>20-40%</strong> for
                informational queries. However, the impact is not uniform
                &mdash; it depends heavily on the query type. Transactional
                and local queries are far less affected, while &ldquo;what
                is...&rdquo; and &ldquo;how to...&rdquo; queries take the
                biggest hit.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Here is a detailed breakdown of the impact by query type:
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
                      {[
                        "Query Type",
                        "AI Overview Frequency",
                        "CTR Impact",
                      ].map((h) => (
                        <th
                          key={h}
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "2px solid #14b8a6",
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        'Informational ("what is...")',
                        "Very high (60%+)",
                        "-30% to -40%",
                      ],
                      [
                        'Commercial ("best X for...")',
                        "High (40%+)",
                        "-15% to -25%",
                      ],
                      [
                        'Transactional ("buy X")',
                        "Low (10%)",
                        "-5% to -10%",
                      ],
                      [
                        'Local ("X near me")',
                        "Medium (25%)",
                        "-10% to -15%",
                      ],
                      [
                        'Navigational ("brand name")',
                        "Very low (5%)",
                        "Minimal",
                      ],
                    ].map(([type, frequency, impact], i) => (
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
                          {type}
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
                          {frequency}
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
                The takeaway is clear: if your SEO strategy relies heavily on
                generic informational content, you are the most exposed. But
                if you focus on transactional, local, or branded queries, the
                impact is significantly smaller.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Winners and losers */}
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
                Winners and losers
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                AI Overviews do not hit everyone equally. There are clear
                winners and predictable losers in this new SEO reality.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    padding: "24px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(20,184,166,0.15)",
                    borderRadius: "16px",
                  }}
                >
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      color: "#14b8a6",
                    }}
                  >
                    Winners
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "High-authority sites with strong E-E-A-T signals",
                      "Niche experts with original content and unique data",
                      "Strong brands with frequent branded searches",
                      "Sites with interactive content (tools, calculators)",
                      "Local businesses with optimized Google Business profiles",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: "#14b8a6", flexShrink: 0 }}>
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{
                    padding: "24px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                  }}
                >
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    Losers
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "Sites with thin, superficial content",
                      "Information aggregators with no added value",
                      "Generic \"top 10\" articles without proprietary data",
                      "Sites that depend 100% on informational traffic",
                      "AI-generated content with no real expertise behind it",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: "rgba(255,255,255,0.25)",
                            flexShrink: 0,
                          }}
                        >
                          &#10007;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                The pattern is clear: Google favors sources in AI Overviews
                that demonstrate genuine expertise, first-hand experience,
                and domain authority. If you have original content backed by
                proprietary data, you are in a much stronger position than
                competitors recycling information already available online.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 6 adaptation strategies */}
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
                6 strategies to adapt to AI Overviews
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                AI Overviews are not a disaster &mdash; they are a shift
                that favors smart players. Here is what you can do right
                now:
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
                    title:
                      "1. Target queries where AI Overviews DON'T appear",
                    desc: "Focus on transactional, long-tail, and niche queries where Google still does not show AI Overviews. Queries containing \"buy\", \"pricing\", \"services\" and highly specific terms are far less affected. Audit your current keywords and identify which ones trigger AI Overviews and which do not.",
                  },
                  {
                    title:
                      "2. Create content too complex for AI to summarize",
                    desc: "Original research, proprietary data, detailed case studies, nuanced analysis, and expert opinions — these are the types of content that AI cannot compress into a simple summary. If your information requires context to be understood, users will click through to read the full article.",
                  },
                  {
                    title: "3. Build brand searches",
                    desc: "When people search directly for your brand name, AI cannot intercept that query. Invest in brand awareness through social media, PR, podcasts, and partnerships. A strong brand generates direct traffic that no AI Overview can steal.",
                  },
                  {
                    title:
                      "4. Optimize to BE the source AI cites",
                    desc: "If you cannot avoid AI Overviews, then make sure AI cites your site as a source. Structure content clearly with headings, concrete data, statistics, and authoritative information. Sites cited in AI Overviews still receive traffic — less than before, but higher quality traffic.",
                  },
                  {
                    title: "5. Diversify your traffic sources",
                    desc: "Do not depend 100% on Google. Build alternative channels: email marketing, organic social media, communities, YouTube, podcasts. Companies with diversified traffic are far more resilient to Google's algorithmic changes.",
                  },
                  {
                    title: "6. Focus on conversion optimization",
                    desc: "If you receive fewer visits from Google, make sure each visit counts more. Optimize conversion rates, improve UX, create dedicated landing pages, and A/B test every important element. Fewer visits with higher conversion can generate more revenue than high traffic with poor conversion.",
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

          {/* Section: What NOT to do */}
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
                What NOT to do
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Just as important as knowing what to do is knowing what{" "}
                <strong style={{ color: "#fff" }}>not</strong> to do. Here
                are the wrong reactions we frequently see from companies
                panicking over AI Overviews:
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
                  "Do not panic and abandon SEO. Organic search remains the largest traffic channel on the internet, even with AI Overviews. SEO is not dying — it is evolving.",
                  "Do not try to block AI crawlers (Googlebot, GPTBot). Blocking them will not protect you from AI Overviews and may actually reduce your visibility in traditional results.",
                  "Do not create thin AI-generated content to \"compete\" with AI. Google penalizes content with no added value, regardless of whether it was written by a human or AI. Quality beats quantity.",
                  "Do not ignore the problem hoping it will go away. AI Overviews are here to stay and will cover an increasingly larger percentage of queries. Proactive adaptation is the only viable strategy.",
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
                    <span
                      style={{ color: "#ef4444", flexShrink: 0 }}
                    >
                      &#10007;
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
                The companies that will thrive in the AI Overviews era are
                those that treat this change as an opportunity to
                differentiate through quality, expertise, and smart strategy
                &mdash; not those trying to fight the inevitable.
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
                Adapt your SEO strategy
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
                AI Overviews are changing the rules, but with the right
                strategy you can stay visible and relevant. Discover how
                GEO optimization helps you appear in AI-powered results.
              </p>
              <Link href="/en/geo-optimization/" className="btn-primary">
                Discover GEO Optimization <ArrowRight size={16} />
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
                    How to Appear in ChatGPT and Perplexity: Complete GEO
                    Guide
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
                    SEO vs. Google Ads: What to Choose on a Limited Budget?
                  </h3>
                  <Link
                    href="/en/blog/seo-vs-google-ads/"
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

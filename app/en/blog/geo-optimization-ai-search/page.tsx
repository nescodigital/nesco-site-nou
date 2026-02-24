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
              February 23, 2026 &middot; 11 min read
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
              How to Appear in ChatGPT and{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #14b8a6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Google AI Overviews (GEO)
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
              Generative Engine Optimization: the complete guide to being cited
              by ChatGPT, Google AI Overviews, Perplexity, and other AI engines
              in 2026.
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
                The way people search for information online is fundamentally
                changing. Instead of scanning 10 blue links on Google, more and
                more users are receiving direct answers from AI systems &mdash;
                whether it&apos;s ChatGPT, Google AI Overviews, Perplexity, or
                Bing Copilot. This shift isn&apos;t a future prediction: it&apos;s
                happening right now, in 2026.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                For businesses, the implication is clear: if your content
                isn&apos;t structured to be selected by AI models, you become
                invisible to a growing segment of potential customers. This is
                where <strong style={{ color: "#fff" }}>Generative Engine Optimization (GEO)</strong> comes
                in &mdash; the new discipline that complements traditional SEO
                with optimization specifically designed for generative engines.
              </p>
            </div>
          </FadeInSection>

          {/* Section: What is GEO? */}
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
                What is Generative Engine Optimization (GEO)?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                GEO is the process of optimizing digital content so that it gets
                selected, cited, and referenced by AI-powered search engines.
                Unlike traditional SEO, where the goal is to achieve the highest
                possible position in the SERP (Search Engine Results Page), in
                GEO the goal is to be the{" "}
                <strong style={{ color: "#fff" }}>source that the AI chooses</strong> when generating
                an answer.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                When a user asks ChatGPT &ldquo;what are the best digital
                marketing strategies in 2026?&rdquo;, the AI model doesn&apos;t
                display links &mdash; it synthesizes information from the sources
                it considers most relevant and trustworthy. If your website is
                one of those sources, your brand gains visibility, credibility,
                and ultimately traffic.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The fundamental difference: in traditional SEO, you compete for
                a <strong style={{ color: "#fff" }}>position</strong>. In GEO, you compete to be{" "}
                <strong style={{ color: "#fff" }}>selected as an authoritative source</strong>. This
                paradigm shift requires a different approach to content creation
                and structuring.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Why GEO matters */}
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
                Why does GEO matter in 2026?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The numbers speak for themselves. Adoption of AI search engines
                has exploded over the past two years, and the trend shows no
                signs of slowing down. Here&apos;s an overview of the platforms
                redefining how information reaches users:
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
                      {["Platform", "Monthly Users", "Search Share Impact"].map(
                        (h) => (
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
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Google AI Overviews",
                        "2B+ searches/day",
                        "~30% of queries",
                      ],
                      [
                        "ChatGPT",
                        "200M+ weekly",
                        "Growing rapidly",
                      ],
                      [
                        "Perplexity",
                        "15M+ monthly",
                        "Research queries",
                      ],
                      [
                        "Bing Copilot",
                        "100M+ monthly",
                        "Microsoft ecosystem",
                      ],
                    ].map(([platform, users, impact], i) => (
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
                          {platform}
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
                          {users}
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
                  marginBottom: "20px",
                }}
              >
                Google AI Overviews already appear in approximately{" "}
                <strong style={{ color: "#fff" }}>30% of Google searches</strong>, which means that
                for nearly a third of all queries, the user receives an
                AI-generated answer right on the results page without clicking
                on any website. If you&apos;re not the source cited in that
                answer, you&apos;ve lost that visitor.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                ChatGPT has surpassed{" "}
                <strong style={{ color: "#fff" }}>200 million weekly users</strong>, and many of them
                use it as their primary search tool, before Google. For
                businesses, this means there&apos;s a massive audience that will
                never see traditional SEO results &mdash; but who can discover
                your brand through AI-generated answers.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 7 GEO Strategies */}
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
                7 GEO strategies to get cited by AI
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                We&apos;ve identified 7 essential strategies that we implement
                at Nesco Digital for our clients, each with a direct impact on
                visibility in generative engines:
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
                    title: "1. Structure content with a clear Q&A format",
                    desc: "AI models prefer content that directly answers specific questions. Use headings in the form of questions (H2, H3) and provide concise answers in the first 2\u20133 sentences after each heading. This structure makes it easy for models to extract and cite your information.",
                  },
                  {
                    title: "2. Use authoritative data and cite sources",
                    desc: "AI prioritizes content that includes concrete statistics, cited studies, and verifiable data. Instead of generic claims like \u201Cdigital marketing is important,\u201D provide numbers: \u201Caccording to a 2025 HubSpot study, companies that invest in content marketing have a 67% higher conversion rate.\u201D",
                  },
                  {
                    title: "3. Write comprehensive, long-form content (2,000+ words)",
                    desc: "AI models need extensive context to understand and cite a source. Thin articles of 300\u2013500 words are rarely selected. Content of 2,000+ words that covers a topic in depth has significantly higher chances of being referenced.",
                  },
                  {
                    title: "4. Implement proper schema markup (FAQ, HowTo, Article)",
                    desc: "Structured schema markup helps AI engines understand the context of your content. Implement FAQPage for Q&A sections, HowTo for step-by-step guides, and Article schema for every blog post. These structured signals increase your chances of selection.",
                  },
                  {
                    title: "5. Build topical authority through content clusters",
                    desc: "Instead of writing isolated articles, build thematic clusters: one comprehensive pillar article linked to 5\u201310 supporting articles covering sub-topics. This content network signals to AI that you are an authority on that subject.",
                  },
                  {
                    title: "6. Optimize for entity recognition",
                    desc: "AI models work with entities (people, companies, concepts, locations). Use proper nouns, official names, and specific terms instead of vague phrasing. Instead of \u201Ca large tech company,\u201D write \u201CGoogle\u201D or \u201CMicrosoft.\u201D Be specific and clear.",
                  },
                  {
                    title: "7. Keep content fresh and regularly updated",
                    desc: "AI prefers recent sources. An article from 2022 that hasn\u2019t been updated will be deprioritized compared to one from 2026. Update your key articles at least quarterly with new data, refreshed statistics, and information relevant to the current year.",
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

          {/* Section: GEO vs SEO */}
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
                GEO vs. SEO: what are the differences?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                GEO doesn&apos;t replace SEO &mdash; it complements it. However,
                the approach differs fundamentally in several key ways. Here&apos;s
                a direct comparison:
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
                      {["Criteria", "Traditional SEO", "GEO"].map((h) => (
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
                        "Objective",
                        "SERP position (Top 1\u20133)",
                        "Being cited as a source in AI answers",
                      ],
                      [
                        "Primary focus",
                        "Keywords and search intent",
                        "Topical authority and accuracy",
                      ],
                      [
                        "Authority factor",
                        "Backlinks and Domain Authority",
                        "Brand mentions and online reputation",
                      ],
                      [
                        "Content format",
                        "Optimized for quick scanning",
                        "Comprehensive and Q&A-structured",
                      ],
                      [
                        "Success metrics",
                        "Position, CTR, organic traffic",
                        "AI citation frequency, brand visibility",
                      ],
                      [
                        "Time to results",
                        "3\u20136 months for visible results",
                        "Variable (depends on AI indexing)",
                      ],
                    ].map(([criteria, seo, geo], i) => (
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
                          {criteria}
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
                          {seo}
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
                          {geo}
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
                The most important takeaway: the optimal strategy in 2026
                combines both disciplines. SEO brings you organic traffic from
                traditional searches, while GEO makes you visible in AI-generated
                answers. Companies that neglect either one lose a significant
                portion of their potential audience.
              </p>
            </div>
          </FadeInSection>

          {/* Section: How to implement GEO */}
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
                How to implement GEO: a step-by-step guide
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Transitioning from traditional SEO to an integrated SEO + GEO
                strategy doesn&apos;t have to be complicated. Here are the steps
                we recommend to our clients:
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
                    title: "Step 1: Audit your existing content",
                    desc: "Analyze your highest-traffic pages and check whether they\u2019re structured for AI. Ask yourself: could an AI model extract a clear answer from this page? If not, flag it for optimization.",
                  },
                  {
                    title: "Step 2: Identify the key questions in your niche",
                    desc: "Use tools like AnswerThePublic, AlsoAsked, or Google\u2019s \u201CPeople Also Ask\u201D section to identify the questions your target audience is asking. These will become the headings of your GEO-optimized articles.",
                  },
                  {
                    title: "Step 3: Restructure content in Q&A format",
                    desc: "Transform existing articles: each section should start with a clear question (H2 or H3) followed by a concise answer in the first 2\u20133 sentences, then additional details. This structure is ideal for AI extraction.",
                  },
                  {
                    title: "Step 4: Add structured schema markup",
                    desc: "Implement FAQPage schema for Q&A sections, Article schema with author and datePublished, and HowTo schema where relevant. Test with Google\u2019s Rich Results Test to ensure correct implementation.",
                  },
                  {
                    title: "Step 5: Build authority clusters",
                    desc: "Group content by topic and create strong internal links. A pillar article of 3,000+ words on the main topic, linked to 5\u201310 supporting articles of 1,500\u20132,000 words on sub-topics. This structure signals expertise to AI.",
                  },
                  {
                    title: "Step 6: Monitor and continuously optimize",
                    desc: "Use tools like Semrush, Ahrefs, or specialized GEO platforms to monitor when and where you\u2019re being cited by AI. Update content quarterly with new data and optimize underperforming sections.",
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
                Implementing GEO isn&apos;t a one-time project &mdash; it&apos;s
                an ongoing process. AI algorithms evolve constantly, and your
                content needs to keep pace. Companies that start now will have a
                major competitive advantage over those that wait.
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
                Want to appear in AI results?
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
                Our GEO team helps you get cited by ChatGPT, Google AI
                Overviews, and Perplexity. We analyze your content, optimize it,
                and monitor the results.
              </p>
              <Link href="/en/geo-optimization/" className="btn-primary">
                Discover our GEO service <ArrowRight size={16} />
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
                    The Impact of AI Overviews on SEO: What You Need to Know
                  </h3>
                  <Link
                    href="/en/blog/ai-overviews-seo-impact/"
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
                    Local SEO and Google Maps: Complete Guide for Local
                    Businesses
                  </h3>
                  <Link
                    href="/en/blog/local-seo-google-maps/"
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

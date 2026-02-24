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
                "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
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
                background: "rgba(168,85,247,0.10)",
                color: "#a855f7",
                border: "1px solid rgba(168,85,247,0.18)",
              }}
            >
              Web Design
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              February 27, 2026 &middot; 10 min read
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
              Best Landing Page Builders for{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #a855f7 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Higher Conversions
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
              Dedicated landing pages convert 2-5x better than generic website
              pages. But which landing page builder is right for you? We
              compare the top 5 options with detailed pros, cons, and pricing.
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
                If you&apos;re running paid campaigns on Google Ads or Meta Ads
                and sending traffic to your homepage, you&apos;re leaving money
                on the table. Studies show that dedicated landing pages have
                conversion rates{" "}
                <strong style={{ color: "#fff" }}>
                  65% higher
                </strong>{" "}
                than generic website pages. The reason is straightforward: a
                landing page has one goal, zero distractions, and a clear call
                to action.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The challenge? Building a high-quality landing page requires
                either a web developer or a specialized tool. And if you want to
                A/B test multiple variants quickly, you need a dedicated
                builder. In this guide, we compare the 5 most popular landing
                page builders and help you choose the right one for your needs.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The average conversion rate for landing pages is approximately{" "}
                <strong style={{ color: "#fff" }}>9.7%</strong>, compared to
                just 2.35% for generic pages. The difference comes from focus:
                one offer, one message, one button.
              </p>
            </div>
          </FadeInSection>

          {/* Section: When You Need a Landing Page Builder */}
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
                When you need a landing page builder
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Not every business needs a dedicated tool. But if you find
                yourself in one of the scenarios below, a landing page builder
                will save you time and money:
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
                    title: "Your CMS isn't enough",
                    desc: "You have a website on WordPress, Shopify, or another CMS, but every layout change requires a developer. You need agility: the ability to create and publish new pages in hours, not weeks.",
                  },
                  {
                    title: "You run paid ad campaigns (Google Ads, Meta Ads)",
                    desc: "Every campaign should have a dedicated landing page. Sending paid traffic to your homepage means lower ROAS. A builder lets you quickly create pages specific to each audience and offer.",
                  },
                  {
                    title: "You want to A/B test rapidly",
                    desc: "Testing headlines, CTAs, and layouts is essential for CRO. A landing page builder with built-in A/B testing lets you launch new variants in minutes, not days.",
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

          {/* Section: Key Features to Evaluate */}
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
                Key features to evaluate
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Before choosing a landing page builder, make sure it offers
                these critical features:
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
                  "Drag-and-drop editor — no code, no developer, move and customize any visual element",
                  "Built-in A/B testing — test headline, CTA, image, and layout variants without external tools",
                  "Page speed / performance — pages must load under 3 seconds; every extra second drops conversions by 7%",
                  "Template library — conversion-optimized templates by industry, ready to customize",
                  "Integrations (CRM, email, analytics) — native connections with HubSpot, Mailchimp, Google Analytics, Meta Pixel, and more",
                  "Mobile responsiveness — every page must look perfect on mobile, tablet, and desktop",
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
                    <span style={{ color: "#a855f7", flexShrink: 0 }}>
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
                If a builder doesn&apos;t check at least 5 out of 6 criteria,
                look elsewhere. Compromises on these features will cost you
                conversions and time.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Comparison Table */}
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
                Quick comparison: Top 5 landing page builders
              </h2>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "700px",
                  }}
                >
                  <thead>
                    <tr>
                      {[
                        "Tool",
                        "Best For",
                        "Key Feature",
                        "Starting Price",
                        "A/B Testing?",
                      ].map((h) => (
                        <th
                          key={h}
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "2px solid #a855f7",
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
                        "Unbounce",
                        "AI-powered optimization",
                        "Smart Traffic (AI)",
                        "$99/mo",
                        "Yes",
                      ],
                      [
                        "Kartra",
                        "All-in-one platform",
                        "Funnels + email + pages",
                        "$119/mo",
                        "Yes",
                      ],
                      [
                        "Instapage",
                        "Enterprise teams",
                        "Real-time collaboration",
                        "$199/mo",
                        "Yes",
                      ],
                      [
                        "Leadpages",
                        "Small businesses",
                        "Most affordable",
                        "$49/mo",
                        "Yes",
                      ],
                      [
                        "Elementor",
                        "WordPress users",
                        "Maximum flexibility",
                        "$59/yr",
                        "With external plugin",
                      ],
                    ].map(([tool, bestFor, feature, price, ab], i) => (
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
                          {tool}
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
                          {feature}
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
                          {price}
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
                          {ab}
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
                Prices are approximate and may vary by plan and number of
                pages. Below, we analyze each tool in detail.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Detailed Reviews */}
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
                Detailed reviews
              </h2>

              {/* Unbounce (affiliate) */}
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  1. Unbounce &mdash; AI-Powered Landing Pages
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Unbounce is the pioneer of landing page builders and remains
                  one of the most powerful options on the market. Their standout
                  feature is{" "}
                  <strong style={{ color: "#fff" }}>Smart Traffic</strong>, an
                  AI algorithm that automatically routes each visitor to the
                  page variant most likely to convert. Instead of waiting weeks
                  for A/B test results, Smart Traffic starts optimizing from
                  the first 50 visits.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  The drag-and-drop editor is intuitive, the template library
                  is extensive, and integrations with Google Ads, Meta, HubSpot,
                  and Mailchimp are native. Pricing starts at $99/month,
                  placing it in the mid-to-premium range.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Best for:</strong>{" "}
                  marketers who want AI-based automatic optimization and who
                  drive high volumes of paid traffic.
                </p>
                <a
                  href="#AFFILIATE_UNBOUNCE"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(168,85,247,0.10)",
                    border: "1px solid rgba(168,85,247,0.18)",
                    borderRadius: "8px",
                    color: "#a855f7",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Try Unbounce <ArrowRight size={14} />
                </a>
              </div>

              {/* Kartra (affiliate) */}
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  2. Kartra &mdash; All-in-One Platform
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Kartra isn&apos;t just a landing page builder &mdash;
                  it&apos;s a complete platform that includes landing pages,
                  email marketing, sales funnels, membership sites, helpdesk,
                  and even video hosting. If you want to eliminate 5-6 separate
                  tools and have everything in one place, Kartra is the top
                  contender.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  The landing page builder within Kartra comes with
                  conversion-optimized templates, built-in A/B testing, and an
                  analytics system that shows you exactly which funnel steps
                  are losing visitors. Pricing starts at $119/month, but it
                  replaces multiple subscriptions.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Best for:</strong>{" "}
                  entrepreneurs and small businesses that want a single
                  platform for everything: pages, email, funnels, and
                  automations.
                </p>
                <a
                  href="#AFFILIATE_KARTRA"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(168,85,247,0.10)",
                    border: "1px solid rgba(168,85,247,0.18)",
                    borderRadius: "8px",
                    color: "#a855f7",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Try Kartra <ArrowRight size={14} />
                </a>
              </div>

              {/* Instapage (non-affiliate) */}
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  3. Instapage &mdash; Enterprise-Grade
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Instapage is the preferred solution for large marketing teams
                  that need real-time collaboration on landing pages. Multiple
                  team members can edit the same page simultaneously, leave
                  comments, and approve variants &mdash; similar to Figma, but
                  for landing pages.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Personalization features are advanced: you can display
                  different content based on traffic source, geographic
                  location, or device. A/B testing is robust, and heatmaps are
                  included. Pricing starts at $199/month, making it better
                  suited for companies with larger budgets.
                </p>
              </div>

              {/* Leadpages (non-affiliate) */}
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  4. Leadpages &mdash; Most Affordable
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  Leadpages is the ideal choice for small businesses and
                  freelancers who need professional landing pages without a
                  large budget. At $49/month, it offers a solid drag-and-drop
                  editor, over 200 templates, and integrations with the most
                  popular email marketing platforms.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  It doesn&apos;t have Unbounce&apos;s AI features or
                  Instapage&apos;s collaboration, but for those who want
                  simple, fast, and effective pages, Leadpages offers the best
                  value for money on the market. A/B testing is included on
                  the Pro plan.
                </p>
              </div>

              {/* Elementor (non-affiliate) */}
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  5. Elementor &mdash; WordPress Plugin
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  If you already have a WordPress site, Elementor may be the
                  most practical option. It&apos;s the most popular page builder
                  for WordPress, with over 15 million active installations. The
                  flexibility is unbeatable: you can build any layout
                  imaginable, from simple landing pages to complex pages with
                  animations and advanced interactions.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  The downside: it requires WordPress (it&apos;s not a
                  standalone platform), and A/B testing needs an additional
                  plugin. At $59/year it&apos;s by far the cheapest option,
                  but you need to add the cost of WordPress hosting.
                </p>
              </div>
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
                Explore our CRO solutions
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
                It&apos;s not just the tool that matters, but the strategy
                behind it. Our CRO team helps you create landing pages that
                convert, test variants, and optimize every element for maximum
                results.
              </p>
              <Link href="/en/cro-solutions/" className="btn-primary">
                Explore CRO solutions <ArrowRight size={16} />
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
                      color: "#f59e0b",
                    }}
                  >
                    E-commerce
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Conversion Rate: What It Is, How to Calculate It, How to
                    Improve It
                  </h3>
                  <Link
                    href="/en/blog/conversion-rate-guide/"
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
                      color: "#a855f7",
                    }}
                  >
                    Web Design
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    How Much Does a Website Cost in 2026
                  </h3>
                  <Link
                    href="/en/blog/how-much-does-a-website-cost/"
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

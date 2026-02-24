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
                background: "rgba(86,219,132,0.10)",
                color: "#56db84",
                border: "1px solid rgba(86,219,132,0.18)",
              }}
            >
              Paid Ads
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              January 30, 2026 &middot; 11 min read
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
              Performance Max 2026:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Complete Guide for Online Stores
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
              Step-by-step setup, common mistakes, PMax vs Shopping vs Search
              &mdash; everything about Google&apos;s most powerful campaign type
              for e-commerce.
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
                Performance Max is Google&apos;s most powerful &mdash; and most
                complex &mdash; campaign type. It uses Google&apos;s AI to
                distribute ads across all available surfaces: Search, Shopping,
                Display, YouTube, Gmail, Maps, and Discover.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                For online stores, Performance Max has become essential. It
                combines the power of Google Shopping with the reach of YouTube
                and Display, all within a single automated campaign. But
                &ldquo;automated&rdquo; does not mean &ldquo;simple&rdquo;
                &mdash; it requires strategic configuration to generate a
                positive ROAS.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In this guide, we explain everything you need to know: how it
                works, how to set it up correctly, what mistakes to avoid, and
                when it makes sense to use it instead of standard campaigns.
              </p>
            </div>
          </FadeInSection>

          {/* Section: What is Performance Max */}
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
                What is Performance Max?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Performance Max (PMax) is a Google Ads campaign type that runs
                across <strong style={{ color: "#fff" }}>all Google channels</strong> from a single
                campaign. Instead of creating separate Search, Shopping, Display,
                and YouTube campaigns, PMax unifies them all under one
                AI-controlled umbrella.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google&apos;s algorithm automatically manages <strong style={{ color: "#fff" }}>bidding, targeting,
                and placements</strong>. You provide: creative assets (text, images,
                video), the product feed from Merchant Center, a budget, and
                your conversion objective. Google decides where, when, and to
                whom your ads appear.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                PMax requires <strong style={{ color: "#fff" }}>asset groups</strong> &mdash; collections of
                creative elements including headlines, descriptions, images,
                logos, and videos. Each asset group can be targeted toward a
                specific product category with its own audience signals.
              </p>
            </div>
          </FadeInSection>

          {/* Section: How it works for e-commerce */}
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
                How PMax works for e-commerce
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                For online stores, the <strong style={{ color: "#fff" }}>product feed from Google Merchant
                Center</strong> is the centerpiece. Google&apos;s algorithm analyzes
                every product in your feed &mdash; title, description, price,
                images, availability &mdash; and automatically matches it with
                relevant searches and audiences.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                You provide four essential elements: <strong style={{ color: "#fff" }}>products</strong> (through
                the feed), <strong style={{ color: "#fff" }}>creative assets</strong> (text, images, video),{" "}
                <strong style={{ color: "#fff" }}>budget</strong>, and <strong style={{ color: "#fff" }}>goals</strong> (for
                example, purchases with a target ROAS of 400%).
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Google takes control of: <strong style={{ color: "#fff" }}>targeting</strong> (who sees
                your ad), <strong style={{ color: "#fff" }}>bidding</strong> (how much you pay per
                click/conversion), and <strong style={{ color: "#fff" }}>placements</strong> (which channels
                your ads appear on). The algorithm dynamically allocates budget
                toward the combinations that generate the best ROAS.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Correct setup step by step */}
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
                Correct setup step by step
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                A poorly configured Performance Max campaign can burn budget
                without results. Follow these 8 steps for optimal setup:
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
                    step: "1",
                    title: "Optimize your Google Merchant Center feed",
                    desc: "Titles should contain the primary keyword + brand + key attribute. Detailed descriptions, high-quality images, and complete GTIN codes are essential for the algorithm to match products correctly.",
                  },
                  {
                    step: "2",
                    title: "Set up conversion tracking",
                    desc: "Track all valuable actions: purchase (primary), add to cart and begin checkout (secondary). Without accurate conversion data, the algorithm cannot optimize.",
                  },
                  {
                    step: "3",
                    title: "Create campaign with \"Sales\" objective",
                    desc: "Select \"Sales\" as the primary objective and connect your Merchant Center feed. Choose \"Performance Max\" as the campaign type.",
                  },
                  {
                    step: "4",
                    title: "Set target ROAS (start with 300%)",
                    desc: "A target ROAS of 300% means for every \u20AC1 invested, you expect \u20AC3 in revenue. Start conservatively and adjust after 2\u20134 weeks of real data.",
                  },
                  {
                    step: "5",
                    title: "Create asset groups by product category",
                    desc: "Don\u2019t put all products in one asset group. Segment by categories (e.g., men\u2019s shoes, women\u2019s shoes, accessories) with creative assets and audience signals specific to each category.",
                  },
                  {
                    step: "6",
                    title: "Add audience signals",
                    desc: "Upload existing customer lists, add website visitors (remarketing), and select relevant in-market segments. Signals help the algorithm learn faster who to show your ads to.",
                  },
                  {
                    step: "7",
                    title: "Budget: minimum \u20AC50/day",
                    desc: "The algorithm needs enough data to optimize. With a budget below \u20AC50/day, the learning phase extends and performance remains sub-optimal. Ideal: \u20AC80\u2013150/day.",
                  },
                  {
                    step: "8",
                    title: "Wait 2\u20134 weeks (learning phase)",
                    desc: "Do not change settings during the first 2\u20134 weeks. The algorithm tests combinations of creatives, audiences, and placements. Premature changes reset the learning process.",
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "rgba(86,219,132,0.12)",
                          color: "#56db84",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {item.step}
                      </span>
                      <h3
                        className="font-bold text-white"
                        style={{
                          fontSize: "1rem",
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                        paddingLeft: "40px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Section: 5 common mistakes */}
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
                5 common Performance Max mistakes
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Most underperforming PMax campaigns have one of these
                fundamental issues:
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
                    title: "1. Poor product feed",
                    desc: "Generic titles, missing GTINs, low-quality images, or incomplete descriptions. The feed is the engine of every e-commerce PMax campaign \u2014 if it\u2019s weak, the entire campaign suffers. Invest time in optimizing titles with relevant keywords and professional images.",
                  },
                  {
                    title: "2. One asset group for everything",
                    desc: "If you put 500 products in a single asset group, the algorithm cannot personalize the message. Segment by category \u2014 each category deserves its own creative assets and audience signals.",
                  },
                  {
                    title: "3. Budget too low",
                    desc: "With \u20AC10/day, the algorithm doesn\u2019t have enough data to learn. The learning phase stretches indefinitely and performance stays poor. Minimum \u20AC50/day, ideally \u20AC80+/day.",
                  },
                  {
                    title: "4. No audience signals",
                    desc: "Audience signals are not optional \u2014 they are essential hints that help the algorithm understand faster who to show your ads to. Without them, the learning phase takes much longer and costs more.",
                  },
                  {
                    title: "5. Changing settings during learning phase",
                    desc: "Changing the budget, target ROAS, or assets during the first 2\u20134 weeks resets the learning process. Be patient and let the algorithm gather data before making adjustments.",
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

          {/* Section: PMax vs Standard Shopping vs Search */}
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
                PMax vs. Standard Shopping vs. Search
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Each campaign type has different strengths. Here is a direct
                comparison:
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
                      {["Feature", "Performance Max", "Standard Shopping", "Search"].map(
                        (h) => (
                          <th
                            key={h}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #56db84",
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
                      ["Channels", "All Google surfaces", "Shopping only", "Search only"],
                      ["Control", "Low (AI-driven)", "Medium", "High"],
                      ["Setup", "Medium", "Medium", "Simple"],
                      ["Best for", "Scaling", "Product-specific", "High intent"],
                      ["ROAS potential", "High", "Medium-High", "High"],
                      ["Transparency", "Low", "Medium", "High"],
                    ].map(([feature, pmax, shopping, search], i) => (
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
                          {pmax}
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
                          {shopping}
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
                          {search}
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
                Our recommendation: use <strong style={{ color: "#fff" }}>PMax as your primary campaign</strong> for
                scaling, complemented by Search campaigns on keywords with the
                highest purchase intent. Standard Shopping remains useful for
                products where you need granular control over bids.
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
                Optimize your Google campaigns
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
                We set up and optimize Performance Max campaigns that generate
                real sales. Free analysis of your Google Ads account within 48
                hours.
              </p>
              <Link href="/en/google-en/" className="btn-primary">
                Discover Google Ads <ArrowRight size={16} />
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
                      color: "#56db84",
                    }}
                  >
                    Paid Ads
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    How Much Does Google Ads Cost?
                  </h3>
                  <Link
                    href="/en/blog/how-much-does-google-ads-cost/"
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
                    How to Increase Online Store Sales
                  </h3>
                  <Link
                    href="/en/blog/increase-online-store-sales/"
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

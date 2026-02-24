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
              February 16, 2026 &middot; 11 min read
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
              Facebook Ads vs Google Ads: Which to Choose for{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Online Store?
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
              Two platforms, two completely different approaches. A full
              comparison with CPCs, ROAS, formats, and the optimal strategy
              that combines them both.
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
                &ldquo;Should we go with Facebook Ads or Google Ads?&rdquo;
                &mdash; it is the eternal debate for every online store. Both
                platforms can generate serious revenue, but they work in
                fundamentally different ways. One brings you customers who did
                not even know you existed. The other catches them at the exact
                moment they are searching for what you sell.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The right answer is not &ldquo;one or the other&rdquo; &mdash;
                it is knowing{" "}
                <strong style={{ color: "#fff" }}>when to use
                each</strong>. In this guide, we compare the two platforms
                head-to-head, with real numbers from the campaigns we manage
                daily for online stores across Europe.
              </p>
            </div>
          </FadeInSection>

          {/* Section: How each works */}
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
                How each platform works
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The fundamental difference is simple:{" "}
                <strong style={{ color: "#fff" }}>Facebook Ads is
                interruption marketing (push)</strong>, while{" "}
                <strong style={{ color: "#fff" }}>Google Ads is intent
                marketing (pull)</strong>.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Facebook (Meta) shows ads to people who{" "}
                <strong style={{ color: "#fff" }}>might be
                interested</strong> in your product &mdash; based on
                demographics, interests, behavior, and lookalike audiences.
                The user is not actively searching for your product, but the
                ad &ldquo;interrupts&rdquo; them while they scroll through
                their feed.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google Ads, on the other hand, shows ads to people who are{" "}
                <strong style={{ color: "#fff" }}>actively
                searching</strong> for what you sell. When someone types
                &ldquo;buy men&apos;s running shoes&rdquo; into Google, the
                purchase intent is already there. You pay to appear at that
                exact moment.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                This difference changes everything: from the creative
                message, to the budget, to the type of products that perform
                best on each platform.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Head-to-head comparison */}
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
                Head-to-head comparison: Facebook Ads vs Google Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                We put the two platforms side by side on the most important
                criteria for e-commerce:
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
                      {["Criterion", "Facebook Ads", "Google Ads"].map(
                        (header) => (
                          <th
                            key={header}
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
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Targeting",
                        "Demographics, interests, behaviors, lookalikes",
                        "Keywords, search intent, remarketing",
                      ],
                      [
                        "Best for",
                        "Discovery, new products, brand awareness",
                        "High-intent buyers, specific searches",
                      ],
                      [
                        "Avg CPC (e-commerce)",
                        "\u20AC0.30 \u2013 \u20AC1.50",
                        "\u20AC0.50 \u2013 \u20AC3.00",
                      ],
                      ["Avg ROAS", "3-5x", "4-8x"],
                      [
                        "Creative format",
                        "Visual-first (video, carousel, UGC)",
                        "Text ads, Shopping, video",
                      ],
                      [
                        "Learning curve",
                        "Medium",
                        "Medium-High",
                      ],
                      [
                        "Best funnel stage",
                        "Top & middle funnel",
                        "Middle & bottom funnel",
                      ],
                      [
                        "Scaling",
                        "Easy but diminishing returns",
                        "Keyword-limited but high intent",
                      ],
                    ].map(([criterion, fb, google], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom:
                              "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {criterion}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom:
                              "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {fb}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom:
                              "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {google}
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
                Notice: Google Ads has a higher average ROAS, but also a
                higher CPC. Facebook Ads is cheaper per click, but requires
                more creative work to convert a user who is not actively
                searching for your product.
              </p>
            </div>
          </FadeInSection>

          {/* Section: When to choose Facebook Ads */}
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
                When to choose Facebook Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Facebook Ads (Meta Ads) excels when you need to{" "}
                <strong style={{ color: "#fff" }}>create demand</strong>,
                not just capture it. It is the ideal platform in these
                scenarios:
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
                    title: "New or unknown product",
                    desc: "Nobody searches on Google for a product they do not know exists. Facebook lets you show it to the right audience and generate interest from scratch. Ideal for launches, innovative products, or emerging niches.",
                  },
                  {
                    title: "Visual products (fashion, home, beauty)",
                    desc: "If your product looks great in images and video, Facebook is your playground. Carousel, Reels, and UGC formats work exceptionally well for products where aesthetics matter.",
                  },
                  {
                    title: "Low price points, impulse buys (under \u20AC50)",
                    desc: "Low-priced products convert well on Facebook because the purchase decision is fast. The user sees the ad, likes the product, and buys in 2\u20133 clicks without extensive comparison.",
                  },
                  {
                    title: "Building email lists",
                    desc: "Facebook lead ads are extremely effective for collecting email addresses. Once you have the list, you can run email marketing with high ROI without depending on ad platforms.",
                  },
                  {
                    title: "Retargeting website visitors",
                    desc: "The Facebook Pixel lets you retarget visitors who viewed products but did not purchase. With custom audiences and dynamic product ads, you can recover up to 20\u201330% of abandoned carts.",
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

          {/* Section: When to choose Google Ads */}
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
                When to choose Google Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google Ads excels when you need to{" "}
                <strong style={{ color: "#fff" }}>capture existing
                demand</strong>. People are already searching for what you
                sell &mdash; you just need to show up in front of them:
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
                    title: "High search volume for your products",
                    desc: "If people are actively searching \u201Cbuy [your product]\u201D on Google, you already have validated demand. Google Ads puts you in front of them at the exact moment of maximum purchase intent.",
                  },
                  {
                    title: "Higher price points (considered purchases)",
                    desc: "For products above \u20AC100\u2013200, customers compare before they buy. Google Shopping and Search Ads position you during this comparison phase, when intent is high and the decision is nearly made.",
                  },
                  {
                    title: "Service-based e-commerce",
                    desc: "If you sell services online (courses, consulting, software), Google Ads works excellently. People search for solutions to specific problems, and you provide the answer.",
                  },
                  {
                    title: "Google Shopping for product catalogs",
                    desc: "If you have a catalog of hundreds or thousands of products, Google Shopping (Performance Max) automatically displays the relevant products based on user searches. It is the most scalable solution for large-catalog e-commerce.",
                  },
                  {
                    title: "Competitor targeting",
                    desc: "You can bid on competitor brand names and attract their customers at the exact moment they search for them. An aggressive strategy, but effective when you have a superior product or better pricing.",
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

          {/* Section: The optimal strategy */}
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
                The optimal strategy: use both
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The most profitable online stores we manage do not choose
                between Facebook and Google &mdash; they use them{" "}
                <strong style={{ color: "#fff" }}>together,
                strategically</strong>. Each platform covers a different stage
                of the sales funnel:
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
                  The complete Facebook + Google funnel:
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
                    [
                      "1. Top of Funnel (Awareness)",
                      "Facebook Ads \u2014 video, carousel, UGC for cold audiences",
                    ],
                    [
                      "2. Middle of Funnel (Consideration)",
                      "Google Search + Shopping for product queries",
                    ],
                    [
                      "3. Bottom of Funnel (Conversion)",
                      "Google Brand Search + Shopping with purchase intent",
                    ],
                    [
                      "4. Recovery",
                      "Facebook Retargeting + Google Remarketing for abandoned carts",
                    ],
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
                        flexWrap: "wrap",
                        gap: "8px",
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
                <strong style={{ color: "#fff" }}>How to split the
                budget?</strong> For most online stores, we recommend a{" "}
                <strong style={{ color: "#fff" }}>60% Google / 40%
                Facebook</strong> split if you already have search demand for
                your products. If you are launching a new product or are in an
                emerging niche, flip it:{" "}
                <strong style={{ color: "#fff" }}>60% Facebook / 40%
                Google</strong>.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The key is to measure{" "}
                <strong style={{ color: "#fff" }}>combined ROAS</strong>,
                not each platform in isolation. Facebook often generates the
                first brand interaction, and Google closes the sale. If you
                evaluate Facebook solely on direct conversions, you will
                underestimate the real impact it has.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Use a multi-touch attribution model (or at least first-click
                vs. last-click) to understand each platform&apos;s true
                contribution. Tools like Google Analytics 4 and Meta
                Attribution help you see the full picture.
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
                Optimize your campaigns
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
                We manage Facebook Ads and Google Ads campaigns for online
                stores with proven ROAS. Find out how we can scale your
                store&apos;s sales.
              </p>
              <Link href="/en/paid-ads/" className="btn-primary">
                Discover Paid Ads services <ArrowRight size={16} />
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
                    How Much Does Google Ads Cost? Real Budgets and Results
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
                    Retargeting and Remarketing: Complete Guide for E-commerce
                  </h3>
                  <Link
                    href="/en/blog/retargeting-remarketing-guide/"
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

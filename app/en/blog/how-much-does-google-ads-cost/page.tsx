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
              February 21, 2026 &middot; 9 min read
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
              How Much Does Google Ads Cost?{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Budget Guide 2026
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
              Average CPC by industry, recommended budgets by campaign type,
              ROI calculations &mdash; everything you need to plan your Google
              Ads investment in one updated guide.
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
                Google Ads is the fastest way to appear on the first page of
                Google &mdash; but how much should you actually budget? The
                answer depends on your industry, competition level, and the
                type of campaign you choose.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In this guide we break down the real costs of Google Ads in
                2026 &mdash; from average cost-per-click benchmarks by
                industry to minimum recommended budgets and the ROI formulas
                we use daily for our clients.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Costs vary significantly &mdash; an e-commerce campaign might
                cost under &euro;0.50 per click, while a single click on a
                legal keyword can reach &euro;5 or more. The difference lies
                in the strategy behind each campaign.
              </p>
            </div>
          </FadeInSection>

          {/* Section: How Google Ads pricing works */}
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
                How Google Ads pricing works
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google Ads operates on a <strong style={{ color: "#fff" }}>real-time auction model</strong>.
                Every time someone searches for a keyword you&apos;re targeting,
                Google runs an instant auction among all advertisers bidding
                on that term.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The cost-per-click (CPC) you pay depends not only on how much
                you bid, but also on your <strong style={{ color: "#fff" }}>Quality Score</strong> &mdash;
                a rating from 1 to 10 that Google assigns to each keyword
                based on ad relevance, landing page experience, and expected
                click-through rate.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The simplified formula is: <strong style={{ color: "#fff" }}>Ad Rank = Max CPC &times; Quality Score</strong>.
                This means an advertiser with a Quality Score of 9 and a bid
                of &euro;0.60 can outrank someone bidding &euro;1.20 with a
                Quality Score of 4.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In Search campaigns, you pay <strong style={{ color: "#fff" }}>per click</strong> &mdash;
                not per impression. If your ad shows 1,000 times but nobody
                clicks, you pay nothing. The exception is Display and YouTube
                campaigns, where you can also pay per 1,000 impressions (CPM).
              </p>
            </div>
          </FadeInSection>

          {/* Section: Average CPC by industry */}
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
                Average CPC by industry in Europe
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                The data below reflects average CPCs we observe across client
                accounts and Google Ads benchmarks in European markets in 2026.
                Ranges vary based on seasonality, location, and campaign quality.
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
                      {["Industry", "Avg CPC (EUR)", "Competition"].map(
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
                      ["E-commerce (general)", "0.40 – 1.20", "Medium"],
                      ["Real estate", "0.80 – 2.50", "High"],
                      ["Legal services", "1.50 – 5.00", "Very high"],
                      ["Medical / dental", "1.00 – 3.50", "High"],
                      ["B2B services", "0.80 – 3.00", "Medium-High"],
                      ["Education", "0.50 – 1.80", "Medium"],
                      ["Tourism / travel", "0.60 – 2.00", "Medium"],
                      ["Beauty / wellness", "0.40 – 1.50", "Medium"],
                    ].map(([industry, eur, comp], i) => (
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
                          {industry}
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
                          {eur}
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
                          {comp}
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
                Note that legal and medical services have the highest CPCs
                &mdash; competition is fierce and the lifetime value of a new
                client justifies the investment. In contrast, general
                e-commerce benefits from accessible CPCs, making it ideal for
                testing with smaller budgets.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Recommended budgets by campaign type */}
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
                Recommended budgets by campaign type
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                There is no universal budget &mdash; each campaign type has a
                minimum threshold below which you won&apos;t collect enough data
                to optimise. Here are our recommendations based on hundreds of
                managed campaigns:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    type: "Search Ads",
                    budget: "min. &euro;500/month",
                    note: "Ideal for testing. &euro;1,000+/month for scaling on competitive keywords.",
                  },
                  {
                    type: "Shopping Ads",
                    budget: "min. &euro;700/month",
                    note: "Essential for e-commerce. Requires an optimised product feed and healthy margins.",
                  },
                  {
                    type: "Display Ads",
                    budget: "min. &euro;350/month",
                    note: "Brand awareness and remarketing. Low CPCs but indirect conversions.",
                  },
                  {
                    type: "Performance Max",
                    budget: "min. &euro;1,000/month",
                    note: "Automated cross-channel campaign. Needs high data volume to perform well.",
                  },
                  {
                    type: "YouTube Ads",
                    budget: "min. &euro;500/month",
                    note: "Video ads with massive reach. Cost per view (CPV) between &euro;0.01 – &euro;0.04.",
                  },
                ].map((item) => (
                  <div
                    key={item.type}
                    style={{
                      padding: "20px 24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      <span
                        className="font-bold"
                        style={{ color: "#fff", fontSize: "1rem" }}
                      >
                        {item.type}
                      </span>
                      <span
                        style={{
                          color: "#56db84",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.budget }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                      dangerouslySetInnerHTML={{ __html: item.note }}
                    />
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
                These budgets are recommended minimums for gathering
                statistically relevant data. A smaller budget means fewer
                clicks, fewer conversions, and decisions based on noise rather
                than real data.
              </p>
            </div>
          </FadeInSection>

          {/* Section: How to calculate ROI */}
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
                How to calculate your Google Ads ROI
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cost per click means nothing without context. What truly
                matters is your <strong style={{ color: "#fff" }}>cost per acquisition (CPA)</strong> and <strong style={{ color: "#fff" }}>return on ad spend (ROAS)</strong>.
                Here is the formula we use:
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
                  ROI calculation example:
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
                    ["Average CPC", "\u20AC0.60"],
                    ["Conversion rate", "3%"],
                    ["Average order value", "\u20AC60"],
                    ["Clicks needed per conversion", "33 clicks"],
                    ["Cost per acquisition (CPA)", "\u20AC20"],
                    ["Revenue per acquisition", "\u20AC60"],
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
                      color: "#56db84",
                      paddingTop: "6px",
                    }}
                  >
                    <span>ROAS</span>
                    <span>3:1</span>
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
                A ROAS of 3:1 means that for every euro invested in Google Ads,
                you generate 3 euros in revenue. Generally, a minimum ROAS
                of <strong style={{ color: "#fff" }}>2:1</strong> is considered profitable for
                e-commerce, while for services (where margins are higher) even
                a 1.5:1 ROAS can be excellent.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 5 mistakes that increase costs */}
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
                5 mistakes that increase your Google Ads costs
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Most wasted Google Ads budgets are not the platform&apos;s
                fault &mdash; they are the result of configuration mistakes.
                Here are the 5 most common errors we see:
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
                    title: "1. Overly broad keywords (Broad Match without control)",
                    desc: "Using Broad Match without Smart Bidding strategies or negative keywords means Google will show your ad for irrelevant searches. We have seen clients paying for completely unrelated queries \u2014 wasting 30\u201350% of their budget.",
                  },
                  {
                    title: "2. Missing negative keywords",
                    desc: "Negative keywords are just as important as positive ones. Without them, you pay for clicks from people searching for free information, jobs in your industry, or entirely different products.",
                  },
                  {
                    title: "3. Poor landing pages",
                    desc: "Google penalises ads that lead to slow, irrelevant, or poorly designed pages. A low Quality Score means higher CPC and lower positions \u2014 you pay more for less.",
                  },
                  {
                    title: "4. No conversion tracking configured",
                    desc: "Without tracking, Google\u2019s algorithm doesn\u2019t know what a valuable customer looks like. It\u2019s like driving blindfolded \u2014 you cannot optimise what you do not measure.",
                  },
                  {
                    title: "5. Ignoring Quality Score",
                    desc: "A Quality Score of 3 instead of 7 can double your cost per click. Improving ad relevance, landing page quality, and CTR can reduce costs by 30\u201350% without changing your budget.",
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
                Fixing these 5 mistakes can reduce costs by <strong style={{ color: "#fff" }}>30&ndash;60%</strong> and
                increase conversions without raising your budget. It is the
                first action we take when we take over an existing Google Ads
                account.
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
                Want a personalized estimate?
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
                We analyse your industry, competition, and growth potential
                through Google Ads for free. You receive a custom budget and
                results projection within 48 hours.
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
                    Facebook Ads vs. Google Ads for E-commerce
                  </h3>
                  <Link
                    href="/en/blog/facebook-ads-vs-google-ads-ecommerce/"
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
                    Performance Max for E-commerce: Complete Guide
                  </h3>
                  <Link
                    href="/en/blog/performance-max-ecommerce/"
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

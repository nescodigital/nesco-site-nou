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
                background: "rgba(245,158,11,0.10)",
                color: "#f59e0b",
                border: "1px solid rgba(245,158,11,0.18)",
              }}
            >
              E-commerce
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              February 19, 2026 &middot; 9 min read
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
              Why Customers Abandon Their Cart{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #f59e0b 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                (And How to Fix It)
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
              70% of shopping carts are abandoned before checkout. Learn why it
              happens and the 8 proven strategies to recover your lost revenue.
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
                The scenario is simple and painful: a customer lands on your
                site, browses products, adds items to their cart, reaches
                checkout &mdash; and then vanishes. No order, no payment, no
                explanation. If you run an online store, you know exactly what
                we are talking about.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Statistically, the{" "}
                <strong style={{ color: "#fff" }}>average cart
                abandonment rate is 70&ndash;73%</strong>. That means for every
                &euro;100 in products added to carts, over &euro;70 is never
                purchased. This is both a massive problem and a massive
                opportunity. Every percentage point you recover translates into
                additional revenue without spending a single extra euro on
                traffic acquisition.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In this article, we will show you exactly why customers abandon
                their carts, what the rates look like across industries, and
                &mdash; most importantly &mdash; the{" "}
                <strong style={{ color: "#fff" }}>8 concrete
                strategies</strong> you can use to recover a significant portion
                of those lost sales.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Why customers abandon */}
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
                Why customers abandon their cart
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Before you can fix the problem, you need to understand the
                causes. Recent studies show that the main reasons are
                surprisingly predictable &mdash; and largely fixable:
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
                  Top reasons for cart abandonment:
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
                    ["Unexpected shipping costs", "48%"],
                    ["Required account creation", "26%"],
                    ["Complex checkout process", "22%"],
                    ["Security concerns", "18%"],
                    ["Slow site / loading times", "17%"],
                    ["Hidden fees or taxes", "16%"],
                    ["No guest checkout option", "14%"],
                    ["Limited payment methods", "12%"],
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
                        style={{ color: "#f59e0b", fontWeight: 600 }}
                      >
                        {value}
                      </span>
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
                Notice that nearly{" "}
                <strong style={{ color: "#fff" }}>half of all
                abandonments</strong> are caused by unexpected shipping costs.
                Price transparency is the very first step toward recovery.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Abandonment rate by industry */}
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
                Cart abandonment rate by industry
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Abandonment rates vary significantly from one industry to
                another. Here is what the average numbers look like:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "440px",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          background: "#111",
                          color: "#fff",
                          padding: "14px 18px",
                          borderBottom: "2px solid #f59e0b",
                          textAlign: "left",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        Industry
                      </th>
                      <th
                        style={{
                          background: "#111",
                          color: "#fff",
                          padding: "14px 18px",
                          borderBottom: "2px solid #f59e0b",
                          textAlign: "left",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        Avg. Abandonment Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Fashion / Apparel", "68%"],
                      ["Electronics", "74%"],
                      ["Home / Furniture", "73%"],
                      ["Beauty / Cosmetics", "65%"],
                      ["Food / Grocery", "61%"],
                      ["Travel", "82%"],
                      ["Auto Parts", "78%"],
                    ].map(([industry, rate], i) => (
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
                          {rate}
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
                The travel industry leads by a wide margin with an{" "}
                <strong style={{ color: "#fff" }}>82% abandonment
                rate</strong>, followed by auto parts (78%) and electronics
                (74%). If you operate in one of these niches, recovery
                strategies are not optional &mdash; they are mandatory.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 8 recovery strategies */}
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
                8 proven recovery strategies
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Each strategy below has been tested and validated on real online
                stores. These are not theories &mdash; they are actions you can
                implement starting today:
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
                    title: "1. Exit-intent popups with a discount",
                    desc: "Detect the moment a user is about to leave the page and display a popup with a limited offer (5-10% discount, free shipping). The average conversion rate of exit-intent popups is 2-4%, meaning recovered sales at zero acquisition cost.",
                  },
                  {
                    title: "2. Recovery email flow (3-email sequence)",
                    desc: "The most powerful recovery tool. Automatically send a sequence of 3 personalized emails after cart abandonment. First email at 1 hour, second at 24 hours, third at 72 hours. Average recovery rate: 5-15% of abandoned carts.",
                  },
                  {
                    title: "3. SMS recovery within 1 hour",
                    desc: "SMS has an open rate above 90% and works exceptionally well within the first hour after abandonment. A short message with a direct link to the saved cart can recover 2-5% of abandonments, especially on mobile.",
                  },
                  {
                    title: "4. Retargeting ads on Meta & Google",
                    desc: "Display personalized ads featuring the abandoned products on Facebook, Instagram, and Google Display. Retargeting delivers 3-5x ROI compared to standard campaigns because you are targeting an audience that has already demonstrated purchase intent.",
                  },
                  {
                    title: "5. Simplify the checkout process",
                    desc: "Reducing form fields from 12 to 6-7 can increase conversion rates by 20-30%. Eliminate unnecessary steps, enable guest checkout, auto-fill addresses, and provide a visual progress bar.",
                  },
                  {
                    title: "6. Add trust signals",
                    desc: "Customer reviews, return guarantees, security badges (SSL, secure payment), and delivery partner logos. These elements reduce purchase anxiety and can increase conversion rates by 15-25%.",
                  },
                  {
                    title: "7. Free shipping thresholds",
                    desc: "If your average cart value is \u20ac150, offer free shipping at \u20ac200. This strategy not only reduces abandonment but also increases average order value. The message 'Add \u20ac50 more for free shipping' is extremely effective.",
                  },
                  {
                    title: "8. Multiple payment options",
                    desc: "Credit/debit cards, PayPal, cash on delivery, buy-now-pay-later installments, and digital wallets. The more payment methods you offer, the more barriers you remove. In many European markets, alternative payment methods account for 30-40% of online orders.",
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

          {/* Section: Recovery email flow */}
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
                The recovery email sequence &mdash; step by step
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Recovery email is the most effective channel for re-engaging
                customers who abandoned their cart. Here is the optimal 3-email
                sequence with recommended timing and content:
              </p>

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
                  style={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  Email 1 &mdash; 1 hour after abandonment
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Tone:</strong> Friendly
                  reminder. <strong style={{ color: "#fff" }}>Content:</strong>{" "}
                  Show the cart items with images and prices, a prominent
                  &ldquo;Complete your order&rdquo; button, and information
                  about the return policy. No discount yet &mdash; many
                  customers abandoned for logistical reasons, not price.
                </p>
              </div>
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
                  style={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  Email 2 &mdash; 24 hours later
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Tone:</strong> Social proof
                  and urgency. <strong style={{ color: "#fff" }}>Content:</strong>{" "}
                  Product reviews from other customers, how many people recently
                  purchased the same item, limited stock warnings (if genuine).
                  Add a message like &ldquo;Your cart is about to expire&rdquo;
                  to create urgency.
                </p>
              </div>
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
                    marginBottom: "8px",
                  }}
                >
                  Email 3 &mdash; 72 hours later
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>Tone:</strong> Last chance
                  with incentive. <strong style={{ color: "#fff" }}>Content:</strong>{" "}
                  Offer a 5-10% discount or free shipping, valid for 24 hours.
                  This is the email that converts price-sensitive customers who
                  did not respond to the first two messages.
                </p>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                The average recovery rate of a well-optimized sequence is{" "}
                <strong style={{ color: "#fff" }}>5&ndash;15% of abandoned
                carts</strong>. With 1,000 abandoned carts per month, that
                could mean 50&ndash;150 recovered orders &mdash; without any
                additional ad spend.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Impact calculation */}
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
                Calculating the financial impact
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Let us put the numbers in a concrete context. Assume your store
                has the following metrics:
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
                    gap: "10px",
                  }}
                >
                  {[
                    ["Abandoned carts / month", "1,000"],
                    ["Average cart value", "\u20ac100"],
                    ["Lost revenue per month", "\u20ac100,000"],
                    ["Recovery rate (10%)", "100 orders"],
                    ["Recovered revenue", "\u20ac10,000 / month"],
                    ["Recovered revenue annually", "\u20ac120,000 / year"],
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
                      color: "#f59e0b",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Total impact (at 15% recovery)</span>
                    <span>&euro;180,000 / year</span>
                  </li>
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
                Even with a conservative 10% recovery rate,{" "}
                <strong style={{ color: "#fff" }}>&euro;10,000 per month
                in additional revenue</strong> can completely transform the
                profitability of an online store. And this revenue comes
                with virtually zero acquisition cost &mdash; these customers
                were already on your site.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                The best-performing online stores invest heavily in checkout
                funnel optimization and recovery strategies. It is not about
                driving more traffic &mdash; it is about converting the traffic
                you already have. Here is the truth few will tell you:{" "}
                <strong style={{ color: "#fff" }}>the cheapest sale is the
                one you recover</strong>.
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
                Recover your lost sales
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
                We analyze your checkout funnel for free and show you exactly
                where you are losing customers. We implement recovery strategies
                tested across dozens of online stores.
              </p>
              <Link href="/en/cro-solutions/" className="btn-primary">
                Get a free analysis <ArrowRight size={16} />
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
                    Complete Guide: E-commerce Conversion Rate
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
                    How to Increase Sales in Your Online Store
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

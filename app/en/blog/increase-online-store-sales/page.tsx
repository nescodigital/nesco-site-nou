import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function IncreaseOnlineStoreSalesPage() {
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
                "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div className="relative page-container" style={{ maxWidth: "820px" }}>
            <span className="badge mb-6">Blog</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
                marginTop: "8px",
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
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                February 8, 2026 · 13 min read
              </span>
            </div>
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
                maxWidth: "700px",
              }}
            >
              15 Proven Strategies to Increase{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #f59e0b 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Online Store Sales
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "580px",
              }}
            >
              Growing an online store is not about one magic trick &mdash; it is
              about stacking multiple small improvements that compound into
              massive results. Here are 15 strategies we have tested across
              dozens of e-commerce clients.
            </p>
          </div>
        </section>

        {/* ── Article Content ── */}
        <section
          className="page-container"
          style={{ maxWidth: "720px", paddingBottom: "80px" }}
        >
          {/* Intro */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "16px",
                }}
              >
                The best-performing online stores we manage do not rely on a single
                channel or one viral moment. They grow consistently because they
                optimize across three axes simultaneously: acquisition, conversion,
                and retention. Neglect one, and the other two cannot compensate.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In this guide, we have compiled 15 strategies we have applied and
                validated across our e-commerce clients &mdash; from early-stage
                brands to stores generating millions in monthly revenue. Each
                strategy comes with an effort level and estimated impact, so you
                know where to start.
              </p>
            </div>
          </FadeInSection>

          {/* ── ACQUISITION (1-5) ── */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Acquisition: Bring More Qualified Buyers
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Without relevant traffic, no store can grow. But not all traffic is
              equal &mdash; what matters is attracting people with purchase intent.
              These are the most effective acquisition channels:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "48px",
              }}
            >
              {[
                {
                  num: "1",
                  title: "Google Shopping ads with optimized product feed",
                  desc: "Google Shopping is the highest-intent acquisition channel in e-commerce. Users searching for a specific product who see the price, image, and rating directly in search results are ready to buy. The key is a flawless product feed: keyword-rich titles, complete descriptions, high-quality images, and real-time price updates. An optimized feed can reduce CPC by 20-30% and increase CTR by 40% or more.",
                },
                {
                  num: "2",
                  title: "Meta dynamic product ads with retargeting",
                  desc: "Dynamic product ads on Meta (Facebook and Instagram) show each user the exact products they viewed on your site. It is the simplest way to recover visitors who left without purchasing. Set up retargeting audiences at 7, 14, and 30 days with different messaging (reminder, offer, social proof). Average ROAS on retargeting campaigns runs between 5-10x.",
                },
                {
                  num: "3",
                  title: "SEO for product and category pages",
                  desc: "Optimizing category and product pages for search drives high-intent organic traffic at zero cost per click. Focus on keyword-rich H1 titles, persuasive meta descriptions, unique content on each category page (minimum 300 words), product schema markup (price, availability, reviews), and clean, descriptive URLs. This channel compounds over time and reduces dependence on paid ads.",
                },
                {
                  num: "4",
                  title: "Influencer and UGC partnerships",
                  desc: "User-generated content and micro-influencer partnerships (5k-50k followers) provide authentic social proof at much lower costs than studio productions. An unboxing video or genuine review converts 3-5x better than a polished studio ad. Negotiate commission-based deals to minimize upfront risk while aligning incentives with actual sales performance.",
                },
                {
                  num: "5",
                  title: "Email list building with lead magnets (10% discount popup)",
                  desc: "A well-designed popup offering 10% off the first order sounds simple, but it works. Average conversion rate for an optimized popup is 3-5% of all visitors. If you get 10,000 monthly visitors, that means 300-500 new email subscribers every month. These subscribers have a 3-5x higher lifetime value than anonymous visitors because you can re-engage them at zero marginal cost.",
                },
              ].map((item) => (
                <div
                  key={item.num}
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
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#f59e0b",
                        background: "rgba(245,158,11,0.10)",
                        borderRadius: "8px",
                        padding: "4px 10px",
                      }}
                    >
                      #{item.num}
                    </span>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", margin: 0 }}
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
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* ── CONVERSION (6-10) ── */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Conversion: Turn Visitors Into Buyers
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              The most expensive traffic in the world is worthless if your site does
              not convert. Average e-commerce conversion rate is 2-3%, but
              optimized stores consistently reach 4-6%. Here is how:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "48px",
              }}
            >
              {[
                {
                  num: "6",
                  title: "Optimize product pages (better photos, videos, descriptions)",
                  desc: "The product page is where the buying decision happens. Invest in professional photography from multiple angles, product video (increases conversions by 20-40%), benefit-driven descriptions rather than spec-only copy, clear shipping and return information, and a CTA button visible without scrolling. Every element on the page should answer one question: Why should I buy from you?",
                },
                {
                  num: "7",
                  title: "Add social proof (reviews, ratings, UGC photos)",
                  desc: "92% of consumers read reviews before purchasing. Display star ratings directly beneath the product title, allow customers to upload photos of received products, and show the number of units sold or satisfied customers. A product with 5+ reviews has a 270% higher conversion rate than one with zero reviews. Social proof eliminates hesitation and builds trust at the moment of decision.",
                },
                {
                  num: "8",
                  title: "Simplify checkout (3-step max, guest checkout)",
                  desc: "Every additional step in checkout loses 10-15% of buyers. Offer guest checkout (never force account creation), limit the form to essential fields, display a clear progress bar (Step 1 of 3), provide multiple payment methods (card, PayPal, buy-now-pay-later), and keep shipping costs visible from the cart &mdash; no surprise fees at the final step. Reducing checkout friction is often the highest-ROI optimization you can make.",
                },
                {
                  num: "9",
                  title: "Free shipping threshold (set 20% above average order value)",
                  desc: "Free shipping is the most powerful conversion incentive in e-commerce. Set the threshold 20% above your average order value (AOV). If your AOV is $50, set free shipping at $60. Display a progress bar in the cart: You are $10 away from free shipping. This strategy increases AOV by 10-15% on average and simultaneously reduces cart abandonment rates.",
                },
                {
                  num: "10",
                  title: "Urgency and scarcity (limited stock, countdown for sales)",
                  desc: "Psychological urgency works when it is authentic. Show real stock levels when inventory is below 10 units (Only 3 left in stock!), add a countdown timer for promotions with genuine expiry dates, and display how many people are viewing the product in real time. Never fabricate false urgency &mdash; customers detect it and you lose trust, which costs more than any short-term conversion lift.",
                },
              ].map((item) => (
                <div
                  key={item.num}
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
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#f59e0b",
                        background: "rgba(245,158,11,0.10)",
                        borderRadius: "8px",
                        padding: "4px 10px",
                      }}
                    >
                      #{item.num}
                    </span>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", margin: 0 }}
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
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* ── RETENTION (11-15) ── */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Retention: Maximize Customer Lifetime Value
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Acquiring a new customer costs 5-7x more than retaining an existing
              one. Stores with just 5% higher retention generate 25-95% more
              profit. Retention is where real profitability is built:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "48px",
              }}
            >
              {[
                {
                  num: "11",
                  title: "Post-purchase email flow (thank you, review request, cross-sell)",
                  desc: "After every order, trigger an automated sequence: order confirmation and thank you (immediately), product usage tips (day 3), review request with direct link (day 7-10), complementary product cross-sell recommendations (day 14), and a repurchase offer if the product is consumable (day 30). This single flow can generate 15-25% of total email revenue.",
                },
                {
                  num: "12",
                  title: "Loyalty and rewards program",
                  desc: "A points-based or tiered program (Bronze, Silver, Gold) increases purchase frequency by 20-30%. Award points for every order, review, referral, and social media share. Customers enrolled in loyalty programs have a 3-5x higher lifetime value than regular customers and become your most powerful brand ambassadors organically.",
                },
                {
                  num: "13",
                  title: "Win-back campaigns for inactive customers",
                  desc: "Customers who have not purchased in 60-90 days are not lost &mdash; they are dormant. Send a win-back flow with: a reconnection email (We miss you), an email showcasing best-selling new products, and an exclusive offer with a deadline (10% off, valid 48 hours). Average recovery rate is 5-10% of inactive customers, which represents essentially free revenue from an already-acquired audience.",
                },
                {
                  num: "14",
                  title: "Subscription and auto-replenish for consumable products",
                  desc: "If you sell consumable products (supplements, cosmetics, coffee, pet food), offer a subscription option with a 10-15% discount. The subscription model increases revenue predictability, reduces long-term acquisition cost to near zero, and dramatically increases each customer's lifetime value. Subscription customers have 3-4x higher retention than one-time buyers.",
                },
                {
                  num: "15",
                  title: "Personalized product recommendations",
                  desc: "Personalized recommendations (Customers who bought X also bought Y) generate an average of 10-30% of total online store revenue. Implement them on product pages, in the cart, in post-purchase emails, and on the homepage. Recommendation algorithms increase AOV, conversion rate, and customer satisfaction simultaneously &mdash; making them one of the highest-leverage investments in e-commerce.",
                },
              ].map((item) => (
                <div
                  key={item.num}
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
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#f59e0b",
                        background: "rgba(245,158,11,0.10)",
                        borderRadius: "8px",
                        padding: "4px 10px",
                      }}
                    >
                      #{item.num}
                    </span>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", margin: 0 }}
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
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* ── Estimated Impact Table ── */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Estimated impact per strategy
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Not all strategies have the same effort-to-impact ratio. Here is a
              quick overview to help you prioritize:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "48px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9375rem",
                  minWidth: "540px",
                }}
              >
                <thead>
                  <tr style={{ background: "#111" }}>
                    {["Strategy", "Effort", "Expected Impact", "Timeline"].map(
                      (header) => (
                        <th
                          key={header}
                          style={{
                            textAlign: "left",
                            padding: "14px 16px",
                            color: "#fff",
                            fontWeight: 700,
                            borderBottom: "2px solid #f59e0b",
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
                    ["Google Shopping", "Medium", "+20-40% revenue", "1-2 months"],
                    ["Meta retargeting", "Low", "+10-20% revenue", "2-4 weeks"],
                    [
                      "Product page optimization",
                      "Medium",
                      "+15-30% conversion",
                      "2-4 weeks",
                    ],
                    ["Email flows", "Medium", "+15-25% revenue", "1-2 months"],
                    [
                      "Free shipping threshold",
                      "Low",
                      "+10-15% AOV",
                      "Immediate",
                    ],
                  ].map(([strategy, effort, impact, timeline], i) => (
                    <tr key={i} style={{ background: "#0a0a0a" }}>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "#fff",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          fontWeight: 600,
                        }}
                      >
                        {strategy}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.5)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {effort}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "#f59e0b",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          fontWeight: 600,
                        }}
                      >
                        {impact}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.5)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {timeline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* ── CTA Box ── */}
          <FadeInSection>
            <div
              style={{
                marginTop: "64px",
                padding: "40px",
                background: "#0a0a0a",
                border: "1px solid rgba(86,219,132,0.2)",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <h3
                className="font-black text-white"
                style={{
                  fontSize: "1.375rem",
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Grow your store&apos;s revenue
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                  maxWidth: "480px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                We implement the right strategies for your online store &mdash;
                from Google Shopping and Meta Ads to email flows and conversion
                optimization.
              </p>
              <Link
                href="/en/e-commerce-stores/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                See e-commerce solutions
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>

          {/* ── Related Articles ── */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "80px",
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
                  Why Customers Abandon Their Cart (and How to Fix It)
                </h3>
                <Link
                  href="/en/blog/cart-abandonment-fix/"
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
                  Email Marketing for E-commerce: The Complete Guide
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
          </FadeInSection>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}

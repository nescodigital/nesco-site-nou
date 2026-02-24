import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#ec4899";

export default function EmailMarketingEcommercePage() {
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
                "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div className="relative page-container" style={{ maxWidth: "820px" }}>
            <span
              className="badge mb-6"
              style={{
                background: "rgba(236,72,153,0.10)",
                color: "#ec4899",
                border: "1px solid rgba(236,72,153,0.18)",
              }}
            >
              Automation
            </span>
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
                  color: CATEGORY_COLOR,
                }}
              >
                Automation
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                February 5, 2026 · 11 min read
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
              Email Marketing for Ecommerce: How to Boost{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sales with Newsletters
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
              The 7 emails every online store must send, proper list
              segmentation, and the tools that make it all run on autopilot.
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
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              The highest-ROI channel you are probably neglecting
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Email marketing generates between <strong style={{ color: "#fff" }}>$36 and $42 for every $1 spent</strong> &mdash;
              the highest return on investment of any digital channel. For e-commerce businesses, email is not optional. It
              is the backbone of customer relationships and the most predictable source of recurring revenue.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              Yet most online stores only send the occasional newsletter and leave money on the table. No automated flows,
              no segmentation, no post-purchase sequences. The result? A list that goes cold, declining open rates, and
              zero revenue from email. This guide shows you exactly which emails to send, how to segment your list, and
              which tools to use to turn email marketing into an automated revenue machine.
            </p>
          </FadeInSection>

          {/* Section: The 7 essential emails */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              The 7 essential emails every e-commerce store needs
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "24px" }}>
              Each of these flows runs automatically, 24/7, generating revenue without manual intervention. If you do not
              have them set up, you are losing money every single day.
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
                  title: "1. Welcome Series (3 emails)",
                  desc: "First email: your brand story and values. Second: bestsellers and top-rated products. Third: a first-purchase incentive (10-15% discount, free shipping). This flow has a 50%+ open rate and roughly 10% conversion rate — by far the highest-performing flow you can set up.",
                },
                {
                  title: "2. Abandoned Cart (3 emails)",
                  desc: "First email at 1 hour after abandonment: a simple reminder with the cart items. Second at 24 hours: add social proof (reviews, customer count). Third at 48-72 hours: offer an urgency discount. This flow recovers 5-15% of abandoned carts — money that would otherwise be completely lost.",
                },
                {
                  title: "3. Post-Purchase (3 emails)",
                  desc: "First email: thank you plus order confirmation with shipping details. Second at 3-5 days after delivery: product usage guide or care instructions. Third at 7-10 days: review request. This flow builds loyalty and increases the repeat purchase rate by 20-30%.",
                },
                {
                  title: "4. Browse Abandonment",
                  desc: "\"You viewed X, still interested?\" — triggered 1 hour after a visitor browses a product page without adding to cart. Include the product image, price, and a direct CTA. Conversion rate: 2-5%, but the volume can be significant on high-traffic stores.",
                },
                {
                  title: "5. Win-Back (2 emails)",
                  desc: "For customers inactive for 60-90 days. First email: \"We miss you\" with personalized recommendations based on past purchases. Second email: an exclusive incentive (discount, gift, free shipping). Reactivating even 5-10% of inactive customers can have a major revenue impact.",
                },
                {
                  title: "6. Birthday / Anniversary",
                  desc: "A personalized email on the customer's birthday or the anniversary of their first purchase, paired with an exclusive offer (special discount, gift). Converts at 2-3x the rate of regular emails thanks to the emotional component and the sense of exclusivity.",
                },
                {
                  title: "7. Re-engagement",
                  desc: "For subscribers who have not opened any email in 90+ days. The goal is twofold: either reactivate them or clean them from your list. A clean list means better deliverability and lower costs. Send an email with a direct subject line (\"Do you still want to hear from us?\") and a single clear CTA.",
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
          </FadeInSection>

          {/* Section: Segmentation */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              Segmentation: send the right message to the right person
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "24px" }}>
              A generic email blasted to your entire list has minimal impact. Segmentation means dividing your list into
              groups based on behavior and value, then sending relevant messages to each segment. Here are the essential
              segments every e-commerce store should have:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "24px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9375rem",
                }}
              >
                <thead>
                  <tr style={{ background: "#111" }}>
                    {["Segment", "Criteria", "Strategy"].map((h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: "left",
                          padding: "14px 16px",
                          color: "#fff",
                          fontWeight: 700,
                          borderBottom: `2px solid ${CATEGORY_COLOR}`,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["VIP Customers", "Top 10% by revenue", "Exclusive access, early sales"],
                    ["New Customers", "First purchase < 30 days", "Education, cross-sell"],
                    ["At-Risk", "No purchase in 60+ days", "Win-back offers"],
                    ["High AOV", "Above average order value", "Premium product recommendations"],
                    ["Frequent Buyers", "3+ purchases", "Loyalty rewards"],
                    ["Cart Abandoners", "Added to cart, didn't buy", "Recovery sequence"],
                  ].map(([segment, criteria, strategy], i) => (
                    <tr key={i} style={{ background: "#0a0a0a" }}>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.7)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          fontWeight: 600,
                        }}
                      >
                        {segment}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.5)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {criteria}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.5)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {strategy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Segmented emails generate <strong style={{ color: "#fff" }}>760% more revenue</strong> than
              emails sent to the entire list. This is not optional — it is the difference between email marketing
              that works and email marketing that gets ignored.
            </p>
          </FadeInSection>

          {/* Section: A/B Testing */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              Email A/B testing: what to test and why
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
              Every email you send is an opportunity to learn what resonates with your audience. A/B testing means sending
              two variants of the same email to equal segments and measuring which performs better. Here is what to test:
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
                "Subject lines — subject line tests alone can improve open rates by 20-30%. Test length, emotion, urgency vs. curiosity, emojis vs. no emojis.",
                "Send time — morning vs. evening, weekday vs. weekend. This varies by industry and audience.",
                "CTA button — color, text (\"Buy now\" vs. \"See the offer\"), position in the email, size.",
                "Email length — short and direct vs. detailed with storytelling. Depends on product type and segment.",
                "Personalization — with customer name vs. without, behavior-based recommendations vs. generic picks.",
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
                  <span style={{ color: "#ec4899", flexShrink: 0 }}>
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Golden rule: test <strong style={{ color: "#fff" }}>one element at a time</strong>. If you change
              the subject line and the CTA simultaneously, you will not know what made the difference. Run each
              test on at least 1,000 subscribers for statistically significant results.
            </p>
          </FadeInSection>

          {/* Section: Recommended Tools */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              Recommended tools for e-commerce email marketing
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "24px" }}>
              Not all email marketing platforms are created equal. For e-commerce, you need native integrations with your
              store platform, advanced automated flows, and behavior-based segmentation.
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
                  title: "Klaviyo",
                  desc: "The best tool for e-commerce, period. Native integration with Shopify, WooCommerce, and Magento. Advanced segmentation based on purchase behavior, predictive analytics, pre-built flows for every scenario. Pricing starts at $20/month for up to 500 contacts.",
                },
                {
                  title: "Mailchimp",
                  desc: "The most popular and accessible option. Good for small stores just starting with email marketing. Free plan up to 500 contacts. Limitations: advanced segmentation and automated flows are only available on paid plans ($13+/month).",
                },
                {
                  title: "ActiveCampaign",
                  desc: "Excellent for complex automations and integrated CRM. Ideal if you have a longer sales cycle or also sell B2B. Starts at $29/month. The automation builder is the most powerful on the market, but it has a steeper learning curve.",
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
          </FadeInSection>

          {/* Section: Key Metrics */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              Key metrics you need to track
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "24px" }}>
              You cannot improve what you do not measure. Here are the essential metrics and their e-commerce benchmarks:
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
                  ["Open Rate", "Benchmark: 20-25%"],
                  ["Click Rate (CTR)", "Benchmark: 2-5%"],
                  ["Conversion Rate", "Benchmark: 1-3%"],
                  ["Revenue per Email", "Varies by industry, track the trend"],
                  ["List Growth Rate", "Target: 2-5% per month"],
                  ["Unsubscribe Rate", "Below 0.5% per send"],
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
                    <span style={{ color: "#fff", fontWeight: 600 }}>
                      {label}
                    </span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              The most important metric is <strong style={{ color: "#fff" }}>revenue per email</strong> — how
              much revenue each sent email generates. If this number grows month over month, your strategy is working.
              The other metrics are leading indicators that help you understand why it is or is not working.
            </p>
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
                Automate your email marketing
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
                Set up automated flows that generate revenue 24/7.
                We handle strategy, setup, and continuous optimization.
              </p>
              <Link
                href="/en/email-marketing-solutions/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Explore email marketing solutions
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
                  Why Customers Abandon Their Cart (And How to Fix It)
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
                  How to Increase Online Store Sales in 2026
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
          </FadeInSection>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}

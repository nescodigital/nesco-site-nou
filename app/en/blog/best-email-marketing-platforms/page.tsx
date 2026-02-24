import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#ec4899";

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
                "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
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
              February 24, 2026 &middot; 12 min read
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
              Best Email Marketing Platforms{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                in 2026
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
              An honest comparison of the most popular email marketing platforms:
              features, pricing, strengths and weaknesses &mdash; so you can pick
              the right tool for your business.
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
                Email marketing remains the digital channel with the highest ROI &mdash;
                between <strong style={{ color: "#fff" }}>$36 and $42 for every dollar spent</strong>,
                according to DMA and Litmus studies from 2025. But that ROI doesn&rsquo;t
                happen by itself. It comes from the platform you choose, how you configure
                it, and how well it fits your business needs.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In 2026, the email marketing landscape is more competitive than ever.
                There are dozens of platforms, each with different strengths and
                weaknesses. Some excel at complex automations, others at ease of use,
                and others at value for money. We analyzed the six most relevant platforms
                and compared them on concrete criteria: features, pricing, scalability,
                and who they are best suited for.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Whether you&rsquo;re an online store just getting started, an agency
                managing multiple clients, or a B2B business with long sales cycles,
                this guide will help you make an informed decision.
              </p>
            </div>
          </FadeInSection>

          {/* Comparison Table */}
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
                Quick comparison: all 6 platforms
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Before diving into the details, here&rsquo;s a bird&rsquo;s-eye view
                to help you quickly compare what each platform offers:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "640px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Platform", "Best For", "Key Feature", "Starting Price", "Free Plan?"].map((h) => (
                        <th
                          key={h}
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: `2px solid ${CATEGORY_COLOR}`,
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
                      ["ActiveCampaign", "Complex automations + CRM", "Visual automation builder", "From $29/mo", "No (14-day trial)"],
                      ["Brevo", "Value for money", "Email + SMS + WhatsApp", "Free / $25/mo", "Yes (300 emails/day)"],
                      ["Sender", "Low budget / beginners", "Simple UI + automations", "Free / $15/mo", "Yes (15,000 emails/mo)"],
                      ["Kit (ConvertKit)", "Content creators", "Landing pages + sequences", "Free / $25/mo", "Yes (10,000 subscribers)"],
                      ["Mailchimp", "Small-medium brands", "Templates + integrations", "Free / $13/mo", "Yes (500 contacts)"],
                      ["Klaviyo", "Advanced e-commerce", "Behavioral segmentation", "Free / $20/mo", "Yes (250 contacts)"],
                    ].map(([platform, bestFor, feature, price, free], i) => (
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
                          {free}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeInSection>

          {/* Detailed Reviews */}
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
                Detailed review: each platform
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                We tested each platform and evaluated it based on features, ease of use,
                customer support, and value for money. Here&rsquo;s what we found:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {/* ActiveCampaign */}
                <div
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
                    <a
                      href="#AFFILIATE_ACTIVECAMPAIGN"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      ActiveCampaign
                    </a>
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    ActiveCampaign is the clear leader when it comes to complex automations.
                    Its visual automation builder lets you create flows with branches,
                    conditions, and multiple actions &mdash; things most competing platforms
                    simply cannot match at the same level. It also includes a built-in CRM,
                    making it ideal for sales teams that want to combine email marketing with
                    their sales pipeline. Pricing starts at $29/month and scales up as your
                    list grows, which makes it pricier than alternatives for small teams. The
                    learning curve is steeper, but once you master the platform, the
                    possibilities are nearly limitless. Best suited for B2B businesses, SaaS
                    companies, and teams that need sophisticated automations combined with CRM.
                  </p>
                  <a
                    href="#AFFILIATE_ACTIVECAMPAIGN"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "12px",
                      padding: "8px 16px",
                      background: "rgba(236,72,153,0.10)",
                      border: "1px solid rgba(236,72,153,0.18)",
                      borderRadius: "8px",
                      color: "#ec4899",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Try ActiveCampaign <ArrowRight size={14} />
                  </a>
                </div>

                {/* Brevo */}
                <div
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
                    <a
                      href="#AFFILIATE_BREVO"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Brevo
                    </a>{" "}
                    (formerly Sendinblue)
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Brevo has evolved from a simple email tool into a full marketing
                    platform that includes email, SMS, WhatsApp, and live chat. Its pricing
                    model differs from most competitors: you pay per number of emails sent,
                    not per number of contacts, which makes it extremely cost-effective for
                    companies with large lists but lower sending frequency. The free plan
                    includes 300 emails per day. On the automation side, Brevo covers the
                    most common scenarios but does not reach ActiveCampaign&rsquo;s level
                    of complexity. The interface is clean and intuitive. Best suited for
                    small and medium businesses that want an all-in-one tool without paying
                    separately for SMS and email.
                  </p>
                  <a
                    href="#AFFILIATE_BREVO"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "12px",
                      padding: "8px 16px",
                      background: "rgba(236,72,153,0.10)",
                      border: "1px solid rgba(236,72,153,0.18)",
                      borderRadius: "8px",
                      color: "#ec4899",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Try Brevo <ArrowRight size={14} />
                  </a>
                </div>

                {/* Sender */}
                <div
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
                    <a
                      href="#AFFILIATE_SENDER"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Sender
                    </a>
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Sender is one of the most underrated email marketing platforms out
                    there. The free plan offers up to 2,500 subscribers and 15,000 emails
                    per month &mdash; significantly more generous than Mailchimp or Brevo.
                    The interface is straightforward and no-nonsense. It includes basic
                    automations (welcome series, abandoned cart), popup forms, and
                    integrations with the major e-commerce platforms. On the downside, it
                    lacks advanced segmentation features and detailed reporting, and the
                    email templates are fewer and simpler than the competition. Best suited
                    for startups, freelancers, and small businesses that want a functional
                    tool without significant costs.
                  </p>
                  <a
                    href="#AFFILIATE_SENDER"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "12px",
                      padding: "8px 16px",
                      background: "rgba(236,72,153,0.10)",
                      border: "1px solid rgba(236,72,153,0.18)",
                      borderRadius: "8px",
                      color: "#ec4899",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Try Sender <ArrowRight size={14} />
                  </a>
                </div>

                {/* Kit (ConvertKit) */}
                <div
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
                    <a
                      href="#AFFILIATE_KIT"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Kit
                    </a>{" "}
                    (formerly ConvertKit)
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Kit (the ConvertKit rebrand) was built specifically for content creators:
                    bloggers, YouTubers, course creators, and authors. Its core strength is
                    the simplicity of email sequences and landing pages &mdash; you can build
                    a complete funnel without needing a separate website. The free plan
                    includes up to 10,000 subscribers (with limited features). Automations
                    are visual and easy to set up, but they do not offer the same flexibility
                    as ActiveCampaign. Email templates are minimal by design &mdash; Kit
                    promotes text-first emails that look like personal messages rather than
                    advertisements. Not ideal for e-commerce (it lacks native integrations
                    with shop platforms), but for content creators it is one of the best
                    options available.
                  </p>
                  <a
                    href="#AFFILIATE_KIT"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "12px",
                      padding: "8px 16px",
                      background: "rgba(236,72,153,0.10)",
                      border: "1px solid rgba(236,72,153,0.18)",
                      borderRadius: "8px",
                      color: "#ec4899",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Try Kit <ArrowRight size={14} />
                  </a>
                </div>

                {/* Mailchimp (non-affiliate) */}
                <div
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
                    Mailchimp
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Mailchimp is probably the most recognized email marketing platform in
                    the world, and for good reason: the interface is intuitive, it has
                    hundreds of integrations, and a mature ecosystem of templates and
                    resources. The free plan is limited to 500 contacts and 1,000 emails
                    per month &mdash; significantly less generous than it used to be. On
                    paid plans (starting at $13/month), you unlock automations, A/B
                    testing, and advanced segmentation. The main downside: pricing scales
                    up quickly as your list grows, and some essential features (like send
                    time optimization) are only available on the Premium plan ($350/month).
                    For small businesses just starting out, Mailchimp remains a solid
                    option, but there are more cost-effective alternatives available.
                  </p>
                </div>

                {/* Klaviyo (non-affiliate) */}
                <div
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
                    Klaviyo
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Klaviyo is the king of email marketing for e-commerce. Its native
                    integration with Shopify, WooCommerce, and Magento means you get
                    access to detailed data about each customer&rsquo;s purchase behavior:
                    products viewed, carts abandoned, average order value, purchase
                    frequency. The segmentation based on this data is unmatched. It
                    includes predictive analytics (forecasts for next order date, customer
                    lifetime value) and pre-built flows for every e-commerce scenario. The
                    downside: pricing. The free plan is limited to 250 contacts and 500
                    emails. On paid plans, costs scale up quickly &mdash; a store with
                    10,000 contacts pays around $150/month. If you run a serious online
                    store and email marketing is a strategic channel, Klaviyo is the
                    investment that pays for itself.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* How to Choose */}
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
                How to choose the right platform
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                There is no universally &ldquo;best&rdquo; platform &mdash; only the one
                that is best suited for your situation. Here are the criteria to evaluate:
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
                  "List size \u2014 if you have under 1,000 subscribers, a free plan from Sender or Kit is enough. Over 10,000, carefully evaluate costs as you scale.",
                  "Budget \u2014 for minimal budget, Sender and Brevo offer the best value for money. If budget is not a concern, ActiveCampaign and Klaviyo give you the most powerful tools.",
                  "Business type \u2014 e-commerce means Klaviyo or Brevo. Content creators means Kit. B2B and SaaS means ActiveCampaign. General small businesses means Mailchimp or Sender.",
                  "Required features \u2014 need complex automations with branching? ActiveCampaign. Need SMS + email in one tool? Brevo. Need landing pages? Kit.",
                  "Integrations \u2014 check whether the platform integrates with the tools you already use: CMS, e-commerce platform, CRM, analytics tools.",
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
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                A practical tip: <strong style={{ color: "#fff" }}>don&rsquo;t choose based on the starting price alone</strong>.
                Calculate the cost at the list size you expect to have in 12 months. Many
                platforms seem cheap initially but become significantly more expensive as
                you grow. Also, migrating from one platform to another is a costly and
                time-consuming process, so it is worth choosing well from the start.
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
                Explore our email marketing solutions
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
                We help you choose, set up, and optimize the right email marketing
                platform for your business. From strategy to full implementation.
              </p>
              <Link href="/en/email-marketing-solutions/" className="btn-primary">
                Explore email marketing solutions <ArrowRight size={16} />
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
                    Email Marketing for Ecommerce: How to Boost Sales with Newsletters
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
                    Marketing Automation: Complete Tools Guide
                  </h3>
                  <Link
                    href="/en/blog/marketing-automation-tools-guide/"
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

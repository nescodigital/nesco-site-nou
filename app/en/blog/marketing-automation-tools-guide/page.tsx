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
              February 26, 2026 &middot; 13 min read
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
              How to Automate Your Marketing: Complete{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tools Guide
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
              Automation doesn&apos;t mean replacing people &mdash; it means
              giving them superpowers. This guide shows you exactly what to
              automate at each business stage and which tools to use.
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
                According to a 2025 HubSpot study, companies using marketing
                automation generate{" "}
                <strong style={{ color: "#fff" }}>451% more qualified leads</strong>{" "}
                than those doing everything manually. Yet only 25% of small and
                medium businesses have implemented even a basic form of
                automation.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The reason? Not a lack of tools &mdash; but a lack of clarity.
                Nobody knows where to start, what to automate first, and which
                platforms are worth the investment. This guide solves exactly
                that problem.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                We&apos;ll show you what to automate based on your business
                stage, recommend specific tools we&apos;ve tested ourselves,
                and give you a clear map of automation categories. No jargon,
                no useless theory &mdash; just actions you can implement right
                away.
              </p>
            </div>
          </FadeInSection>

          {/* Section: What to Automate by Business Stage */}
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
                What to automate by business stage
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                You don&apos;t need to automate everything on day one. Your
                priority depends on where you are right now. Here&apos;s what
                we recommend at each stage:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
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
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
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
                        background: "rgba(236,72,153,0.12)",
                        color: "#ec4899",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      1
                    </span>
                    Early Stage (0&ndash;50 customers)
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
                      "Email welcome series \u2014 an automated sequence for every new subscriber or customer",
                      "Basic chatbot \u2014 automated answers to frequently asked questions on your site or WhatsApp",
                      "Social media scheduling \u2014 scheduling posts on Facebook, Instagram and LinkedIn in advance",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontSize: "0.9375rem",
                          color: "rgba(255,255,255,0.45)",
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
                    className="font-bold text-white"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
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
                        background: "rgba(236,72,153,0.12)",
                        color: "#ec4899",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      2
                    </span>
                    Growing Stage (50&ndash;500 customers)
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
                      "Lead scoring \u2014 automatically classifying leads based on behavior and demographic data",
                      "Advanced email sequences \u2014 nurturing, re-engagement, and upsell flows triggered by specific actions",
                      "Multi-channel messaging \u2014 coordinated email + SMS + WhatsApp in a single automation flow",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontSize: "0.9375rem",
                          color: "rgba(255,255,255,0.45)",
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
                    className="font-bold text-white"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
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
                        background: "rgba(236,72,153,0.12)",
                        color: "#ec4899",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      3
                    </span>
                    Scaling Stage (500+ customers)
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
                      "Full funnel automation \u2014 end-to-end automation from first contact through retention and referral",
                      "Predictive analytics \u2014 AI that predicts which leads will convert and when to reach out",
                      "Cross-channel orchestration \u2014 automated message coordination across all channels based on behavior",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontSize: "0.9375rem",
                          color: "rgba(255,255,255,0.45)",
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
                </div>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: "#fff" }}>Golden rule:</strong> start
                with the automations that save the most repetitive time.
                Usually, that means email and chatbot.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Email & CRM Automation */}
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
                Email &amp; CRM Automation
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Email remains the channel with the highest ROI in digital
                marketing &mdash; an average of 36:1. But sending emails
                manually doesn&apos;t scale. Here are the best platforms that
                combine email marketing with advanced automation:
              </p>

              {/* ActiveCampaign */}
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
                  ActiveCampaign
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#ec4899",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Best for: advanced automation + built-in CRM
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a href="#AFFILIATE_ACTIVECAMPAIGN" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}>ActiveCampaign</a>{" "}
                  is our top pick for SMBs that want serious automation without
                  the complexity of Salesforce. It features a visual
                  drag-and-drop automation builder, built-in CRM, lead scoring,
                  and over 900 integrations. The conditional sequences
                  (if/then) are the most powerful in the category at this price
                  point.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  Pricing starts at ~$29/month and includes email marketing,
                  automations, basic CRM, and forms. The Plus plan ($49/month)
                  adds lead scoring, SMS marketing, and advanced integrations.
                </p>
                <a href="#AFFILIATE_ACTIVECAMPAIGN" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", padding: "8px 16px", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: "8px", color: "#ec4899", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  Brevo (formerly Sendinblue)
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#ec4899",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Best for: multi-channel (email + SMS + WhatsApp)
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a href="#AFFILIATE_BREVO" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}>Brevo</a>{" "}
                  is the ideal solution if you want email, SMS, and WhatsApp
                  from a single platform. The free plan includes 300
                  emails/day and basic CRM &mdash; enough to get started. The
                  automations are intuitive, and pricing is based on email
                  volume, not number of contacts (a major advantage).
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  The Starter plan begins at ~$9/month for 5,000 emails. The
                  Business plan ($18/month) adds advanced automations, A/B
                  testing, and landing pages.
                </p>
                <a href="#AFFILIATE_BREVO" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", padding: "8px 16px", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: "8px", color: "#ec4899", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                  Try Brevo <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Chatbot & Messaging Automation */}
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
                Chatbot &amp; Messaging Automation
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                A good chatbot instantly answers 80% of customer questions,
                qualifies leads, and collects data &mdash; all without human
                intervention. In 2026, chatbots are no longer a
                &ldquo;nice to have&rdquo; &mdash; they&apos;re a necessity.
              </p>

              {/* Manychat */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  Manychat
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#ec4899",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Best for: social media + WhatsApp automation
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a href="#AFFILIATE_MANYCHAT" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}>Manychat</a>{" "}
                  is the market leader for chatbots on Instagram, Facebook
                  Messenger, and WhatsApp. You can create automated flows that
                  respond to comments, DMs, and WhatsApp messages &mdash; with
                  a visual no-code builder.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  Popular use cases: auto-reply to &ldquo;send link&rdquo;
                  comments, lead qualification through sequential questions,
                  automatic scheduling, and email collection through DMs. The
                  free plan covers up to 1,000 contacts. Pro starts at
                  $15/month.
                </p>
                <a href="#AFFILIATE_MANYCHAT" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", padding: "8px 16px", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: "8px", color: "#ec4899", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                  Try Manychat <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Analytics & Reporting Automation */}
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
                Analytics &amp; Reporting Automation
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Manual marketing reports take hours and are already outdated
                by the time you finish them. Automating your reporting gives
                you real-time data and eliminates human errors from
                calculations.
              </p>

              {/* Supermetrics */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  Supermetrics
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#ec4899",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Best for: pulling data from all platforms into one dashboard
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a href="#AFFILIATE_SUPERMETRICS" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}>Supermetrics</a>{" "}
                  automatically pulls data from Google Ads, Meta Ads, LinkedIn
                  Ads, Google Analytics, TikTok Ads, and 100+ other platforms
                  and sends it to Google Sheets, Looker Studio, Excel, or your
                  data warehouse. Reports update automatically &mdash; no more
                  copying numbers manually.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  It&apos;s the go-to tool for agencies and marketing teams
                  managing multiple channels simultaneously. Pricing starts at
                  ~$39/month for connection to 1 data source. Advanced plans
                  allow connecting all platforms into a single dashboard.
                </p>
                <a href="#AFFILIATE_SUPERMETRICS" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", padding: "8px 16px", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: "8px", color: "#ec4899", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                  Try Supermetrics <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Section: All-in-One Marketing Automation */}
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
                All-in-One Marketing Automation
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                If you don&apos;t want to juggle 5 different tools, there are
                platforms that combine email, landing pages, automations,
                membership sites, and checkout &mdash; all in one place.
              </p>

              {/* Kartra */}
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
                  style={{ fontSize: "1.125rem", marginBottom: "8px" }}
                >
                  Kartra
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#ec4899",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Best for: solopreneurs and small businesses who want everything in one tool
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "8px",
                  }}
                >
                  <a href="#AFFILIATE_KARTRA" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}>Kartra</a>{" "}
                  replaces 5&ndash;6 separate tools: email marketing, landing
                  page builder, checkout and payments, membership site,
                  automations, and analytics. Everything is natively connected
                  with no complicated external integrations needed.
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  Ideal for consultants, coaches, online course creators, and
                  service businesses that don&apos;t want to become tech
                  experts. Pricing starts at ~$99/month and includes all
                  features &mdash; no hidden upsells waiting after you
                  subscribe.
                </p>
                <a href="#AFFILIATE_KARTRA" target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", padding: "8px 16px", background: "rgba(236,72,153,0.10)", border: "1px solid rgba(236,72,153,0.18)", borderRadius: "8px", color: "#ec4899", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                  Try Kartra <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Quick Comparison */}
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
                Quick comparison: all tools
              </h2>
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
                      {["Tool", "Category", "From", "Best For"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #ec4899",
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
                      ["ActiveCampaign", "Email & CRM", "$29/mo", "Advanced automation + CRM"],
                      ["Brevo", "Multi-channel email", "$9/mo", "Email + SMS + WhatsApp"],
                      ["Manychat", "Chatbot", "Free", "Social media + WhatsApp bots"],
                      ["Supermetrics", "Analytics", "$39/mo", "Centralized reporting"],
                      ["Kartra", "All-in-One", "$99/mo", "Everything in one tool"],
                    ].map(([tool, cat, price, best], i) => (
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
                          {cat}
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
                          {best}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Common Mistakes */}
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
                Common marketing automation mistakes
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Poorly implemented automation can do more harm than good. Avoid
                these common pitfalls:
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
                    title: "Automating before you have a working manual process",
                    desc: "If you don\u2019t know what works manually, you don\u2019t know what to automate. Automating a bad process just gives you a bad process that runs faster.",
                  },
                  {
                    title: "Too many tools that don\u2019t talk to each other",
                    desc: "5 platforms without integrations means 5 data silos. Choose tools that connect natively or through Zapier/Make.",
                  },
                  {
                    title: "Generic messages sent to everyone",
                    desc: "Automation without segmentation is spam. Personalize messages based on behavior, funnel stage, and preferences.",
                  },
                  {
                    title: "Set it and forget it",
                    desc: "Automations need ongoing monitoring and optimization. Check open rates, clicks, and conversions monthly and adjust accordingly.",
                  },
                  {
                    title: "Ignoring the human element",
                    desc: "Not everything should be automated. High-value interactions (negotiations, complex support, partnerships) need a human touch.",
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
                Good automation saves 10&ndash;20 hours per week. Bad
                automation creates chaos and loses customers. The difference
                lies in strategy, not tools.
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
                Discover your digital strategy
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
                We help you identify what to automate, choose the right tools,
                and implement everything correctly &mdash; from strategy to
                execution.
              </p>
              <Link href="/en/digital-strategy/" className="btn-primary">
                Your digital strategy <ArrowRight size={16} />
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
                    Best Email Marketing Platforms
                  </h3>
                  <Link
                    href="/en/blog/best-email-marketing-platforms/"
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
                    Best Chatbot &amp; Live Chat Tools
                  </h3>
                  <Link
                    href="/en/blog/best-chatbot-live-chat-tools/"
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

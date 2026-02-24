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
                color: CATEGORY_COLOR,
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
              March 2, 2026 &middot; 10 min read
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
              How to Use WhatsApp Business for{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sales and Support
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
              WhatsApp Business API transforms how you communicate with
              customers: automation flows, conversion sequences, and real-time
              support &mdash; all on the platform already used by 2 billion
              people worldwide.
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
                WhatsApp has over <strong style={{ color: "#fff" }}>2 billion monthly active users</strong> and
                a near-98% open rate. Compare that to email (20-25% open rate)
                or SMS (45%), and you can see why more businesses are moving
                their customer communication to WhatsApp.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                WhatsApp messages don&apos;t get lost in spam, aren&apos;t ignored in
                crowded inboxes, and have an average response time under 90
                seconds. For sales and support teams, this means faster
                conversions and happier customers.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In this guide, we show you exactly how to set up WhatsApp
                Business API, which automation flows to implement, and which
                tools to use to turn WhatsApp into a complete sales and support
                channel.
              </p>
            </div>
          </FadeInSection>

          {/* Section: WhatsApp Business vs WhatsApp Business API */}
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
                WhatsApp Business App vs. WhatsApp Business API
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Before anything else, you need to understand the difference
                between the two options. Choosing wrong limits your scalability
                from day one.
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
                      marginBottom: "8px",
                    }}
                  >
                    WhatsApp Business App (Free)
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Designed for small businesses. Installed on your phone, it
                    supports one user (or up to 4 linked devices), offers quick
                    replies, contact labels, and a simple product catalog.
                    Automation is limited to greeting messages and away messages.
                    No CRM integration or third-party platform connections.
                  </p>
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
                      marginBottom: "8px",
                    }}
                  >
                    WhatsApp Business API
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Designed for medium and large businesses. Supports multiple
                    agents on the same number, complex chatbot automation, CRM
                    integration, broadcast messaging at scale, and detailed
                    analytics. Requires a BSP (Business Solution Provider) and
                    Meta approval. No native interface &mdash; you interact
                    through the BSP&apos;s platform.
                  </p>
                </div>
              </div>

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
                      {["Feature", "Business App", "Business API"].map((h) => (
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
                      ["Price", "Free", "Paid (via BSP)"],
                      ["Users", "1-4 devices", "Unlimited agents"],
                      ["Automation", "Greeting messages", "Full chatbot flows"],
                      ["CRM Integration", "No", "Yes"],
                      ["Broadcast", "Max 256 contacts", "Unlimited (with templates)"],
                      ["Analytics", "Basic", "Advanced"],
                      ["Best for", "Micro-businesses", "Growing companies"],
                    ].map(([feature, app, api], i) => (
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
                          {app}
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
                          {api}
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
                <strong style={{ color: "#fff" }}>Recommendation:</strong> If
                you have more than 2-3 people handling customer messages or want
                to automate conversations, go straight for the API. The cost
                pays for itself quickly through increased efficiency.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Setting Up WhatsApp Business API */}
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
                Setting Up WhatsApp Business API Step by Step
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The setup process typically takes 1-3 business days. Here are
                the exact steps you need to follow:
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
                    gap: "16px",
                  }}
                >
                  {[
                    {
                      step: "1",
                      title: "Choose a BSP (Business Solution Provider)",
                      desc: "The BSP is the platform through which you access the WhatsApp API. Popular options include Wati.io, Manychat, Twilio, and 360dialog. Each has different pricing and interfaces. Choose based on budget, automation complexity, and required integrations.",
                    },
                    {
                      step: "2",
                      title: "Verify Your Business on Meta Business Manager",
                      desc: "You need a verified Meta Business account. The process requires legal documentation (business registration), domain verification, and phone or email confirmation. It takes 1-5 business days to complete.",
                    },
                    {
                      step: "3",
                      title: "Set Up Message Templates",
                      desc: "WhatsApp requires pre-approved templates for proactive (outbound) messages. Create templates for: order confirmations, shipping notifications, appointment reminders, and promotional messages. Each template must be approved by Meta before use.",
                    },
                    {
                      step: "4",
                      title: "Connect to Your CRM",
                      desc: "Integrate WhatsApp with HubSpot, Salesforce, Pipedrive, or whatever CRM you use. This ensures every WhatsApp conversation automatically appears in the customer profile with complete history and context.",
                    },
                  ].map((item) => (
                    <li
                      key={item.step}
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "rgba(236,72,153,0.12)",
                          color: CATEGORY_COLOR,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        {item.step}
                      </span>
                      <div>
                        <h3
                          className="font-bold text-white"
                          style={{
                            fontSize: "1rem",
                            marginBottom: "4px",
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
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Automation Flows for Sales */}
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
                Automation Flows for Sales
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                WhatsApp automations drive{" "}
                <strong style={{ color: "#fff" }}>3-7x higher conversions</strong>{" "}
                than traditional channels. Here are the most effective sales
                flows:
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
                    title: "Welcome message + lead qualification",
                    desc: "When a potential customer sends their first message, the chatbot responds instantly with a personalized greeting and asks 2-3 qualifying questions (budget, need, urgency). Qualified leads are automatically routed to a sales agent. Response time drops from hours to seconds.",
                  },
                  {
                    title: "Product catalog browsing",
                    desc: "Let customers browse your product catalog directly within the WhatsApp conversation using interactive buttons and product lists. Customers choose a category, view products with photos and prices, then add to cart without leaving WhatsApp. Conversion increases by 30-45% compared to redirecting to a website.",
                  },
                  {
                    title: "Abandoned cart recovery via WhatsApp",
                    desc: "When a customer abandons their cart on your website, they automatically receive a WhatsApp message at 1 hour (reminder), 24 hours (social proof + reviews), and 48 hours (limited discount). Recovery rate on WhatsApp is 45-60% — nearly triple that of email.",
                  },
                  {
                    title: "Order confirmation + shipping updates",
                    desc: "After purchase, customers automatically receive on WhatsApp: order confirmation with details, notification when the package ships, real-time tracking, and delivery confirmation. Reduces \"Where is my order?\" support calls by 70%.",
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

          {/* Section: Automation Flows for Support */}
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
                Automation Flows for Customer Support
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                WhatsApp support resolves tickets{" "}
                <strong style={{ color: "#fff" }}>60% faster</strong> than email,
                and customer satisfaction scores increase significantly. Here are
                the essential flows:
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
                    title: "Automated FAQ chatbot",
                    desc: "Configure a chatbot that automatically answers the 20-30 most common questions: return policy, delivery time, payment methods, product sizing. Resolves 40-60% of inquiries without human intervention, freeing your team for complex cases.",
                  },
                  {
                    title: "Ticket routing to human agents",
                    desc: "When the chatbot cannot resolve an issue, the conversation is automatically transferred to the right agent based on issue type (technical, billing, returns). The agent gets an instant notification and has access to the full conversation history.",
                  },
                  {
                    title: "Customer satisfaction surveys (CSAT)",
                    desc: "After resolving a ticket, the customer automatically receives a short WhatsApp survey (1-2 questions, rating buttons). Response rate on WhatsApp is 35-45% — 5x higher than email. Feedback arrives in your dashboard in real time.",
                  },
                  {
                    title: "After-hours auto-replies",
                    desc: "Outside business hours, customers automatically receive a message with options: FAQ chatbot, ticket form, or callback scheduling for the next day. No message goes unanswered, and the customer knows exactly when they will be contacted.",
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

          {/* Section: Recommended Tools */}
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
                Recommended Tools for WhatsApp Business
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Not all WhatsApp Business API platforms are created equal. Here
                are the two solutions we recommend most frequently to our
                clients:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {/* Wati.io */}
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
                      href="https://affiliates.wati.io/lox4ol1xmt09"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Wati.io
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
                    Wati.io is purpose-built for WhatsApp Business API. It
                    offers a no-code drag-and-drop chatbot builder, shared inbox
                    for multiple agents, broadcast messaging to segmented lists,
                    and native integrations with Shopify, HubSpot, and Zapier.
                    The interface is intuitive, and you can have a working
                    chatbot in a few hours without technical knowledge. Pricing
                    starts at approximately $49/month and includes 1,000 free
                    conversations. Best suited for sales and support teams that
                    want a dedicated WhatsApp solution that&apos;s fast to implement.
                  </p>
                  <a
                    href="https://affiliates.wati.io/lox4ol1xmt09"
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
                      color: CATEGORY_COLOR,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Try Wati.io <ArrowRight size={14} />
                  </a>
                </div>

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
                    style={{
                      fontSize: "1rem",
                      marginBottom: "8px",
                    }}
                  >
                    <a
                      href="https://manychat.partnerlinks.io/d3mbiuidqfda"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Manychat
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
                    Manychat is a multi-channel platform covering WhatsApp,
                    Instagram DM, and Facebook Messenger from a single
                    interface. Excellent for marketing automation: drip
                    sequences, advanced segmentation, A/B testing on messages,
                    and Meta Ads integration (you can send users directly from
                    an ad into a WhatsApp conversation). The visual flow builder
                    is powerful and flexible. The free plan covers up to 1,000
                    contacts; the Pro plan starts at $15/month. Ideal if you
                    need a multi-channel solution and want to connect WhatsApp
                    with Instagram and Facebook in a unified strategy.
                  </p>
                  <a
                    href="https://manychat.partnerlinks.io/d3mbiuidqfda"
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
                      color: CATEGORY_COLOR,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Try Manychat <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Best Practices */}
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
                Best Practices for WhatsApp Business
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                WhatsApp is a personal channel. Use it wrong and customers will
                block you &mdash; permanently losing access to them. Follow
                these rules:
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
                  "Respond within 24 hours \u2014 this is WhatsApp policy. After 24 hours without a response, you can no longer send messages without an approved template. Automate the first reply so you never miss the window.",
                  "Use message templates wisely \u2014 every template must be approved by Meta. Create them clearly, keep them relevant, and avoid aggressive sales language. Low-quality templates lower your account rating.",
                  "Don\u2019t spam \u2014 WhatsApp actively monitors block and report rates. If too many users block you, your account gets restricted or suspended. Only send messages customers actually expect.",
                  "Personalize your messages \u2014 use the customer\u2019s name, purchase history, and preferences to create relevant messages. A personalized message has a 3-5x higher conversion rate than a generic one.",
                  "Track key metrics \u2014 response rate, average resolution time, CSAT score, and conversion rate per flow. What you don\u2019t measure, you can\u2019t improve. Review weekly and optimize continuously.",
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
                    <span style={{ color: CATEGORY_COLOR, flexShrink: 0 }}>
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
                The golden rule: treat every WhatsApp conversation as a{" "}
                <strong style={{ color: "#fff" }}>real conversation</strong>,
                not as a broadcast channel. Customers feel the difference and
                respond accordingly.
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
                Let&apos;s talk about automation
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
                We help you set up WhatsApp Business API, build automation
                flows, and turn conversations into sales and satisfied customers.
              </p>
              <Link href="/en/lets-talk/" className="btn-primary">
                Get in touch <ArrowRight size={16} />
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
                Related Articles
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
                      color: CATEGORY_COLOR,
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
                    Best Chatbot and Live Chat Tools
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
                      color: CATEGORY_COLOR,
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

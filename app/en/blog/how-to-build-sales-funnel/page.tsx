import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#3b82f6"; // Strategy blue

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
                "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
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
                background: "rgba(59,130,246,0.10)",
                color: CATEGORY_COLOR,
                border: "1px solid rgba(59,130,246,0.18)",
              }}
            >
              Strategy
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              March 3, 2026 &middot; 13 min read
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
              How to Build a Complete{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sales Funnel
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
              A step-by-step guide to building an effective sales funnel
              &mdash; from attracting your audience (TOFU) to closing the sale
              (BOFU) &mdash; with recommended tools at every stage.
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
                A sales funnel is the journey a potential customer takes from
                the moment they first learn about your business to the point
                where they make a purchase. Each stage of this journey requires
                a different message, a different type of content, and a
                different objective.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The problem? Most businesses focus exclusively on the top of
                the funnel &mdash; getting traffic. They invest in ads, SEO,
                and social media, but have no system to turn visitors into
                leads and leads into customers. The result: money spent on
                traffic that never converts.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In this guide, we show you how to build a complete funnel from
                scratch, with the right tools at each stage. This isn&apos;t
                abstract theory &mdash; it&apos;s an actionable plan you can
                implement immediately.
              </p>
            </div>
          </FadeInSection>

          {/* Funnel Framework */}
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
                The Funnel Framework: TOFU &rarr; MOFU &rarr; BOFU
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Before you start building, you need to understand the 3 stages
                of any sales funnel. Each stage has a distinct purpose and
                requires specific tactics:
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
                    title: "TOFU (Top of Funnel) — Awareness",
                    desc: "Goal: attract the attention of the right audience. People don't know you yet and may not even realize they have a problem you can solve. Tactics: blog posts, social media content, paid ads, SEO, educational content.",
                  },
                  {
                    title: "MOFU (Middle of Funnel) — Consideration",
                    desc: "Goal: turn visitors into leads and nurture the relationship. People know they have a problem and are exploring solutions. Tactics: lead magnets (ebooks, checklists), email nurture sequences, webinars, case studies, in-depth content.",
                  },
                  {
                    title: "BOFU (Bottom of Funnel) — Decision",
                    desc: "Goal: convert leads into paying customers. People are ready to buy but need a final push. Tactics: sales pages, demos, free trials, testimonials, limited-time offers.",
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
                The critical mistake most businesses make is jumping straight
                from TOFU to BOFU &mdash; trying to sell immediately to a
                visitor who just discovered them. Without the MOFU stage, your
                conversion rate will always be low.
              </p>
            </div>
          </FadeInSection>

          {/* Building TOFU */}
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
                Building TOFU: Attract the Right Audience
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The top of the funnel has one purpose: to get the right people
                on your radar. Not just any traffic &mdash; relevant traffic
                from people who could become customers. There are 3 main
                channels for TOFU:
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
                    title: "Organic content (Blog, Video, Social Media)",
                    desc: "Create articles that answer the questions your potential customers are asking. Guides, tutorials, resource lists — anything that helps them understand the problem they have. Optimize your content for SEO to attract long-term organic traffic.",
                  },
                  {
                    title: "Paid acquisition (Google Ads, Meta Ads)",
                    desc: "Paid ads are the fastest way to generate TOFU traffic. Google Search Ads capture people with search intent, while Meta Ads (Facebook and Instagram) work excellently for awareness and reaching new audiences.",
                  },
                  {
                    title: "SEO and organic traffic",
                    desc: "Search engine optimization is the long-term investment. Optimized blog posts, category pages, and evergreen content generate consistent traffic without recurring cost-per-click expenses.",
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

              {/* Tool: Unbounce */}
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
                  Recommended TOFU tool:{" "}
                  <a
                    href="#AFFILIATE_UNBOUNCE"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Unbounce
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
                  Unbounce lets you create lead capture landing pages quickly,
                  without a developer. It includes built-in A/B testing, smart
                  traffic (automatically routes visitors to the highest-converting
                  variant), and templates optimized for lead generation. Ideal
                  for turning TOFU traffic into MOFU leads.
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
                    background: "rgba(59,130,246,0.10)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    borderRadius: "8px",
                    color: CATEGORY_COLOR,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Try Unbounce <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Building MOFU */}
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
                Building MOFU: Nurture and Qualify Leads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                You have traffic. Now you need to turn visitors into leads and
                build a relationship with them until they&apos;re ready to buy.
                MOFU is the stage where you offer value in exchange for contact
                information, then nurture that relationship through relevant
                content.
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
                    title: "Lead magnets (ebooks, checklists, free tools)",
                    desc: "Offer something valuable in exchange for an email address. A PDF guide, a checklist, an online calculator, a template — anything that solves a concrete problem for your audience. The lead magnet must be directly related to the product or service you sell.",
                  },
                  {
                    title: "Email nurture sequences",
                    desc: "After capturing a lead, don't try to sell immediately. Send a sequence of 5-7 emails that educate, provide value, and build trust. Share case studies, offer practical tips, and position yourself as an expert in the field.",
                  },
                  {
                    title: "Webinars and demos",
                    desc: "Webinars are extremely effective for B2B and complex services. Offer a free 30-45 minute session that solves a specific problem. At the end, present your solution as the logical next step.",
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

              {/* Tool: ActiveCampaign */}
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
                  Recommended tool:{" "}
                  <a
                    href="#AFFILIATE_ACTIVECAMPAIGN"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
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
                  ActiveCampaign is one of the most powerful email marketing
                  and automation platforms available. It includes built-in lead
                  scoring (assigns points to contacts based on their actions),
                  visual automation sequences, advanced segmentation, and a
                  built-in CRM. Perfect for the MOFU stage where you need to
                  nurture leads and qualify them automatically.
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
                    background: "rgba(59,130,246,0.10)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    borderRadius: "8px",
                    color: CATEGORY_COLOR,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Try ActiveCampaign <ArrowRight size={14} />
                </a>
              </div>

              {/* Tool: Manychat */}
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
                  Recommended tool:{" "}
                  <a
                    href="#AFFILIATE_MANYCHAT"
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
                  Manychat enables conversational marketing on WhatsApp,
                  Instagram DMs, and Facebook Messenger. You can create
                  automated flows that respond to comments, send DMs, qualify
                  leads, and direct them to the next stage of your funnel. Chat
                  open rates are 80%+ vs. 20-25% for email, making it ideal
                  for fast nurturing.
                </p>
                <a
                  href="#AFFILIATE_MANYCHAT"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(59,130,246,0.10)",
                    border: "1px solid rgba(59,130,246,0.18)",
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
          </FadeInSection>

          {/* Building BOFU */}
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
                Building BOFU: Convert to Customers
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Your leads are qualified, they trust you, and they&apos;re
                almost ready to buy. Now you need a flawless conversion
                experience that eliminates any remaining hesitation. Here are
                the key elements of an effective BOFU:
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
                    title: "Optimized sales page",
                    desc: "A good sales page answers every question and objection the prospect might have. Structure: clear problem statement, your solution, concrete benefits (not features), social proof, guarantee, and a strong call-to-action. Every element should push the visitor toward a decision.",
                  },
                  {
                    title: "Urgency and scarcity (used ethically)",
                    desc: "People naturally procrastinate on decisions. Limited-time offers, limited spots, or bonuses available only for a short period accelerate the decision. Important: the urgency must be real, not fabricated. People can sense inauthenticity.",
                  },
                  {
                    title: "Social proof and testimonials",
                    desc: "Reviews, case studies, concrete numbers (customers served, results achieved), client logos. Nothing convinces better than stories from other customers who had the same problem and got results. Video testimonials have the greatest impact.",
                  },
                  {
                    title: "Payment and checkout optimization",
                    desc: "The payment process should be as simple as possible. Reduce the number of steps, use short forms, offer multiple payment options, display security badges, and have a clear return policy. Each additional form field reduces conversion rate by 10-15%.",
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

              {/* Tool: Kartra */}
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
                  Recommended BOFU tool:{" "}
                  <a
                    href="#AFFILIATE_KARTRA"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Kartra
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
                  Kartra is an all-in-one platform for building complete
                  funnels. It includes a landing page builder, email marketing,
                  checkout and payment processing, membership sites, and
                  analytics &mdash; all in one place. No need to integrate 5-6
                  different tools. Ideal for entrepreneurs and small teams who
                  want a complete funnel without technical complexity.
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
                    background: "rgba(59,130,246,0.10)",
                    border: "1px solid rgba(59,130,246,0.18)",
                    borderRadius: "8px",
                    color: CATEGORY_COLOR,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Try Kartra <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Funnel Metrics */}
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
                Funnel Metrics to Track
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Each stage of the funnel has its own specific metrics. If you
                don&apos;t measure, you can&apos;t optimize. Here&apos;s what
                to track at each level:
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
                      {["Stage", "Key Metrics"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #3b82f6",
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
                      ["TOFU", "Total traffic, Click-through rate (CTR), Cost per click (CPC), Reach"],
                      ["MOFU", "Lead conversion rate, Email open/click rates, Engagement, Cost per lead"],
                      ["BOFU", "Sales conversion rate, Average order value (AOV), Customer acquisition cost (CAC), ROI"],
                    ].map(([stage, metrics], i) => (
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
                          {stage}
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
                          {metrics}
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
                The most important metric that few businesses track:
                stage-to-stage transition rates. What percentage of TOFU
                visitors become MOFU leads? What percentage of MOFU leads
                become BOFU customers? These rates tell you exactly where your
                funnel is losing people.
              </p>
            </div>
          </FadeInSection>

          {/* Common Mistakes */}
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
                Common Funnel Mistakes
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Even a well-designed funnel can fail if you make one of these
                common mistakes:
              </p>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
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
                    "No clear value proposition — if visitors can't understand in 5 seconds why they should choose you, they leave",
                    "Too many steps in the funnel — each additional step loses 20-40% of people. Simplify as much as possible",
                    "No follow-up for non-converters — without retargeting and recovery emails, you lose leads permanently",
                    "Ignoring the mobile experience — over 70% of traffic comes from mobile. If your funnel isn't mobile-optimized, you're losing money",
                    "Inconsistent messaging between stages — if your ad promises one thing and the landing page says another, trust disappears instantly",
                  ].map((mistake) => (
                    <li
                      key={mistake}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: CATEGORY_COLOR, flexShrink: 0 }}>
                        &#9679;
                      </span>
                      {mistake}
                    </li>
                  ))}
                </ul>
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
                Want to build a complete sales funnel but don&apos;t know where
                to start? The Nesco Digital team can create a personalized
                digital strategy with the right funnel for your business.
              </p>
              <Link href="/en/digital-strategy/" className="btn-primary">
                I want a strategy <ArrowRight size={16} />
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
                      color: "#3b82f6",
                    }}
                  >
                    Strategy
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Digital Marketing Strategy Step by Step (2026 Guide)
                  </h3>
                  <Link
                    href="/en/blog/digital-marketing-strategy-guide/"
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
                    Conversion Rate: The Complete Optimization Guide
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
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="en" />
    </>
  );
}

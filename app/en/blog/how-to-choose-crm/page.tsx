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
                "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)",
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
              January 24, 2026 &middot; 12 min read
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
              How to Choose and Implement a{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                CRM in 2026
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
              A CRM isn&apos;t just software &mdash; it&apos;s the central
              nervous system of your sales and marketing. The wrong choice wastes
              months and thousands of euros. The right one transforms how you
              manage customers and close deals.
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
                If you&apos;re still tracking leads in spreadsheets, forgetting
                to follow up with important prospects, or can&apos;t tell which
                marketing channel brings the best customers &mdash; you need a
                CRM. It&apos;s not a question of &ldquo;if&rdquo;, but
                &ldquo;how soon&rdquo;.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In this complete guide, we compare the 5 most popular CRMs, give
                you the exact selection criteria, and provide a step-by-step
                implementation plan. Everything you need to make the right choice
                from day one.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Why you need a CRM */}
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
                Why you need a CRM
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A CRM (Customer Relationship Management) centralizes all
                customer interactions in one place. Instead of searching through
                emails, notes, and spreadsheets, you get a complete view of
                every customer and every sales opportunity.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Key benefits of a properly implemented CRM:
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
                  "Centralized data \u2014 all customers, leads, and interactions in a single dashboard",
                  "Automated follow-ups \u2014 never forget to contact a prospect again",
                  "Full pipeline visibility \u2014 know exactly what stage each deal is at",
                  "Advanced reporting \u2014 see which campaigns, channels, and actions generate revenue",
                  "Cross-team collaboration \u2014 sales, marketing, and support work with the same data",
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
                Companies using a CRM report an average{" "}
                <strong style={{ color: "#fff" }}>29% increase in sales</strong>{" "}
                and a{" "}
                <strong style={{ color: "#fff" }}>
                  34% improvement in team productivity
                </strong>
                . It&apos;s not magic &mdash; it&apos;s visibility and process
                discipline.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Top 5 CRMs compared */}
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
                Top 5 CRMs compared
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                We analyzed the most popular CRMs for small and medium
                businesses and compared them on the criteria that matter most:
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
                      {["CRM", "Best For", "Price/user/month", "Free Plan", "Ease of Use"].map(
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
                      ["HubSpot", "Marketing-first teams", "\u20AC0\u201390", "Yes (generous)", "Very Easy"],
                      ["Salesforce", "Large / enterprise", "\u20AC25\u2013300", "No", "Complex"],
                      ["Pipedrive", "Sales-focused SMBs", "\u20AC14\u201399", "No", "Easy"],
                      ["Monday CRM", "Project-oriented teams", "\u20AC10\u201324", "Yes (limited)", "Easy"],
                      ["Zoho CRM", "Budget-conscious teams", "\u20AC0\u201352", "Yes (3 users)", "Medium"],
                    ].map(([crm, best, price, free, ease], i) => (
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
                          {crm}
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
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {ease}
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
                <strong style={{ color: "#fff" }}>Our recommendation:</strong>{" "}
                For most SMBs, HubSpot (free + Starter plan) or Pipedrive offer
                the best balance of functionality and price. Salesforce is only
                worth it if you have a team of 20+ people and complex processes.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Selection criteria */}
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
                Selection criteria
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Before choosing a CRM, evaluate it against these 7 essential
                criteria. The most expensive CRM is not necessarily the best one
                for you:
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
                    title: "Team size and budget",
                    desc: "A freelancer with 3 clients doesn\u2019t need Salesforce. A team of 50 can\u2019t manage with a spreadsheet. Choose the CRM that fits your current size but can scale as you grow.",
                  },
                  {
                    title: "Integration needs",
                    desc: "Your CRM must connect with your existing platforms: e-commerce (Shopify, WooCommerce), email marketing (Mailchimp, Klaviyo), ad platforms (Meta, Google), and analytics tools.",
                  },
                  {
                    title: "Sales process complexity",
                    desc: "Do you have a simple 3\u20134 stage pipeline or a multi-stage process with approvals, negotiations, and contracts? CRMs like Pipedrive excel at simple pipelines; Salesforce at complex processes.",
                  },
                  {
                    title: "Automation requirements",
                    desc: "Automated email sequences, automatic task creation, lead scoring, notifications \u2014 how much do you want to automate? HubSpot and Salesforce have the most powerful automation engines.",
                  },
                  {
                    title: "Reporting and analytics depth",
                    desc: "Do you need simple reports (how many deals are open) or advanced analytics (multi-touch attribution, pipeline forecasting, cohort analysis)? Zoho and HubSpot offer solid reports even on basic plans.",
                  },
                  {
                    title: "Mobile app quality",
                    desc: "If your sales team is often on the road, the CRM\u2019s mobile app needs to be excellent. Pipedrive and HubSpot have the best mobile apps in the category.",
                  },
                  {
                    title: "Customer support and onboarding",
                    desc: "Some CRMs offer dedicated onboarding, video training, and live chat support. Others leave you alone with documentation. If it\u2019s your first CRM implementation, support matters enormously.",
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

          {/* Section: Implementation guide */}
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
                Step-by-step implementation guide
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Choosing the CRM is only half the battle. Proper implementation
                makes the difference between a tool that delivers value and one
                that nobody uses. Follow these 8 steps:
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
                      title: "Define your sales process and pipeline stages",
                      desc: "Before any technical setup, map out the stages a lead goes through: from first contact to customer. Example: New Lead \u2192 Qualified \u2192 Demo Scheduled \u2192 Proposal Sent \u2192 Negotiation \u2192 Won/Lost.",
                    },
                    {
                      step: "2",
                      title: "Clean your existing data before importing",
                      desc: "Don\u2019t import garbage into your new CRM. Delete duplicates, update invalid contact info, and standardize formats (company names, phone numbers, addresses).",
                    },
                    {
                      step: "3",
                      title: "Set up custom fields for your industry",
                      desc: "Every business has specific needs. An e-commerce will have fields like \u2018average order value\u2019 and \u2018purchase frequency\u2019. A SaaS will have \u2018current plan\u2019 and \u2018trial expiration date\u2019.",
                    },
                    {
                      step: "4",
                      title: "Create automated workflows",
                      desc: "Set up essential automations: automatic lead assignment, follow-up reminders, notifications when a deal is stuck too long in a stage, email nurturing sequences.",
                    },
                    {
                      step: "5",
                      title: "Integrate with email and marketing tools",
                      desc: "Connect the CRM with Gmail/Outlook, your email marketing platform, website forms, and ad platforms. Every interaction should automatically land in the CRM.",
                    },
                    {
                      step: "6",
                      title: "Train your team (the most important step!)",
                      desc: "The #1 reason CRMs fail is lack of adoption. Organize hands-on sessions, create written procedures, and establish clearly: if it\u2019s not in the CRM, it doesn\u2019t exist.",
                    },
                    {
                      step: "7",
                      title: "Start with core features, add complexity gradually",
                      desc: "Don\u2019t try to configure everything on day one. Start with contacts, deals, and pipeline. After 2\u20134 weeks, add automations. After 6\u20138 weeks, advanced reports.",
                    },
                    {
                      step: "8",
                      title: "Review and optimize after 30 days",
                      desc: "After the first month, analyze: which features are used, what\u2019s missing, what\u2019s too complicated? Adjust the pipeline, simplify workflows, and collect team feedback.",
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
                          color: "#ec4899",
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

          {/* Section: Common mistakes */}
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
                Common CRM implementation mistakes
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                We&apos;ve seen dozens of failed CRM implementations. Almost all
                fall into the same traps. Avoid these mistakes and you&apos;ll
                have a huge head start:
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
                    title: "Over-customizing from day 1",
                    desc: "You create 50 custom fields, 20 pipelines, and 30 automations before entering a single contact. Result: unnecessary complexity and rapid abandonment.",
                  },
                  {
                    title: "Zero training for the team",
                    desc: "You buy the CRM, hand out credentials, and hope everyone figures it out. Two months later, nobody uses it and you\u2019re back to spreadsheets.",
                  },
                  {
                    title: "Importing dirty data",
                    desc: "You import duplicate contacts, invalid emails, and outdated information. The CRM becomes an unusable database and the team loses trust in the system.",
                  },
                  {
                    title: "Buying the most expensive option",
                    desc: "You pay for Salesforce Enterprise when Pipedrive Pro would have solved 95% of your needs at a quarter of the price. More features doesn\u2019t mean better \u2014 it means more complicated.",
                  },
                  {
                    title: "Not integrating with existing tools",
                    desc: "The CRM must be connected to email, your website, ad platforms, and accounting. An isolated CRM is just another data silo, not a solution.",
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
                The golden rule: a simple CRM that the team uses daily beats a
                complex CRM that nobody opens. Adoption is everything.
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
                Implement a CRM correctly
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
                We help you choose, configure, and implement the right CRM for
                your team &mdash; from selection and data migration to
                automations and training.
              </p>
              <Link href="/en/crm-solutions/" className="btn-primary">
                See CRM solutions <ArrowRight size={16} />
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
                    Email Marketing for E-commerce: Complete Guide
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
                    AI in Marketing: What Changes in 2026
                  </h3>
                  <Link
                    href="/en/blog/ai-in-marketing-2026/"
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

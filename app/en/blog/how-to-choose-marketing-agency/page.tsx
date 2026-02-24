import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#3b82f6";

const RELATED = [
  {
    slug: "/en/blog/cost-internal-specialist-vs-agency/",
    title: "How Much Does an In-House Specialist Cost vs. a Marketing Agency?",
    category: "Strategy",
    categoryColor: "#3b82f6",
  },
  {
    slug: "/en/blog/why-digital-marketing-not-working/",
    title: "Why Your Digital Marketing Isn\u2019t Working: Common Mistakes",
    category: "Strategy",
    categoryColor: "#3b82f6",
  },
];

export default function HowToChooseMarketingAgencyPage() {
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
                  color: CATEGORY_COLOR,
                }}
              >
                Strategy
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                February 11, 2026 · 9 min read
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
              How to Choose the Right Marketing Agency:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                10-Step Checklist
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
              Choosing the wrong agency wastes months and thousands of euros.
              After seeing hundreds of agency-client relationships, here are the
              10 criteria that actually matter.
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
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              The digital marketing agency market is crowded. Hundreds of agencies, freelancers, and
              self-proclaimed &quot;growth hackers&quot; all promise results. The problem? Most businesses
              choose based on a polished pitch or the lowest price — and end up losing time, money, and
              trust in marketing altogether.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              We have seen hundreds of agency-client relationships over the years. We have witnessed
              partnerships that transformed businesses and collaborations that burned budgets with zero
              results. The difference almost always comes down to the selection process. That is why we
              created this 10-step checklist — the criteria that genuinely matter when choosing a digital
              marketing agency.
            </p>
          </FadeInSection>

          {/* 10 Steps heading */}
          <FadeInSection>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "24px",
              }}
            >
              The 10 steps to choosing the right agency
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {/* Step 1 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>1.</span> Check the real portfolio
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Not just pretty screenshots or client logos. Ask for case studies with actual metrics:
                  ROAS, CPA, revenue growth, leads generated. A serious agency can show you measurable
                  results. If they cannot share numbers, that is a major red flag. Also ask how long they
                  worked with each client and what challenges they faced along the way.
                </p>
              </div>

              {/* Step 2 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>2.</span> Ask for active client references
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Not former clients — active ones. Call them. Ask about communication, transparency, and
                  results. An active client will tell you exactly how the day-to-day collaboration works:
                  whether the agency responds on time, reports accurately, and engages strategically or
                  just executes mechanically. If an agency refuses to provide references, that is a clear
                  sign something is off.
                </p>
              </div>

              {/* Step 3 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>3.</span> Evaluate transparency
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Do they share access to ad accounts? Do you own your data? Do they provide detailed
                  reporting with real metrics, not just vanity numbers? Never work with an agency that
                  keeps your ad accounts locked. Your data is yours — period. A transparent agency will
                  give you full access to Google Analytics, Google Ads, Meta Business Manager, and every
                  other platform used.
                </p>
              </div>

              {/* Step 4 */}
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
                  style={{ fontSize: "1rem", marginBottom: "12px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>4.</span> Understand the pricing model
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  Fixed fee, percentage of ad spend, or performance-based? Each model has pros and cons.
                  Be wary of &quot;too cheap&quot; — quality costs money. An agency charging $500/month for
                  campaign management probably will not allocate enough time to your account.
                </p>
                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      minWidth: "480px",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "12px 16px",
                            borderBottom: `2px solid ${CATEGORY_COLOR}`,
                            textAlign: "left",
                            fontSize: "0.8125rem",
                            fontWeight: 700,
                          }}
                        >
                          Model
                        </th>
                        <th
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "12px 16px",
                            borderBottom: `2px solid ${CATEGORY_COLOR}`,
                            textAlign: "left",
                            fontSize: "0.8125rem",
                            fontWeight: 700,
                          }}
                        >
                          Typical Range
                        </th>
                        <th
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "12px 16px",
                            borderBottom: `2px solid ${CATEGORY_COLOR}`,
                            textAlign: "left",
                            fontSize: "0.8125rem",
                            fontWeight: 700,
                          }}
                        >
                          Best For
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Fixed monthly fee", "\u20AC1,500 - \u20AC5,000", "Predictable budgets"],
                        ["% of ad spend", "10 - 20%", "Scaling budgets"],
                        ["Performance-based", "Varies", "Established businesses"],
                        ["Hybrid (fixed + %)", "\u20AC1,000 + 10%", "Growing businesses"],
                      ].map(([model, range, bestFor], i) => (
                        <tr key={i}>
                          <td
                            style={{
                              background: "#0a0a0a",
                              color: "#fff",
                              padding: "12px 16px",
                              borderBottom: "1px solid rgba(255,255,255,0.06)",
                              fontSize: "0.8125rem",
                              fontWeight: 600,
                            }}
                          >
                            {model}
                          </td>
                          <td
                            style={{
                              background: "#0a0a0a",
                              color: "rgba(255,255,255,0.6)",
                              padding: "12px 16px",
                              borderBottom: "1px solid rgba(255,255,255,0.06)",
                              fontSize: "0.8125rem",
                            }}
                          >
                            {range}
                          </td>
                          <td
                            style={{
                              background: "#0a0a0a",
                              color: "rgba(255,255,255,0.6)",
                              padding: "12px 16px",
                              borderBottom: "1px solid rgba(255,255,255,0.06)",
                              fontSize: "0.8125rem",
                            }}
                          >
                            {bestFor}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 5 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>5.</span> Check specialization
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  A generalist agency will not match a specialist. If you need Google Ads, find a
                  certified Google Partner. If you run a Shopify store, find a Shopify Partner. Ask which
                  channels they cover, where they are strongest, and what certifications they hold. A good
                  agency will also honestly tell you where they do not excel.
                </p>
              </div>

              {/* Step 6 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>6.</span> Evaluate the team
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Who will actually work on your account? Meet the team, not just the sales person. Ask
                  about their experience with your industry, how many clients each specialist manages, and
                  who your dedicated account manager will be. An agency that puts an inexperienced junior
                  on your account will not deliver the same results as one that assigns seniors with a
                  proven track record.
                </p>
              </div>

              {/* Step 7 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>7.</span> Ask about strategy
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Before signing, a good agency should provide a high-level strategy or audit. If the
                  only question they ask is &quot;What is your budget?&quot; without understanding your
                  business, audience, and competitors, move on. A professional agency will come to the
                  first meeting with questions about your objectives, KPIs, and target audience, and will
                  propose a clear strategic approach.
                </p>
              </div>

              {/* Step 8 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>8.</span> Check the contract
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Watch for lock-in periods (maximum 3 months initially), cancellation terms, IP
                  ownership, and non-compete clauses. A fair contract allows you to exit with reasonable
                  notice, guarantees ownership of your data and creatives, and does not prevent you from
                  working with other agencies on complementary services.
                </p>
              </div>

              {/* Step 9 */}
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
                  style={{ fontSize: "1rem", marginBottom: "12px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>9.</span> Red flags to avoid
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
                    "Guaranteed results (\u201CWe\u2019ll get you #1 on Google\u201D)",
                    "No reporting or vague reports without clear metrics",
                    "Very cheap prices compared to market rates",
                    "No case studies or demonstrable portfolio",
                    "Aggressive sales tactics and pressure to sign quickly",
                    "One-size-fits-all packages for every type of business",
                    "Refusal to give you access to your own ad accounts",
                  ].map((flag) => (
                    <li
                      key={flag}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: "#ef4444", flexShrink: 0 }}>
                        &#10005;
                      </span>
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step 10 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>10.</span> Test with a small project
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Before committing to a long retainer, start with a Growth Sprint or a small project.
                  See how they communicate, deliver, and handle challenges. In 4-6 weeks, you will have a
                  clear picture of whether they are the right partner. This approach minimizes risk and
                  lets you evaluate the quality of work before making a major financial commitment.
                </p>
              </div>
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
                Let&apos;s discuss your goals
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
                Want to make sure you choose the right agency? Schedule a free consultation
                with our team and find out how we can help your business grow.
              </p>
              <Link
                href="/en/lets-talk/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Get in touch
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
              {RELATED.map((article) => (
                <Link
                  key={article.slug}
                  href={article.slug}
                  className="group"
                  style={{
                    display: "block",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    textDecoration: "none",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <div style={{ padding: "28px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: article.categoryColor,
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1.0625rem",
                        lineHeight: 1.3,
                        marginBottom: "14px",
                      }}
                    >
                      {article.title}
                    </h3>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "#56db84",
                      }}
                    >
                      Read
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </FadeInSection>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}

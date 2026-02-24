import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function LinkedInAdsB2BPage() {
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
            style={{ maxWidth: "820px" }}
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
                  color: "#56db84",
                }}
              >
                Paid Ads
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                February 1, 2026 · 10 min read
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
              LinkedIn Ads for B2B:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Is It Worth the Investment?
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
              The most expensive paid social platform, but also the one
              delivering the highest quality B2B leads. Here is when it makes
              sense and when it does not.
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
              The most expensive click in paid social
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              LinkedIn Ads is, without question, the most expensive social advertising platform available today.
              With an average CPC between <strong style={{ color: "#fff" }}>$3 and $12</strong>, you are
              paying 5-10x more per click than on Meta or Google Display. And yet, for B2B companies selling
              high-ticket products or services, the quality of leads generated through LinkedIn can be unmatched
              by any other platform.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              In this comprehensive guide, we break down when LinkedIn Ads makes sense, which ad formats
              actually work, how to set realistic budgets, and &mdash; equally important &mdash; when you are
              better off spending your money elsewhere. Everything based on real data from B2B campaigns we
              manage for our clients.
            </p>
          </FadeInSection>

          {/* Section: Why LinkedIn for B2B */}
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
              Why LinkedIn for B2B?
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              LinkedIn has over <strong style={{ color: "#fff" }}>900 million members</strong> globally,
              and what makes it unique is that decision-makers are actually active on the platform. They
              are not just passive profile holders &mdash; they post, comment, and engage with business
              content regularly. This means your ads appear in a context where people are already thinking
              about professional solutions and business decisions.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              Compared to Meta Ads, LinkedIn delivers up to{" "}
              <strong style={{ color: "#fff" }}>4x higher lead quality for B2B</strong>. The reason is
              straightforward: targeting is based on real professional data &mdash; job title, seniority,
              company size, industry &mdash; not estimated interests or scroll behavior. When you target
              &quot;VP of Engineering at SaaS companies with 50-200 employees,&quot; you get exactly that.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              For companies selling B2B solutions with deal sizes above $5,000, LinkedIn is often the single
              most effective paid channel for reaching qualified decision-makers. The higher cost per click
              is offset by dramatically higher conversion rates and deal values.
            </p>
          </FadeInSection>

          {/* Section: Ad formats */}
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
              LinkedIn ad formats compared
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "24px" }}>
              LinkedIn offers several ad formats, each with different strengths and cost profiles. Here is
              a complete comparison to help you choose the right format for your goals:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "24px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "600px",
                }}
              >
                <thead>
                  <tr>
                    {["Format", "Best For", "Avg CPC", "Avg CTR"].map(
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
                    [
                      "Sponsored Content (image)",
                      "Awareness, leads",
                      "\u20AC3\u20138",
                      "0.4\u20130.8%",
                    ],
                    [
                      "Sponsored Content (video)",
                      "Brand storytelling",
                      "\u20AC2\u20136",
                      "0.5\u20131.0%",
                    ],
                    [
                      "Message Ads (InMail)",
                      "Direct outreach",
                      "\u20AC0.3\u20130.8/send",
                      "25\u201335% open rate",
                    ],
                    [
                      "Lead Gen Forms",
                      "Lead generation",
                      "\u20AC5\u201315/lead",
                      "10\u201315% fill rate",
                    ],
                    [
                      "Document Ads",
                      "Thought leadership",
                      "\u20AC3\u20137",
                      "0.5\u20131.5%",
                    ],
                    [
                      "Text Ads",
                      "Budget-friendly",
                      "\u20AC2\u20135",
                      "0.02\u20130.05%",
                    ],
                  ].map(([format, best, cpc, ctr], i) => (
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
                        {format}
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
                        {cpc}
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
                        {ctr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Our recommendation: start with{" "}
              <strong style={{ color: "#fff" }}>Sponsored Content (image)</strong> for
              awareness and test{" "}
              <strong style={{ color: "#fff" }}>Lead Gen Forms</strong> for direct
              conversions. Video works exceptionally well for brands that already have
              market recognition and want to deepen engagement with their target audience.
            </p>
          </FadeInSection>

          {/* Section: Advanced targeting */}
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
              Advanced targeting: LinkedIn&apos;s secret weapon
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
              What truly sets LinkedIn Ads apart is the targeting precision. No other platform lets you
              reach your B2B audience with this level of accuracy:
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
                  title: "Job title, function, and seniority",
                  desc: "Target CEOs, CFOs, Heads of Marketing, VP Sales, or any other job title directly. Combine with seniority level (entry, senior, director, C-suite) for a laser-focused audience.",
                },
                {
                  title: "Company name, size, and industry",
                  desc: "Target employees of specific companies (Account-Based Marketing), companies of a certain size (1-10, 11-50, 51-200, 201-500, 500+), or within a specific industry vertical.",
                },
                {
                  title: "Skills and group membership",
                  desc: "Target people who have listed specific skills on their profile (e.g., 'SaaS', 'Supply Chain Management') or who are members of relevant professional groups.",
                },
                {
                  title: "Matched Audiences",
                  desc: "Retarget website visitors, upload email lists for direct targeting, and create lookalike audiences based on your existing customers. Combined with the filters above, these become extremely precise.",
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

            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              <strong style={{ color: "#fff" }}>Practical example:</strong> If you sell HR software
              to companies with 50-500 employees, you can target HR Managers, HR Directors, and CHROs
              at companies of that exact size, within relevant industries. On Meta Ads, this level of
              precision is simply not possible.
            </p>
          </FadeInSection>

          {/* Section: Realistic budgets and expectations */}
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
              Realistic budgets and expectations
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              This is where many businesses give up on LinkedIn Ads prematurely. The minimum budget to
              generate meaningful data and properly optimize campaigns is around{" "}
              <strong style={{ color: "#fff" }}>$1,500/month</strong>. Below this threshold, the algorithm
              does not have enough data to learn, and you will not have enough conversions to draw reliable
              conclusions.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              Cost per lead on LinkedIn typically ranges from{" "}
              <strong style={{ color: "#fff" }}>$20 to $80</strong>. Yes, that is significantly higher
              than Meta (where a B2B lead costs $5-25). But the critical difference is quality: a LinkedIn
              lead is usually a real decision-maker with a title, company, and budget. A Meta lead could
              be anyone who clicked on a form.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              When you calculate the <strong style={{ color: "#fff" }}>cost per qualified opportunity</strong>,
              LinkedIn often becomes more cost-effective than Meta and Google for B2B. If 1 in 5 LinkedIn
              leads becomes a qualified opportunity vs. 1 in 20 from Meta, the math reverses completely.
            </p>

            <div
              style={{
                padding: "24px",
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                marginTop: "24px",
              }}
            >
              <h3
                className="font-bold text-white"
                style={{
                  fontSize: "1rem",
                  marginBottom: "16px",
                }}
              >
                LinkedIn Ads B2B benchmarks:
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
                  ["Recommended minimum budget", "$1,500/month"],
                  ["Cost per lead (CPL)", "$20\u201380"],
                  ["Cost per qualified opportunity", "$100\u2013400"],
                  ["Lead \u2192 opportunity conversion rate", "15\u201330%"],
                  ["Avg CPC (Sponsored Content)", "$3\u201312"],
                  ["Avg CTR (Sponsored Content)", "0.4\u20130.8%"],
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
              </ul>
            </div>
          </FadeInSection>

          {/* Section: When LinkedIn Ads are NOT worth it */}
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
              When LinkedIn Ads are NOT worth it
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "16px" }}>
              Not every B2B company should be running LinkedIn Ads. In the following situations, your
              budget is better allocated to other channels:
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
                "B2C products or services with an average ticket below $500 — your cost per acquisition will be too high",
                "Advertising budget under $1,000/month — you will not have enough data to optimize effectively",
                "Broad targeting without a clearly defined buyer persona — you will waste budget on irrelevant audiences",
                "Local services with a limited geographic area — Google Ads Local or Meta Ads will be more efficient",
                "Products that require impulse decisions — LinkedIn is for rational, long-cycle purchase decisions",
                "No valuable content assets (case studies, whitepapers) — without a strong lead magnet, conversion rates will suffer",
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
                  <span style={{ color: "#ef4444", flexShrink: 0 }}>
                    &#10007;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              In these cases, we recommend a combination of{" "}
              <strong style={{ color: "#fff" }}>Google Ads (Search)</strong> for active intent and{" "}
              <strong style={{ color: "#fff" }}>Meta Ads</strong> for awareness and retargeting. Your
              cost per lead will be significantly lower and volume higher &mdash; even if the qualification
              rate is lower.
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
                Generate B2B leads
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
                Want to reach decision-makers in your industry? Our LinkedIn Ads
                team builds B2B campaigns with precise targeting and optimized
                cost per lead.
              </p>
              <Link
                href="/en/linkedin-en/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Discover LinkedIn Ads
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
                  Facebook Ads vs Google Ads: Which to Choose for Your Online Store?
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
                  How to Choose a Digital Marketing Agency in 2026
                </h3>
                <Link
                  href="/en/blog/how-to-choose-marketing-agency/"
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

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
                "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)",
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
                background: "rgba(168,85,247,0.10)",
                color: "#a855f7",
                border: "1px solid rgba(168,85,247,0.18)",
              }}
            >
              Web Design
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              February 22, 2026 &middot; 10 min read
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
              How Much Does a Website Cost in 2026?{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #a855f7 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Complete Price Guide
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
              From landing pages to complex web applications &mdash; prices
              range from &euro;500 to &euro;100,000+. Find out exactly what you
              should pay and why.
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
                &ldquo;How much does a website cost?&rdquo; &mdash; it is the
                number one question we hear from entrepreneurs, startups and
                established companies alike. The honest answer is: it depends.
                In 2026, the price of a website can range from{" "}
                <strong style={{ color: "#fff" }}>&euro;500</strong> for a
                simple landing page to{" "}
                <strong style={{ color: "#fff" }}>&euro;100,000+</strong> for a
                complex web application.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                This huge price gap is not random &mdash; it depends on the type
                of website, design complexity, required features and who builds
                it. In this guide, we break down every category of website, the
                real costs across the European market, and the hidden expenses
                most clients only discover after signing the contract.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Price factors */}
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
                Factors that influence website pricing
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Before we look at concrete numbers, you need to understand what
                makes a website cost &euro;2,000 or &euro;20,000. Here are the
                main factors that determine the final budget:
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
                    title: "Type of website",
                    desc: "A single-page landing page is fundamentally different from an online store with 5,000 products. Structural complexity is the biggest cost driver.",
                  },
                  {
                    title: "Design: template vs. custom",
                    desc: "A pre-made template costs between \u20AC50\u2013200 and can be customized quickly. A custom design, built from scratch, starts at \u20AC1,500 and can reach tens of thousands.",
                  },
                  {
                    title: "Number of pages",
                    desc: "Every additional page means design, copywriting, SEO optimization and testing. A 5-page site takes days; a 50-page site takes months.",
                  },
                  {
                    title: "Special functionalities",
                    desc: "Booking systems, payment gateways, CRM integrations, live chat, client portals, dashboards \u2014 each one adds complexity and cost.",
                  },
                  {
                    title: "CMS choice",
                    desc: "WordPress is the most affordable option. Shopify simplifies e-commerce but comes with monthly fees. Custom solutions (Next.js, Laravel) offer maximum flexibility but require specialized developers.",
                  },
                  {
                    title: "SEO & performance optimization",
                    desc: "A fast, search-engine-optimized site requires additional technical work: URL structure, meta tags, schema markup, Core Web Vitals, image compression.",
                  },
                  {
                    title: "Content creation",
                    desc: "Professional copywriting, product photography, videos \u2014 quality content is the difference between a site that converts and one that just exists.",
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

          {/* Section: Price table by website type */}
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
                Price table by website type
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                We have compiled the average prices across the European market
                for 2026, based on our experience and industry data:
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
                      {["Website type", "Price (EUR)", "Timeline", "Best for"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #a855f7",
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
                      [
                        "Landing page",
                        "\u20AC500 \u2013 \u20AC2,000",
                        "1\u20132 weeks",
                        "Campaigns, product launches",
                      ],
                      [
                        "Presentation site (5\u201310 pages)",
                        "\u20AC2,000 \u2013 \u20AC5,000",
                        "3\u20136 weeks",
                        "SMBs, service businesses",
                      ],
                      [
                        "Corporate website",
                        "\u20AC5,000 \u2013 \u20AC15,000",
                        "6\u201312 weeks",
                        "Medium-sized businesses",
                      ],
                      [
                        "E-commerce (Shopify/WooCommerce)",
                        "\u20AC3,000 \u2013 \u20AC15,000",
                        "4\u201310 weeks",
                        "Online retail",
                      ],
                      [
                        "Custom e-commerce",
                        "\u20AC10,000 \u2013 \u20AC50,000+",
                        "12\u201324 weeks",
                        "Large catalogs",
                      ],
                      [
                        "Web application",
                        "\u20AC15,000 \u2013 \u20AC100,000+",
                        "12\u201340 weeks",
                        "SaaS, platforms",
                      ],
                    ].map(([type, price, timeline, bestFor], i) => (
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
                          {type}
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
                          {timeline}
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
                These prices include design, development and basic
                configuration, but typically do not cover content (copywriting,
                photography) or post-launch marketing. A solid presentation site
                starts at around{" "}
                <strong style={{ color: "#fff" }}>&euro;2,000</strong> while a
                professional Shopify or WooCommerce store sits between{" "}
                <strong style={{ color: "#fff" }}>
                  &euro;3,000 and &euro;15,000
                </strong>{" "}
                depending on catalog size and custom features.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Hidden costs */}
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
                Hidden costs nobody tells you about
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The upfront price of a website is just the tip of the iceberg.
                Most businesses discover only after launch that there are
                recurring costs that add up quickly. Here is what you should
                budget for monthly:
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
                  Recurring monthly costs:
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
                    ["Hosting", "\u20AC10 \u2013 \u20AC100/month"],
                    ["Domain name (.com / .eu)", "\u20AC10 \u2013 \u20AC30/year"],
                    ["SSL certificate", "Free \u2013 \u20AC200/year"],
                    ["Maintenance & updates", "\u20AC50 \u2013 \u20AC300/month"],
                    ["Content updates", "\u20AC100 \u2013 \u20AC500/month"],
                    ["Premium plugins & licenses", "\u20AC20 \u2013 \u20AC200/month"],
                    ["Security monitoring", "\u20AC30 \u2013 \u20AC150/month"],
                    ["Automated backups", "\u20AC10 \u2013 \u20AC50/month"],
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
                      color: "#a855f7",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Estimated monthly total</span>
                    <span>&euro;230 &ndash; &euro;1,300/month</span>
                  </li>
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                A &ldquo;free&rdquo; or extremely cheap website at launch can
                become expensive long-term if you have not budgeted for these
                ongoing expenses from the start. Professional agencies typically
                include a maintenance package in their offering, which
                simplifies budgeting and ensures your site stays{" "}
                <strong style={{ color: "#fff" }}>
                  secure, fast and up to date
                </strong>
                .
              </p>
            </div>
          </FadeInSection>

          {/* Section: Freelancer vs Agency vs DIY */}
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
                Freelancer vs. Agency vs. DIY
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Beyond the type of website, who builds it has a major impact on
                price, quality and delivery timeline. Here is how the three main
                options compare:
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
                      {["Criteria", "DIY (Wix, Squarespace)", "Freelancer", "Agency"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #a855f7",
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
                      [
                        "Price",
                        "\u20AC0 \u2013 \u20AC500",
                        "\u20AC500 \u2013 \u20AC5,000",
                        "\u20AC2,000 \u2013 \u20AC50,000+",
                      ],
                      [
                        "Design quality",
                        "Limited templates",
                        "Good, but depends on the individual",
                        "Premium, custom-built from scratch",
                      ],
                      [
                        "Delivery time",
                        "A few days",
                        "2\u20136 weeks",
                        "4\u201316 weeks",
                      ],
                      [
                        "Post-launch support",
                        "Self-service",
                        "Limited, no guarantees",
                        "Maintenance contract, SLA",
                      ],
                      [
                        "SEO & performance",
                        "Basic",
                        "Variable",
                        "Full optimization included",
                      ],
                      [
                        "Scalability",
                        "Limited by platform",
                        "Moderate",
                        "Maximum \u2013 scalable architecture",
                      ],
                      [
                        "Best for",
                        "Hobby, quick idea validation",
                        "Small budget, simple projects",
                        "Serious business, long-term ROI",
                      ],
                    ].map(([criteria, diy, freelancer, agency], i) => (
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
                          {criteria}
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
                          {diy}
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
                          {freelancer}
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
                          {agency}
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
                A DIY platform can be a good solution for a personal blog or a
                quick market test. But if your website is meant to generate
                leads or sales for your business, investing in an experienced
                freelancer or an agency pays for itself quickly through{" "}
                <strong style={{ color: "#fff" }}>
                  higher conversions, better SEO and a professional image
                </strong>{" "}
                that builds trust with potential customers.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Why prices vary so much */}
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
                Why prices vary so much
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A &euro;1,000 website and a &euro;10,000 website can look
                similar on the surface &mdash; but the differences under the
                hood are enormous. Cheap websites typically come with{" "}
                <strong style={{ color: "#fff" }}>unoptimized code</strong> that
                loads slowly,{" "}
                <strong style={{ color: "#fff" }}>
                  no proper SEO structure
                </strong>
                , no mobile testing, inadequate security and no documentation.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A professional website includes:{" "}
                <strong style={{ color: "#fff" }}>
                  data-driven UX architecture
                </strong>
                , responsive design tested on 10+ devices, loading speed under 2
                seconds, complete SEO structure (schema markup, XML sitemap,
                canonical tags), analytics and CRM integrations, and clean code
                that allows future expansion.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Think of it this way: a cheap website is an expense. A
                professional website is an{" "}
                <strong style={{ color: "#fff" }}>investment</strong> that
                generates revenue for years. A well-built presentation site can
                generate leads worth tens of thousands of euros per year &mdash;
                often paying for itself within the first 3&ndash;6 months.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Additionally, a cheap website often requires a{" "}
                <strong style={{ color: "#fff" }}>complete rebuild</strong>{" "}
                after 1&ndash;2 years when its limitations become apparent. A
                professional website has a lifespan of 4&ndash;5 years with
                proper maintenance &mdash; the actual cost per year ends up
                being lower.
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
                Want a professional website?
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
                We build websites that look stunning, load fast and convert
                visitors into customers. From landing pages to complex
                e-commerce platforms.
              </p>
              <Link href="/en/webdesign/" className="btn-primary">
                View webdesign services <ArrowRight size={16} />
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
                    How much does Google Ads cost? Complete price guide
                  </h3>
                  <Link
                    href="/en/blog/how-much-does-google-ads-cost/"
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
                    How much does an in-house specialist cost vs. a marketing
                    agency?
                  </h3>
                  <Link
                    href="/en/blog/cost-internal-specialist-vs-agency/"
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

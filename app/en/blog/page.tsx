"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "strategy", label: "Strategy", color: "#3b82f6" },
  { key: "paid-ads", label: "Paid Ads", color: "#56db84" },
  { key: "seo", label: "SEO", color: "#14b8a6" },
  { key: "ecommerce", label: "E-commerce", color: "#f59e0b" },
  { key: "web-design", label: "Web Design", color: "#a855f7" },
  { key: "automation", label: "Automation", color: "#ec4899" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

const ARTICLES: {
  slug: string;
  title: string;
  excerpt: string;
  category: CategoryKey;
  categoryLabel: string;
  categoryColor: string;
  image: string;
  date: string;
  readTime: string;
}[] = [
  {
    slug: "/en/blog/how-to-build-sales-funnel/",
    title: "How to Build a Complete Sales Funnel",
    excerpt: "Step-by-step guide to building an effective sales funnel — from TOFU to BOFU — with the best tools recommended at each stage.",
    category: "strategy",
    categoryLabel: "Strategy",
    categoryColor: "#3b82f6",
    image: "/blog/cum-construiesti-funnel-vanzari.jpg",
    date: "Mar 3, 2026",
    readTime: "13 min",
  },
  {
    slug: "/en/blog/whatsapp-business-sales-support/",
    title: "How to Use WhatsApp Business for Sales and Support",
    excerpt: "Complete WhatsApp Business API guide: setup, automation flows, conversion strategies, and best practices for sales and customer support.",
    category: "automation",
    categoryLabel: "Automation",
    categoryColor: "#ec4899",
    image: "/blog/whatsapp-business-vanzari-suport.png",
    date: "Mar 2, 2026",
    readTime: "10 min",
  },
  {
    slug: "/en/blog/best-ai-tools-digital-marketing/",
    title: "Best AI Tools for Digital Marketing in 2026",
    excerpt: "From ad creative to SEO and analytics — the best AI tools organized by use case, with detailed reviews and comparisons.",
    category: "automation",
    categoryLabel: "Automation",
    categoryColor: "#ec4899",
    image: "/blog/cele-mai-bune-tool-uri-ai-marketing.jpg",
    date: "Mar 1, 2026",
    readTime: "11 min",
  },
  {
    slug: "/en/blog/how-to-create-sell-online-courses/",
    title: "How to Create and Sell Online Courses in 2026",
    excerpt: "From idea validation to launch and marketing — complete guide with platform comparison and tested strategies for creating and selling online courses.",
    category: "strategy",
    categoryLabel: "Strategy",
    categoryColor: "#3b82f6",
    image: "/blog/cum-creezi-vinzi-cursuri-online.jpg",
    date: "Feb 28, 2026",
    readTime: "14 min",
  },
  {
    slug: "/en/blog/best-landing-page-builders/",
    title: "Best Landing Page Builders for Higher Conversions",
    excerpt: "When you need a landing page builder, what features matter, and which are the best options — with detailed comparison and reviews.",
    category: "web-design",
    categoryLabel: "Web Design",
    categoryColor: "#a855f7",
    image: "/blog/cele-mai-bune-landing-page-builders.png",
    date: "Feb 27, 2026",
    readTime: "10 min",
  },
  {
    slug: "/en/blog/marketing-automation-tools-guide/",
    title: "How to Automate Your Marketing: Complete Tools Guide",
    excerpt: "What to automate at each business stage and which tools to use — from email and chatbots to analytics and ad management.",
    category: "automation",
    categoryLabel: "Automation",
    categoryColor: "#ec4899",
    image: "/blog/automatizare-marketing-ghid-tools.png",
    date: "Feb 26, 2026",
    readTime: "13 min",
  },
  {
    slug: "/en/blog/best-chatbot-live-chat-tools/",
    title: "Best Chatbot and Live Chat Tools for Websites",
    excerpt: "Complete guide with comparison: when to use a chatbot, when live chat, and which are the best tools for each scenario.",
    category: "automation",
    categoryLabel: "Automation",
    categoryColor: "#ec4899",
    image: "/blog/cele-mai-bune-chatbot-live-chat.png",
    date: "Feb 25, 2026",
    readTime: "11 min",
  },
  {
    slug: "/en/blog/best-email-marketing-platforms/",
    title: "Best Email Marketing Platforms in 2026",
    excerpt: "Detailed comparison of the most popular email marketing platforms: features, pricing, and who each one is best for.",
    category: "automation",
    categoryLabel: "Automation",
    categoryColor: "#ec4899",
    image: "/blog/cele-mai-bune-platforme-email-marketing.png",
    date: "Feb 24, 2026",
    readTime: "12 min",
  },
  {
    slug: "/en/blog/geo-optimization-ai-search/",
    title: "How to Appear in ChatGPT and Google AI Overviews (GEO)",
    excerpt: "Complete guide to Generative Engine Optimization: how to optimize your content to appear in AI results — from ChatGPT to Google AI Overviews.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/geo-optimizare-ai-search.png",
    date: "Feb 23, 2026",
    readTime: "11 min",
  },
  {
    slug: "/en/blog/how-much-does-a-website-cost/",
    title: "How Much Does a Website Cost in 2026? Complete Price Guide",
    excerpt: "From presentation sites to online stores — we analyze real web development prices and what influences the final cost.",
    category: "web-design",
    categoryLabel: "Web Design",
    categoryColor: "#a855f7",
    image: "/blog/cat-costa-un-site-web.png",
    date: "Feb 22, 2026",
    readTime: "10 min",
  },
  {
    slug: "/en/blog/how-much-does-google-ads-cost/",
    title: "How Much Does Google Ads Cost? Budget Guide 2026",
    excerpt: "Average CPC by industry, recommended minimum budgets, and how to calculate your ROI before investing your first dollar in Google Ads.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/cat-costa-google-ads-romania.png",
    date: "Feb 21, 2026",
    readTime: "9 min",
  },
  {
    slug: "/en/blog/cost-internal-specialist-vs-agency/",
    title: "How Much Does an In-House Specialist Cost vs. a Marketing Agency?",
    excerpt: "Detailed cost comparison: salary, taxes, tools, management — vs. an all-inclusive agency package. The real numbers nobody shows you.",
    category: "strategy",
    categoryLabel: "Strategy",
    categoryColor: "#3b82f6",
    image: "/blog/cost-specialist-vs-agentie.jpg",
    date: "Feb 20, 2026",
    readTime: "8 min",
  },
  {
    slug: "/en/blog/cart-abandonment-fix/",
    title: "Why Customers Abandon Their Cart (And How to Fix It)",
    excerpt: "73% of carts are abandoned. Discover the most common causes and 8 proven strategies to recover lost sales.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    categoryColor: "#f59e0b",
    image: "/blog/abandon-cos-cumparaturi.png",
    date: "Feb 19, 2026",
    readTime: "9 min",
  },
  {
    slug: "/en/blog/why-meta-ads-dont-work/",
    title: "Why Your Meta Ads Aren't Working: 7 Common Mistakes",
    excerpt: "If you're throwing money at Facebook and Instagram Ads with no results, the platform isn't the problem. Discover the 7 mistakes sabotaging your campaigns.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/de-ce-nu-merg-meta-ads.jpg",
    date: "Feb 18, 2026",
    readTime: "10 min",
  },
  {
    slug: "/en/blog/local-seo-google-maps/",
    title: "Local SEO: How to Rank First on Google in Your City",
    excerpt: "From Google Business Profile to reviews and local citations — step-by-step guide to dominating local results and Google Maps.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/seo-local-google-maps.png",
    date: "Feb 17, 2026",
    readTime: "10 min",
  },
  {
    slug: "/en/blog/facebook-ads-vs-google-ads-ecommerce/",
    title: "Facebook Ads vs Google Ads: Which to Choose for Your Online Store?",
    excerpt: "Direct comparison between the two advertising platforms for e-commerce: costs, audiences, formats, ROI and when to use each one.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/facebook-ads-vs-google-ads-ecommerce.png",
    date: "Feb 16, 2026",
    readTime: "11 min",
  },
  {
    slug: "/en/blog/seo-vs-google-ads/",
    title: "SEO vs. Google Ads: What to Choose on a Limited Budget?",
    excerpt: "Organic or paid traffic? We analyze the costs, timeline, and ROI of each strategy so you can make the right decision for your business.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/seo-vs-google-ads.jpg",
    date: "Feb 15, 2026",
    readTime: "9 min",
  },
  {
    slug: "/en/blog/ai-overviews-seo-impact/",
    title: "How AI Overviews Affect SEO and What You Should Do",
    excerpt: "Google AI Overviews are changing the rules. Learn how they impact organic traffic and what new strategies you need to adopt to stay visible.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/ai-overviews-impact-seo.png",
    date: "Feb 14, 2026",
    readTime: "8 min",
  },
  {
    slug: "/en/blog/what-is-growth-sprint/",
    title: "What Is a Growth Sprint and How It Accelerates Growth",
    excerpt: "The 6-week framework that combines strategy, execution, and optimization into a single sprint focused on measurable results.",
    category: "strategy",
    categoryLabel: "Strategy",
    categoryColor: "#3b82f6",
    image: "/blog/ce-este-growth-sprint.png",
    date: "Feb 13, 2026",
    readTime: "7 min",
  },
  {
    slug: "/en/blog/tiktok-ads-guide/",
    title: "How to Run TikTok Ads: Complete Guide for 2026",
    excerpt: "From account setup to creative formats and targeting — everything you need to know to launch profitable TikTok Ads campaigns.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/reclame-tiktok-romania.png",
    date: "Feb 12, 2026",
    readTime: "12 min",
  },
  {
    slug: "/en/blog/how-to-choose-marketing-agency/",
    title: "How to Choose the Right Marketing Agency: 10-Step Checklist",
    excerpt: "Objective criteria, red flags to avoid, and the questions you need to ask before signing a contract with a digital marketing agency.",
    category: "strategy",
    categoryLabel: "Strategy",
    categoryColor: "#3b82f6",
    image: "/blog/cum-alegi-agentie-marketing.png",
    date: "Feb 11, 2026",
    readTime: "9 min",
  },
  {
    slug: "/en/blog/conversion-rate-guide/",
    title: "Conversion Rate: What It Is, How to Calculate It, How to Improve It",
    excerpt: "Complete CRO guide: from definition and industry benchmarks to 12 tested techniques that increase your website's conversion rate.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    categoryColor: "#f59e0b",
    image: "/blog/rata-de-conversie-ghid.jpg",
    date: "Feb 9, 2026",
    readTime: "10 min",
  },
  {
    slug: "/en/blog/increase-online-store-sales/",
    title: "15 Proven Strategies to Increase Online Store Sales",
    excerpt: "From product page optimization to automated email flows — concrete strategies with real examples for growing e-commerce revenue.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    categoryColor: "#f59e0b",
    image: "/blog/creste-vanzari-magazin-online.png",
    date: "Feb 8, 2026",
    readTime: "13 min",
  },
  {
    slug: "/en/blog/digital-marketing-strategy-guide/",
    title: "Digital Marketing Strategy Step by Step (2026 Guide)",
    excerpt: "How to build a digital marketing strategy from scratch: objectives, channels, budget, KPIs and execution calendar — all in one framework.",
    category: "strategy",
    categoryLabel: "Strategy",
    categoryColor: "#3b82f6",
    image: "/blog/strategie-marketing-digital-ghid.jpg",
    date: "Feb 6, 2026",
    readTime: "14 min",
  },
  {
    slug: "/en/blog/email-marketing-ecommerce/",
    title: "Email Marketing for Ecommerce: How to Boost Sales with Newsletters",
    excerpt: "Automated flows, segmentation, A/B testing, and the 7 essential emails every online store needs to have configured.",
    category: "automation",
    categoryLabel: "Automation",
    categoryColor: "#ec4899",
    image: "/blog/email-marketing-ecommerce.png",
    date: "Feb 5, 2026",
    readTime: "11 min",
  },
  {
    slug: "/en/blog/why-digital-marketing-not-working/",
    title: "Why Your Digital Marketing Isn't Working",
    excerpt: "10 real reasons your campaigns aren't delivering results — and concrete solutions for each problem, tested across dozens of clients.",
    category: "strategy",
    categoryLabel: "Strategy",
    categoryColor: "#3b82f6",
    image: "/blog/de-ce-nu-functioneaza-marketingul.png",
    date: "Feb 3, 2026",
    readTime: "8 min",
  },
  {
    slug: "/en/blog/linkedin-ads-b2b/",
    title: "LinkedIn Ads for B2B: Is It Worth the Investment?",
    excerpt: "Real costs, ad formats, advanced targeting, and case studies — everything you need to know about LinkedIn Ads for B2B lead generation.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/linkedin-ads-b2b-romania.png",
    date: "Feb 1, 2026",
    readTime: "10 min",
  },
  {
    slug: "/en/blog/performance-max-ecommerce/",
    title: "Performance Max 2026: Complete Guide for Online Stores",
    excerpt: "How Performance Max campaigns work, how to set them up correctly for e-commerce, and the 5 mistakes wasting your budget.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/performance-max-ecommerce.png",
    date: "Jan 30, 2026",
    readTime: "11 min",
  },
  {
    slug: "/en/blog/ai-in-marketing-2026/",
    title: "How Companies Use AI in Marketing in 2026",
    excerpt: "From content generation to campaign optimization — how to implement artificial intelligence in your marketing without losing control.",
    category: "automation",
    categoryLabel: "Automation",
    categoryColor: "#ec4899",
    image: "/blog/ai-in-marketing-2026.png",
    date: "Jan 28, 2026",
    readTime: "9 min",
  },
  {
    slug: "/en/blog/retargeting-remarketing-guide/",
    title: "Retargeting and Remarketing: How to Win Back Lost Customers",
    excerpt: "Retargeting strategies on Google, Meta, and email that turn visitors who left into paying customers — with concrete audience examples.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/retargeting-remarketing.png",
    date: "Jan 26, 2026",
    readTime: "10 min",
  },
  {
    slug: "/en/blog/how-to-choose-crm/",
    title: "How to Choose and Implement a CRM in 2026",
    excerpt: "HubSpot vs Salesforce vs Pipedrive comparison, selection criteria, and step-by-step implementation guide for small and medium teams.",
    category: "automation",
    categoryLabel: "Automation",
    categoryColor: "#ec4899",
    image: "/blog/cum-alegi-crm.png",
    date: "Jan 24, 2026",
    readTime: "12 min",
  },
];

export default function BlogPage() {
  const [active, setActive] = useState<CategoryKey>("all");
  const filtered =
    active === "all" ? ARTICLES : ARTICLES.filter((a) => a.category === active);
  const [featured, ...rest] = filtered;

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
          <div className="relative page-container">
            <span className="badge mb-6">Blog</span>
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                marginTop: "16px",
                marginBottom: "24px",
                maxWidth: "700px",
              }}
            >
              Insights &{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Strategies.
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Practical articles about digital marketing, tested on real
              budgets. No fluff, just what works.
            </p>
          </div>
        </section>

        {/* ── Category Filter ── */}
        <section className="page-container" style={{ paddingBottom: "48px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {CATEGORIES.map((cat) => {
              const isActive = active === cat.key;
              const accentColor =
                cat.key === "all" ? "#56db84" : cat.color;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "100px",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: isActive
                      ? `1px solid ${accentColor}`
                      : "1px solid rgba(255,255,255,0.08)",
                    background: isActive
                      ? `${accentColor}15`
                      : "rgba(255,255,255,0.03)",
                    color: isActive
                      ? accentColor
                      : "rgba(255,255,255,0.45)",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Articles Grid ── */}
        <section
          className="page-container"
          style={{ paddingBottom: "120px" }}
        >
          {featured && (
            <>
              {/* Featured Article */}
              <Link
                href={featured.slug}
                className="group"
                style={{
                  display: "block",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginBottom: "24px",
                  textDecoration: "none",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.06)";
                }}
              >
                <div
                  className="grid grid-cols-1 lg:grid-cols-2"
                  style={{ minHeight: "340px" }}
                >
                  <div
                    style={{
                      position: "relative",
                      minHeight: "240px",
                      background: "#111",
                    }}
                  >
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "40px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: featured.categoryColor,
                        }}
                      >
                        {featured.categoryLabel}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.25)",
                        }}
                      >
                        {featured.date} · {featured.readTime}
                      </span>
                    </div>
                    <h2
                      className="font-bold text-white"
                      style={{
                        fontSize: "1.5rem",
                        lineHeight: 1.25,
                        letterSpacing: "-0.02em",
                        marginBottom: "14px",
                      }}
                    >
                      {featured.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.7,
                        marginBottom: "24px",
                      }}
                    >
                      {featured.excerpt}
                    </p>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#56db84",
                      }}
                    >
                      Read article
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </Link>

              {/* 2-col grid for remaining */}
              {rest.length > 0 && (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {rest.map((article) => (
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
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.06)";
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          height: "200px",
                          background: "#111",
                        }}
                      >
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div style={{ padding: "28px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "12px",
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
                            {article.categoryLabel}
                          </span>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: "rgba(255,255,255,0.25)",
                            }}
                          >
                            {article.date} · {article.readTime}
                          </span>
                        </div>
                        <h3
                          className="font-bold text-white"
                          style={{
                            fontSize: "1.1875rem",
                            lineHeight: 1.3,
                            letterSpacing: "-0.015em",
                            marginBottom: "10px",
                          }}
                        >
                          {article.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "rgba(255,255,255,0.38)",
                            lineHeight: 1.65,
                            marginBottom: "20px",
                          }}
                        >
                          {article.excerpt}
                        </p>
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
              )}
            </>
          )}
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}

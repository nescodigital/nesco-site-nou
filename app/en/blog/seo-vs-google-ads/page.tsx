import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#14b8a6";

const RELATED = [
  {
    slug: "/en/blog/cost-internal-specialist-vs-agency/",
    title: "How Much Does an In-House Specialist Cost vs. a Marketing Agency?",
    category: "Strategy",
    categoryColor: "#3b82f6",
    image: "/blog/cost-specialist-vs-agentie.jpg",
    date: "Feb 20, 2026",
    readTime: "8 min",
  },
  {
    slug: "/en/blog/why-meta-ads-dont-work/",
    title: "Why Your Meta Ads Aren't Working: 7 Common Mistakes",
    category: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/de-ce-nu-merg-meta-ads.jpg",
    date: "Feb 18, 2026",
    readTime: "10 min",
  },
];

export default function SeoVsGoogleAdsPage() {
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
                "radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)",
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
                SEO
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                Feb 15, 2026 · 9 min read
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
              SEO vs. Google Ads:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #14b8a6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                What to Choose?
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
              Organic or paid traffic? We analyze the costs, timeline, and ROI of
              each strategy so you can make the right decision for your business
              when the budget is tight.
            </p>
          </div>
        </section>

        {/* ── Article Content ── */}
        <section
          className="page-container"
          style={{ maxWidth: "720px", paddingBottom: "80px" }}
        >
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
              The eternal debate: organic vs. paid
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Every business with a website faces this question eventually: should you invest in SEO to rank
              organically in Google, or should you pay for Google Ads to appear at the top immediately? The answer
              is not as straightforward as most SEO agencies or Google Ads specialists want you to believe —
              because both have strong merits and significant limitations.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              In this article, we break down the real costs, realistic timelines, expected ROI, and strategic
              considerations for each approach. No bias toward either side — just data-driven analysis to help
              you allocate your limited marketing budget wisely.
            </p>
          </FadeInSection>

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
              What is SEO and how does it really work?
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Search Engine Optimization (SEO) is the process of improving your website so it ranks higher in
              Google&apos;s organic (non-paid) results. When someone searches for &quot;best CRM for small businesses&quot;
              and your article appears on page one without a &quot;Sponsored&quot; label, that is SEO at work.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The mechanics:</strong> SEO involves three pillars — technical SEO (site speed,
              crawlability, mobile experience), on-page SEO (content quality, keyword optimization, internal
              linking), and off-page SEO (backlinks, brand mentions, domain authority). All three need to work
              together for meaningful results.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The business model:</strong> SEO is a compound investment. You pay upfront (time,
              content, technical work), see almost nothing for 3-6 months, then traffic grows exponentially — and
              continues to deliver value for years with minimal maintenance. A blog post you publish today can
              generate leads 36 months from now at zero additional cost. That is the power of compound organic
              growth.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Typical investment:</strong> Professional SEO services cost $1,000-$5,000/month for
              most SMBs. Add content production ($500-$2,000/month for quality articles). The true cost in month
              one is the same as in month twelve — but the output is dramatically different.
            </p>
          </FadeInSection>

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
              What is Google Ads and how does it really work?
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Google Ads is Google&apos;s pay-per-click advertising platform. You bid on keywords, and when someone
              searches for those terms, your ad appears above the organic results. You pay only when someone
              clicks — typically between $1 and $15 per click for most industries, though competitive keywords
              like &quot;personal injury lawyer&quot; or &quot;insurance quotes&quot; can exceed $50-$100 per click.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The mechanics:</strong> Google Ads operates on an auction system. Your ad rank depends
              on your bid amount multiplied by your Quality Score (which factors in expected CTR, ad relevance,
              and landing page experience). Higher Quality Scores mean you pay less per click — so there is still
              a skill and optimization component.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The business model:</strong> Google Ads is a linear investment. You put in $1,000,
              you get X clicks and Y conversions. Put in $2,000, you get roughly 2X clicks and 2Y conversions.
              The moment you stop paying, traffic drops to zero instantly. There is no residual value, no
              compounding, no long-term asset.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Typical investment:</strong> Ad spend varies enormously, but most SMBs allocate
              $2,000-$10,000/month in ad spend plus $500-$2,000/month for management (agency or specialist).
              Results can be visible within days of launching.
            </p>
          </FadeInSection>

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
              Timeline comparison: What to expect month by month
            </h2>
            <div style={{ overflowX: "auto", marginTop: "24px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9375rem",
                }}
              >
                <thead>
                  <tr style={{ background: "#111" }}>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        color: "#fff",
                        fontWeight: 700,
                        borderBottom: `2px solid ${CATEGORY_COLOR}`,
                      }}
                    >
                      Period
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        color: "#fff",
                        fontWeight: 700,
                        borderBottom: `2px solid ${CATEGORY_COLOR}`,
                      }}
                    >
                      SEO
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        color: "#fff",
                        fontWeight: 700,
                        borderBottom: `2px solid ${CATEGORY_COLOR}`,
                      }}
                    >
                      Google Ads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Month 1",
                      "Audit, strategy, technical fixes. No visible traffic increase.",
                      "Campaigns live within days. First leads within 1-2 weeks.",
                    ],
                    [
                      "Month 2-3",
                      "Content published, indexing begins. Slight ranking movement for low-competition terms.",
                      "Learning phase ends. Optimization begins. CPA starts to stabilize.",
                    ],
                    [
                      "Month 4-6",
                      "Rankings climbing. 20-50% traffic increase on targeted pages. First organic leads.",
                      "Consistent lead flow. A/B testing refines CPA. Budget scaling possible.",
                    ],
                    [
                      "Month 7-9",
                      "Compound growth kicks in. 100-200% traffic increase. Multiple pages ranking page 1.",
                      "Performance plateaus at optimized CPA. Diminishing returns on budget increases.",
                    ],
                    [
                      "Month 10-12",
                      "Strong organic presence. Cost per lead decreasing month over month. Authority established.",
                      "Steady performance, but cost per lead stays flat. Traffic stops if budget stops.",
                    ],
                  ].map(([period, seo, ads], i) => (
                    <tr key={i} style={{ background: "#0a0a0a" }}>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.7)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {period}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.5)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {seo}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.5)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {ads}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInSection>

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
              ROI comparison: Investment vs. return
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Let us run a realistic scenario. A mid-size B2B company investing $3,000/month in either strategy.
            </p>
            <div style={{ overflowX: "auto", marginTop: "24px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9375rem",
                }}
              >
                <thead>
                  <tr style={{ background: "#111" }}>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        color: "#fff",
                        fontWeight: 700,
                        borderBottom: `2px solid ${CATEGORY_COLOR}`,
                      }}
                    >
                      Metric
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        color: "#fff",
                        fontWeight: 700,
                        borderBottom: `2px solid ${CATEGORY_COLOR}`,
                      }}
                    >
                      SEO (at 12 months)
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        color: "#fff",
                        fontWeight: 700,
                        borderBottom: `2px solid ${CATEGORY_COLOR}`,
                      }}
                    >
                      Google Ads (at 12 months)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Total invested", "$36,000", "$36,000 (+ $24,000 ad spend)"],
                    ["Monthly organic traffic", "5,000 – 15,000 visits", "0 (stops when ads stop)"],
                    ["Monthly paid traffic", "0", "2,000 – 4,000 visits"],
                    ["Cost per lead (month 12)", "$15 – $40 (declining)", "$40 – $120 (flat)"],
                    ["Leads per month (month 12)", "50 – 150", "30 – 80"],
                    ["Residual value if paused", "Traffic continues 6-12+ months", "Zero — immediate drop"],
                    ["Long-term asset created", "Yes — content, authority, rankings", "No — rented visibility"],
                  ].map(([metric, seo, ads], i) => (
                    <tr key={i} style={{ background: "#0a0a0a" }}>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.7)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          fontWeight: 600,
                        }}
                      >
                        {metric}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.5)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {seo}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.5)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {ads}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "20px" }}>
              The numbers are clear: at the 12-month mark, SEO typically delivers a lower cost per lead, higher
              volume, and a lasting asset. But Google Ads delivers leads from day one. That timing difference is
              why the choice depends on your situation.
            </p>
          </FadeInSection>

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
              Choose SEO when...
            </h2>
            <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You can wait 4-6 months for results.</strong> If your business is stable and you
                have the runway to invest now for long-term returns, SEO is the smarter bet.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>Your industry has high CPC on Google Ads.</strong> In competitive verticals (legal,
                insurance, SaaS), paid clicks can cost $20-$100+. Ranking organically for those same terms
                delivers the same leads at a fraction of the cost over time.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You want to build brand authority.</strong> Ranking on page one for industry terms
                positions you as an expert. People trust organic results more than ads — studies consistently
                show that 70-80% of users skip paid results entirely.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You want compounding returns.</strong> Each piece of content you create is an asset
                that can rank for hundreds of keywords and generate traffic for years.
              </li>
            </ul>
          </FadeInSection>

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
              Choose Google Ads when...
            </h2>
            <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You need leads now.</strong> A new business, product launch, or seasonal promotion
                cannot wait 6 months. Google Ads puts you in front of buyers today.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You want to validate demand quickly.</strong> Before investing in SEO content for
                a new service, test the keywords with ads. If they convert profitably, you know the organic
                investment is worth making.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You have a time-sensitive offer.</strong> Promotions, events, or limited-time
                campaigns need immediate visibility that SEO cannot provide.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You operate in a hyper-competitive SEO landscape.</strong> If your competitors have
                been investing in SEO for years with massive domain authority, it may take 12-18 months to
                compete organically. Ads get you on page one immediately while you build your organic presence.
              </li>
            </ul>
          </FadeInSection>

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
              The ideal combination: why the best strategy uses both
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Here is what most articles will not tell you: the highest-performing businesses use SEO and Google
              Ads together, strategically. This is not a cop-out answer — there is a specific framework that
              maximizes the strengths of each channel.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Phase 1 (Month 1-3): Lead with Google Ads.</strong> Launch targeted ad campaigns for
              your highest-intent keywords. Start generating leads and revenue immediately. Use the conversion
              data to identify which keywords and audiences are most profitable. Simultaneously, begin SEO
              foundations — technical audit, site optimization, and content strategy planning.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Phase 2 (Month 4-8): Build SEO while ads sustain.</strong> Publish high-quality
              content targeting the keywords that convert best in your ad campaigns (you now have data to
              prove it). Continue running ads to maintain lead flow while organic rankings develop. Gradually
              shift budget: for every keyword that reaches page one organically, reduce ad spend on that term.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Phase 3 (Month 9-12+): Organic takes over, ads become surgical.</strong> By now, SEO
              should be generating the majority of your traffic. Reduce Google Ads to specific use cases:
              high-intent bottom-of-funnel keywords where organic alone is not enough, remarketing campaigns
              to recapture warm visitors, and new market or product tests where you need immediate data. Your
              cost per lead drops dramatically because organic traffic is essentially free, and your remaining
              ad budget is hyper-focused on the highest-ROI opportunities.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              This phased approach gives you the best of both worlds: immediate revenue from ads, long-term
              compounding returns from SEO, and data-driven decisions at every step.
            </p>
          </FadeInSection>

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
              The bottom line
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              If you have a limited budget and must choose one, base the decision on your timeline. Need results
              within 30 days? Google Ads. Can you invest for 6+ months before expecting significant returns?
              SEO will deliver far superior long-term ROI.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              But if you can afford to split your budget — even 70/30 in favor of whichever is more urgent —
              the combination of paid ads for immediate traction plus SEO for compound growth is the most
              powerful digital marketing strategy available. You get leads today while building a machine that
              will generate leads for years to come.
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
                Let&apos;s build the right strategy for your business
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
                Whether you need SEO, Google Ads, or a combination of both — we will
                analyze your market and recommend the approach that delivers the best
                ROI for your budget.
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
                Let&apos;s build your strategy
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
                  <div
                    style={{
                      position: "relative",
                      height: "180px",
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
                  <div style={{ padding: "24px" }}>
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

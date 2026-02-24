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
            style={{ maxWidth: "720px", margin: "0 auto" }}
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
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              February 12, 2026 &middot; 12 min read
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
              How to Run TikTok Ads:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Complete Guide for 2026
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
              Ad formats, targeting, budgets, creative best practices and
              step-by-step setup &mdash; everything you need to launch
              profitable TikTok Ad campaigns.
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
                TikTok has surpassed <strong style={{ color: "#fff" }}>1 billion monthly active users</strong> globally.
                The platform&apos;s ad system has matured significantly, and for brands
                targeting the 18-45 age group, TikTok Ads can deliver CPMs that are <strong style={{ color: "#fff" }}>40-60%
                lower than Meta</strong>.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Competition on TikTok Ads is still significantly lower than on Meta
                or Google, which means lower costs and higher organic reach potential.
                The algorithm&apos;s ability to find the right audience for your content
                is arguably the best in the industry.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In this complete guide, we walk you through how to set up your first
                TikTok Ad campaign, which formats work best, how to target
                effectively, and what budget you need for real results.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Why TikTok Ads */}
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
                Why TikTok Ads in 2026?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                If you still think TikTok is just for teenagers, the numbers tell
                a different story. The average engagement rate on TikTok is <strong style={{ color: "#fff" }}>6%</strong>,
                compared to <strong style={{ color: "#fff" }}>1-2% on Instagram</strong>. That means your content
                has 3-6x higher chances of being seen and generating interaction.
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
                  "Lower competition than Meta or Google across most markets",
                  "Significantly lower CPMs (€3-8 vs. €8-15 on Meta)",
                  "6% engagement rate — 3-6x higher than Instagram",
                  "Authentic content outperforms polished ads",
                  "Excellent for product discovery — users actively explore new products",
                  "Algorithm distributes content to non-followers organically",
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
                    <span style={{ color: "#56db84", flexShrink: 0 }}>
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
                TikTok doesn&apos;t replace Meta or Google &mdash; but it adds a
                low-cost, high-reach channel that can complement any paid ads
                strategy.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Ad Formats */}
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
                TikTok Ad Formats
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                TikTok offers several ad formats, each optimized for a different
                objective. Here&apos;s a complete comparison:
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
                      {["Format", "Best For", "Specs", "Avg CPM"].map(
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
                        "In-Feed Ads",
                        "Conversions, traffic",
                        "9:16 video, 5-60s",
                        "€3 – 8",
                      ],
                      [
                        "TopView",
                        "Brand awareness",
                        "First ad user sees, 60s",
                        "€15 – 30",
                      ],
                      [
                        "Spark Ads",
                        "Engagement, authenticity",
                        "Boost organic posts",
                        "€2 – 6",
                      ],
                      [
                        "Shopping Ads",
                        "E-commerce sales",
                        "Product catalog",
                        "€4 – 10",
                      ],
                      [
                        "Branded Effects",
                        "Brand interaction",
                        "AR filters, stickers",
                        "Custom",
                      ],
                    ].map(([format, bestFor, specs, cpm], i) => (
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
                          {specs}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#56db84",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {cpm}
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
                For most businesses, we recommend starting with <strong style={{ color: "#fff" }}>Spark
                Ads</strong> (boosting high-performing organic content) or <strong style={{ color: "#fff" }}>In-Feed
                Ads</strong> with a conversion objective. They&apos;re the most
                budget-friendly and easiest to test.
              </p>
            </div>
          </FadeInSection>

          {/* Section: How to set up your first campaign */}
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
                How to set up your first TikTok Ads campaign
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Setting up a TikTok Ads campaign is simpler than you think.
                Follow these 8 steps:
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
                    title: "1. Create a TikTok Business Account",
                    desc: "Go to ads.tiktok.com and register with a business email. Fill in your company details and wait for account verification (usually takes 24-48 hours).",
                  },
                  {
                    title: "2. Install the TikTok Pixel on your website",
                    desc: "The TikTok Pixel works similarly to the Meta Pixel. You can install it manually or via Google Tag Manager. Without the pixel, you cannot measure conversions and the algorithm cannot optimize.",
                  },
                  {
                    title: "3. Set up Events",
                    desc: "Configure key events: ViewContent (product view), AddToCart, InitiateCheckout, and Purchase. These signals help the algorithm find buyers.",
                  },
                  {
                    title: "4. Create a campaign with a conversion objective",
                    desc: "Choose the 'Conversions' objective and select Purchase or AddToCart as your primary optimization event. Avoid traffic objectives — they're cheaper but don't drive conversions.",
                  },
                  {
                    title: "5. Set broad targeting",
                    desc: "Start with just country and age (18-45). Don't add interests or behaviors — let TikTok's algorithm find the optimal audience. It's surprisingly good at this.",
                  },
                  {
                    title: "6. Budget: minimum €20/day per ad group",
                    desc: "Below this threshold, the algorithm doesn't have enough data to optimize. Set a daily budget of €20-50 per ad group and a total campaign budget covering at least 7 days.",
                  },
                  {
                    title: "7. Upload 3-5 creative variations",
                    desc: "TikTok automatically tests multiple variations and allocates budget to top performers. Prepare 3-5 different videos varying in hook, angle, and format — diversity is key.",
                  },
                  {
                    title: "8. Launch and wait 3-5 days",
                    desc: "Don't change anything in the first 3-5 days. The algorithm is in its learning phase and any changes reset the process. Only evaluate performance after you have at least 50 conversions per ad group.",
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

          {/* Section: Creative best practices */}
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
                Creative best practices: what works on TikTok
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                TikTok is fundamentally different from Meta or Google. Content
                that works looks like an organic TikTok, not a TV commercial.
                Here are the golden rules:
              </p>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  What WORKS:
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
                    "Native content — looks organic, not like an ad",
                    "Hook in the first 2 seconds — capture attention instantly",
                    "UGC-style (user-generated content) — testimonials, unboxing, reviews",
                    "Trending sounds — the algorithm favors content with popular audio",
                    "Text overlays — many users watch without sound",
                    "15-30 second duration — the sweet spot for engagement",
                    "Show the product in use — not just static images",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "#56db84", flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,100,100,0.15)",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  What DOESN&apos;T work:
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
                    "Polished, TV-style ads — users scroll past them instantly",
                    "Generic stock footage — looks fake and irrelevant",
                    "Video without sound — TikTok is an audio-first platform",
                    "Corporate messaging — the tone needs to be conversational",
                    "Static creatives (images) — video is king on TikTok",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "#ff6464", flexShrink: 0 }}>&#10007;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                The number one rule on TikTok: <strong style={{ color: "#fff" }}>&ldquo;Don&apos;t make ads,
                make TikToks.&rdquo;</strong> The more naturally your content blends into
                the feed, the better it performs and the less it costs.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Targeting */}
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
                Targeting tips: let the algorithm do the work
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                One of the biggest mistakes on TikTok Ads is over-targeting.
                Unlike Meta, where interests and behaviors help, on TikTok
                broad targeting works best. Here&apos;s the recommended strategy:
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
                  "Start broad: age + country only. TikTok's algorithm is exceptionally good at finding buyers",
                  "Use Custom Audiences for retargeting: site visitors, add-to-cart, TikTok engagers",
                  "Create Lookalike Audiences based on the Purchase event — not traffic or engagement",
                  "Don't narrow interests in the initial phases — let the algorithm collect data",
                  "After 2-4 weeks, analyze converting audiences and make minimal adjustments",
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
                    <span style={{ color: "#56db84", flexShrink: 0 }}>
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
                TikTok&apos;s algorithm analyzes user behavior at a depth that
                manual targeting simply cannot replicate. Trusting the algorithm
                is the key to strong results on this platform.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Budgets and expectations */}
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
                Budgets and realistic expectations
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                TikTok Ads isn&apos;t a magic solution &mdash; it requires
                investment and patience. Here&apos;s what to expect in terms of
                budget and timeline:
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
                    gap: "10px",
                  }}
                >
                  {[
                    ["Minimum testing budget", "€600/month"],
                    ["Recommended budget", "€1,500 – 3,000/month"],
                    ["Learning phase", "2 – 4 weeks"],
                    ["CPA vs. Meta (once optimized)", "20 – 40% lower"],
                    ["Minimum number of creatives", "3 – 5 variations"],
                    ["Recommended creative refresh", "Every 2 – 3 weeks"],
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
                      color: "#56db84",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Time to stable results</span>
                    <span>6 – 8 weeks</span>
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
                Important: the first 2-4 weeks are the learning phase. Don&apos;t
                judge performance during this period. The algorithm is collecting
                data and optimizing distribution. Real results come after you&apos;ve
                accumulated enough conversions for the algorithm to understand your
                ideal buyer profile.
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
                Launch TikTok Ad campaigns
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
                Our team manages TikTok Ads campaigns for brands across Europe.
                Strategy, creatives, targeting and optimization &mdash; all
                included.
              </p>
              <Link href="/en/tiktok-en/" className="btn-primary">
                Discover TikTok Ads <ArrowRight size={16} />
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
                    Facebook Ads vs. Google Ads for E-commerce
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
                    Read more <ArrowRight size={14} />
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
                    How Much Does Google Ads Cost? Budget Guide 2026
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
                    Read more <ArrowRight size={14} />
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

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
              January 26, 2026 &middot; 10 min read
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
              Retargeting and Remarketing: How to Win Back{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Lost Customers
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
              The complete retargeting and remarketing guide &mdash; strategies,
              platforms, audience segmentation and recommended budgets to win
              back your lost visitors.
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
                <strong style={{ color: "#fff" }}>97% of first-time visitors</strong> leave
                your website without buying, without filling out a form, without
                doing anything at all. It&apos;s normal &mdash; they don&apos;t
                know you well enough yet. But that doesn&apos;t mean they&apos;re
                gone forever.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Retargeting and remarketing are the strategies that bring them
                back. And they represent the highest-ROI form of digital
                advertising for a simple reason: you&apos;re not trying to
                convince strangers &mdash; you&apos;re targeting people who
                already visited your site, saw your products, and showed genuine
                interest.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In this complete guide, we&apos;ll show you exactly how
                retargeting works technically, which audience segments to create,
                what strategies to apply on each platform, and how much budget
                to allocate for maximum results.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Retargeting vs Remarketing */}
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
                Retargeting vs. Remarketing &mdash; what&apos;s the difference?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Although many use these terms interchangeably, there&apos;s an
                important technical distinction between the two:
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Retargeting</strong> refers
                to paid ads shown to your past visitors on other websites or
                social networks. Google Display Network, Meta Ads (Facebook and
                Instagram), YouTube pre-roll &mdash; these are all retargeting
                channels. Visitors are identified through pixels (cookies) and
                shown personalized ads as they browse the internet.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Remarketing</strong> refers
                to re-engaging visitors through email. Automated email sequences
                sent to those who abandoned their cart, who subscribed to your
                newsletter but never purchased, or past customers who
                haven&apos;t ordered in a long time.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Both aim for the same goal &mdash; recovering lost visitors
                &mdash; but through different channels. The best results come
                when you combine them strategically.
              </p>
            </div>
          </FadeInSection>

          {/* Section: How it works technically */}
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
                How retargeting works technically
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The mechanism is simple but powerful. You install a{" "}
                <strong style={{ color: "#fff" }}>tracking pixel</strong> (a
                small code snippet) on your website &mdash; Meta Pixel, Google
                Tag, TikTok Pixel, etc. When a visitor lands on your site, the
                pixel identifies them through a cookie and adds them to an
                audience list.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Later, when that visitor browses Facebook, Instagram, YouTube,
                or other sites in the Google Display Network, the advertising
                platforms recognize them and show your personalized ads.
                It&apos;s like sending a subtle reminder: &ldquo;Hey, you
                visited us, you saw product X &mdash; still interested?&rdquo;
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                With the gradual deprecation of third-party cookies,{" "}
                <strong style={{ color: "#fff" }}>
                  server-side tracking
                </strong>{" "}
                is becoming increasingly important. Instead of relying solely
                on the visitor&apos;s browser, data is sent directly from your
                server to the ad platforms &mdash; more accurate, more reliable,
                and more resistant to ad blockers.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Conversions API (Meta), Enhanced Conversions (Google), and
                Events API (TikTok) are the solutions you should implement now
                to protect your retargeting capabilities long-term.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Essential audience segments */}
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
                Essential audience segments
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Not all visitors are equal. Someone who bounced from your
                homepage after one second is vastly different from someone who
                added 3 products to their cart and reached checkout. Proper
                audience segmentation is the key to profitable retargeting:
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
                      {["Segment", "Window", "Strategy", "Expected ROAS"].map(
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
                        "All visitors (no action)",
                        "1-7 days",
                        "Brand reminder, value proposition",
                        "3-5x",
                      ],
                      [
                        "Product viewers",
                        "1-14 days",
                        "Dynamic product ads with viewed items",
                        "5-8x",
                      ],
                      [
                        "Add to cart (no purchase)",
                        "1-7 days",
                        "Urgency, social proof, limited stock",
                        "8-12x",
                      ],
                      [
                        "Checkout abandoners",
                        "1-3 days",
                        "Discount/incentive, guarantee, free shipping",
                        "10-15x",
                      ],
                      [
                        "Past purchasers",
                        "30-90 days",
                        "Cross-sell, upsell, complementary products",
                        "6-10x",
                      ],
                      [
                        "Email subscribers (no purchase)",
                        "7-30 days",
                        "Education, testimonials, case studies",
                        "4-6x",
                      ],
                    ].map(([segment, window_, strategy, roas], i) => (
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
                          {segment}
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
                          {window_}
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
                          {strategy}
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
                          {roas}
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
                Notice the pattern: the closer a visitor is to conversion, the
                higher the expected ROAS. This is why it&apos;s critical not to
                treat all visitors the same &mdash; the message, offer, and
                urgency must be tailored to each segment.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Platform strategies */}
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
                Platform-specific strategies
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Each platform has its own unique advantages for retargeting.
                Here&apos;s how to use them strategically:
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
                    title: "Meta Retargeting (Facebook & Instagram)",
                    desc: "The most powerful retargeting options thanks to massive user volume and rich data. Use Dynamic Product Ads (DPA) to show the exact products visitors viewed. Create Custom Audiences based on specific on-site actions. Exclude buyers from the last 7-14 days to avoid wasting budget. Set frequency caps at 3-5 impressions per week to prevent ad fatigue.",
                  },
                  {
                    title: "Google Display & YouTube",
                    desc: "Responsive Display Ads let you reach millions of sites across the Google Display Network. YouTube pre-roll targeting visitors who spent time on product pages is extremely effective — video creates emotional connection. Google Discovery Ads appear in Gmail, YouTube home, and Google Discover — perfect for brand awareness with recent visitors.",
                  },
                  {
                    title: "Email Remarketing",
                    desc: "Automated abandoned cart sequences (3 emails in 72 hours) are the gold standard. Browse abandonment emails — sent to those who viewed products but didn't add to cart — have a 5-10% conversion rate. Win-back campaigns at 30-60-90 days for inactive customers, with gradually escalating offers.",
                  },
                  {
                    title: "Cross-platform (sequential)",
                    desc: "The most powerful strategy combines all channels sequentially: awareness on Google Display (days 1-3) → product ads on Meta (days 3-7) → email follow-up with a special offer (days 7-14). The message evolves from brand reminder to urgency and incentive, guiding the visitor progressively toward conversion.",
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

          {/* Section: Frequency and duration */}
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
                Frequency and duration &mdash; when is it too much?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ad fatigue is real and dangerous. If a visitor sees the same ad
                20 times in a week, they won&apos;t just fail to convert &mdash;
                they&apos;ll associate your brand with spam. Here are the rules
                we recommend:
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
                  "Cap frequency at 3-5 impressions per week per user",
                  "Refresh creatives every 2 weeks — change images, copy, and CTAs",
                  "Don't retarget beyond 30-60 days — if they haven't converted in that window, they're likely not your customer",
                  "Always exclude users who have already converted — nobody wants to see ads for a product they already bought",
                  "Test different formats: carousel, video, single image — to maintain interest throughout the retargeting window",
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
                Following these rules protects both your budget and your brand
                perception. Aggressive retargeting has exactly the opposite
                effect of what you want.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Recommended budgets */}
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
                Recommended retargeting budgets
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Retargeting should represent{" "}
                <strong style={{ color: "#fff" }}>10-20% of your total ad spend</strong>.
                A common mistake is investing 100% of your budget in new
                traffic acquisition and 0% in recovering existing visitors.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                For most e-commerce stores, this means a dedicated retargeting
                budget of{" "}
                <strong style={{ color: "#fff" }}>&euro;500 &ndash; &euro;1,500/month</strong>.
                With this budget, you can cover retargeting on Meta, Google
                Display, and an automated email remarketing sequence.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                The return is nearly guaranteed: retargeting consistently
                delivers a ROAS of{" "}
                <strong style={{ color: "#fff" }}>5-12x</strong> &mdash; well
                above the average for prospecting campaigns. Every euro
                invested in retargeting brings back more money than any other
                type of digital advertising campaign.
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
                Win back lost visitors
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
                We set up retargeting campaigns on Meta, Google, and email that
                bring back visitors who left without buying &mdash; with ROAS
                of 5-15x.
              </p>
              <Link href="/en/paid-ads/" className="btn-primary">
                I want professional retargeting <ArrowRight size={16} />
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
                    Why Customers Abandon Their Cart (And How to Fix It)
                  </h3>
                  <Link
                    href="/en/blog/cart-abandonment-fix/"
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

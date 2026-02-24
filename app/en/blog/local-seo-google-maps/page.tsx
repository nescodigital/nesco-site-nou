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
                background: "rgba(20,184,166,0.10)",
                color: "#14b8a6",
                border: "1px solid rgba(20,184,166,0.18)",
              }}
            >
              SEO
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              February 17, 2026 &middot; 10 min read
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
              Local SEO: How to Rank First on Google in{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #14b8a6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your City
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
              Google Business Profile, reviews, local citations, optimized
              content &mdash; everything you need to dominate Google Maps
              results and attract customers from your area.
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
                <strong style={{ color: "#fff" }}>46% of all Google searches have local intent.</strong>{" "}
                &ldquo;Near me&rdquo; searches have grown by over 200% in the
                past 5 years. If you have a physical location or serve a specific
                geographic area, local SEO is the single most valuable marketing
                channel available to you.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Yet most local businesses still ignore this opportunity. An
                incomplete Google Business profile, zero reviews, and no local
                content strategy means you&rsquo;re leaving money on the table
                &mdash; every single day. In this comprehensive guide, we show
                you exactly what it takes to rank first in local results in your
                city.
              </p>
            </div>
          </FadeInSection>

          {/* Section: What is local SEO */}
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
                What is local SEO and why does it matter?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Local SEO is fundamentally different from traditional SEO. While
                classic organic SEO focuses on ranking in national or global
                search results, local SEO aims to place you in the{" "}
                <strong style={{ color: "#fff" }}>&ldquo;local pack&rdquo;</strong>{" "}
                &mdash; the 3 map results that appear above organic results when
                someone searches for a service in a specific area.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                When someone searches &ldquo;dentist near me&rdquo; or
                &ldquo;Italian restaurant downtown&rdquo;, Google first shows a
                map with 3 local businesses, then the regular organic results.
                Those 3 positions in the local pack receive{" "}
                <strong style={{ color: "#fff" }}>over 44% of all clicks</strong> &mdash;
                more than all organic results combined.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google uses 3 primary factors to decide who appears in the local
                pack: <strong style={{ color: "#fff" }}>proximity</strong> (how
                close you are to the searcher),{" "}
                <strong style={{ color: "#fff" }}>relevance</strong> (how well
                your profile matches the search), and{" "}
                <strong style={{ color: "#fff" }}>prominence</strong> (how well
                known and well reviewed you are online). The good news? You can
                actively optimize relevance and prominence, even though you
                can&rsquo;t control proximity.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Google Business Profile */}
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
                Google Business Profile &mdash; the foundation
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Your Google Business Profile (formerly Google My Business) is the
                cornerstone of your entire local SEO strategy. A complete and
                active profile increases your chances of appearing in the local
                pack by up to <strong style={{ color: "#fff" }}>70%</strong>.
                Here is the complete optimization checklist:
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
                  Google Business Profile optimization checklist:
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    "Complete every field: business name, primary + secondary categories, address, phone, hours, website",
                    "Add at least 20 high-quality photos: exterior, interior, team, products/services",
                    "Write a compelling business description with relevant keywords (max 750 characters)",
                    "Add every service/product with detailed description and pricing (where possible)",
                    "Enable messaging and direct booking options",
                    "Post weekly updates via Google Posts (offers, news, events)",
                    "Add relevant attributes (Wi-Fi, parking, wheelchair access)",
                    "Answer ALL questions in the Q&A section",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: "#14b8a6", flexShrink: 0 }}>
                        &#10003;
                      </span>
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
                A critical detail many overlook:{" "}
                <strong style={{ color: "#fff" }}>NAP consistency</strong> (Name,
                Address, Phone). Your business name, address, and phone number
                must be identical on your Google Business Profile, your website,
                and all online directories. Any inconsistency &mdash; even a
                different street abbreviation &mdash; can negatively impact your
                local ranking.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Local ranking factors */}
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
                Local ranking factors &mdash; what matters most
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                According to studies by Whitespark and Moz, these are the
                factors that influence local search rankings the most:
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
                      {["Factor", "Weight", "What to Optimize"].map((h) => (
                        <th
                          key={h}
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "2px solid #14b8a6",
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
                      [
                        "Google Business Profile",
                        "32%",
                        "Completeness, activity, correct categories",
                      ],
                      [
                        "On-page signals",
                        "19%",
                        "NAP on site, local keywords, city pages",
                      ],
                      [
                        "Reviews",
                        "16%",
                        "Quantity, quality, response rate",
                      ],
                      [
                        "Link signals",
                        "11%",
                        "Local backlinks, citations",
                      ],
                      [
                        "Behavioral signals",
                        "8%",
                        "CTR, mobile clicks, direction requests",
                      ],
                      [
                        "Citations",
                        "7%",
                        "NAP consistency, local directories",
                      ],
                      [
                        "Personalization",
                        "7%",
                        "User location, search history",
                      ],
                    ].map(([factor, weight, optimize], i) => (
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
                          {factor}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#14b8a6",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                          }}
                        >
                          {weight}
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
                          {optimize}
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
                Notice that <strong style={{ color: "#fff" }}>Google Business Profile alone
                accounts for 32%</strong> of the ranking. This means that if you
                don&rsquo;t have a complete and active profile, you&rsquo;re
                losing nearly a third of your local visibility potential &mdash;
                regardless of how good your website is.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Reviews */}
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
                Reviews &mdash; the secret weapon of local SEO
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google reviews are not just about reputation &mdash; they are a{" "}
                <strong style={{ color: "#fff" }}>direct ranking factor</strong>.
                Studies show that each 1-star increase in average rating drives a{" "}
                <strong style={{ color: "#fff" }}>5-9% increase in revenue</strong>.
                Your target: at least 50 reviews with a 4.5+ star rating.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                How do you get more reviews? Create a short link directly to
                the review form (found in Google Business Profile &gt;
                &ldquo;Ask for reviews&rdquo;) and send it to customers via SMS,
                email, or WhatsApp 24-48 hours after purchase. Average
                conversion rate: 10-15% of requests become reviews.
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
                    Responding to a positive review:
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;Thank you so much, [Name]! We&rsquo;re glad you had
                    a great experience. We look forward to seeing you again!&rdquo;
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
                    Responding to a negative review:
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;We&rsquo;re sorry to hear this, [Name]. Your feedback
                    matters to us. Please contact us at [email/phone] so we can
                    resolve the situation. Thank you for bringing this to our
                    attention.&rdquo;
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: "#fff" }}>Golden rule:</strong> respond
                to ALL reviews &mdash; positive and negative &mdash; within 24-48
                hours. Google measures your response rate and uses it as an
                activity and relevance signal. Businesses that respond to reviews
                have a perceived rating 0.12 stars higher than those that
                don&rsquo;t.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Local citations */}
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
                Local citations &mdash; the invisible foundation
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A local citation is any online mention of your business name,
                address, and phone number &mdash; with or without a link. NAP
                consistency across all platforms is{" "}
                <strong style={{ color: "#fff" }}>critical</strong> for local SEO.
                Even a minor difference (e.g., &ldquo;St.&rdquo; vs.
                &ldquo;Street&rdquo;) can create confusion for Google.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Essential directories for businesses in Europe:
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
                    ["Google Business Profile", "Mandatory — foundation #1"],
                    ["Facebook Business Page", "The second most important profile"],
                    ["Yelp", "Relevant for hospitality and services"],
                    ["Yellow Pages", "Classic directory, still relevant"],
                    ["TripAdvisor", "Essential for tourism and hospitality"],
                    ["Apple Maps / Bing Places", "Don't forget alternative platforms"],
                    ["Industry-specific directories", "E.g.: Healthgrades, Avvo, Houzz, etc."],
                  ].map(([name, desc]) => (
                    <li
                      key={name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: "#fff", fontWeight: 600 }}>
                        {name}
                      </span>
                      <span>{desc}</span>
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
                Our recommendation: start with the top 10-15 directories,
                ensure your NAP is identical across all of them, then gradually
                add industry-specific directories. A quarterly citation audit
                helps you identify inconsistencies before they impact your
                ranking.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Local content */}
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
                Local content &mdash; the strategy that sets you apart
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                If you serve multiple cities or areas, create{" "}
                <strong style={{ color: "#fff" }}>dedicated pages for each location</strong>.
                Don&rsquo;t duplicate content &mdash; each page must contain
                unique information: local testimonials, case studies from that
                area, references to local landmarks, and specific details about
                the services offered there.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Beyond location pages, your blog can become a powerful local SEO
                weapon. Write about{" "}
                <strong style={{ color: "#fff" }}>local events</strong>,
                partnerships with other businesses in the area, city-specific
                guides, and relevant community news. This type of content
                attracts natural local backlinks &mdash; from local press, city
                blogs, and business partners.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Don&rsquo;t forget about{" "}
                <strong style={{ color: "#fff" }}>schema markup</strong>{" "}
                (LocalBusiness). Add structured data to your website with business
                type, address, operating hours, rating, and GPS coordinates. This
                helps Google understand exactly what you are, where you are, and
                when you&rsquo;re open &mdash; and increases your chances of
                appearing in rich results.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: "#fff" }}>Local link-building strategy:</strong>{" "}
                join your local Chamber of Commerce, sponsor a local event,
                participate in community initiatives. Every mention with a link
                from a relevant local website is a powerful signal to Google that
                your business is an active part of the local community.
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
                Dominate local results
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
                We optimize your Google Business profile, build local citations,
                and create content that ranks you first in your city. Visible
                results in 30-90 days.
              </p>
              <Link href="/en/seo-solutions/" className="btn-primary">
                View SEO solutions <ArrowRight size={16} />
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
                      color: "#14b8a6",
                    }}
                  >
                    SEO
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    GEO: Optimization for AI Search &mdash; The New SEO
                  </h3>
                  <Link
                    href="/en/blog/geo-optimization-ai-search/"
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
                      color: "#14b8a6",
                    }}
                  >
                    SEO
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    SEO vs. Google Ads: What to Choose on a Limited Budget?
                  </h3>
                  <Link
                    href="/en/blog/seo-vs-google-ads/"
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

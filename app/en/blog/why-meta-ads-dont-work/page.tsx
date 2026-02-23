import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#56db84";

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
    slug: "/en/blog/seo-vs-google-ads/",
    title: "SEO vs. Google Ads: What to Choose on a Limited Budget?",
    category: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/seo-vs-google-ads.jpg",
    date: "Feb 15, 2026",
    readTime: "9 min",
  },
];

export default function WhyMetaAdsDontWorkPage() {
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
                "radial-gradient(circle, rgba(86,219,132,0.06) 0%, transparent 70%)",
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
                Paid Ads
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                Feb 18, 2026 · 10 min read
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
              Why Your Meta Ads{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Aren&apos;t Working
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
              If you are throwing money at Facebook and Instagram Ads with no
              results, the platform is not the problem. Here are the 7 mistakes
              sabotaging your campaigns — and how to fix each one.
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
              The uncomfortable truth about Meta Ads
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Meta&apos;s advertising platform (Facebook and Instagram) is one of the most powerful digital
              marketing tools ever created. Over 3 billion people use Meta products every month, and the
              targeting capabilities are unmatched. Yet most businesses running Meta Ads are losing money.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              The platform works. It works extremely well. But it punishes laziness, guesswork, and
              shortcuts. After auditing hundreds of Meta Ad accounts over the past five years, we have
              identified seven mistakes that account for the vast majority of failed campaigns. If your
              Meta Ads are underperforming, at least three of these apply to you right now.
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
              Mistake #1: Targeting too broad (or too narrow)
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              This is the most common mistake we see. Businesses either target &quot;everyone aged 18-65 in my
              country&quot; or they micro-target so aggressively that the algorithm has no room to optimize.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Too broad:</strong> You are paying to show your dental clinic ad to teenagers
              who will never book an appointment. Your cost per result skyrockets because 95% of impressions
              are wasted on irrelevant audiences.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Too narrow:</strong> If your audience is under 50,000 people, Meta&apos;s algorithm
              cannot find enough data points to optimize delivery. You end up in a tiny pool where frequency
              climbs and fatigue sets in fast.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The fix:</strong> Start with interest-based audiences of 500,000-2,000,000 people.
              Layer demographics thoughtfully. Then, once you have data, build lookalike audiences from your
              best customers — 1% lookalikes for precision, 3-5% for scale. Let the algorithm learn who
              converts, then give it room to find more of those people.
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
              Mistake #2: Generic creatives that blend into the feed
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Stock photos with text overlays. Corporate lifestyle shots. Product images on white backgrounds.
              If your ads look like every other ad, the thumb keeps scrolling. Meta is a visual-first platform
              where you are competing for attention with friends, family, memes, and entertainment.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The fix:</strong> Your creative needs a &quot;hook&quot; in the first 1-2 seconds. Use UGC
              (user-generated content), talking-head videos, before/after transformations, or bold visual
              contrasts. Your primary text should lead with a pain point or a surprising statistic — not your
              company name. The best-performing ads in 2026 look like native content, not advertisements.
              Test at least 3-5 creative variants per ad set. The creative is the targeting now.
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
              Mistake #3: Pixel not configured correctly
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              The Meta Pixel (and Conversions API) is the brain of your campaigns. Without proper configuration,
              Meta literally cannot tell the difference between someone who bounced in 2 seconds and someone
              who became a paying customer. You are flying completely blind.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Common pixel mistakes:</strong> Pixel is installed but no conversion events are
              configured. Events fire on the wrong pages (e.g., &quot;Purchase&quot; fires on the product page instead of
              the thank-you page). No Conversions API server-side tracking, which means 20-40% of conversions
              are lost due to browser restrictions and iOS privacy changes. Duplicate events that inflate numbers
              and confuse the algorithm.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The fix:</strong> Audit your pixel using Meta&apos;s Event Manager and the Pixel Helper
              Chrome extension. Set up the Conversions API for server-side event tracking. Test every conversion
              event by completing the action yourself and verifying it appears in Event Manager within minutes.
              Prioritize event quality over quantity — optimize for the events that actually matter to your
              business (Purchase, Lead, AddToCart).
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
              Mistake #4: Budget too small for the learning phase
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Meta&apos;s algorithm needs data to optimize. Specifically, each ad set needs approximately{" "}
              <strong style={{ color: "#fff" }}>50 conversion events per week</strong> to exit the &quot;learning phase&quot; and stabilize
              performance. If your daily budget is $10 and your cost per lead is $15, you will generate roughly
              4-5 conversions per week — nowhere near enough for the algorithm to learn.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              Stuck in the learning phase, your campaigns will show erratic performance: great one day, terrible
              the next. You will make emotional decisions — killing ads too early or scaling ones that had a
              lucky streak.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The fix:</strong> Calculate your minimum viable budget: target CPA x 50 / 7 = minimum
              daily budget per ad set. If your target CPA is $20, you need at least $143/day ($4,300/month) per
              ad set. If that is too much, consolidate — run fewer ad sets with larger budgets rather than many
              small ones. Use Campaign Budget Optimization (CBO) so Meta allocates spend to the best-performing
              ad sets automatically. If your total budget is under $1,500/month, consider starting with
              upper-funnel objectives (Traffic, Engagement) to build data before switching to conversion campaigns.
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
              Mistake #5: Not testing creative and audience variants
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Running a single ad with one image and one piece of copy is not a campaign — it is a gamble. Even
              experienced media buyers cannot predict which creative will win. The difference between your best
              and worst performing ad can easily be 5-10x in cost per result.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The fix:</strong> Implement structured A/B testing. For each campaign, test at minimum:
              3 different visual concepts (video, static, carousel), 2-3 primary text variations (different hooks),
              and 2 audience segments. Use Meta&apos;s built-in A/B test tool or structure your campaign with multiple
              ad sets. Give each variant enough budget and time (at least 3-5 days with sufficient spend) before
              drawing conclusions. Kill clear losers fast, scale winners gradually (20% budget increase per day max).
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
              Mistake #6: Landing page does not convert
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              You can have the best ad in the world, but if you send people to a slow, confusing, or mismatched
              landing page, your money is wasted. We routinely see Meta Ad accounts with excellent click-through
              rates (2-3%) but near-zero conversion rates on the landing page.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Common landing page killers:</strong> Page loads in over 3 seconds (53% of mobile users
              leave). Message mismatch — the ad promises one thing, the page talks about something else. No clear
              call-to-action above the fold. Too many options and distractions (navigation menus, multiple CTAs,
              unrelated content). No social proof (testimonials, reviews, logos). Forms with too many fields.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The fix:</strong> Create dedicated landing pages for your ads — do not send traffic
              to your homepage. Ensure headline continuity (the landing page headline should echo the ad&apos;s promise).
              Optimize for mobile first (80%+ of Meta traffic is mobile). Target a load time under 2 seconds. Have
              one clear CTA, repeat it 2-3 times on the page. Include trust signals within the first viewport.
              Test landing page variants just as rigorously as you test ad creatives.
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
              Mistake #7: Not being patient with the algorithm
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              This is the hardest mistake to fix because it requires discipline. Many advertisers make significant
              changes to their campaigns every 24-48 hours: pausing ads, changing budgets drastically, editing
              audiences, swapping creatives. Each change resets the learning phase and prevents the algorithm from
              optimizing.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>The fix:</strong> After launching a campaign, let it run for at least 5-7 days before
              making major changes. Monitor daily but only act weekly. Small budget adjustments (under 20%) will not
              reset learning. Make one change at a time so you can attribute results. Set up automated rules for
              basic guardrails (e.g., pause ad set if CPA exceeds 2x target for 3 consecutive days). Trust the data,
              not your gut — Meta&apos;s algorithm has more data points than you could ever process manually.
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
              Quick checklist: Are your Meta Ads set up correctly?
            </h2>
            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "28px 32px",
                marginTop: "16px",
              }}
            >
              {[
                "Pixel installed with Conversions API (server-side tracking)",
                "Conversion events tested and verified in Event Manager",
                "Audiences sized 500K–2M (interest) or 1–5% (lookalike)",
                "Minimum 3 creative variants per ad set",
                "Daily budget supports ~50 conversions/week per ad set",
                "Dedicated mobile-optimized landing pages (load < 2s)",
                "Headline continuity between ad and landing page",
                "Campaign running 5-7 days before major changes",
                "A/B tests structured with one variable at a time",
                "Automated rules for budget guardrails",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    paddingTop: i === 0 ? 0 : "10px",
                    paddingBottom: "10px",
                    borderBottom:
                      i < 9 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "22px",
                      height: "22px",
                      borderRadius: "6px",
                      border: `1px solid ${CATEGORY_COLOR}40`,
                      flexShrink: 0,
                      marginTop: "2px",
                      fontSize: "0.75rem",
                      color: CATEGORY_COLOR,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
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
                Want a free Meta campaign audit?
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
                We will analyze your Meta Ads account, identify what is costing you
                money, and deliver a clear action plan — completely free, no strings
                attached.
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
                Request free audit
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

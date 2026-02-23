import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#3b82f6";

const RELATED = [
  {
    slug: "/en/blog/why-meta-ads-dont-work/",
    title: "Why Your Meta Ads Aren't Working: 7 Common Mistakes",
    category: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/de-ce-nu-merg-meta-ads.jpg",
    date: "Feb 18, 2026",
    readTime: "10 min",
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

export default function CostSpecialistVsAgencyPage() {
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
                Feb 20, 2026 · 8 min read
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
              How Much Does an In-House Specialist Cost vs.{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                a Marketing Agency?
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
              Detailed cost comparison: salary, taxes, tools, management — vs.
              an all-inclusive agency package. The real numbers nobody shows you.
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
              The question every growing business faces
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              You have reached the point where marketing can no longer be handled by the founder between meetings.
              Revenue depends on consistent lead generation, and you need someone — or something — dedicated to making
              it happen. The choice usually comes down to two options: hire an in-house marketing specialist, or
              contract a digital marketing agency.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              Most articles on this topic give you a vague &quot;it depends.&quot; This one won&apos;t. We are going to
              lay out real numbers, line by line, so you can make a clear-eyed financial decision. We will cover gross
              salary, employer taxes, software tools, management overhead, and the hidden costs that catch most
              businesses off guard.
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
              The real cost of an in-house marketing specialist
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Let us start with what most people think is the total cost: the salary. In 2026, a mid-level digital
              marketing specialist in Europe earns between <strong style={{ color: "#fff" }}>$2,000 and $4,000 per month</strong> gross,
              depending on the market and experience level. In Western Europe or for senior profiles, that figure can
              climb above $5,000. But salary is just the beginning.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Employer taxes and contributions</strong> add 30-45% on top of gross salary in most
              European countries. On a $3,000 gross salary, that means an additional $900-$1,350 per month before
              your specialist has even opened their laptop.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Tools and software</strong> are the cost most companies forget entirely. A competitive
              marketing stack includes: SEO tools like Ahrefs or Semrush ($99-$449/mo), email marketing like Mailchimp or
              ActiveCampaign ($50-$300/mo), analytics and tracking ($100-$300/mo), design tools like Figma or Canva Pro
              ($15-$50/mo), social scheduling tools ($50-$200/mo), and CRM software ($50-$200/mo). That is{" "}
              <strong style={{ color: "#fff" }}>$500-$1,500 per month</strong> in software alone — and the specialist needs to actually
              know how to use all of them effectively.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Management overhead</strong> is invisible but real. Someone needs to set objectives,
              review work, approve creatives, and provide strategic direction. If that someone is you (the founder
              or department head), your time has a cost too. Plan for 5-10 hours per week of management time,
              which at a senior rate of $75-$150/hr adds another $1,500-$6,000 per month in opportunity cost.
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
              The cost of a digital marketing agency
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Agency pricing varies wildly, but a competent mid-tier agency running multi-channel campaigns
              typically charges between <strong style={{ color: "#fff" }}>$2,000 and $6,000 per month</strong> for a comprehensive
              package. That fee usually includes strategy, execution across multiple channels, tools, reporting,
              and access to a full team — strategists, designers, copywriters, media buyers, and analysts.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              The critical difference: with an agency, you are buying output and expertise. You are not paying
              for sick days, holidays, training time, or tool licenses. You are not bearing the risk of a bad hire.
              And you are getting the combined knowledge of a team that manages dozens of accounts across different
              industries.
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
              Head-to-head comparison
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
                      Factor
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
                      In-House Specialist
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
                      Marketing Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Monthly total cost", "$4,500 – $9,500+", "$2,000 – $6,000"],
                    ["Expertise", "1 person, limited scope", "Full team, multi-disciplinary"],
                    ["Channels covered", "2-3 (typically)", "5-8+ simultaneously"],
                    ["Scalability", "Slow — need to hire more", "Fast — team scales to demand"],
                    ["Risk", "High — single point of failure", "Low — team continuity"],
                    ["Tools included", "No — $500-$1,500/mo extra", "Yes — included in the fee"],
                    ["Ramp-up time", "2-3 months minimum", "1-2 weeks"],
                    ["Management overhead", "5-10 hrs/week from leadership", "1-2 hrs/week check-ins"],
                  ].map(([factor, internal, agency], i) => (
                    <tr key={i} style={{ background: "#0a0a0a" }}>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.7)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          fontWeight: 600,
                        }}
                      >
                        {factor}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.5)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {internal}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "rgba(255,255,255,0.5)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {agency}
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
              The hidden costs nobody warns you about
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Beyond the obvious line items, hiring in-house comes with costs that only reveal themselves
              over time. These are the ones that turn a seemingly affordable hire into a budget nightmare.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Recruitment costs.</strong> Finding a good digital marketer takes 2-3 months on
              average. During that time, you are paying for job postings, screening, interviews, and trial periods.
              If you use a recruiter, add 15-25% of the annual salary as a one-time fee. That is $3,600-$12,000
              just to find the person.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Onboarding and training.</strong> Even an experienced specialist needs 1-2 months to
              learn your product, audience, and market positioning. During this period, expect 50-70% productivity
              at best. That is effectively burning $2,000-$4,000 in salary for reduced output.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Turnover risk.</strong> The average tenure for marketing roles is 2-3 years. When
              your specialist leaves, you start the entire cycle over — recruitment, onboarding, training. Each
              turnover event costs an estimated 50-200% of the employee&apos;s annual salary when you factor in
              lost productivity, knowledge drain, and replacement costs.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Skill gaps.</strong> No single person excels at everything. Your specialist might be
              great at content marketing but weak on paid media. Or strong on Meta Ads but clueless about SEO.
              You either accept the gaps or hire additional people, further increasing costs.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              <strong style={{ color: "#fff" }}>Ongoing education.</strong> Digital marketing changes rapidly. Algorithm updates,
              new platforms, evolving best practices — your specialist needs continuous training. Budget $1,000-$3,000
              per year for courses, conferences, and certifications, plus the time spent learning instead of executing.
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
              When hiring in-house makes sense
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              Despite the higher total cost, there are scenarios where an in-house hire is the right call:
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>Marketing budget exceeds $50,000/month.</strong> At this scale, you need daily
                hands-on optimization and the volume justifies a dedicated resource (or team).
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>Highly regulated or niche industry.</strong> If your industry requires specialized
                compliance knowledge (pharma, fintech, legal), an in-house person who deeply understands the
                regulatory landscape can move faster than an agency that needs constant briefing.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>Content-heavy strategy.</strong> If your marketing revolves around daily content
                production that requires deep brand voice and product knowledge, in-house may make sense.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You already have marketing leadership.</strong> If you have a CMO or marketing
                director who can manage, mentor, and hold the specialist accountable, you eliminate the biggest risk.
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
              When an agency is the smarter investment
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              For most small and medium businesses, an agency delivers better ROI. Here is why:
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You are just starting with digital marketing.</strong> An agency gives you
                immediate access to proven playbooks and experienced professionals without the learning curve.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>Your budget is under $20,000/month.</strong> At this level, hiring full-time
                is difficult to justify financially. An agency spreads its costs across multiple clients,
                giving you enterprise-level expertise at a fraction of the cost.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You need multi-channel coverage.</strong> Running Google Ads, Meta Ads, SEO,
                email marketing, and content simultaneously requires different skill sets. An agency has
                specialists for each channel; one person cannot master them all.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You need to scale quickly.</strong> Launching in a new market? Seasonal demand
                spikes? An agency can ramp up and down without the delays and costs of hiring and firing.
              </li>
              <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "8px" }}>
                <strong style={{ color: "#fff" }}>You want accountability without management.</strong> Good agencies live and die
                by results. They report monthly, optimize continuously, and you can switch providers if
                performance drops — try that with an employee.
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
              The bottom line
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              When you add up salary, taxes, tools, management time, recruitment, onboarding, and turnover risk,
              an in-house marketing specialist costs <strong style={{ color: "#fff" }}>$4,500 to $9,500+ per month</strong> — and
              that is for a single person with limited scope. A quality agency delivers a full team, all tools
              included, for <strong style={{ color: "#fff" }}>$2,000 to $6,000 per month</strong>.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginTop: "16px" }}>
              The math is not even close for most SMBs. The agency model gives you more expertise, more channels,
              less risk, and lower total cost of ownership. The only question is finding the right agency — one that
              treats your budget like their own and delivers measurable results.
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
                Want to see the real numbers for your business?
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
                Use our marketing budget calculator to compare in-house costs vs. agency
                investment for your specific situation.
              </p>
              <Link
                href="/en/calculator/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Calculate the real cost
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

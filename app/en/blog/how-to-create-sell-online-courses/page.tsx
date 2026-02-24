import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#3b82f6"; // Strategy blue

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
                "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
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
                background: "rgba(59,130,246,0.10)",
                color: CATEGORY_COLOR,
                border: "1px solid rgba(59,130,246,0.18)",
              }}
            >
              Strategy
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              February 28, 2026 &middot; 14 min read
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
              How to Create and Sell{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Online Courses
              </span>{" "}
              in 2026
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              From idea validation to launch and promotion &mdash; a complete
              guide with platform comparisons and proven strategies to turn your
              expertise into recurring revenue.
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
                The online education market has surpassed $375 billion globally
                in 2026 and continues to grow at over 14% per year. This is no
                longer a trend &mdash; it&apos;s a mature industry, and creators
                who enter now with a well-structured product have a real chance
                to build a recurring, scalable revenue stream that doesn&apos;t
                depend on the number of hours you work.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The difference between a course that generates consistent sales
                and one that collects dust on a platform isn&apos;t the amount
                of content. It&apos;s about validating the idea before you start
                recording, choosing the right platform for your business model,
                and having a launch strategy that creates demand before the
                product is even ready.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In this guide, we walk through the complete process in 5
                steps &mdash; from validation to ongoing marketing &mdash; with
                a detailed comparison of the most popular online course
                platforms.
              </p>
            </div>
          </FadeInSection>

          {/* Step 1: Validate Your Course Idea */}
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
                Step 1: Validate Your Course Idea
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                The biggest mistake course creators make is spending months
                producing content for an idea nobody is willing to pay for.
                Validation comes before production, not after.
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
                  How to validate demand:
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
                    "Research Google Trends to check if your topic has an upward or stable trend, not a declining one",
                    "Analyze direct competitors — if similar courses exist and are selling, it means the market exists",
                    "Create a landing page with an early-bird offer and see how many people sign up for the waitlist",
                    "Run a pilot with 10-15 participants at a reduced price and collect real feedback",
                    "Define your unique angle — what do you do differently from the 50 courses already out there on the same topic",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: CATEGORY_COLOR, flexShrink: 0 }}>
                        &#9679;
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
                If you manage to collect 50-100 waitlist sign-ups or sell 10-15
                pilot spots, you have sufficient validation. You don&apos;t need
                thousands of subscribers &mdash; you need people willing to pay
                right now.
              </p>
            </div>
          </FadeInSection>

          {/* Step 2: Structure Your Content */}
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
                Step 2: Structure Your Course Content
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Think from outcomes to content, not the other way around. Ask
                yourself: &ldquo;What will the student know or be able to do
                after completing this module?&rdquo; Each module needs a clear,
                measurable outcome that you can promise on the sales page.
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
                    title: "Introductory module",
                    desc: "Set expectations, present the structure, and deliver a quick win — a small but concrete result the student achieves in the first 30 minutes. This dramatically increases completion rates.",
                  },
                  {
                    title: "Core modules",
                    desc: "The main content of the course. Each lesson solves a specific problem. Combine video (5-15 min), supporting text, hands-on exercises, and quizzes. Don't exceed 15 minutes per video — attention drops after that.",
                  },
                  {
                    title: "Advanced modules",
                    desc: "Go deeper on the topics that matter most. Case studies, advanced strategies, real templates. These are what separate a good course from an exceptional one.",
                  },
                  {
                    title: "Bonus resources",
                    desc: "Downloadable templates, checklists, community access, live Q&A sessions. Bonuses increase perceived value and justify a higher price point.",
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

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                The ideal formula for a 4-8 week course: 6-10 modules, with
                3-5 video lessons per module (5-15 min each), accompanied by
                hands-on exercises and a final project that demonstrates
                competency.
              </p>
            </div>
          </FadeInSection>

          {/* Step 3: Choose Your Platform */}
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
                Step 3: Choose the Right Platform
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                The platform you choose determines the student experience, the
                features at your disposal, and how easy it is to scale. Here is
                a quick comparison of the 5 main platforms:
              </p>

              {/* Comparison Table */}
              <div style={{ overflowX: "auto", marginBottom: "32px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "700px",
                  }}
                >
                  <thead>
                    <tr>
                      {[
                        "Platform",
                        "Best For",
                        "Key Feature",
                        "Starting Price",
                        "Transaction Fee?",
                      ].map((header) => (
                        <th
                          key={header}
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "2px solid #3b82f6",
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                          }}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "LearnWorlds",
                        "Interactive learning",
                        "SCORM, quizzes, certificates",
                        "$24/mo",
                        "No (from Pro plan)",
                      ],
                      [
                        "Thinkific",
                        "Beginners",
                        "Generous free plan, easy setup",
                        "Free / $49/mo",
                        "No",
                      ],
                      [
                        "Teachable",
                        "Mid-range creators",
                        "Built-in marketing tools",
                        "$59/mo",
                        "Yes (Basic plan)",
                      ],
                      [
                        "Udemy",
                        "Built-in audience",
                        "Marketplace with millions of users",
                        "Free",
                        "Yes (50-75%)",
                      ],
                      [
                        "Kajabi",
                        "Premium all-in-one",
                        "Courses + site + email + funnels",
                        "$149/mo",
                        "No",
                      ],
                    ].map(([platform, bestFor, feature, price, fee], i) => (
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
                          {platform}
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
                          {feature}
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
                          {fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Platform Review Cards */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* LearnWorlds (affiliate) */}
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
                    <a
                      href="https://get.learnworlds.com/c6ygklqwgfl2"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{
                        color: CATEGORY_COLOR,
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      LearnWorlds
                    </a>{" "}
                    &mdash; Best for interactive learning
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    If you want to create truly interactive courses, LearnWorlds
                    is the top choice. It supports SCORM content, advanced
                    quizzes with conditional feedback, customizable certificates,
                    and an interactive video player that lets you embed questions
                    directly into videos. Ideal for certification courses,
                    corporate training, or any program where knowledge testing is
                    essential. The authoring interface is intuitive, and the
                    built-in site builder lets you create a complete website
                    without needing a developer.
                  </p>
                  <a
                    href="https://get.learnworlds.com/c6ygklqwgfl2"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "12px",
                      padding: "8px 16px",
                      background: "rgba(59,130,246,0.10)",
                      border: "1px solid rgba(59,130,246,0.18)",
                      borderRadius: "8px",
                      color: CATEGORY_COLOR,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Try LearnWorlds <ArrowRight size={14} />
                  </a>
                </div>

                {/* Thinkific (affiliate) */}
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
                    <a
                      href="#AFFILIATE_THINKIFIC"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{
                        color: CATEGORY_COLOR,
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      Thinkific
                    </a>{" "}
                    &mdash; Best for beginners
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    If you&apos;re launching your first course and want
                    something simple yet professional, Thinkific is hard to
                    beat. The free plan lets you publish a course with zero
                    upfront cost, and upgrading to a paid plan unlocks a custom
                    domain, drip content, and advanced integrations. The
                    drag-and-drop interface makes course creation extremely
                    intuitive. It charges no transaction fees on any plan,
                    meaning you keep 100% of your revenue (minus payment
                    processor fees).
                  </p>
                  <a
                    href="#AFFILIATE_THINKIFIC"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "12px",
                      padding: "8px 16px",
                      background: "rgba(59,130,246,0.10)",
                      border: "1px solid rgba(59,130,246,0.18)",
                      borderRadius: "8px",
                      color: CATEGORY_COLOR,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Try Thinkific <ArrowRight size={14} />
                  </a>
                </div>

                {/* Teachable (non-affiliate) */}
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
                    Teachable &mdash; Popular mid-range option
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Teachable occupies a solid middle ground in the market. It
                    has built-in marketing tools (upsells, order bumps, affiliate
                    programs), a well-optimized checkout, and support for 1:1
                    coaching alongside courses. The downside is that the Basic
                    plan charges a 5% transaction fee, which adds up quickly at
                    high volume.
                  </p>
                </div>

                {/* Udemy (non-affiliate) */}
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
                    Udemy &mdash; Large audience, low control
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Udemy works as a marketplace &mdash; the audience is already
                    there, with over 70 million students. The problem is that you
                    don&apos;t control pricing (Udemy runs aggressive discounts
                    frequently), you don&apos;t get access to student emails, and
                    the commission is 50-75% of platform-generated sales. It can
                    be useful as a visibility tool, but not as a primary revenue
                    source.
                  </p>
                </div>

                {/* Kajabi (non-affiliate) */}
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
                    Kajabi &mdash; Premium all-in-one
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Kajabi combines everything into a single platform: online
                    courses, website builder, email marketing, sales funnels,
                    communities, and podcasting. It&apos;s the ideal solution if
                    you want to completely eliminate the need for integrations
                    with other tools. The major downside is the price &mdash;
                    starting at $149/mo, which makes it suitable only for
                    creators who already have consistent revenue and want to
                    consolidate everything on one platform.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Step 4: Create Your Content */}
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
                Step 4: Create Your Course Content
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                You don&apos;t need a professional studio to create a quality
                course. You need decent equipment, a clear method, and the
                discipline to deliver consistently.
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
                  Essential equipment:
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
                    "Camera: a modern laptop webcam (1080p) is enough to start. Upgrade to a DSLR/mirrorless camera when you have the budget",
                    "Microphone: the most important investment. A $50-100 USB microphone makes the difference between amateur and professional",
                    "Lighting: a ring light or two softboxes. Natural light from a large window works too",
                    "Recording software: OBS (free) for screen recording, Loom for quick tutorials, Camtasia for editing",
                    "Background: a clean backdrop, no clutter. A simple wall or a green screen is sufficient",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: CATEGORY_COLOR, flexShrink: 0 }}>
                        &#9679;
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
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Recording tips:</strong>{" "}
                Film in batches &mdash; record 3-5 lessons in a single session.
                Use a script or at least bullet points for each lesson. Speak
                directly into the camera and keep an energetic pace. Don&apos;t
                over-perfectionate &mdash; a good course delivered now is more
                valuable than a perfect course delivered never.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: "#fff" }}>Editing workflow:</strong>{" "}
                Cut long pauses and obvious mistakes, add slides or screen
                recordings when explaining complex concepts, add subtitles
                (increases accessibility and engagement by 40%), and export at
                1080p. Don&apos;t add unnecessary effects &mdash; content
                matters more than production.
              </p>
            </div>
          </FadeInSection>

          {/* Step 5: Launch & Market Your Course */}
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
                Step 5: Launch &amp; Market Your Course
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A launch isn&apos;t a one-day event &mdash; it&apos;s a process
                that starts weeks before and continues months after. Here is
                the strategy in 3 phases:
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
                    title: "Pre-launch (2-4 weeks before)",
                    desc: "Build an email list with free valuable content (mini-course, ebook, free webinar). Publish social media content that demonstrates your expertise on the subject. Collect testimonials from pilot participants. Create urgency with a time-limited early-bird offer.",
                  },
                  {
                    title: "Launch week",
                    desc: "Send an email sequence (3-5 emails in 7 days): announcement, benefits, testimonials, deadline, final reminder. Offer an early-bird price with a real countdown. Host a live launch webinar where you provide value and present the course. Activate your network — ask partners and friends to share.",
                  },
                  {
                    title: "Ongoing promotion (post-launch)",
                    desc: "SEO: create blog posts on topics related to your course and include links to the sales page. Paid ads: test Facebook Ads and Google Ads with specific audiences. Affiliate program: offer 20-40% commission to other creators who promote your course. Monthly webinars: host free sessions that end with an offer for the course.",
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

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                The golden rule: don&apos;t rely on just one promotion channel.
                Courses that generate consistent revenue combine at least 3
                traffic sources &mdash; typically email marketing, organic
                content (SEO + social media), and paid ads. Diversification
                protects you from algorithm changes or cost increases on any
                single channel.
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
                Discover your digital strategy
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
                Have an online course and want to promote it effectively? Or
                need a complete digital strategy that includes course creation
                as part of your funnel? The Nesco Digital team can help.
              </p>
              <Link href="/en/digital-strategy/" className="btn-primary">
                I want a strategy <ArrowRight size={16} />
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
                      color: CATEGORY_COLOR,
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
                    Digital Marketing Strategy Step by Step (2026 Guide)
                  </h3>
                  <Link
                    href="/en/blog/digital-marketing-strategy-guide/"
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
                      color: CATEGORY_COLOR,
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
                    How to Build a Sales Funnel
                  </h3>
                  <Link
                    href="/en/blog/how-to-build-sales-funnel/"
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

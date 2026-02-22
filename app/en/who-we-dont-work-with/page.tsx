"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { routes } from "@/lib/routes";
import { ArrowRight, Quote } from "lucide-react";

const r = routes.en;

/* ── DATA ── */
const nuCards = [
  {
    title: "You want results in the first 2 weeks",
    desc: "Digital marketing works in the medium and long term. If the expectation is to double sales in month 1, we\u2019ll both be disappointed.",
  },
  {
    title: "Your total marketing budget is under \u20AC1,000/month",
    desc: "Below this amount, there isn\u2019t enough room for testing, optimization, and quality management. We\u2019d rather not start than deliver mediocrity.",
  },
  {
    title: "You\u2019ve had 3+ agencies and none of them worked",
    desc: "Sometimes the problem is the agency. Sometimes it\u2019s something else. If the pattern repeats, it\u2019s important to understand why before any collaboration.",
  },
  {
    title: "You want to approve every ad, headline, and image",
    desc: "We need creative freedom and execution speed. A 2-week approval process per ad kills campaign performance.",
  },
  {
    title: "Your product or service isn\u2019t validated",
    desc: "We can\u2019t do good marketing for something we don\u2019t know works. We need evidence that the market wants what you\u2019re selling.",
  },
  {
    title: "You\u2019re looking for the cheapest provider",
    desc: "There are cheaper agencies. If price is the only criterion, we\u2019re not the right choice and you\u2019re not the right client for us.",
  },
  {
    title: "You\u2019re not willing to share business data",
    desc: "Without access to real data \u2014 margins, LTV, sales figures \u2014 we\u2019re optimizing blind. Transparency goes both ways.",
  },
  {
    title: "You want to fully outsource and never hear about it again",
    desc: "We\u2019re a partner, not an invisible service provider. We need your minimal monthly involvement to deliver real results.",
  },
];

const daCards = [
  {
    title: "You have a validated product and want to scale",
    desc: "You know what you sell works. You have your first happy customers. Now you want to reach more.",
  },
  {
    title: "You understand marketing is an investment, not an expense",
    desc: "You see the marketing budget as growth capital, not a cost to cut first when things get tough.",
  },
  {
    title: "You\u2019re willing to wait 60\u201390 days for solid results",
    desc: "You know real optimization takes time and you\u2019re ready to build something lasting.",
  },
  {
    title: "You want a partner, not an executor",
    desc: "You appreciate when someone tells you an idea won\u2019t work, not just when they execute what they\u2019re told.",
  },
  {
    title: "You can allocate minimum \u20AC1,500/month for ads + management",
    desc: "You have the resources to test, optimize, and scale properly.",
  },
  {
    title: "You communicate directly and appreciate total transparency",
    desc: "You want to know what\u2019s happening, when it\u2019s happening, good or bad.",
  },
];

export default function WhoWeDontWorkWithEnPage() {
  /* scroll-reveal for cards */
  const nuRef = useRef<HTMLDivElement>(null);
  const daRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveal = (container: HTMLDivElement | null) => {
      if (!container) return;
      const cards = container.querySelectorAll<HTMLElement>("[data-reveal]");
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).style.opacity = "1";
              (e.target as HTMLElement).style.transform = "translateY(0)";
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
      );
      cards.forEach((c) => obs.observe(c));
      return obs;
    };

    const obs1 = reveal(nuRef.current);
    const obs2 = reveal(daRef.current);
    return () => {
      obs1?.disconnect();
      obs2?.disconnect();
    };
  }, []);

  return (
    <>
      <Header locale="en" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "100px" }}
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
              background: "radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />

          <div className="relative page-container">
            <span className="badge mb-6">Transparency</span>
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                fontFeatureSettings: '"kern" 1, "liga" 1',
                marginTop: "16px",
                marginBottom: "28px",
                maxWidth: "820px",
                paddingBottom: "0.12em",
              }}
            >
              We don&apos;t work{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #fff 0%, #ef4444 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                with everyone.
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "580px",
                letterSpacing: "0.01em",
              }}
            >
              We&apos;re selective because we want to deliver real results. A bad partnership is worse than no collaboration at all.
            </p>
          </div>
        </section>

        {/* ── NU SECTION (RED) ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "4px 14px",
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    borderRadius: "9999px",
                    color: "#f87171",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "24px",
                  }}
                >
                  <span style={{ fontSize: "0.875rem" }}>{"\u274C"}</span> Not a good fit
                </div>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "20px",
                  }}
                >
                  We&apos;re probably not the right fit if...
                </h2>
              </div>
            </FadeInSection>

            <div
              ref={nuRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              style={{ maxWidth: "960px", margin: "0 auto" }}
            >
              {nuCards.map((card, i) => (
                <div
                  key={i}
                  data-reveal
                  style={{
                    padding: "32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(239,68,68,0.1)",
                    borderRadius: "20px",
                    opacity: 0,
                    transform: "translateY(28px)",
                    transition: `opacity 0.6s ease ${i * 60}ms, transform 0.6s ease ${i * 60}ms`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <span
                      style={{
                        fontSize: "1.25rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      {"\u274C"}
                    </span>
                    <div>
                      <h3
                        className="font-bold text-white"
                        style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "10px" }}
                      >
                        {card.title}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DA SECTION (GREEN) ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "4px 14px",
                    background: "rgba(86,219,132,0.08)",
                    border: "1px solid rgba(86,219,132,0.2)",
                    borderRadius: "9999px",
                    color: "#56db84",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "24px",
                  }}
                >
                  <span style={{ fontSize: "0.875rem" }}>{"\u2713"}</span> Good fit
                </div>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "20px",
                  }}
                >
                  We&apos;re a good fit if...
                </h2>
              </div>
            </FadeInSection>

            <div
              ref={daRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              style={{ maxWidth: "960px", margin: "0 auto" }}
            >
              {daCards.map((card, i) => (
                <div
                  key={i}
                  data-reveal
                  style={{
                    padding: "32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(86,219,132,0.12)",
                    borderRadius: "20px",
                    opacity: 0,
                    transform: "translateY(28px)",
                    transition: `opacity 0.6s ease ${i * 60}ms, transform 0.6s ease ${i * 60}ms`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <span
                      style={{
                        fontSize: "1.25rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: "2px",
                        color: "#56db84",
                      }}
                    >
                      {"\u2713"}
                    </span>
                    <div>
                      <h3
                        className="font-bold text-white"
                        style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "10px" }}
                      >
                        {card.title}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <FadeInSection>
              <div
                style={{
                  maxWidth: "720px",
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "48px 40px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.4), transparent)" }}
                />
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: "-40%",
                    right: "-20%",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
                  }}
                />
                <Quote size={32} style={{ color: "rgba(86,219,132,0.3)", marginBottom: "24px" }} />
                <p
                  className="font-bold"
                  style={{
                    fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.6,
                    letterSpacing: "-0.01em",
                    marginBottom: "20px",
                  }}
                >
                  &ldquo;We&apos;d rather lose a client before we start than disappoint them after 3 months.&rdquo;
                </p>
                <p style={{ fontSize: "0.875rem", color: "#56db84", fontWeight: 600 }}>
                  &mdash; The Nesco Digital Team
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "120px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(86,219,132,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="page-container" style={{ position: "relative", zIndex: 1 }}>
            <FadeInSection>
              <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
                <h2
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginBottom: "20px",
                  }}
                >
                  Think we&apos;re a good fit?
                </h2>
                <p
                  style={{
                    fontSize: "1.0625rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    letterSpacing: "0.01em",
                    marginBottom: "40px",
                  }}
                >
                  If you&apos;ve read this far and didn&apos;t see yourself in the list above, we probably have something to discuss.
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                  <Link
                    href={r.contact}
                    className="group inline-flex items-center gap-3 btn-primary"
                    style={{ fontSize: "1rem", padding: "18px 40px" }}
                  >
                    Let&apos;s talk for 30 minutes
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href={r.howWeWork}
                    className="group inline-flex items-center gap-3 btn-ghost"
                    style={{ fontSize: "1rem", padding: "18px 32px" }}
                  >
                    See how we work
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

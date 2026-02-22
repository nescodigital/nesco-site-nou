"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Monitor, Zap, ShoppingCart, Wrench } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { routes } from "@/lib/routes";

const r = routes.de;

/* ─── Types ─────────────────────────────────────────────── */
interface TiltState {
  rotateX: number;
  rotateY: number;
}

/* ─── 3D Tilt Card ───────────────────────────────────────── */
function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    setTilt({ rotateX, rotateY });
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(${isHovered ? "-2px" : "0"})`,
        transition: isHovered ? "transform 0.1s ease" : "transform 0.4s ease",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

/* ─── PageSpeed Gauge ────────────────────────────────────── */
function SpeedGauge({ score, label, animated }: { score: number; label: string; animated: boolean }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!animated) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * score);
      setDisplayed(current);
      if (progress < 1) requestAnimationFrame(tick);
    }


    requestAnimationFrame(tick);
  }, [animated, score]);

  const value = animated ? displayed : score;
  const isGood = score >= 90;
  const color = isGood ? "#56db84" : score >= 50 ? "#f59e0b" : "#ef4444";
  const pct = (value / 100) * 100;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: `conic-gradient(${color} ${pct}%, rgba(255,255,255,0.06) ${pct}%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#0a0a0a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "1.25rem", fontWeight: 700, color, fontFamily: "var(--font-satoshi, sans-serif)" }}>
            {value}
          </span>
        </div>
      </div>
      <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </span>
    </div>
  );
}

interface SpeedComparisonItem {
  before: number;
  after: number;
}

function SpeedComparisonCard({ item, animate }: { item: SpeedComparisonItem; animate: boolean }) {
  return (
    <div
      style={{
        background: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 20,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        flex: 1,
        minWidth: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <SpeedGauge score={item.before} label="Vorher" animated={false} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <ArrowRight size={20} style={{ color: "#56db84" }} />
          <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            nachher
          </span>
        </div>
        <SpeedGauge score={item.after} label="Nachher" animated={animate} />
      </div>
      <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        PageSpeed Score
      </span>
    </div>
  );
}

/* ─── Tech Chip ──────────────────────────────────────────── */
function TechChip({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(86,219,132,0.06)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(86,219,132,0.2)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 8,
        padding: "8px 16px",
        fontSize: "0.875rem",
        color: hovered ? "#56db84" : "rgba(255,255,255,0.6)",
        cursor: "default",
        transition: "all 0.2s ease",
        display: "inline-block",
        fontFamily: "monospace",
      }}
    >
      {label}
    </span>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */
export default function WebdesignHubDePage() {
  const speedRef = useRef<HTMLDivElement>(null);
  const [speedVisible, setSpeedVisible] = useState(false);

  useEffect(() => {
    const el = speedRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSpeedVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const speedComparisons: SpeedComparisonItem[] = [
    { before: 32, after: 96 },
    { before: 41, after: 94 },
    { before: 28, after: 97 },
  ];

  const services = [
    {
      icon: <Monitor size={28} style={{ color: "#56db84" }} />,
      title: "Lead-Generation-Website",
      desc: "Besucher in Kunden verwandeln mit für Conversion optimierten Landing Pages. A/B-Testing, Heatmaps, CRO inklusive.",
      href: r.leadGenWebsite,
    },
    {
      icon: <ShoppingCart size={28} style={{ color: "#56db84" }} />,
      title: "E-Commerce-Shops",
      desc: "Shopify, WooCommerce oder Magento. Vollständige Integrationen: Zahlungen, Versand, Rechnungsstellung, Bestandssynchronisierung.",
      href: r.ecommerceStores,
    },
    {
      icon: <Monitor size={28} style={{ color: "#56db84" }} />,
      title: "Unternehmens-Website",
      desc: "Professionelle Online-Präsenz, die die Qualität Ihres Unternehmens widerspiegelt. Custom Design, kein Template.",
      href: r.companyWebsite,
    },
    {
      icon: <Wrench size={28} style={{ color: "#56db84" }} />,
      title: "Website-Wartung",
      desc: "24/7-Monitoring, Updates, Security-Patches und kontinuierliche Optimierungen. Ihre Website, immer leistungsstark.",
      href: r.websiteMaintenance,
    },
  ];

  const techStack = [
    "Next.js",
    "React",
    "Shopify",
    "WooCommerce",
    "WordPress",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
    "Cloudflare",
  ];

  const processSteps = [
    {
      week: "Wo. 1-2",
      title: "Discovery & Briefing",
      desc: "Wir analysieren Ziele, Zielgruppe und Markt. Deliverable: Sitemap + Wireframes.",
    },
    {
      week: "Wo. 2-3",
      title: "UI/UX Design",
      desc: "Vollständige Figma-Mockups, Review und Freigabe. Jeder Pixel mit Absicht.",
    },
    {
      week: "Wo. 3-5",
      title: "Development",
      desc: "Sauberer Code, optimale Performance, vollständige Integrationen.",
    },
    {
      week: "Wo. 5-6",
      title: "Testing & Launch",
      desc: "QA auf allen Geräten, PageSpeed-Audit, Launch und Post-Launch-Monitoring.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#050505", minHeight: "100vh" }}>
      <Header locale="de" />

      {/* SECTION 1: Hero */}
      <section
        style={{
          backgroundColor: "#050505",
          paddingTop: 140,
          paddingBottom: 100,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* bg-grid */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        {/* green glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            background: "radial-gradient(ellipse at center, rgba(86,219,132,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="page-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", marginBottom: 24 }}>
            <span className="badge">Premium Webdesign</span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-satoshi, sans-serif)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#fff",
              margin: "0 auto 24px",
              maxWidth: 800,
            }}
          >
            Websites die{" "}
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              konvertieren und performen.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.55)",
              maxWidth: 620,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Von Landing Pages mit Top-Conversion-Rate bis zu Online-Shops, die verkaufen.
            Wir bauen mit Performance und Premium-Design, keine Templates.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            <Link href={r.contact} className="btn-primary">
              Jetzt starten <ArrowRight size={16} />
            </Link>
            <Link href={r.projects} className="btn-ghost">
              Projekte ansehen
            </Link>
          </div>

          {/* Browser Mockup */}
          <div
            style={{
              maxWidth: 680,
              margin: "0 auto",
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                background: "#111",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Traffic light dots */}
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
              </div>
              {/* URL bar */}
              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 6,
                  padding: "4px 12px",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.35)",
                  textAlign: "left",
                  fontFamily: "monospace",
                }}
              >
                nescodigital.com
              </div>
            </div>

            {/* Browser content */}
            <div style={{ padding: "36px 40px 40px", display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Fake nav */}
              <div style={{ display: "flex", gap: 20, marginBottom: 8 }}>
                {[60, 50, 55, 45].map((w, i) => (
                  <div
                    key={i}
                    style={{
                      width: w,
                      height: 8,
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: 4,
                    }}
                  />
                ))}
              </div>
              {/* Hero heading skeleton */}
              <div style={{ width: "75%", height: 24, background: "rgba(255,255,255,0.1)", borderRadius: 6 }} />
              <div style={{ width: "55%", height: 24, background: "rgba(86,219,132,0.25)", borderRadius: 6 }} />
              {/* Body text skeletons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                <div style={{ width: "90%", height: 10, background: "rgba(255,255,255,0.05)", borderRadius: 4 }} />
                <div style={{ width: "80%", height: 10, background: "rgba(255,255,255,0.05)", borderRadius: 4 }} />
                <div style={{ width: "65%", height: 10, background: "rgba(255,255,255,0.05)", borderRadius: 4 }} />
              </div>
              {/* CTA button */}
              <div style={{ marginTop: 8 }}>
                <div
                  style={{
                    display: "inline-block",
                    background: "#56db84",
                    borderRadius: 50,
                    padding: "10px 24px",
                    width: 140,
                    height: 14,
                    opacity: 0.85,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      {/* SECTION 2: PageSpeed Gauge Animation */}
      <section ref={speedRef} style={{ backgroundColor: "#050505", padding: "100px 0" }}>
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <span className="badge">
              <Zap size={12} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
              Performance
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-satoshi, sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Von 32 auf 96 garantiert
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.45)",
              fontSize: "1rem",
              maxWidth: 520,
              margin: "0 auto 56px",
              lineHeight: 1.7,
            }}
          >
            Wir machen keine Kompromisse bei der Geschwindigkeit. Jede ausgelieferte Website erreicht 90+ bei PageSpeed Insights.
          </p>

          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {speedComparisons.map((item, i) => (
              <SpeedComparisonCard key={i} item={item} animate={speedVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      {/* SECTION 3: 4 Service Cards with 3D tilt */}
      <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <span className="badge">Leistungen</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-satoshi, sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              textAlign: "center",
              marginBottom: 56,
            }}
          >
            Was wir bauen
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {services.map((svc, i) => (
              <TiltCard
                key={i}
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 20,
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Link
                  href={svc.href}
                  style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: "rgba(86,219,132,0.08)",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {svc.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-satoshi, sans-serif)",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 10px",
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {svc.desc}
                    </p>
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      color: "#56db84",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    Mehr erfahren <ArrowRight size={14} />
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      {/* SECTION 4: Tech Stack */}
      <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <span className="badge">Technologien</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-satoshi, sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Unser Tech-Stack
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.45)",
              fontSize: "1rem",
              maxWidth: 480,
              margin: "0 auto 48px",
              lineHeight: 1.7,
            }}
          >
            Wir verwenden die richtigen Technologien für jedes Projekt, kein einziges Template für alle.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            {techStack.map((tech) => (
              <TechChip key={tech} label={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      {/* SECTION 5: Process Timeline */}
      <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <span className="badge">Prozess</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-satoshi, sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              textAlign: "center",
              marginBottom: 64,
            }}
          >
            Vom Briefing zum Launch
          </h2>

          <div
            style={{
              maxWidth: 680,
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* Vertical timeline line */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: 20,
                top: 0,
                bottom: 0,
                width: 1,
                background: "rgba(86,219,132,0.2)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 32,
                    alignItems: "flex-start",
                    paddingBottom: i < processSteps.length - 1 ? 48 : 0,
                    position: "relative",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: 6,
                    }}
                  >
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#56db84",
                        boxShadow: "0 0 12px rgba(86,219,132,0.5)",
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Step content */}
                  <div
                    style={{
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 16,
                      padding: "24px 28px",
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#56db84",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 600,
                        marginBottom: 8,
                      }}
                    >
                      {step.week}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-satoshi, sans-serif)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 8px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner locale="de" />
      <Footer locale="de" />
    </div>
  );
}

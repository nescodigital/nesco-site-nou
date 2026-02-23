"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CATEGORIES = [
  { key: "all", label: "Toate" },
  { key: "strategie", label: "Strategie", color: "#3b82f6" },
  { key: "paid-ads", label: "Paid Ads", color: "#56db84" },
  { key: "seo", label: "SEO", color: "#14b8a6" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

const ARTICLES = [
  {
    slug: "/blog/cost-specialist-intern-vs-agentie/",
    title: "Cât costă un specialist intern vs. o agenție de marketing digital?",
    excerpt:
      "Comparație detaliată: salariu, taxe, tools, management — vs. un pachet de agenție all-inclusive. Cifrele reale pe care nimeni nu ți le arată.",
    category: "strategie" as CategoryKey,
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/cost-specialist-vs-agentie.jpg",
    date: "20 Feb 2026",
    readTime: "8 min",
  },
  {
    slug: "/blog/de-ce-nu-merg-reclamele-meta/",
    title: "De ce nu-ți merg reclamele pe Meta? 7 greșeli frecvente",
    excerpt:
      "Dacă arunci bani pe Facebook și Instagram Ads fără rezultate, problema nu e platforma. Descoperă cele 7 greșeli care îți sabotează campaniile.",
    category: "paid-ads" as CategoryKey,
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/de-ce-nu-merg-meta-ads.jpg",
    date: "18 Feb 2026",
    readTime: "10 min",
  },
  {
    slug: "/blog/seo-vs-google-ads/",
    title: "SEO vs. Google Ads: Ce alegi când ai buget limitat?",
    excerpt:
      "Trafic organic sau plătit? Analizăm costurile, timeline-ul și ROI-ul fiecărei strategii ca să iei decizia corectă pentru afacerea ta.",
    category: "seo" as CategoryKey,
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/seo-vs-google-ads.jpg",
    date: "15 Feb 2026",
    readTime: "9 min",
  },
];

export default function BlogPage() {
  const [active, setActive] = useState<CategoryKey>("all");
  const filtered =
    active === "all" ? ARTICLES : ARTICLES.filter((a) => a.category === active);
  const [featured, ...rest] = filtered;

  return (
    <>
      <Header locale="ro" />
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
                Strategii.
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
              Articole practice despre marketing digital, testate pe bugete
              reale. Fără fluff, doar ce funcționează.
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
                      Citește articolul
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
                          Citește
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
      <Footer locale="ro" />
    </>
  );
}

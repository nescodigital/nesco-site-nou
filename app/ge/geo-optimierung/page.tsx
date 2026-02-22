import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Brain, Search, FileText, Database, BarChart3, Shield } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "GEO AI-Optimierung | ChatGPT, Perplexity, Gemini | Nesco Digital",
  description: "Werden Sie von ChatGPT, Perplexity und Gemini empfohlen, wenn Ihre Kunden nach Dienstleistungen suchen. GEO ist das neue SEO für KI-basierte Suchmaschinen.",
  path: "/ge/geo-optimierung/",
  routeKey: "geoOptimization",
});

export default function GeoOptimierungPage() {
  return (
    <>
      <style>{`
        @keyframes geoPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        .geo-pulse { animation: geoPulse 2s ease-in-out infinite; }
        .geo-dot-ring {
          position: relative;
          display: inline-block;
        }
        .geo-dot-ring::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(86,219,132,0.3);
          animation: geoPulse 2s ease-in-out infinite;
        }
      `}</style>
      <Header locale="de" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* Section 1: Hero */}
        <section
          style={{
            paddingTop: "140px",
            paddingBottom: "100px",
            backgroundColor: "#050505",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Grid background */}
          <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

          {/* Green radial glow top right */}
          <div
            style={{
              position: "absolute",
              top: "-180px",
              right: "-180px",
              width: "700px",
              height: "700px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Electric blue radial glow bottom left */}
          <div
            style={{
              position: "absolute",
              bottom: "-200px",
              left: "-200px",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="page-container" style={{ position: "relative", zIndex: 1 }}>
            {/* Badges row */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
              <span className="badge">Digitales Marketing</span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "#56db84",
                  background: "rgba(86,219,132,0.08)",
                  border: "1px solid rgba(86,219,132,0.2)",
                  borderRadius: "999px",
                  padding: "4px 12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  className="geo-pulse"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#56db84",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                NEU
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                marginBottom: "28px",
                maxWidth: "800px",
                fontWeight: 800,
                color: "#fff",
              }}
            >
              <span style={{ display: "block" }}>GEO Generative</span>
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #fff 0%, #56db84 50%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Engine Optimization.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "1.125rem",
                maxWidth: "560px",
                lineHeight: 1.65,
                marginBottom: "40px",
              }}
            >
              Es reicht nicht mehr aus, bei Google zu erscheinen. Jetzt fragen Ihre Kunden ChatGPT,
              Perplexity und Gemini. Wir sorgen dafür, dass Sie von diesen KI-Suchmaschinen
              in Echtzeit empfohlen werden.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/ge/lass-uns-reden/" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                GEO-Optimierung starten
                <ArrowRight size={16} />
              </Link>
              <Link href="/ge/projekte/" className="btn-ghost">
                Fallstudien ansehen
              </Link>
            </div>

            {/* Floating AI Status Cards */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "ChatGPT", status: "Empfohlen" },
                { label: "Perplexity", status: "Empfohlen" },
                { label: "Gemini", status: "Empfohlen" },
              ].map(({ label, status }) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(86,219,132,0.05)",
                    border: "1px solid rgba(86,219,132,0.15)",
                    borderRadius: "12px",
                    padding: "12px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    className="geo-pulse"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#56db84",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                    {label}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#56db84", fontWeight: 500 }}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: What is GEO */}
        <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
          {/* Separator */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: "100px",
            }}
          />
          <div className="page-container">
            {/* Badge + heading */}
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
                Was ist GEO?
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  marginBottom: "16px",
                  lineHeight: 1.1,
                }}
              >
                Die neue Grenze der Online-Sichtbarkeit
              </h2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.0625rem", maxWidth: "540px", margin: "0 auto", lineHeight: 1.65 }}>
                Millionen von Nutzern haben verändert, wie sie Informationen suchen. Sie fragen
                jetzt die KI und die KI empfiehlt die Marken, die sie als vertrauenswürdig erachtet.
              </p>
            </div>

            {/* 3 cards grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  icon: <Brain size={28} color="#56db84" />,
                  title: "KI-Motoren als Quellen",
                  desc: "ChatGPT, Perplexity, Gemini, Claude und andere LLMs werden zur primären Informationsquelle für Millionen von Nutzern.",
                },
                {
                  icon: <Search size={28} color="#60a5fa" />,
                  title: "Keine traditionellen Links",
                  desc: "Die KI zeigt keine Linkliste an. Sie empfiehlt direkt Marken, Produkte und Dienstleistungen, die als vertrauenswürdig und relevant gelten.",
                },
                {
                  icon: <Shield size={28} color="#56db84" />,
                  title: "Neue digitale Autorität",
                  desc: "Die Optimierung für KI erfordert einen anderen Ansatz: strukturierten Inhalt, Schema-Markup, Zitierbarkeit und Domain-Autorität.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="card-hover"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    padding: "36px 32px",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      background: "rgba(255,255,255,0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    {icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: SEO vs GEO Comparator */}
        <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: "100px",
            }}
          />
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
                SEO vs. GEO
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                Was ändert sich?
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                maxWidth: "880px",
                margin: "0 auto",
              }}
            >
              {/* Traditionelles SEO */}
              <div
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  padding: "36px 32px",
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Traditionelles SEO
                  </span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    "Optimierung für Google-Algorithmen",
                    "Keyword-Stuffing und Meta-Tags",
                    "Fokus auf Backlink-Quantität",
                    "Rang #1 in den SERPs",
                    "Organischer Traffic durch Klicks",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                    >
                      <span
                        style={{
                          color: "rgba(239,68,68,1)",
                          fontWeight: 700,
                          fontSize: "1rem",
                          lineHeight: 1.5,
                          flexShrink: 0,
                        }}
                      >
                        x
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9375rem", lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GEO Optimization */}
              <div
                style={{
                  background: "rgba(86,219,132,0.04)",
                  border: "1px solid rgba(86,219,132,0.2)",
                  borderRadius: "20px",
                  padding: "36px 32px",
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#56db84",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    GEO Optimization
                  </span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    "Optimierung für KI-Modelle",
                    "Semantischer und strukturierter Inhalt",
                    "Autorität und Zitierbarkeit",
                    "Von KI als Quelle empfohlen",
                    "Präsenz in KI-Antworten",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                    >
                      <span
                        style={{
                          color: "#56db84",
                          fontWeight: 700,
                          fontSize: "1rem",
                          lineHeight: 1.5,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem", lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 6 Services Grid */}
        <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: "100px",
            }}
          />
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
                GEO-Leistungen
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                Was wir beinhalten
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  icon: <FileText size={24} color="#56db84" />,
                  title: "LLMs.txt Implementierung",
                  desc: "Anweisungsdatei für KI-Crawler sagt ChatGPT und Perplexity genau, wer Sie sind und was Sie anbieten.",
                  accentColor: "#56db84",
                },
                {
                  icon: <Database size={24} color="#60a5fa" />,
                  title: "Erweitertes Schema-Markup",
                  desc: "Strukturiertes JSON-LD, um KI-Suchmaschinen vollständigen Kontext über Ihr Unternehmen zu geben.",
                  accentColor: "#60a5fa",
                },
                {
                  icon: <Brain size={24} color="#56db84" />,
                  title: "Semantischer Content",
                  desc: "Erstellung und Optimierung von Inhalten, um die Fragen zu beantworten, die Ihre Kunden der KI stellen.",
                  accentColor: "#56db84",
                },
                {
                  icon: <Search size={24} color="#60a5fa" />,
                  title: "KI-Zitierbarkeits-Audit",
                  desc: "Wir bewerten, wie Sie von LLMs wahrgenommen werden, und identifizieren Lücken gegenüber Wettbewerbern.",
                  accentColor: "#60a5fa",
                },
                {
                  icon: <BarChart3 size={24} color="#56db84" />,
                  title: "KI-Präsenz-Monitoring",
                  desc: "Wir verfolgen Erwähnungen und Empfehlungen Ihrer Marke in den wichtigsten KI-Suchmaschinen.",
                  accentColor: "#56db84",
                },
                {
                  icon: <Shield size={24} color="#60a5fa" />,
                  title: "Digitale Autorität",
                  desc: "Wir bauen die Autoritätssignale auf, die die KI dazu bringen, Sie zu empfehlen: Links, Erwähnungen, Co-Citations.",
                  accentColor: "#60a5fa",
                },
              ].map(({ icon, title, desc, accentColor }) => (
                <div
                  key={title}
                  className="card-hover"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    padding: "32px",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      background: `rgba(${accentColor === "#56db84" ? "86,219,132" : "96,165,250"},0.08)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "18px",
                    }}
                  >
                    {icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Pricing */}
        <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: "100px",
            }}
          />
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
                Investition
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                GEO-Paket
              </h2>
            </div>

            {/* Pricing card */}
            <div
              style={{
                maxWidth: "520px",
                margin: "0 auto",
                background: "rgba(86,219,132,0.04)",
                border: "1px solid rgba(86,219,132,0.2)",
                borderRadius: "20px",
                padding: "48px",
              }}
            >
              {/* Label */}
              <div style={{ marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#56db84",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  GEO Optimization
                </span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: "6px" }}>
                <span
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  800 EUR
                </span>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", marginLeft: "6px" }}>
                  /Monat
                </span>
              </div>

              {/* Setup note */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "36px",
                  lineHeight: 1.5,
                }}
              >
                Ersteinrichtung: 1.200 EUR (Audit + Implementierung)
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(86,219,132,0.12)",
                  marginBottom: "28px",
                }}
              />

              {/* Included items */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "LLMs.txt + robots.txt Optimierung",
                  "Vollständiges Schema-Markup (LocalBusiness, FAQPage, Service)",
                  "Audit und Optimierung semantischer Inhalte (4 Seiten/Monat)",
                  "Monatlicher KI-Präsenzbericht (ChatGPT, Perplexity, Gemini)",
                  "Monitoring von Brand-Mentions in KI-Systemen",
                  "Monatliche GEO-Strategie und Beratung",
                ].map((item) => (
                  <li
                    key={item}
                    style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                  >
                    <span
                      style={{
                        color: "#56db84",
                        fontWeight: 700,
                        fontSize: "1rem",
                        lineHeight: 1.5,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/ge/lass-uns-reden/"
                className="btn-primary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                GEO-Optimierung starten
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: "100px",
            }}
          />
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="badge" style={{ marginBottom: "20px", display: "inline-block" }}>
                FAQ
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                Häufige Fragen
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "760px",
                margin: "0 auto",
              }}
            >
              {[
                {
                  q: "Wie lange dauert es, bis ich in KI-Antworten erscheine?",
                  a: "Erste Ergebnisse sind in 4 bis 8 Wochen sichtbar. Die KI-Optimierung ist ein kontinuierlicher Prozess, ähnlich wie SEO, aber mit schnellerer Dynamik.",
                },
                {
                  q: "Ersetzt GEO das SEO?",
                  a: "Nein, es ergänzt es. SEO bleibt wichtig für organischen Traffic aus Google. GEO fügt einen neuen Kanal hinzu: KI-Empfehlungen.",
                },
                {
                  q: "Woher wissen Sie, dass die KI mich empfiehlt?",
                  a: "Durch regelmäßiges Monitoring: Wir testen relevante Prompts für Ihre Branche in ChatGPT, Perplexity und Gemini und verfolgen, ob Ihre Marke in den Antworten erscheint.",
                },
                {
                  q: "Funktioniert es für jede Branche?",
                  a: "Ja, aber die Wirkung variiert. Es funktioniert am besten für professionelle Dienstleistungen, B2B, Bildung, Gesundheit, Recht und Finanzen, Branchen, in denen Menschen KI um Empfehlungen bitten.",
                },
                {
                  q: "Was passiert, wenn meine Konkurrenten GEO machen und ich nicht?",
                  a: "Die KI wird Ihre Konkurrenten empfehlen. Im Gegensatz zu SEO, wo man den Rückstand relativ schnell aufholen kann, wird Autorität in der KI langsam aufgebaut: Je später Sie anfangen, desto größer wird der Abstand.",
                },
              ].map(({ q, a }, index) => (
                <div
                  key={index}
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    padding: "28px 32px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "12px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                    }}
                  >
                    {q}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner locale="de" />
      </main>
      <Footer locale="de" />
    </>
  );
}

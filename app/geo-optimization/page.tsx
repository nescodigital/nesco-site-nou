import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Brain, Search, FileText, Database, BarChart3, Shield } from "lucide-react";
import { AiChatMockup } from "@/components/sections/AiChatMockup";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "GEO Optimizare pentru AI | ChatGPT, Perplexity, Gemini | Nesco Digital",
  description:
    "Fii recomandat de ChatGPT, Perplexity și Gemini când clienții tăi caută servicii. GEO este noul SEO optimizare pentru motoarele de căutare bazate pe AI.",
  path: "/geo-optimization/",
  routeKey: "geoOptimization",
});

export default function GeoOptimizationPage() {
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
      <Header locale="ro" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* ── Section 1: Hero ── */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Hero content */}
            <div>
            {/* Badges row */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
              <span className="badge">Marketing Digital</span>
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
                NOU
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
              Nu mai este suficient să apari în Google. Acum, clienții tăi întreabă ChatGPT,
              Perplexity și Gemini. Noi te facem să fii recomandat de aceste motoare AI în
              timp real.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/contact/" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Începe GEO Optimization
                <ArrowRight size={16} />
              </Link>
              <Link href="/proiecte/" className="btn-ghost">
                Studii de caz →
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
                { label: "ChatGPT", status: "Recomandat" },
                { label: "Perplexity", status: "Recomandat" },
                { label: "Gemini", status: "Recomandat" },
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
            {/* RIGHT: AI Chat Mockup */}
            <div className="hidden lg:flex lg:items-center lg:justify-center" style={{ paddingTop: "40px" }}>
              <AiChatMockup locale="ro" />
            </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: What is GEO ── */}
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
                Ce este GEO?
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
                Noua frontieră a vizibilității online
              </h2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.0625rem", maxWidth: "540px", margin: "0 auto", lineHeight: 1.65 }}>
                Milioane de utilizatori au schimbat modul în care caută informații. Acum,
                întreabă AI-ul iar AI-ul recomandă brandurile pe care le consideră de
                încredere.
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
                  title: "Motoare AI ca surse",
                  desc: "ChatGPT, Perplexity, Gemini, Claude și alte LLM-uri devin principala sursă de informații pentru milioane de utilizatori.",
                },
                {
                  icon: <Search size={28} color="#60a5fa" />,
                  title: "Fără linkuri tradiționale",
                  desc: "AI-ul nu afișează o listă de linkuri. Recomandă direct branduri, produse și servicii considerate de încredere și relevante.",
                },
                {
                  icon: <Shield size={28} color="#56db84" />,
                  title: "Autoritate digitală nouă",
                  desc: "Optimizarea pentru AI necesită altă abordare: conținut structurat, schema markup, citabilitate și autoritate de domeniu.",
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

        {/* ── Section 3: SEO vs GEO Comparator ── */}
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
                SEO vs GEO
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
                Ce se schimbă?
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
              {/* SEO Tradițional */}
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
                    SEO Tradițional
                  </span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    "Optimizare pentru algoritmi Google",
                    "Keyword stuffing și meta tags",
                    "Backlink quantity focus",
                    "Rank #1 în SERP",
                    "Trafic organic din clicks",
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
                        ×
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
                    "Optimizare pentru modele AI",
                    "Conținut semantic și structurat",
                    "Autoritate și citabilitate",
                    "Recomandat de AI ca sursă",
                    "Prezență în răspunsurile AI",
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

        {/* ── Section 4: 6 Services Grid ── */}
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
                Servicii GEO
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
                Ce includem
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
                  title: "LLMs.txt Implementation",
                  desc: "Fișier de instrucțiuni pentru crawlere AI spune ChatGPT și Perplexity exact ce ești și ce oferi.",
                  accentColor: "#56db84",
                },
                {
                  icon: <Database size={24} color="#60a5fa" />,
                  title: "Schema Markup Avansat",
                  desc: "JSON-LD structurat pentru a oferi context complet motoarelor AI despre businessul tău.",
                  accentColor: "#60a5fa",
                },
                {
                  icon: <Brain size={24} color="#56db84" />,
                  title: "Conținut Semantic",
                  desc: "Creare și optimizare conținut pentru a răspunde la întrebările pe care le pun AI-urilor clienții tăi.",
                  accentColor: "#56db84",
                },
                {
                  icon: <Search size={24} color="#60a5fa" />,
                  title: "Audit Citabilitate AI",
                  desc: "Evaluăm cum ești perceput de LLM-uri și identificăm gaps față de competitori.",
                  accentColor: "#60a5fa",
                },
                {
                  icon: <BarChart3 size={24} color="#56db84" />,
                  title: "Monitorizare AI Presence",
                  desc: "Urmărim mențiunile și recomandările brandului tău în principalele motoare AI.",
                  accentColor: "#56db84",
                },
                {
                  icon: <Shield size={24} color="#60a5fa" />,
                  title: "Autoritate Digitală",
                  desc: "Construim semnalele de autoritate care determină AI-ul să te recomande linkuri, mențiuni, co-citations.",
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

        {/* ── Section 5: Pricing ── */}
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
                Investiție
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
                Pachet GEO
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
                  800€
                </span>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", marginLeft: "6px" }}>
                  /lună
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
                Setup inițial: 1.200€ (audit + implementare)
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
                  "LLMs.txt + robots.txt optimization",
                  "Schema Markup complet (LocalBusiness, FAQPage, Service)",
                  "Audit și optimizare conținut semantic (4 pagini/lună)",
                  "Raport lunar AI Presence (ChatGPT, Perplexity, Gemini)",
                  "Monitorizare brand mentions în AI",
                  "Strategie și consultanță GEO lunară",
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
                href="/contact/"
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
                Începe GEO Optimization
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 6: FAQ ── */}
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
                Întrebări frecvente
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
                  q: "Cât durează până apar în răspunsurile AI?",
                  a: "Primele rezultate sunt vizibile în 4-8 săptămâni. Optimizarea pentru AI este un proces continuu, similar cu SEO, dar cu dinamică mai rapidă.",
                },
                {
                  q: "GEO înlocuiește SEO?",
                  a: "Nu le complementează. SEO rămâne important pentru traficul organic din Google. GEO adaugă un canal nou: recomandările AI.",
                },
                {
                  q: "Cum știți că AI-ul mă recomandă?",
                  a: "Prin monitorizare regulată: testăm prompt-uri relevante pentru industria ta în ChatGPT, Perplexity și Gemini și urmărim dacă brandul tău apare în răspunsuri.",
                },
                {
                  q: "Funcționează pentru orice industrie?",
                  a: "Da, dar impactul variază. Funcționează cel mai bine pentru servicii profesionale, B2B, educație, sănătate, legal și finance industrii unde oamenii caută recomandări de la AI.",
                },
                {
                  q: "Ce se întâmplă dacă competitorii mei fac GEO și eu nu?",
                  a: "AI-ul va recomanda competitorii tăi. Spre deosebire de SEO unde poți recupera terenul relativ rapid, în AI autoritatea se construiește lent cu cât începi mai târziu, cu atât gap-ul crește.",
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

        {/* ── CTA Banner ── */}
        <CtaBanner locale="ro" />
      </main>
      <Footer locale="ro" />
    </>
  );
}

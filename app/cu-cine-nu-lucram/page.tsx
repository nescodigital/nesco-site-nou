"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* ─── Data ────────────────────────────────────────────────────────────────────── */

const dontWorkWith = [
  {
    title: "Vrei rezultate \u00een primele 2 s\u0103pt\u0103m\u00e2ni",
    desc: "Marketingul digital func\u021bioneaz\u0103 pe termen mediu \u0219i lung. Dac\u0103 a\u0219teptarea e s\u0103 dublezi v\u00e2nz\u0103rile \u00een luna 1, vom dezam\u0103gi am\u00e2ndoi.",
  },
  {
    title: "Bugetul total de marketing e sub 1.000\u20ac/lun\u0103",
    desc: "Sub aceast\u0103 sum\u0103, nu exist\u0103 suficient spa\u021biu pentru testare, optimizare \u0219i management de calitate. Prefer\u0103m s\u0103 nu \u00eencepem dec\u00e2t s\u0103 livr\u0103m mediocritate.",
  },
  {
    title: "Ai avut 3+ agen\u021bii \u0219i niciuna nu a func\u021bionat",
    desc: "Uneori problema e agen\u021bia. Uneori e altceva. Dac\u0103 pattern-ul se repet\u0103, e important s\u0103 \u00een\u021belegem de ce \u00eenainte de orice colaborare.",
  },
  {
    title: "Vrei s\u0103 aprobi fiecare reclam\u0103, titlu \u0219i imagine",
    desc: "Avem nevoie de libertate creativ\u0103 \u0219i de vitez\u0103 de execu\u021bie. Un proces de aprobare de 2 s\u0103pt\u0103m\u00e2ni per reclam\u0103 ucide performan\u021ba campaniilor.",
  },
  {
    title: "Produsul sau serviciul t\u0103u nu e validat",
    desc: "Nu putem face marketing bun pentru ceva ce nu \u0219tim c\u0103 func\u021bioneaz\u0103. Avem nevoie de dovezi c\u0103 pia\u021ba vrea ce vinzi tu.",
  },
  {
    title: "Cau\u021bi cel mai ieftin furnizor",
    desc: "Exist\u0103 agen\u021bii mai ieftine. Dac\u0103 pre\u021bul e singurul criteriu, nu suntem alegerea potrivit\u0103 \u0219i nici tu nu e\u0219ti clientul potrivit pentru noi.",
  },
  {
    title: "Nu e\u0219ti dispus s\u0103 partajezi date despre business",
    desc: "F\u0103r\u0103 acces la date reale \u2014 marje, LTV, cifre de v\u00e2nz\u0103ri \u2014 optimiz\u0103m \u00een orb. Transparen\u021ba merge \u00een ambele direc\u021bii.",
  },
  {
    title: "Vrei s\u0103 externalizezi complet \u0219i s\u0103 nu mai \u0219tii nimic",
    desc: "Suntem un partener, nu un furnizor de servicii invizibil. Avem nevoie de implicarea ta minim\u0103 lunar\u0103 pentru a livra rezultate reale.",
  },
];

const doWorkWith = [
  {
    title: "Ai un produs validat \u0219i vrei s\u0103 scalezi",
    desc: "\u0218tii c\u0103 ce vinzi func\u021bioneaz\u0103. Ai primii clien\u021bi mul\u021bumi\u021bi. Acum vrei s\u0103 ajungi la mai mul\u021bi.",
  },
  {
    title: "\u00cen\u021belegi c\u0103 marketingul e o investi\u021bie, nu o cheltuial\u0103",
    desc: "Prive\u0219ti bugetul de marketing ca pe capital de cre\u0219tere, nu ca pe un cost de t\u0103iat primul c\u00e2nd lucrurile merg greu.",
  },
  {
    title: "E\u0219ti dispus s\u0103 a\u0219tep\u021bi 60-90 de zile pentru rezultate solide",
    desc: "\u0218tii c\u0103 optimizarea real\u0103 ia timp \u0219i e\u0219ti preg\u0103tit s\u0103 construie\u0219ti ceva durabil.",
  },
  {
    title: "Vrei un partener, nu un executant",
    desc: "Apreciezi c\u00e2nd cineva \u00ee\u021bi spune c\u0103 o idee nu va func\u021biona, nu doar c\u00e2nd execut\u0103 ce i se cere.",
  },
  {
    title: "Po\u021bi aloca minimum 1.500\u20ac/lun\u0103 pentru ads + management",
    desc: "Ai resursele necesare pentru a testa, optimiza \u0219i scala corect.",
  },
  {
    title: "Comunici direct \u0219i apreciezi transparen\u021ba total\u0103",
    desc: "Vrei s\u0103 \u0219tii ce se \u00eent\u00e2mpl\u0103, c\u00e2nd se \u00eent\u00e2mpl\u0103, bune sau rele.",
  },
];

/* ─── Scroll animation hook ───────────────────────────────────────────────────── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll<HTMLElement>(".scroll-reveal");
    children.forEach((child) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(28px)";
      child.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─── Page ────────────────────────────────────────────────────────────────────── */

export default function CuCineNuLucramPage() {
  const wrapperRef = useScrollReveal();

  return (
    <>
      <Header locale="ro" />

      <main style={{ backgroundColor: "#050505" }} ref={wrapperRef}>
        {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "100px" }}
        >
          {/* Faint dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />

          <div className="relative page-container scroll-reveal">
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                fontFeatureSettings: '"kern" 1, "liga" 1',
                marginBottom: "28px",
                maxWidth: "800px",
                paddingBottom: "0.12em",
              }}
            >
              Nu lucr&#x103;m cu oricine.
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "620px",
                letterSpacing: "0.01em",
              }}
            >
              Suntem selectivi pentru c&#x103; vrem s&#x103; livr&#x103;m rezultate reale. Un parteneriat prost e mai r&#x103;u dec&#x00e2;t nicio colaborare.
            </p>
          </div>
        </section>

        {/* ══ NU LUCRĂM CU ═══════════════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="scroll-reveal" style={{ marginBottom: "48px" }}>
              <span className="badge mb-6" style={{ display: "inline-flex", borderColor: "rgba(239,68,68,0.3)", color: "#ef4444", background: "rgba(239,68,68,0.08)" }}>
                Nu lucr&#x103;m cu
              </span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Probabil nu suntem potriviți dac&#x103;...
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {dontWorkWith.map((card, i) => (
                <div
                  key={i}
                  className="scroll-reveal card-hover"
                  style={{
                    padding: "32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: "3px solid #ef4444",
                    borderRadius: "16px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "1.5rem", flexShrink: 0, lineHeight: 1 }}>&#x274c;</span>
                  <div>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "8px" }}
                    >
                      {card.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CU CINE DA LUCRĂM ══════════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="scroll-reveal" style={{ marginBottom: "48px" }}>
              <span className="badge mb-6" style={{ display: "inline-flex" }}>
                Lucr&#x103;m cu
              </span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Suntem potriviți dac&#x103;...
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {doWorkWith.map((card, i) => (
                <div
                  key={i}
                  className="scroll-reveal card-hover"
                  style={{
                    padding: "32px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: "3px solid #56db84",
                    borderRadius: "16px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "1.5rem", flexShrink: 0, lineHeight: 1, color: "#56db84" }}>&#x2713;</span>
                  <div>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "8px" }}
                    >
                      {card.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ MIDDLE QUOTE ═══════════════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "80px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div
              className="scroll-reveal"
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderLeft: "4px solid #56db84",
                borderRadius: "16px",
                padding: "48px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.6,
                  maxWidth: "720px",
                  margin: "0 auto 20px",
                }}
              >
                &ldquo;Prefer&#x103;m s&#x103; pierdem un client &#x00ee;nainte s&#x103; &#x00ee;ncepem dec&#x00e2;t s&#x103; &#x00ee;l dezam&#x103;gim dup&#x103; 3 luni.&rdquo;
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.35)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                &mdash; Echipa Nesco Digital
              </p>
            </div>
          </div>
        </section>

        {/* ══ CTA FINAL ══════════════════════════════════════════════════════ */}
        <section style={{ position: "relative", backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container text-center">
            <div className="scroll-reveal">
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginBottom: "16px",
                }}
              >
                Crezi c&#x103; ne potrivim?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  maxWidth: "540px",
                  margin: "0 auto 40px",
                }}
              >
                Dac&#x103; ai citit p&#x00e2;n&#x103; aici &#x0219;i nu te-ai reg&#x103;sit &#x00ee;n lista de mai sus, probabil avem ceva de discutat.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                <Link
                  href="/contact/"
                  className="btn-primary"
                  style={{ fontSize: "1rem", padding: "18px 40px" }}
                >
                  Hai s&#x103; vorbim 30 de minute &rarr;
                </Link>
                <Link
                  href="/cum-lucram/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "18px 28px",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  Vezi cum lucr&#x103;m &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="ro" />
    </>
  );
}

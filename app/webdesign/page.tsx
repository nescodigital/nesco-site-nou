import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, XCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Webdesign & Dezvoltare Web | Site-uri Premium | Nesco Digital",
  description: "Site-uri construite strategic, nu doar frumoase. Webdesign și dezvoltare web pentru companii ambițioase , lead generation, magazine online, website-uri de companie.",
  path: "/webdesign/",
  routeKey: "webdesignHub",
});

const r = routes.ro;

const painPoints = [
  {
    title: "Ai un site dar nu generează lead-uri",
    desc: "Arată bine, dar vizitatorii pleacă fără să facă nimic. Nimeni nu știe de ce , și nimeni nu pare să rezolve problema.",
  },
  {
    title: "Ultimul site a durat 6 luni și tot nu era ce voiai",
    desc: "Briefuri neclare, revizii fără sfârșit, un rezultat mediocru livrat cu întârziere. Și acum trebuie să o iei de la capăt.",
  },
  {
    title: "Nu știi dacă să angajezi designer, developer sau agenție",
    desc: "Un designer bun nu știe să codeze. Un developer nu gândește conversii. O agenție clasică îți livrează un template scump.",
  },
];

const differentiators = [
  {
    title: "Strategie înainte de design",
    desc: "Înainte de orice pixel, înțelegem obiectivul: lead-uri, vânzări, credibilitate. Design-ul servește strategia, nu invers.",
  },
  {
    title: "Îți spunem din prima dacă te putem ajuta",
    desc: "Nu acceptăm orice proiect. Dacă după prima discuție nu vedem un potențial real de impact, îți spunem direct.",
  },
  {
    title: "Livrăm ce promitem, când promitem",
    desc: "Procese clare, timeline asumat, comunicare directă. Fără surprize, fără scuze.",
  },
];

const services = [
  { label: "Website Lead Generation", desc: "Site-uri construite cu un singur scop: să transforme vizitatorii în lead-uri calificate pentru echipa ta de vânzări.", href: r.leadGenWebsite, accent: "#56db84" },
  { label: "Website Companie", desc: "Prezență profesională online care reflectă valorile brandului tău și inspiră încredere clienților potențiali.", href: r.companyWebsite, accent: "#60a5fa" },
  { label: "Magazine Online", desc: "Shopify, WooCommerce, Magento , magazine online scalabile cu UX optimizat pentru conversii maxime.", href: r.ecommerceStores, accent: "#a78bfa" },
  { label: "Mentenanță Website", desc: "Site-ul tău mereu performant, securizat și actualizat. Intervenții rapide și monitorizare continuă.", href: r.websiteMaintenance, accent: "#fb923c" },
];

const stats = [
  { metric: "122+", label: "pagini livrate pe proiectele recente" },
  { metric: "15 ani", label: "experiență în web development" },
  { metric: "36M€+", label: "revenue generat pentru clienți" },
];

const faq = [
  {
    q: "Cât costă un site?",
    a: "Depinde de obiectiv și complexitate. Un website de prezentare începe de la 1.500€, un magazin online de la 3.500€. Îți dăm o estimare clară după prima discuție , fără surprize pe parcurs.",
  },
  {
    q: "Cât durează?",
    a: "Un website de prezentare: 3-5 săptămâni. Un magazin online: 6-10 săptămâni. Respectăm timeline-ul asumat sau îți comunicăm din timp orice modificare.",
  },
  {
    q: "Pe ce tehnologie construiți?",
    a: "Next.js pentru performanță maximă, WooCommerce sau Shopify pentru e-commerce, în funcție de nevoi. Site-urile noastre au scoruri PageSpeed de 90+ și se încarcă rapid pe orice dispozitiv.",
  },
];

export default function WebdesignPage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "100px" }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{ top: "-20%", right: "-10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(86,219,132,0.06) 0%, transparent 70%)", animation: "heroGlow 14s ease-in-out infinite" }}
          />
          <div
            className="absolute pointer-events-none"
            style={{ top: "-10%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(86,219,132,0.03) 0%, transparent 70%)", animation: "heroGlow 18s ease-in-out infinite reverse" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />
          <div className="relative page-container">
            <span className="badge mb-6" style={{ display: "inline-flex" }}>Webdesign</span>
            <h1
              className="font-black"
              style={{
                fontSize: "clamp(3rem, 7vw, 5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                fontFeatureSettings: '"kern" 1, "liga" 1',
                marginTop: "16px",
                marginBottom: "28px",
                maxWidth: "800px",
                background: "linear-gradient(135deg, #ffffff 20%, #56db84 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Webdesign care convertește vizitatori în clienți
            </h1>
            <p
              style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "560px", letterSpacing: "0.01em", marginBottom: "40px" }}
            >
              Nu facem site-uri frumoase. Facem site-uri care lucrează , fiecare element construit strategic în jurul unui obiectiv de business.
            </p>
            <Link
              href={r.contact}
              className="group inline-flex items-center gap-3 btn-primary"
              style={{ fontSize: "1rem", padding: "18px 40px" }}
            >
              Discută proiectul tău
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ── PAIN POINTS ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Situații comune</span>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}
                >
                  Recunoști vreuna din situațiile astea?
                </h2>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {painPoints.map((item, idx) => (
                <FadeInSection key={idx} delay={idx * 80}>
                  <div
                    className="card-hover"
                    style={{
                      padding: "28px 24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderLeft: "3px solid rgba(251,146,60,0.45)",
                      borderRadius: "16px",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{ width: 36, height: 36, borderRadius: "10px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}
                    >
                      <XCircle size={16} style={{ color: "#f87171" }} />
                    </div>
                    <h3 className="font-bold text-white" style={{ fontSize: "0.9375rem", letterSpacing: "-0.01em", marginBottom: "8px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.65 }}>
                      {item.desc}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE'RE DIFFERENT ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Abordare</span>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}
                >
                  Cum lucrăm diferit
                </h2>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {differentiators.map((item, idx) => (
                <FadeInSection key={idx} delay={idx * 80}>
                  <div
                    className="group card-hover"
                    style={{ padding: "32px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", height: "100%" }}
                  >
                    <div
                      style={{ width: 44, height: 44, borderRadius: "12px", background: "rgba(86,219,132,0.08)", border: "1px solid rgba(86,219,132,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}
                    >
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#56db84" }} />
                    </div>
                    <h3 className="font-bold text-white" style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "10px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
                      {item.desc}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Servicii</span>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}
                >
                  Ce construim
                </h2>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((svc, idx) => (
                <FadeInSection key={idx} delay={idx * 80}>
                  <Link
                    href={svc.href}
                    className="group card-hover block"
                    style={{ padding: "32px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", textDecoration: "none", height: "100%", display: "flex", flexDirection: "column" }}
                  >
                    <div
                      style={{ width: 44, height: 44, borderRadius: "12px", background: `${svc.accent}18`, border: `1px solid ${svc.accent}28`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", flexShrink: 0 }}
                    >
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: svc.accent }} />
                    </div>
                    <h3
                      className="font-bold text-white group-hover:text-brand-green transition-colors"
                      style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em", marginBottom: "10px" }}
                    >
                      {svc.label}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, flex: 1 }}>
                      {svc.desc}
                    </p>
                    <div
                      className="flex items-center gap-1.5 mt-5 font-semibold group-hover:gap-2.5 transition-all"
                      style={{ fontSize: "0.8125rem", color: svc.accent }}
                    >
                      Află mai multe <ArrowRight size={13} />
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
          <div className="page-container">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <FadeInSection key={idx} delay={idx * 100}>
                  <div style={{ textAlign: "center" }}>
                    <div
                      className="font-black tabular-nums"
                      style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1, color: "#56db84", letterSpacing: "-0.03em", marginBottom: "12px" }}
                    >
                      {stat.metric}
                    </div>
                    <div style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
                      {stat.label}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
          <div className="page-container">
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <span className="badge mb-6">FAQ</span>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}
                >
                  Întrebări frecvente
                </h2>
              </div>
            </FadeInSection>
            <div style={{ maxWidth: "760px", margin: "0 auto" }}>
              <FaqAccordion items={faq} />
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", padding: "160px 0" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(86,219,132,0.08) 0%, transparent 70%)" }}
          />
          <div
            style={{ position: "relative", zIndex: 1, maxWidth: "48rem", width: "100%", margin: "0 auto", textAlign: "center", padding: "0 2rem" }}
          >
            <h2
              className="font-black text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "24px" }}
            >
              Hai să construim ceva care chiar funcționează
            </h2>
            <p
              style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "48px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}
            >
              O discuție de 30 de minute în care înțelegem obiectivul tău și îți spunem sincer ce putem face.
            </p>
            <Link
              href={r.contact}
              className="group inline-flex items-center gap-3 btn-primary"
              style={{ fontSize: "1rem", padding: "18px 40px" }}
            >
              Discută proiectul tău
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer locale="ro" />
    </>
  );
}

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
  title: "Reclame Plătite | Google Ads, Meta Ads, TikTok Ads | Nesco Digital",
  description: "Nu gestionăm bugete — construim sisteme de achiziție profitabile. Google Ads, Meta Ads, TikTok Ads și LinkedIn Ads pentru companii ambițioase.",
  path: "/reclame-platite/",
  routeKey: "paidAdsHub",
});

const r = routes.ro;

const painPoints = [
  {
    title: "Ai mai lucrat cu o agenție și nu a mers",
    desc: "Rapoarte frumoase, rezultate slabe. O agenție care nu a înțeles business-ul tău și a aplicat același template ca la toți clienții.",
  },
  {
    title: "Vrei să angajezi un specialist dar...",
    desc: "Un om bun pe paid ads costă 2.000-3.500€/lună + beneficii + risc că pleacă în 12 luni. Și nu acoperă Google Ads, Meta Ads, TikTok și LinkedIn simultan.",
  },
  {
    title: "Bugetul tău de ads nu lucrează eficient",
    desc: "Simți că plătești mult și obții puțin. ROAS-ul stagnează, CPA-ul crește, iar agenția ta spune că 'piața e dificilă'.",
  },
];

const differentiators = [
  {
    title: "Îți spunem din prima dacă te putem ajuta",
    desc: "Nu pierdem timpul tău sau al nostru. După o discuție de 30 de minute știm dacă există potențial real de colaborare.",
  },
  {
    title: "Înțelegem business-ul, nu doar platforma",
    desc: "Nu rulăm campanii. Construim sisteme de achiziție care se integrează cu vânzările, retenția și marja ta reală.",
  },
  {
    title: "Experiență pe bani reali, nu bugete de test",
    desc: "36M€+ bugete gestionate. 23.000+ campanii. Știm ce funcționează și ce nu — pe piața românească și internațională.",
  },
];

const services = [
  { label: "Google Ads", desc: "Campanii Search, Display și Shopping optimizate pentru ROAS maxim. CPA cu 38% mai mic față de media industriei.", href: r.googleAds, accent: "#56db84" },
  { label: "Facebook Ads", desc: "Audiențe precise construite pe baza datelor tale. Conversii reale pentru e-commerce și lead generation.", href: r.facebookAds, accent: "#60a5fa" },
  { label: "Instagram Ads", desc: "Creativ vizual, impactant și convertibil. Ajungem la audiența ta cu formate care opresc scroll-ul.", href: r.instagramAds, accent: "#a78bfa" },
  { label: "TikTok Ads", desc: "Reach Gen Z și Millennials cu creativitate nativă. Formate video care generează brand awareness și conversii.", href: r.tiktokAds, accent: "#fb923c" },
  { label: "LinkedIn Ads", desc: "B2B lead generation premium. Ajungem la decidenții din companiile țintă cu mesaje relevante.", href: r.linkedinAds, accent: "#22d3ee" },
];

const stats = [
  { metric: "36M€+", label: "bugete gestionate" },
  { metric: "23.000+", label: "campanii executate" },
  { metric: "15 ani", label: "experiență în paid media" },
];

const faq = [
  {
    q: "E mai ieftin să angajez un om intern.",
    a: "Un specialist senior pe paid ads costă 2.500-3.500€/lună + beneficii + timp de onboarding + risc de rotație. Cu noi ai o echipă cu experiență pe toate platformele, fără costuri fixe și fără să o iei de la zero când cineva pleacă.",
  },
  {
    q: "Am mai lucrat cu o agenție și nu a funcționat.",
    a: "Înțelegem. De aceea nu începem nicio colaborare fără să fim sinceri că putem aduce valoare. Dacă după prima discuție nu vedem un potențial clar, îți spunem direct.",
  },
  {
    q: "Cum știu că veți înțelege business-ul meu?",
    a: "Nu aplicăm template-uri. Prima săptămână e dedicată în totalitate înțelegerii business-ului tău — marje, ICP, funnel, competiție. Campania vine după.",
  },
];

export default function ReclamePlatitePage() {
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
            <span className="badge mb-6" style={{ display: "inline-flex" }}>Reclame Plătite</span>
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
              Reclame Plătite care generează revenue real
            </h1>
            <p
              style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "560px", letterSpacing: "0.01em", marginBottom: "40px" }}
            >
              Nu gestionăm bugete. Construim sisteme de achiziție profitabile — și suntem primii care îți spun dacă nu putem ajuta.
            </p>
            <Link
              href={r.contact}
              className="group inline-flex items-center gap-3 btn-primary"
              style={{ fontSize: "1rem", padding: "18px 40px" }}
            >
              Vorbește cu un specialist
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
                <span className="badge mb-6">Platforme</span>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}
                >
                  Platforme pe care le gestionăm
                </h2>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            <FadeInSection>
              <div style={{ textAlign: "center", marginBottom: "64px" }}>
                <span className="badge mb-6">Track record</span>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}
                >
                  Rezultate din proiecte reale
                </h2>
              </div>
            </FadeInSection>
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
              Gata să construim un sistem de achiziție profitabil?
            </h2>
            <p
              style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "48px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}
            >
              O discuție de 30 de minute. Fără pitch, fără presiune — doar o evaluare sinceră a situației tale.
            </p>
            <Link
              href={r.contact}
              className="group inline-flex items-center gap-3 btn-primary"
              style={{ fontSize: "1rem", padding: "18px 40px" }}
            >
              Programează o discuție gratuită
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer locale="ro" />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    icon: (
      <svg viewBox="0 0 100 100" width="120" height="120" style={{position:"absolute", top:"-10px", right:"-10px", opacity:0.12}} aria-hidden="true">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="6"/>
        <line x1="30" y1="30" x2="70" y2="70" stroke="#ef4444" strokeWidth="6" strokeLinecap="round"/>
        <line x1="70" y1="30" x2="30" y2="70" stroke="#ef4444" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Vrei să angajezi un specialist dar...",
    desc: "Un om bun pe paid ads costă 2.000-3.500€/lună + beneficii + risc că pleacă în 12 luni. Și nu acoperă Google Ads, Meta Ads, TikTok și LinkedIn simultan.",
    icon: (
      <svg viewBox="0 0 100 100" width="120" height="120" style={{position:"absolute", top:"-10px", right:"-10px", opacity:0.12}} aria-hidden="true">
        <circle cx="35" cy="30" r="15" fill="#ef4444"/>
        <path d="M5 80 Q5 55 35 55 Q65 55 65 80" fill="#ef4444"/>
        <circle cx="68" cy="25" r="12" fill="#ef4444"/>
        <path d="M45 80 Q48 60 68 60 Q88 60 88 80" fill="#ef4444"/>
      </svg>
    ),
  },
  {
    title: "Bugetul tău de ads nu lucrează eficient",
    desc: "Simți că plătești mult și obții puțin. ROAS-ul stagnează, CPA-ul crește, iar agenția ta spune că 'piața e dificilă'.",
    icon: (
      <svg viewBox="0 0 100 100" width="120" height="120" style={{position:"absolute", top:"-10px", right:"-10px", opacity:0.12}} aria-hidden="true">
        <polyline points="10,80 30,50 50,65 70,20 90,35" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="70,20 90,20 90,35" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const differentiators = [
  {
    title: "Îți spunem din prima dacă te putem ajuta",
    desc: "Nu pierdem timpul tău sau al nostru. După o discuție de 30 de minute știm dacă există potențial real de colaborare.",
    icon: (
      <svg viewBox="0 0 100 100" width="140" height="140" style={{position:"absolute", top:"50%", right:"-20px", transform:"translateY(-50%)", opacity:0.1}} aria-hidden="true">
        <path d="M10 20 Q10 10 20 10 L70 10 Q80 10 80 20 L80 55 Q80 65 70 65 L45 65 L30 80 L30 65 L20 65 Q10 65 10 55 Z" fill="#56db84"/>
        <path d="M55 45 Q55 38 62 38 L85 38 Q92 38 92 45 L92 65 Q92 72 85 72 L78 72 L78 82 L68 72 L62 72 Q55 72 55 65 Z" fill="#56db84"/>
      </svg>
    ),
  },
  {
    title: "Înțelegem business-ul, nu doar platforma",
    desc: "Nu rulăm campanii. Construim sisteme de achiziție care se integrează cu vânzările, retenția și marja ta reală.",
    icon: (
      <svg viewBox="0 0 100 100" width="140" height="140" style={{position:"absolute", top:"50%", right:"-20px", transform:"translateY(-50%)", opacity:0.1}} aria-hidden="true">
        <circle cx="50" cy="50" r="10" fill="#56db84"/>
        <circle cx="20" cy="25" r="8" fill="#56db84"/>
        <circle cx="80" cy="25" r="8" fill="#56db84"/>
        <circle cx="20" cy="75" r="8" fill="#56db84"/>
        <circle cx="80" cy="75" r="8" fill="#56db84"/>
        <line x1="50" y1="50" x2="20" y2="25" stroke="#56db84" strokeWidth="3"/>
        <line x1="50" y1="50" x2="80" y2="25" stroke="#56db84" strokeWidth="3"/>
        <line x1="50" y1="50" x2="20" y2="75" stroke="#56db84" strokeWidth="3"/>
        <line x1="50" y1="50" x2="80" y2="75" stroke="#56db84" strokeWidth="3"/>
        <line x1="20" y1="25" x2="80" y2="25" stroke="#56db84" strokeWidth="2"/>
        <line x1="20" y1="75" x2="80" y2="75" stroke="#56db84" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Experiență pe bani reali, nu bugete de test",
    desc: "36M€+ bugete gestionate. 23.000+ campanii. Știm ce funcționează și ce nu — pe piața românească și internațională.",
    icon: (
      <svg viewBox="0 0 100 100" width="140" height="140" style={{position:"absolute", top:"50%", right:"-20px", transform:"translateY(-50%)", opacity:0.1}} aria-hidden="true">
        <path d="M35 10 L65 10 L65 55 Q65 75 50 80 Q35 75 35 55 Z" fill="#56db84"/>
        <path d="M35 25 L20 25 Q10 25 10 35 Q10 50 30 55" fill="none" stroke="#56db84" strokeWidth="5"/>
        <path d="M65 25 L80 25 Q90 25 90 35 Q90 50 70 55" fill="none" stroke="#56db84" strokeWidth="5"/>
        <rect x="38" y="80" width="24" height="6" fill="#56db84"/>
        <rect x="30" y="86" width="40" height="8" rx="2" fill="#56db84"/>
      </svg>
    ),
  },
];

const services = [
  {
    label: "Google Ads",
    desc: "Campanii Search, Display și Shopping optimizate pentru ROAS maxim. CPA cu 38% mai mic față de media industriei.",
    href: r.googleAds,
    accent: "#4285F4",
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <path fill="#4285F4" d="M47 24.5c0-1.57-.15-3.09-.42-4.55H24v8.61h12.91c-.58 2.96-2.26 5.48-4.78 7.12l7.73 6C43.92 37.5 47 31.45 47 24.5z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.13 1.44-4.87 2.28-8.16 2.28-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.16C6.51 42.68 14.62 48 24 48z" />
        <path fill="#FBBC04" d="M10.53 29.56C10.19 28.5 10 27.27 10 26s.19-2.5.53-3.56l-7.98-6.16A23.93 23.93 0 001 26c0 3.85.86 7.5 2.55 10.72l7.98-7.16z" />
        <path fill="#EA4335" d="M24 10.64c3.5 0 6.63 1.2 9.1 3.57l6.83-6.83C35.93 3.38 30.47 1 24 1 14.62 1 6.51 6.32 2.55 14.28l7.98 6.16C12.43 14.86 17.74 10.64 24 10.64z" />
      </svg>
    ),
  },
  {
    label: "Facebook Ads",
    desc: "Audiențe precise construite pe baza datelor tale. Conversii reale pentru e-commerce și lead generation.",
    href: r.facebookAds,
    accent: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
      </svg>
    ),
  },
  {
    label: "Instagram Ads",
    desc: "Creativ vizual, impactant și convertibil. Ajungem la audiența ta cu formate care opresc scroll-ul.",
    href: r.instagramAds,
    accent: "#d6249f",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true">
        <defs>
          <linearGradient id="ig-lin" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD600" />
            <stop offset="30%" stopColor="#FD5949" />
            <stop offset="60%" stopColor="#D6249F" />
            <stop offset="100%" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="url(#ig-lin)" />
      </svg>
    ),
  },
  {
    label: "TikTok Ads",
    desc: "Reach Gen Z și Millennials cu creativitate nativă. Formate video care generează brand awareness și conversii.",
    href: r.tiktokAds,
    accent: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" fill="white" />
      </svg>
    ),
  },
  {
    label: "LinkedIn Ads",
    desc: "B2B lead generation premium. Ajungem la decidenții din companiile țintă cu mesaje relevante.",
    href: r.linkedinAds,
    accent: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2" />
      </svg>
    ),
  },
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
                      position: "relative",
                      overflow: "hidden",
                      padding: "28px 24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderLeft: "3px solid rgba(251,146,60,0.45)",
                      borderRadius: "16px",
                      height: "100%",
                    }}
                  >
                    {item.icon}
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
                    style={{ position: "relative", overflow: "hidden", padding: "32px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", height: "100%" }}
                  >
                    {item.icon}
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
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", flexShrink: 0 }}>
                      {svc.icon}
                    </div>
                    <h3
                      className="font-bold text-white group-hover:text-brand-green transition-colors"
                      style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em", marginBottom: "10px", textAlign: "center" }}
                    >
                      {svc.label}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, flex: 1, textAlign: "center" }}>
                      {svc.desc}
                    </p>
                    <div
                      className="flex items-center justify-center gap-1.5 mt-5 font-semibold group-hover:gap-2.5 transition-all"
                      style={{ fontSize: "0.8125rem", color: "#56db84" }}
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

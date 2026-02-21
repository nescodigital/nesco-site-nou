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
  title: "Marketing Digital | SEO, Email Marketing, Social Media | Nesco Digital",
  description: "Strategie, execuție și optimizare continuă , toate sub același acoperiș. SEO, email marketing, social media și CRO pentru creștere măsurabilă.",
  path: "/marketing-digital/",
  routeKey: "digitalMarketingHub",
});

const r = routes.ro;

const painPoints = [
  {
    title: "Ai servicii de marketing la mai mulți furnizori și nimeni nu vede imaginea de ansamblu",
    desc: "SEO la o agenție, ads la alta, email marketing intern. Nimeni nu coordonează, nimeni nu e responsabil pentru rezultatul final.",
  },
  {
    title: "Angajezi sau externalizezi , ambele variante par riscante",
    desc: "Un om bun cu competențe complete costă mult, pleacă repede și nu acoperă tot. O agenție clasică livrează rapoarte și trimite factura.",
  },
  {
    title: "Nu știi ce canal merită buget și ce e pierdere de bani",
    desc: "Toată lumea spune că 'depinde'. Tu vrei cineva care să analizeze situația ta și să spună direct ce funcționează.",
  },
];

const differentiators = [
  {
    title: "Acoperim tot spectrul digital",
    desc: "SEO, paid ads, email marketing, social media, CRO, strategie , o echipă care vede și execută imaginea completă.",
  },
  {
    title: "Suntem sinceri despre ce funcționează",
    desc: "Nu vindem servicii de care nu ai nevoie. Dacă bugetul tău de SEO nu are sens acum, îți spunem. Preferăm o relație lungă unui contract scurt.",
  },
  {
    title: "Fără rotație de oameni, fără pierdere de know-how",
    desc: "Nu angajezi un om care poate pleca. Lucrezi cu o echipă care acumulează cunoaștere despre business-ul tău în timp.",
  },
];

const services = [
  { label: "Strategie Digitală", desc: "Plan clar de creștere digitală, personalizat pentru obiectivele și resursele afacerii tale.", href: r.digitalStrategy, accent: "#56db84" },
  { label: "Email Marketing", desc: "ROI 42:1 dovedit. Campanii de email automation și newsletters care convertesc și fidelizează.", href: r.emailMarketing, accent: "#60a5fa" },
  { label: "CRM Solutions", desc: "Relații cu clienții optimizate. Implementăm și gestionăm soluții CRM care cresc retenția.", href: r.crmSolutions, accent: "#a78bfa" },
  { label: "CRO Solutions", desc: "Mai multe conversii din același trafic, fără buget extra. Optimizare bazată pe date și teste A/B.", href: r.croSolutions, accent: "#fb923c" },
  { label: "SEO", desc: "Trafic organic de calitate, sustenabil pe termen lung. Strategii SEO tehnice și de conținut.", href: r.seoSolutions, accent: "#f472b6" },
  { label: "Social Media", desc: "Comunitate activă și engagement real. Gestionăm prezența ta pe toate platformele sociale.", href: r.socialMedia, accent: "#22d3ee" },
];

const stats = [
  { metric: "15 ani", label: "experiență în marketing digital" },
  { metric: "36M€+", label: "bugete gestionate" },
  { metric: "23.000+", label: "campanii executate" },
];

const faq = [
  {
    q: "De unde știu că meritați bugetul meu de marketing?",
    a: "Nu cerem să ne crezi pe cuvânt. Începem cu un audit care îți arată exact unde pierzi bani și unde sunt oportunități reale. Pe baza lui decidem împreună dacă și cum colaborăm.",
  },
  {
    q: "Cât timp până văd rezultate?",
    a: "Depinde de canal. Paid ads: 2-4 săptămâni. SEO: 3-6 luni. Email marketing: 30-60 zile. Îți spunem de la început la ce să te aștepți și când.",
  },
  {
    q: "Lucrați cu companii mici sau doar enterprise?",
    a: "Lucrăm cu companii care au un produs validat și vor să scaleze , indiferent de dimensiune. Bugetul minim recomandat pentru paid ads este 3.000€/lună.",
  },
];

export default function MarketingDigitalPage() {
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
            <span className="badge mb-6" style={{ display: "inline-flex" }}>Marketing Digital</span>
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
              Marketing Digital orientat spre rezultate
            </h1>
            <p
              style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "560px", letterSpacing: "0.01em", marginBottom: "40px" }}
            >
              Strategie, execuție și optimizare continuă , toate sub același acoperiș. Fără să angajezi 5 oameni diferiți.
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
                <span className="badge mb-6">Diferențiatori</span>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}
                >
                  Un partener, nu un furnizor
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
                  Servicii de marketing digital
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
              Gata să tratezi marketingul ca pe un sistem, nu ca pe o cheltuială?
            </h2>
            <p
              style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "48px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}
            >
              O discuție de 30 de minute. Îți spunem sincer ce vedem și ce am face în locul tău.
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

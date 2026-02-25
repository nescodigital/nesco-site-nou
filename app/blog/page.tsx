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
  { key: "ecommerce", label: "E-commerce", color: "#f59e0b" },
  { key: "web-design", label: "Web Design", color: "#a855f7" },
  { key: "automatizare", label: "Automatizare", color: "#ec4899" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

const ARTICLES: {
  slug: string;
  title: string;
  excerpt: string;
  category: CategoryKey;
  categoryLabel: string;
  categoryColor: string;
  image: string;
  date: string;
  readTime: string;
}[] = [
  {
    slug: "/blog/cum-construiesti-funnel-vanzari/",
    title: "Cum sa construiesti un funnel de vanzari complet",
    excerpt: "Ghid pas cu pas pentru construirea unui funnel de vanzari eficient — de la TOFU la BOFU — cu tool-urile recomandate la fiecare etapa.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/cum-construiesti-funnel-vanzari.jpg",
    date: "3 Mar 2026",
    readTime: "13 min",
  },
  {
    slug: "/blog/whatsapp-business-vanzari-suport/",
    title: "Cum sa folosesti WhatsApp Business pentru vanzari si suport",
    excerpt: "Ghid complet de WhatsApp Business API: setup, automatizari, flow-uri de conversie si cele mai bune practici pentru vanzari si suport clienti.",
    category: "automatizare",
    categoryLabel: "Automatizare",
    categoryColor: "#ec4899",
    image: "/blog/whatsapp-business-vanzari-suport.png",
    date: "2 Mar 2026",
    readTime: "10 min",
  },
  {
    slug: "/blog/cele-mai-bune-tool-uri-ai-marketing/",
    title: "Cele mai bune tool-uri AI pentru marketing digital in 2026",
    excerpt: "De la crearea de reclame la SEO si analytics — cele mai bune tool-uri AI organizate pe cazuri de utilizare, cu review-uri detaliate si comparatii.",
    category: "automatizare",
    categoryLabel: "Automatizare",
    categoryColor: "#ec4899",
    image: "/blog/cele-mai-bune-tool-uri-ai-marketing.jpg",
    date: "1 Mar 2026",
    readTime: "11 min",
  },
  {
    slug: "/blog/cum-creezi-vinzi-cursuri-online/",
    title: "Cum sa creezi si sa vinzi cursuri online in 2026",
    excerpt: "De la validarea ideii la lansare si marketing — ghid complet cu comparatie de platforme si strategii testate pentru crearea si vanzarea cursurilor online.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/cum-creezi-vinzi-cursuri-online.jpg",
    date: "28 Feb 2026",
    readTime: "14 min",
  },
  {
    slug: "/blog/cele-mai-bune-landing-page-builders/",
    title: "Cele mai bune landing page builders pentru conversii mai mari",
    excerpt: "Cand ai nevoie de un landing page builder, ce feature-uri conteaza si care sunt cele mai bune optiuni — cu comparatie detaliata si review-uri.",
    category: "web-design",
    categoryLabel: "Web Design",
    categoryColor: "#a855f7",
    image: "/blog/cele-mai-bune-landing-page-builders.png",
    date: "27 Feb 2026",
    readTime: "10 min",
  },
  {
    slug: "/blog/automatizare-marketing-ghid-tools/",
    title: "Cum sa-ti automatizezi marketingul: Ghid complet de tools",
    excerpt: "Ce sa automatizezi la fiecare etapa a afacerii si ce tool-uri sa folosesti — de la email si chatbots la analytics si ad management.",
    category: "automatizare",
    categoryLabel: "Automatizare",
    categoryColor: "#ec4899",
    image: "/blog/automatizare-marketing-ghid-tools.png",
    date: "26 Feb 2026",
    readTime: "13 min",
  },
  {
    slug: "/blog/cele-mai-bune-chatbot-live-chat/",
    title: "Cele mai bune chatbot-uri si tool-uri de live chat pentru site-uri",
    excerpt: "Ghid complet cu comparatie: cand sa folosesti chatbot, cand live chat si care sunt cele mai bune tool-uri pentru fiecare scenariu.",
    category: "automatizare",
    categoryLabel: "Automatizare",
    categoryColor: "#ec4899",
    image: "/blog/cele-mai-bune-chatbot-live-chat.png",
    date: "25 Feb 2026",
    readTime: "11 min",
  },
  {
    slug: "/blog/cele-mai-bune-platforme-email-marketing/",
    title: "Cele mai bune platforme de email marketing in 2026",
    excerpt: "Comparatie detaliata intre cele mai populare platforme de email marketing: functionalitati, preturi si pentru cine sunt potrivite.",
    category: "automatizare",
    categoryLabel: "Automatizare",
    categoryColor: "#ec4899",
    image: "/blog/cele-mai-bune-platforme-email-marketing.png",
    date: "24 Feb 2026",
    readTime: "12 min",
  },
  {
    slug: "/blog/geo-optimizare-ai-search/",
    title: "Cum să apari în ChatGPT și Google AI Overviews (GEO)",
    excerpt: "Ghid complet de Generative Engine Optimization: cum să-ți optimizezi conținutul ca să apari în rezultatele AI — de la ChatGPT la Google AI Overviews.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/geo-optimizare-ai-search.png",
    date: "23 Feb 2026",
    readTime: "11 min",
  },
  {
    slug: "/blog/cat-costa-un-site-web/",
    title: "Cât costă un site web în 2026? Ghid complet de prețuri",
    excerpt: "De la site de prezentare la magazin online — analizăm prețurile reale pentru dezvoltare web în România și ce influențează costul final.",
    category: "web-design",
    categoryLabel: "Web Design",
    categoryColor: "#a855f7",
    image: "/blog/cat-costa-un-site-web.png",
    date: "22 Feb 2026",
    readTime: "10 min",
  },
  {
    slug: "/blog/cat-costa-google-ads-romania/",
    title: "Cât costă Google Ads în România? Ghid de bugete 2026",
    excerpt: "CPC mediu pe industrii, bugete minime recomandate și cum să-ți calculezi ROI-ul înainte de a investi primul leu în Google Ads.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/cat-costa-google-ads-romania.png",
    date: "21 Feb 2026",
    readTime: "9 min",
  },
  {
    slug: "/blog/cost-specialist-intern-vs-agentie/",
    title: "Cât costă un specialist intern vs. o agenție de marketing digital?",
    excerpt: "Comparație detaliată: salariu, taxe, tools, management — vs. un pachet de agenție all-inclusive. Cifrele reale pe care nimeni nu ți le arată.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/cost-specialist-vs-agentie.jpg",
    date: "20 Feb 2026",
    readTime: "8 min",
  },
  {
    slug: "/blog/abandon-cos-cumparaturi/",
    title: "De ce îți abandonează clienții coșul (și cum repari)",
    excerpt: "73% din coșuri sunt abandonate. Descoperă cele mai frecvente cauze și 8 strategii dovedite pentru a recupera vânzările pierdute.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    categoryColor: "#f59e0b",
    image: "/blog/abandon-cos-cumparaturi.png",
    date: "19 Feb 2026",
    readTime: "9 min",
  },
  {
    slug: "/blog/de-ce-nu-merg-reclamele-meta/",
    title: "De ce nu-ți merg reclamele pe Meta? 7 greșeli frecvente",
    excerpt: "Dacă arunci bani pe Facebook și Instagram Ads fără rezultate, problema nu e platforma. Descoperă cele 7 greșeli care îți sabotează campaniile.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/de-ce-nu-merg-meta-ads.jpg",
    date: "18 Feb 2026",
    readTime: "10 min",
  },
  {
    slug: "/blog/seo-local-google-maps/",
    title: "SEO local: Cum să apari primul pe Google în orașul tău",
    excerpt: "De la Google Business Profile la recenzii și citări locale — ghid pas cu pas pentru a domina rezultatele locale și Google Maps.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/seo-local-google-maps.png",
    date: "17 Feb 2026",
    readTime: "10 min",
  },
  {
    slug: "/blog/facebook-ads-vs-google-ads-ecommerce/",
    title: "Facebook Ads vs Google Ads: Ce alegi pentru magazinul online?",
    excerpt: "Comparație directă între cele două platforme de advertising pentru e-commerce: costuri, audiențe, formate, ROI și când să le folosești pe fiecare.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/facebook-ads-vs-google-ads-ecommerce.png",
    date: "16 Feb 2026",
    readTime: "11 min",
  },
  {
    slug: "/blog/seo-vs-google-ads/",
    title: "SEO vs. Google Ads: Ce alegi când ai buget limitat?",
    excerpt: "Trafic organic sau plătit? Analizăm costurile, timeline-ul și ROI-ul fiecărei strategii ca să iei decizia corectă pentru afacerea ta.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/seo-vs-google-ads.jpg",
    date: "15 Feb 2026",
    readTime: "9 min",
  },
  {
    slug: "/blog/ai-overviews-impact-seo/",
    title: "Cum afectează AI Overviews SEO-ul și ce trebuie să faci",
    excerpt: "Google AI Overviews schimbă regulile jocului. Află cum influențează traficul organic și ce strategii noi trebuie să adopți pentru a rămâne vizibil.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/ai-overviews-impact-seo.png",
    date: "14 Feb 2026",
    readTime: "8 min",
  },
  {
    slug: "/blog/ce-este-growth-sprint/",
    title: "Ce este un Growth Sprint și cum accelerează creșterea",
    excerpt: "Framework-ul de 6 săptămâni care combină strategie, execuție și optimizare într-un singur sprint focusat pe rezultate măsurabile.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/ce-este-growth-sprint.png",
    date: "13 Feb 2026",
    readTime: "7 min",
  },
  {
    slug: "/blog/reclame-tiktok-romania/",
    title: "Cum să faci reclame pe TikTok în România: Ghid complet",
    excerpt: "De la setup-ul contului la formate creative și targetare — tot ce trebuie să știi pentru a lansa campanii TikTok Ads profitabile în România.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/reclame-tiktok-romania.png",
    date: "12 Feb 2026",
    readTime: "12 min",
  },
  {
    slug: "/blog/cum-alegi-agentie-marketing/",
    title: "Cum să alegi agenția de marketing potrivită: Checklist 10 pași",
    excerpt: "Criterii obiective, red flags de evitat și întrebările pe care trebuie să le pui înainte de a semna contractul cu o agenție de marketing digital.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/cum-alegi-agentie-marketing.png",
    date: "11 Feb 2026",
    readTime: "9 min",
  },
  {
    slug: "/blog/rata-de-conversie-ghid/",
    title: "Rata de conversie: Ce este, cum o calculezi, cum o crești",
    excerpt: "Ghid complet CRO: de la definiție și benchmark-uri pe industrii la cele 12 tehnici testate care cresc rata de conversie a site-ului tău.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    categoryColor: "#f59e0b",
    image: "/blog/rata-de-conversie-ghid.jpg",
    date: "9 Feb 2026",
    readTime: "10 min",
  },
  {
    slug: "/blog/creste-vanzari-magazin-online/",
    title: "15 strategii testate să crești vânzările în magazinul online",
    excerpt: "De la optimizarea paginilor de produs la email flows automate — strategii concrete, cu exemple reale, pentru creșterea veniturilor în e-commerce.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    categoryColor: "#f59e0b",
    image: "/blog/creste-vanzari-magazin-online.png",
    date: "8 Feb 2026",
    readTime: "13 min",
  },
  {
    slug: "/blog/strategie-marketing-digital-ghid/",
    title: "Strategie de marketing digital pas cu pas (Ghid 2026)",
    excerpt: "Cum construiești o strategie de marketing digital de la zero: obiective, canale, buget, KPI și calendar de execuție — totul într-un singur framework.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/strategie-marketing-digital-ghid.jpg",
    date: "6 Feb 2026",
    readTime: "14 min",
  },
  {
    slug: "/blog/email-marketing-ecommerce/",
    title: "Email marketing pentru ecommerce: Cum crești vânzările cu newslettere",
    excerpt: "Flows automate, segmentare, A/B testing și cele 7 emailuri esențiale pe care orice magazin online trebuie să le aibă configurate.",
    category: "automatizare",
    categoryLabel: "Automatizare",
    categoryColor: "#ec4899",
    image: "/blog/email-marketing-ecommerce.png",
    date: "5 Feb 2026",
    readTime: "11 min",
  },
  {
    slug: "/blog/de-ce-nu-functioneaza-marketingul/",
    title: "De ce nu funcționează marketingul digital al afacerii tale",
    excerpt: "10 motive reale pentru care campaniile tale nu aduc rezultate — și soluțiile concrete pentru fiecare problemă, testate pe zeci de clienți.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/de-ce-nu-functioneaza-marketingul.png",
    date: "3 Feb 2026",
    readTime: "8 min",
  },
  {
    slug: "/blog/linkedin-ads-b2b-romania/",
    title: "LinkedIn Ads pentru B2B în România: Merită investiția?",
    excerpt: "Costuri reale, formate de anunțuri, targetare avansată și studii de caz — tot ce trebuie să știi despre LinkedIn Ads pentru generare de leaduri B2B.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/linkedin-ads-b2b-romania.png",
    date: "1 Feb 2026",
    readTime: "10 min",
  },
  {
    slug: "/blog/performance-max-ecommerce/",
    title: "Performance Max 2026: Ghid complet pentru magazine online",
    excerpt: "Cum funcționează campaniile Performance Max, cum le setezi corect pentru e-commerce și cele 5 greșeli care îți consumă bugetul degeaba.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/performance-max-ecommerce.png",
    date: "30 Ian 2026",
    readTime: "11 min",
  },
  {
    slug: "/blog/ai-in-marketing-2026/",
    title: "Cum folosesc companiile AI în marketing în 2026",
    excerpt: "De la generare de content la optimizare de campanii — cum implementezi inteligența artificială în marketingul tău fără să pierzi controlul.",
    category: "automatizare",
    categoryLabel: "Automatizare",
    categoryColor: "#ec4899",
    image: "/blog/ai-in-marketing-2026.png",
    date: "28 Ian 2026",
    readTime: "9 min",
  },
  {
    slug: "/blog/retargeting-remarketing-ghid/",
    title: "Retargeting și remarketing: Cum recuperezi clienții pierduți",
    excerpt: "Strategii de retargeting pe Google, Meta și email care transformă vizitatorii care au plecat în clienți plătitori — cu exemple concrete de audiențe.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/retargeting-remarketing.png",
    date: "26 Ian 2026",
    readTime: "10 min",
  },
  {
    slug: "/blog/cum-alegi-crm/",
    title: "Cum să alegi și să implementezi un CRM în 2026",
    excerpt: "Comparație HubSpot vs Salesforce vs Pipedrive, criterii de selecție și ghid de implementare pas cu pas pentru echipe mici și medii.",
    category: "automatizare",
    categoryLabel: "Automatizare",
    categoryColor: "#ec4899",
    image: "/blog/cum-alegi-crm.png",
    date: "24 Ian 2026",
    readTime: "12 min",
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

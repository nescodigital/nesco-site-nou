"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CATEGORIES = [
  { key: "all", label: "Alle" },
  { key: "strategie", label: "Strategie", color: "#3b82f6" },
  { key: "paid-ads", label: "Paid Ads", color: "#56db84" },
  { key: "seo", label: "SEO", color: "#14b8a6" },
  { key: "ecommerce", label: "E-Commerce", color: "#f59e0b" },
  { key: "web-design", label: "Web Design", color: "#a855f7" },
  { key: "automatisierung", label: "Automatisierung", color: "#ec4899" },
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
    slug: "/ge/blog/sales-funnel-aufbauen-anleitung/",
    title: "Wie man einen kompletten Sales Funnel aufbaut",
    excerpt: "Schritt-für-Schritt-Anleitung zum Aufbau eines effektiven Sales Funnels — von TOFU bis BOFU — mit den besten Tools für jede Phase.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/cum-construiesti-funnel-vanzari.jpg",
    date: "3. Mär 2026",
    readTime: "13 Min",
  },
  {
    slug: "/ge/blog/whatsapp-business-vertrieb-support/",
    title: "WhatsApp Business für Vertrieb und Support nutzen",
    excerpt: "Kompletter WhatsApp Business API Leitfaden: Setup, Automatisierungs-Flows, Konversionsstrategien und Best Practices für Vertrieb und Kundenservice.",
    category: "automatisierung",
    categoryLabel: "Automatisierung",
    categoryColor: "#ec4899",
    image: "/blog/whatsapp-business-vanzari-suport.png",
    date: "2. Mär 2026",
    readTime: "10 Min",
  },
  {
    slug: "/ge/blog/beste-ki-tools-digitales-marketing/",
    title: "Beste KI-Tools für digitales Marketing 2026",
    excerpt: "Von Anzeigenerstellung bis SEO und Analytics — die besten KI-Tools nach Anwendungsfall organisiert, mit detaillierten Reviews und Vergleichen.",
    category: "automatisierung",
    categoryLabel: "Automatisierung",
    categoryColor: "#ec4899",
    image: "/blog/cele-mai-bune-tool-uri-ai-marketing.jpg",
    date: "1. Mär 2026",
    readTime: "11 Min",
  },
  {
    slug: "/ge/blog/online-kurse-erstellen-verkaufen/",
    title: "Online-Kurse erstellen und verkaufen in 2026",
    excerpt: "Von der Ideenvalidierung bis zur Vermarktung — kompletter Leitfaden mit Plattformvergleich und getesteten Strategien für Online-Kurse.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/cum-creezi-vinzi-cursuri-online.jpg",
    date: "28. Feb 2026",
    readTime: "14 Min",
  },
  {
    slug: "/ge/blog/beste-landing-page-builder/",
    title: "Beste Landing Page Builder für höhere Conversions",
    excerpt: "Wann du einen Landing Page Builder brauchst, welche Features wichtig sind und welche die besten Optionen sind — mit Vergleich und Reviews.",
    category: "web-design",
    categoryLabel: "Web Design",
    categoryColor: "#a855f7",
    image: "/blog/cele-mai-bune-landing-page-builders.png",
    date: "27. Feb 2026",
    readTime: "10 Min",
  },
  {
    slug: "/ge/blog/marketing-automatisierung-tools-leitfaden/",
    title: "Marketing automatisieren: Kompletter Tools-Leitfaden",
    excerpt: "Was du in jeder Geschäftsphase automatisieren solltest und welche Tools du nutzen kannst — von E-Mail und Chatbots bis Analytics und Ad Management.",
    category: "automatisierung",
    categoryLabel: "Automatisierung",
    categoryColor: "#ec4899",
    image: "/blog/automatizare-marketing-ghid-tools.png",
    date: "26. Feb 2026",
    readTime: "13 Min",
  },
  {
    slug: "/ge/blog/beste-chatbot-live-chat-tools/",
    title: "Beste Chatbot- und Live-Chat-Tools für Websites",
    excerpt: "Kompletter Leitfaden mit Vergleich: wann Chatbot, wann Live-Chat und welche die besten Tools für jedes Szenario sind.",
    category: "automatisierung",
    categoryLabel: "Automatisierung",
    categoryColor: "#ec4899",
    image: "/blog/cele-mai-bune-chatbot-live-chat.png",
    date: "25. Feb 2026",
    readTime: "11 Min",
  },
  {
    slug: "/ge/blog/beste-email-marketing-plattformen/",
    title: "Beste E-Mail-Marketing-Plattformen 2026",
    excerpt: "Detaillierter Vergleich der beliebtesten E-Mail-Marketing-Plattformen: Funktionen, Preise und für wen sie am besten geeignet sind.",
    category: "automatisierung",
    categoryLabel: "Automatisierung",
    categoryColor: "#ec4899",
    image: "/blog/cele-mai-bune-platforme-email-marketing.png",
    date: "24. Feb 2026",
    readTime: "12 Min",
  },
  {
    slug: "/ge/blog/geo-optimierung-ai-search/",
    title: "Wie man in ChatGPT und Google AI Overviews erscheint (GEO)",
    excerpt: "Vollständiger Leitfaden zur Generative Engine Optimization: So optimierst du deinen Content für KI-Ergebnisse — von ChatGPT bis Google AI Overviews.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/geo-optimizare-ai-search.png",
    date: "23. Feb 2026",
    readTime: "11 Min",
  },
  {
    slug: "/ge/blog/was-kostet-eine-website/",
    title: "Was kostet eine Website in 2026? Vollständiger Preisleitfaden",
    excerpt: "Von der Präsentationswebsite bis zum Online-Shop — wir analysieren reale Webentwicklungspreise und was den Endpreis beeinflusst.",
    category: "web-design",
    categoryLabel: "Web Design",
    categoryColor: "#a855f7",
    image: "/blog/cat-costa-un-site-web.png",
    date: "22. Feb 2026",
    readTime: "10 Min",
  },
  {
    slug: "/ge/blog/was-kostet-google-ads/",
    title: "Was kostet Google Ads? Budget-Leitfaden 2026",
    excerpt: "Durchschnittlicher CPC nach Branche, empfohlene Mindestbudgets und wie du deinen ROI berechnest, bevor du den ersten Euro in Google Ads investierst.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/cat-costa-google-ads-romania.png",
    date: "21. Feb 2026",
    readTime: "9 Min",
  },
  {
    slug: "/ge/blog/kosten-interner-spezialist-vs-agentur/",
    title: "Was kostet ein interner Spezialist vs. eine Marketing-Agentur?",
    excerpt: "Detaillierter Kostenvergleich: Gehalt, Steuern, Tools, Management — vs. ein All-Inclusive-Agenturpaket. Die echten Zahlen, die niemand zeigt.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/cost-specialist-vs-agentie.jpg",
    date: "20. Feb 2026",
    readTime: "8 Min",
  },
  {
    slug: "/ge/blog/warenkorbabbruch-beheben/",
    title: "Warum Kunden den Warenkorb verlassen (und wie man es behebt)",
    excerpt: "73% der Warenkörbe werden verlassen. Entdecke die häufigsten Ursachen und 8 bewährte Strategien zur Rückgewinnung verlorener Verkäufe.",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    categoryColor: "#f59e0b",
    image: "/blog/abandon-cos-cumparaturi.png",
    date: "19. Feb 2026",
    readTime: "9 Min",
  },
  {
    slug: "/ge/blog/warum-meta-ads-nicht-funktionieren/",
    title: "Warum funktionieren deine Meta Ads nicht? 7 häufige Fehler",
    excerpt: "Wenn du Geld für Facebook- und Instagram-Ads ohne Ergebnisse ausgibst, ist die Plattform nicht das Problem. Entdecke die 7 Fehler, die deine Kampagnen sabotieren.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/de-ce-nu-merg-meta-ads.jpg",
    date: "18. Feb 2026",
    readTime: "10 Min",
  },
  {
    slug: "/ge/blog/lokales-seo-google-maps/",
    title: "Lokales SEO: Wie man in seiner Stadt auf Google Platz 1 erreicht",
    excerpt: "Von Google Business Profile bis Bewertungen und lokale Zitate — Schritt-für-Schritt-Anleitung zur Dominanz in lokalen Ergebnissen und Google Maps.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/seo-local-google-maps.png",
    date: "17. Feb 2026",
    readTime: "10 Min",
  },
  {
    slug: "/ge/blog/facebook-ads-vs-google-ads-ecommerce/",
    title: "Facebook Ads vs Google Ads: Was wählen für den Online-Shop?",
    excerpt: "Direkter Vergleich der beiden Werbeplattformen für E-Commerce: Kosten, Zielgruppen, Formate, ROI und wann man welche nutzen sollte.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/facebook-ads-vs-google-ads-ecommerce.png",
    date: "16. Feb 2026",
    readTime: "11 Min",
  },
  {
    slug: "/ge/blog/seo-vs-google-ads/",
    title: "SEO vs. Google Ads: Was wählen bei begrenztem Budget?",
    excerpt: "Organischer oder bezahlter Traffic? Wir analysieren Kosten, Timeline und ROI jeder Strategie, damit du die richtige Entscheidung für dein Unternehmen triffst.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/seo-vs-google-ads.jpg",
    date: "15. Feb 2026",
    readTime: "9 Min",
  },
  {
    slug: "/ge/blog/ai-overviews-seo-auswirkungen/",
    title: "Wie AI Overviews SEO beeinflussen und was du tun solltest",
    excerpt: "Google AI Overviews ändern die Spielregeln. Erfahre, wie sie den organischen Traffic beeinflussen und welche neuen Strategien du anwenden musst.",
    category: "seo",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/ai-overviews-impact-seo.png",
    date: "14. Feb 2026",
    readTime: "8 Min",
  },
  {
    slug: "/ge/blog/was-ist-growth-sprint/",
    title: "Was ist ein Growth Sprint und wie beschleunigt er das Wachstum",
    excerpt: "Das 6-Wochen-Framework, das Strategie, Ausführung und Optimierung in einem einzigen Sprint kombiniert, der auf messbare Ergebnisse fokussiert ist.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/ce-este-growth-sprint.png",
    date: "13. Feb 2026",
    readTime: "7 Min",
  },
  {
    slug: "/ge/blog/tiktok-ads-anleitung/",
    title: "TikTok Ads schalten: Vollständiger Leitfaden für 2026",
    excerpt: "Vom Konto-Setup bis zu kreativen Formaten und Targeting — alles, was du wissen musst, um profitable TikTok-Ads-Kampagnen zu starten.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/reclame-tiktok-romania.png",
    date: "12. Feb 2026",
    readTime: "12 Min",
  },
  {
    slug: "/ge/blog/wie-marketing-agentur-waehlen/",
    title: "Wie man die richtige Marketing-Agentur wählt: 10-Schritte-Checkliste",
    excerpt: "Objektive Kriterien, Warnsignale und die Fragen, die du stellen musst, bevor du einen Vertrag mit einer Marketing-Agentur unterschreibst.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/cum-alegi-agentie-marketing.png",
    date: "11. Feb 2026",
    readTime: "9 Min",
  },
  {
    slug: "/ge/blog/conversion-rate-leitfaden/",
    title: "Conversion Rate: Was sie ist, wie man sie berechnet und verbessert",
    excerpt: "Vollständiger CRO-Leitfaden: von Definition und Branchen-Benchmarks bis zu 12 getesteten Techniken zur Steigerung der Conversion Rate.",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    categoryColor: "#f59e0b",
    image: "/blog/rata-de-conversie-ghid.jpg",
    date: "9. Feb 2026",
    readTime: "10 Min",
  },
  {
    slug: "/ge/blog/online-shop-umsatz-steigern/",
    title: "15 bewährte Strategien zur Umsatzsteigerung im Online-Shop",
    excerpt: "Von der Produktseitenoptimierung bis zu automatisierten E-Mail-Flows — konkrete Strategien mit echten Beispielen für E-Commerce-Wachstum.",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    categoryColor: "#f59e0b",
    image: "/blog/creste-vanzari-magazin-online.png",
    date: "8. Feb 2026",
    readTime: "13 Min",
  },
  {
    slug: "/ge/blog/digitale-marketing-strategie-leitfaden/",
    title: "Digitale Marketing-Strategie Schritt für Schritt (Leitfaden 2026)",
    excerpt: "Wie du eine digitale Marketing-Strategie von Grund auf aufbaust: Ziele, Kanäle, Budget, KPIs und Ausführungskalender — alles in einem Framework.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/strategie-marketing-digital-ghid.jpg",
    date: "6. Feb 2026",
    readTime: "14 Min",
  },
  {
    slug: "/ge/blog/email-marketing-ecommerce/",
    title: "E-Mail-Marketing für E-Commerce: Wie man den Umsatz mit Newslettern steigert",
    excerpt: "Automatisierte Flows, Segmentierung, A/B-Testing und die 7 wichtigsten E-Mails, die jeder Online-Shop konfiguriert haben sollte.",
    category: "automatisierung",
    categoryLabel: "Automatisierung",
    categoryColor: "#ec4899",
    image: "/blog/email-marketing-ecommerce.png",
    date: "5. Feb 2026",
    readTime: "11 Min",
  },
  {
    slug: "/ge/blog/warum-digitales-marketing-nicht-funktioniert/",
    title: "Warum dein digitales Marketing nicht funktioniert",
    excerpt: "10 echte Gründe, warum deine Kampagnen keine Ergebnisse liefern — und konkrete Lösungen für jedes Problem, getestet bei dutzenden Kunden.",
    category: "strategie",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/de-ce-nu-functioneaza-marketingul.png",
    date: "3. Feb 2026",
    readTime: "8 Min",
  },
  {
    slug: "/ge/blog/linkedin-ads-b2b/",
    title: "LinkedIn Ads für B2B: Lohnt sich die Investition?",
    excerpt: "Echte Kosten, Anzeigenformate, erweitertes Targeting und Fallstudien — alles über LinkedIn Ads zur B2B-Leadgenerierung.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/linkedin-ads-b2b-romania.png",
    date: "1. Feb 2026",
    readTime: "10 Min",
  },
  {
    slug: "/ge/blog/performance-max-ecommerce/",
    title: "Performance Max 2026: Vollständiger Leitfaden für Online-Shops",
    excerpt: "Wie Performance Max Kampagnen funktionieren, wie man sie richtig für E-Commerce einrichtet und die 5 Fehler, die dein Budget verschwenden.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/performance-max-ecommerce.png",
    date: "30. Jan 2026",
    readTime: "11 Min",
  },
  {
    slug: "/ge/blog/ki-im-marketing-2026/",
    title: "Wie Unternehmen KI im Marketing 2026 einsetzen",
    excerpt: "Von Content-Erstellung bis Kampagnenoptimierung — wie du künstliche Intelligenz in dein Marketing implementierst, ohne die Kontrolle zu verlieren.",
    category: "automatisierung",
    categoryLabel: "Automatisierung",
    categoryColor: "#ec4899",
    image: "/blog/ai-in-marketing-2026.png",
    date: "28. Jan 2026",
    readTime: "9 Min",
  },
  {
    slug: "/ge/blog/retargeting-remarketing-leitfaden/",
    title: "Retargeting und Remarketing: Wie man verlorene Kunden zurückgewinnt",
    excerpt: "Retargeting-Strategien auf Google, Meta und E-Mail, die abgesprungene Besucher in zahlende Kunden verwandeln — mit konkreten Zielgruppen-Beispielen.",
    category: "paid-ads",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/retargeting-remarketing.png",
    date: "26. Jan 2026",
    readTime: "10 Min",
  },
  {
    slug: "/ge/blog/wie-crm-waehlen/",
    title: "Wie man ein CRM auswählt und implementiert",
    excerpt: "HubSpot vs Salesforce vs Pipedrive Vergleich, Auswahlkriterien und Schritt-für-Schritt-Implementierungsleitfaden für kleine und mittlere Teams.",
    category: "automatisierung",
    categoryLabel: "Automatisierung",
    categoryColor: "#ec4899",
    image: "/blog/cum-alegi-crm.png",
    date: "24. Jan 2026",
    readTime: "12 Min",
  },
];

export default function BlogPage() {
  const [active, setActive] = useState<CategoryKey>("all");
  const filtered =
    active === "all" ? ARTICLES : ARTICLES.filter((a) => a.category === active);
  const [featured, ...rest] = filtered;

  return (
    <>
      <Header locale="de" />
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
                Strategien.
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
              Praktische Artikel über digitales Marketing, getestet mit echten
              Budgets. Kein Fluff, nur was funktioniert.
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
                      Artikel lesen
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
                          Lesen
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
      <Footer locale="de" />
    </>
  );
}

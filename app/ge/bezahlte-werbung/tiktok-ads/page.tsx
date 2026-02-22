import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { TikTokFormats } from "@/components/sections/ads/TikTokFormats";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { TikTokAdsCalculator } from "@/components/sections/ads/TikTokAdsCalculator";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "TikTok Ads Agentur | TikTok Werbung | Nesco Digital",
  description: "TikTok Ads fuer Marken, die neue Zielgruppen erreichen wollen. Native Creatives, praezises Targeting, messbare Ergebnisse.",
  path: "/ge/bezahlte-werbung/tiktok-ads/",
  routeKey: "tiktokAds",
});

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "TikTok Ads",
    title: "Erreichen Sie die neue Generation von Kaeufern mit TikTok Ads",
    subtitle: "TikTok hat 5 Millionen Nutzer in Rumaenien und ist die am schnellsten wachsende Plattform. Die Kosten pro Aufruf sind 3-5x geringer als bei Meta, und die Zielgruppe ist extrem empfaenglich fuer neue Marken.",
  },
  problems: [
    { title: "Junge Zielgruppen finden Sie nicht auf Facebook", desc: "Gen Z (18-26 Jahre) und juengere Millennials verbringen mehr Zeit auf TikTok als auf jeder anderen Plattform. Ohne TikTok-Praesenz sind Sie fuer sie unsichtbar." },
    { title: "Die Kosten auf Meta werden immer hoeher", desc: "CPMs auf Facebook und Instagram steigen kontinuierlich. TikTok bietet Reichweite zu deutlich niedrigeren Kosten mit hoeherem Engagement." },
    { title: "Ihre Produkte haben ungenutztes virales Potenzial", desc: "TikTok ist die Plattform, auf der ein gutes Video Millionen von Menschen erreichen kann, ohne riesiges Budget. Der Algorithmus belohnt guten Content, nicht grosse Follower-Zahlen." },
    { title: "Ihre Wettbewerber haben TikTok bereits entdeckt", desc: "Marken, die 2023-2024 auf TikTok eingestiegen sind, haben Marktvorteile. Mit jedem Monat Verzoegerung steigen die Einstiegskosten." },
  ],
  solutions: [
    { title: "In-Feed Ads, Nativ wie ein normales TikTok", desc: "Anzeigen erscheinen im Feed der Nutzer und wirken wie organischer Content. Das effektivste Format fuer direkte Conversions." },
    { title: "Spark Ads, Verstaerken was bereits funktioniert", desc: "Wenn ein organischer TikTok gut performt hat, verstaerken wir ihn mit Werbebudget. Der schnellste ROI auf der Plattform." },
    { title: "TopView, Das Erste was beim Oeffnen gesehen wird", desc: "Ihre Anzeige erscheint sofort, wenn der Nutzer TikTok oeffnet. Unmoeglich zu ignorieren, ideal fuer Marken-Launches." },
    { title: "Native Creative-Produktion", desc: "Nicht jeder Content funktioniert auf TikTok. Wir erstellen oder begleiten die Erstellung von authentischem, plattform-nativem Content, der nicht wie Werbung wirkt." },
    { title: "Praezises Audience-Targeting", desc: "Wir targeten nach Interessen, Sehgewohnheiten, Geraet und Demografie. Wir erreichen Ihre Zielgruppe, auch wenn sie Ihnen noch nicht folgt." },
    { title: "Vollstaendiges Tracking und Attribution", desc: "TikTok Pixel auf Ihrer Website trackt Besuche, Warenkorbzusaetze und Conversions. Sie wissen genau, was TikTok generiert." },
  ],
  cases: [
    { metric: "+300%", label: "Brand Awareness Lift", industry: "DTC-Marke" },
    { metric: "2,5x ROAS", label: "Return on Ad Spend", industry: "E-Commerce Mode" },
    { metric: "+400%", label: "Neue Follower in 60 Tagen", industry: "Lifestyle-Marke" },
    { metric: "-45%", label: "Kosten pro Klick vs. Meta", industry: "E-Commerce" },
    { metric: "+180%", label: "Steigerung des Website-Traffics", industry: "Beauty-Marke" },
    { metric: "3x Leads", label: "Qualifizierte Leads", industry: "Online-Bildung" },
  ],
  omnichannelServices: ["Instagram Ads", "Facebook Ads", "Google Ads", "E-Mail-Marketing", "CRO"],
  faq: [
    { q: "Ist TikTok nicht nur fuer Jugendliche und Tanzen?", a: "Das war einmal. Heute sind 40% der TikTok-Nutzer ueber 30 Jahre alt, und der Content deckt jede Nische ab: Business, Immobilien, Automotive, Food, Beauty, Bildung. Wenn Ihr Produkt in einem 30-60 Sekunden Video gezeigt werden kann, funktioniert TikTok." },
    { q: "Was kostet Werbung auf TikTok im Vergleich zu Facebook?", a: "Der CPM (Kosten pro 1.000 Aufrufe) auf TikTok ist 2-3x geringer als auf Facebook in Rumaenien. Das Engagement ist hoeher, was niedrigere Kosten pro Klick bedeutet. Es ist die kosteneffizienteste Plattform aus Sicht der Kosten pro Reichweite in 2024-2025." },
    { q: "Brauche ich ein TikTok-Konto mit vielen Followern?", a: "Nein. TikTok Ads koennen von einem Business-Konto mit 0 Followern geschaltet werden. Die Reichweite wird durch Budget und Targeting bestimmt, nicht durch die Popularitaet des Kontos." },
    { q: "Welche Art von Video soll ich vorbereiten?", a: "Vertikale Videos (9:16), zwischen 15-60 Sekunden, casual gefilmt (keine ultra-professionelle Produktion). TikTok belohnt Authentizitaet. Wir liefern detaillierte Briefings und koennen die Content-Erstellung koordinieren oder selbst uebernehmen." },
    { q: "Funktionieren TikTok Ads fuer B2B?", a: "Fuer direkte B2B-Verkaeufe ist es weniger effektiv. Aber fuer Brand Awareness und Thought Leadership funktioniert es ueberraschend gut. Anwaelte, Berater und Agenturen, die Bildungscontent auf TikTok posten, gewinnen neue Kunden, die sie sonst nie gefunden haetten." },
    { q: "Wie messe ich, dass TikTok Ads funktionieren?", a: "Durch das TikTok Pixel, das Besuche auf der Website, Warenkorbzusaetze und Conversions trackt. Dazu Metriken zu Reichweite, vollstaendigen Aufrufen und Klicks. Wir berichten separat fuer TikTok vs. andere Kanaele, um den echten Beitrag zu sehen." },
  ],
  testimonial: { quote: "Wir sind im September auf TikTok gestartet und bis Dezember hatten wir 4.000 neue Bestellungen. Kosten pro Bestellung von 8 Euro, das Beste aller Kanaele. Nesco wusste genau, welcher Content-Typ funktioniert.", name: "Radu T.", role: "Gruender, Streetwear-Fashion-Brand" },
  tools: ["TikTok Ads Manager", "TikTok Pixel", "TikTok Business Center", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloser TikTok Ads Audit Inklusive",
};

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
    <path fill="white" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
  </svg>
);

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const heroRightSlot: ReactNode = (
  <AdsDashboardCard
    emoji="🎵"
    title="TikTok Ads Kampagne"
    date="November 2025"
    metrics={[
      { label: "Aufrufe", animated: { target: 3200000 }, badge: { text: "↑ 300%", positive: true } },
      { label: "Bestellungen", animated: { target: 1280 }, badge: { text: "↑ 156%", positive: true } },
      { label: "CPO", animated: { target: 8, suffix: "€" }, badge: { text: "↓ 45%", positive: false } },
    ]}
    barPercent={91}
    barLabel="Budget verwendet"
    status="AKTIV In-Feed + Spark Ads"
    badge1="2.5x ROAS Fashion"
    badge2="E-Commerce, Rumaenien"
  />
);

const afterHeroSlot: ReactNode = (
  <>
    <AdsTrustBar items={[
      { icon: <TikTokIcon />, label: "TikTok Ads Manager" },
      { icon: <MetaIcon />, label: "Meta Business Partner" },
      { stat: "5M+", label: "TikTok-Nutzer in RO" },
      { stat: "3x", label: "Reichweite zu geringeren Kosten vs. Meta" },
      { stat: "500+", label: "ausgelieferte Kampagnen" },
    ]} />
    <AdsBeforeAfter
      title="Echte Ergebnisse Vor und nach Nesco Digital"
      beforeLabel="Vorher"
      afterLabel="Nach Nesco"
      before={[
        { label: "Aufrufe/Monat", display: "45.000" },
        { label: "Bestellungen", display: "12" },
        { label: "CPO (Kosten/Bestellung)", display: "82€" },
        { label: "ROAS", display: "0.9x" },
        { label: "Content-Typ", display: "wiederverwendetes Video" },
        { label: "Gewonnene Follower", display: "120" },
      ]}
      after={[
        { label: "Aufrufe/Monat", display: "3.200.000", animate: { target: 3200000 } },
        { label: "Bestellungen", display: "1.280", animate: { target: 1280 } },
        { label: "CPO (Kosten/Bestellung)", display: "8€", animate: { target: 8, suffix: "€" } },
        { label: "ROAS", display: "2.5x" },
        { label: "Content-Typ", display: "UGC nativ TikTok" },
        { label: "Gewonnene Follower", display: "4.200", animate: { target: 4200 } },
      ]}
      source="Streetwear-Fashion-Brand, Rumaenien 60 Tage"
    />
    <AdsComparison
      bad={[
        "Videos von Instagram oder YouTube wiederverwendet",
        "Organische Beitraege boosten ohne Strategie",
        "Ein einziges Format (In-Feed) ohne Tests",
        "Kein TikTok Pixel installiert",
        "Breite Zielgruppen ohne Interessensegmentierung",
        "Reporting: Aufrufe und Follower",
      ]}
      good={[
        "UGC und nativer Content speziell fuer TikTok erstellt",
        "Spark Ads auf organischen Content mit bewiesener Performance",
        "Mix aus In-Feed + TopView + Brand Takeover",
        "TikTok Pixel + Events API fuer exakte Attribution",
        "Targeting nach Kaufverhalten und Interessen",
        "Reporting: ROAS, CPO, Bestellungen und Umsatz",
      ]}
    />
    <TikTokFormats />
    <AdsTimeline
      phases={[
        {
          emoji: "🎬",
          range: "Tage 1–14",
          title: "Creative & Setup",
          color: "#ff0050",
          items: [
            "Konto-Audit und TikTok-Content-Strategie",
            "Setup TikTok Business Center und Pixel",
            "Creative-Briefing und Produktion erster Videos",
            "Start In-Feed- und Spark-Ads-Kampagnen",
          ],
        },
        {
          emoji: "📊",
          range: "Tage 15–45",
          title: "Test & Optimierung",
          color: "#a78bfa",
          items: [
            "A/B-Testing 5-8 Creatives/Woche",
            "Optimierung von Targeting und Budgets",
            "Identifikation des Gewinnerformats (In-Feed vs. Spark)",
            "Retargeting auf Website-Besucher und Warenkorbzusaetze",
          ],
        },
        {
          emoji: "🚀",
          range: "Tage 46–90",
          title: "Virale Skalierung",
          color: "#56db84",
          items: [
            "Budget-Skalierung auf Videos mit dem besten ROAS",
            "Start TopView fuer Brand Awareness",
            "Lookalike Audiences basierend auf Kaeufern",
            "Konsolidierte woechentliche Content-Strategie",
          ],
        },
      ]}
    />
    <TikTokAdsCalculator />
  </>
);

export default function TikTokAdsDePage() {
  return (
    <>
      <Header locale="de" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={heroRightSlot}
          afterHeroSlot={afterHeroSlot}
        />
      </main>
      <AdsStickyBar title="Bereit, auf TikTok zu skalieren?" cta="Sprechen Sie mit einem Spezialisten" href="/ge/lass-uns-reden/" />
      <Footer locale="de" />
    </>
  );
}

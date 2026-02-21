import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

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
    title: "Erreichen Sie die neue Generation von Kaeuferr mit TikTok Ads",
    subtitle: "TikTok ist die am schnellsten wachsende Plattform in Europa. Die Kosten pro Aufruf sind 3-5x geringer als bei Meta, und die Zielgruppe ist extrem empfaenglich fuer neue Marken.",
  },
  problems: [
    { title: "Junge Zielgruppen sind nicht auf Facebook", desc: "Gen Z (18-26 Jahre) und juengere Millennials verbringen mehr Zeit auf TikTok als auf jeder anderen Plattform. Ohne TikTok-Praesenz sind Sie fuer sie unsichtbar." },
    { title: "Die Kosten auf Meta werden immer hoeher", desc: "CPMs auf Facebook und Instagram steigen kontinuierlich. TikTok bietet Reichweite zu deutlich niedrigeren Kosten mit hoeherem Engagement." },
    { title: "Ihr Produkt hat ungenutztes virales Potenzial", desc: "TikTok ist die Plattform, auf der ein gutes Video Millionen von Menschen erreichen kann, ohne riesiges Budget. Der Algorithmus belohnt guten Content, nicht grosse Follower-Zahlen." },
    { title: "Ihre Wettbewerber haben TikTok bereits entdeckt", desc: "Marken, die 2023-2024 auf TikTok eingestiegen sind, haben Marktvorteile. Mit jedem Monat Verzoegerung steigen die Einstiegskosten." },
  ],
  solutions: [
    { title: "In-Feed Ads, Nativ wie ein normales TikTok", desc: "Anzeigen erscheinen im Feed der Nutzer und wirken wie organischer Content. Das effektivste Format fuer direkte Conversions." },
    { title: "Spark Ads, Verstaerken was bereits funktioniert", desc: "Wenn ein organischer TikTok gut performt hat, verstaerken wir ihn mit Werbebudget. Der schnellste ROI auf der Plattform." },
    { title: "TopView, Das Erste was beim Oeffnen gesehen wird", desc: "Ihre Anzeige erscheint sofort, wenn der Nutzer TikTok oeffnet. Unmoeglich zu ignorieren, ideal fuer Marken-Launches." },
    { title: "Native Creative-Produktion", desc: "Nicht jeder Content funktioniert auf TikTok. Wir erstellen oder begleiten die Erstellung von authentischem, plattform-nativem Content, der nicht wie Werbung wirkt." },
    { title: "Praezises Audience-Targeting", desc: "Wir targeten nach Interessen, Sehgewohnheiten, Geraet und Demografie. Wir erreichen Ihre Zielgruppe, auch wenn sie Ihnen noch nicht folgt." },
    { title: "Vollstaendiges Tracking und Attribution", desc: "TikTok Pixel auf Ihrer Website, wir tracken Besuche, Warenkorbzusaetze und Conversions. Sie wissen genau, was TikTok generiert." },
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
    { q: "Was kostet Werbung auf TikTok im Vergleich zu Facebook?", a: "Der CPM (Kosten pro 1.000 Aufrufe) auf TikTok ist 2-3x geringer als auf Facebook. Das Engagement ist hoeher, was niedrigere Kosten pro Klick bedeutet. Es ist die kosteneffizienteste Plattform aus Sicht der Kosten pro Reichweite in 2024-2025." },
    { q: "Brauche ich ein TikTok-Konto mit vielen Followern?", a: "Nein. TikTok Ads koennen von einem Business-Konto mit 0 Followern geschaltet werden. Die Reichweite wird durch Budget und Targeting bestimmt, nicht durch die Popularitaet des Kontos." },
    { q: "Welche Art von Video soll ich vorbereiten?", a: "Vertikale Videos (9:16), zwischen 15-60 Sekunden, casual gefilmt (keine ultra-professionelle Produktion). TikTok belohnt Authentizitaet. Wir liefern detaillierte Briefings und koennen die Content-Erstellung koordinieren oder selbst uebernehmen." },
    { q: "Funktionieren TikTok Ads fuer B2B?", a: "Fuer direkte B2B-Verkaeufe ist es weniger effektiv. Aber fuer Brand Awareness und Thought Leadership funktioniert es ueberraschend gut. Anwaelte, Berater und Agenturen, die Bildungscontent auf TikTok posten, gewinnen neue Kunden, die sie sonst nie gefunden haetten." },
    { q: "Wie messe ich, dass TikTok Ads funktionieren?", a: "Durch das TikTok Pixel, das Besuche auf der Website, Warenkorbzusaetze und Conversions trackt. Dazu Metriken zu Reichweite, vollstaendigen Aufrufen und Klicks. Wir berichten separat fuer TikTok vs. andere Kanaele, um den echten Beitrag zu sehen." },
  ],
  testimonial: { quote: "Wir sind im September auf TikTok gestartet und bis Dezember hatten wir 4.000 neue Bestellungen. Kosten pro Bestellung von 8 Euro, das Beste aller Kanaele. Nesco wusste genau, welcher Content-Typ funktioniert.", name: "Radu T.", role: "Gruender, Streetwear Fashion Brand" },
  tools: ["TikTok Ads Manager", "TikTok Pixel", "TikTok Business Center", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloser TikTok Ads Audit Inklusive",
};

export default function TikTokAdsDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}

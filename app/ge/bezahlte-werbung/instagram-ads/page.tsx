import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Instagram Ads Agentur | Instagram Werbung | Nesco Digital",
  description: "Instagram Ads Kampagnen fuer ambitionierte Marken. Stories, Reels, Feed. Wir steigern die Markenbekanntheit und generieren Verkaufe direkt aus Instagram.",
  path: "/ge/bezahlte-werbung/instagram-ads/",
  routeKey: "instagramAds",
});

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "Instagram Ads",
    title: "Ihre Produkte und Dienstleistungen, gesehen von Millionen auf Instagram",
    subtitle: "Instagram hat ueber 1 Milliarde aktive Nutzer weltweit. Native Anzeigen in Stories und Reels erreichen die richtigen Menschen zur richtigen Zeit, ohne wie Werbung auszusehen.",
  },
  problems: [
    { title: "Die organische Reichweite Ihres Profils ist begrenzt", desc: "Ein Profil mit 10.000 Followern erreicht organisch nur 5-10%. Ihre Produkte verdienen es, von viel mehr Menschen gesehen zu werden." },
    { title: "Wettbewerber schalten Anzeigen auf Instagram", desc: "Wenn Sie keine Anzeigen schalten, belegt Ihr Wettbewerber Ihren Platz im Feed potenzieller Kunden." },
    { title: "Ihre Zielkunden sind auf Instagram", desc: "Wenn Sie visuelle Produkte oder Dienstleistungen verkaufen (Mode, Beauty, Food, Wohnen, Fitness), ist Ihre ideale Zielgruppe auf Instagram." },
    { title: "Toller Content, aber keine Sichtbarkeit", desc: "Sie posten qualitativ hochwertige Fotos, aber zu wenige neue Nutzer entdecken Sie. Der Algorithmus begrenzt die organische Reichweite." },
  ],
  solutions: [
    { title: "Stories Ads, Vollbild und unmoeglich zu ignorieren", desc: "15-Sekunden-Anzeigen in Stories nehmen den gesamten Bildschirm ein. Die Aufrufrate ist 3-5x hoeher als bei Banner-Formaten." },
    { title: "Reels Ads, Viraler Content mit bezahlter Reichweite", desc: "Reels ist das reichweitenstarkste Format auf Instagram. Wir verstaerken Ihren besten Content mit Werbebudget." },
    { title: "Feed Ads, Premium-Praesentation", desc: "Bilder und Videos im Feed der Nutzer, mit direktem CTA zu Ihrer Website oder Ihrem Checkout." },
    { title: "Instagram Shopping, Vom Post zum Kauf", desc: "Wir taggen Produkte direkt in Bildern. Der Nutzer klickt auf das Produkt und gelangt direkt zum Checkout." },
    { title: "Lookalike Audiences, Finden Sie Kunden wie Ihre bestehenden", desc: "Wir nutzen Ihre bestehende Kundenliste, um aehnliche Personen auf Instagram zu finden." },
    { title: "Kreatives A/B-Testing", desc: "Wir testen mehrere Bild-, Video- und Text-Varianten, um herauszufinden, was fuer Ihre Zielgruppe am besten funktioniert." },
  ],
  cases: [
    { metric: "+45%", label: "ROAS-Verbesserung in 60 Tagen", industry: "E-Commerce Mode" },
    { metric: "+120%", label: "Neuer Website-Traffic aus Instagram", industry: "Lifestyle-Marke" },
    { metric: "-30%", label: "Kosten pro Lead vs. Durchschnitt", industry: "Beauty-Marke" },
    { metric: "3,2x ROAS", label: "Return on Ad Spend", industry: "Kosmetik" },
    { metric: "+80%", label: "Bestellungen ueber Instagram Shopping", industry: "Mode" },
    { metric: "-25%", label: "Kosten pro Conversion nach Optimierung", industry: "Fitness" },
  ],
  omnichannelServices: ["Facebook Ads", "TikTok Ads", "Google Ads", "CRO", "E-Mail-Marketing"],
  faq: [
    { q: "Brauche ich ein bestehendes Instagram-Profil fuer Anzeigen?", a: "Ein bestehendes Profil hilft (Social Proof fuer Besucher), ist aber nicht erforderlich. Anzeigen koennen direkt ueber Meta Business Suite geschaltet werden, auch ohne aktives Profil oder mit wenigen Followern." },
    { q: "Welches Format funktioniert besser: Stories, Reels oder Feed?", a: "Das haengt von Ihrem Ziel ab: Stories fuer schnelles Awareness und maximale visuelle Wirkung, Reels fuer verstaerkte organische Reichweite, Feed fuer Consideration und Conversion. Wir empfehlen, alle Formate zu testen und das zu skalieren, was fuer Ihre Zielgruppe funktioniert." },
    { q: "Muss ich neuen Content speziell fuer Anzeigen erstellen?", a: "Nicht unbedingt. Wir koennen gut performende organische Posts verstaerken (Spark Ads). Fuer maximale Ergebnisse erstellen wir jedoch Content, der fuer jedes Format und Ziel optimiert ist." },
    { q: "Ist Instagram gut fuer B2B?", a: "Fuer direkte B2B-Verkauefe ist LinkedIn effektiver. Aber Instagram funktioniert hervorragend fuer Brand Awareness und B2B Thought Leadership, Architekten, Designer, Berater und Agenturen, die educativen Content posten, gewinnen neue Kunden ueber Instagram." },
    { q: "Wie wichtig ist die visuelle Qualitaet?", a: "Entscheidend. Instagram ist eine visuelle Plattform. Ein qualitativ schlechtes Foto oder Video wird auch mit grossem Budget schlecht performen. Wir liefern Content-Creation-Guides und Briefings oder uebernehmen die Creative-Erstellung selbst." },
    { q: "Wie messen Sie den Kampagnenerfolg?", a: "Neben Likes und Kommentaren (die keine Umsaetze generieren) tracken wir: Reichweite, Frequenz, Website-Klicks, Conversions, Kosten pro Conversion und ROAS. Sie erhalten einen monatlichen Bericht mit allen Daten, einfach erklaert." },
  ],
  testimonial: { quote: "Wir haben eine neue Kosmetikmarke gestartet und in 3 Monaten brachten Instagram Ads 1.200 neue Bestellungen. Die Creatives, die Nesco erstellt hat, konvertierten viel besser als alles, was wir selbst gemacht hatten.", name: "Andreea M.", role: "Gruenderin, natuerliche Kosmetikmarke" },
  tools: ["Meta Ads Manager", "Meta Pixel", "Meta Business Suite", "Instagram Shopping", "Looker Studio"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloser Instagram Ads Audit Inklusive",
};

export default function InstagramAdsDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}

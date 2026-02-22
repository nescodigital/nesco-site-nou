import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { InstaAdsFormats } from "@/components/sections/ads/InstaAdsFormats";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { InstaAdsCalculator } from "@/components/sections/ads/InstaAdsCalculator";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Instagram Ads Agentur | Instagram Werbung | Nesco Digital",
  description: "Instagram Ads Kampagnen fuer ambitionierte Marken. Stories, Reels, Feed. Wir steigern die Markenbekanntheit und generieren Verkaeufe direkt ueber Instagram.",
  path: "/ge/bezahlte-werbung/instagram-ads/",
  routeKey: "instagramAds",
});

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z" />
    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" />
    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
  </svg>
);

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "Instagram Ads",
    title: "Ihre Produkte und Dienstleistungen, gesehen von Millionen auf Instagram",
    subtitle: "Instagram hat ueber 5 Millionen Nutzer in Rumaenien mit Kaufkraft. Native Anzeigen in Stories und Reels erreichen die richtigen Menschen zur richtigen Zeit, ohne wie Werbung auszusehen.",
  },
  problems: [
    { title: "Die Reichweite Ihres Profils ist begrenzt", desc: "Ein Profil mit 10.000 Followern erreicht organisch nur 5-10% davon. Ihre Produkte verdienen es, von viel mehr Menschen gesehen zu werden." },
    { title: "Wettbewerber schalten Anzeigen auf Instagram", desc: "Wenn Sie nicht aktiv Anzeigen schalten, wird Ihr Platz im Feed potenzieller Kunden von Ihren Wettbewerbern besetzt." },
    { title: "Ihre Zielkunden sind auf Instagram", desc: "Wenn Sie visuelle Produkte oder Dienstleistungen verkaufen (Mode, Beauty, Food, Wohnen, Fitness), ist Ihre ideale Zielgruppe auf Instagram." },
    { title: "Toller Content, aber keine Sichtbarkeit", desc: "Sie posten qualitativ hochwertige Fotos, aber es gibt nicht genug neue Nutzer, die Sie entdecken. Der Algorithmus begrenzt die organische Reichweite." },
  ],
  solutions: [
    { title: "Stories Ads Vollbild, unmoeglich zu ignorieren", desc: "15-Sekunden-Anzeigen in Stories nehmen den gesamten Bildschirm ein. Die Betrachtungsrate ist 3-5x hoeher als bei Banner-Formaten." },
    { title: "Reels Ads Viraler Content, bezahlte Reichweite", desc: "Reels ist das Format mit der groessten Reichweite auf Instagram. Wir verstaerken Ihren besten Content mit Werbebudget." },
    { title: "Feed Ads Premium-Praesentation", desc: "Bilder und Videos im Feed der Nutzer, mit direktem CTA zu Ihrer Website oder zum Checkout." },
    { title: "Instagram Shopping Vom Post zum Kauf", desc: "Wir taggen Produkte direkt in Bildern. Der Nutzer klickt auf das Produkt und gelangt direkt zum Checkout." },
    { title: "Lookalike Audiences Wir finden Kunden wie Ihre", desc: "Wir nutzen Ihre bestehende Kundenliste, um aehnliche Personen auf Instagram zu finden." },
    { title: "Kreatives A/B-Testing", desc: "Wir testen mehrere Bild-, Video- und Textvarianten, um herauszufinden, was am besten funktioniert." },
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
    { q: "Brauche ich ein bestehendes aktives Instagram-Profil?", a: "Ein bestehendes Profil hilft (Social Proof fuer Besucher), ist aber fuer Anzeigen nicht erforderlich. Anzeigen koennen direkt ueber Meta Business Suite geschaltet werden, auch ohne aktives Profil oder mit wenigen Followern." },
    { q: "Welches Format funktioniert besser: Stories, Reels oder Feed?", a: "Das haengt von Ihrem Ziel ab: Stories fuer schnelle Bekanntheit und maximale visuelle Wirkung, Reels fuer verstaerkte organische Reichweite, Feed fuer Consideration und Conversion. Wir empfehlen, alle Formate zu testen und das zu skalieren, was fuer Ihre Zielgruppe funktioniert." },
    { q: "Muss ich neuen Content speziell fuer Anzeigen erstellen?", a: "Nicht unbedingt. Wir koennen gut performende organische Posts verstaerken (Spark Ads). Fuer maximale Ergebnisse erstellen oder begleiten wir jedoch die Erstellung von Content, der fuer jedes Format und Ziel optimiert ist." },
    { q: "Ist Instagram gut fuer B2B?", a: "Fuer direkte B2B-Verkaeufe ist LinkedIn effektiver. Aber Instagram funktioniert hervorragend fuer Brand Awareness und B2B Thought Leadership -- Architekten, Designer, Berater und Agenturen, die Bildungscontent posten, gewinnen neue Kunden ueber Instagram." },
    { q: "Wie wichtig ist die visuelle Qualitaet?", a: "Entscheidend. Instagram ist eine visuelle Plattform. Ein qualitativ schlechtes Foto oder Video wird auch mit grossem Budget schlecht performen. Wir liefern Content-Creation-Guides und Briefings oder uebernehmen die Creative-Erstellung selbst." },
    { q: "Wie messen Sie den Kampagnenerfolg?", a: "Ueber Likes und Kommentare hinaus (die keine Rechnungen bezahlen) tracken wir: Reichweite, Frequenz, Website-Klicks, Conversions, Kosten pro Conversion und ROAS. Sie erhalten einen monatlichen Bericht mit allen Daten, einfach erklaert." },
  ],
  testimonial: { quote: "Wir haben eine neue Kosmetikmarke gestartet und in 3 Monaten brachten Instagram Ads 1.200 neue Bestellungen. Die Creatives, die Nesco erstellt hat, konvertierten viel besser als alles, was wir selbst gemacht hatten.", name: "Andreea M.", role: "Gruenderin, Marke fuer Naturkosmetik" },
  tools: ["Meta Ads Manager", "Meta Pixel", "Meta Business Suite", "Instagram Shopping", "Looker Studio"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloser Instagram Ads Audit Inklusive",
};

export default function InstagramAdsDePage() {
  return (
    <>
      <Header locale="de" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={
            <AdsDashboardCard
              emoji="📸"
              title="Instagram Ads Kampagne"
              date="Oktober 2025"
              metrics={[
                { label: "ROAS", animated: { target: 3.2, decimals: 1, suffix: "x" }, badge: { text: "↑ 45%", positive: true } },
                { label: "Reach", animated: { target: 182000 }, badge: { text: "↑ 80%", positive: true } },
                { label: "Kosten/Conv.", animated: { target: 31, suffix: " lei" }, badge: { text: "↓ 25%", positive: false } },
              ]}
              barPercent={91}
              barLabel="Budget verwendet"
              status="AKTIV Stories + Reels + Feed"
              badge1="+80% Bestellungen aus Instagram Shopping"
              badge2="Modemarke, Rumaenien"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar
                items={[
                  { icon: <MetaIcon />, label: "Meta Business Partner" },
                  { icon: <GoogleIcon />, label: "Google Partner" },
                  { stat: "5M+", label: "Instagram-Nutzer RO" },
                  { stat: "15", label: "Jahre Erfahrung" },
                  { stat: "500+", label: "ausgelieferte Kampagnen" },
                ]}
              />
              <AdsBeforeAfter
                title="Echte Ergebnisse Vor und nach Nesco Digital"
                beforeLabel="Vorher"
                afterLabel="Nach Nesco"
                before={[
                  { label: "ROAS", display: "1.1x" },
                  { label: "Reach/Monat", display: "8.000" },
                  { label: "Kosten/Conversion", display: "120 lei" },
                  { label: "CTR", display: "0.3%" },
                  { label: "Format", display: "statischer Feed" },
                  { label: "Instagram Shopping", display: "nicht aktiviert" },
                ]}
                after={[
                  { label: "ROAS", display: "3.2x", animate: { target: 3.2, decimals: 1, suffix: "x" } },
                  { label: "Reach/Monat", display: "182.000", animate: { target: 182000 } },
                  { label: "Kosten/Conversion", display: "31 lei", animate: { target: 31, suffix: " lei" } },
                  { label: "CTR", display: "4.2%" },
                  { label: "Format", display: "Stories + Reels + Feed" },
                  { label: "Instagram Shopping", display: "aktiv, 2.400 Produkte" },
                ]}
                source="Modemarke, Rumaenien 60 Tage"
              />
              <AdsComparison
                bad={[
                  "Post Boost ohne Zielgruppenstrategie",
                  "Dasselbe Creative monatelang",
                  "Kein Instagram Shopping aktiviert",
                  "Kein Retargeting auf Besucher",
                  "Reporting: Follower und Likes",
                  "Kein A/B-Testing bei Creatives",
                ]}
                good={[
                  "Stories + Reels + Feed + Shopping mit zugewiesenen Budgets",
                  "Creative-Refresh alle 2-3 Wochen basierend auf Daten",
                  "Instagram Shopping mit vollstaendig synchronisiertem Katalog",
                  "Retargeting auf Besucher und Warenkorbabbrecher",
                  "Reporting: ROAS, CPL, echter Umsatz",
                  "Systematisches A/B-Testing bei Creatives und Zielgruppen",
                ]}
              />
              <InstaAdsFormats />
              <AdsTimeline
                phases={[
                  {
                    emoji: "📋",
                    range: "Tage 1–14",
                    title: "Audit & Setup",
                    color: "#f472b6",
                    items: [
                      "Audit Instagram-Profil und Business Manager",
                      "Setup Instagram Shopping und Produktkatalog",
                      "Definition von Zielgruppen und Creative-Strategie",
                      "Erste Stories- und Feed-Kampagnen",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Tage 15–45",
                    title: "Creative & Formate",
                    color: "#a78bfa",
                    items: [
                      "Test Stories vs. Reels vs. Feed",
                      "Optimierung basierend auf CTR und ROAS",
                      "Start Retargeting auf Website-Besucher",
                      "A/B-Testing 5+ Creatives/Woche",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Tage 46–90",
                    title: "Skalierung & Shopping",
                    color: "#56db84",
                    items: [
                      "Budget-Skalierung auf erfolgreiche Formate",
                      "Optimierung Instagram Shopping Flow",
                      "Lookalike Audiences basierend auf bestehenden Kunden",
                      "Integrierte Content- + Anzeigenstrategie",
                    ],
                  },
                ]}
              />
              <InstaAdsCalculator />
            </>
          }
        />
      </main>
      <AdsStickyBar
        title="Bereit, mit Instagram Ads zu wachsen?"
        cta="Sprechen Sie mit einem Spezialisten"
        href="/ge/lass-uns-reden/"
      />
      <Footer locale="de" />
    </>
  );
}

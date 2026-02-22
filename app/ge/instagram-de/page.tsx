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
  description: "Instagram Ads Kampagnen für ambitionierte Marken. Stories, Reels, Feed. Wir steigern Awareness und treiben direkte Verkäufe.",
  path: "/ge/instagram-de/",
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
    title: "Ihre Produkte und Dienstleistungen, von Millionen auf Instagram gesehen",
    subtitle: "Visuell, wirkungsvoll, konvertierend. Wir erstellen Instagram-Kampagnen, die den Scroll stoppen, Markenwunsch aufbauen und echte Conversions über Stories, Reels, Feed und Shopping erzielen.",
  },
  problems: [
    { title: "Die Reichweite Ihres Profils ist begrenzt", desc: "Ein Profil mit 10.000 Followern erreicht organisch maximal 5–10% davon. Ihre Produkte verdienen es, von viel mehr Menschen gesehen zu werden." },
    { title: "Wettbewerber schalten Instagram-Anzeigen", desc: "Wenn Sie keine Anzeigen schalten, nehmen Ihre Wettbewerber Ihren Platz im Feed potenzieller Kunden ein." },
    { title: "Ihre Zielkunden sind auf Instagram", desc: "Wenn Sie visuelle Produkte oder Dienstleistungen verkaufen (Mode, Beauty, Food, Home, Fitness), lebt Ihre ideale Zielgruppe auf Instagram." },
    { title: "Guter Content, aber keine Sichtbarkeit", desc: "Sie posten qualitativ hochwertige Fotos, haben aber nicht genug neue Zielgruppen, die Sie entdecken. Der Algorithmus begrenzt die organische Reichweite." },
  ],
  solutions: [
    { title: "Stories Ads — Fullscreen, unmöglich zu ignorieren", desc: "15-Sekunden-Anzeigen in Stories nehmen den gesamten Bildschirm ein. Die Betrachtungsrate ist 3–5x höher als bei Banner-Formaten." },
    { title: "Reels Ads — Viraler Content, bezahlte Reichweite", desc: "Reels ist das Format mit der höchsten Reichweite auf Instagram. Wir verstärken Ihren besten Content mit bezahltem Budget." },
    { title: "Feed Ads — Premium-Präsentation", desc: "Bilder und Videos im Feed der Nutzer, mit direktem CTA zu Ihrer Website oder zum Checkout." },
    { title: "Instagram Shopping — Vom Post zum Kauf", desc: "Wir taggen Produkte direkt in Bildern. Der Nutzer klickt auf das Produkt und wird direkt zum Checkout weitergeleitet." },
    { title: "Lookalike Audiences — Finden Sie Kunden wie Ihre bestehenden", desc: "Wir nutzen Ihre bestehende Kundenliste, um ähnliche Personen auf Instagram zu finden." },
    { title: "Creative A/B-Testing", desc: "Wir testen mehrere Bild-, Video- und Textvarianten, um herauszufinden, was für Ihre Zielgruppe am besten funktioniert." },
  ],
  cases: [
    { metric: "+45%", label: "ROAS-Verbesserung in 60 Tagen", industry: "Fashion E-Commerce" },
    { metric: "+120%", label: "Neuer Website-Traffic aus Instagram", industry: "Lifestyle-Marke" },
    { metric: "-30%", label: "Cost per Lead vs. Durchschnitt", industry: "Beauty-Marke" },
    { metric: "3.2x ROAS", label: "Return on Ad Spend", industry: "Kosmetik" },
    { metric: "+80%", label: "Bestellungen aus Instagram Shopping", industry: "Mode" },
    { metric: "-25%", label: "Cost per Conversion nach Optimierung", industry: "Fitness" },
  ],
  omnichannelServices: ["Facebook Ads", "TikTok Ads", "Google Ads", "CRO", "E-Mail-Marketing"],
  faq: [
    { q: "Brauche ich ein aktives Instagram-Profil für Anzeigen?", a: "Ein bestehendes Profil hilft (sozialer Beweis für Besucher), ist aber für Anzeigen nicht erforderlich. Anzeigen können direkt über Meta Business Suite geschaltet werden, auch ohne aktives Profil oder mit einem Profil mit wenigen Followern." },
    { q: "Welches Format funktioniert besser: Stories, Reels oder Feed?", a: "Es hängt vom Ziel ab: Stories für schnelles Awareness und maximale visuelle Wirkung, Reels für amplified Reach, Feed für Consideration und Conversion. Wir empfehlen, alle Formate zu testen und zu skalieren, was für Ihre Zielgruppe funktioniert." },
    { q: "Muss ich neuen Content speziell für Anzeigen erstellen?", a: "Nicht unbedingt. Wir können organische Posts verstärken, die gut performt haben. Für maximale Ergebnisse erstellen wir jedoch optimierten Content für jedes Format und Ziel oder leiten dessen Erstellung an." },
    { q: "Ist Instagram gut für B2B?", a: "Für direkte B2B-Verkäufe ist LinkedIn effektiver. Aber Instagram funktioniert hervorragend für B2B Brand Awareness und Thought Leadership — Architekten, Designer, Berater und Agenturen gewinnen neue Kunden durch Instagram." },
    { q: "Wie wichtig ist die visuelle Qualität?", a: "Entscheidend. Instagram ist eine visuelle Plattform. Ein Foto oder Video mit schlechter Qualität wird selbst mit großem Budget schlecht performen. Wir bieten Leitfäden und Briefs für die Content-Erstellung oder übernehmen die Creatives selbst." },
    { q: "Wie messen Sie den Kampagnenerfolg?", a: "Über Likes und Kommentare hinaus (die keine Rechnungen bezahlen) verfolgen wir: Reichweite, Frequenz, Website-Klicks, Conversions, Cost per Conversion und ROAS. Sie erhalten monatlich einen Bericht mit allen Daten, in verständlicher Sprache erklärt." },
  ],
  testimonial: { quote: "Wir haben eine neue Kosmetikmarke gelauncht und in 3 Monaten brachte uns Instagram Ads 1.200 neue Bestellungen. Die von Nesco erstellten Visuals konvertierten viel besser als alles, was wir selbst gemacht hatten.", name: "Andreea M.", role: "Gründerin, Naturkosmetikmarke" },
  tools: ["Meta Ads Manager", "Meta Pixel", "Meta Business Suite", "Instagram Shopping", "Looker Studio"],
  toolsSectionTitle: "TOOLS DIE WIR VERWENDEN",
  freeAuditBadge: "Kostenloses Instagram Ads Audit inklusive",
};

export default function InstagramDePage() {
  return (
    <>
      <Header locale="de" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={
            <AdsDashboardCard
              emoji="📸"
              title="Instagram Ads — Kampagne"
              date="Oktober 2025"
              metrics={[
                { label: "ROAS", animated: { target: 3.2, decimals: 1, suffix: "x" }, badge: { text: "↑ 45%", positive: true } },
                { label: "Reichweite", animated: { target: 182000 }, badge: { text: "↑ 80%", positive: true } },
                { label: "Cost/Conv.", animated: { target: 31, suffix: " lei" }, badge: { text: "↓ 25%", positive: false } },
              ]}
              barPercent={91}
              barLabel="Budget genutzt"
              status="AKTIV — Stories + Reels + Feed"
              badge1="+80% Bestellungen aus Instagram Shopping"
              badge2="E-Commerce, Rumänien"
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
                  { stat: "500+", label: "Kampagnen geliefert" },
                ]}
              />
              <AdsBeforeAfter
                title="Echte Ergebnisse — Vor und nach Nesco Digital"
                beforeLabel="Vorher"
                afterLabel="Nach Nesco"
                before={[
                  { label: "ROAS", display: "1,1x" },
                  { label: "Reichweite/Monat", display: "8.000" },
                  { label: "Cost/Conversion", display: "120 lei" },
                  { label: "CTR", display: "0,3%" },
                  { label: "Format", display: "statischer Feed" },
                  { label: "Instagram Shopping", display: "nicht aktiviert" },
                ]}
                after={[
                  { label: "ROAS", display: "3,2x", animate: { target: 3.2, decimals: 1, suffix: "x" } },
                  { label: "Reichweite/Monat", display: "182.000", animate: { target: 182000 } },
                  { label: "Cost/Conversion", display: "31 lei", animate: { target: 31, suffix: " lei" } },
                  { label: "CTR", display: "4,2%" },
                  { label: "Format", display: "Stories + Reels + Feed" },
                  { label: "Instagram Shopping", display: "aktiv, 2.400 Produkte" },
                ]}
                source="E-Commerce, Rumänien — 60 Tage"
              />
              <AdsComparison
                badLabel="❌  Schlecht verwaltet"
                goodLabel="✓  Professionell mit Nesco"
                bad={[
                  "Post-Boost ohne Audience-Strategie",
                  "Dasselbe Creative monatelang",
                  "Instagram Shopping nicht aktiviert",
                  "Kein Retargeting auf Website-Besucher",
                  "Reporting: Follower und Likes",
                  "Kein A/B-Testing bei Creatives",
                ]}
                good={[
                  "Stories + Reels + Feed + Shopping mit zugewiesenen Budgets",
                  "Creative-Refresh alle 2–3 Wochen datenbasiert",
                  "Instagram Shopping mit vollständig synchronisiertem Katalog",
                  "Retargeting auf Besucher und Warenkorbabbrecher",
                  "Reporting: ROAS, CPL, realer Umsatz",
                  "Systematisches A/B-Testing bei Creatives und Audiences",
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
                      "Instagram-Profil- und Business Manager-Audit",
                      "Instagram Shopping und Produktkatalog einrichten",
                      "Zielgruppen definieren und Creative-Strategie entwickeln",
                      "Erste Stories- und Feed-Kampagnen starten",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Tage 15–45",
                    title: "Creative & Formate",
                    color: "#a78bfa",
                    items: [
                      "Stories vs. Reels vs. Feed testen",
                      "Optimierung basierend auf CTR und ROAS",
                      "Retargeting für Website-Besucher starten",
                      "A/B-Testing mit 5+ Creatives pro Woche",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Tage 46–90",
                    title: "Skalierung & Shopping",
                    color: "#56db84",
                    items: [
                      "Budget auf gewinnende Formate skalieren",
                      "Instagram Shopping Flow optimieren",
                      "Lookalike Audiences aus bestehenden Kunden",
                      "Integrierte Content- und Anzeigenstrategie",
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
        title="Bereit mit Instagram Ads zu wachsen?"
        cta="Mit einem Experten sprechen"
        href="/ge/lass-uns-reden/"
      />
      <Footer locale="de" />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { googleAdsData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";
import { GoogleAdsCalculator } from "@/components/sections/ads/GoogleAdsCalculator";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Google Ads Agentur | PPC Management | Nesco Digital",
  description: "ROI-orientiertes Google Ads Management. Search, Display, Shopping, YouTube. 15 Jahre Erfahrung, 36M€+ verwaltet. Kostenloses Audit anfragen.",
  path: "/ge/google-de/",
  routeKey: "googleAds",
});

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z" />
    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" />
    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
  </svg>
);

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function GoogleDeePage() {
  const heroRightSlot = (
    <AdsDashboardCard
      emoji="📊"
      title="Google Ads Kampagne"
      date="September 2025"
      metrics={[
        { label: "ROAS", animated: { target: 5.2, decimals: 1, suffix: "x" }, badge: { text: "↑ 189%", positive: true } },
        { label: "Conversions", animated: { target: 847 }, badge: { text: "↑ 134%", positive: true } },
        { label: "CPA", animated: { target: 38, suffix: "€" }, badge: { text: "↓ 42%", positive: false } },
      ]}
      barPercent={94}
      barLabel="Budget genutzt"
      status="AKTIV Search + Shopping + Display"
      badge1="5,2x ROAS E-Commerce"
      badge2="Handel, Rumänien"
    />
  );

  const afterHeroSlot = (
    <>
      <AdsTrustBar items={[
        { icon: <GoogleIcon />, label: "Google Partner" },
        { icon: <MetaIcon />, label: "Meta Business Partner" },
        { stat: "15", label: "Jahre Erfahrung" },
        { stat: "36M€+", label: "verwaltet" },
        { stat: "500+", label: "Kampagnen" },
      ]} />
      <AdsBeforeAfter
        title="Echte Ergebnisse Vor und Nach Nesco Digital"
        beforeLabel="Vorher"
        afterLabel="Nach Nesco"
        before={[
          { label: "ROAS", display: "1,8x" },
          { label: "Conversions/Monat", display: "312" },
          { label: "CPA", display: "98€" },
          { label: "Quality Score", display: "4/10" },
          { label: "Strategie", display: "nur Keywords" },
          { label: "Reporting", display: "Klicks & Impressionen" },
        ]}
        after={[
          { label: "ROAS", display: "5,2x", animate: { target: 5.2, decimals: 1, suffix: "x" } },
          { label: "Conversions/Monat", display: "847", animate: { target: 847 } },
          { label: "CPA", display: "38€", animate: { target: 38, suffix: "€" } },
          { label: "Quality Score", display: "8,5/10" },
          { label: "Strategie", display: "Full-Funnel PPC" },
          { label: "Reporting", display: "ROAS & Umsatz" },
        ]}
        source="E-Commerce Handel, Rumänien 90 Tage"
      />
      <AdsComparison
        bad={[
          "Broad Keywords ohne Negativ-Listen",
          "Eine Anzeigengruppe für alle Produkte",
          "Kein Conversion-Tracking eingerichtet",
          "Manuelle Gebote ohne Datenbasis",
          "Keine Shopping-Kampagnen",
          "Reporting: Klicks und CPC",
        ]}
        good={[
          "Strukturierte Kampagnen nach Intent (Search + Shopping + PMAX)",
          "Enge Anzeigengruppen mit 3–5 Keywords",
          "Vollständiges Conversion-Tracking: Käufe, Leads, Anrufe",
          "Smart Bidding mit Target ROAS / CPA",
          "Shopping & Performance Max für E-Commerce",
          "Reporting: ROAS, Umsatz und echter Geschäftsimpact",
        ]}
      />
      <AdsTimeline
        phases={[
          {
            emoji: "🔍",
            range: "Tage 1–14",
            title: "Audit & Setup",
            color: "#4285F4",
            items: [
              "Vollständiges Google Ads Konto-Audit",
              "Keyword-Recherche & Wettbewerbsanalyse",
              "Conversion-Tracking & Google Analytics 4 Setup",
              "Kampagnenstruktur entwerfen",
              "Erste Kampagnen live (Search + Shopping)",
            ],
          },
          {
            emoji: "⚡",
            range: "Tage 15–45",
            title: "Optimierung",
            color: "#60a5fa",
            items: [
              "Negativ-Keyword-Erweiterung",
              "Gebotsstrategie-Tests (tROAS / tCPA)",
              "A/B-Tests für Anzeigentexte",
              "Shopping-Feed-Optimierung",
              "Quality-Score-Verbesserungen",
            ],
          },
          {
            emoji: "🚀",
            range: "Tage 46–90",
            title: "Skalierung",
            color: "#56db84",
            items: [
              "Budgetskalierung bei erfolgreichen Kampagnen",
              "Launch von Performance Max Kampagnen",
              "Remarketing & Audience-Layering",
              "Wachstumsstrategie ab Monat 4",
            ],
          },
        ]}
      />
      <GoogleAdsCalculator locale="de" />
    </>
  );

  return (
    <>
      <Header locale="de" />
      <main>
        <ServicePageTemplate
          data={googleAdsData.de}
          heroRightSlot={heroRightSlot}
          afterHeroSlot={afterHeroSlot}
        />
      </main>
      <Footer locale="de" />
      <AdsStickyBar title="Bereit, mit Google Ads zu wachsen?" cta="Mit einem Experten sprechen" href="/ge/lass-uns-reden/" />
    </>
  );
}

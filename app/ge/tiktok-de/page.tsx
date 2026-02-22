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

export const metadata: Metadata = buildMetadata({ locale: "de", title: "TikTok Ads Agentur | TikTok Werbung | Nesco Digital", description: "TikTok Ads für Marken, die neue Zielgruppen erreichen wollen. Native Creatives, erweitertes Targeting, messbare Ergebnisse.", path: "/ge/tiktok-de/", routeKey: "tiktokAds" });

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "paidAds",
  hero: { badge: "TikTok Ads", title: "TikTok Ads", subtitle: "Erreichen Sie Gen Z und Millennials mit authentischen, kreativen Kampagnen, die schnellst wachsende Plattform für die nächste Generation." },
  problems: [{ title: "Fehlen auf der schnellst wachsenden Plattform", desc: "Wettbewerber sind bereits auf TikTok" }, { title: "Geringes Brand-Bewusstsein bei jungen Zielgruppen", desc: "Die nächste Generation von Käufern wird nicht erreicht" }, { title: "Creative-Content-Herausforderungen", desc: "TikTok erfordert nativen, authentischen Content" }, { title: "Unklarer ROI aus TikTok", desc: "Schwierig zu messen und zu optimieren" }],
  solutions: [{ title: "TikTok-Strategie", desc: "Plattformspezifische Strategie für maximalen Impact." }, { title: "Native Creative-Produktion", desc: "Content, der organisch wirkt, nicht wie Werbung." }, { title: "Spark Ads", desc: "Besten organischen Content mit bezahlter Reichweite verstärken." }, { title: "In-Feed & TopView", desc: "Maximale Sichtbarkeitsformate für Markteinführungen." }, { title: "Audience-Targeting", desc: "Präzises Verhaltens- und Interessen-Targeting." }, { title: "Performance-Tracking", desc: "Vollständige Attribution und ROAS-Messung." }],
  cases: [{ metric: "+300%", label: "Brand-Awareness-Lift", industry: "DTC-Konsumentenmarke" }, { metric: "2,5x ROAS", label: "Return on Ad Spend", industry: "Fashion E-Commerce" }, { metric: "+400%", label: "Follower in 60 Tagen", industry: "Lifestyle-Marke" }],
  omnichannelServices: ["Instagram Ads", "Facebook Ads", "Google Ads", "E-Mail-Marketing", "CRO"],
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
    badge1="2,5x ROAS Fashion"
    badge2="E-Commerce, Rumänien"
  />
);

const afterHeroSlot: ReactNode = (
  <>
    <AdsTrustBar items={[
      { icon: <TikTokIcon />, label: "TikTok Ads Manager" },
      { icon: <MetaIcon />, label: "Meta Business Partner" },
      { stat: "5M+", label: "TikTok-Nutzer in RO" },
      { stat: "3x", label: "günstiger als Meta" },
      { stat: "500+", label: "Kampagnen" },
    ]} />
    <AdsBeforeAfter
      title="Echte Ergebnisse Vorher und nachher Nesco Digital"
      beforeLabel="Vorher"
      afterLabel="Nach Nesco"
      before={[
        { label: "Aufrufe/Monat", display: "45.000" },
        { label: "Bestellungen", display: "12" },
        { label: "CPO (Kosten/Bestellung)", display: "82€" },
        { label: "ROAS", display: "0,9x" },
        { label: "Content-Typ", display: "wiederverwendetes Video" },
        { label: "Gewonnene Follower", display: "120" },
      ]}
      after={[
        { label: "Aufrufe/Monat", display: "3.200.000", animate: { target: 3200000 } },
        { label: "Bestellungen", display: "1.280", animate: { target: 1280 } },
        { label: "CPO (Kosten/Bestellung)", display: "8€", animate: { target: 8, suffix: "€" } },
        { label: "ROAS", display: "2,5x" },
        { label: "Content-Typ", display: "nativer TikTok UGC" },
        { label: "Gewonnene Follower", display: "4.200", animate: { target: 4200 } },
      ]}
      source="Streetwear-Fashion-Marke, Rumänien 60 Tage"
    />
    <AdsComparison
      bad={[
        "Wiederverwendete Videos von Instagram oder YouTube",
        "Boosting organischer Beiträge ohne Strategie",
        "Nur ein Format (In-Feed) ohne Tests",
        "Kein TikTok Pixel installiert",
        "Breite Zielgruppen ohne Interessensegmentierung",
        "Reporting: nur Views und Follower",
      ]}
      good={[
        "UGC und nativer Content speziell für TikTok erstellt",
        "Spark Ads auf bewährtem organischen Content",
        "Mix aus In-Feed + TopView + Brand Takeover",
        "TikTok Pixel + Events API für präzise Attribution",
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
            "Konto-Audit und TikTok Content-Strategie",
            "TikTok Business Center und Pixel einrichten",
            "Creative-Brief und erste Video-Produktion",
            "Start der In-Feed- und Spark-Ads-Kampagnen",
          ],
        },
        {
          emoji: "📊",
          range: "Tage 15–45",
          title: "Test & Optimierung",
          color: "#a78bfa",
          items: [
            "A/B-Testing mit 5–8 Creatives pro Woche",
            "Targeting- und Budget-Optimierung",
            "Gewinnendes Format identifizieren (In-Feed vs. Spark)",
            "Retargeting für Website-Besucher und Warenkorbabbrecher",
          ],
        },
        {
          emoji: "🚀",
          range: "Tage 46–90",
          title: "Virales Wachstum",
          color: "#56db84",
          items: [
            "Budgets für Videos mit bestem ROAS skalieren",
            "TopView für Brand Awareness starten",
            "Lookalike Audiences auf Basis von Käufern",
            "Konsolidierte wöchentliche Content-Strategie",
          ],
        },
      ]}
    />
    <TikTokAdsCalculator />
  </>
);

export default function TikTokDePage() {
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
      <AdsStickyBar title="Bereit, auf TikTok zu skalieren?" cta="Mit einem Experten sprechen" href="/ge/lass-uns-reden/" />
      <Footer locale="de" />
    </>
  );
}

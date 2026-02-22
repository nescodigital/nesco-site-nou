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
  locale: "en",
  title: "TikTok Ads Agency | TikTok Advertising | Nesco Digital",
  description: "TikTok Ads for brands reaching new audiences. Native creatives, advanced targeting, measurable results.",
  path: "/en/tiktok-en/",
  routeKey: "tiktokAds",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "TikTok Ads",
    title: "TikTok Ads",
    subtitle: "Reach Gen Z and Millennials with authentic, creative campaigns that drive viral growth and measurable conversions, where the next billion-dollar brands are built.",
  },
  problems: [
    { title: "Missing the fastest growing platform", desc: "Your competitors are already on TikTok" },
    { title: "Low brand awareness in young demographics", desc: "Not reaching the next generation of buyers" },
    { title: "Creative content challenges", desc: "TikTok requires native-feeling, authentic content" },
    { title: "Unclear ROI from TikTok", desc: "Unsure how to measure and optimize TikTok performance" },
  ],
  solutions: [
    { title: "TikTok Strategy", desc: "Platform-specific strategy for maximum impact." },
    { title: "Native creative production", desc: "Content that feels organic, not like an ad." },
    { title: "Spark Ads", desc: "Amplify your best organic content with paid reach." },
    { title: "In-Feed & TopView campaigns", desc: "Maximum visibility formats for brand launches." },
    { title: "Audience targeting", desc: "Precise behavioral and interest targeting." },
    { title: "Performance tracking", desc: "Full attribution and ROAS measurement." },
  ],
  cases: [
    { metric: "+300%", label: "Brand awareness lift", industry: "DTC Consumer Brand" },
    { metric: "2.5x ROAS", label: "Return on ad spend", industry: "Fashion E-commerce" },
    { metric: "+400%", label: "Followers in 60 days", industry: "Lifestyle Brand" },
  ],
  omnichannelServices: ["Instagram Ads", "Facebook Ads", "Google Ads", "Email Marketing", "CRO"],
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
    title="TikTok Ads — Campaign"
    date="November 2025"
    metrics={[
      { label: "Views", animated: { target: 3200000 }, badge: { text: "↑ 300%", positive: true } },
      { label: "Orders", animated: { target: 1280 }, badge: { text: "↑ 156%", positive: true } },
      { label: "CPO", animated: { target: 8, suffix: "€" }, badge: { text: "↓ 45%", positive: false } },
    ]}
    barPercent={91}
    barLabel="Budget used"
    status="ACTIVE — In-Feed + Spark Ads"
    badge1="2.5x ROAS Fashion"
    badge2="E-commerce, Romania"
  />
);

const afterHeroSlot: ReactNode = (
  <>
    <AdsTrustBar items={[
      { icon: <TikTokIcon />, label: "TikTok Ads Manager" },
      { icon: <MetaIcon />, label: "Meta Business Partner" },
      { stat: "5M+", label: "TikTok users in RO" },
      { stat: "3x", label: "cheaper reach vs Meta" },
      { stat: "500+", label: "campaigns delivered" },
    ]} />
    <AdsBeforeAfter
      title="Real results — Before and after Nesco Digital"
      beforeLabel="Before"
      afterLabel="After Nesco"
      before={[
        { label: "Views/month", display: "45,000" },
        { label: "Orders", display: "12" },
        { label: "CPO (cost/order)", display: "€82" },
        { label: "ROAS", display: "0.9x" },
        { label: "Content type", display: "repurposed video" },
        { label: "Followers gained", display: "120" },
      ]}
      after={[
        { label: "Views/month", display: "3,200,000", animate: { target: 3200000 } },
        { label: "Orders", display: "1,280", animate: { target: 1280 } },
        { label: "CPO (cost/order)", display: "€8", animate: { target: 8, suffix: "€" } },
        { label: "ROAS", display: "2.5x" },
        { label: "Content type", display: "native TikTok UGC" },
        { label: "Followers gained", display: "4,200", animate: { target: 4200 } },
      ]}
      source="Streetwear fashion brand, Romania — 60 days"
    />
    <AdsComparison
      bad={[
        "Repurposed videos from Instagram or YouTube",
        "Boosting organic posts without a strategy",
        "Single format (In-Feed) without testing",
        "No TikTok Pixel installed",
        "Broad audiences without interest segmentation",
        "Reporting: views and followers only",
      ]}
      good={[
        "UGC and native content created specifically for TikTok",
        "Spark Ads on proven organic content",
        "Mix of In-Feed + TopView + Brand Takeover",
        "TikTok Pixel + Events API for precise attribution",
        "Targeting based on purchase behaviour and interests",
        "Reporting: ROAS, CPO, orders and revenue",
      ]}
    />
    <TikTokFormats />
    <AdsTimeline
      phases={[
        {
          emoji: "🎬",
          range: "Days 1–14",
          title: "Creative & Setup",
          color: "#ff0050",
          items: [
            "Account audit and TikTok content strategy",
            "TikTok Business Center and Pixel setup",
            "Creative brief and first video production",
            "Launch In-Feed and Spark Ads campaigns",
          ],
        },
        {
          emoji: "📊",
          range: "Days 15–45",
          title: "Test & Optimise",
          color: "#a78bfa",
          items: [
            "A/B testing 5–8 creatives per week",
            "Targeting and budget optimisation",
            "Identify winning format (In-Feed vs Spark)",
            "Retargeting site visitors and cart abandoners",
          ],
        },
        {
          emoji: "🚀",
          range: "Days 46–90",
          title: "Viral Scale",
          color: "#56db84",
          items: [
            "Scale budgets on videos with the best ROAS",
            "Launch TopView for brand awareness",
            "Lookalike audiences based on buyers",
            "Consolidated weekly content strategy",
          ],
        },
      ]}
    />
    <TikTokAdsCalculator />
  </>
);

export default function TikTokEnPage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={heroRightSlot}
          afterHeroSlot={afterHeroSlot}
        />
      </main>
      <AdsStickyBar title="Ready to scale on TikTok?" cta="Talk to a specialist" href="/en/lets-talk/" />
      <Footer locale="en" />
    </>
  );
}

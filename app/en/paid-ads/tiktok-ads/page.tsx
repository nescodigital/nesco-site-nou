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
  description: "TikTok Ads for brands that want to reach new audiences. Native creative, advanced targeting, measurable results.",
  path: "/en/paid-ads/tiktok-ads/",
  routeKey: "tiktokAds",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "TikTok Ads",
    title: "Reach the new generation of shoppers with TikTok Ads",
    subtitle: "TikTok has 5 million users in Romania and is the fastest-growing platform. Cost per view is 3-5x lower than Meta, and the audience is highly receptive to new brands.",
  },
  problems: [
    { title: "Young audiences don't find you on Facebook", desc: "Gen Z (18-26) and younger Millennials spend more time on TikTok than any other platform. If you're not on TikTok, you don't exist for them." },
    { title: "Your Meta costs keep getting more expensive", desc: "CPMs on Facebook and Instagram rise constantly. TikTok offers reach at significantly lower costs with higher engagement." },
    { title: "Your products have untapped viral potential", desc: "TikTok is the platform where a good video can reach millions without a huge budget. The algorithm rewards good content, not accounts with many followers." },
    { title: "Your competitors have already discovered TikTok", desc: "Brands that entered TikTok in 2023-2024 have a market advantage. Every month of delay increases the cost of entry." },
  ],
  solutions: [
    { title: "In-Feed Ads, Native like a regular TikTok", desc: "Ads appear in users' feeds and look like organic content. The most effective format for direct conversions." },
    { title: "Spark Ads, Amplify what already works", desc: "If an organic TikTok has performed well, we amplify it with paid budget. The fastest ROI on the platform." },
    { title: "TopView, First thing seen when opening", desc: "Your ad appears as soon as the user opens TikTok. Impossible to ignore, ideal for brand launches." },
    { title: "Native creative production", desc: "Not any content works on TikTok. We create or guide the creation of authentic, platform-native content that doesn't look like an ad." },
    { title: "Precise audience targeting", desc: "We target by interests, viewing behavior, device, and demographics. We reach your audience even if they don't follow you." },
    { title: "Full tracking and attribution", desc: "TikTok Pixel on your site tracks visits, add-to-carts, and conversions. You know exactly what TikTok generates." },
  ],
  cases: [
    { metric: "+300%", label: "Brand awareness lift", industry: "DTC Brand" },
    { metric: "2.5x ROAS", label: "Return on Ad Spend", industry: "E-commerce Fashion" },
    { metric: "+400%", label: "New followers in 60 days", industry: "Lifestyle Brand" },
    { metric: "-45%", label: "Cost per click vs. Meta", industry: "E-commerce" },
    { metric: "+180%", label: "Website traffic growth", industry: "Beauty Brand" },
    { metric: "3x leads", label: "Qualified leads", industry: "Online Education" },
  ],
  omnichannelServices: ["Instagram Ads", "Facebook Ads", "Google Ads", "Email Marketing", "CRO"],
  faq: [
    { q: "Isn't TikTok just for teenagers and dancing?", a: "It was. Now 40% of TikTok users are over 30, and content covers every niche: business, real estate, automotive, food, beauty, education. If your product can be shown in a 30-60 second video, TikTok works." },
    { q: "How much do TikTok ads cost compared to Facebook?", a: "CPM (cost per 1,000 views) on TikTok is 2-3x lower than Facebook in Romania. Engagement is higher, meaning lower cost per click. It's the most cost-efficient platform from a cost-per-reach perspective in 2024-2025." },
    { q: "Do I need a TikTok account with many followers?", a: "No. TikTok Ads can run from a business account with 0 followers. Reach is determined by budget and targeting, not account popularity." },
    { q: "What type of video do I need to prepare?", a: "Vertical videos (9:16), 15-60 seconds, filmed casually (not ultra-professional production). TikTok rewards authenticity. We provide detailed briefs and can coordinate or create the content ourselves." },
    { q: "Does TikTok Ads work for B2B?", a: "For direct B2B sales, it's less effective. But for brand awareness and thought leadership, it works surprisingly well. Lawyers, consultants, agencies that post educational content on TikTok win new clients who wouldn't have found them otherwise." },
    { q: "How do I measure that TikTok Ads is working?", a: "Through TikTok Pixel which tracks site visits, add-to-carts, and conversions. Plus metrics for reach, complete views, and clicks. We report separately for TikTok vs. other channels to see the real contribution." },
  ],
  testimonial: { quote: "We entered TikTok in September and by December we had 4,000 new orders. Cost per order of 8 EUR, the best across all channels. Nesco knew exactly what type of content works.", name: "Radu T.", role: "Founder, streetwear fashion brand" },
  tools: ["TikTok Ads Manager", "TikTok Pixel", "TikTok Business Center", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "TOOLS WE USE",
  freeAuditBadge: "Free TikTok Ads Audit Included",
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
    title="TikTok Ads Campaign"
    date="November 2025"
    metrics={[
      { label: "Views", animated: { target: 3200000 }, badge: { text: "↑ 300%", positive: true } },
      { label: "Orders", animated: { target: 1280 }, badge: { text: "↑ 156%", positive: true } },
      { label: "CPO", animated: { target: 8, suffix: "€" }, badge: { text: "↓ 45%", positive: false } },
    ]}
    barPercent={91}
    barLabel="Budget used"
    status="ACTIVE In-Feed + Spark Ads"
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
      { stat: "3x", label: "reach at lower cost vs Meta" },
      { stat: "500+", label: "campaigns delivered" },
    ]} />
    <AdsBeforeAfter
      title="Real results Before and after Nesco Digital"
      beforeLabel="Before"
      afterLabel="After Nesco"
      before={[
        { label: "Views/month", display: "45,000" },
        { label: "Orders", display: "12" },
        { label: "CPO (cost/order)", display: "82€" },
        { label: "ROAS", display: "0.9x" },
        { label: "Content type", display: "repurposed video" },
        { label: "Followers gained", display: "120" },
      ]}
      after={[
        { label: "Views/month", display: "3,200,000", animate: { target: 3200000 } },
        { label: "Orders", display: "1,280", animate: { target: 1280 } },
        { label: "CPO (cost/order)", display: "8€", animate: { target: 8, suffix: "€" } },
        { label: "ROAS", display: "2.5x" },
        { label: "Content type", display: "UGC native TikTok" },
        { label: "Followers gained", display: "4,200", animate: { target: 4200 } },
      ]}
      source="Streetwear fashion brand, Romania 60 days"
    />
    <AdsComparison
      bad={[
        "Videos reposted from Instagram or YouTube",
        "Boosting organic posts without a strategy",
        "One single format (In-Feed) without testing",
        "No TikTok Pixel installed",
        "Broad audiences without interest segmentation",
        "Reporting: views and followers",
      ]}
      good={[
        "UGC and native content created specifically for TikTok",
        "Spark Ads on organic content with proven performance",
        "Mix of In-Feed + TopView + Brand Takeover",
        "TikTok Pixel + Events API for exact attribution",
        "Targeting by purchase behavior and interests",
        "Reporting: ROAS, CPO, orders, and revenue",
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
            "Setup TikTok Business Center and Pixel",
            "Creative brief and production of first videos",
            "Launch In-Feed and Spark Ads campaigns",
          ],
        },
        {
          emoji: "📊",
          range: "Days 15–45",
          title: "Test & Optimization",
          color: "#a78bfa",
          items: [
            "A/B testing 5-8 creatives/week",
            "Targeting and budget optimization",
            "Identify winning format (In-Feed vs Spark)",
            "Retargeting on site visitors and add-to-carts",
          ],
        },
        {
          emoji: "🚀",
          range: "Days 46–90",
          title: "Viral Scaling",
          color: "#56db84",
          items: [
            "Scale budgets on videos with the best ROAS",
            "Launch TopView for brand awareness",
            "Lookalike audiences on buyers",
            "Consolidated weekly content strategy",
          ],
        },
      ]}
    />
    <TikTokAdsCalculator />
  </>
);

export default function TikTokAdsEnPage() {
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

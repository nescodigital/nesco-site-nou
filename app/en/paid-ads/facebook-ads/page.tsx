import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { MetaAdsFunnel } from "@/components/sections/ads/MetaAdsFunnel";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { MetaAdsCalculator } from "@/components/sections/ads/MetaAdsCalculator";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";
import { facebookAdsData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Facebook Ads Agency | Meta Ads Management | Nesco Digital",
  description:
    "Facebook and Instagram Ads campaigns that convert. Precise targeting, high-performing creative, continuous optimization. Proven Meta agency.",
  path: "/en/paid-ads/facebook-ads/",
  routeKey: "facebookAds",
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

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
    <path fill="white" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
  </svg>
);

export default function FacebookAdsEnPage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <ServicePageTemplate
          data={facebookAdsData.en}
          heroRightSlot={
            <AdsDashboardCard
              emoji="📣"
              title="Meta Ads Campaign"
              date="October 2025"
              metrics={[
                {
                  label: "ROAS",
                  animated: { target: 6.2, decimals: 1, suffix: "x" },
                  badge: { text: "↑ 45%", positive: true },
                },
                {
                  label: "Reach",
                  animated: { target: 428000 },
                  badge: { text: "↑ 28%", positive: true },
                },
                {
                  label: "CPL",
                  animated: { target: 24, suffix: " lei" },
                  badge: { text: "↓ 30%", positive: false },
                },
              ]}
              barPercent={87}
              barLabel="Budget used"
              status="ACTIVE Feed + Stories + Reels"
              badge1="6.2x ROAS Black Friday"
              badge2="E-commerce, Romania"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar
                items={[
                  { icon: <MetaIcon />, label: "Meta Business Partner" },
                  { icon: <GoogleIcon />, label: "Google Partner" },
                  { stat: "15", label: "years of experience" },
                  { stat: "36M€+", label: "budgets managed" },
                  { stat: "500+", label: "campaigns delivered" },
                ]}
              />
              <AdsBeforeAfter
                title="Real results Before and after Nesco Digital"
                beforeLabel="Before"
                afterLabel="After Nesco"
                before={[
                  { label: "ROAS", display: "1.4x" },
                  { label: "CPL", display: "120 lei" },
                  { label: "Reach/month", display: "12,000" },
                  { label: "CTR", display: "0.4%" },
                  { label: "Strategy", display: "post boost" },
                  { label: "Reporting", display: "likes & reach" },
                ]}
                after={[
                  { label: "ROAS", display: "6.2x", animate: { target: 6.2, decimals: 1, suffix: "x" } },
                  { label: "CPL", display: "24 lei", animate: { target: 24, suffix: " lei" } },
                  { label: "Reach/month", display: "428,000", animate: { target: 428000 } },
                  { label: "CTR", display: "3.8%" },
                  { label: "Strategy", display: "full-funnel" },
                  { label: "Reporting", display: "ROAS & revenue" },
                ]}
                source="E-commerce fashion, Romania 60 days"
              />
              <AdsComparison
                bad={[
                  "Boosting posts without a strategy",
                  "Broad audiences without segmentation",
                  "One single creative for 6+ months",
                  "Zero remarketing or retargeting",
                  "Reporting: likes and reach",
                  "No Pixel properly installed",
                ]}
                good={[
                  "TOF/MOF/BOF funnel with strategically allocated budgets",
                  "Lookalike audiences + interests + behaviors",
                  "Creative refresh every 2-3 weeks",
                  "Remarketing on all site visitors + cart abandonments",
                  "Reporting: ROAS, CPL, revenue",
                  "Meta Pixel + Conversions API + GA4",
                ]}
              />
              <MetaAdsFunnel />
              <AdsTimeline
                phases={[
                  {
                    emoji: "📋",
                    range: "Days 1–14",
                    title: "Audit & Setup",
                    color: "#60a5fa",
                    items: [
                      "Meta account and Pixel audit",
                      "Complete Business Manager setup",
                      "Define audiences and content strategy",
                      "Create first TOF campaigns",
                      "Install Conversions API",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Days 15–45",
                    title: "Creative & Optimization",
                    color: "#a78bfa",
                    items: [
                      "Test 5-10 creatives/week",
                      "Data-driven optimization (CTR, CPL, ROAS)",
                      "Launch MOF and retargeting campaigns",
                      "A/B testing audiences and objectives",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Days 46–90",
                    title: "Scaling",
                    color: "#56db84",
                    items: [
                      "Scale budgets on winning campaigns",
                      "Launch BOF and loyalty campaigns",
                      "Lookalike audiences on converters",
                      "Strategy for month 4+",
                    ],
                  },
                ]}
              />
              <MetaAdsCalculator />
            </>
          }
        />
      </main>
      <AdsStickyBar
        title="Ready to grow with Facebook Ads?"
        cta="Talk to a specialist"
        href="/en/lets-talk/"
      />
      <Footer locale="en" />
    </>
  );
}

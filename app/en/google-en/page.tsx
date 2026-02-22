import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { googleAdsData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";
import { GoogleAdsCalculator } from "@/components/sections/ads/GoogleAdsCalculator";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Google Ads Agency | PPC Management | Nesco Digital",
  description:
    "ROI-focused Google Ads management. Search, Display, Shopping, YouTube campaigns. 15 years experience, 36M€+ managed. Request a free audit.",
  path: "/en/google-en/",
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

export default function GoogleAdsEnPage() {
  const schemas = [
    buildServiceSchema({
      name: "Google Ads Management",
      description: "Advanced Google Ads campaign management with data-driven optimization for maximum ROI.",
      url: "https://nescodigital.com/en/google-en/",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: "https://nescodigital.com/en/" },
      { name: "Paid Ads", url: "https://nescodigital.com/en/google-en/" },
      { name: "Google Ads", url: "https://nescodigital.com/en/google-en/" },
    ]),
  ];

  const heroRightSlot = (
    <AdsDashboardCard
      emoji="📊"
      title="Google Ads Campaign"
      date="September 2025"
      metrics={[
        { label: "ROAS", animated: { target: 5.2, decimals: 1, suffix: "x" }, badge: { text: "↑ 189%", positive: true } },
        { label: "Conversions", animated: { target: 847 }, badge: { text: "↑ 134%", positive: true } },
        { label: "CPA", animated: { target: 38, suffix: "€" }, badge: { text: "↓ 42%", positive: false } },
      ]}
      barPercent={94}
      barLabel="Budget used"
      status="ACTIVE Search + Shopping + Display"
      badge1="5.2x ROAS E-commerce"
      badge2="Retail, Romania"
    />
  );

  const afterHeroSlot = (
    <>
      <AdsTrustBar items={[
        { icon: <GoogleIcon />, label: "Google Partner" },
        { icon: <MetaIcon />, label: "Meta Business Partner" },
        { stat: "15", label: "years experience" },
        { stat: "36M€+", label: "budgets managed" },
        { stat: "500+", label: "campaigns delivered" },
      ]} />
      <AdsBeforeAfter
        title="Real Results Before and After Nesco Digital"
        beforeLabel="Before"
        afterLabel="After Nesco"
        before={[
          { label: "ROAS", display: "1.8x" },
          { label: "Conversions/month", display: "312" },
          { label: "CPA", display: "98€" },
          { label: "Quality Score", display: "4/10" },
          { label: "Strategy", display: "keywords only" },
          { label: "Reporting", display: "clicks & impressions" },
        ]}
        after={[
          { label: "ROAS", display: "5.2x", animate: { target: 5.2, decimals: 1, suffix: "x" } },
          { label: "Conversions/month", display: "847", animate: { target: 847 } },
          { label: "CPA", display: "38€", animate: { target: 38, suffix: "€" } },
          { label: "Quality Score", display: "8.5/10" },
          { label: "Strategy", display: "full-funnel PPC" },
          { label: "Reporting", display: "ROAS & revenue" },
        ]}
        source="E-commerce retail, Romania 90 days"
      />
      <AdsComparison
        bad={[
          "Broad keywords without negative lists",
          "Single ad group for all products",
          "No conversion tracking setup",
          "Manual bids with no data",
          "Zero Shopping campaigns",
          "Reporting: clicks and CPC",
        ]}
        good={[
          "Structured campaigns by intent (Search + Shopping + PMAX)",
          "Tight ad groups with 3-5 keywords each",
          "Full conversion tracking: purchases, leads, calls",
          "Smart bidding with Target ROAS / CPA",
          "Shopping & Performance Max for e-commerce",
          "Reporting: ROAS, revenue, and true business impact",
        ]}
      />
      <AdsTimeline
        phases={[
          {
            emoji: "🔍",
            range: "Days 1–14",
            title: "Audit & Setup",
            color: "#4285F4",
            items: [
              "Full Google Ads account audit",
              "Keyword research & competitor analysis",
              "Conversion tracking & Google Analytics 4 setup",
              "Campaign structure design",
              "First campaigns live (Search + Shopping)",
            ],
          },
          {
            emoji: "⚡",
            range: "Days 15–45",
            title: "Optimisation",
            color: "#60a5fa",
            items: [
              "Negative keyword expansion",
              "Bid strategy testing (tROAS / tCPA)",
              "Ad copy A/B testing",
              "Shopping feed optimisation",
              "Quality Score improvements",
            ],
          },
          {
            emoji: "🚀",
            range: "Days 46–90",
            title: "Scale",
            color: "#56db84",
            items: [
              "Budget scaling on winning campaigns",
              "Launch Performance Max campaigns",
              "Remarketing & audience layering",
              "Month 4+ growth strategy",
            ],
          },
        ]}
      />
      <GoogleAdsCalculator locale="en" />
    </>
  );

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header locale="en" />
      <main>
        <ServicePageTemplate
          data={googleAdsData.en}
          heroRightSlot={heroRightSlot}
          afterHeroSlot={afterHeroSlot}
        />
      </main>
      <Footer locale="en" />
      <AdsStickyBar title="Ready to grow with Google Ads?" cta="Talk to a specialist" href="/en/lets-talk/" />
    </>
  );
}

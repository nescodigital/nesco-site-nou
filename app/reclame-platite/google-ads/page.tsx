import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { GoogleAdsDashboardCard } from "@/components/sections/GoogleAdsDashboardCard";
import { GoogleAdsTrustBar } from "@/components/sections/GoogleAdsTrustBar";
import { GoogleAdsBeforeAfter } from "@/components/sections/GoogleAdsBeforeAfter";
import { GoogleAdsComparison } from "@/components/sections/GoogleAdsComparison";
import { GoogleAdsTimeline } from "@/components/sections/GoogleAdsTimeline";
import { GoogleAdsCalculator } from "@/components/sections/GoogleAdsCalculator";
import { GoogleAdsStickyBar } from "@/components/sections/GoogleAdsStickyBar";
import { googleAdsData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Google Ads România | Campanii PPC Profitabile | Nesco Digital",
  description: "Servicii Google Ads cu ROI măsurabil. Search, Display, Shopping, YouTube. 15 ani experiență, 36M€+ bugete gestionate. Solicită audit gratuit.",
  path: "/reclame-platite/google-ads/",
  routeKey: "googleAds",
});

export default function GoogleAdsRoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({ name: "Google Ads Management", description: googleAdsData.ro.hero.subtitle, url: "https://nescodigital.com/reclame-platite/google-ads/" })) }} />
      <Header locale="ro" />
      <main>
        <ServicePageTemplate
          data={googleAdsData.ro}
          heroRightSlot={<GoogleAdsDashboardCard />}
          afterHeroSlot={
            <>
              <GoogleAdsTrustBar />
              <GoogleAdsBeforeAfter />
              <GoogleAdsComparison />
              <GoogleAdsTimeline />
              <GoogleAdsCalculator />
            </>
          }
        />
      </main>
      <GoogleAdsStickyBar />
      <Footer locale="ro" />
    </>
  );
}

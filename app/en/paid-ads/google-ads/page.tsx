import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { googleAdsData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Google Ads UK & Europe | PPC Campaigns That Convert | Nesco Digital",
  description: "Google Ads management with measurable ROI. Search, Display, Shopping, YouTube. 15 years experience. Request a free audit.",
  path: "/en/paid-ads/google-ads/",
  routeKey: "googleAds",
});

export default function GoogleAdsEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({ name: "Google Ads Management", description: googleAdsData.en.hero.subtitle, url: "https://nescodigital.com/en/paid-ads/google-ads/" })) }} />
      <Header locale="en" />
      <main><ServicePageTemplate data={googleAdsData.en} /></main>
      <Footer locale="en" />
    </>
  );
}

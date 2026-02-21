import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { facebookAdsData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Facebook Ads Agency | Meta Ads Management | Nesco Digital",
  description: "Facebook and Instagram Ads campaigns that convert. Precise targeting, high-performing creative, continuous optimization.",
  path: "/en/paid-ads/facebook-ads/",
  routeKey: "facebookAds",
});

export default function FacebookAdsEnPage() {
  return (
    <>
      <Header locale="en" />
      <main><ServicePageTemplate data={facebookAdsData.en} /></main>
      <Footer locale="en" />
    </>
  );
}

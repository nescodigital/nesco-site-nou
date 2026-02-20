import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { facebookAdsData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Facebook Ads România | Meta Ads Agency | Nesco Digital",
  description: "Campanii Facebook și Instagram Ads care convertesc. Targeting precis, creative performant, optimizare continuă. Agenție Meta cu experiență dovedită.",
  path: "/reclame-platite/facebook-ads/",
  routeKey: "facebookAds",
});

export default function FacebookAdsRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main><ServicePageTemplate data={facebookAdsData.ro} /></main>
      <Footer locale="ro" />
    </>
  );
}

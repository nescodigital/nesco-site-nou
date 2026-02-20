import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
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
      <main><ServicePageTemplate data={googleAdsData.ro} /></main>
      <Footer locale="ro" />
    </>
  );
}

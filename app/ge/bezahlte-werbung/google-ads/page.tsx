import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { googleAdsData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Google Ads Agentur Deutschland | PPC-Kampagnen die konvertieren | Nesco Digital",
  description: "Google Ads Management mit messbarem ROI. Search, Display, Shopping, YouTube. 15 Jahre Erfahrung. Kostenlosen Audit anfordern.",
  path: "/ge/bezahlte-werbung/google-ads/",
  routeKey: "googleAds",
});

export default function GoogleAdsDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({ name: "Google Ads Management", description: googleAdsData.de.hero.subtitle, url: "https://nescodigital.com/ge/bezahlte-werbung/google-ads/" })) }} />
      <Header locale="de" />
      <main><ServicePageTemplate data={googleAdsData.de} /></main>
      <Footer locale="de" />
    </>
  );
}

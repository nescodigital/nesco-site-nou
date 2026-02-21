import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { facebookAdsData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Facebook Ads Agentur | Facebook Werbung | Nesco Digital",
  description: "Facebook Ads Kampagnen, die neue Kunden gewinnen. Zielgenaues Targeting, professionelle Creatives, messbare Ergebnisse.",
  path: "/ge/bezahlte-werbung/facebook-ads/",
  routeKey: "facebookAds",
});

export default function FacebookAdsDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({ name: "Facebook Ads Management", description: facebookAdsData.de.hero.subtitle, url: "https://nescodigital.com/ge/bezahlte-werbung/facebook-ads/" })) }} />
      <Header locale="de" />
      <main><ServicePageTemplate data={facebookAdsData.de} /></main>
      <Footer locale="de" />
    </>
  );
}

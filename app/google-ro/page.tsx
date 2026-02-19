import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { googleAdsData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Campanii Google Ads | Creștem vânzările afacerii tale rapid și eficient | Nesco Digital",
  description: "Creștem performanța campaniilor tale Google Ads cu strategii avansate. CPA cu 38% mai mic față de media industriei. Management Google Ads specializat.",
  path: "/google-ro/",
  routeKey: "googleAds",
});

export default function GoogleAdsRoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({ name: "Google Ads Management", description: googleAdsData.ro.hero.subtitle, url: "https://nescodigital.com/google-ro/" })) }} />
      <Header locale="ro" />
      <main><ServicePageTemplate data={googleAdsData.ro} /></main>
      <Footer locale="ro" />
    </>
  );
}

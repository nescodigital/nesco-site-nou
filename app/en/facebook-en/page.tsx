import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { facebookAdsData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Facebook Ads | Maximize the impact of your Facebook Ads campaigns | Nesco Digital",
  description:
    "Maximize the impact of your Facebook Ads campaigns with high-performance strategies. 30% lower cost per lead compared to industry average.",
  path: "/en/facebook-en/",
  routeKey: "facebookAds",
});

export default function FacebookAdsEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({
        name: "Facebook Ads Management",
        description: "High-performance Facebook Ads campaigns generating leads, increasing sales and brand awareness.",
        url: "https://nescodigital.com/en/facebook-en/",
      })) }} />
      <Header locale="en" />
      <main><ServicePageTemplate data={facebookAdsData.en} /></main>
      <Footer locale="en" />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { googleAdsData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Google Ads Campaigns | We grow your business sales fast and efficiently | Nesco Digital",
  description:
    "Boost the performance of your Google Ads campaigns with advanced strategies. 38% lower CPA than industry average. Specialized Google Ads management.",
  path: "/en/google-en/",
  routeKey: "googleAds",
});

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

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header locale="en" />
      <main>
        <ServicePageTemplate data={googleAdsData.en} />
      </main>
      <Footer locale="en" />
    </>
  );
}

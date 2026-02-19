import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { ecommerceData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "E-commerce Stores | Perfectly adapted online sales platforms | Nesco Digital",
  description:
    "Perfectly adapted online sales platforms that turn visitors into loyal customers and boost sales. Shopify, WooCommerce, Magento.",
  path: "/en/e-commerce-stores/",
  routeKey: "ecommerceStores",
});

export default function EcommerceEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({
        name: "E-commerce Store Development",
        description: "Custom Shopify, WooCommerce, Magento stores that convert visitors into loyal customers.",
        url: "https://nescodigital.com/en/e-commerce-stores/",
      })) }} />
      <Header locale="en" />
      <main><ServicePageTemplate data={ecommerceData.en} /></main>
      <Footer locale="en" />
    </>
  );
}

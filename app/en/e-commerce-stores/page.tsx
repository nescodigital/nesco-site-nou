import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { ecommerceData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "E-commerce Development | Online Store Agency | Nesco Digital",
  description:
    "High-performance e-commerce development. Shopify, WooCommerce, custom solutions. Conversion-optimized UX with full payment and delivery integrations.",
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

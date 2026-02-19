import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { ecommerceData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Magazine Online | Platforme de vânzări care transformă vizitatorii în clienți | Nesco Digital",
  description: "Platforme de vânzări perfect adaptate care transformă vizitatorii în clienți fideli. Shopify, WooCommerce, Magento. +80% creștere vânzări MoM.",
  path: "/magazine-online-ro/",
  routeKey: "ecommerceStores",
});

export default function EcommerceRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main><ServicePageTemplate data={ecommerceData.ro} /></main>
      <Footer locale="ro" />
    </>
  );
}

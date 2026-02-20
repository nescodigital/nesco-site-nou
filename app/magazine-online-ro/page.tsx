import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { ecommerceData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Magazine Online | E-commerce Development | Nesco Digital",
  description: "Dezvoltare magazine online performante. Shopify, WooCommerce, soluții custom. UX optimizat pentru conversii și integrări complete de plată și livrare.",
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

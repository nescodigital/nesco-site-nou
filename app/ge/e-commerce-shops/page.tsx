import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { ecommerceData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "E-Commerce Entwicklung | Online Shop Agentur | Nesco Digital",
  description: "Hochperformante E-Commerce-Entwicklung. Shopify, WooCommerce, individuelle Lösungen. Konversionsoptimiertes UX mit vollständigen Integrationen.",
  path: "/ge/e-commerce-shops/",
  routeKey: "ecommerceStores",
});

export default function EcommerceDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={ecommerceData.de} /></main><Footer locale="de" /></>);
}

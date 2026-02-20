import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { googleAdsData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Google Ads Agentur | PPC Management | Nesco Digital",
  description: "ROI-orientiertes Google Ads Management. Search, Display, Shopping, YouTube. 15 Jahre Erfahrung, 36M€+ verwaltet. Kostenloses Audit anfragen.",
  path: "/ge/google-de/",
  routeKey: "googleAds",
});

export default function GoogleDeePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={googleAdsData.de} /></main><Footer locale="de" /></>);
}

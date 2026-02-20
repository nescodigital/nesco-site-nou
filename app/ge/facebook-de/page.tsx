import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { facebookAdsData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Facebook Ads Agentur | Meta Advertising | Nesco Digital",
  description: "Facebook und Instagram Ads, die konvertieren. Präzises Targeting, leistungsstarke Creatives, kontinuierliche Optimierung.",
  path: "/ge/facebook-de/",
  routeKey: "facebookAds",
});

export default function FacebookDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={facebookAdsData.de} /></main><Footer locale="de" /></>);
}

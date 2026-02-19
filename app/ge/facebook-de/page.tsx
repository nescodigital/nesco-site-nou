import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { facebookAdsData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Facebook Ads | Maximieren Sie den Impact Ihrer Kampagnen | Nesco Digital",
  description: "Maximieren Sie den Impact Ihrer Facebook Ads Kampagnen mit Hochleistungsstrategien. 30% niedrigere Kosten pro Lead im Vergleich zum Branchendurchschnitt.",
  path: "/ge/facebook-de/",
  routeKey: "facebookAds",
});

export default function FacebookDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={facebookAdsData.de} /></main><Footer locale="de" /></>);
}

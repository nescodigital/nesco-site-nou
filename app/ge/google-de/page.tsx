import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { googleAdsData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Google Ads Kampagnen | Wir steigern Ihren Umsatz schnell und effizient | Nesco Digital",
  description: "Steigern Sie die Leistung Ihrer Google Ads Kampagnen mit fortschrittlichen Strategien. 38% niedrigere CPA als Branchendurchschnitt.",
  path: "/ge/google-de/",
  routeKey: "googleAds",
});

export default function GoogleDeePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={googleAdsData.de} /></main><Footer locale="de" /></>);
}

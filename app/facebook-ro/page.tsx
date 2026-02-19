import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { facebookAdsData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Reclame Facebook Ads | Maximizăm impactul campaniilor tale | Nesco Digital",
  description: "Creăm campanii Facebook Ads care generează lead-uri, cresc vânzările și consolidează imaginea brandului. Cost per lead cu 30% mai mic.",
  path: "/facebook-ro/",
  routeKey: "facebookAds",
});

export default function FacebookAdsRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main><ServicePageTemplate data={facebookAdsData.ro} /></main>
      <Footer locale="ro" />
    </>
  );
}

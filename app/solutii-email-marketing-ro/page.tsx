import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { emailMarketingData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Email Marketing România | Automatizări Email | Nesco Digital",
  description: "Servicii email marketing: strategii, automatizări, secvențe de nurturing. Creștem revenue din lista ta de email cu campanii targetate.",
  path: "/solutii-email-marketing-ro/",
  routeKey: "emailMarketing",
});

export default function EmailMarketingRoPage() {
  return (
    <>
      <Header locale="ro" />
      <main><ServicePageTemplate data={emailMarketingData.ro} /></main>
      <Footer locale="ro" />
    </>
  );
}

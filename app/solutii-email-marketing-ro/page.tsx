import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { emailMarketingData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Soluții Email Marketing | Construiește relații durabile cu clienții | Nesco Digital",
  description: "Construiește relații durabile cu clienții și crește vânzările prin campanii de email marketing eficiente. ROI 42:1 dovedit.",
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

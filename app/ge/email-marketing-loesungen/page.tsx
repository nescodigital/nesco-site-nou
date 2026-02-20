import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { emailMarketingData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "E-Mail Marketing Agentur | E-Mail Automatisierung | Nesco Digital",
  description: "E-Mail Marketing Services: Strategie, Automatisierungen, Nurturing-Sequenzen. Wir steigern den Umsatz aus Ihrer E-Mail-Liste.",
  path: "/ge/email-marketing-loesungen/",
  routeKey: "emailMarketing",
});

export default function EmailMarketingDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={emailMarketingData.de} /></main><Footer locale="de" /></>);
}

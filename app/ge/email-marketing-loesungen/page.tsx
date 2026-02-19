import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { emailMarketingData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "E-Mail-Marketing-Lösungen | Bauen Sie dauerhafte Kundenbeziehungen auf | Nesco Digital",
  description: "Bauen Sie dauerhafte Beziehungen zu Ihren Kunden auf und steigern Sie Ihren Umsatz. Bewährtes 42:1 ROI im E-Mail-Marketing.",
  path: "/ge/email-marketing-loesungen/",
  routeKey: "emailMarketing",
});

export default function EmailMarketingDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={emailMarketingData.de} /></main><Footer locale="de" /></>);
}

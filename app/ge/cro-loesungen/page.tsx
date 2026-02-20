import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { croData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "CRO Services | Conversion Rate Optimierung | Nesco Digital",
  description: "CRO-Services: UX-Audit, A/B-Testing, Landingpage-Optimierung. Steigern Sie Ihre Conversion Rate ohne mehr Werbebudget.",
  path: "/ge/cro-loesungen/",
  routeKey: "croSolutions",
});

export default function CRODePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={croData.de} /></main><Footer locale="de" /></>);
}

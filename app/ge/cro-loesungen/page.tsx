import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { croData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "CRO-Lösungen | Mehr Conversions, gleiches Budget | Nesco Digital",
  description: "Verwandeln Sie mehr Besucher in zahlende Kunden durch kontinuierliche Website-Optimierung. Mehr Conversions ohne Mehrbudget.",
  path: "/ge/cro-loesungen/",
  routeKey: "croSolutions",
});

export default function CRODePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={croData.de} /></main><Footer locale="de" /></>);
}

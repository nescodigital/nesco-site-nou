import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { croData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "CRO | Optimizarea Ratei de Conversie | Nesco Digital",
  description: "Servicii CRO: audit UX, A/B testing, optimizare landing pages. Creștem rata de conversie a site-ului tău fără să crești bugetul de ads.",
  path: "/solutii-cro-ro/",
  routeKey: "croSolutions",
});

export default function CRORoPage() {
  return (
    <>
      <Header locale="ro" />
      <main><ServicePageTemplate data={croData.ro} /></main>
      <Footer locale="ro" />
    </>
  );
}

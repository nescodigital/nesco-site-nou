import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { croData } from "@/lib/serviceData";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Soluții CRO | Transformă mai mulți vizitatori în clienți plătitori | Nesco Digital",
  description: "Transformăm mai mulți vizitatori în clienți și maximizăm profitul prin optimizarea continuă a site-ului. Mai multe conversii fără buget extra.",
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

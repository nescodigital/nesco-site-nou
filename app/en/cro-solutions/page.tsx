import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { croData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "CRO Solutions | Turn more visitors into paying customers | Nesco Digital",
  description:
    "Turn more visitors into paying customers and maximize your profit through continuous website optimization. More conversions without increasing your marketing budget.",
  path: "/en/cro-solutions/",
  routeKey: "croSolutions",
});

export default function CROEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({
        name: "CRO Solutions",
        description: "Conversion Rate Optimization, increasing revenue without increasing ad spend through UX/UI optimization and A/B testing.",
        url: "https://nescodigital.com/en/cro-solutions/",
      })) }} />
      <Header locale="en" />
      <main><ServicePageTemplate data={croData.en} /></main>
      <Footer locale="en" />
    </>
  );
}

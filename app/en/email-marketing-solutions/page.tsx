import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate } from "@/components/sections/ServicePage";
import { emailMarketingData } from "@/lib/serviceData";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Email Marketing Agency | Email Automation | Nesco Digital",
  description:
    "Email marketing services: strategy, automations, nurturing sequences. We grow revenue from your email list with targeted campaigns.",
  path: "/en/email-marketing-solutions/",
  routeKey: "emailMarketing",
});

export default function EmailMarketingEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({
        name: "Email Marketing Solutions",
        description: "Personalized email marketing campaigns with proven 42:1 ROI for e-commerce and B2B businesses.",
        url: "https://nescodigital.com/en/email-marketing-solutions/",
      })) }} />
      <Header locale="en" />
      <main><ServicePageTemplate data={emailMarketingData.en} /></main>
      <Footer locale="en" />
    </>
  );
}

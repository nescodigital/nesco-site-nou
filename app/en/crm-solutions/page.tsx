import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "CRM Solutions | CRM Implementation | Nesco Digital",
  description: "CRM implementation and optimization for your business. HubSpot, Salesforce, custom solutions. Organize your sales process and customer relationships.",
  path: "/en/crm-solutions/",
  routeKey: "crmSolutions",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "digitalMarketing",
  hero: {
    badge: "CRM Solutions",
    title: "CRM Solutions",
    subtitle: "Optimize customer relationships, streamline sales processes, and increase revenue with customized CRM implementations tailored to your business.",
  },
  problems: [
    { title: "Scattered customer data", desc: "No single source of truth for client information" },
    { title: "Inefficient communication", desc: "Leads fall through the cracks, follow-ups missed" },
    { title: "Cumbersome sales process", desc: "Sales team wastes time on manual tasks" },
    { title: "No operational overview", desc: "Management can't see pipeline or forecast revenue" },
  ],
  solutions: [
    { title: "Analysis & Consulting", desc: "We map your current processes and identify the right CRM solution." },
    { title: "Configuration & Customization", desc: "We configure the CRM to match your exact workflows." },
    { title: "Integration with other systems", desc: "Connect with email, marketing tools, ERP, and more." },
    { title: "Data Migration", desc: "Safe, complete migration of all your existing data." },
    { title: "Training & Support", desc: "Your team trained and confident from day one." },
    { title: "Custom Development", desc: "Custom features and automations when needed." },
  ],
  cases: [
    { metric: "+25%", label: "Marketing Qualified Leads", industry: "IT Services" },
    { metric: "+15%", label: "Customer retention rate", industry: "B2C Retail" },
    { metric: "+20%", label: "Operational efficiency", industry: "Business Consulting" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "Email Marketing", "CRO", "Digital Strategy"],
};

export default function CRMEnPage() {
  return (
    <>
      <Header locale="en" />
      <main><ServicePageTemplate data={data} /></main>
      <Footer locale="en" />
    </>
  );
}

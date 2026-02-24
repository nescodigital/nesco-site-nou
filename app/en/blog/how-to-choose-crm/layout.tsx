import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How to Choose and Implement a CRM in 2026 | Nesco Digital",
    description:
      "Complete guide to choosing and implementing a CRM: HubSpot, Salesforce, Pipedrive, Monday, Zoho compared. Selection criteria, implementation steps, and common mistakes.",
    path: "/en/blog/how-to-choose-crm/",
  }),
  alternates: {
    canonical: "https://nescodigital.com/en/blog/how-to-choose-crm/",
    languages: {
      ro: "https://nescodigital.com/blog/cum-alegi-crm/",
      en: "https://nescodigital.com/en/blog/how-to-choose-crm/",
      de: "https://nescodigital.com/ge/blog/wie-crm-waehlen/",
      "x-default": "https://nescodigital.com/blog/cum-alegi-crm/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

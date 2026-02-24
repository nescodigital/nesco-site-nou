import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum sa alegi si sa implementezi un CRM in 2026 | Nesco Digital",
    description:
      "Ghid complet pentru alegerea si implementarea unui CRM: comparatie HubSpot, Salesforce, Pipedrive, Monday, Zoho. Criterii de selectie, pasi de implementare si greseli frecvente.",
    path: "/blog/cum-alegi-crm/",
  }),
  alternates: {
    canonical: "https://nescodigital.com/blog/cum-alegi-crm/",
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

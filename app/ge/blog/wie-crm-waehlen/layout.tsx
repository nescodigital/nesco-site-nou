import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Wie man ein CRM auswaehlt und implementiert | Nesco Digital",
    description:
      "Vollstaendiger Leitfaden zur Auswahl und Implementierung eines CRM: HubSpot, Salesforce, Pipedrive, Monday, Zoho im Vergleich. Auswahlkriterien, Implementierungsschritte und haeufige Fehler.",
    path: "/ge/blog/wie-crm-waehlen/",
  }),
  alternates: {
    canonical: "https://nescodigital.com/ge/blog/wie-crm-waehlen/",
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

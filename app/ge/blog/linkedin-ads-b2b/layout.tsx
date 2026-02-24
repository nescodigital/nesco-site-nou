import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "LinkedIn Ads fur B2B: Lohnt sich die Investition? | Nesco Digital",
    description:
      "LinkedIn Ads fur B2B-Unternehmen — erweitertes Targeting, Anzeigenformate, realistische Budgets und echte Ergebnisse. Erfahre, wann es sich lohnt und wann nicht.",
    path: "/ge/blog/linkedin-ads-b2b/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/linkedin-ads-b2b/",
    languages: {
      ro: "https://nescodigital.com/blog/linkedin-ads-b2b-romania/",
      en: "https://nescodigital.com/en/blog/linkedin-ads-b2b/",
      de: "https://nescodigital.com/ge/blog/linkedin-ads-b2b/",
      "x-default":
        "https://nescodigital.com/blog/linkedin-ads-b2b-romania/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

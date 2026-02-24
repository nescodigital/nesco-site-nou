import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum afecteaza AI Overviews SEO-ul si ce trebuie sa faci | Nesco Digital",
    description:
      "Google AI Overviews schimba regulile SEO. Afla cum afecteaza traficul organic, ce tipuri de cautari sunt vizate si 6 strategii concrete de adaptare.",
    path: "/blog/ai-overviews-impact-seo/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/ai-overviews-impact-seo/",
    languages: {
      ro: "https://nescodigital.com/blog/ai-overviews-impact-seo/",
      en: "https://nescodigital.com/en/blog/ai-overviews-seo-impact/",
      de: "https://nescodigital.com/ge/blog/ai-overviews-seo-auswirkungen/",
      "x-default":
        "https://nescodigital.com/blog/ai-overviews-impact-seo/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

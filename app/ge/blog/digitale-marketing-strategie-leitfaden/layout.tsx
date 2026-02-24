import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Digitale Marketing-Strategie Schritt fur Schritt (Leitfaden 2026) | Nesco Digital",
    description:
      "Vollstandiger Leitfaden zum Aufbau einer digitalen Marketing-Strategie von Grund auf. Audit, SMART-Ziele, Buyer Personas, Kanalauswahl, Budgetverteilung und Ausfuhrungskalender.",
    path: "/ge/blog/digitale-marketing-strategie-leitfaden/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/digitale-marketing-strategie-leitfaden/",
    languages: {
      ro: "https://nescodigital.com/blog/strategie-marketing-digital-ghid/",
      en: "https://nescodigital.com/en/blog/digital-marketing-strategy-guide/",
      de: "https://nescodigital.com/ge/blog/digitale-marketing-strategie-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/strategie-marketing-digital-ghid/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Performance Max 2026: Vollstandiger Leitfaden fur Online-Shops | Nesco Digital",
    description:
      "Vollstandiger Performance Max Leitfaden fur E-Commerce: Schritt-fur-Schritt-Setup, haufige Fehler, PMax vs Shopping vs Search. Alles uber Google AI-Kampagnen fur Online-Shops.",
    path: "/ge/blog/performance-max-ecommerce/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/performance-max-ecommerce/",
    languages: {
      ro: "https://nescodigital.com/blog/performance-max-ecommerce/",
      en: "https://nescodigital.com/en/blog/performance-max-ecommerce/",
      de: "https://nescodigital.com/ge/blog/performance-max-ecommerce/",
      "x-default":
        "https://nescodigital.com/blog/performance-max-ecommerce/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

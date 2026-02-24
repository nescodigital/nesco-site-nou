import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Wie man in ChatGPT und Google AI Overviews erscheint (GEO) | Nesco Digital",
    description:
      "Vollständiger Leitfaden zur Generative Engine Optimization (GEO): So optimieren Sie Ihre Inhalte, um in ChatGPT, Google AI Overviews und Perplexity-Ergebnissen 2026 zu erscheinen.",
    path: "/ge/blog/geo-optimierung-ai-search/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/geo-optimierung-ai-search/",
    languages: {
      ro: "https://nescodigital.com/blog/geo-optimizare-ai-search/",
      en: "https://nescodigital.com/en/blog/geo-optimization-ai-search/",
      de: "https://nescodigital.com/ge/blog/geo-optimierung-ai-search/",
      "x-default":
        "https://nescodigital.com/blog/geo-optimizare-ai-search/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

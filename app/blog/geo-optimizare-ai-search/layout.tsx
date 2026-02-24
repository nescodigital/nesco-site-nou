import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum să apari în ChatGPT și Google AI Overviews (GEO) | Nesco Digital",
    description:
      "Ghid complet de Generative Engine Optimization (GEO): cum să îți optimizezi conținutul pentru a apărea în rezultatele ChatGPT, Google AI Overviews și Perplexity în 2026.",
    path: "/blog/geo-optimizare-ai-search/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/geo-optimizare-ai-search/",
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

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Lokales SEO: Wie man in seiner Stadt auf Google Platz 1 erreicht | Nesco Digital",
    description:
      "Vollständiger lokaler SEO-Leitfaden: Google Business Profile, Bewertungen, lokale Einträge und Strategien, um die Google Maps Ergebnisse in deiner Stadt zu dominieren.",
    path: "/ge/blog/lokales-seo-google-maps/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/lokales-seo-google-maps/",
    languages: {
      ro: "https://nescodigital.com/blog/seo-local-google-maps/",
      en: "https://nescodigital.com/en/blog/local-seo-google-maps/",
      de: "https://nescodigital.com/ge/blog/lokales-seo-google-maps/",
      "x-default":
        "https://nescodigital.com/blog/seo-local-google-maps/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

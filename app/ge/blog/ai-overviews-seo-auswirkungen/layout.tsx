import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Wie AI Overviews SEO beeinflussen und was du tun solltest | Nesco Digital",
    description:
      "Google AI Overviews verandern die SEO-Landschaft. Erfahre, wie sie den organischen Traffic beeinflussen und welche 6 Strategien du jetzt umsetzen solltest.",
    path: "/ge/blog/ai-overviews-seo-auswirkungen/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/ai-overviews-seo-auswirkungen/",
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

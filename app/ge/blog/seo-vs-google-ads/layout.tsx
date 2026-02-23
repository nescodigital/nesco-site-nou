import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "SEO vs. Google Ads: Was wählen bei begrenztem Budget? | Nesco Digital",
    description:
      "Organischer oder bezahlter Traffic? Wir vergleichen Kosten, Timeline und ROI beider Strategien, damit du die richtige Entscheidung triffst.",
    path: "/ge/blog/seo-vs-google-ads/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/seo-vs-google-ads/",
    languages: {
      ro: "https://nescodigital.com/blog/seo-vs-google-ads/",
      en: "https://nescodigital.com/en/blog/seo-vs-google-ads/",
      de: "https://nescodigital.com/ge/blog/seo-vs-google-ads/",
      "x-default":
        "https://nescodigital.com/blog/seo-vs-google-ads/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

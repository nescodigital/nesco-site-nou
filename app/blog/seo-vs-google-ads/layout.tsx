import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "SEO vs. Google Ads: Ce Alegi Cand Ai Buget Limitat? | Nesco Digital",
    description:
      "Trafic organic sau platit? Analizam costurile, timeline-ul si ROI-ul fiecarei strategii ca sa iei decizia corecta pentru afacerea ta.",
    path: "/blog/seo-vs-google-ads/",
  }),
  alternates: {
    canonical: "https://nescodigital.com/blog/seo-vs-google-ads/",
    languages: {
      ro: "https://nescodigital.com/blog/seo-vs-google-ads/",
      en: "https://nescodigital.com/en/blog/seo-vs-google-ads/",
      de: "https://nescodigital.com/ge/blog/seo-vs-google-ads/",
      "x-default": "https://nescodigital.com/blog/seo-vs-google-ads/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

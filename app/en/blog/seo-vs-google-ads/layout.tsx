import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "SEO vs. Google Ads: What to Choose on a Limited Budget? | Nesco Digital",
    description:
      "Organic or paid traffic? We analyze the costs, timeline, and ROI of each strategy so you can make the right decision for your business.",
    path: "/en/blog/seo-vs-google-ads/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/seo-vs-google-ads/",
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

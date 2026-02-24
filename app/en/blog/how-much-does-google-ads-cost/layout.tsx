import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How Much Does Google Ads Cost? Budget Guide 2026 | Nesco Digital",
    description:
      "Find out how much Google Ads costs in 2026. Average CPC by industry, recommended budgets by campaign type, and how to calculate your ROI correctly.",
    path: "/en/blog/how-much-does-google-ads-cost/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/how-much-does-google-ads-cost/",
    languages: {
      ro: "https://nescodigital.com/blog/cat-costa-google-ads-romania/",
      en: "https://nescodigital.com/en/blog/how-much-does-google-ads-cost/",
      de: "https://nescodigital.com/ge/blog/was-kostet-google-ads/",
      "x-default":
        "https://nescodigital.com/blog/cat-costa-google-ads-romania/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

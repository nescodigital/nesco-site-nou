import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Was kostet Google Ads? Budget-Leitfaden 2026 | Nesco Digital",
    description:
      "Erfahre, was Google Ads 2026 kostet. Durchschnittlicher CPC nach Branche, empfohlene Budgets nach Kampagnentyp und wie du deinen ROI richtig berechnest.",
    path: "/ge/blog/was-kostet-google-ads/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/was-kostet-google-ads/",
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

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Facebook Ads vs Google Ads: Was wahlen fur den Online-Shop? | Nesco Digital",
    description:
      "Kompletter Vergleich Facebook Ads vs Google Ads fur E-Commerce. CPC, ROAS, Targeting, Formate — finde heraus, wann du welche Plattform nutzen solltest.",
    path: "/ge/blog/facebook-ads-vs-google-ads-ecommerce/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/facebook-ads-vs-google-ads-ecommerce/",
    languages: {
      ro: "https://nescodigital.com/blog/facebook-ads-vs-google-ads-ecommerce/",
      en: "https://nescodigital.com/en/blog/facebook-ads-vs-google-ads-ecommerce/",
      de: "https://nescodigital.com/ge/blog/facebook-ads-vs-google-ads-ecommerce/",
      "x-default":
        "https://nescodigital.com/blog/facebook-ads-vs-google-ads-ecommerce/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

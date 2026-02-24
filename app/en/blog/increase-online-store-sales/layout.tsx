import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "15 Proven Strategies to Increase Online Store Sales | Nesco Digital",
    description:
      "Discover 15 tested strategies to grow e-commerce revenue: Google Shopping, retargeting, product page optimization, email flows, loyalty programs and more.",
    path: "/en/blog/increase-online-store-sales/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/increase-online-store-sales/",
    languages: {
      ro: "https://nescodigital.com/blog/creste-vanzari-magazin-online/",
      en: "https://nescodigital.com/en/blog/increase-online-store-sales/",
      de: "https://nescodigital.com/ge/blog/online-shop-umsatz-steigern/",
      "x-default":
        "https://nescodigital.com/blog/creste-vanzari-magazin-online/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

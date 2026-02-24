import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Facebook Ads vs Google Ads: Which to Choose for Your Online Store? | Nesco Digital",
    description:
      "Complete Facebook Ads vs Google Ads comparison for e-commerce. CPC, ROAS, targeting, formats — find out when to use each platform and how to combine them.",
    path: "/en/blog/facebook-ads-vs-google-ads-ecommerce/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/facebook-ads-vs-google-ads-ecommerce/",
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

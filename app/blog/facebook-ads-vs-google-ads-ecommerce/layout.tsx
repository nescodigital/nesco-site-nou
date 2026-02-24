import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Facebook Ads vs Google Ads: Ce alegi pentru magazinul online? | Nesco Digital",
    description:
      "Comparatie completa Facebook Ads vs Google Ads pentru e-commerce. CPC, ROAS, targeting, formate — afla cand sa folosesti fiecare platforma si cum sa le combini.",
    path: "/blog/facebook-ads-vs-google-ads-ecommerce/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/facebook-ads-vs-google-ads-ecommerce/",
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

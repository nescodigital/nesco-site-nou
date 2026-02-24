import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum sa faci reclame pe TikTok in Romania: Ghid complet | Nesco Digital",
    description:
      "Ghid complet TikTok Ads pentru Romania: formate de anunturi, targetare, bugete, creative best practices si setup pas cu pas. CPM-uri cu 40-60% mai mici decat Meta.",
    path: "/blog/reclame-tiktok-romania/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/reclame-tiktok-romania/",
    languages: {
      ro: "https://nescodigital.com/blog/reclame-tiktok-romania/",
      en: "https://nescodigital.com/en/blog/tiktok-ads-guide/",
      de: "https://nescodigital.com/ge/blog/tiktok-ads-anleitung/",
      "x-default":
        "https://nescodigital.com/blog/reclame-tiktok-romania/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

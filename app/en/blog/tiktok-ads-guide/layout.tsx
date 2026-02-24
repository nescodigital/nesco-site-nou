import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How to Run TikTok Ads: Complete Guide for 2026 | Nesco Digital",
    description:
      "Complete TikTok Ads guide: ad formats, targeting, budgets, creative best practices and step-by-step setup. CPMs 40-60% lower than Meta.",
    path: "/en/blog/tiktok-ads-guide/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/tiktok-ads-guide/",
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

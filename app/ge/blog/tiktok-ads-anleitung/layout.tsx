import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "TikTok Ads schalten: Vollstandiger Leitfaden fur 2026 | Nesco Digital",
    description:
      "Vollstandiger TikTok Ads Leitfaden: Anzeigenformate, Targeting, Budgets, kreative Best Practices und Schritt-fur-Schritt-Setup. CPMs 40-60% gunstiger als Meta.",
    path: "/ge/blog/tiktok-ads-anleitung/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/tiktok-ads-anleitung/",
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

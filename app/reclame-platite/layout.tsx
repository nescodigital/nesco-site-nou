import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Reclame Plătite | Google Ads, Facebook Ads, TikTok Ads | Nesco Digital",
  description:
    "Agenție specializată în reclame plătite: Google Ads, Facebook Ads, Instagram Ads, TikTok Ads, LinkedIn Ads. ROAS maxim, costuri minime, rezultate reale.",
  path: "/reclame-platite/",
  routeKey: "paidAdsHub",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

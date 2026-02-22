import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Paid Ads | Google Ads, Meta Ads, TikTok Ads | Nesco Digital",
  description: "We don't manage budgets, we build profitable acquisition systems. Google Ads, Meta Ads, TikTok Ads and LinkedIn Ads for ambitious companies.",
  path: "/en/paid-ads/",
  routeKey: "paidAdsHub",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

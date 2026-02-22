import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Bezahlte Werbung | Google Ads, Meta Ads, TikTok Ads | Nesco Digital",
  description: "Wir verwalten keine Budgets, wir bauen profitable Akquisitionssysteme. Google Ads, Meta Ads, TikTok Ads und LinkedIn Ads für ambitionierte Unternehmen.",
  path: "/ge/bezahlte-werbung/",
  routeKey: "paidAdsHub",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

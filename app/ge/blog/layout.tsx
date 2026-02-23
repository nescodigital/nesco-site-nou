import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Blog | Digitale Marketing-Strategien | Nesco Digital",
  description: "Praktische Artikel über digitales Marketing, Paid Ads, SEO und Strategie. Mit echten Budgets getestete Insights vom Nesco Digital Team.",
  path: "/ge/blog/",
  routeKey: "blog",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

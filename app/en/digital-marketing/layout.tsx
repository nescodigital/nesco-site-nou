import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Digital Marketing | SEO, Email Marketing, CRM, CRO | Nesco Digital",
  description: "Strategy, execution and continuous optimization, all under one roof. SEO, email marketing, social media and CRO for measurable, sustainable growth.",
  path: "/en/digital-marketing/",
  routeKey: "digitalMarketingHub",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

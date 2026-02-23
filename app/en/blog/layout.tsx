import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Blog | Digital Marketing Strategies | Nesco Digital",
  description: "Practical articles about digital marketing, paid ads, SEO and strategy. Real-budget-tested insights from the Nesco Digital team.",
  path: "/en/blog/",
  routeKey: "blog",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

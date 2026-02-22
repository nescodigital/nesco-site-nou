import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Marketing Digital | Strategie, SEO, Email, CRM, CRO | Nesco Digital",
  description: "Agenție de marketing digital full-service: strategie digitală, SEO, email marketing, CRM, CRO, social media. Creștem afaceri cu date și execuție impecabilă.",
  path: "/marketing-digital/",
  routeKey: "digitalMarketingHub",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

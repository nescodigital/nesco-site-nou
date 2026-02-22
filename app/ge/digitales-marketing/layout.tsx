import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Digitales Marketing | SEO, E-Mail-Marketing, CRM, CRO | Nesco Digital",
  description: "Strategie, Umsetzung und kontinuierliche Optimierung, alles unter einem Dach. SEO, E-Mail-Marketing, Social Media und CRO für messbares, nachhaltiges Wachstum.",
  path: "/ge/digitales-marketing/",
  routeKey: "digitalMarketingHub",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

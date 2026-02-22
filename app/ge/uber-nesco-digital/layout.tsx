import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Über Nesco Digital | Premium Partner für Digitales Marketing",
  description: "15+ Jahre Erfahrung im digitalen Marketing. Premium-Ausführungspartner für Unternehmen, die wachsen wollen, von der Strategie bis zu Kampagnen, die echten Umsatz generieren.",
  path: "/ge/uber-nesco-digital/",
  routeKey: "about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Blog | Strategii de Marketing Digital | Nesco Digital",
  description:
    "Articole practice despre marketing digital, paid ads, SEO și strategie. Insights testate pe bugete reale de la echipa Nesco Digital.",
  path: "/blog/",
  routeKey: "blog",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

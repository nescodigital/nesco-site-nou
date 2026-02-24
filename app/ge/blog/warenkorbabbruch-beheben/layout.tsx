import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Warum Kunden den Warenkorb verlassen (und wie man es behebt) | Nesco Digital",
    description:
      "Die durchschnittliche Warenkorbabbruchrate liegt bei 70%. Entdecken Sie 8 bewährte Strategien zur Rückgewinnung verlorener E-Commerce-Umsätze: E-Mail-Flows, Exit-Intent, Retargeting und mehr.",
    path: "/ge/blog/warenkorbabbruch-beheben/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/warenkorbabbruch-beheben/",
    languages: {
      ro: "https://nescodigital.com/blog/abandon-cos-cumparaturi/",
      en: "https://nescodigital.com/en/blog/cart-abandonment-fix/",
      de: "https://nescodigital.com/ge/blog/warenkorbabbruch-beheben/",
      "x-default":
        "https://nescodigital.com/blog/abandon-cos-cumparaturi/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

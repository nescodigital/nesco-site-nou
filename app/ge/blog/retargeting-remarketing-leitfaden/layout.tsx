import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Retargeting und Remarketing: Wie man verlorene Kunden zuruckgewinnt | Nesco Digital",
    description:
      "Kompletter Retargeting- und Remarketing-Leitfaden — Strategien, Plattformen, Zielgruppensegmente und empfohlene Budgets. Gewinne Besucher zuruck, die ohne Kauf gegangen sind.",
    path: "/ge/blog/retargeting-remarketing-leitfaden/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/retargeting-remarketing-leitfaden/",
    languages: {
      ro: "https://nescodigital.com/blog/retargeting-remarketing-ghid/",
      en: "https://nescodigital.com/en/blog/retargeting-remarketing-guide/",
      de: "https://nescodigital.com/ge/blog/retargeting-remarketing-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/retargeting-remarketing-ghid/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

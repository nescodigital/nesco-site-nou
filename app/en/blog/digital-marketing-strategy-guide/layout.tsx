import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Digital Marketing Strategy Step by Step (2026 Guide) | Nesco Digital",
    description:
      "Complete guide to building a digital marketing strategy from scratch. Audit, SMART goals, buyer personas, channel selection, budget allocation and execution calendar.",
    path: "/en/blog/digital-marketing-strategy-guide/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/digital-marketing-strategy-guide/",
    languages: {
      ro: "https://nescodigital.com/blog/strategie-marketing-digital-ghid/",
      en: "https://nescodigital.com/en/blog/digital-marketing-strategy-guide/",
      de: "https://nescodigital.com/ge/blog/digitale-marketing-strategie-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/strategie-marketing-digital-ghid/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

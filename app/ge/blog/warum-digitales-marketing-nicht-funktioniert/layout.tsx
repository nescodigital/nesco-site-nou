import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Warum dein digitales Marketing nicht funktioniert | Nesco Digital",
    description:
      "10 echte Gründe, warum digitale Marketingkampagnen scheitern, und wie du jedes Problem diagnostizierst und behebst. Ein vollständiger Leitfaden mit praktischen Lösungen.",
    path: "/ge/blog/warum-digitales-marketing-nicht-funktioniert/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/warum-digitales-marketing-nicht-funktioniert/",
    languages: {
      ro: "https://nescodigital.com/blog/de-ce-nu-functioneaza-marketingul/",
      en: "https://nescodigital.com/en/blog/why-digital-marketing-not-working/",
      de: "https://nescodigital.com/ge/blog/warum-digitales-marketing-nicht-funktioniert/",
      "x-default":
        "https://nescodigital.com/blog/de-ce-nu-functioneaza-marketingul/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

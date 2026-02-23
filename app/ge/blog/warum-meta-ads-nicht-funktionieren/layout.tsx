import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Warum funktionieren deine Meta Ads nicht? 7 häufige Fehler | Nesco Digital",
    description:
      "Entdecke die 7 häufigsten Fehler bei Facebook- und Instagram-Kampagnen und wie du sie behebst. Praktischer Guide vom Nesco Digital Team.",
    path: "/ge/blog/warum-meta-ads-nicht-funktionieren/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/warum-meta-ads-nicht-funktionieren/",
    languages: {
      ro: "https://nescodigital.com/blog/de-ce-nu-merg-reclamele-meta/",
      en: "https://nescodigital.com/en/blog/why-meta-ads-dont-work/",
      de: "https://nescodigital.com/ge/blog/warum-meta-ads-nicht-funktionieren/",
      "x-default":
        "https://nescodigital.com/blog/de-ce-nu-merg-reclamele-meta/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

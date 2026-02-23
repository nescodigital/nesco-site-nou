import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Why Your Meta Ads Aren't Working: 7 Common Mistakes | Nesco Digital",
    description:
      "If you're throwing money at Facebook and Instagram Ads with no results, the platform isn't the problem. Discover the 7 mistakes sabotaging your Meta campaigns.",
    path: "/en/blog/why-meta-ads-dont-work/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/why-meta-ads-dont-work/",
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

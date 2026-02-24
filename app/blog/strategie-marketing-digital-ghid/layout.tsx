import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Strategie de Marketing Digital Pas cu Pas (Ghid 2026) | Nesco Digital",
    description:
      "Ghid complet pentru construirea unei strategii de marketing digital de la zero. Audit, obiective SMART, buyer personas, canale, buget si calendar de executie.",
    path: "/blog/strategie-marketing-digital-ghid/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/strategie-marketing-digital-ghid/",
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

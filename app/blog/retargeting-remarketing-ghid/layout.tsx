import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Retargeting si Remarketing: Cum Recuperezi Clientii Pierduti | Nesco Digital",
    description:
      "Ghid complet de retargeting si remarketing — strategii, platforme, segmente de audienta si bugete recomandate. Recupereaza vizitatorii care au plecat fara sa cumpere.",
    path: "/blog/retargeting-remarketing-ghid/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/retargeting-remarketing-ghid/",
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

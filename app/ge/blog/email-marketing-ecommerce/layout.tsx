import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "E-Mail-Marketing für E-Commerce: Wie man den Umsatz mit Newslettern steigert | Nesco Digital",
    description:
      "Kompletter E-Mail-Marketing-Leitfaden für Online-Shops: Die 7 wichtigsten E-Mails, Segmentierung, A/B-Testing und empfohlene Tools. ROI von 36-42x pro investiertem Dollar.",
    path: "/ge/blog/email-marketing-ecommerce/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/email-marketing-ecommerce/",
    languages: {
      ro: "https://nescodigital.com/blog/email-marketing-ecommerce/",
      en: "https://nescodigital.com/en/blog/email-marketing-ecommerce/",
      de: "https://nescodigital.com/ge/blog/email-marketing-ecommerce/",
      "x-default":
        "https://nescodigital.com/blog/email-marketing-ecommerce/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

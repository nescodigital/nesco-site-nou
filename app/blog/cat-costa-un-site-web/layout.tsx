import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cat Costa un Site Web in 2026? Ghid Complet de Preturi | Nesco Digital",
    description:
      "Afla cat costa un site web in 2026: landing page, site de prezentare, magazin online sau aplicatie web. Preturi reale, costuri ascunse si cum sa alegi corect.",
    path: "/blog/cat-costa-un-site-web/",
  }),
  alternates: {
    canonical: "https://nescodigital.com/blog/cat-costa-un-site-web/",
    languages: {
      ro: "https://nescodigital.com/blog/cat-costa-un-site-web/",
      en: "https://nescodigital.com/en/blog/how-much-does-a-website-cost/",
      de: "https://nescodigital.com/ge/blog/was-kostet-eine-website/",
      "x-default": "https://nescodigital.com/blog/cat-costa-un-site-web/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

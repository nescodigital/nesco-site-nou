import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Ce este un Growth Sprint și cum accelerează creșterea | Nesco Digital",
    description:
      "Descopera modelul Growth Sprint: 6 saptamani intensive de audit, strategie, executie si optimizare. Afla cum comprimi luni de munca intr-un sprint focusat pe rezultate.",
    path: "/blog/ce-este-growth-sprint/",
  }),
  alternates: {
    canonical: "https://nescodigital.com/blog/ce-este-growth-sprint/",
    languages: {
      ro: "https://nescodigital.com/blog/ce-este-growth-sprint/",
      en: "https://nescodigital.com/en/blog/what-is-growth-sprint/",
      de: "https://nescodigital.com/ge/blog/was-ist-growth-sprint/",
      "x-default": "https://nescodigital.com/blog/ce-este-growth-sprint/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

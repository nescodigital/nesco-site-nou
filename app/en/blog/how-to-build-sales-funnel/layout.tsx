import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How to Build a Complete Sales Funnel | Nesco Digital",
    description:
      "Step-by-step guide to building an effective sales funnel — from TOFU to BOFU — with recommended tools at every stage.",
    path: "/en/blog/how-to-build-sales-funnel/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/how-to-build-sales-funnel/",
    languages: {
      ro: "https://nescodigital.com/blog/cum-construiesti-funnel-vanzari/",
      en: "https://nescodigital.com/en/blog/how-to-build-sales-funnel/",
      de: "https://nescodigital.com/ge/blog/sales-funnel-aufbauen-anleitung/",
      "x-default":
        "https://nescodigital.com/blog/cum-construiesti-funnel-vanzari/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

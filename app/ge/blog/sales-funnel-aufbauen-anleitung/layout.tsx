import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Wie man einen kompletten Sales Funnel aufbaut | Nesco Digital",
    description:
      "Schritt-fuer-Schritt-Anleitung zum Aufbau eines effektiven Sales Funnels — von TOFU bis BOFU — mit empfohlenen Tools in jeder Phase.",
    path: "/ge/blog/sales-funnel-aufbauen-anleitung/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/sales-funnel-aufbauen-anleitung/",
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

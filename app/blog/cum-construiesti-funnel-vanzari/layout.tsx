import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum sa construiesti un funnel de vanzari complet | Nesco Digital",
    description:
      "Ghid pas cu pas pentru construirea unui funnel de vanzari eficient — de la TOFU la BOFU — cu tool-urile recomandate la fiecare etapa.",
    path: "/blog/cum-construiesti-funnel-vanzari/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/cum-construiesti-funnel-vanzari/",
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

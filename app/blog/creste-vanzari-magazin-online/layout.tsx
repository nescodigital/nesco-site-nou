import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "15 strategii testate sa cresti vanzarile in magazinul online | Nesco Digital",
    description:
      "Descopera 15 strategii dovedite de crestere a vanzarilor in e-commerce: Google Shopping, retargeting, optimizare pagini produs, email flows, loyalty programs si mai mult.",
    path: "/blog/creste-vanzari-magazin-online/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/creste-vanzari-magazin-online/",
    languages: {
      ro: "https://nescodigital.com/blog/creste-vanzari-magazin-online/",
      en: "https://nescodigital.com/en/blog/increase-online-store-sales/",
      de: "https://nescodigital.com/ge/blog/online-shop-umsatz-steigern/",
      "x-default":
        "https://nescodigital.com/blog/creste-vanzari-magazin-online/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

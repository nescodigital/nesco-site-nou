import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "De ce iti abandoneaza clientii cosul (si cum repari) | Nesco Digital",
    description:
      "Rata medie de abandon cos e 70%. Descopera cele 8 strategii dovedite de recuperare a vanzarilor pierdute in e-commerce: email flows, exit-intent, retargeting si mai mult.",
    path: "/blog/abandon-cos-cumparaturi/",
  }),
  alternates: {
    canonical: "https://nescodigital.com/blog/abandon-cos-cumparaturi/",
    languages: {
      ro: "https://nescodigital.com/blog/abandon-cos-cumparaturi/",
      en: "https://nescodigital.com/en/blog/cart-abandonment-fix/",
      de: "https://nescodigital.com/ge/blog/warenkorbabbruch-beheben/",
      "x-default":
        "https://nescodigital.com/blog/abandon-cos-cumparaturi/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

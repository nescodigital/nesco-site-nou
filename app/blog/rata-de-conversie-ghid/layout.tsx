import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Rata de conversie: Ce este, cum o calculezi, cum o cresti | Nesco Digital",
    description:
      "Ghid complet CRO: definitia ratei de conversie, formula de calcul, benchmark-uri pe industrii si 12 tehnici testate pentru a o imbunatati. Creste vanzarile fara buget suplimentar.",
    path: "/blog/rata-de-conversie-ghid/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/rata-de-conversie-ghid/",
    languages: {
      ro: "https://nescodigital.com/blog/rata-de-conversie-ghid/",
      en: "https://nescodigital.com/en/blog/conversion-rate-guide/",
      de: "https://nescodigital.com/ge/blog/conversion-rate-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/rata-de-conversie-ghid/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

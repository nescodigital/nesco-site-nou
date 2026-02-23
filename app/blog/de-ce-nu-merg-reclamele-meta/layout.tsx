import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "De Ce Nu-ti Merg Reclamele pe Meta? 7 Greseli Frecvente | Nesco Digital",
    description:
      "Daca arunci bani pe Facebook si Instagram Ads fara rezultate, problema nu e platforma. Descopera cele 7 greseli care iti saboteaza campaniile Meta.",
    path: "/blog/de-ce-nu-merg-reclamele-meta/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/de-ce-nu-merg-reclamele-meta/",
    languages: {
      ro: "https://nescodigital.com/blog/de-ce-nu-merg-reclamele-meta/",
      en: "https://nescodigital.com/en/blog/why-meta-ads-dont-work/",
      de: "https://nescodigital.com/ge/blog/warum-meta-ads-nicht-funktionieren/",
      "x-default":
        "https://nescodigital.com/blog/de-ce-nu-merg-reclamele-meta/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "SEO local: Cum să apari primul pe Google în orașul tău | Nesco Digital",
    description:
      "Ghid complet de SEO local: Google Business Profile, recenzii, citări locale și strategii pentru a domina rezultatele Google Maps în orașul tău.",
    path: "/blog/seo-local-google-maps/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/seo-local-google-maps/",
    languages: {
      ro: "https://nescodigital.com/blog/seo-local-google-maps/",
      en: "https://nescodigital.com/en/blog/local-seo-google-maps/",
      de: "https://nescodigital.com/ge/blog/lokales-seo-google-maps/",
      "x-default":
        "https://nescodigital.com/blog/seo-local-google-maps/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

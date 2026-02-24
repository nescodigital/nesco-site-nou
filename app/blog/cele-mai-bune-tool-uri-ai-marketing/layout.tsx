import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cele mai bune tool-uri AI pentru marketing digital in 2026 | Nesco Digital",
    description:
      "De la crearea de reclame la SEO si analytics — cele mai bune tool-uri AI organizate pe cazuri de utilizare, cu review-uri detaliate si comparatii.",
    path: "/blog/cele-mai-bune-tool-uri-ai-marketing/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/cele-mai-bune-tool-uri-ai-marketing/",
    languages: {
      ro: "https://nescodigital.com/blog/cele-mai-bune-tool-uri-ai-marketing/",
      en: "https://nescodigital.com/en/blog/best-ai-tools-digital-marketing/",
      de: "https://nescodigital.com/ge/blog/beste-ki-tools-digitales-marketing/",
      "x-default":
        "https://nescodigital.com/blog/cele-mai-bune-tool-uri-ai-marketing/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

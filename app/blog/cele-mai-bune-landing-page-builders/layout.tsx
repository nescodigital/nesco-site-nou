import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cele mai bune landing page builders pentru conversii mai mari | Nesco Digital",
    description:
      "Cand ai nevoie de un landing page builder, ce feature-uri conteaza si care sunt cele mai bune optiuni — cu comparatie detaliata si review-uri.",
    path: "/blog/cele-mai-bune-landing-page-builders/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/cele-mai-bune-landing-page-builders/",
    languages: {
      ro: "https://nescodigital.com/blog/cele-mai-bune-landing-page-builders/",
      en: "https://nescodigital.com/en/blog/best-landing-page-builders/",
      de: "https://nescodigital.com/ge/blog/beste-landing-page-builder/",
      "x-default":
        "https://nescodigital.com/blog/cele-mai-bune-landing-page-builders/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

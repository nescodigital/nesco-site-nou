import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Best Landing Page Builders for Higher Conversions | Nesco Digital",
    description:
      "When you need a landing page builder, what features matter most, and which are the best options — with detailed comparison and reviews.",
    path: "/en/blog/best-landing-page-builders/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/best-landing-page-builders/",
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

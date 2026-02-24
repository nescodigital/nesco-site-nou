import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Beste Landing Page Builder für höhere Conversions | Nesco Digital",
    description:
      "Wann Sie einen Landing Page Builder brauchen, welche Features wichtig sind und welche die besten Optionen sind — mit detailliertem Vergleich und Bewertungen.",
    path: "/ge/blog/beste-landing-page-builder/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/beste-landing-page-builder/",
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

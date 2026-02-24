import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Best AI Tools for Digital Marketing in 2026 | Nesco Digital",
    description:
      "From ad creation to SEO and analytics — the best AI tools organized by use case, with detailed reviews and practical comparisons.",
    path: "/en/blog/best-ai-tools-digital-marketing/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/best-ai-tools-digital-marketing/",
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

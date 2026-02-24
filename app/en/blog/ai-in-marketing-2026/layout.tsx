import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How Companies Use AI in Marketing in 2026 | Nesco Digital",
    description:
      "Practical guide to using AI in marketing: real applications, tools, what works and what doesn't. Case studies and tested strategies in 2026.",
    path: "/en/blog/ai-in-marketing-2026/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/ai-in-marketing-2026/",
    languages: {
      ro: "https://nescodigital.com/blog/ai-in-marketing-2026/",
      en: "https://nescodigital.com/en/blog/ai-in-marketing-2026/",
      de: "https://nescodigital.com/ge/blog/ki-im-marketing-2026/",
      "x-default":
        "https://nescodigital.com/blog/ai-in-marketing-2026/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

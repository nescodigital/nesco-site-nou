import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Wie Unternehmen KI im Marketing 2026 einsetzen | Nesco Digital",
    description:
      "Praktischer Leitfaden zur Nutzung von KI im Marketing: echte Anwendungen, Tools, was funktioniert und was nicht. Fallstudien und getestete Strategien 2026.",
    path: "/ge/blog/ki-im-marketing-2026/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/ki-im-marketing-2026/",
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

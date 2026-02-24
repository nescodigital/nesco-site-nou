import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum folosesc companiile AI in marketing in 2026 | Nesco Digital",
    description:
      "Ghid practic de utilizare a AI in marketing: aplicatii reale, tool-uri, ce functioneaza si ce nu. Studii de caz si strategii testate in 2026.",
    path: "/blog/ai-in-marketing-2026/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/ai-in-marketing-2026/",
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

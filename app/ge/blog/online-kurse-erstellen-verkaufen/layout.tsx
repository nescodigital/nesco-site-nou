import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Online-Kurse erstellen und verkaufen in 2026 | Nesco Digital",
    description:
      "Von der Ideenvalidierung bis zum Launch und Marketing — vollstandiger Leitfaden mit Plattformvergleich und bewahrten Strategien fur die Erstellung und den Verkauf von Online-Kursen.",
    path: "/ge/blog/online-kurse-erstellen-verkaufen/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/online-kurse-erstellen-verkaufen/",
    languages: {
      ro: "https://nescodigital.com/blog/cum-creezi-vinzi-cursuri-online/",
      en: "https://nescodigital.com/en/blog/how-to-create-sell-online-courses/",
      de: "https://nescodigital.com/ge/blog/online-kurse-erstellen-verkaufen/",
      "x-default":
        "https://nescodigital.com/blog/cum-creezi-vinzi-cursuri-online/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

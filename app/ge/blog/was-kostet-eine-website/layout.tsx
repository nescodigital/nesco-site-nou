import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Was kostet eine Website in 2026? Vollstandiger Preisleitfaden | Nesco Digital",
    description:
      "Erfahre, was eine Website 2026 kostet: Landing Page, Firmenwebsite, Onlineshop oder Web-App. Echte Preise, versteckte Kosten und wie du die richtige Wahl triffst.",
    path: "/ge/blog/was-kostet-eine-website/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/was-kostet-eine-website/",
    languages: {
      ro: "https://nescodigital.com/blog/cat-costa-un-site-web/",
      en: "https://nescodigital.com/en/blog/how-much-does-a-website-cost/",
      de: "https://nescodigital.com/ge/blog/was-kostet-eine-website/",
      "x-default": "https://nescodigital.com/blog/cat-costa-un-site-web/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

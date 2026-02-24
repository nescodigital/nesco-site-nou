import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How Much Does a Website Cost in 2026? Complete Price Guide | Nesco Digital",
    description:
      "Find out how much a website costs in 2026: landing page, business site, e-commerce or web app. Real prices, hidden costs and how to choose the right option.",
    path: "/en/blog/how-much-does-a-website-cost/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/how-much-does-a-website-cost/",
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

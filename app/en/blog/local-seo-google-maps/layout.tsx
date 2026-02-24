import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Local SEO: How to Rank First on Google in Your City | Nesco Digital",
    description:
      "Complete local SEO guide: Google Business Profile, reviews, local citations, and strategies to dominate Google Maps results in your city.",
    path: "/en/blog/local-seo-google-maps/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/local-seo-google-maps/",
    languages: {
      ro: "https://nescodigital.com/blog/seo-local-google-maps/",
      en: "https://nescodigital.com/en/blog/local-seo-google-maps/",
      de: "https://nescodigital.com/ge/blog/lokales-seo-google-maps/",
      "x-default":
        "https://nescodigital.com/blog/seo-local-google-maps/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

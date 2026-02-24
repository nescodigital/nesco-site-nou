import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Best Email Marketing Platforms in 2026 | Nesco Digital",
    description:
      "Detailed comparison of the most popular email marketing platforms: features, pricing, and who they are best suited for.",
    path: "/en/blog/best-email-marketing-platforms/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/best-email-marketing-platforms/",
    languages: {
      ro: "https://nescodigital.com/blog/cele-mai-bune-platforme-email-marketing/",
      en: "https://nescodigital.com/en/blog/best-email-marketing-platforms/",
      de: "https://nescodigital.com/ge/blog/beste-email-marketing-plattformen/",
      "x-default":
        "https://nescodigital.com/blog/cele-mai-bune-platforme-email-marketing/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

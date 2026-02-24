import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How to Create and Sell Online Courses in 2026 | Nesco Digital",
    description:
      "From idea validation to launch and marketing — complete guide with platform comparison and proven strategies for creating and selling online courses.",
    path: "/en/blog/how-to-create-sell-online-courses/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/how-to-create-sell-online-courses/",
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

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Retargeting and Remarketing: How to Win Back Lost Customers | Nesco Digital",
    description:
      "Complete retargeting and remarketing guide — strategies, platforms, audience segments and recommended budgets. Win back visitors who left without buying.",
    path: "/en/blog/retargeting-remarketing-guide/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/retargeting-remarketing-guide/",
    languages: {
      ro: "https://nescodigital.com/blog/retargeting-remarketing-ghid/",
      en: "https://nescodigital.com/en/blog/retargeting-remarketing-guide/",
      de: "https://nescodigital.com/ge/blog/retargeting-remarketing-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/retargeting-remarketing-ghid/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

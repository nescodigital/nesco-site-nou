import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "LinkedIn Ads for B2B: Is It Worth the Investment? | Nesco Digital",
    description:
      "LinkedIn Ads for B2B companies — advanced targeting, ad formats, realistic budgets and real results. Find out when it's worth it and when it's not.",
    path: "/en/blog/linkedin-ads-b2b/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/linkedin-ads-b2b/",
    languages: {
      ro: "https://nescodigital.com/blog/linkedin-ads-b2b-romania/",
      en: "https://nescodigital.com/en/blog/linkedin-ads-b2b/",
      de: "https://nescodigital.com/ge/blog/linkedin-ads-b2b/",
      "x-default":
        "https://nescodigital.com/blog/linkedin-ads-b2b-romania/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

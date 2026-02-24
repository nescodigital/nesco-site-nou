import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How to Choose the Right Marketing Agency: 10-Step Checklist | Nesco Digital",
    description:
      "Complete 10-step checklist for evaluating and choosing the right digital marketing agency. Portfolio, transparency, pricing, red flags, and how to test before signing.",
    path: "/en/blog/how-to-choose-marketing-agency/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/how-to-choose-marketing-agency/",
    languages: {
      ro: "https://nescodigital.com/blog/cum-alegi-agentie-marketing/",
      en: "https://nescodigital.com/en/blog/how-to-choose-marketing-agency/",
      de: "https://nescodigital.com/ge/blog/wie-marketing-agentur-waehlen/",
      "x-default":
        "https://nescodigital.com/blog/cum-alegi-agentie-marketing/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

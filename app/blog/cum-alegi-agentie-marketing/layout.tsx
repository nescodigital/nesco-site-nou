import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum sa alegi agentia de marketing potrivita: Checklist 10 pasi | Nesco Digital",
    description:
      "Checklist complet in 10 pasi pentru a evalua si alege agentia de marketing digital potrivita. Portofoliu, transparenta, pricing, red flags si cum sa testezi inainte de a semna.",
    path: "/blog/cum-alegi-agentie-marketing/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/cum-alegi-agentie-marketing/",
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

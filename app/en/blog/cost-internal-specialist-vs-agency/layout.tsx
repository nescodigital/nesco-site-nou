import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How Much Does an In-House Specialist Cost vs. a Marketing Agency? | Nesco Digital",
    description:
      "Detailed cost comparison: in-house marketing specialist vs. digital marketing agency. Salary, taxes, tools, management — the real numbers nobody shows you.",
    path: "/en/blog/cost-internal-specialist-vs-agency/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/cost-internal-specialist-vs-agency/",
    languages: {
      ro: "https://nescodigital.com/blog/cost-specialist-intern-vs-agentie/",
      en: "https://nescodigital.com/en/blog/cost-internal-specialist-vs-agency/",
      de: "https://nescodigital.com/ge/blog/kosten-interner-spezialist-vs-agentur/",
      "x-default":
        "https://nescodigital.com/blog/cost-specialist-intern-vs-agentie/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

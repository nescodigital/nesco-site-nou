import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Was kostet ein interner Spezialist vs. eine Marketing-Agentur? | Nesco Digital",
    description:
      "Detaillierter Kostenvergleich: interner Marketing-Spezialist vs. Agentur. Gehalt, Steuern, Tools, Management — die echten Zahlen, die niemand zeigt.",
    path: "/ge/blog/kosten-interner-spezialist-vs-agentur/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/kosten-interner-spezialist-vs-agentur/",
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

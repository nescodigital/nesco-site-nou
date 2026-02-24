import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum sa-ti automatizezi marketingul: Ghid complet de tools | Nesco Digital",
    description:
      "Ce sa automatizezi la fiecare etapa a afacerii si ce tool-uri sa folosesti — de la email si chatbots la analytics si ad management.",
    path: "/blog/automatizare-marketing-ghid-tools/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/automatizare-marketing-ghid-tools/",
    languages: {
      ro: "https://nescodigital.com/blog/automatizare-marketing-ghid-tools/",
      en: "https://nescodigital.com/en/blog/marketing-automation-tools-guide/",
      de: "https://nescodigital.com/ge/blog/marketing-automatisierung-tools-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/automatizare-marketing-ghid-tools/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "WhatsApp Business fuer Vertrieb und Support nutzen | Nesco Digital",
    description:
      "Vollstaendiger Leitfaden zur WhatsApp Business API: Setup, Automatisierungs-Flows, Konversionsstrategien und Best Practices fuer Vertrieb und Kundensupport.",
    path: "/ge/blog/whatsapp-business-vertrieb-support/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/whatsapp-business-vertrieb-support/",
    languages: {
      ro: "https://nescodigital.com/blog/whatsapp-business-vanzari-suport/",
      en: "https://nescodigital.com/en/blog/whatsapp-business-sales-support/",
      de: "https://nescodigital.com/ge/blog/whatsapp-business-vertrieb-support/",
      "x-default":
        "https://nescodigital.com/blog/whatsapp-business-vanzari-suport/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

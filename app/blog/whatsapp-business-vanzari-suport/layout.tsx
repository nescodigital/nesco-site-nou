import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "WhatsApp Business: Ghid complet pentru vanzari si suport | Nesco Digital",
    description:
      "Ghid complet de WhatsApp Business API: setup, automatizari, flow-uri de conversie si cele mai bune practici pentru vanzari si suport clienti.",
    path: "/blog/whatsapp-business-vanzari-suport/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/whatsapp-business-vanzari-suport/",
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

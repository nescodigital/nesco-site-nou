import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How to Use WhatsApp Business for Sales and Support | Nesco Digital",
    description:
      "Complete guide to WhatsApp Business API: setup, automation flows, conversion strategies, and best practices for sales and customer support.",
    path: "/en/blog/whatsapp-business-sales-support/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/whatsapp-business-sales-support/",
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

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Webdesign Premium | Website Lead Generation, Shopify, WooCommerce | Nesco Digital",
  description: "Design și dezvoltare web premium: website-uri de lead generation, magazine online Shopify/WooCommerce, website-uri corporate și mentenanță. Performanță garantată.",
  path: "/webdesign/",
  routeKey: "webdesignHub",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

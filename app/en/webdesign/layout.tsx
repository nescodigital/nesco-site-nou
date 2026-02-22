import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Webdesign & Web Development | Premium Websites | Nesco Digital",
  description: "Strategically built websites, not just beautiful ones. Lead generation, e-commerce stores, company websites. Performance guaranteed.",
  path: "/en/webdesign/",
  routeKey: "webdesignHub",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

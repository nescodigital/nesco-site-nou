import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Webdesign & Webentwicklung | Premium-Websites | Nesco Digital",
  description: "Strategisch entwickelte Websites, nicht nur schöne. Lead-Generation, Online-Shops, Unternehmenswebsites. Leistung garantiert.",
  path: "/ge/webdesign/",
  routeKey: "webdesignHub",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

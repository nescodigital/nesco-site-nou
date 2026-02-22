import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Cu cine nu lucr\u0103m | Nesco Digital",
  description: "Suntem sinceri de la \u00eenceput. Nu suntem potrivi\u021bi pentru oricine \u2014 \u0219i asta e un lucru bun.",
  path: "/cu-cine-nu-lucram/",
  routeKey: "whoWeDontWorkWith",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

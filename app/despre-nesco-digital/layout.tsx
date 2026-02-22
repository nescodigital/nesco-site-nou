import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Despre Nesco Digital | Partener Premium de Marketing Digital",
  description: "15+ ani de experiență în marketing digital. Partener premium de execuție pentru afaceri care vor să crească.",
  path: "/despre-nesco-digital/",
  routeKey: "about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

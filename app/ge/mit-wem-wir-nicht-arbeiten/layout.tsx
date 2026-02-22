import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Mit wem wir nicht arbeiten | Nesco Digital",
  description: "Wir sind von Anfang an ehrlich. Wir passen nicht zu jedem — und das ist gut so.",
  path: "/ge/mit-wem-wir-nicht-arbeiten/",
  routeKey: "whoWeDontWorkWith",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

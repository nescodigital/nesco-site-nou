import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Who We Don't Work With | Nesco Digital",
  description: "We're honest from the start. We're not the right fit for everyone — and that's a good thing.",
  path: "/en/who-we-dont-work-with/",
  routeKey: "whoWeDontWorkWith",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

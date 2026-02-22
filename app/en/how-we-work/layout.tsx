import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "How We Work | The Nesco Digital Process",
  description: "What happens after you contact us. Our step-by-step process — from the first call to scaling.",
  path: "/en/how-we-work/",
  routeKey: "howWeWork",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

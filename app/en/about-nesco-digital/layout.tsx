import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "About Nesco Digital | Premium Digital Marketing Partner",
  description: "15+ years of digital marketing expertise. Premium execution partner for businesses that want to grow, from strategy to campaigns that generate real revenue.",
  path: "/en/about-nesco-digital/",
  routeKey: "about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Wie wir arbeiten | Der Nesco Digital Prozess",
  description: "Was passiert, nachdem Sie uns kontaktieren. Unser Schritt-für-Schritt-Prozess — vom ersten Anruf bis zur Skalierung.",
  path: "/ge/wie-wir-arbeiten/",
  routeKey: "howWeWork",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

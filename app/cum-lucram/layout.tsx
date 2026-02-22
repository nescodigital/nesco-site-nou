import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Cum Lucr\u0103m | Procesul Nesco Digital",
  description: "Ce se \u00eent\u00e2mpl\u0103 dup\u0103 ce ne contactezi. Procesul nostru de lucru pas cu pas \u2014 de la primul apel p\u00e2n\u0103 la scalare.",
  path: "/cum-lucram/",
  routeKey: "howWeWork",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

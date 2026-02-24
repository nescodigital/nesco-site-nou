import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cele mai bune platforme de email marketing in 2026 | Nesco Digital",
    description:
      "Comparatie detaliata intre cele mai populare platforme de email marketing: functionalitati, preturi si pentru cine sunt potrivite.",
    path: "/blog/cele-mai-bune-platforme-email-marketing/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/cele-mai-bune-platforme-email-marketing/",
    languages: {
      ro: "https://nescodigital.com/blog/cele-mai-bune-platforme-email-marketing/",
      en: "https://nescodigital.com/en/blog/best-email-marketing-platforms/",
      de: "https://nescodigital.com/ge/blog/beste-email-marketing-plattformen/",
      "x-default":
        "https://nescodigital.com/blog/cele-mai-bune-platforme-email-marketing/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

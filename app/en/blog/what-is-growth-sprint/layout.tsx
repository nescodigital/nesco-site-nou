import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "What Is a Growth Sprint and How It Accelerates Growth | Nesco Digital",
    description:
      "Discover the Growth Sprint model: 6 intensive weeks of audit, strategy, execution and optimization. Learn how to compress months of work into a focused sprint with real results.",
    path: "/en/blog/what-is-growth-sprint/",
  }),
  alternates: {
    canonical: "https://nescodigital.com/en/blog/what-is-growth-sprint/",
    languages: {
      ro: "https://nescodigital.com/blog/ce-este-growth-sprint/",
      en: "https://nescodigital.com/en/blog/what-is-growth-sprint/",
      de: "https://nescodigital.com/ge/blog/was-ist-growth-sprint/",
      "x-default": "https://nescodigital.com/blog/ce-este-growth-sprint/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

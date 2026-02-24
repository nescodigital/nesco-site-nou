import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Why Your Digital Marketing Isn't Working | Nesco Digital",
    description:
      "10 real reasons why digital marketing campaigns fail and how to diagnose and fix each one. A complete guide with practical solutions for every business.",
    path: "/en/blog/why-digital-marketing-not-working/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/why-digital-marketing-not-working/",
    languages: {
      ro: "https://nescodigital.com/blog/de-ce-nu-functioneaza-marketingul/",
      en: "https://nescodigital.com/en/blog/why-digital-marketing-not-working/",
      de: "https://nescodigital.com/ge/blog/warum-digitales-marketing-nicht-funktioniert/",
      "x-default":
        "https://nescodigital.com/blog/de-ce-nu-functioneaza-marketingul/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

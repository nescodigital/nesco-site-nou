import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Marketing automatisieren: Kompletter Tools-Leitfaden | Nesco Digital",
    description:
      "Was Sie in jeder Unternehmensphase automatisieren sollten und welche Tools Sie nutzen — von E-Mail und Chatbots bis Analytics und Ad Management.",
    path: "/ge/blog/marketing-automatisierung-tools-leitfaden/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/marketing-automatisierung-tools-leitfaden/",
    languages: {
      ro: "https://nescodigital.com/blog/automatizare-marketing-ghid-tools/",
      en: "https://nescodigital.com/en/blog/marketing-automation-tools-guide/",
      de: "https://nescodigital.com/ge/blog/marketing-automatisierung-tools-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/automatizare-marketing-ghid-tools/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

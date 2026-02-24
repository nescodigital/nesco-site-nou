import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Email Marketing for Ecommerce: How to Boost Sales with Newsletters | Nesco Digital",
    description:
      "Complete email marketing guide for online stores: the 7 essential emails, segmentation, A/B testing, and recommended tools. ROI of $36-42 per $1 spent.",
    path: "/en/blog/email-marketing-ecommerce/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/email-marketing-ecommerce/",
    languages: {
      ro: "https://nescodigital.com/blog/email-marketing-ecommerce/",
      en: "https://nescodigital.com/en/blog/email-marketing-ecommerce/",
      de: "https://nescodigital.com/ge/blog/email-marketing-ecommerce/",
      "x-default":
        "https://nescodigital.com/blog/email-marketing-ecommerce/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

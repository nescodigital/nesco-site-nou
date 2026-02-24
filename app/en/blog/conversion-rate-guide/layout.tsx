import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Conversion Rate: What It Is, How to Calculate It, How to Improve It | Nesco Digital",
    description:
      "Complete CRO guide: conversion rate definition, calculation formula, industry benchmarks, and 12 tested techniques to improve it. Grow revenue without extra ad spend.",
    path: "/en/blog/conversion-rate-guide/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/conversion-rate-guide/",
    languages: {
      ro: "https://nescodigital.com/blog/rata-de-conversie-ghid/",
      en: "https://nescodigital.com/en/blog/conversion-rate-guide/",
      de: "https://nescodigital.com/ge/blog/conversion-rate-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/rata-de-conversie-ghid/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

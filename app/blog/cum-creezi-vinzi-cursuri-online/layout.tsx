import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum sa creezi si sa vinzi cursuri online in 2026 | Nesco Digital",
    description:
      "De la validarea ideii la lansare si marketing — ghid complet cu comparatie de platforme si strategii testate pentru crearea si vanzarea cursurilor online.",
    path: "/blog/cum-creezi-vinzi-cursuri-online/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/cum-creezi-vinzi-cursuri-online/",
    languages: {
      ro: "https://nescodigital.com/blog/cum-creezi-vinzi-cursuri-online/",
      en: "https://nescodigital.com/en/blog/how-to-create-sell-online-courses/",
      de: "https://nescodigital.com/ge/blog/online-kurse-erstellen-verkaufen/",
      "x-default":
        "https://nescodigital.com/blog/cum-creezi-vinzi-cursuri-online/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "De ce nu funcționează marketingul digital al afacerii tale | Nesco Digital",
    description:
      "10 motive reale pentru care campaniile de marketing digital eșuează și cum să diagnostichezi și rezolvi fiecare problemă. Ghid complet cu soluții practice.",
    path: "/blog/de-ce-nu-functioneaza-marketingul/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/de-ce-nu-functioneaza-marketingul/",
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

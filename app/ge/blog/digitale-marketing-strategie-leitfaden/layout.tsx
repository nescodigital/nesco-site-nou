import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/digitale-marketing-strategie-leitfaden/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Digitale Marketing-Strategie Schritt fur Schritt (Leitfaden 2026) | Nesco Digital",
    description:
      "Vollstandiger Leitfaden zum Aufbau einer digitalen Marketing-Strategie von Grund auf. Audit, SMART-Ziele, Buyer Personas, Kanalauswahl, Budgetverteilung und Ausfuhrungskalender.",
    path: PATH,
    ...(article && {
      image: article.image,
      article: {
        publishedTime: article.datePublished,
        authors: ["Nesco Digital Team"],
        section: article.section,
        tags: article.tags,
      },
    }),
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/ge/blog/digitale-marketing-strategie-leitfaden/",
    languages: {
      ro: "https://nescodigital.com/blog/strategie-marketing-digital-ghid/",
      en: "https://nescodigital.com/en/blog/digital-marketing-strategy-guide/",
      de: "https://nescodigital.com/ge/blog/digitale-marketing-strategie-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/strategie-marketing-digital-ghid/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogArticleSchema path={PATH} />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/retargeting-remarketing-leitfaden/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Retargeting und Remarketing: Wie man verlorene Kunden zuruckgewinnt | Nesco Digital",
    description:
      "Kompletter Retargeting- und Remarketing-Leitfaden — Strategien, Plattformen, Zielgruppensegmente und empfohlene Budgets. Gewinne Besucher zuruck, die ohne Kauf gegangen sind.",
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
      "https://nescodigital.com/ge/blog/retargeting-remarketing-leitfaden/",
    languages: {
      ro: "https://nescodigital.com/blog/retargeting-remarketing-ghid/",
      en: "https://nescodigital.com/en/blog/retargeting-remarketing-guide/",
      de: "https://nescodigital.com/ge/blog/retargeting-remarketing-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/retargeting-remarketing-ghid/",
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

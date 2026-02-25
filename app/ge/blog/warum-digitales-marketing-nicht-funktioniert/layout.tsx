import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/warum-digitales-marketing-nicht-funktioniert/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Warum dein digitales Marketing nicht funktioniert | Nesco Digital",
    description:
      "10 echte Gründe, warum digitale Marketingkampagnen scheitern, und wie du jedes Problem diagnostizierst und behebst. Ein vollständiger Leitfaden mit praktischen Lösungen.",
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
      "https://nescodigital.com/ge/blog/warum-digitales-marketing-nicht-funktioniert/",
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
  return (
    <>
      <BlogArticleSchema path={PATH} />
      {children}
    </>
  );
}

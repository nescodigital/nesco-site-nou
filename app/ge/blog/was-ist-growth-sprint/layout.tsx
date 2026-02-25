import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/was-ist-growth-sprint/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Was ist ein Growth Sprint und wie beschleunigt er das Wachstum | Nesco Digital",
    description:
      "Entdecke das Growth-Sprint-Modell: 6 intensive Wochen mit Audit, Strategie, Umsetzung und Optimierung. Erfahre, wie du Monate an Arbeit in einen fokussierten Sprint mit echten Ergebnissen komprimierst.",
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
    canonical: "https://nescodigital.com/ge/blog/was-ist-growth-sprint/",
    languages: {
      ro: "https://nescodigital.com/blog/ce-este-growth-sprint/",
      en: "https://nescodigital.com/en/blog/what-is-growth-sprint/",
      de: "https://nescodigital.com/ge/blog/was-ist-growth-sprint/",
      "x-default": "https://nescodigital.com/blog/ce-este-growth-sprint/",
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

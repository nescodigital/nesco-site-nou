import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/cele-mai-bune-landing-page-builders/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cele mai bune landing page builders pentru conversii mai mari | Nesco Digital",
    description:
      "Cand ai nevoie de un landing page builder, ce feature-uri conteaza si care sunt cele mai bune optiuni — cu comparatie detaliata si review-uri.",
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
      "https://nescodigital.com/blog/cele-mai-bune-landing-page-builders/",
    languages: {
      ro: "https://nescodigital.com/blog/cele-mai-bune-landing-page-builders/",
      en: "https://nescodigital.com/en/blog/best-landing-page-builders/",
      de: "https://nescodigital.com/ge/blog/beste-landing-page-builder/",
      "x-default":
        "https://nescodigital.com/blog/cele-mai-bune-landing-page-builders/",
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

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/beste-ki-tools-digitales-marketing/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Beste KI-Tools f\u00fcr digitales Marketing 2026 | Nesco Digital",
    description:
      "Von Anzeigenerstellung \u00fcber SEO bis Analytics \u2014 die besten KI-Tools nach Anwendungsfall organisiert, mit detaillierten Reviews und praktischen Vergleichen.",
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
      "https://nescodigital.com/ge/blog/beste-ki-tools-digitales-marketing/",
    languages: {
      ro: "https://nescodigital.com/blog/cele-mai-bune-tool-uri-ai-marketing/",
      en: "https://nescodigital.com/en/blog/best-ai-tools-digital-marketing/",
      de: "https://nescodigital.com/ge/blog/beste-ki-tools-digitales-marketing/",
      "x-default":
        "https://nescodigital.com/blog/cele-mai-bune-tool-uri-ai-marketing/",
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

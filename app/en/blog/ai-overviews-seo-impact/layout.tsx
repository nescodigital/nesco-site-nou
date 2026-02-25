import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/ai-overviews-seo-impact/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How AI Overviews Affect SEO and What You Should Do | Nesco Digital",
    description:
      "Google AI Overviews are changing SEO. Learn how they impact organic traffic, which query types are affected, and 6 strategies to adapt your SEO approach.",
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
      "https://nescodigital.com/en/blog/ai-overviews-seo-impact/",
    languages: {
      ro: "https://nescodigital.com/blog/ai-overviews-impact-seo/",
      en: "https://nescodigital.com/en/blog/ai-overviews-seo-impact/",
      de: "https://nescodigital.com/ge/blog/ai-overviews-seo-auswirkungen/",
      "x-default":
        "https://nescodigital.com/blog/ai-overviews-impact-seo/",
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

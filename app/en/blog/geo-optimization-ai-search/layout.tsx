import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/geo-optimization-ai-search/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How to Appear in ChatGPT and Google AI Overviews (GEO) | Nesco Digital",
    description:
      "Complete Generative Engine Optimization (GEO) guide: how to optimize your content to appear in ChatGPT, Google AI Overviews, and Perplexity results in 2026.",
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
      "https://nescodigital.com/en/blog/geo-optimization-ai-search/",
    languages: {
      ro: "https://nescodigital.com/blog/geo-optimizare-ai-search/",
      en: "https://nescodigital.com/en/blog/geo-optimization-ai-search/",
      de: "https://nescodigital.com/ge/blog/geo-optimierung-ai-search/",
      "x-default":
        "https://nescodigital.com/blog/geo-optimizare-ai-search/",
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

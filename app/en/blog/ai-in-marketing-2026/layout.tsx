import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/ai-in-marketing-2026/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How Companies Use AI in Marketing in 2026 | Nesco Digital",
    description:
      "Practical guide to using AI in marketing: real applications, tools, what works and what doesn't. Case studies and tested strategies in 2026.",
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
      "https://nescodigital.com/en/blog/ai-in-marketing-2026/",
    languages: {
      ro: "https://nescodigital.com/blog/ai-in-marketing-2026/",
      en: "https://nescodigital.com/en/blog/ai-in-marketing-2026/",
      de: "https://nescodigital.com/ge/blog/ki-im-marketing-2026/",
      "x-default":
        "https://nescodigital.com/blog/ai-in-marketing-2026/",
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

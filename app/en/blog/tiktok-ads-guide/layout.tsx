import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/tiktok-ads-guide/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How to Run TikTok Ads: Complete Guide for 2026 | Nesco Digital",
    description:
      "Complete TikTok Ads guide: ad formats, targeting, budgets, creative best practices and step-by-step setup. CPMs 40-60% lower than Meta.",
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
      "https://nescodigital.com/en/blog/tiktok-ads-guide/",
    languages: {
      ro: "https://nescodigital.com/blog/reclame-tiktok-romania/",
      en: "https://nescodigital.com/en/blog/tiktok-ads-guide/",
      de: "https://nescodigital.com/ge/blog/tiktok-ads-anleitung/",
      "x-default":
        "https://nescodigital.com/blog/reclame-tiktok-romania/",
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

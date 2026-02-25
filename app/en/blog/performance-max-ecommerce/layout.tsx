import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/performance-max-ecommerce/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Performance Max 2026: Complete Guide for Online Stores | Nesco Digital",
    description:
      "Complete Performance Max guide for e-commerce: step-by-step setup, common mistakes, PMax vs Shopping vs Search. Everything about Google AI campaigns for online stores.",
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
      "https://nescodigital.com/en/blog/performance-max-ecommerce/",
    languages: {
      ro: "https://nescodigital.com/blog/performance-max-ecommerce/",
      en: "https://nescodigital.com/en/blog/performance-max-ecommerce/",
      de: "https://nescodigital.com/ge/blog/performance-max-ecommerce/",
      "x-default":
        "https://nescodigital.com/blog/performance-max-ecommerce/",
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

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/cart-abandonment-fix/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Why Customers Abandon Their Cart (And How to Fix It) | Nesco Digital",
    description:
      "The average cart abandonment rate is 70%. Discover 8 proven strategies to recover lost e-commerce revenue: email flows, exit-intent popups, retargeting, and more.",
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
    canonical: "https://nescodigital.com/en/blog/cart-abandonment-fix/",
    languages: {
      ro: "https://nescodigital.com/blog/abandon-cos-cumparaturi/",
      en: "https://nescodigital.com/en/blog/cart-abandonment-fix/",
      de: "https://nescodigital.com/ge/blog/warenkorbabbruch-beheben/",
      "x-default":
        "https://nescodigital.com/blog/abandon-cos-cumparaturi/",
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

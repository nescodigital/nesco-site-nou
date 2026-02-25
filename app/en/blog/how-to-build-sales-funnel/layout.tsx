import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/how-to-build-sales-funnel/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title: "How to Build a Complete Sales Funnel | Nesco Digital",
    description:
      "Step-by-step guide to building an effective sales funnel — from TOFU to BOFU — with recommended tools at every stage.",
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
      "https://nescodigital.com/en/blog/how-to-build-sales-funnel/",
    languages: {
      ro: "https://nescodigital.com/blog/cum-construiesti-funnel-vanzari/",
      en: "https://nescodigital.com/en/blog/how-to-build-sales-funnel/",
      de: "https://nescodigital.com/ge/blog/sales-funnel-aufbauen-anleitung/",
      "x-default":
        "https://nescodigital.com/blog/cum-construiesti-funnel-vanzari/",
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

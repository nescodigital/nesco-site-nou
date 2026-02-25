import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/marketing-automation-tools-guide/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How to Automate Your Marketing: Complete Tools Guide | Nesco Digital",
    description:
      "What to automate at each business stage and which tools to use — from email and chatbots to analytics and ad management.",
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
      "https://nescodigital.com/en/blog/marketing-automation-tools-guide/",
    languages: {
      ro: "https://nescodigital.com/blog/automatizare-marketing-ghid-tools/",
      en: "https://nescodigital.com/en/blog/marketing-automation-tools-guide/",
      de: "https://nescodigital.com/ge/blog/marketing-automatisierung-tools-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/automatizare-marketing-ghid-tools/",
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

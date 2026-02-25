import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/retargeting-remarketing-guide/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Retargeting and Remarketing: How to Win Back Lost Customers | Nesco Digital",
    description:
      "Complete retargeting and remarketing guide — strategies, platforms, audience segments and recommended budgets. Win back visitors who left without buying.",
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
      "https://nescodigital.com/en/blog/retargeting-remarketing-guide/",
    languages: {
      ro: "https://nescodigital.com/blog/retargeting-remarketing-ghid/",
      en: "https://nescodigital.com/en/blog/retargeting-remarketing-guide/",
      de: "https://nescodigital.com/ge/blog/retargeting-remarketing-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/retargeting-remarketing-ghid/",
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

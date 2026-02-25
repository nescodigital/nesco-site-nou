import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/increase-online-store-sales/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "15 Proven Strategies to Increase Online Store Sales | Nesco Digital",
    description:
      "Discover 15 tested strategies to grow e-commerce revenue: Google Shopping, retargeting, product page optimization, email flows, loyalty programs and more.",
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
      "https://nescodigital.com/en/blog/increase-online-store-sales/",
    languages: {
      ro: "https://nescodigital.com/blog/creste-vanzari-magazin-online/",
      en: "https://nescodigital.com/en/blog/increase-online-store-sales/",
      de: "https://nescodigital.com/ge/blog/online-shop-umsatz-steigern/",
      "x-default":
        "https://nescodigital.com/blog/creste-vanzari-magazin-online/",
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

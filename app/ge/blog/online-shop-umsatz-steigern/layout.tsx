import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/online-shop-umsatz-steigern/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "15 bewährte Strategien zur Umsatzsteigerung im Online-Shop | Nesco Digital",
    description:
      "Entdecke 15 getestete Strategien zur Umsatzsteigerung im E-Commerce: Google Shopping, Retargeting, Produktseitenoptimierung, E-Mail-Flows, Treueprogramme und mehr.",
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
      "https://nescodigital.com/ge/blog/online-shop-umsatz-steigern/",
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

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/creste-vanzari-magazin-online/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "15 strategii testate sa cresti vanzarile in magazinul online | Nesco Digital",
    description:
      "Descopera 15 strategii dovedite de crestere a vanzarilor in e-commerce: Google Shopping, retargeting, optimizare pagini produs, email flows, loyalty programs si mai mult.",
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
      "https://nescodigital.com/blog/creste-vanzari-magazin-online/",
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

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/online-kurse-erstellen-verkaufen/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Online-Kurse erstellen und verkaufen in 2026 | Nesco Digital",
    description:
      "Von der Ideenvalidierung bis zum Launch und Marketing — vollstandiger Leitfaden mit Plattformvergleich und bewahrten Strategien fur die Erstellung und den Verkauf von Online-Kursen.",
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
      "https://nescodigital.com/ge/blog/online-kurse-erstellen-verkaufen/",
    languages: {
      ro: "https://nescodigital.com/blog/cum-creezi-vinzi-cursuri-online/",
      en: "https://nescodigital.com/en/blog/how-to-create-sell-online-courses/",
      de: "https://nescodigital.com/ge/blog/online-kurse-erstellen-verkaufen/",
      "x-default":
        "https://nescodigital.com/blog/cum-creezi-vinzi-cursuri-online/",
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

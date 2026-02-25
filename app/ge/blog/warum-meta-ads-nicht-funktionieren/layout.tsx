import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/warum-meta-ads-nicht-funktionieren/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Warum funktionieren deine Meta Ads nicht? 7 häufige Fehler | Nesco Digital",
    description:
      "Entdecke die 7 häufigsten Fehler bei Facebook- und Instagram-Kampagnen und wie du sie behebst. Praktischer Guide vom Nesco Digital Team.",
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
      "https://nescodigital.com/ge/blog/warum-meta-ads-nicht-funktionieren/",
    languages: {
      ro: "https://nescodigital.com/blog/de-ce-nu-merg-reclamele-meta/",
      en: "https://nescodigital.com/en/blog/why-meta-ads-dont-work/",
      de: "https://nescodigital.com/ge/blog/warum-meta-ads-nicht-funktionieren/",
      "x-default":
        "https://nescodigital.com/blog/de-ce-nu-merg-reclamele-meta/",
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

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/de-ce-nu-merg-reclamele-meta/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "De Ce Nu-ti Merg Reclamele pe Meta? 7 Greseli Frecvente | Nesco Digital",
    description:
      "Daca arunci bani pe Facebook si Instagram Ads fara rezultate, problema nu e platforma. Descopera cele 7 greseli care iti saboteaza campaniile Meta.",
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
      "https://nescodigital.com/blog/de-ce-nu-merg-reclamele-meta/",
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

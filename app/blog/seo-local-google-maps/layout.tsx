import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/seo-local-google-maps/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "SEO local: Cum să apari primul pe Google în orașul tău | Nesco Digital",
    description:
      "Ghid complet de SEO local: Google Business Profile, recenzii, citări locale și strategii pentru a domina rezultatele Google Maps în orașul tău.",
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
      "https://nescodigital.com/blog/seo-local-google-maps/",
    languages: {
      ro: "https://nescodigital.com/blog/seo-local-google-maps/",
      en: "https://nescodigital.com/en/blog/local-seo-google-maps/",
      de: "https://nescodigital.com/ge/blog/lokales-seo-google-maps/",
      "x-default":
        "https://nescodigital.com/blog/seo-local-google-maps/",
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

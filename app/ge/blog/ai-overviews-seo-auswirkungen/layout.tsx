import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/ai-overviews-seo-auswirkungen/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Wie AI Overviews SEO beeinflussen und was du tun solltest | Nesco Digital",
    description:
      "Google AI Overviews verandern die SEO-Landschaft. Erfahre, wie sie den organischen Traffic beeinflussen und welche 6 Strategien du jetzt umsetzen solltest.",
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
      "https://nescodigital.com/ge/blog/ai-overviews-seo-auswirkungen/",
    languages: {
      ro: "https://nescodigital.com/blog/ai-overviews-impact-seo/",
      en: "https://nescodigital.com/en/blog/ai-overviews-seo-impact/",
      de: "https://nescodigital.com/ge/blog/ai-overviews-seo-auswirkungen/",
      "x-default":
        "https://nescodigital.com/blog/ai-overviews-impact-seo/",
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

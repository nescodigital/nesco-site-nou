import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/seo-vs-google-ads/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "SEO vs. Google Ads: Ce Alegi Cand Ai Buget Limitat? | Nesco Digital",
    description:
      "Trafic organic sau platit? Analizam costurile, timeline-ul si ROI-ul fiecarei strategii ca sa iei decizia corecta pentru afacerea ta.",
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
    canonical: "https://nescodigital.com/blog/seo-vs-google-ads/",
    languages: {
      ro: "https://nescodigital.com/blog/seo-vs-google-ads/",
      en: "https://nescodigital.com/en/blog/seo-vs-google-ads/",
      de: "https://nescodigital.com/ge/blog/seo-vs-google-ads/",
      "x-default": "https://nescodigital.com/blog/seo-vs-google-ads/",
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

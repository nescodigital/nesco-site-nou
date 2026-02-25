import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/cat-costa-google-ads-romania/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cât costă Google Ads în România? Ghid de bugete 2026 | Nesco Digital",
    description:
      "Afla cat costa Google Ads in Romania in 2026. CPC mediu pe industrii, bugete recomandate pe tip de campanie si cum sa calculezi ROI-ul corect.",
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
      "https://nescodigital.com/blog/cat-costa-google-ads-romania/",
    languages: {
      ro: "https://nescodigital.com/blog/cat-costa-google-ads-romania/",
      en: "https://nescodigital.com/en/blog/how-much-does-google-ads-cost/",
      de: "https://nescodigital.com/ge/blog/was-kostet-google-ads/",
      "x-default":
        "https://nescodigital.com/blog/cat-costa-google-ads-romania/",
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

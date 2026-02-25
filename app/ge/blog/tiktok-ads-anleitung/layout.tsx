import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/tiktok-ads-anleitung/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "TikTok Ads schalten: Vollstandiger Leitfaden fur 2026 | Nesco Digital",
    description:
      "Vollstandiger TikTok Ads Leitfaden: Anzeigenformate, Targeting, Budgets, kreative Best Practices und Schritt-fur-Schritt-Setup. CPMs 40-60% gunstiger als Meta.",
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
      "https://nescodigital.com/ge/blog/tiktok-ads-anleitung/",
    languages: {
      ro: "https://nescodigital.com/blog/reclame-tiktok-romania/",
      en: "https://nescodigital.com/en/blog/tiktok-ads-guide/",
      de: "https://nescodigital.com/ge/blog/tiktok-ads-anleitung/",
      "x-default":
        "https://nescodigital.com/blog/reclame-tiktok-romania/",
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

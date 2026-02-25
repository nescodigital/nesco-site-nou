import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/best-email-marketing-platforms/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title: "Best Email Marketing Platforms in 2026 | Nesco Digital",
    description:
      "Detailed comparison of the most popular email marketing platforms: features, pricing, and who they are best suited for.",
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
      "https://nescodigital.com/en/blog/best-email-marketing-platforms/",
    languages: {
      ro: "https://nescodigital.com/blog/cele-mai-bune-platforme-email-marketing/",
      en: "https://nescodigital.com/en/blog/best-email-marketing-platforms/",
      de: "https://nescodigital.com/ge/blog/beste-email-marketing-plattformen/",
      "x-default":
        "https://nescodigital.com/blog/cele-mai-bune-platforme-email-marketing/",
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

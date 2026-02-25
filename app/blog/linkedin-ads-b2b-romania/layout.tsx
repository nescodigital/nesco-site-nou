import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/linkedin-ads-b2b-romania/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "LinkedIn Ads pentru B2B in Romania: Merita investitia? | Nesco Digital",
    description:
      "LinkedIn Ads pentru companii B2B — targetare avansata, formate de anunturi, bugete realiste si rezultate concrete. Afla cand merita si cand nu.",
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
      "https://nescodigital.com/blog/linkedin-ads-b2b-romania/",
    languages: {
      ro: "https://nescodigital.com/blog/linkedin-ads-b2b-romania/",
      en: "https://nescodigital.com/en/blog/linkedin-ads-b2b/",
      de: "https://nescodigital.com/ge/blog/linkedin-ads-b2b/",
      "x-default":
        "https://nescodigital.com/blog/linkedin-ads-b2b-romania/",
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

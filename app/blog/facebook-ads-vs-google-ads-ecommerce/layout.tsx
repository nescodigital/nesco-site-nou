import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/facebook-ads-vs-google-ads-ecommerce/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Facebook Ads vs Google Ads: Ce alegi pentru magazinul online? | Nesco Digital",
    description:
      "Comparatie completa Facebook Ads vs Google Ads pentru e-commerce. CPC, ROAS, targeting, formate — afla cand sa folosesti fiecare platforma si cum sa le combini.",
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
      "https://nescodigital.com/blog/facebook-ads-vs-google-ads-ecommerce/",
    languages: {
      ro: "https://nescodigital.com/blog/facebook-ads-vs-google-ads-ecommerce/",
      en: "https://nescodigital.com/en/blog/facebook-ads-vs-google-ads-ecommerce/",
      de: "https://nescodigital.com/ge/blog/facebook-ads-vs-google-ads-ecommerce/",
      "x-default":
        "https://nescodigital.com/blog/facebook-ads-vs-google-ads-ecommerce/",
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

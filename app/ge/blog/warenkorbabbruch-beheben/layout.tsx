import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/warenkorbabbruch-beheben/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Warum Kunden den Warenkorb verlassen (und wie man es behebt) | Nesco Digital",
    description:
      "Die durchschnittliche Warenkorbabbruchrate liegt bei 70%. Entdecken Sie 8 bewährte Strategien zur Rückgewinnung verlorener E-Commerce-Umsätze: E-Mail-Flows, Exit-Intent, Retargeting und mehr.",
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
      "https://nescodigital.com/ge/blog/warenkorbabbruch-beheben/",
    languages: {
      ro: "https://nescodigital.com/blog/abandon-cos-cumparaturi/",
      en: "https://nescodigital.com/en/blog/cart-abandonment-fix/",
      de: "https://nescodigital.com/ge/blog/warenkorbabbruch-beheben/",
      "x-default":
        "https://nescodigital.com/blog/abandon-cos-cumparaturi/",
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

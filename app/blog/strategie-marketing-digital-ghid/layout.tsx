import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/strategie-marketing-digital-ghid/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Strategie de Marketing Digital Pas cu Pas (Ghid 2026) | Nesco Digital",
    description:
      "Ghid complet pentru construirea unei strategii de marketing digital de la zero. Audit, obiective SMART, buyer personas, canale, buget si calendar de executie.",
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
      "https://nescodigital.com/blog/strategie-marketing-digital-ghid/",
    languages: {
      ro: "https://nescodigital.com/blog/strategie-marketing-digital-ghid/",
      en: "https://nescodigital.com/en/blog/digital-marketing-strategy-guide/",
      de: "https://nescodigital.com/ge/blog/digitale-marketing-strategie-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/strategie-marketing-digital-ghid/",
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

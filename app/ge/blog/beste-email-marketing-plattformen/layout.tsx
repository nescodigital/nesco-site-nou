import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/beste-email-marketing-plattformen/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Die besten E-Mail-Marketing-Plattformen 2026 | Nesco Digital",
    description:
      "Detaillierter Vergleich der beliebtesten E-Mail-Marketing-Plattformen: Funktionen, Preise und f\u00FCr wen sie am besten geeignet sind.",
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
      "https://nescodigital.com/ge/blog/beste-email-marketing-plattformen/",
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

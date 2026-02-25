import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/de-ce-nu-functioneaza-marketingul/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "De ce nu funcționează marketingul digital al afacerii tale | Nesco Digital",
    description:
      "10 motive reale pentru care campaniile de marketing digital eșuează și cum să diagnostichezi și rezolvi fiecare problemă. Ghid complet cu soluții practice.",
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
      "https://nescodigital.com/blog/de-ce-nu-functioneaza-marketingul/",
    languages: {
      ro: "https://nescodigital.com/blog/de-ce-nu-functioneaza-marketingul/",
      en: "https://nescodigital.com/en/blog/why-digital-marketing-not-working/",
      de: "https://nescodigital.com/ge/blog/warum-digitales-marketing-nicht-funktioniert/",
      "x-default":
        "https://nescodigital.com/blog/de-ce-nu-functioneaza-marketingul/",
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

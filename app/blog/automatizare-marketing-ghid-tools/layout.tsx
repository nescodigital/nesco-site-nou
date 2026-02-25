import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/automatizare-marketing-ghid-tools/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum sa-ti automatizezi marketingul: Ghid complet de tools | Nesco Digital",
    description:
      "Ce sa automatizezi la fiecare etapa a afacerii si ce tool-uri sa folosesti — de la email si chatbots la analytics si ad management.",
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
      "https://nescodigital.com/blog/automatizare-marketing-ghid-tools/",
    languages: {
      ro: "https://nescodigital.com/blog/automatizare-marketing-ghid-tools/",
      en: "https://nescodigital.com/en/blog/marketing-automation-tools-guide/",
      de: "https://nescodigital.com/ge/blog/marketing-automatisierung-tools-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/automatizare-marketing-ghid-tools/",
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

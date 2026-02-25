import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/cost-specialist-intern-vs-agentie/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cat Costa un Specialist Intern vs. o Agentie de Marketing? | Nesco Digital",
    description:
      "Comparatie detaliata de costuri: specialist intern vs. agentie de marketing digital. Salariu, taxe, tools, management — cifrele reale pe care nimeni nu ti le arata.",
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
      "https://nescodigital.com/blog/cost-specialist-intern-vs-agentie/",
    languages: {
      ro: "https://nescodigital.com/blog/cost-specialist-intern-vs-agentie/",
      en: "https://nescodigital.com/en/blog/cost-internal-specialist-vs-agency/",
      de: "https://nescodigital.com/ge/blog/kosten-interner-spezialist-vs-agentur/",
      "x-default":
        "https://nescodigital.com/blog/cost-specialist-intern-vs-agentie/",
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

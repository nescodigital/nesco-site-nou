import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/en/blog/cost-internal-specialist-vs-agency/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "How Much Does an In-House Specialist Cost vs. a Marketing Agency? | Nesco Digital",
    description:
      "Detailed cost comparison: in-house marketing specialist vs. digital marketing agency. Salary, taxes, tools, management — the real numbers nobody shows you.",
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
      "https://nescodigital.com/en/blog/cost-internal-specialist-vs-agency/",
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

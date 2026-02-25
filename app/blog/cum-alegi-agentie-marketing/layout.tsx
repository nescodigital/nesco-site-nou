import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/cum-alegi-agentie-marketing/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum sa alegi agentia de marketing potrivita: Checklist 10 pasi | Nesco Digital",
    description:
      "Checklist complet in 10 pasi pentru a evalua si alege agentia de marketing digital potrivita. Portofoliu, transparenta, pricing, red flags si cum sa testezi inainte de a semna.",
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
      "https://nescodigital.com/blog/cum-alegi-agentie-marketing/",
    languages: {
      ro: "https://nescodigital.com/blog/cum-alegi-agentie-marketing/",
      en: "https://nescodigital.com/en/blog/how-to-choose-marketing-agency/",
      de: "https://nescodigital.com/ge/blog/wie-marketing-agentur-waehlen/",
      "x-default":
        "https://nescodigital.com/blog/cum-alegi-agentie-marketing/",
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

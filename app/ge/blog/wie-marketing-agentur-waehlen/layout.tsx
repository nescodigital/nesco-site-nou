import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/wie-marketing-agentur-waehlen/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Wie man die richtige Marketing-Agentur wählt: 10-Schritte-Checkliste | Nesco Digital",
    description:
      "Komplette 10-Schritte-Checkliste zur Bewertung und Auswahl der richtigen Marketing-Agentur. Portfolio, Transparenz, Pricing, Red Flags und wie man vor Vertragsabschluss testet.",
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
      "https://nescodigital.com/ge/blog/wie-marketing-agentur-waehlen/",
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

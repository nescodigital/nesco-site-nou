import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/cum-alegi-crm/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cum sa alegi si sa implementezi un CRM in 2026 | Nesco Digital",
    description:
      "Ghid complet pentru alegerea si implementarea unui CRM: comparatie HubSpot, Salesforce, Pipedrive, Monday, Zoho. Criterii de selectie, pasi de implementare si greseli frecvente.",
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
    canonical: "https://nescodigital.com/blog/cum-alegi-crm/",
    languages: {
      ro: "https://nescodigital.com/blog/cum-alegi-crm/",
      en: "https://nescodigital.com/en/blog/how-to-choose-crm/",
      de: "https://nescodigital.com/ge/blog/wie-crm-waehlen/",
      "x-default": "https://nescodigital.com/blog/cum-alegi-crm/",
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

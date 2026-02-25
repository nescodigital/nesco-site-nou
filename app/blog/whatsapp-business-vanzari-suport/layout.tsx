import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/whatsapp-business-vanzari-suport/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "WhatsApp Business: Ghid complet pentru vanzari si suport | Nesco Digital",
    description:
      "Ghid complet de WhatsApp Business API: setup, automatizari, flow-uri de conversie si cele mai bune practici pentru vanzari si suport clienti.",
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
      "https://nescodigital.com/blog/whatsapp-business-vanzari-suport/",
    languages: {
      ro: "https://nescodigital.com/blog/whatsapp-business-vanzari-suport/",
      en: "https://nescodigital.com/en/blog/whatsapp-business-sales-support/",
      de: "https://nescodigital.com/ge/blog/whatsapp-business-vertrieb-support/",
      "x-default":
        "https://nescodigital.com/blog/whatsapp-business-vanzari-suport/",
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

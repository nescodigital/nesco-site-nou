import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/email-marketing-ecommerce/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Email Marketing pentru Ecommerce: Cum Cresti Vanzarile cu Newslettere | Nesco Digital",
    description:
      "Ghid complet de email marketing pentru magazine online: cele 7 emailuri esentiale, segmentare, A/B testing si tool-uri recomandate. ROI de 36-42x per $1 investit.",
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
      "https://nescodigital.com/blog/email-marketing-ecommerce/",
    languages: {
      ro: "https://nescodigital.com/blog/email-marketing-ecommerce/",
      en: "https://nescodigital.com/en/blog/email-marketing-ecommerce/",
      de: "https://nescodigital.com/ge/blog/email-marketing-ecommerce/",
      "x-default":
        "https://nescodigital.com/blog/email-marketing-ecommerce/",
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

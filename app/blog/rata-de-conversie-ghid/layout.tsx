import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/blog/rata-de-conversie-ghid/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Rata de conversie: Ce este, cum o calculezi, cum o cresti | Nesco Digital",
    description:
      "Ghid complet CRO: definitia ratei de conversie, formula de calcul, benchmark-uri pe industrii si 12 tehnici testate pentru a o imbunatati. Creste vanzarile fara buget suplimentar.",
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
      "https://nescodigital.com/blog/rata-de-conversie-ghid/",
    languages: {
      ro: "https://nescodigital.com/blog/rata-de-conversie-ghid/",
      en: "https://nescodigital.com/en/blog/conversion-rate-guide/",
      de: "https://nescodigital.com/ge/blog/conversion-rate-leitfaden/",
      "x-default":
        "https://nescodigital.com/blog/rata-de-conversie-ghid/",
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

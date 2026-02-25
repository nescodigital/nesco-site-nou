import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/conversion-rate-leitfaden/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Conversion Rate: Was sie ist, wie man sie berechnet und verbessert | Nesco Digital",
    description:
      "Kompletter CRO-Leitfaden: Definition der Conversion Rate, Berechnungsformel, Branchen-Benchmarks und 12 getestete Techniken zur Verbesserung. Mehr Umsatz ohne zusatzliches Werbebudget.",
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
      "https://nescodigital.com/ge/blog/conversion-rate-leitfaden/",
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

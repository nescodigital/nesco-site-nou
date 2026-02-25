import { getArticleByPath } from "@/lib/blogArticles";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/seo";

const BASE_URL = "https://nescodigital.com";

export function BlogArticleSchema({ path }: { path: string }) {
  const article = getArticleByPath(path);
  if (!article) return null;

  const url = `${BASE_URL}${article.path}`;

  const blogLabel =
    article.locale === "ro" ? "Blog" : article.locale === "en" ? "Blog" : "Blog";
  const homeLabel =
    article.locale === "ro"
      ? "Acasă"
      : article.locale === "en"
        ? "Home"
        : "Startseite";
  const homeUrl =
    article.locale === "ro"
      ? BASE_URL
      : `${BASE_URL}/${article.locale === "en" ? "en" : "ge"}`;
  const blogUrl =
    article.locale === "ro"
      ? `${BASE_URL}/blog/`
      : `${BASE_URL}/${article.locale === "en" ? "en" : "ge"}/blog/`;

  const articleSchema = buildArticleSchema({
    headline: article.title.replace(" | Nesco Digital", ""),
    description: article.description,
    url,
    image: article.image,
    datePublished: article.datePublished,
    section: article.section,
    tags: article.tags,
    locale: article.locale,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: homeLabel, url: homeUrl },
    { name: blogLabel, url: blogUrl },
    { name: article.title.replace(" | Nesco Digital", ""), url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

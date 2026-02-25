import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { getArticleByPath } from "@/lib/blogArticles";

const PATH = "/ge/blog/beste-chatbot-live-chat-tools/";
const article = getArticleByPath(PATH);

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "de",
    title:
      "Beste Chatbot- und Live-Chat-Tools fuer Websites | Nesco Digital",
    description:
      "Vollstaendiger Leitfaden mit Vergleich: Wann einen Chatbot nutzen, wann Live-Chat, und die besten Tools fuer jedes Szenario.",
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
      "https://nescodigital.com/ge/blog/beste-chatbot-live-chat-tools/",
    languages: {
      ro: "https://nescodigital.com/blog/cele-mai-bune-chatbot-live-chat/",
      en: "https://nescodigital.com/en/blog/best-chatbot-live-chat-tools/",
      de: "https://nescodigital.com/ge/blog/beste-chatbot-live-chat-tools/",
      "x-default":
        "https://nescodigital.com/blog/cele-mai-bune-chatbot-live-chat/",
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

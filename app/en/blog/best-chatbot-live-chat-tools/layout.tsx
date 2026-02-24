import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "en",
    title:
      "Best Chatbot and Live Chat Tools for Websites | Nesco Digital",
    description:
      "Complete guide with comparison: when to use a chatbot, when to use live chat, and the best tools for each scenario.",
    path: "/en/blog/best-chatbot-live-chat-tools/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/en/blog/best-chatbot-live-chat-tools/",
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
  return <>{children}</>;
}

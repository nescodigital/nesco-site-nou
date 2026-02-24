import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    locale: "ro",
    title:
      "Cele mai bune chatbot-uri si tool-uri de live chat | Nesco Digital",
    description:
      "Ghid complet cu comparatie: cand sa folosesti chatbot, cand live chat si care sunt cele mai bune tool-uri pentru fiecare scenariu.",
    path: "/blog/cele-mai-bune-chatbot-live-chat/",
  }),
  alternates: {
    canonical:
      "https://nescodigital.com/blog/cele-mai-bune-chatbot-live-chat/",
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

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalculatorClient } from "./CalculatorClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Calculator Cost Marketing Intern vs Agenție | Nesco Digital",
  description:
    "Calculează cât costă cu adevărat un specialist intern față de o agenție de marketing. Comparație completă cu toate costurile ascunse.",
  path: "/calculator/",
  routeKey: "calculator",
});

export default function CalculatorPage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        <CalculatorClient />
      </main>
      <Footer locale="ro" />
    </>
  );
}

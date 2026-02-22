import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalculatorClientDE } from "./CalculatorClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Marketing-Kostenrechner: Intern vs. Agentur | Nesco Digital",
  description:
    "Berechnen Sie die tatsaechlichen Kosten eines internen Marketing-Spezialisten im Vergleich zu einer Agentur. Vollstaendiger Vergleich inklusive aller versteckten Kosten.",
  path: "/ge/calculator/",
  routeKey: "calculator",
});

export default function CalculatorPageDE() {
  return (
    <>
      <Header locale="de" />
      <main>
        <CalculatorClientDE />
      </main>
      <Footer locale="de" />
    </>
  );
}

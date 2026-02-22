import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalculatorClientEN } from "./CalculatorClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Marketing Cost Calculator: In-House vs Agency | Nesco Digital",
  description:
    "Calculate the true cost of an in-house marketing specialist versus an agency. Full comparison including all hidden costs.",
  path: "/en/calculator/",
  routeKey: "calculator",
});

export default function CalculatorPageEN() {
  return (
    <>
      <Header locale="en" />
      <main>
        <CalculatorClientEN />
      </main>
      <Footer locale="en" />
    </>
  );
}

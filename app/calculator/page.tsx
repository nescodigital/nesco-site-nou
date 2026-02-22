import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
  title: "Calculator Cost Marketing Intern vs Agenție | Nesco Digital",
  description:
    "Calculează cât costă cu adevărat un specialist intern față de o agenție de marketing. Comparație completă cu toate costurile ascunse.",
  metadataBase: new URL("https://nescodigital.com"),
  alternates: { canonical: "https://nescodigital.com/calculator/" },
};

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

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Social Media Marketing | Gestionare Rețele Sociale | Nesco Digital",
  description: "Servicii social media: strategie, content creation, community management. Construim prezență solidă pe Facebook, Instagram, TikTok, LinkedIn.",
  path: "/solutii-social-media-ro/",
  routeKey: "socialMedia",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "digitalMarketing",
  hero: { badge: "Social Media", title: "Soluții Social Media", subtitle: "Creștem vizibilitatea brandului tău, construim comunități și generăm vânzări prin strategii de social media personalizate." },
  problems: [
    { title: "Strategie neclară", desc: "Postezi fără plan, fără rezultate" },
    { title: "Conținut de slabă calitate", desc: "Conținut care nu angajează sau convertește" },
    { title: "Engagement scăzut", desc: "Followeri care nu interacționează sau cumpără" },
    { title: "Reclame sociale sub performanță", desc: "Cheltuieli pe social ads fără ROI clar" },
  ],
  solutions: [
    { title: "Analiză și Strategie", desc: "Strategie social media personalizată pe audiența și obiectivele tale." },
    { title: "Creare Conținut Captivant", desc: "Conținut vizual și scris care oprește scroll-ul." },
    { title: "Administrare Conturi", desc: "Gestionăm conturile la un nivel profesionist și consistent." },
    { title: "Campanii Plătite", desc: "Reclame care convertesc, nu doar vizualizări." },
    { title: "Monitorizare și Analiză", desc: "Raportare săptămânală despre ce funcționează." },
    { title: "Creștere Comunitate", desc: "Construim o comunitate loială în jurul brandului tău." },
  ],
  cases: [
    { metric: "+150%", label: "Creștere followeri", industry: "Brand Fashion" },
    { metric: "+80%", label: "Rată de engagement", industry: "Brand Lifestyle" },
    { metric: "+45%", label: "Trafic din social", industry: "E-commerce" },
  ],
  omnichannelServices: ["Facebook Ads", "Instagram Ads", "TikTok Ads", "Email Marketing", "CRO"],
};

export default function SocialMediaRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}

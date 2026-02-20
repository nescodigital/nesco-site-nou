import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "TikTok Ads | Ajungi la Gen Z cu campanii creative | Nesco Digital",
  description: "Ajunge la Gen Z și Millennials cu campanii TikTok autentice care generează creștere virală și conversii măsurabile. +300% brand awareness.",
  path: "/tiktok-ro/",
  routeKey: "tiktokAds",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "paidAds",
  hero: { badge: "TikTok Ads", title: "TikTok Ads", subtitle: "Ajunge la Gen Z și Millennials cu campanii autentice, creative, care generează creștere virală și conversii măsurabile." },
  problems: [
    { title: "Lipsești de pe platforma cu cea mai rapidă creștere", desc: "Concurenții tăi sunt deja pe TikTok" },
    { title: "Awareness scăzut în rândul tinerilor", desc: "Nu ajungi la noua generație de cumpărători" },
    { title: "Provocări cu conținut creativ", desc: "TikTok necesită conținut autentic, nativ" },
    { title: "ROI neclar din TikTok", desc: "Nu știi cum să măsori și optimizezi performanța" },
  ],
  solutions: [
    { title: "Strategie TikTok", desc: "Strategie specifică platformei pentru impact maxim." },
    { title: "Producție creative nativă", desc: "Conținut care pare organic, nu ca o reclamă." },
    { title: "Spark Ads", desc: "Amplifică cel mai bun conținut organic cu reach plătit." },
    { title: "Campanii In-Feed & TopView", desc: "Formate cu vizibilitate maximă pentru lansări de brand." },
    { title: "Targetare audiențe", desc: "Targetare comportamentală și după interese." },
    { title: "Urmărire performanță", desc: "Atribuire completă și măsurare ROAS." },
  ],
  cases: [
    { metric: "+300%", label: "Brand awareness lift", industry: "Brand DTC" },
    { metric: "2.5x ROAS", label: "Return on Ad Spend", industry: "E-commerce Fashion" },
    { metric: "+400%", label: "Followeri în 60 zile", industry: "Brand Lifestyle" },
  ],
  omnichannelServices: ["Instagram Ads", "Facebook Ads", "Google Ads", "Email Marketing", "CRO"],
};

export default function TikTokRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "LinkedIn Ads | B2B-Lead-Generierung im großen Maßstab | Nesco Digital", description: "Die leistungsstärkste B2B-Werbeplattform. Entscheidungsträger erreichen, qualifizierte Leads generieren und Enterprise-Deals abschließen.", path: "/ge/linkedin-de/", routeKey: "linkedinAds" });

const data: ServicePageData = {
  locale: "de",
  hero: { badge: "LinkedIn Ads", title: "LinkedIn Ads", subtitle: "Die leistungsstärkste B2B-Werbeplattform. Wir helfen Ihnen, Entscheidungsträger zu erreichen, qualifizierte Leads zu generieren und enterprise-weite Pipelines aufzubauen." },
  problems: [{ title: "Niedrige B2B-Lead-Qualität", desc: "Leads, die nicht zum ICP passen" }, { title: "Hohe Kosten pro Enterprise-Lead", desc: "Teure Leads durch falsches Targeting" }, { title: "Falsches Audience-Targeting", desc: "Entscheidungsträger werden nicht erreicht" }, { title: "Kein C-Suite-Zugang", desc: "Kann nicht die richtige Führungsebene erreichen" }],
  solutions: [{ title: "Entscheidungsträger-Targeting", desc: "Job-Titel, Seniorität, Unternehmensgröße, präzises B2B-Targeting." }, { title: "Sponsored Content", desc: "Thought-Leadership-Content, der Vertrauen bei der Zielgruppe aufbaut." }, { title: "InMail-Kampagnen", desc: "Direktes Outreach an Entscheidungsträger." }, { title: "Lead-Gen-Forms", desc: "Native LinkedIn-Formulare für reibungslose Lead-Erfassung." }, { title: "Account-Based Marketing", desc: "Wunschunternehmen nach Namen targetieren." }, { title: "LinkedIn-Retargeting", desc: "Website-Besucher und Video-Viewer erneut ansprechen." }],
  cases: [{ metric: "+150%", label: "B2B-Leads aus LinkedIn", industry: "SaaS-Plattform" }, { metric: "-40%", label: "CPL gegenüber anderen Kanälen", industry: "Enterprise Software" }, { metric: "5x Pipeline", label: "Revenue-Pipeline aus LinkedIn", industry: "B2B-Dienstleistungen" }],
  omnichannelServices: ["Google Ads", "E-Mail-Marketing", "CRM-Lösungen", "Digitale Strategie", "SEO"],
};

export default function LinkedInDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}

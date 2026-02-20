import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "LinkedIn Ads România | B2B Advertising | Nesco Digital",
  description: "Campanii LinkedIn Ads pentru companii B2B. Lead generation, brand awareness, retargeting. Ajungem la decidenți și profesioniști.",
  path: "/reclame-platite/linkedin-ads/",
  routeKey: "linkedinAds",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "paidAds",
  hero: { badge: "LinkedIn Ads", title: "LinkedIn Ads", subtitle: "Cea mai puternică platformă de publicitate B2B. Te ajutăm să ajungi la factorii de decizie și să generezi lead-uri B2B calificate." },
  problems: [
    { title: "Lead-uri B2B de slabă calitate", desc: "Lead-uri care nu se potrivesc cu ICP-ul tău" },
    { title: "Cost ridicat per lead enterprise", desc: "Leads scumpe din targetare greșită" },
    { title: "Targetare greșită a audienței", desc: "Nu ajungi la factorii de decizie" },
    { title: "Fără acces la C-suite", desc: "Nu poți ajunge la senioritate corectă" },
  ],
  solutions: [
    { title: "Targetare factori de decizie", desc: "Job title, senioritate, mărime companie, targetare B2B precisă." },
    { title: "Sponsored Content", desc: "Conținut de thought leadership care construiește încredere." },
    { title: "Campanii InMail", desc: "Outreach direct la factorii de decizie în inbox." },
    { title: "Lead Gen Forms", desc: "Formulare native LinkedIn pentru captare fără fricțiune." },
    { title: "Account-Based Marketing", desc: "Targetează companiile de vis după nume." },
    { title: "Retargeting LinkedIn", desc: "Re-engagează vizitatorii site-ului și vizionatorii de video." },
  ],
  cases: [
    { metric: "+150%", label: "Lead-uri B2B din LinkedIn", industry: "SaaS Platform" },
    { metric: "-40%", label: "CPL față de alte canale", industry: "Enterprise Software" },
    { metric: "5x pipeline", label: "Pipeline din LinkedIn", industry: "B2B Services" },
  ],
  omnichannelServices: ["Google Ads", "Email Marketing", "CRM Solutions", "Strategie Digitală", "SEO"],
};

export default function LinkedInRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}

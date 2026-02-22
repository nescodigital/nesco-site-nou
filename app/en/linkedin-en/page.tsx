import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";
import { LinkedInFunnel } from "@/components/sections/ads/LinkedInFunnel";
import { LinkedInCalculator } from "@/components/sections/ads/LinkedInCalculator";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "LinkedIn Ads Agency | B2B Advertising | Nesco Digital",
  description: "LinkedIn Ads campaigns for B2B companies. Lead generation, brand awareness, retargeting. We reach decision-makers and professionals.",
  path: "/en/linkedin-en/",
  routeKey: "linkedinAds",
});

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z" />
    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" />
    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
  </svg>
);

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "LinkedIn Ads",
    title: "LinkedIn Ads",
    subtitle: "The most powerful B2B advertising platform. We help you reach decision-makers, generate qualified leads, and build enterprise-level pipelines.",
  },
  problems: [
    { title: "Low quality B2B leads", desc: "Getting leads that don't match your ICP" },
    { title: "High cost per enterprise lead", desc: "Expensive leads without the right targeting" },
    { title: "Wrong audience targeting", desc: "Not reaching decision-makers and budget holders" },
    { title: "No C-suite reach", desc: "Can't get in front of the right level seniority" },
  ],
  solutions: [
    { title: "Decision-maker targeting", desc: "Job title, seniority, company size, industry, precise B2B targeting." },
    { title: "Sponsored Content", desc: "Thought leadership content that builds trust with your ICP." },
    { title: "InMail campaigns", desc: "Direct outreach to decision-makers in their inbox." },
    { title: "Lead Gen Forms", desc: "Native LinkedIn forms for frictionless lead capture." },
    { title: "Account-Based Marketing", desc: "Target your dream accounts by company name." },
    { title: "LinkedIn retargeting", desc: "Re-engage website visitors and video viewers." },
  ],
  cases: [
    { metric: "+150%", label: "B2B leads from LinkedIn", industry: "SaaS Platform" },
    { metric: "-40%", label: "CPL vs other channels", industry: "Enterprise Software" },
    { metric: "5x pipeline", label: "Revenue pipeline from LinkedIn", industry: "B2B Services" },
  ],
  omnichannelServices: ["Google Ads", "Email Marketing", "CRM Solutions", "Digital Strategy", "SEO"],
};

export default function LinkedInEnPage() {
  const heroRightSlot = (
    <AdsDashboardCard
      emoji="💼"
      title="LinkedIn Ads B2B Campaign"
      date="October 2025"
      metrics={[
        { label: "Leads/month", animated: { target: 22 }, badge: { text: "↑ 633%", positive: true } },
        { label: "CPL", animated: { target: 85, suffix: "€" }, badge: { text: "↓ 40%", positive: false } },
        { label: "Decision-makers reached", animated: { target: 18400 }, badge: { text: "↑ 150%", positive: true } },
      ]}
      barPercent={83}
      barLabel="Budget used"
      status="ACTIVE Sponsored Content + InMail"
      badge1="From 3 to 22 B2B leads/month"
      badge2="SaaS Enterprise, Romania"
    />
  );

  const afterHeroSlot = (
    <>
      <AdsTrustBar items={[
        { icon: <LinkedInIcon />, label: "LinkedIn Marketing Solutions" },
        { icon: <GoogleIcon />, label: "Google Partner" },
        { stat: "950M+", label: "LinkedIn users globally" },
        { stat: "50-60%", label: "InMail open rate" },
        { stat: "15", label: "years B2B experience" },
      ]} />
      <AdsBeforeAfter
        title="Real Results Before and After Nesco Digital"
        beforeLabel="Before"
        afterLabel="After Nesco"
        before={[
          { label: "B2B Leads/month", display: "3" },
          { label: "Lead source", display: "cold email" },
          { label: "Lead quality", display: "average" },
          { label: "Sales cycle", display: "9 months" },
          { label: "Monthly pipeline", display: "€30,000" },
          { label: "CPL", display: "€400" },
        ]}
        after={[
          { label: "B2B Leads/month", display: "22", animate: { target: 22 } },
          { label: "Lead source", display: "LinkedIn Ads" },
          { label: "Lead quality", display: "C-suite confirmed" },
          { label: "Sales cycle", display: "6 months (−30%)" },
          { label: "Monthly pipeline", display: "€220,000", animate: { target: 220000 } },
          { label: "CPL", display: "€85", animate: { target: 85, suffix: "€" } },
        ]}
        source="B2B SaaS Enterprise, Romania 90 days"
      />
      <AdsComparison
        bad={[
          "Boosting LinkedIn posts without B2B targeting",
          "Broad audiences across all industries",
          "No Lead Gen Forms",
          "Cold email as sole outbound strategy",
          "No website visitor retargeting",
          "Reporting: impressions and clicks",
        ]}
        good={[
          "Exact targeting: job title + seniority + company size",
          "Account-Based Marketing on target companies",
          "Pre-filled Lead Gen Forms (1-click lead capture)",
          "InMail directly to inboxes with 50-60% open rate",
          "Retargeting visitors + lookalike from clients",
          "Reporting: CPL, pipeline generated, real ROI",
        ]}
      />
      <LinkedInFunnel />
      <AdsTimeline
        phases={[
          {
            emoji: "🎯",
            range: "Days 1–14",
            title: "ABM Setup",
            color: "#0A66C2",
            items: [
              "LinkedIn Campaign Manager setup",
              "ICP definition and target company list",
              "Insight Tag installed on website",
              "First Sponsored Content campaigns launched",
            ],
          },
          {
            emoji: "📨",
            range: "Days 15–45",
            title: "Engagement & Lead Gen",
            color: "#60a5fa",
            items: [
              "InMail and Lead Gen Forms launched",
              "A/B testing creatives and messages",
              "CPL and lead quality optimisation",
              "Retargeting on visitors and engagements",
            ],
          },
          {
            emoji: "📈",
            range: "Days 46–90",
            title: "Scale & Nurture",
            color: "#56db84",
            items: [
              "Scaling budgets on best CPL campaigns",
              "CRM integration for leads",
              "Nurturing campaigns for long sales cycles",
              "Full-funnel B2B strategy consolidated",
            ],
          },
        ]}
      />
      <LinkedInCalculator />
    </>
  );

  return (
    <>
      <Header locale="en" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={heroRightSlot}
          afterHeroSlot={afterHeroSlot}
        />
      </main>
      <Footer locale="en" />
      <AdsStickyBar title="Ready to generate qualified B2B leads?" cta="Talk to a specialist" href="/en/lets-talk/" />
    </>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { LinkedInFunnel } from "@/components/sections/ads/LinkedInFunnel";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { LinkedInCalculator } from "@/components/sections/ads/LinkedInCalculator";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "LinkedIn Ads Agency | B2B Advertising | Nesco Digital",
  description: "LinkedIn Ads campaigns for B2B companies. Lead generation, brand awareness, retargeting. We reach decision-makers and professionals.",
  path: "/en/paid-ads/linkedin-ads/",
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
    title: "Reach decision-makers directly with LinkedIn Ads",
    subtitle: "LinkedIn is the only platform where you can target by job title, industry, company size, and seniority. If your sale involves multiple decision-makers and a long cycle, LinkedIn transforms how you generate B2B leads.",
  },
  problems: [
    { title: "Leads from other platforms lack B2B quality", desc: "A Facebook user isn't necessarily the decision-maker for an enterprise contract. LinkedIn knows exactly who is CEO, CFO, or IT Director." },
    { title: "You can't reach C-suite through cold email", desc: "Directors block unsolicited calls. On LinkedIn, your message appears in their professional feed, in the right context." },
    { title: "Your sales cycle is long and needs nurturing", desc: "Complex B2B sales take 3-12 months. LinkedIn allows relationship building through content and direct messaging throughout the entire cycle." },
    { title: "Your competitors are already investing in LinkedIn", desc: "If your business is B2B and you're not on LinkedIn Ads, you're losing visibility in front of the decision-makers you're targeting." },
  ],
  solutions: [
    { title: "Precise B2B targeting", desc: "Job title (CEO, CFO, Head of Marketing), seniority, industry, company size. A level of precision impossible to achieve on other platforms." },
    { title: "Sponsored Content, Thought leadership in the feed", desc: "Articles, videos, and carousels that build your brand's authority in front of your targeted B2B audience." },
    { title: "Message Ads, Directly in the inbox", desc: "Personalized messages directly in decision-makers' LinkedIn inbox. Open rates of 50-60% vs. 20% for cold email." },
    { title: "Lead Gen Forms, Frictionless capture", desc: "Native forms pre-filled with LinkedIn profile data. Turn interest into qualified leads with a single click." },
    { title: "Account-Based Marketing (ABM)", desc: "Target your dream companies by name. LinkedIn shows your ads to employees of those specific companies." },
    { title: "Retargeting and lookalike audiences", desc: "Re-engage site visitors and create lookalike audiences based on your existing clients." },
  ],
  cases: [
    { metric: "+150%", label: "Qualified B2B leads", industry: "SaaS Platform" },
    { metric: "-40%", label: "CPL vs. other channels", industry: "Enterprise Software" },
    { metric: "5x pipeline", label: "Opportunities generated", industry: "B2B Services" },
    { metric: "60%", label: "Message Ads open rate", industry: "Consulting" },
    { metric: "-35%", label: "Cost per qualified opportunity", industry: "IT Services" },
    { metric: "3x MQL", label: "Marketing Qualified Leads", industry: "SaaS B2B" },
  ],
  omnichannelServices: ["Google Ads", "Email Marketing", "CRM Solutions", "Digital Strategy", "SEO"],
  faq: [
    { q: "Why is LinkedIn more expensive than Facebook or Google?", a: "LinkedIn's CPM is higher, but lead quality is incomparable. A qualified B2B lead from LinkedIn is worth 5-10x more than one from Facebook. When calculating cost per qualified opportunity, LinkedIn is often cheaper." },
    { q: "How much budget do I need for LinkedIn Ads?", a: "We recommend a minimum of 800-1,000 EUR/month in ad spend. LinkedIn requires higher minimum bids than other platforms. Below this, reach is too limited to generate relevant data." },
    { q: "Does it work for small companies?", a: "Depends on what you sell. If your product or service costs minimum 5,000 EUR per client, LinkedIn is justified even for SMEs. If you sell low-to-medium volume products, other platforms are more cost-effective." },
    { q: "How do I know I'm reaching real decision-makers, not junior employees?", a: "LinkedIn has identity verification through personal accounts. We can set seniority exclusions (excluding entry-level and associate) and explicitly target Director, VP, C-level, Owner, Partner. The campaign demographic report confirms who saw the ads." },
    { q: "How long until I generate leads?", a: "First leads typically appear within 2-4 weeks. But LinkedIn works on a nurturing principle: decision-makers need to see your brand multiple times before acting. Full results appear in 60-90 days." },
    { q: "Can I use LinkedIn Ads without posting content on my company page?", a: "Yes, Sponsored Content ads work independently of the page's organic activity. But an active page increases credibility and reduces CPM because users can verify the company." },
  ],
  testimonial: { quote: "We were generating 3-4 B2B leads per month from all sources. After 90 days of LinkedIn Ads with Nesco, we generate 18-22 qualified leads monthly, with a 30% shorter sales cycle.", name: "Cristian V.", role: "Sales Director, enterprise software company" },
  tools: ["LinkedIn Campaign Manager", "LinkedIn Insight Tag", "Sales Navigator", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "TOOLS WE USE",
  freeAuditBadge: "Free LinkedIn Ads Audit Included",
};

const trustBarItems: { icon?: ReactNode; label: string; stat?: string }[] = [
  { icon: <LinkedInIcon />, label: "LinkedIn Marketing Solutions" },
  { icon: <GoogleIcon />, label: "Google Partner" },
  { stat: "950M+", label: "LinkedIn users globally" },
  { stat: "50-60%", label: "open rate Message Ads" },
  { stat: "15", label: "years of B2B experience" },
];

const dashboardCard = (
  <AdsDashboardCard
    emoji="💼"
    title="LinkedIn Ads B2B"
    date="October 2025"
    metrics={[
      { label: "Leads/month", animated: { target: 22 }, badge: { text: "↑ 633%", positive: true } },
      { label: "CPL", animated: { target: 85, suffix: " lei" }, badge: { text: "↓ 40%", positive: false } },
      { label: "Decision-makers reached", animated: { target: 18400 }, badge: { text: "↑ 150%", positive: true } },
    ]}
    barPercent={83}
    barLabel="Budget used"
    status="ACTIVE Sponsored Content + Message Ads"
    badge1="From 3 to 22 B2B leads/month"
    badge2="SaaS Enterprise, Romania"
  />
);

const afterHeroContent = (
  <>
    <AdsTrustBar items={trustBarItems} />
    <AdsBeforeAfter
      title="Real results Before and after Nesco Digital"
      beforeLabel="Before"
      afterLabel="After Nesco"
      before={[
        { label: "B2B leads/month", display: "3" },
        { label: "Lead source", display: "cold email" },
        { label: "Lead quality", display: "average" },
        { label: "Sales cycle", display: "9 months" },
        { label: "Monthly pipeline", display: "30,000€" },
        { label: "CPL", display: "400€" },
      ]}
      after={[
        { label: "B2B leads/month", display: "22", animate: { target: 22 } },
        { label: "Lead source", display: "LinkedIn Ads" },
        { label: "Lead quality", display: "confirmed C-suite" },
        { label: "Sales cycle", display: "6 months (-30%)" },
        { label: "Monthly pipeline", display: "220,000€", animate: { target: 220000 } },
        { label: "CPL", display: "85€", animate: { target: 85, suffix: "€" } },
      ]}
      source="SaaS Enterprise B2B, Romania 90 days"
    />
    <AdsComparison
      bad={[
        "Boosting LinkedIn posts without B2B targeting",
        "Broad audiences (all industries)",
        "No Lead Gen Forms",
        "Cold email as only outbound strategy",
        "No retargeting on site visitors",
        "Reporting: impressions and clicks",
      ]}
      good={[
        "Exact targeting: job title + seniority + company size",
        "Account-Based Marketing on target companies",
        "Pre-filled Lead Gen Forms (1-click lead)",
        "Message Ads directly in inbox with 50-60% open rate",
        "Retargeting on visitors + lookalike on clients",
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
            "Setup LinkedIn Campaign Manager",
            "Define ICP and target company list",
            "Configure Insight Tag on site",
            "First Sponsored Content campaigns",
          ],
        },
        {
          emoji: "📨",
          range: "Days 15–45",
          title: "Engagement & Lead Gen",
          color: "#60a5fa",
          items: [
            "Launch Message Ads and Lead Gen Forms",
            "A/B testing creatives and messages",
            "Optimize CPL and lead quality",
            "Retargeting on visitors and engagements",
          ],
        },
        {
          emoji: "📈",
          range: "Days 46–90",
          title: "Scale & Nurture",
          color: "#56db84",
          items: [
            "Scale campaigns with the best CPL",
            "Integrate leads into CRM",
            "Nurturing campaigns for long sales cycles",
            "Consolidated full-funnel B2B strategy",
          ],
        },
      ]}
    />
    <LinkedInCalculator />
  </>
);

export default function LinkedInAdsEnPage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={dashboardCard}
          afterHeroSlot={afterHeroContent}
        />
      </main>
      <AdsStickyBar
        title="Ready to generate qualified B2B leads?"
        cta="Talk to a specialist"
        href="/en/lets-talk/"
      />
      <Footer locale="en" />
    </>
  );
}

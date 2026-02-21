import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "LinkedIn Ads Agency | B2B Advertising | Nesco Digital",
  description: "LinkedIn Ads campaigns for B2B companies. Lead generation, brand awareness, retargeting. We reach decision-makers and professionals.",
  path: "/en/paid-ads/linkedin-ads/",
  routeKey: "linkedinAds",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "LinkedIn Ads",
    title: "Reach decision-makers directly with LinkedIn Ads",
    subtitle: "LinkedIn is the only platform where you can target by job title, industry, company size and seniority. If your sale involves multiple decision-makers and a long cycle, LinkedIn transforms how you generate B2B leads.",
  },
  problems: [
    { title: "Leads from other platforms lack B2B quality", desc: "A Facebook user isn't necessarily the decision-maker for an enterprise contract. LinkedIn knows exactly who is CEO, CFO, or IT Director." },
    { title: "You can't reach C-suite through cold email", desc: "Directors block unsolicited calls. On LinkedIn, your message appears in their professional feed, in the right context." },
    { title: "Your sales cycle is long and needs nurturing", desc: "Complex B2B sales take 3-12 months. LinkedIn allows relationship building through content and direct messaging throughout this cycle." },
    { title: "Your competitors are already investing in LinkedIn", desc: "If your business is B2B and you're not on LinkedIn Ads, you're losing visibility in front of the decision-makers you're targeting." },
  ],
  solutions: [
    { title: "Precise B2B targeting", desc: "Job title (CEO, CFO, Head of Marketing), seniority, industry, company size. A level of precision impossible to achieve on other platforms." },
    { title: "Sponsored Content, Thought leadership in the feed", desc: "Articles, videos and carousels that build your brand's authority in front of your targeted B2B audience." },
    { title: "Message Ads, Directly in the inbox", desc: "Personalized messages directly in decision-makers' LinkedIn inbox. Open rates of 50-60% vs. 20% for cold email." },
    { title: "Lead Gen Forms, Frictionless capture", desc: "Native LinkedIn forms pre-filled with profile data. Turn interest into qualified leads with a single click." },
    { title: "Account-Based Marketing (ABM)", desc: "Target your dream companies by name. LinkedIn shows your ads to employees of those specific companies." },
    { title: "Retargeting and lookalike audiences", desc: "Re-engage site visitors and create lookalike audiences based on your existing clients." },
  ],
  cases: [
    { metric: "+150%", label: "Qualified B2B leads", industry: "SaaS Platform" },
    { metric: "-40%", label: "CPL vs. other channels", industry: "Enterprise Software" },
    { metric: "5x pipeline", label: "Pipeline opportunities generated", industry: "B2B Services" },
    { metric: "60%", label: "Message Ads open rate", industry: "Consulting" },
    { metric: "-35%", label: "Cost per qualified opportunity", industry: "IT Services" },
    { metric: "3x MQL", label: "Marketing Qualified Leads", industry: "SaaS B2B" },
  ],
  omnichannelServices: ["Google Ads", "Email Marketing", "CRM Solutions", "Digital Strategy", "SEO"],
  faq: [
    { q: "Why is LinkedIn more expensive than Facebook or Google?", a: "LinkedIn's CPM is higher, but lead quality is incomparable. A qualified B2B lead from LinkedIn is worth 5-10x more than one from Facebook. When calculating cost per qualified opportunity, LinkedIn is often cheaper." },
    { q: "How much budget do I need for LinkedIn Ads?", a: "We recommend a minimum of €800-1,000/month in ad spend. LinkedIn requires higher minimum bids than other platforms. Below this, reach is too limited to generate relevant data." },
    { q: "Does it work for small companies?", a: "Depends on what you sell. If your product or service costs minimum €5,000 per client, LinkedIn is justified even for SMEs. If you sell low-to-medium volume products, other platforms are more cost-effective." },
    { q: "How do I know I'm reaching real decision-makers, not junior employees?", a: "LinkedIn has identity verification through personal accounts. We can set seniority exclusions (excluding entry-level and associate) and explicitly target Director, VP, C-level, Owner, Partner. The campaign demographic report confirms who saw the ads." },
    { q: "How long until I generate leads?", a: "First leads typically appear within 2-4 weeks. But LinkedIn works on a nurturing principle: decision-makers need to see your brand multiple times before acting. Full results appear in 60-90 days." },
    { q: "Can I use LinkedIn Ads without posting content on my company page?", a: "Yes, Sponsored Content ads work independently of the page's organic activity. But an active page increases credibility and reduces CPM because users can verify the company." },
  ],
  testimonial: { quote: "We were generating 3-4 B2B leads per month from all sources. After 90 days of LinkedIn Ads with Nesco, we generate 18-22 qualified leads monthly, with a 30% shorter sales cycle.", name: "Cristian V.", role: "Sales Director, enterprise software company" },
  tools: ["LinkedIn Campaign Manager", "LinkedIn Insight Tag", "Sales Navigator", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "TOOLS WE USE",
  freeAuditBadge: "Free LinkedIn Ads Audit Included",
};

export default function LinkedInAdsEnPage() {
  return (<><Header locale="en" /><main><ServicePageTemplate data={data} /></main><Footer locale="en" /></>);
}

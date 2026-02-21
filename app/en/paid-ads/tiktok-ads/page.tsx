import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "TikTok Ads Agency | TikTok Advertising | Nesco Digital",
  description: "TikTok Ads for brands that want to reach new audiences. Native creative, advanced targeting, measurable results.",
  path: "/en/paid-ads/tiktok-ads/",
  routeKey: "tiktokAds",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "TikTok Ads",
    title: "Reach the new generation of shoppers with TikTok Ads",
    subtitle: "TikTok has over 1 billion users worldwide and is the fastest-growing platform. Cost per view is 3-5x lower than Meta, and the audience is highly receptive to new brands.",
  },
  problems: [
    { title: "Young audiences don't find you on Facebook", desc: "Gen Z (18-26) and younger Millennials spend more time on TikTok than any other platform. If you're not on TikTok, you don't exist for them." },
    { title: "Your Meta budget keeps getting more expensive", desc: "CPMs on Facebook and Instagram rise constantly. TikTok offers reach at significantly lower costs with higher engagement." },
    { title: "Your products have untapped viral potential", desc: "TikTok is the platform where a good video can reach millions without a huge budget. The algorithm rewards good content, not accounts with many followers." },
    { title: "Your competitors have already discovered TikTok", desc: "Brands that entered TikTok in 2023-2024 have a market advantage. Every month of delay costs more to reach the same audiences." },
  ],
  solutions: [
    { title: "In-Feed Ads, Native like a regular TikTok", desc: "Ads appear in users' feeds and look like organic content. The most effective format for direct conversions." },
    { title: "Spark Ads, Amplify what already works", desc: "If an organic TikTok has performed well, we amplify it with paid budget. The fastest ROI on the platform." },
    { title: "TopView, First thing seen when opening", desc: "Your ad appears as soon as the user opens TikTok. Impossible to ignore, ideal for brand launches." },
    { title: "Native creative production", desc: "Not any content works on TikTok. We create or guide the creation of authentic, platform-native content that doesn't look like an ad." },
    { title: "Precise audience targeting", desc: "We target by interests, viewing behavior, device and demographics. We reach your audience even if they don't follow you." },
    { title: "Full tracking and attribution", desc: "TikTok Pixel on your site tracks visits, add-to-carts and conversions. You know exactly what TikTok generates." },
  ],
  cases: [
    { metric: "+300%", label: "Brand awareness lift", industry: "DTC Brand" },
    { metric: "2.5x ROAS", label: "Return on Ad Spend", industry: "E-commerce Fashion" },
    { metric: "+400%", label: "New followers in 60 days", industry: "Lifestyle Brand" },
    { metric: "-45%", label: "Cost per click vs. Meta", industry: "E-commerce" },
    { metric: "+180%", label: "Website traffic growth", industry: "Beauty Brand" },
    { metric: "3x leads", label: "Qualified leads generated", industry: "Online Education" },
  ],
  omnichannelServices: ["Instagram Ads", "Facebook Ads", "Google Ads", "Email Marketing", "CRO"],
  faq: [
    { q: "Isn't TikTok just for teenagers and dancing?", a: "It was. Now 40% of TikTok users are over 30, and content covers every niche: business, real estate, automotive, food, beauty, education. If your product can be shown in a 30-60 second video, TikTok works." },
    { q: "How much do TikTok ads cost compared to Facebook?", a: "CPM (cost per 1,000 views) on TikTok is 2-3x lower than Facebook. Engagement is higher, meaning lower cost per click. It's the most cost-efficient platform from a cost-per-reach perspective in 2024-2025." },
    { q: "Do I need a TikTok account with many followers?", a: "No. TikTok Ads can run from a business account with 0 followers. Reach is determined by budget and targeting, not account popularity." },
    { q: "What type of video do I need to prepare?", a: "Vertical videos (9:16), 15-60 seconds, filmed casually (not ultra-professional production). TikTok rewards authenticity. We provide detailed briefs and can coordinate or create the content ourselves." },
    { q: "Does TikTok Ads work for B2B?", a: "For direct B2B sales, it's less effective. But for brand awareness and thought leadership, it works surprisingly well. Lawyers, consultants, agencies that post educational content on TikTok win new clients who wouldn't have found them otherwise." },
    { q: "How do I measure that TikTok Ads is working?", a: "Through TikTok Pixel which tracks site visits, add-to-carts and conversions. Plus metrics for reach, complete views and clicks. We report separately for TikTok vs. other channels to see the real contribution." },
  ],
  testimonial: { quote: "We entered TikTok in September and by December we had 4,000 new orders. Cost per order of €8, the best across all channels. Nesco knew exactly what type of content works.", name: "Radu T.", role: "Founder, streetwear fashion brand" },
  tools: ["TikTok Ads Manager", "TikTok Pixel", "TikTok Business Center", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "TOOLS WE USE",
  freeAuditBadge: "Free TikTok Ads Audit Included",
};

export default function TikTokAdsEnPage() {
  return (<><Header locale="en" /><main><ServicePageTemplate data={data} /></main><Footer locale="en" /></>);
}

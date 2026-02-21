import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Instagram Ads Agency | Instagram Advertising | Nesco Digital",
  description: "Instagram Ads campaigns for ambitious brands. Stories, Reels, Feed. We grow brand awareness and drive sales directly from Instagram.",
  path: "/en/paid-ads/instagram-ads/",
  routeKey: "instagramAds",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "Instagram Ads",
    title: "Your products and services, seen by millions on Instagram",
    subtitle: "Instagram has over 1 billion active users worldwide. Native ads in Stories and Reels reach the right people at the right time, without looking like ads.",
  },
  problems: [
    { title: "Your profile's reach is limited", desc: "A profile with 10,000 followers reaches only 5-10% organically. Your products deserve to be seen by far more people." },
    { title: "Competitors are running ads on Instagram", desc: "If you're not running ads, your spot in potential customers' feeds is taken by your competitors." },
    { title: "Your target customer is on Instagram", desc: "If you sell visual products or services (fashion, beauty, food, home, fitness), your ideal audience is on Instagram." },
    { title: "Great content, but no visibility", desc: "You post quality photos but don't have enough new audience discovering you. The algorithm limits organic reach." },
  ],
  solutions: [
    { title: "Stories Ads, Fullscreen and impossible to ignore", desc: "15-second ads in Stories take over the full screen. View rates are 3-5x higher than banner formats." },
    { title: "Reels Ads, Viral content with paid reach", desc: "Reels is the highest-reach format on Instagram. We amplify your best content with paid budget." },
    { title: "Feed Ads, Premium presentation", desc: "Images and videos in users' feeds, with a direct CTA to your site or checkout." },
    { title: "Instagram Shopping, From post to purchase", desc: "We tag products directly in images. The user clicks the product and goes straight to checkout." },
    { title: "Lookalike Audiences, Find customers like yours", desc: "We use your existing customer list to find similar people on Instagram." },
    { title: "Creative A/B testing", desc: "We test multiple image, video, and copy variants to identify what works best for your audience." },
  ],
  cases: [
    { metric: "+45%", label: "ROAS improvement in 60 days", industry: "E-commerce Fashion" },
    { metric: "+120%", label: "New site traffic from Instagram", industry: "Lifestyle Brand" },
    { metric: "-30%", label: "Cost per lead vs. average", industry: "Beauty Brand" },
    { metric: "3.2x ROAS", label: "Return on Ad Spend", industry: "Cosmetics" },
    { metric: "+80%", label: "Orders via Instagram Shopping", industry: "Fashion" },
    { metric: "-25%", label: "Cost per conversion after optimization", industry: "Fitness" },
  ],
  omnichannelServices: ["Facebook Ads", "TikTok Ads", "Google Ads", "CRO", "Email Marketing"],
  faq: [
    { q: "Do I need an existing Instagram profile to run ads?", a: "An existing profile helps (social proof for visitors), but it's not required for ads. Ads can run directly from Meta Business Suite even without an active profile or with few followers." },
    { q: "Which format works better: Stories, Reels, or Feed?", a: "Depends on your objective: Stories for rapid awareness and maximum visual impact, Reels for amplified organic reach, Feed for consideration and conversion. We recommend testing all formats and scaling what works for your audience." },
    { q: "Do I need to create new content specifically for ads?", a: "Not necessarily. We can amplify organic posts that performed well (Spark Ads). But for maximum results, we create or guide the creation of content optimized for each format and objective." },
    { q: "Is Instagram good for B2B?", a: "For direct B2B sales, LinkedIn is more effective. But Instagram works excellently for brand awareness and B2B thought leadership, architects, designers, consultants, agencies who post educational content win new clients through Instagram." },
    { q: "How important is visual quality?", a: "Critical. Instagram is a visual platform. A low-quality photo or video will perform poorly even with a large budget. We provide content creation guides and briefs, or we handle the creative ourselves." },
    { q: "How do you measure campaign success?", a: "Beyond likes and comments (which don't pay bills), we track: reach, frequency, site clicks, conversions, cost per conversion and ROAS. You receive a monthly report with all data, explained in simple terms." },
  ],
  testimonial: { quote: "We launched a new cosmetics brand and in 3 months Instagram Ads brought 1,200 new orders. The visuals Nesco created converted much better than anything we'd done ourselves.", name: "Andreea M.", role: "Founder, natural cosmetics brand" },
  tools: ["Meta Ads Manager", "Meta Pixel", "Meta Business Suite", "Instagram Shopping", "Looker Studio"],
  toolsSectionTitle: "TOOLS WE USE",
  freeAuditBadge: "Free Instagram Ads Audit Included",
};

export default function InstagramAdsEnPage() {
  return (<><Header locale="en" /><main><ServicePageTemplate data={data} /></main><Footer locale="en" /></>);
}

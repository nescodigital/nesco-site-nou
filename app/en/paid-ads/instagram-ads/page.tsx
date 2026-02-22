import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { AdsDashboardCard } from "@/components/sections/ads/AdsDashboardCard";
import { AdsTrustBar } from "@/components/sections/ads/AdsTrustBar";
import { AdsBeforeAfter } from "@/components/sections/ads/AdsBeforeAfter";
import { AdsComparison } from "@/components/sections/ads/AdsComparison";
import { InstaAdsFormats } from "@/components/sections/ads/InstaAdsFormats";
import { AdsTimeline } from "@/components/sections/ads/AdsTimeline";
import { InstaAdsCalculator } from "@/components/sections/ads/InstaAdsCalculator";
import { AdsStickyBar } from "@/components/sections/ads/AdsStickyBar";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Instagram Ads Agency | Instagram Advertising | Nesco Digital",
  description: "Instagram Ads campaigns for ambitious brands. Stories, Reels, Feed. We grow brand awareness and drive sales directly from Instagram.",
  path: "/en/paid-ads/instagram-ads/",
  routeKey: "instagramAds",
});

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
    badge: "Instagram Ads",
    title: "Your products and services, seen by millions on Instagram",
    subtitle: "Instagram has over 5 million users in Romania with purchasing power. Native ads in Stories and Reels reach the right people at the right time, without looking like ads.",
  },
  problems: [
    { title: "Your profile's reach is limited", desc: "A profile with 10,000 followers reaches only 5-10% of them organically. Your products deserve to be seen by far more people." },
    { title: "Competitors are running ads on Instagram", desc: "If you're not active with ads, your spot in potential customers' feeds is taken by your competitors." },
    { title: "Your target customer is on Instagram", desc: "If you sell visual products or services (fashion, beauty, food, home, fitness), your ideal audience is on Instagram." },
    { title: "Great content, but no visibility", desc: "You post quality photos but don't have enough new audience discovering you. The algorithm limits organic reach." },
  ],
  solutions: [
    { title: "Stories Ads Fullscreen, impossible to ignore", desc: "15-second ads in Stories take over the full screen. View rates are 3-5x higher than banner formats." },
    { title: "Reels Ads Viral content, paid reach", desc: "Reels is the highest-reach format on Instagram. We amplify your best content with paid budget." },
    { title: "Feed Ads Premium presentation", desc: "Images and videos in users' feeds, with a direct CTA to your site or checkout." },
    { title: "Instagram Shopping From post to purchase", desc: "We tag products directly in images. The user clicks the product and goes straight to checkout." },
    { title: "Lookalike Audiences We find customers like yours", desc: "We use your existing customer list to find similar people on Instagram." },
    { title: "Creative A/B testing", desc: "We test multiple image, video, and copy variants to identify what works best." },
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
    { q: "Do I need an existing active Instagram profile?", a: "An existing profile helps (social proof for visitors), but it's not required for ads. Ads can run directly from Meta Business Suite even without an active profile or with few followers." },
    { q: "Which format works better: Stories, Reels, or Feed?", a: "Depends on your objective: Stories for rapid awareness and maximum visual impact, Reels for amplified organic reach, Feed for consideration and conversion. We recommend testing all formats and scaling what works for your audience." },
    { q: "Do I need to create new content specifically for ads?", a: "Not necessarily. We can amplify organic posts that performed well (Spark Ads). But for maximum results, we create or guide the creation of content optimized for each format and objective." },
    { q: "Is Instagram good for B2B?", a: "For direct B2B sales, LinkedIn is more effective. But Instagram works excellently for brand awareness and B2B thought leadership -- architects, designers, consultants, agencies who post educational content win new clients through Instagram." },
    { q: "How important is visual quality?", a: "Critical. Instagram is a visual platform. A low-quality photo or video will perform poorly even with a large budget. We provide content creation guides and briefs, or we handle the creative ourselves." },
    { q: "How do you measure campaign success?", a: "Beyond likes and comments (which don't pay bills), we track: reach, frequency, site clicks, conversions, cost per conversion, and ROAS. You receive a monthly report with all data, explained in simple terms." },
  ],
  testimonial: { quote: "We launched a new cosmetics brand and in 3 months Instagram Ads brought 1,200 new orders. The visuals Nesco created converted much better than anything we'd done ourselves.", name: "Andreea M.", role: "Founder, natural cosmetics brand" },
  tools: ["Meta Ads Manager", "Meta Pixel", "Meta Business Suite", "Instagram Shopping", "Looker Studio"],
  toolsSectionTitle: "TOOLS WE USE",
  freeAuditBadge: "Free Instagram Ads Audit Included",
};

export default function InstagramAdsEnPage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={
            <AdsDashboardCard
              emoji="📸"
              title="Instagram Ads Campaign"
              date="October 2025"
              metrics={[
                { label: "ROAS", animated: { target: 3.2, decimals: 1, suffix: "x" }, badge: { text: "↑ 45%", positive: true } },
                { label: "Reach", animated: { target: 182000 }, badge: { text: "↑ 80%", positive: true } },
                { label: "Cost/conv.", animated: { target: 31, suffix: " lei" }, badge: { text: "↓ 25%", positive: false } },
              ]}
              barPercent={91}
              barLabel="Budget used"
              status="ACTIVE Stories + Reels + Feed"
              badge1="+80% orders from Instagram Shopping"
              badge2="Fashion brand, Romania"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar
                items={[
                  { icon: <MetaIcon />, label: "Meta Business Partner" },
                  { icon: <GoogleIcon />, label: "Google Partner" },
                  { stat: "5M+", label: "Instagram users RO" },
                  { stat: "15", label: "years of experience" },
                  { stat: "500+", label: "campaigns delivered" },
                ]}
              />
              <AdsBeforeAfter
                title="Real results Before and after Nesco Digital"
                beforeLabel="Before"
                afterLabel="After Nesco"
                before={[
                  { label: "ROAS", display: "1.1x" },
                  { label: "Reach/month", display: "8,000" },
                  { label: "Cost/conversion", display: "120 lei" },
                  { label: "CTR", display: "0.3%" },
                  { label: "Format", display: "static feed" },
                  { label: "Instagram Shopping", display: "not activated" },
                ]}
                after={[
                  { label: "ROAS", display: "3.2x", animate: { target: 3.2, decimals: 1, suffix: "x" } },
                  { label: "Reach/month", display: "182,000", animate: { target: 182000 } },
                  { label: "Cost/conversion", display: "31 lei", animate: { target: 31, suffix: " lei" } },
                  { label: "CTR", display: "4.2%" },
                  { label: "Format", display: "Stories + Reels + Feed" },
                  { label: "Instagram Shopping", display: "active, 2,400 products" },
                ]}
                source="Fashion brand, Romania 60 days"
              />
              <AdsComparison
                bad={[
                  "Post boost without an audience strategy",
                  "Same creative for months on end",
                  "No Instagram Shopping activated",
                  "No retargeting on visitors",
                  "Reporting: followers and likes",
                  "No A/B testing on creatives",
                ]}
                good={[
                  "Stories + Reels + Feed + Shopping with allocated budgets",
                  "Creative refresh every 2-3 weeks based on data",
                  "Instagram Shopping with fully synced catalog",
                  "Retargeting on visitors and cart abandonments",
                  "Reporting: ROAS, CPL, real revenue",
                  "Systematic A/B testing on creatives and audiences",
                ]}
              />
              <InstaAdsFormats />
              <AdsTimeline
                phases={[
                  {
                    emoji: "📋",
                    range: "Days 1–14",
                    title: "Audit & Setup",
                    color: "#f472b6",
                    items: [
                      "Audit Instagram profile and Business Manager",
                      "Setup Instagram Shopping and product catalog",
                      "Define audiences and creative strategy",
                      "First Stories and Feed campaigns",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Days 15–45",
                    title: "Creative & Formats",
                    color: "#a78bfa",
                    items: [
                      "Test Stories vs Reels vs Feed",
                      "Optimization based on CTR and ROAS",
                      "Launch retargeting on site visitors",
                      "A/B testing 5+ creatives/week",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Days 46–90",
                    title: "Scaling & Shopping",
                    color: "#56db84",
                    items: [
                      "Scale budgets on winning formats",
                      "Optimize Instagram Shopping flow",
                      "Lookalike audiences on existing customers",
                      "Integrated content + ads strategy",
                    ],
                  },
                ]}
              />
              <InstaAdsCalculator />
            </>
          }
        />
      </main>
      <AdsStickyBar
        title="Ready to grow with Instagram Ads?"
        cta="Talk to a specialist"
        href="/en/lets-talk/"
      />
      <Footer locale="en" />
    </>
  );
}

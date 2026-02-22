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
import { WebsiteROICalculator } from "@/components/sections/WebsiteROICalculator";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Company Website | Premium Business Website | Nesco Digital",
  description: "Premium company websites that reflect your brand's value. Modern design, high performance, conversion-optimized.",
  path: "/en/company-website/",
  routeKey: "companyWebsite",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "webdesign",
  hero: {
    badge: "Company Website",
    title: "Your company's first impression is, most of the time, your website",
    subtitle: "80% of potential clients search for a company online before reaching out. A professional website is not an expense -- it's the most effective sales agent working for you 24/7, even while you sleep.",
  },
  problems: [
    { title: "Potential clients search for you and find nothing convincing", desc: "If your website is 5 years old or doesn't exist, you lose credibility against competitors who look good online. First impressions matter more than anything else." },
    { title: "You have a Facebook page, but without a website you're not taken seriously", desc: "A Facebook page can be deleted or blocked at any time. A website of your own is fundamental for the credibility of a serious business." },
    { title: "Visitors don't understand what you do or why to choose you", desc: "If the message on your site isn't clear and convincing, potential clients leave in 8 seconds -- the average attention span of a web user." },
    { title: "Your competitors look more professional online", desc: "A bad first impression is hard to recover from. If your website doesn't convey trust and professionalism, you lose clients before you even get to talk to them." },
  ],
  solutions: [
    { title: "Design that communicates professionalism instantly", desc: "We use visual psychology principles for a first impression that inspires trust. Colors, fonts, and images are chosen strategically." },
    { title: "Clear message: what you do, who you serve, why you", desc: "We write copy that answers within the first 5 seconds the visitor's questions: \"Am I in the right place?\" and \"Does this solve my problem?\"" },
    { title: "Optimized for mobile -- 70% of traffic comes from phones", desc: "A website that doesn't look perfect on a phone loses the majority of traffic. All our websites are mobile-first." },
    { title: "Fast -- every extra second decreases conversions by 7%", desc: "Image optimization, premium hosting, clean code. PageSpeed 90+ guaranteed." },
    { title: "Basic SEO included", desc: "URL structure, meta tags, sitemap, Google Search Console. From day 1, Google can index your website correctly." },
    { title: "Easy to manage", desc: "You add news, case studies, new employees without knowing how to code. Training included at delivery." },
  ],
  cases: [
    { metric: "+70%", label: "Appointments booked", industry: "Medical Clinic" },
    { metric: "+60%", label: "Quote requests", industry: "B2B Services" },
    { metric: "Investors attracted", label: "Brand credibility boost", industry: "Tech Startup" },
    { metric: "+45%", label: "Time spent on site", industry: "Architecture Agency" },
    { metric: "4x", label: "More contacts from website", industry: "Law Firm" },
    { metric: "-55%", label: "Bounce rate", industry: "Consulting Company" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "SEO", "Email Marketing", "CRO"],
  faq: [
    { q: "Do I need a website if I have a Facebook page?", a: "Absolutely. A Facebook page can be deactivated, restricted, or penalized by the algorithm without warning. Your own website is the only digital space you control 100%. Plus, your website can be found on Google -- Facebook can't be indexed the same way." },
    { q: "How much does a company website cost?", a: "It depends on complexity: a 5-8 page website (Home, About, Services, Blog, Contact) starts at 1,500-3,000 EUR. A website with advanced features (quote calculator, client portal, multi-language) can reach 5,000-15,000 EUR. We provide a detailed estimate after the initial discussion." },
    { q: "How often should a website be updated?", a: "Content (news, case studies) should be updated monthly for SEO and credibility. Technical updates (security, plugins) are done monthly by us if you're on a maintenance plan." },
    { q: "Can I build my own website on Wix or Squarespace?", a: "You can, but you'll get a semi-professional looking site that doesn't stand out from competitors doing the same. Custom websites convert 30-50% better than standard templates because they are built specifically for your audience and your business goals." },
    { q: "What content do I need on my website?", a: "Minimum: Home page with a clear message, About page with team and story, detailed Services/Products page, Contact page with multiple ways to reach you. Plus: testimonials from real clients, numbers and results, blog with useful content." },
    { q: "How soon will I see results?", a: "A well-built website improves credibility immediately (from launch). Organic traffic grows in 3-6 months through SEO. If you also run advertising (Google Ads, Facebook Ads), you can see leads in the first week after launch." },
  ],
  testimonial: { quote: "The new site loaded 4x faster and the conversion rate increased by 35% in the first month. It looks exactly how we imagined, maybe even better.", name: "Elena P.", role: "Director, private medical clinic" },
  tools: ["Figma", "Next.js", "WordPress", "Shopify", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "TOOLS WE USE",
  freeAuditBadge: "Free Website Audit Included",
};

const IncludesSection = () => (
  <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="badge mb-6">What We Include</span>
        <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>Everything you need for a professional company website</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
        {[
          { icon: "🎨", title: "Custom design", desc: "Not templates. Every website is designed from scratch for your brand, in Figma, approved by you before development." },
          { icon: "📱", title: "Mobile-first", desc: "70% of traffic comes from phones. The design is built for mobile first, then adapted for desktop." },
          { icon: "⚡", title: "PageSpeed 90+", desc: "Complete optimization: WebP images, lazy loading, premium hosting. We guarantee a score of 90+ on Google PageSpeed." },
          { icon: "🔍", title: "Technical SEO included", desc: "URL structure, meta tags, sitemap, Google Search Console. From launch, Google can index you correctly." },
          { icon: "🛠️", title: "Easy-to-use CMS", desc: "Add news, case studies, or new team members without knowing how to code. Training included at delivery." },
          { icon: "🔒", title: "Security & GDPR", desc: "SSL certificate, automatic backup, GDPR compliance (cookie consent, privacy policy)." },
        ].map((item) => (
          <div key={item.icon} style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "28px" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{item.icon}</div>
            <h3 className="font-bold text-white" style={{ fontSize: "1rem", marginBottom: "8px" }}>{item.title}</h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function CompanyWebsiteEnPage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={
            <AdsDashboardCard
              emoji="🏢"
              title="Company Website Launch"
              date="September 2025"
              metrics={[
                { label: "Contacts/month", animated: { target: 34 }, badge: { text: "↑ 340%", positive: true } },
                { label: "Time on site", animated: { target: 3.2, decimals: 1, suffix: "min" }, badge: { text: "↑ 87%", positive: true } },
                { label: "Bounce rate", animated: { target: 28, suffix: "%" }, badge: { text: "↓ 55%", positive: false } },
              ]}
              barPercent={94}
              barLabel="Conversion goal reached"
              status="LIVE PageSpeed 94/100"
              badge1="8 → 34 contacts/month"
              badge2="Consulting company, Romania"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar items={[
                { stat: "Custom design", label: "not templates" },
                { stat: "4-5", label: "weeks delivery" },
                { stat: "PageSpeed 90+", label: "guaranteed" },
                { stat: "50+", label: "websites delivered" },
                { stat: "Training", label: "included at delivery" },
              ]} />
              <AdsBeforeAfter
                title="Real results Before and after Nesco Digital"
                beforeLabel="Before"
                afterLabel="After Nesco"
                before={[
                  { label: "Contacts/month from site", display: "8" },
                  { label: "Time on site", display: "0.9 min" },
                  { label: "Bounce rate", display: "78%" },
                  { label: "PageSpeed Score", display: "34/100" },
                  { label: "Design", display: "template 2018" },
                  { label: "Perceived credibility", display: "low" },
                ]}
                after={[
                  { label: "Contacts/month from site", display: "34", animate: { target: 34 } },
                  { label: "Time on site", display: "3.2 min", animate: { target: 3.2, decimals: 1, suffix: " min" } },
                  { label: "Bounce rate", display: "28%", animate: { target: 28, suffix: "%" } },
                  { label: "PageSpeed Score", display: "94/100" },
                  { label: "Design", display: "custom 2024" },
                  { label: "Perceived credibility", display: "high" },
                ]}
                source="Consulting company, Romania 30 days post-launch"
              />
              <AdsComparison
                badLabel="Template-based website"
                goodLabel="Nesco custom website"
                bad={[
                  "Template bought from ThemeForest, used by 10,000 sites",
                  "Poor performance: too much unused CSS and JS",
                  "Doesn't reflect your brand's unique identity",
                  "Hard to customize without technical knowledge",
                  "No conversion strategy, just presentation",
                  "Weak technical SEO from the start",
                ]}
                good={[
                  "Design created from scratch specifically for your brand",
                  "Optimized code, PageSpeed 90+ guaranteed",
                  "Unique, memorable visual identity",
                  "Intuitive CMS -- edit by yourself without coding",
                  "Structure built to convert visitors",
                  "Correct technical SEO from day one",
                ]}
              />
              <IncludesSection />
              <AdsTimeline
                title="Our process in 5 weeks"
                phases={[
                  {
                    emoji: "💬",
                    range: "Week 1",
                    title: "Brief & Strategy",
                    color: "#56db84",
                    items: [
                      "Kick-off meeting and detailed brief",
                      "Competitive analysis and benchmark",
                      "Site architecture and sitemap",
                      "Moodboard and visual direction",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Weeks 2-3",
                    title: "Design & Copywriting",
                    color: "#60a5fa",
                    items: [
                      "Full design in Figma",
                      "Feedback rounds and adjustments",
                      "Copywriting for all pages",
                      "Final design approval",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Weeks 4-5",
                    title: "Development & Launch",
                    color: "#a78bfa",
                    items: [
                      "Next.js / WordPress development",
                      "Cross-browser and cross-device testing",
                      "GA4 and Google Search Console setup",
                      "Launch + CMS training (1h)",
                    ],
                  },
                ]}
              />
              <WebsiteROICalculator />
            </>
          }
        />
      </main>
      <Footer locale="en" />
      <AdsStickyBar title="Want a website that impresses?" cta="Request a quote" href="/en/lets-talk/" />
    </>
  );
}

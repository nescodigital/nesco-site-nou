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
import { LeadGenCalculator } from "@/components/sections/LeadGenCalculator";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Lead Generation Website | Websites that Convert | Nesco Digital",
  description: "Strategically built lead generation websites. Optimized landing pages, contact forms, CRM integrations. We turn visitors into qualified leads.",
  path: "/en/lead-generation-website-en/",
  routeKey: "leadGenWebsite",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "webdesign",
  hero: {
    badge: "Lead Generation Website",
    title: "Turn your website into your best sales agent, active 24/7",
    subtitle: "A lead generation website is not a presentation site with a contact form. It is a system strategically built to attract visitors, build their trust, and turn them into qualified potential clients, non-stop.",
  },
  problems: [
    { title: "Your website is a digital brochure, not a sales engine", desc: "It shows who you are and what you do, but doesn't convince the visitor to take action. The elements that turn curiosity into contact are missing." },
    { title: "Visitors come and leave without leaving any data", desc: "Without a clear capture mechanism (form, visible phone number, live chat), 98% of visitors disappear forever." },
    { title: "The message doesn't answer \"Why you?\"", desc: "If the visitor doesn't understand within the first 5 seconds what unique benefit you offer, they'll look at your competitors." },
    { title: "You don't know how many leads your site generates (or doesn't)", desc: "Without proper tracking and analytics, you're driving blind -- you don't know which pages attract and which repel visitors." },
  ],
  solutions: [
    { title: "Data-driven conversion strategy", desc: "We analyze existing visitor behavior, identify where they leave, and design a website that naturally guides them toward action." },
    { title: "Persuasive copy -- the words that convince", desc: "We don't write \"We are experienced leaders.\" We write clear, benefit-focused messages that address your clients' real objections." },
    { title: "Conversion-focused design", desc: "The visual structure guides the visitor's eye toward the CTA. Strategic buttons, simple forms, social proof (testimonials, numbers, client logos)." },
    { title: "Specialized landing pages", desc: "For each service or product, a page with a single purpose: conversion. Performance is 2-3x better compared to general pages." },
    { title: "Smart forms", desc: "Multi-step forms that ask less at each step convert more. We integrate with your CRM or email for instant notifications." },
    { title: "Analytics and continuous optimization", desc: "We install complete tracking (Google Analytics, heatmaps) and continuously optimize: headlines, images, forms, CTAs based on real behavior." },
  ],
  cases: [
    { metric: "+47%", label: "Quote requests", industry: "IT Consulting" },
    { metric: "+80%", label: "Qualified leads", industry: "Dental Clinic" },
    { metric: "3.8x ROI", label: "Return from advertising", industry: "B2B Services" },
    { metric: "+50%", label: "Online appointments", industry: "Medical Clinic" },
    { metric: "+160%", label: "Newsletter subscribers", industry: "Fitness Center" },
    { metric: "-42%", label: "Cost per lead", industry: "Real Estate Agency" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "Email Marketing", "CRO", "SEO"],
  faq: [
    { q: "What's the difference between a presentation site and a lead generation site?", a: "A presentation site says who you are. A lead generation site convinces an undecided visitor to take action -- to call, submit a form, book a meeting. The difference lies in: persuasive copy, page structure, optimized forms, and strategic social proof." },
    { q: "I already have a website. Do I need to start from scratch?", a: "Not always. Sometimes a strategic redesign is enough: we change the structure, improve the copywriting, and optimize forms. We do a free audit and honestly tell you whether you need a new site or improvements." },
    { q: "What platform do you build on?", a: "We recommend WordPress for flexibility and ease of management, or Next.js for maximum performance and PageSpeed 95+. We choose the platform based on your needs, not a one-size-fits-all recommendation." },
    { q: "How long does it take to build a lead generation site?", a: "Typically: 4-6 weeks for a site with 5-10 pages. This includes: audit and strategy (1 week), design (1-2 weeks), development (1-2 weeks), and testing/launch (1 week). The exact duration depends on complexity." },
    { q: "What if the new site doesn't generate more leads?", a: "We have a total transparency policy. If within 60 days of launch the conversion rate hasn't improved, we redo for free any element identified as a problem -- based on data, not opinions." },
    { q: "Do you include SEO in the website price?", a: "We include basic technical SEO: URL structure, meta tags, loading speed, sitemap, and Google Search Console setup. Ongoing SEO (content creation, link building) is a separate service, but recommended for long-term sustainability." },
    { q: "Can I edit the content myself after launch?", a: "Yes. Every site includes a 1-hour training session and written documentation. You can edit texts, images, and add new pages without technical knowledge. For more complex changes, we have monthly support packages." },
  ],
  testimonial: { quote: "The new site loaded 4x faster and the conversion rate increased by 35% in the first month. It looks exactly how we imagined, maybe even better.", name: "Elena P.", role: "Director, private medical clinic" },
  tools: ["Figma", "Next.js", "WordPress", "Hotjar", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "TOOLS WE USE",
  freeAuditBadge: "Free Website Audit Included",
};

const AnatomySection = () => (
  <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }} />
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="badge mb-6">Anatomy</span>
        <h2 className="font-black text-white" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: "20px" }}>The anatomy of a website that converts</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: "960px", margin: "0 auto" }}>
        {[
          { num: "\u2460", title: "Hero with a clear value proposition", desc: "The first section tells in 5 seconds: who you are, who you serve, what unique benefit you offer. Visible CTA above the fold." },
          { num: "\u2461", title: "Social proof", desc: "Real testimonials with photos, demonstrable numbers (50+ clients, 98% satisfaction), recognizable client logos." },
          { num: "\u2462", title: "Optimized forms", desc: "Short forms (3-5 fields), strategically placed, with actionable CTAs: not 'Submit', but 'Get a free quote'." },
          { num: "\u2463", title: "Dedicated service pages", desc: "Each service on its own page, with clear benefits, work process, FAQ, and a specific CTA." },
          { num: "\u2464", title: "Loading speed under 2s", desc: "Every extra second decreases conversions by 7%. WebP images, premium hosting, optimized code." },
          { num: "\u2465", title: "Complete tracking and analytics", desc: "Google Analytics 4, heatmaps, session recordings. You know exactly where visitors leave and why." },
        ].map((item) => (
          <div key={item.num} style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "28px" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{item.num}</div>
            <h3 className="font-bold text-white" style={{ fontSize: "1rem", marginBottom: "8px" }}>{item.title}</h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function LeadGenEnPage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <ServicePageTemplate
          data={data}
          heroRightSlot={
            <AdsDashboardCard
              emoji="💡"
              title="Lead Gen Site Conversion"
              date="October 2025"
              metrics={[
                { label: "Conversion rate", animated: { target: 3.8, decimals: 1, suffix: "%" }, badge: { text: "↑ 380%", positive: true } },
                { label: "Leads/month", animated: { target: 47 }, badge: { text: "↑ 156%", positive: true } },
                { label: "Cost per lead", animated: { target: 42, suffix: "€" }, badge: { text: "↓ 42%", positive: false } },
              ]}
              barPercent={88}
              barLabel="Monthly goal reached"
              status="LIVE PageSpeed 96/100"
              badge1="0.8% → 3.8% conversion rate"
              badge2="IT Consulting, Romania"
            />
          }
          afterHeroSlot={
            <>
              <AdsTrustBar items={[
                { stat: "PageSpeed 90+", label: "guaranteed at delivery" },
                { stat: "4-6", label: "weeks delivery time" },
                { stat: "50+", label: "websites delivered" },
                { stat: "35%", label: "average conversion increase" },
                { stat: "24/7", label: "post-launch support" },
              ]} />
              <AdsBeforeAfter
                title="Real results Before and after Nesco Digital"
                beforeLabel="Before"
                afterLabel="After Nesco"
                before={[
                  { label: "Conversion rate", display: "0.8%" },
                  { label: "Leads/month", display: "18" },
                  { label: "Loading time", display: "6.2s" },
                  { label: "PageSpeed Score", display: "42/100" },
                  { label: "Mobile experience", display: "disastrous" },
                  { label: "Cost per lead", display: "145€" },
                ]}
                after={[
                  { label: "Conversion rate", display: "3.8%", animate: { target: 3.8, decimals: 1, suffix: "%" } },
                  { label: "Leads/month", display: "47", animate: { target: 47 } },
                  { label: "Loading time", display: "1.4s" },
                  { label: "PageSpeed Score", display: "96/100" },
                  { label: "Mobile experience", display: "perfect" },
                  { label: "Cost per lead", display: "42€", animate: { target: 42, suffix: "€" } },
                ]}
                source="IT Consulting, Romania 60 days"
              />
              <AdsComparison
                badLabel="Classic presentation website"
                goodLabel="Lead generation website"
                bad={[
                  "Home page with generic company text",
                  "One contact form on the Contact page",
                  "No CTA above the fold",
                  "Missing testimonials and social proof",
                  "Loading time 4-8 seconds",
                  "No proper tracking and analytics",
                ]}
                good={[
                  "Hero with clear value proposition and prominent CTA",
                  "Forms on every service page",
                  "Visible CTA above the fold on all devices",
                  "Real testimonials, verifiable numbers, case studies",
                  "PageSpeed 90+ on desktop and mobile",
                  "GA4 + heatmaps + session recordings",
                ]}
              />
              <AnatomySection />
              <AdsTimeline
                title="Our process in 6 weeks"
                phases={[
                  {
                    emoji: "🔍",
                    range: "Weeks 1-2",
                    title: "Audit & Strategy",
                    color: "#56db84",
                    items: [
                      "Current site audit and competitive analysis",
                      "Define ICP and ideal customer journey",
                      "Conversion strategy and site architecture",
                      "Design brief and wireframes",
                    ],
                  },
                  {
                    emoji: "🎨",
                    range: "Weeks 3-4",
                    title: "Design & Copywriting",
                    color: "#60a5fa",
                    items: [
                      "Full design in Figma, approved by you",
                      "Conversion-optimized copywriting",
                      "Integrated testimonials and social proof",
                      "Mobile-first approach",
                    ],
                  },
                  {
                    emoji: "🚀",
                    range: "Weeks 5-6",
                    title: "Development & Launch",
                    color: "#a78bfa",
                    items: [
                      "Next.js or WordPress development",
                      "PageSpeed optimized: 90+ guaranteed",
                      "Complete tracking: GA4 + Hotjar",
                      "Launch + usage training",
                    ],
                  },
                ]}
              />
              <LeadGenCalculator />
            </>
          }
        />
      </main>
      <Footer locale="en" />
      <AdsStickyBar title="Want a website that generates leads?" cta="Free audit" href="/en/lets-talk/" />
    </>
  );
}

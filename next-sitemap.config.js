/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nescodigital.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  trailingSlash: true,
  changefreq: "weekly",
  priority: 0.7,

  // Custom transform to set priorities
  transform: async (config, path) => {
    // Homepages — highest priority
    if (["/" , "/en/", "/ge/"].includes(path)) {
      return { loc: path, changefreq: "weekly", priority: 1.0, lastmod: new Date().toISOString() };
    }
    // Growth Sprint pages — high priority (new content)
    if (path.includes("growth-sprint")) {
      return { loc: path, changefreq: "weekly", priority: 0.95, lastmod: new Date().toISOString() };
    }
    // Service pages
    if (
      path.includes("google") ||
      path.includes("facebook") ||
      path.includes("e-commerce") ||
      path.includes("magazine-online") ||
      path.includes("lead-generation") ||
      path.includes("seo") ||
      path.includes("cro")
    ) {
      return { loc: path, changefreq: "weekly", priority: 0.85, lastmod: new Date().toISOString() };
    }
    // About/Contact pages
    if (path.includes("about") || path.includes("lets-talk") || path.includes("contact") || path.includes("lass-uns-reden")) {
      return { loc: path, changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString() };
    }
    // Default
    return { loc: path, changefreq: "weekly", priority: 0.7, lastmod: new Date().toISOString() };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
  },

  // Exclude internal Next.js routes
  exclude: ["/api/*", "/_next/*", "/404", "/500"],
};

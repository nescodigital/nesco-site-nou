import { BetaAnalyticsDataClient } from "@google-analytics/data";

// ─────────────────────────────────────────────────────────────
// Google Analytics 4 Data API
//
// Env vars needed:
//   GA4_PROPERTY_ID      — numeric property ID (not G-xxx)
//   GA_CLIENT_EMAIL      — service account email
//   GA_PRIVATE_KEY       — service account private key (PEM)
// ─────────────────────────────────────────────────────────────

let client: BetaAnalyticsDataClient | null = null;

function getClient(): BetaAnalyticsDataClient | null {
  if (client) return client;
  const email = process.env.GA_CLIENT_EMAIL;
  const key = process.env.GA_PRIVATE_KEY;
  if (!email || !key) return null;
  client = new BetaAnalyticsDataClient({
    credentials: {
      client_email: email,
      private_key: key.replace(/\\n/g, "\n"),
    },
  });
  return client;
}

function getPropertyId(): string | null {
  return process.env.GA4_PROPERTY_ID || null;
}

export interface DailyStats {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
}

export interface GA4AnalyticsData {
  daily: DailyStats[];
  totalPageViews: number;
  totalUniqueVisitors: number;
  avgPageViewsPerDay: number;
  todayPageViews: number;
  todayUniqueVisitors: number;
  topPages: { path: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
}

/** Fetch analytics data from GA4 for the last N days */
export async function getGA4Analytics(days = 30): Promise<GA4AnalyticsData | null> {
  const c = getClient();
  const propertyId = getPropertyId();
  if (!c || !propertyId) return null;

  const startDate = `${days}daysAgo`;
  const endDate = "today";

  // Run 3 queries in parallel: daily stats, top pages, top referrers
  const [dailyResponse, pagesResponse, referrersResponse] = await Promise.all([
    // Daily page views + users
    c.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: "date" }],
      metrics: [
        { name: "screenPageViews" },
        { name: "activeUsers" },
      ],
      orderBys: [{ dimension: { dimensionName: "date", orderType: "ALPHANUMERIC" } }],
    }),
    // Top pages
    c.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "screenPageViews" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 15,
    }),
    // Top referrers
    c.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: "sessionSource" }],
      metrics: [{ name: "sessions" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 10,
    }),
  ]);

  // Parse daily stats
  const daily: DailyStats[] = [];
  let totalPageViews = 0;
  let totalUniqueVisitors = 0;

  const todayStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");

  for (const row of dailyResponse[0].rows || []) {
    const rawDate = row.dimensionValues?.[0]?.value || "";
    const date = `${rawDate.slice(0, 4)}-${rawDate.slice(4, 6)}-${rawDate.slice(6, 8)}`;
    const pv = Number(row.metricValues?.[0]?.value) || 0;
    const uv = Number(row.metricValues?.[1]?.value) || 0;
    daily.push({ date, pageViews: pv, uniqueVisitors: uv });
    totalPageViews += pv;
    totalUniqueVisitors += uv;
  }

  const todayStats = daily.find((d) => d.date === todayStr.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"))
    || daily[daily.length - 1]
    || { pageViews: 0, uniqueVisitors: 0 };

  // Parse top pages
  const topPages = (pagesResponse[0].rows || []).map((row) => ({
    path: row.dimensionValues?.[0]?.value || "",
    count: Number(row.metricValues?.[0]?.value) || 0,
  }));

  // Parse top referrers
  const topReferrers = (referrersResponse[0].rows || []).map((row) => ({
    referrer: row.dimensionValues?.[0]?.value || "(direct)",
    count: Number(row.metricValues?.[0]?.value) || 0,
  }));

  return {
    daily,
    totalPageViews,
    totalUniqueVisitors,
    avgPageViewsPerDay: days > 0 ? Math.round(totalPageViews / days) : 0,
    todayPageViews: todayStats.pageViews,
    todayUniqueVisitors: todayStats.uniqueVisitors,
    topPages,
    topReferrers,
  };
}

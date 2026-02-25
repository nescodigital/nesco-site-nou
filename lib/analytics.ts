import { Redis } from "@upstash/redis";

// ─────────────────────────────────────────────────────────────
// Lightweight self-hosted analytics — powered by Upstash Redis
// Free tier: 10 000 commands/day, 256 MB storage
//
// Key structure:
//   nd:pv:{YYYY-MM-DD}     → string (INCR)   — daily page views
//   nd:uv:{YYYY-MM-DD}     → HyperLogLog     — unique visitors
//   nd:pages:{YYYY-MM-DD}  → sorted set       — path → count
//   nd:refs:{YYYY-MM-DD}   → sorted set       — referrer → count
// ─────────────────────────────────────────────────────────────

let redis: Redis | null = null;

function getRedis(): Redis | null {
  if (redis) return redis;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  redis = new Redis({ url, token });
  return redis;
}

function dateKey(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

/** Record a single page view */
export async function trackPageView(opts: {
  path: string;
  referrer?: string;
  visitorId: string;
}): Promise<boolean> {
  const r = getRedis();
  if (!r) return false;

  const day = dateKey();
  const { path, referrer, visitorId } = opts;

  // Clean referrer: keep just the hostname
  let refHost = "direct";
  if (referrer) {
    try {
      const u = new URL(referrer);
      if (!u.hostname.includes("nescodigital.com")) {
        refHost = u.hostname.replace(/^www\./, "");
      } else {
        refHost = ""; // internal navigation, skip
      }
    } catch {
      refHost = "";
    }
  }

  const pipeline = r.pipeline();
  pipeline.incr(`nd:pv:${day}`);
  pipeline.pfadd(`nd:uv:${day}`, visitorId);
  pipeline.zincrby(`nd:pages:${day}`, 1, path);
  if (refHost) {
    pipeline.zincrby(`nd:refs:${day}`, 1, refHost);
  }
  await pipeline.exec();
  return true;
}

export interface DailyStats {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
}

export interface AnalyticsData {
  daily: DailyStats[];
  totalPageViews: number;
  totalUniqueVisitors: number;
  avgPageViewsPerDay: number;
  todayPageViews: number;
  todayUniqueVisitors: number;
  topPages: { path: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
}

/** Fetch aggregated analytics for the last N days */
export async function getAnalyticsData(days = 30): Promise<AnalyticsData | null> {
  const r = getRedis();
  if (!r) return null;

  const dates: string[] = [];
  for (let i = 0; i < days; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(dateKey(d));
  }

  // Fetch daily page views + unique visitors in a pipeline
  const pvPipeline = r.pipeline();
  for (const d of dates) {
    pvPipeline.get(`nd:pv:${d}`);
    pvPipeline.pfcount(`nd:uv:${d}`);
  }
  const pvResults = await pvPipeline.exec();

  const daily: DailyStats[] = [];
  let totalPageViews = 0;
  let totalUniqueVisitors = 0;

  for (let i = 0; i < dates.length; i++) {
    const pv = Number(pvResults[i * 2]) || 0;
    const uv = Number(pvResults[i * 2 + 1]) || 0;
    daily.push({ date: dates[i], pageViews: pv, uniqueVisitors: uv });
    totalPageViews += pv;
    totalUniqueVisitors += uv;
  }

  // Reverse so oldest first
  daily.reverse();

  const today = dateKey();

  // Fetch top pages & referrers (aggregate last N days — use today for quick view)
  // For top pages/referrers, aggregate last 7 days for relevance
  const aggDates = dates.slice(0, 7);
  const aggPipeline = r.pipeline();
  for (const d of aggDates) {
    aggPipeline.zrange(`nd:pages:${d}`, 0, -1, { withScores: true, rev: true });
    aggPipeline.zrange(`nd:refs:${d}`, 0, -1, { withScores: true, rev: true });
  }
  const aggResults = await aggPipeline.exec();

  // Merge top pages
  const pageMap = new Map<string, number>();
  const refMap = new Map<string, number>();

  for (let i = 0; i < aggDates.length; i++) {
    const pages = aggResults[i * 2] as (string | number)[];
    const refs = aggResults[i * 2 + 1] as (string | number)[];

    if (Array.isArray(pages)) {
      for (let j = 0; j < pages.length; j += 2) {
        const path = String(pages[j]);
        const count = Number(pages[j + 1]) || 0;
        pageMap.set(path, (pageMap.get(path) || 0) + count);
      }
    }

    if (Array.isArray(refs)) {
      for (let j = 0; j < refs.length; j += 2) {
        const ref = String(refs[j]);
        const count = Number(refs[j + 1]) || 0;
        refMap.set(ref, (refMap.get(ref) || 0) + count);
      }
    }
  }

  const topPages = [...pageMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([path, count]) => ({ path, count }));

  const topReferrers = [...refMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([referrer, count]) => ({ referrer, count }));

  const todayStats = daily.find((d) => d.date === today);

  return {
    daily,
    totalPageViews,
    totalUniqueVisitors,
    avgPageViewsPerDay: days > 0 ? Math.round(totalPageViews / days) : 0,
    todayPageViews: todayStats?.pageViews || 0,
    todayUniqueVisitors: todayStats?.uniqueVisitors || 0,
    topPages,
    topReferrers,
  };
}

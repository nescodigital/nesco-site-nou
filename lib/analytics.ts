import { Redis } from "@upstash/redis";

// ─────────────────────────────────────────────────────────────
// Lead Storage — powered by Upstash Redis (optional)
// Falls back gracefully when Redis is not configured.
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
  return d.toISOString().slice(0, 10);
}

export interface StoredLead {
  id: string;
  type: "contact" | "newsletter" | "growth-sprint";
  name: string;
  email: string;
  company?: string;
  phone?: string;
  source?: string;
  services?: string;
  budget?: string;
  message?: string;
  date: string;
}

/** Store a new lead in Redis */
export async function storeLead(lead: Omit<StoredLead, "id" | "date">): Promise<boolean> {
  const r = getRedis();
  if (!r) return false;

  const entry: StoredLead = {
    ...lead,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
  };

  const pipeline = r.pipeline();
  pipeline.lpush("nd:leads", JSON.stringify(entry));
  pipeline.ltrim("nd:leads", 0, 199);
  pipeline.incr(`nd:leads:count:${dateKey()}`);
  await pipeline.exec();
  return true;
}

/** Fetch recent leads */
export async function getRecentLeads(limit = 20): Promise<StoredLead[]> {
  const r = getRedis();
  if (!r) return [];

  const raw = await r.lrange("nd:leads", 0, limit - 1);
  return raw.map((item) => {
    if (typeof item === "string") return JSON.parse(item) as StoredLead;
    return item as StoredLead;
  });
}

/** Get total leads count */
export async function getLeadsStats(): Promise<{ total: number; today: number; thisWeek: number }> {
  const r = getRedis();
  if (!r) return { total: 0, today: 0, thisWeek: 0 };

  const total = await r.llen("nd:leads");

  const pipeline = r.pipeline();
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    pipeline.get(`nd:leads:count:${dateKey(d)}`);
  }
  const weekResults = await pipeline.exec();

  const today = Number(weekResults[0]) || 0;
  const thisWeek = weekResults.reduce<number>((sum, v) => sum + (Number(v) || 0), 0);

  return { total, today, thisWeek };
}

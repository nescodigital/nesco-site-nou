import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import type { StoredLead } from "@/lib/analytics";

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const { status, notes, industry, dealValue } = body as {
    status?: "nou" | "contactat" | "convertit";
    notes?: string;
    industry?: string;
    dealValue?: string;
  };

  const r = getRedis();
  if (!r) {
    return NextResponse.json({ error: "Redis not configured" }, { status: 500 });
  }

  const raw = await r.lrange("nd:leads", 0, -1);
  const leads: StoredLead[] = raw.map((item) =>
    typeof item === "string" ? JSON.parse(item) : (item as StoredLead)
  );

  const idx = leads.findIndex((l) => l.id === id);
  if (idx === -1) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  if (status !== undefined) leads[idx].status = status;
  if (notes !== undefined) leads[idx].notes = notes;
  if (industry !== undefined) leads[idx].industry = industry;
  if (dealValue !== undefined) leads[idx].dealValue = dealValue;

  // Rewrite the entire list
  const pipeline = r.pipeline();
  pipeline.del("nd:leads");
  for (const lead of leads) {
    pipeline.rpush("nd:leads", JSON.stringify(lead));
  }
  await pipeline.exec();

  return NextResponse.json({ lead: leads[idx] });
}

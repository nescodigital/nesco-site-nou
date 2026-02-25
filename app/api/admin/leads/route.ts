import { NextRequest, NextResponse } from "next/server";
import { getRecentLeads, getLeadsStats } from "@/lib/analytics";

export async function GET(req: NextRequest) {
  const limit = Number(req.nextUrl.searchParams.get("limit") || "20");

  const [leads, stats] = await Promise.all([
    getRecentLeads(Math.min(limit, 50)),
    getLeadsStats(),
  ]);

  return NextResponse.json({ leads, stats }, {
    headers: {
      "Cache-Control": "private, max-age=60, stale-while-revalidate=120",
    },
  });
}

import { NextRequest, NextResponse } from "next/server";
import { getAnalyticsData } from "@/lib/analytics";

export async function GET(req: NextRequest) {
  const days = Number(req.nextUrl.searchParams.get("days") || "30");
  const data = await getAnalyticsData(Math.min(days, 90));

  if (!data) {
    return NextResponse.json(
      { error: "Analytics not configured. Add UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN." },
      { status: 503 }
    );
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "private, max-age=300, stale-while-revalidate=600",
    },
  });
}

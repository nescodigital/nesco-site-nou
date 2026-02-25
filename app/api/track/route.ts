import { NextRequest, NextResponse } from "next/server";
import { trackPageView } from "@/lib/analytics";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { path, referrer, visitorId } = await req.json();

    if (!path || typeof path !== "string") {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // Skip admin pages
    if (path.startsWith("/admin")) {
      return NextResponse.json({ ok: true });
    }

    await trackPageView({
      path,
      referrer: referrer || "",
      visitorId: visitorId || "anon",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

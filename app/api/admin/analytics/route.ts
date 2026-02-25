import { NextRequest, NextResponse } from "next/server";
import { getGA4Analytics } from "@/lib/ga4";

export async function GET(req: NextRequest) {
  const days = Number(req.nextUrl.searchParams.get("days") || "30");

  try {
    const data = await getGA4Analytics(Math.min(days, 90));

    if (!data) {
      return NextResponse.json(
        { error: "GA4 nu e configurat. Adauga GA4_PROPERTY_ID, GA_CLIENT_EMAIL si GA_PRIVATE_KEY." },
        { status: 503 }
      );
    }

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "private, max-age=300, stale-while-revalidate=600",
      },
    });
  } catch (err) {
    console.error("GA4 API error:", err);
    return NextResponse.json(
      { error: "Eroare la conectarea cu GA4. Verifica credentialele." },
      { status: 500 }
    );
  }
}

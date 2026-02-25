import { NextResponse } from "next/server";
import { getRecentLeads } from "@/lib/analytics";

function escCsv(val: string | undefined): string {
  if (!val) return "";
  if (val.includes(",") || val.includes('"') || val.includes("\n")) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}

export async function GET() {
  const leads = await getRecentLeads(500);

  const headers = [
    "Data", "Tip", "Nume", "Email", "Companie", "Telefon",
    "Sector activitate", "Servicii", "Buget", "Sursa", "Canal (utm_source)",
    "Medium (utm_medium)", "Campanie", "Referrer", "Landing Page",
    "Status", "Suma finala", "Note",
  ];

  const rows = leads.map((l) => [
    l.date,
    l.type,
    l.name,
    l.email,
    l.company,
    l.phone,
    l.industry,
    l.services,
    l.budget,
    l.source,
    l.utm_source,
    l.utm_medium,
    l.utm_campaign,
    l.referrer,
    l.landingPage,
    l.status || "nou",
    l.dealValue,
    l.notes,
  ].map(escCsv).join(","));

  const csv = [headers.join(","), ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}

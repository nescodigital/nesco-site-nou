import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { first_name, last_name, company, email, phone, website, services, budget, locale, source } = body;

    const companyDisplay = company || "Necunoscută";
    const subject = `Cerere nouă de ofertă - ${companyDisplay}`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <div style="background: #050505; padding: 24px 32px;">
      <h1 style="color: #56db84; margin: 0; font-size: 20px;">Cerere nouă de ofertă</h1>
      <p style="color: rgba(255,255,255,0.5); margin: 6px 0 0; font-size: 14px;">via nescodigital.com</p>
    </div>
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 160px; font-size: 14px;">Prenume</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 500;">${first_name || "—"}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Nume</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 500;">${last_name || "—"}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Companie</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 500;">${company || "—"}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; font-weight: 500;"><a href="mailto:${email}" style="color: #56db84;">${email}</a></td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Telefon</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 500;">${phone || "—"}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Website</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; font-weight: 500;">${website ? `<a href="${website}" style="color: #56db84;">${website}</a>` : "—"}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px;">Servicii</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 14px; font-weight: 500;">${services || "—"}</td></tr>
        <tr><td style="padding: 10px 0; ${source ? "border-bottom: 1px solid #f0f0f0;" : ""} color: #666; font-size: 14px;">Buget lunar</td><td style="padding: 10px 0; ${source ? "border-bottom: 1px solid #f0f0f0;" : ""} color: #111; font-size: 14px; font-weight: 500;">${budget || "—"}</td></tr>
        ${source ? `<tr><td style="padding: 10px 0; color: #666; font-size: 14px;">Sursă</td><td style="padding: 10px 0; color: #56db84; font-size: 14px; font-weight: 500;">${source}</td></tr>` : ""}
      </table>
    </div>
    <div style="background: #f9f9f9; padding: 16px 32px; border-top: 1px solid #f0f0f0;">
      <p style="margin: 0; color: #999; font-size: 12px;">Trimis de pe ${locale === "en" ? "/en/lets-talk" : locale === "de" ? "/ge/lass-uns-reden" : "/contact"} · nescodigital.com</p>
    </div>
  </div>
</body>
</html>`;

    const { error } = await resend.emails.send({
      from: "Nesco Digital <onboarding@resend.dev>",
      to: ["hello@nescodigital.com"],
      replyTo: email,
      subject,
      html: htmlBody,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

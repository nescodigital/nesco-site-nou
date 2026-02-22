import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Datenschutzerklärung | Nesco Digital",
  description: "Erfahren Sie, wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen. Vollständige DSGVO-Konformität.",
  path: "/ge/datenschutz/",
  routeKey: "privacy",
});

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    style={{
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#56db84",
      letterSpacing: "-0.01em",
      marginTop: "48px",
      marginBottom: "16px",
    }}
  >
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "16px" }}>
    {children}
  </p>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, paddingLeft: "8px" }}>
    {children}
  </li>
);

export default function DatenschutzPage() {
  return (
    <>
      <Header locale="de" />
      <main style={{ backgroundColor: "#050505" }}>
        <div style={{ paddingTop: "140px", paddingBottom: "120px" }}>
          <div className="page-container">
            <div style={{ maxWidth: "740px" }}>

              <span className="badge mb-6">Legal</span>
              <h1
                className="font-black text-white"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  marginTop: "20px",
                  marginBottom: "12px",
                }}
              >
                Datenschutzerklärung
              </h1>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.25)", marginBottom: "64px" }}>
                Zuletzt aktualisiert: Februar 2025
              </p>

              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "linear-gradient(90deg, rgba(86,219,132,0.3), transparent)",
                  marginBottom: "48px",
                }}
              />

              <H2>1. Wer wir sind</H2>
              <P>
                Nesco Digital („wir", „uns") ist ein Wachstums- und Operationspartner für digitale Unternehmen
                mit Sitz in Rumänien. Bei datenschutzbezogenen Fragen erreichen Sie uns unter{" "}
                <a href="mailto:hello@nescodigital.com" style={{ color: "#56db84", textDecoration: "none" }}>
                  hello@nescodigital.com
                </a>.
              </P>

              <H2>2. Welche Daten wir erheben</H2>
              <P><strong style={{ color: "rgba(255,255,255,0.8)" }}>Über das Kontaktformular:</strong></P>
              <P>
                Name, E-Mail-Adresse, Nachrichteninhalt. Diese Daten werden ausschließlich zur Beantwortung
                Ihrer Anfrage verwendet.
              </P>
              <P><strong style={{ color: "rgba(255,255,255,0.8)" }}>Über den Newsletter:</strong></P>
              <P>
                E-Mail-Adresse und optional bei der Anmeldung ausgewählte Inhaltspräferenzen. Wir nutzen diese
                Daten, um relevante Inhalte zu Marketing, Wachstum und digitalem Betrieb zu versenden.
              </P>
              <P><strong style={{ color: "rgba(255,255,255,0.8)" }}>Über Cookies und Analytics:</strong></P>
              <P>
                Wir verwenden Google Analytics, Meta Pixel und TikTok Pixel zur Messung der
                Werbekampagnenleistung und zum Verständnis des Besucherverhaltens. Diese Dienste erheben
                anonymisierte Daten über aufgerufene Seiten, Verweildauer, ungefähren Standort und Gerät.
                Die Erhebung erfolgt nur nach Ihrer ausdrücklichen Einwilligung über das Cookie-Banner.
              </P>

              <H2>3. Warum wir diese Daten erheben</H2>
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "16px",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                  <thead>
                    <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                      {["Daten", "Rechtsgrundlage", "Zweck"].map((h) => (
                        <th
                          key={h}
                          style={{
                            padding: "12px 16px",
                            textAlign: "left",
                            color: "rgba(255,255,255,0.4)",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Kontaktformular", "Berechtigtes Interesse", "Beantwortung der Anfrage"],
                      ["Newsletter", "Einwilligung", "Marketingkommunikation"],
                      ["Analytics & Pixel", "Einwilligung", "Kampagnenmessung, Website-Verbesserung"],
                    ].map(([daten, basis, zweck], i) => (
                      <tr key={i} style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.6)" }}>{daten}</td>
                        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.6)" }}>{basis}</td>
                        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.6)" }}>{zweck}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <H2>4. Wie lange wir Daten speichern</H2>
              <P>
                Kontaktformulardaten werden maximal 12 Monate ab der letzten Interaktion gespeichert.
                Newsletter-Daten werden bis zur Abmeldung gespeichert. Analytics-Daten sind anonymisiert
                und aggregiert.
              </P>

              <H2>5. Mit wem wir Daten teilen</H2>
              <P>
                Wir verkaufen oder vermieten Ihre Daten nicht. Die Daten werden von folgenden Dienstleistern
                ausschließlich für die genannten Zwecke verarbeitet:
              </P>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Google Analytics, Website-Analytics",
                  "Meta (Facebook), Werbekampagnenmessung über Meta Pixel",
                  "TikTok, Werbekampagnenmessung über TikTok Pixel",
                ].map((item) => (
                  <Li key={item}>
                    <span style={{ color: "#56db84", marginRight: "10px" }}>→</span>{item}
                  </Li>
                ))}
              </ul>
              <P>
                Alle Anbieter sind DSGVO-konform und verarbeiten Daten auf Basis von
                Auftragsverarbeitungsverträgen (AVV).
              </P>

              <H2>6. Ihre Rechte</H2>
              <P>Gemäß DSGVO haben Sie das Recht auf:</P>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Auskunft über die von uns gespeicherten Daten",
                  "Berichtigung unrichtiger Daten",
                  `Löschung Ihrer Daten („Recht auf Vergessenwerden")`,
                  "Widerruf der Einwilligung jederzeit und ohne Konsequenzen",
                  "Datenübertragbarkeit",
                  "Beschwerde bei der zuständigen Aufsichtsbehörde in Ihrem Land",
                ].map((item) => (
                  <Li key={item}>
                    <span style={{ color: "#56db84", marginRight: "10px" }}>→</span>{item}
                  </Li>
                ))}
              </ul>
              <P>
                Für alle Anfragen:{" "}
                <a href="mailto:hello@nescodigital.com" style={{ color: "#56db84", textDecoration: "none" }}>
                  hello@nescodigital.com
                </a>. Wir antworten innerhalb von 30 Tagen.
              </P>

              <H2>7. Cookies</H2>
              <P>Wir verwenden zwei Arten von Cookies:</P>
              <P>
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Essenziell</strong>, für den Betrieb der
                Website erforderlich, keine Einwilligung notwendig.
              </P>
              <P>
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Analytics &amp; Marketing</strong>, Google
                Analytics, Meta Pixel und TikTok Pixel, nur nach Ihrer Einwilligung aktiviert. Sie können Ihre
                Präferenzen jederzeit über das Cookie-Banner ändern.
              </P>

              <H2>8. Sicherheit</H2>
              <P>
                Daten werden über verschlüsselte Verbindungen (HTTPS) übertragen. Der Zugriff auf Kontaktdaten
                ist eingeschränkt und wird überwacht.
              </P>

              <H2>9. Änderungen</H2>
              <P>
                Wir behalten uns das Recht vor, diese Richtlinie zu aktualisieren. Wesentliche Änderungen werden
                Newsletter-Abonnenten per E-Mail mitgeteilt. Das Datum der letzten Aktualisierung ist oben in
                diesem Dokument angegeben.
              </P>

            </div>
          </div>
        </div>
      </main>
      <Footer locale="de" />
    </>
  );
}

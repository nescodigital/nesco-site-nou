import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Nutzungsbedingungen | Nesco Digital",
  description: "Nutzungsbedingungen für nescodigital.com.",
  path: "/ge/nutzungsbedingungen/",
  routeKey: "terms",
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

export default function NutzungsbedingungenPage() {
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
                Nutzungsbedingungen
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

              <H2>1. Annahme der Bedingungen</H2>
              <P>
                Durch den Zugriff auf und die Nutzung von nescodigital.com akzeptieren Sie automatisch diese
                Nutzungsbedingungen. Wenn Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht.
              </P>

              <H2>2. Über Nesco Digital</H2>
              <P>
                Nesco Digital ist ein Wachstums- und Operationspartner für digitale Unternehmen mit Sitz in
                Rumänien. Sie erreichen uns unter{" "}
                <a href="mailto:hello@nescodigital.com" style={{ color: "#56db84", textDecoration: "none" }}>
                  hello@nescodigital.com
                </a>.
              </P>

              <H2>3. Nutzung der Website</H2>
              <P>
                nescodigital.com ist eine Präsentationswebsite für unsere Dienstleistungen. Die veröffentlichten
                Inhalte dienen ausschließlich Informationszwecken. Wir behalten uns das Recht vor, die Website
                jederzeit ohne vorherige Ankündigung zu ändern, auszusetzen oder zu schließen. Die Nutzung der
                Website für illegale Zwecke, die Übermittlung schädlicher Inhalte oder der Versuch eines
                unbefugten Zugriffs auf unsere Systeme ist strengstens untersagt.
              </P>

              <H2>4. Geistiges Eigentum</H2>
              <P>
                Alle Inhalte dieser Website , Texte, Grafiken, Logos, visuelle Struktur , sind Eigentum von
                Nesco Digital oder seiner Partner und durch das Urheberrecht geschützt. Vervielfältigung oder
                Nutzung ohne unsere schriftliche Zustimmung ist untersagt.
              </P>

              <H2>5. Dienstleistungen und Verpflichtungen</H2>
              <P>
                Die auf dieser Website dargestellten Informationen beschreiben in allgemeinen Begriffen die
                angebotenen Dienstleistungsarten. Die genauen Bedingungen einer Zusammenarbeit werden durch einen
                separaten, von beiden Parteien unterzeichneten Vertrag festgelegt. Nichts auf dieser Website
                stellt ein Vertragsangebot dar.
              </P>

              <H2>6. Digitale Produkte und Dienstleistungen</H2>
              <P>
                Sollten wir in Zukunft Produkte oder Dienstleistungen anbieten, die direkt über die Website
                erworben werden können, werden die spezifischen Liefer-, Zahlungs- und Rückgabebedingungen vor
                Abschluss einer Transaktion klar kommuniziert.
              </P>

              <H2>7. Haftungsbeschränkung</H2>
              <P>
                Nesco Digital haftet nicht für direkte oder indirekte Schäden, die aus der Nutzung oder
                Nichtnutzbarkeit dieser Website entstehen. Wir garantieren keine unterbrechungsfreie oder
                fehlerfreie Verfügbarkeit.
              </P>

              <H2>8. Externe Links</H2>
              <P>
                Die Website kann Links zu Websites Dritter enthalten. Wir haben keine Kontrolle über deren
                Inhalte und übernehmen keine Verantwortung dafür.
              </P>

              <H2>9. Änderungen</H2>
              <P>
                Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu aktualisieren. Die weitere Nutzung
                der Website nach Veröffentlichung von Änderungen gilt als Zustimmung zu den neuen Bedingungen.
              </P>

              <H2>10. Anwendbares Recht</H2>
              <P>
                Diese Bedingungen unterliegen rumänischem Recht. Streitigkeiten werden von den zuständigen
                Gerichten in Rumänien beigelegt.
              </P>

            </div>
          </div>
        </div>
      </main>
      <Footer locale="de" />
    </>
  );
}

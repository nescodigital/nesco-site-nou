import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Politică de Confidențialitate | Nesco Digital",
  description: "Află cum colectăm, folosim și protejăm datele tale personale. Conformitate GDPR completă.",
  path: "/politica-de-confidentialitate/",
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

export default function PoliticaConfidentialitateePage() {
  return (
    <>
      <Header locale="ro" />
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
                Politică de Confidențialitate
              </h1>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.25)", marginBottom: "64px" }}>
                Ultima actualizare: februarie 2025
              </p>

              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "linear-gradient(90deg, rgba(86,219,132,0.3), transparent)",
                  marginBottom: "48px",
                }}
              />

              <H2>1. Cine suntem</H2>
              <P>
                Nesco Digital („noi", „nouă") este un partener de creștere și operațiuni pentru afaceri digitale,
                cu sediul în România. Pentru întrebări legate de confidențialitate, ne poți contacta la{" "}
                <a href="mailto:hello@nescodigital.com" style={{ color: "#56db84", textDecoration: "none" }}>
                  hello@nescodigital.com
                </a>.
              </P>

              <H2>2. Ce date colectăm</H2>
              <P><strong style={{ color: "rgba(255,255,255,0.8)" }}>Prin formularul de contact:</strong></P>
              <P>
                Nume, adresă de email, mesajul transmis. Aceste date sunt folosite exclusiv pentru a răspunde solicitării tale.
              </P>
              <P><strong style={{ color: "rgba(255,255,255,0.8)" }}>Prin newsletter:</strong></P>
              <P>
                Adresa de email și, opțional, preferințele de conținut selectate la abonare. Folosim aceste date
                pentru a trimite conținut relevant despre marketing, creștere și operațiuni digitale.
              </P>
              <P><strong style={{ color: "rgba(255,255,255,0.8)" }}>Prin cookies și analytics:</strong></P>
              <P>
                Folosim Google Analytics, Meta Pixel și TikTok Pixel pentru măsurarea performanței campaniilor
                publicitare și înțelegerea comportamentului vizitatorilor. Aceste servicii colectează date
                anonimizate despre paginile accesate, timp petrecut, locație aproximativă și dispozitiv.
                Colectarea are loc doar după acordul tău explicit prin bannerul de cookies.
              </P>

              <H2>3. De ce colectăm aceste date</H2>
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
                      {["Date", "Temei legal", "Scop"].map((h) => (
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
                      ["Formular contact", "Interes legitim", "Răspuns la solicitare"],
                      ["Newsletter", "Consimțământ", "Comunicări de marketing"],
                      ["Analytics & Pixels", "Consimțământ", "Măsurare campanii, îmbunătățirea site-ului"],
                    ].map(([date, temei, scop], i) => (
                      <tr key={i} style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.6)" }}>{date}</td>
                        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.6)" }}>{temei}</td>
                        <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.6)" }}>{scop}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <H2>4. Cât timp păstrăm datele</H2>
              <P>
                Datele din formularul de contact sunt păstrate maximum 12 luni de la ultima interacțiune.
                Datele de newsletter sunt păstrate până la dezabonare. Datele analytics sunt anonimizate și agregate.
              </P>

              <H2>5. Cu cine partajăm datele</H2>
              <P>
                Nu vindem și nu închiriem datele tale. Datele sunt procesate de următorii furnizori de servicii,
                strict în scopurile menționate:
              </P>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Google Analytics, analytics site",
                  "Meta (Facebook), măsurare campanii publicitare prin Meta Pixel",
                  "TikTok, măsurare campanii publicitare prin TikTok Pixel",
                ].map((item) => (
                  <Li key={item}>
                    <span style={{ color: "#56db84", marginRight: "10px" }}>→</span>{item}
                  </Li>
                ))}
              </ul>
              <P>
                Toți furnizorii sunt conformi GDPR și procesează datele în baza unor acorduri de procesare
                a datelor (DPA).
              </P>

              <H2>6. Drepturile tale</H2>
              <P>Conform GDPR, ai dreptul să:</P>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Accesezi datele pe care le deținem despre tine",
                  "Rectifici datele incorecte",
                  `Ștergi datele („dreptul de a fi uitat")`,
                  "Retragi consimțământul oricând, fără consecințe",
                  "Portabilității datelor",
                  "Depui o plângere la autoritatea de supraveghere competentă din țara ta",
                ].map((item) => (
                  <Li key={item}>
                    <span style={{ color: "#56db84", marginRight: "10px" }}>→</span>{item}
                  </Li>
                ))}
              </ul>
              <P>
                Pentru orice solicitare:{" "}
                <a href="mailto:hello@nescodigital.com" style={{ color: "#56db84", textDecoration: "none" }}>
                  hello@nescodigital.com
                </a>. Răspundem în maximum 30 de zile.
              </P>

              <H2>7. Cookies</H2>
              <P>Folosim două tipuri de cookies:</P>
              <P>
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Esențiale</strong>, necesare funcționării
                site-ului, nu necesită consimțământ.
              </P>
              <P>
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Analytics &amp; Marketing</strong>, Google
                Analytics, Meta Pixel și TikTok Pixel, activate doar după acordul tău. Poți modifica preferințele
                oricând din bannerul de cookies.
              </P>

              <H2>8. Securitate</H2>
              <P>
                Datele sunt transmise prin conexiuni criptate (HTTPS). Accesul la datele de contact este
                restricționat și monitorizat.
              </P>

              <H2>9. Modificări</H2>
              <P>
                Ne rezervăm dreptul de a actualiza această politică. Modificările semnificative vor fi comunicate
                prin email abonaților newsletter. Data ultimei actualizări este afișată în partea de sus a documentului.
              </P>

            </div>
          </div>
        </div>
      </main>
      <Footer locale="ro" />
    </>
  );
}

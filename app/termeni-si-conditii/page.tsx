import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Termeni și Condiții | Nesco Digital",
  description: "Termenii și condițiile de utilizare a site-ului nescodigital.com.",
  path: "/termeni-si-conditii/",
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

export default function TermeniConditiiPage() {
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
                Termeni și Condiții
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

              <H2>1. Acceptarea termenilor</H2>
              <P>
                Prin accesarea și utilizarea site-ului nescodigital.com, accepți în mod automat acești Termeni și
                Condiții. Dacă nu ești de acord cu aceștia, te rugăm să nu utilizezi site-ul.
              </P>

              <H2>2. Despre Nesco Digital</H2>
              <P>
                Nesco Digital este un partener de creștere și operațiuni pentru afaceri digitale, cu sediul în
                România. Ne poți contacta la{" "}
                <a href="mailto:hello@nescodigital.com" style={{ color: "#56db84", textDecoration: "none" }}>
                  hello@nescodigital.com
                </a>.
              </P>

              <H2>3. Utilizarea site-ului</H2>
              <P>
                Site-ul nescodigital.com este un site de prezentare a serviciilor noastre. Conținutul publicat are
                scop informativ. Ne rezervăm dreptul de a modifica, suspenda sau închide site-ul oricând, fără
                notificare prealabilă. Este interzisă utilizarea site-ului în scopuri ilegale, pentru a transmite
                conținut dăunător sau pentru a încerca accesarea neautorizată a sistemelor noastre.
              </P>

              <H2>4. Proprietate intelectuală</H2>
              <P>
                Tot conținutul de pe acest site, texte, grafică, logo-uri, structură vizuală, este proprietatea
                Nesco Digital sau a partenerilor săi și este protejat de legislația privind drepturile de autor.
                Reproducerea sau utilizarea fără acordul nostru scris este interzisă.
              </P>

              <H2>5. Servicii și angajamente</H2>
              <P>
                Informațiile prezentate pe site descriu în termeni generali tipurile de servicii oferite. Termenii
                exacți ai oricărei colaborări sunt stabiliți prin contract separat, semnat de ambele părți. Nimic
                de pe acest site nu constituie o ofertă contractuală.
              </P>

              <H2>6. Produse și servicii digitale</H2>
              <P>
                În cazul în care vom oferi în viitor produse sau servicii achiziționate direct prin site, termenii
                specifici de livrare, plată și returnare vor fi comunicați clar înainte de finalizarea oricărei
                tranzacții.
              </P>

              <H2>7. Limitarea răspunderii</H2>
              <P>
                Nesco Digital nu este responsabil pentru daune directe sau indirecte rezultate din utilizarea sau
                imposibilitatea utilizării acestui site. Nu garantăm că site-ul va fi disponibil neîntrerupt sau
                lipsit de erori.
              </P>

              <H2>8. Link-uri externe</H2>
              <P>
                Site-ul poate conține link-uri către site-uri terțe. Nu avem control asupra conținutului acestora
                și nu ne asumăm responsabilitatea pentru ele.
              </P>

              <H2>9. Modificări</H2>
              <P>
                Ne rezervăm dreptul de a actualiza acești termeni oricând. Continuarea utilizării site-ului după
                publicarea modificărilor constituie acceptarea noilor termeni.
              </P>

              <H2>10. Legea aplicabilă</H2>
              <P>
                Acești termeni sunt guvernați de legislația română. Orice litigiu va fi soluționat de instanțele
                competente din România.
              </P>

            </div>
          </div>
        </div>
      </main>
      <Footer locale="ro" />
    </>
  );
}

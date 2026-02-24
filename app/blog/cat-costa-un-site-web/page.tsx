import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function ArticlePage() {
  return (
    <>
      <Header locale="ro" />
      <main style={{ backgroundColor: "#050505" }}>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "#050505",
            paddingTop: "140px",
            paddingBottom: "80px",
          }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%",
              right: "-10%",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div
            className="relative page-container"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            <span
              className="badge mb-4"
              style={{
                background: "rgba(168,85,247,0.10)",
                color: "#a855f7",
                border: "1px solid rgba(168,85,247,0.18)",
              }}
            >
              Web Design
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              22 Februarie 2026 &middot; 10 min citire
            </p>
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Cat Costa un Site Web in 2026?{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #a855f7 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ghid Complet de Preturi
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              De la landing page la aplicatii web complexe &mdash; preturile
              variaza de la 500&euro; la 100.000&euro;+. Afla exact cat ar
              trebui sa platesti si de ce.
            </p>
          </div>
        </section>

        {/* ── Article Content ── */}
        <article
          className="page-container"
          style={{ maxWidth: "720px", margin: "0 auto", paddingBottom: "80px" }}
        >
          {/* Intro */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                &bdquo;Cat costa un site web?&rdquo; &mdash; este intrebarea
                numarul unu pe care o primim de la antreprenori, start-up-uri si
                companii stabilite deopotriva. Raspunsul sincer este: depinde.
                Pretul unui site in 2026 poate varia de la{" "}
                <strong style={{ color: "#fff" }}>500&euro;</strong> pentru un
                landing page simplu pana la{" "}
                <strong style={{ color: "#fff" }}>100.000&euro;+</strong> pentru
                o aplicatie web complexa.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Diferenta enorma de pret nu e intamplatoare &mdash; depinde de
                tipul site-ului, complexitatea design-ului, functionalitatile
                necesare si cine il construieste. In acest ghid detaliem fiecare
                categorie de site, costurile reale din piata romaneasca si
                europeana, si costurile ascunse pe care majoritatea clientilor le
                descopera abia dupa semnarea contractului.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Factori care influenteaza pretul */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Factori care influenteaza pretul unui site web
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Inainte de a analiza preturile concrete, trebuie sa intelegi ce
                anume face un site sa coste 2.000&euro; sau 20.000&euro;. Iata
                factorii principali care determina bugetul final:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    title: "Tipul de website",
                    desc: "Un landing page cu o singura pagina e fundamental diferit de un magazin online cu 5.000 de produse. Complexitatea structurala este cel mai mare factor de cost.",
                  },
                  {
                    title: "Design: template vs. custom",
                    desc: "Un template pre-facut costa intre 50-200 EUR si se personalizeaza rapid. Un design custom, creat de la zero, porneste de la 1.500 EUR si poate ajunge la zeci de mii.",
                  },
                  {
                    title: "Numarul de pagini",
                    desc: "Fiecare pagina aditionala inseamna design, copywriting, optimizare SEO si testare. Un site de 5 pagini se face in zile, unul de 50 de pagini in luni.",
                  },
                  {
                    title: "Functionalitati speciale",
                    desc: "Sistem de rezervari, gateway de plata, integrare CRM, chat live, portal de clienti, dashboard-uri — fiecare adauga complexitate si cost.",
                  },
                  {
                    title: "Alegerea CMS-ului",
                    desc: "WordPress e cel mai accesibil ca pret. Shopify simplifica e-commerce-ul dar vine cu costuri lunare. Solutiile custom (Next.js, Laravel) ofera flexibilitate maxima dar necesita dezvoltatori specializati.",
                  },
                  {
                    title: "SEO si optimizare de performanta",
                    desc: "Un site rapid, optimizat pentru motoarele de cautare, necesita munca tehnica suplimentara: structura URL-urilor, meta tag-uri, schema markup, Core Web Vitals, compresie imagine.",
                  },
                  {
                    title: "Creare de continut",
                    desc: "Copywriting profesional, fotografie de produs, videoclipuri — continutul de calitate face diferenta intre un site care converteste si unul care doar exista.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Section: Tabel de preturi pe tip de site */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Tabel de preturi pe tip de site web
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Am compilat preturile medii din piata romaneasca si europeana
                pentru 2026, bazate pe experienta noastra si pe datele din
                industrie:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "640px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Tip de site", "Pret (EUR)", "Termen", "Ideal pentru"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #a855f7",
                              textAlign: "left",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                            }}
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Landing page",
                        "500 \u2013 2.000 \u20AC",
                        "1-2 saptamani",
                        "Campanii, lansari de produs",
                      ],
                      [
                        "Site de prezentare (5-10 pagini)",
                        "2.000 \u2013 5.000 \u20AC",
                        "3-6 saptamani",
                        "IMM-uri, servicii",
                      ],
                      [
                        "Site corporativ",
                        "5.000 \u2013 15.000 \u20AC",
                        "6-12 saptamani",
                        "Companii medii",
                      ],
                      [
                        "E-commerce (Shopify/WooCommerce)",
                        "3.000 \u2013 15.000 \u20AC",
                        "4-10 saptamani",
                        "Retail online",
                      ],
                      [
                        "E-commerce custom",
                        "10.000 \u2013 50.000+ \u20AC",
                        "12-24 saptamani",
                        "Cataloage mari",
                      ],
                      [
                        "Aplicatie web",
                        "15.000 \u2013 100.000+ \u20AC",
                        "12-40 saptamani",
                        "SaaS, platforme",
                      ],
                    ].map(([type, price, timeline, bestFor], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {type}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {price}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {timeline}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {bestFor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In RON, un site de prezentare bun porneste de la{" "}
                <strong style={{ color: "#fff" }}>~10.000 RON</strong> si poate
                ajunge la <strong style={{ color: "#fff" }}>25.000 RON</strong>,
                in timp ce un magazin online profesional pe Shopify sau
                WooCommerce se situeaza intre{" "}
                <strong style={{ color: "#fff" }}>
                  15.000 si 75.000 RON
                </strong>
                . Preturile includ design, dezvoltare si configurare de baza,
                dar nu si continutul (texte, fotografii) sau marketingul
                post-lansare.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Costuri ascunse */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Costuri ascunse pe care nimeni nu ti le spune
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Pretul initial al site-ului este doar varful iceberg-ului.
                Majoritatea business-urilor descopera abia dupa lansare ca exista
                costuri recurente care se aduna rapid. Iata ce ar trebui sa
                bugetezi lunar:
              </p>

              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "24px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Costuri lunare recurente:
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    ["Hosting (gazduire)", "10 \u2013 100 \u20AC/luna"],
                    ["Domeniu (.ro / .com)", "10 \u2013 30 \u20AC/an"],
                    ["Certificat SSL", "Gratuit \u2013 200 \u20AC/an"],
                    ["Mentenanta si update-uri", "50 \u2013 300 \u20AC/luna"],
                    ["Actualizari de continut", "100 \u2013 500 \u20AC/luna"],
                    ["Plugin-uri si licente premium", "20 \u2013 200 \u20AC/luna"],
                    ["Monitorizare securitate", "30 \u2013 150 \u20AC/luna"],
                    ["Backup-uri automate", "10 \u2013 50 \u20AC/luna"],
                  ].map(([label, value]) => (
                    <li
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span>{label}</span>
                      <span
                        style={{ color: "#fff", fontWeight: 600 }}
                      >
                        {value}
                      </span>
                    </li>
                  ))}
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#a855f7",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Total lunar estimat</span>
                    <span>230 &ndash; 1.300 &euro;/luna</span>
                  </li>
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In RON, costurile recurente ajung la{" "}
                <strong style={{ color: "#fff" }}>
                  1.150 &ndash; 6.500 RON/luna
                </strong>
                . Un site &bdquo;gratuit&rdquo; sau foarte ieftin la lansare
                poate deveni costisitor pe termen lung daca nu ai bugetat aceste
                cheltuieli de la inceput. Agentiile profesionale includ de
                obicei un pachet de mentenanta in oferta lor.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Freelancer vs Agentie vs DIY */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Freelancer vs. Agentie vs. DIY
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Pe langa tipul de site, cine il construieste are un impact major
                asupra pretului, calitatii si termenului de livrare. Iata cum se
                compara cele trei optiuni principale:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "540px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Criteriu", "DIY (Wix, Squarespace)", "Freelancer", "Agentie"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #a855f7",
                              textAlign: "left",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                            }}
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Pret",
                        "0 \u2013 500 \u20AC",
                        "500 \u2013 5.000 \u20AC",
                        "2.000 \u2013 50.000+ \u20AC",
                      ],
                      [
                        "Calitate design",
                        "Template-uri limitate",
                        "Buna, dar depinde de persoana",
                        "Premium, personalizat de la zero",
                      ],
                      [
                        "Timp de livrare",
                        "Cateva zile",
                        "2-6 saptamani",
                        "4-16 saptamani",
                      ],
                      [
                        "Suport post-lansare",
                        "Self-service",
                        "Limitat, fara garantii",
                        "Contract de mentenanta, SLA",
                      ],
                      [
                        "SEO & performanta",
                        "Bazic",
                        "Variabil",
                        "Optimizare completa inclusa",
                      ],
                      [
                        "Scalabilitate",
                        "Limitata de platforma",
                        "Moderata",
                        "Maxima \u2013 arhitectura scalabila",
                      ],
                      [
                        "Ideal pentru",
                        "Hobby, test rapid de idee",
                        "Buget mic, proiecte simple",
                        "Business serios, ROI pe termen lung",
                      ],
                    ].map(([criteriu, diy, freelancer, agentie], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {criteriu}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {diy}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {freelancer}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {agentie}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Platforma DIY poate fi o solutie buna pentru un blog personal
                sau un test rapid de piata. Dar daca scopul site-ului este sa
                genereze lead-uri sau vanzari pentru business-ul tau, investitia
                intr-un freelancer experimentat sau o agentie se recupereaza
                rapid prin <strong style={{ color: "#fff" }}>conversii mai mari, SEO mai bun si o imagine
                profesionala</strong> care inspira incredere.
              </p>
            </div>
          </FadeInSection>

          {/* Section: De ce variaza preturile */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                De ce variaza preturile atat de mult?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Un site de 1.000&euro; si unul de 10.000&euro; pot arata
                similar la suprafata &mdash; dar diferentele sunt enorme sub
                capota. Site-urile ieftine de obicei vin cu{" "}
                <strong style={{ color: "#fff" }}>cod neoptimizat</strong> care
                se incarca lent,{" "}
                <strong style={{ color: "#fff" }}>
                  fara structura SEO corecta
                </strong>
                , fara testare pe mobile, fara securitate adecvata si fara
                documentatie.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Un site profesional include:{" "}
                <strong style={{ color: "#fff" }}>
                  arhitectura UX gandita pe baza datelor
                </strong>
                , design responsiv testat pe 10+ dispozitive, viteza de
                incarcare sub 2 secunde, structura SEO completa (schema markup,
                sitemap XML, canonical tags), integrari cu analytics si CRM, si
                un cod curat care permite extinderea ulterioara.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Gandeste-te asa: un site ieftin e o cheltuiala. Un site
                profesional e o{" "}
                <strong style={{ color: "#fff" }}>investitie</strong> care
                genereaza venituri ani de zile. Un site de prezentare bine
                construit poate genera lead-uri in valoare de zeci de mii de
                euro pe an &mdash; de multe ori recuperand investitia in primele
                3-6 luni.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In plus, un site ieftin necesita adesea{" "}
                <strong style={{ color: "#fff" }}>refacere completa</strong>{" "}
                dupa 1-2 ani, cand limitarile devin evidente. Un site
                profesional are o durata de viata de 4-5 ani cu mentenanta
                corespunzatoare &mdash; costul pe an ajunge de fapt mai mic.
              </p>
            </div>
          </FadeInSection>

          {/* CTA Box */}
          <FadeInSection>
            <div
              style={{
                padding: "40px",
                background: "#0a0a0a",
                borderRadius: "20px",
                border: "1px solid rgba(86,219,132,0.2)",
                textAlign: "center",
                marginBottom: "64px",
              }}
            >
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.5rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Vrei un site profesional?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  maxWidth: "480px",
                  margin: "0 auto 28px",
                }}
              >
                Construim site-uri care arata impecabil, se incarca rapid si
                convertesc vizitatorii in clienti. De la landing pages la
                platforme e-commerce complexe.
              </p>
              <Link href="/webdesign/" className="btn-primary">
                Vezi serviciile de webdesign <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>

          {/* Related Articles */}
          <FadeInSection>
            <div style={{ marginBottom: "40px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.375rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "24px",
                }}
              >
                Articole similare
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div
                  style={{
                    padding: "28px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#56db84",
                    }}
                  >
                    Paid Ads
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Cat costa Google Ads in Romania? Ghid complet de preturi
                  </h3>
                  <Link
                    href="/blog/cat-costa-google-ads-romania/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#56db84",
                      textDecoration: "none",
                    }}
                  >
                    Citeste <ArrowRight size={14} />
                  </Link>
                </div>
                <div
                  style={{
                    padding: "28px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#3b82f6",
                    }}
                  >
                    Strategie
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Cat costa un specialist intern vs. o agentie de marketing
                    digital?
                  </h3>
                  <Link
                    href="/blog/cost-specialist-intern-vs-agentie/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#56db84",
                      textDecoration: "none",
                    }}
                  >
                    Citeste <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="ro" />
    </>
  );
}

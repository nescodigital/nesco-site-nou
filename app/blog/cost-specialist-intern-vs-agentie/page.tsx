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
                "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
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
                background: "rgba(59,130,246,0.10)",
                color: "#3b82f6",
                border: "1px solid rgba(59,130,246,0.18)",
              }}
            >
              Strategie
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              20 Februarie 2026 &middot; 8 min citire
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
              Cat Costa un Specialist Intern vs. o{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Agentie de Marketing Digital?
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
              Salariu, taxe, tools, management, turnover &mdash; vs. un pachet
              de agentie all-inclusive. Cifrele reale pe care nimeni nu ti le
              arata.
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
                &bdquo;Ne angajam pe cineva intern sau externalizam?&rdquo;
                &mdash; e intrebarea pe care o primim cel mai des de la
                antreprenorii romani care vor sa-si scaleze prezenta digitala.
                Raspunsul nu e niciodata simplu, dar cifrele sunt clare daca
                stii unde sa te uiti.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest articol comparam costul total real al unui specialist
                de marketing digital angajat intern cu cel al unei agentii de
                marketing. Nu doar salariul &mdash; ci tot ce implica: taxe,
                licentele software, training, management si costul de
                oportunitate.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Costul real al unui specialist intern */}
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
                Costul real al unui specialist intern
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Un specialist de marketing digital cu experienta medie (2-4 ani)
                are un salariu net intre <strong style={{ color: "#fff" }}>5.000 &ndash; 9.000 RON</strong> in
                Romania, in functie de oras si competente. Dar costul pentru
                angajator e mult mai mare decat ce vede angajatul in cont.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Taxele angajatorului adauga aproximativ <strong style={{ color: "#fff" }}>45% peste salariul brut</strong>.
                Pentru un salariu net de 7.000 RON, costul total lunar pentru
                angajator ajunge la <strong style={{ color: "#fff" }}>~14.500 &ndash; 16.000 RON</strong> (incluzand
                CAS, CASS, impozit pe venit si contributia asiguratorie de munca).
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
                  Calculul complet pentru un specialist cu 7.000 RON net:
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
                    ["Salariu brut estimat", "~11.800 RON"],
                    ["CAS angajator (25%)", "~2.950 RON"],
                    ["CASS angajator (10%)", "~1.180 RON"],
                    ["CAM (2.25%)", "~265 RON"],
                    ["Total cost salarial", "~16.200 RON/luna"],
                    ["Licente software (tools)", "~800 - 1.500 RON/luna"],
                    ["Training & conferinte (amortizat)", "~300 RON/luna"],
                    ["Management overhead (ore manager)", "~1.500 - 3.000 RON/luna"],
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
                      color: "#3b82f6",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Total lunar real</span>
                    <span>18.800 &ndash; 21.000 RON</span>
                  </li>
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Si aici nu am inclus inca bugetul de reclame in sine &mdash;
                doar costul omului care le gestioneaza. In plus, un singur om
                acopera de obicei 1-2 canale bine. Daca ai nevoie de SEO, Meta
                Ads, Google Ads, email marketing si content, vei avea nevoie de
                minim 2-3 specialisti.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Comparatie directa */}
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
                Comparatie directa: Specialist Intern vs. Agentie
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Am pus fata in fata cele mai importante criterii ca sa ai o
                imagine completa:
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
                      <th
                        style={{
                          background: "#111",
                          color: "#fff",
                          padding: "14px 18px",
                          borderBottom: "2px solid #3b82f6",
                          textAlign: "left",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        Criteriu
                      </th>
                      <th
                        style={{
                          background: "#111",
                          color: "#fff",
                          padding: "14px 18px",
                          borderBottom: "2px solid #3b82f6",
                          textAlign: "left",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        Specialist Intern
                      </th>
                      <th
                        style={{
                          background: "#111",
                          color: "#fff",
                          padding: "14px 18px",
                          borderBottom: "2px solid #3b82f6",
                          textAlign: "left",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        Agentie
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Cost lunar total",
                        "18.800 – 21.000 RON (fara buget ads)",
                        "3.500 – 12.000 RON (management fee)",
                      ],
                      [
                        "Expertiza",
                        "1-2 canale, in functie de experienta",
                        "Echipa multidisciplinara (5-10+ specialisti)",
                      ],
                      [
                        "Canale acoperite",
                        "1-2 canale bine",
                        "Toate canalele simultan",
                      ],
                      [
                        "Scalabilitate",
                        "Limitata (cresti doar angajand mai mult)",
                        "Imediata (resursele se aloca flexibil)",
                      ],
                      [
                        "Risc",
                        "Mare (demisie, burnout, concediu medical)",
                        "Redus (echipa de backup, procese stabilite)",
                      ],
                      [
                        "Tools incluse",
                        "Nu – platesti separat (800-1.500 RON/luna)",
                        "Da – incluse in fee (SEMrush, Analytics, etc.)",
                      ],
                      [
                        "Timp pana la start",
                        "2-4 luni (recrutare + onboarding)",
                        "1-2 saptamani",
                      ],
                      [
                        "Control direct",
                        "Maxim – e angajatul tau",
                        "Mediu – depinde de comunicare si procese",
                      ],
                    ].map(([criteriu, intern, agentie], i) => (
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
                          {intern}
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
                Observa diferenta de cost: un specialist intern cu salariu
                mediu te costa <strong style={{ color: "#fff" }}>de 2-3 ori mai mult</strong> decat fee-ul
                unei agentii &mdash; si acopera mai putine canale. Bineinteles,
                fiecare optiune are avantaje specifice in functie de context.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Costurile ascunse */}
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
                Costurile ascunse pe care le ignori
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Dincolo de costurile directe, angajarea unui specialist intern
                vine cu o serie de costuri pe care majoritatea antreprenorilor
                le subestimeaza sau le ignora complet:
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
                    title: "Recrutarea dureaza 2-3 luni",
                    desc: "Gasirea unui specialist bun de marketing digital nu e simpla. Procesul de recrutare implica ore de screening CV-uri, interviuri tehnice, teste practice. In acest timp, campaniile tale stau pe loc sau sunt gestionate de cineva fara expertiza necesara.",
                  },
                  {
                    title: "Onboarding-ul consuma inca 1-2 luni",
                    desc: "Chiar si dupa angajare, omul are nevoie de timp sa inteleaga produsul, publicul, competitorii si istoria campaniilor anterioare. In primele luni, productivitatea e la 40-60% din capacitate.",
                  },
                  {
                    title: "Riscul de turnover e real",
                    desc: "Rata de turnover in marketing digital in Romania e de peste 25% anual. Daca specialistul pleaca dupa 8 luni, ai pierdut tot investitia in recrutare si training, si o iei de la capat.",
                  },
                  {
                    title: "Licentele software se aduna",
                    desc: "SEMrush ($130/luna), Ahrefs ($99/luna), Canva Pro ($13/luna), Mailchimp, Hotjar, Google Workspace premium, stock photos — totalul ajunge usor la 800-1.500 RON/luna. Agentiile impart aceste costuri pe 10-30 de clienti.",
                  },
                  {
                    title: "Managementul ia timp",
                    desc: "Cineva trebuie sa faca review la strategii, sa aprobe creative-urile, sa participe la sedinte saptamanale, sa seteze KPI si sa evalueze performanta. Asta inseamna 5-10 ore/saptamana din timpul unui manager — timp care are un cost real.",
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

          {/* Section: Cand are sens un specialist intern */}
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
                Cand are sens un specialist intern?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Nu spunem ca angajarea interna e mereu gresita. Exista situatii
                clare in care are sens sa ai un om dedicat in echipa:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                {[
                  "Ai un buget de marketing de peste 50.000 RON/luna si volumul justifica o persoana full-time",
                  "Ai nevoie de cineva care sa fie disponibil instant, integrat in echipa de produs",
                  "Operezi intr-o nisa foarte specifica (medical, legal, fintech) unde cunoasterea profunda a industriei e critica",
                  "Ai deja un team lead de marketing care poate coordona si mentora specialistul",
                  "Strategia ta se bazeaza pe un singur canal principal (ex: numai content marketing sau numai email automation)",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.7,
                    }}
                  >
                    <span style={{ color: "#3b82f6", flexShrink: 0 }}>
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Daca bifezi cel putin 3 din punctele de mai sus, probabil ca un
                specialist intern e alegerea corecta. Dar daca te regasesti in
                mai putin de 2, continua sa citesti.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Cand are sens o agentie */}
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
                Cand are sens o agentie?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                O agentie de marketing digital devine optiunea optima in
                urmatoarele scenarii:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                {[
                  "Esti la inceput si ai nevoie de lansare rapida pe multiple canale (Google Ads + Meta + SEO)",
                  "Bugetul de marketing e sub 30.000 RON/luna — nu justifica un salariu full-time",
                  "Ai nevoie de expertiza diversificata: strategie, creative, copywriting, analytics, CRO",
                  "Vrei sa scalezi rapid fara procesul de recrutare de 3-4 luni",
                  "Nu ai un manager de marketing intern care sa coordoneze activitatea",
                  "Vrei acces la tools premium fara sa platesti licentele individual",
                  "Ai nevoie de un punct de vedere extern, fara bias-urile interne ale companiei",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.7,
                    }}
                  >
                    <span style={{ color: "#56db84", flexShrink: 0 }}>
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In practica, majoritatea companiilor cu bugete sub 50.000
                RON/luna obtin un ROI mai bun lucrand cu o agentie. Motivul e
                simplu: o agentie iti ofera acces la o echipa intreaga de 5-10
                specialisti la pretul unui singur angajat.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Verdictul */}
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
                Verdictul: nu e &bdquo;sau&rdquo;, ci &bdquo;cand&rdquo;
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cele mai performante companii cu care am lucrat au un model
                hibrid: incep cu o agentie care construieste procesele,
                strategia si primele rezultate, apoi &mdash; pe masura ce
                bugetul creste &mdash; angajeaza intern pe canalele cu volum
                mare, pastrand agentia pentru strategie si canalele secundare.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Aceasta abordare hibrida minimizeaza riscul, maximizeaza
                expertiza si pastreaza flexibilitatea bugetara. Nu trebuie sa
                alegi permanent intre cele doua — ci sa aloci inteligent in
                functie de faza in care se afla business-ul tau.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Important e sa nu compari doar salariul cu fee-ul agentiei.
                Compara <strong style={{ color: "#fff" }}>costul total de ownership</strong> &mdash;
                inclusiv tools, management, risc de turnover si costul de
                oportunitate al timpului tau.
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
                Calculeaza costul real
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
                Foloseste calculatorul nostru pentru a vedea exact cat te-ar
                costa un specialist intern vs. un pachet de agentie personalizat
                pe nevoile tale.
              </p>
              <Link href="/calculator/" className="btn-primary">
                Deschide calculatorul <ArrowRight size={16} />
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
                    De ce nu-ti merg reclamele pe Meta? 7 greseli frecvente
                  </h3>
                  <Link
                    href="/blog/de-ce-nu-merg-reclamele-meta/"
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
                      color: "#14b8a6",
                    }}
                  >
                    SEO
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    SEO vs. Google Ads: Ce alegi cand ai buget limitat?
                  </h3>
                  <Link
                    href="/blog/seo-vs-google-ads/"
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

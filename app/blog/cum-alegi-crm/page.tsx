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
                "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)",
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
                background: "rgba(236,72,153,0.10)",
                color: "#ec4899",
                border: "1px solid rgba(236,72,153,0.18)",
              }}
            >
              Automatizare
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              24 Ianuarie 2026 &middot; 12 min citire
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
              Cum sa alegi si sa implementezi un{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                CRM in 2026
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
              Un CRM nu e doar un software &mdash; e sistemul nervos central al
              vanzarilor si marketingului tau. Alegerea gresita inseamna luni
              pierdute si mii de euro aruncati. Alegerea corecta transforma modul
              in care gestionezi clientii si inchizi deal-uri.
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
                Daca inca urmaresti lead-urile intr-un spreadsheet, uiti sa faci
                follow-up cu prospecti importanti sau nu poti spune cu certitudine
                care canal de marketing aduce cei mai buni clienti &mdash; ai
                nevoie de un CRM. Nu e o chestiune de &bdquo;daca&rdquo;, ci de
                &bdquo;cat de repede&rdquo;.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest ghid complet, comparam cele mai populare 5 CRM-uri,
                iti dam criteriile exacte de selectie si un plan de implementare
                pas cu pas. Tot ce trebuie sa stii ca sa faci alegerea corecta
                din prima.
              </p>
            </div>
          </FadeInSection>

          {/* Section: De ce ai nevoie de un CRM */}
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
                De ce ai nevoie de un CRM
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Un CRM (Customer Relationship Management) centralizeaza toate
                interactiunile cu clientii intr-un singur loc. In loc sa cauti
                prin email-uri, notite si spreadsheet-uri, ai o vedere completa
                a fiecarui client si a fiecarei oportunitati de vanzare.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Beneficiile principale ale unui CRM implementat corect:
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
                  "Date centralizate — toti clientii, lead-urile si interactiunile intr-un singur dashboard",
                  "Follow-up-uri automate — nu mai uiti niciodata sa contactezi un prospect",
                  "Vizibilitate completa a pipeline-ului — stii exact in ce stadiu e fiecare deal",
                  "Raportare avansata — vezi care campanii, canale si actiuni genereaza venituri",
                  "Colaborare intre echipe — vanzari, marketing si suport lucreaza cu aceleasi date",
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
                    <span style={{ color: "#ec4899", flexShrink: 0 }}>
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
                Companiile care folosesc un CRM raporteaza o crestere medie de{" "}
                <strong style={{ color: "#fff" }}>29% in vanzari</strong> si o
                imbunatatire de{" "}
                <strong style={{ color: "#fff" }}>34% in productivitatea echipei</strong>.
                Nu e magie &mdash; e vizibilitate si disciplina in proces.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Top 5 CRM-uri comparate */}
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
                Top 5 CRM-uri comparate
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Am analizat cele mai populare CRM-uri pentru IMM-uri si le-am
                comparat pe criteriile care conteaza cel mai mult:
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
                      {["CRM", "Ideal pentru", "Pret/user/luna", "Plan gratuit", "Usurinta"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #ec4899",
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
                      ["HubSpot", "Echipe orientate pe marketing", "\u20AC0\u201390", "Da (generos)", "Foarte usor"],
                      ["Salesforce", "Enterprise / companii mari", "\u20AC25\u2013300", "Nu", "Complex"],
                      ["Pipedrive", "IMM-uri orientate pe vanzari", "\u20AC14\u201399", "Nu", "Usor"],
                      ["Monday CRM", "Echipe orientate pe proiecte", "\u20AC10\u201324", "Da (limitat)", "Usor"],
                      ["Zoho CRM", "Buget redus", "\u20AC0\u201352", "Da (3 useri)", "Mediu"],
                    ].map(([crm, ideal, pret, gratuit, usurinta], i) => (
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
                          {crm}
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
                          {ideal}
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
                          {pret}
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
                          {gratuit}
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
                          {usurinta}
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
                <strong style={{ color: "#fff" }}>Recomandarea noastra:</strong>{" "}
                Pentru majoritatea IMM-urilor din Romania, HubSpot (plan gratuit
                + Starter) sau Pipedrive ofera cel mai bun echilibru intre
                functionalitate si pret. Salesforce merita doar daca ai o echipa
                de 20+ persoane si procese complexe.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Criterii de selectie */}
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
                Criterii de selectie
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Inainte sa alegi un CRM, evalueaza-l pe aceste 7 criterii
                esentiale. Cel mai scump CRM nu e neaparat cel mai bun pentru
                tine:
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
                    title: "Dimensiunea echipei si bugetul",
                    desc: "Un freelancer cu 3 clienti nu are nevoie de Salesforce. O echipa de 50 nu se descurca cu un spreadsheet. Alege CRM-ul care se potriveste dimensiunii tale actuale, dar care poate scala pe masura ce cresti.",
                  },
                  {
                    title: "Nevoi de integrare",
                    desc: "CRM-ul trebuie sa se conecteze cu platformele tale existente: e-commerce (Shopify, WooCommerce), email marketing (Mailchimp, Klaviyo), platforme de ads (Meta, Google) si tools de analytics.",
                  },
                  {
                    title: "Complexitatea procesului de vanzare",
                    desc: "Ai un pipeline simplu cu 3-4 etape sau un proces multi-stage cu aprobare, negociere si contractare? CRM-uri ca Pipedrive exceleaza la pipeline simplu; Salesforce la procese complexe.",
                  },
                  {
                    title: "Cerinte de automatizare",
                    desc: "Secvente automate de email, creare automata de task-uri, lead scoring, notificari — cat de mult vrei sa automatizezi? HubSpot si Salesforce au cele mai puternice motoare de automatizare.",
                  },
                  {
                    title: "Profunzimea rapoartelor si analytics",
                    desc: "Ai nevoie de rapoarte simple (cate deal-uri sunt deschise) sau de analytics avansate (atribuire multi-touch, forecast pe pipeline, analiza cohorte)? Zoho si HubSpot ofera rapoarte bune chiar si pe planurile de baza.",
                  },
                  {
                    title: "Calitatea aplicatiei mobile",
                    desc: "Daca echipa ta de vanzari e mult pe teren, aplicatia mobila a CRM-ului trebuie sa fie excelenta. Pipedrive si HubSpot au cele mai bune aplicatii mobile din categorie.",
                  },
                  {
                    title: "Suport si onboarding",
                    desc: "Unele CRM-uri ofera onboarding dedicat, training video si suport chat live. Altele te lasa sa te descurci singur cu documentatia. Daca e prima data cand implementezi un CRM, suportul conteaza enorm.",
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

          {/* Section: Ghid de implementare */}
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
                Ghid de implementare pas cu pas
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Alegerea CRM-ului e doar jumatate din batalie. Implementarea
                corecta face diferenta intre un tool care aduce valoare si unul
                pe care nimeni nu-l foloseste. Urmeaza acesti 8 pasi:
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
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {[
                    {
                      step: "1",
                      title: "Defineste procesul de vanzare si etapele pipeline-ului",
                      desc: "Inainte de orice configurare tehnica, pune pe hartie etapele prin care trece un lead: de la primul contact pana la client. Exemple: Lead Nou → Calificat → Demo Programat → Oferta Trimisa → Negociere → Castigat/Pierdut.",
                    },
                    {
                      step: "2",
                      title: "Curata datele existente inainte de import",
                      desc: "Nu importa gunoi in CRM-ul nou. Sterge duplicatele, actualizeaza informatiile de contact invalide si standardizeaza formatele (nume companie, numar de telefon, adresa).",
                    },
                    {
                      step: "3",
                      title: "Configureaza campuri personalizate pentru industria ta",
                      desc: "Fiecare business are nevoi specifice. Un e-commerce va avea campuri ca 'valoare medie comanda' si 'frecventa achizitii'. Un SaaS va avea 'plan curent' si 'data expirare trial'.",
                    },
                    {
                      step: "4",
                      title: "Creeaza workflow-uri automate",
                      desc: "Seteaza automatizari esentiale: asignarea automata a lead-urilor, reminder-uri de follow-up, notificari cand un deal e blocat prea mult timp intr-o etapa, secvente de nurturing prin email.",
                    },
                    {
                      step: "5",
                      title: "Integreaza cu email-ul si tool-urile de marketing",
                      desc: "Conecteaza CRM-ul cu Gmail/Outlook, platforma de email marketing, formulare de pe site si platformele de ads. Fiecare interactiune trebuie sa ajunga automat in CRM.",
                    },
                    {
                      step: "6",
                      title: "Traineaza echipa (cel mai important pas!)",
                      desc: "Motivul #1 pentru care CRM-urile esueaza este lipsa adoptiei. Organizeaza sesiuni practice, creeaza proceduri scrise si stabileste clar: daca nu e in CRM, nu exista.",
                    },
                    {
                      step: "7",
                      title: "Incepe cu functiile de baza, adauga complexitate treptat",
                      desc: "Nu incerca sa configurezi totul din prima zi. Incepe cu contacte, deal-uri si pipeline. Dupa 2-4 saptamani, adauga automatizari. Dupa 6-8 saptamani, rapoarte avansate.",
                    },
                    {
                      step: "8",
                      title: "Revizuieste si optimizeaza dupa 30 de zile",
                      desc: "Dupa prima luna, analizeaza: ce functii se folosesc, ce lipseste, ce e prea complicat? Ajusteaza pipeline-ul, simplifica workflow-urile si colecteaza feedback de la echipa.",
                    },
                  ].map((item) => (
                    <li
                      key={item.step}
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "rgba(236,72,153,0.12)",
                          color: "#ec4899",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        {item.step}
                      </span>
                      <div>
                        <h3
                          className="font-bold text-white"
                          style={{
                            fontSize: "1rem",
                            marginBottom: "4px",
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
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>

          {/* Section: Greseli frecvente */}
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
                Greseli frecvente la implementarea unui CRM
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Am vazut zeci de implementari CRM esuate. Aproape toate cad in
                aceleasi capcane. Evita aceste greseli si ai un avans enorm:
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
                    title: "Suprapersonalizare din ziua 1",
                    desc: "Creezi 50 de campuri custom, 20 de pipeline-uri si 30 de automatizari inainte sa fi introdus macar un contact. Rezultat: complexitate inutila si abandon rapid.",
                  },
                  {
                    title: "Zero training pentru echipa",
                    desc: "Cumperi CRM-ul, dai credentiale echipei si speri ca se descurca. Dupa 2 luni, nimeni nu-l foloseste si te intorci la spreadsheet-uri.",
                  },
                  {
                    title: "Import de date murdare",
                    desc: "Importi contacte duplicate, email-uri invalide si informatii depasind. CRM-ul devine o baza de date inutilizabila si pierzi increderea echipei in sistem.",
                  },
                  {
                    title: "Alegerea celei mai scumpe optiuni",
                    desc: "Platesti pentru Salesforce Enterprise cand Pipedrive Pro ti-ar fi rezolvat 95% din nevoi la un sfert din pret. Mai mult nu inseamna mai bine — inseamna mai complicat.",
                  },
                  {
                    title: "Lipsa integrarilor cu tool-urile existente",
                    desc: "CRM-ul trebuie sa fie conectat la email, site, platforme de ads si contabilitate. Un CRM izolat e un silo in plus, nu o solutie.",
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
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Regula de aur: un CRM simplu pe care echipa il foloseste zilnic
                bate un CRM complex pe care nimeni nu-l deschide. Adoptia e
                totul.
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
                Implementeaza un CRM corect
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
                Te ajutam sa alegi, configurezi si implementezi CRM-ul potrivit
                pentru echipa ta &mdash; de la selectie si migrare de date pana
                la automatizari si training.
              </p>
              <Link href="/solutii-crm-ro/" className="btn-primary">
                Vezi solutiile CRM <ArrowRight size={16} />
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      color: "#ec4899",
                    }}
                  >
                    Automatizare
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Email Marketing pentru E-commerce: Ghid Complet
                  </h3>
                  <Link
                    href="/blog/email-marketing-ecommerce/"
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
                      color: "#ec4899",
                    }}
                  >
                    Automatizare
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    AI in Marketing: Ce se schimba in 2026
                  </h3>
                  <Link
                    href="/blog/ai-in-marketing-2026/"
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

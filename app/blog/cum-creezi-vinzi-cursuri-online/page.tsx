import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#3b82f6"; // Strategie blue

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
                "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
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
                color: CATEGORY_COLOR,
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
              28 Februarie 2026 &middot; 14 min citire
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
              Cum sa creezi si sa vinzi{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Cursuri Online
              </span>{" "}
              in 2026
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              De la validarea ideii la lansare si promovare &mdash; ghid complet
              cu comparatie de platforme si strategii testate pentru a-ti
              transforma expertiza in venituri recurente.
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
                Piata cursurilor online a depasit 375 de miliarde de dolari la
                nivel global in 2026 si continua sa creasca cu peste 14% pe an.
                Nu mai e un trend &mdash; e o industrie matura, iar creatorii
                care intra acum cu un produs bine structurat au sanse reale sa
                construiasca o sursa de venit recurenta, scalabila si
                independenta de numarul de ore pe care le muncesti.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Diferenta intre un curs care genereaza vanzari constante si unul
                care aduna praf pe o platforma nu tine de cantitatea de continut.
                Tine de validarea ideii inainte de a incepe sa filmezi, de
                alegerea platformei potrivite pentru modelul tau de business si
                de o strategie de lansare care creeaza cerere inainte de a avea
                produsul gata.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In acest ghid parcurgem procesul complet in 5 pasi &mdash; de la
                validare pana la marketing continuu &mdash; cu o comparatie
                detaliata a celor mai populare platforme de cursuri online.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 1: Valideaza ideea */}
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
                Pasul 1: Valideaza-ti ideea de curs
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cea mai mare greseala pe care o fac creatorii de cursuri e sa
                petreaca luni intregi producand continut pentru o idee pe care
                nimeni nu e dispus sa plateasca. Validarea vine inainte de
                productie, nu dupa.
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
                  Cum validezi cererea:
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
                    "Cerceteaza in Google Trends daca subiectul are un trend ascendent sau stabil, nu descendent",
                    "Analizeaza competitorii directi — daca exista cursuri similare care se vand, inseamna ca piata exista",
                    "Creeaza un landing page cu o oferta early-bird si vezi cati oameni se inscriu pe lista de asteptare",
                    "Ruleaza un pilot cu 10-15 participanti la un pret redus si colecteaza feedback real",
                    "Defineste unghiul tau unic — ce faci diferit fata de cele 50 de cursuri deja existente pe acelasi subiect",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: CATEGORY_COLOR, flexShrink: 0 }}>
                        &#9679;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Daca reusesti sa strangi 50-100 de inscrieri pe lista de
                asteptare sau sa vinzi 10-15 locuri la un pilot, ai validare
                suficienta. Nu ai nevoie de mii de inscrisi &mdash; ai nevoie de
                oameni dispusi sa plateasca acum.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 2: Structureaza continutul */}
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
                Pasul 2: Structureaza continutul cursului
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Gandeste-te de la rezultat spre continut, nu invers. Intreaba-te:
                &bdquo;Ce va sti sau va putea face cursantul dupa ce termina
                modulul asta?&rdquo; Fiecare modul trebuie sa aiba un outcome
                clar, masurabil, pe care il poti promite in pagina de vanzare.
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
                    title: "Modulul introductiv",
                    desc: "Seteaza asteptarile, prezinta structura si da un quick win — un rezultat mic dar concret pe care cursantul il obtine in primele 30 de minute. Asta creste rata de completare dramatic.",
                  },
                  {
                    title: "Modulele de baza (core)",
                    desc: "Continutul principal al cursului. Fiecare lectie rezolva o problema specifica. Combina video (5-15 min), texte suport, exercitii practice si quizuri. Nu depasi 15 minute per video — atentia scade dupa.",
                  },
                  {
                    title: "Module avansate",
                    desc: "Mergi mai adanc pe subiectele care conteaza cel mai mult. Case studies, strategii avansate, template-uri reale. Acestea separa un curs bun de unul exceptional.",
                  },
                  {
                    title: "Resurse bonus",
                    desc: "Template-uri descarcabile, checklist-uri, acces la o comunitate, sesiuni Q&A live. Bonusurile cresc valoarea perceputa si justifica un pret mai mare.",
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
                Formula ideala pentru un curs de 4-8 saptamani: 6-10 module, cu
                3-5 lectii video per modul (5-15 min fiecare), insotite de
                exercitii practice si un proiect final care demonstreaza
                competenta.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 3: Alege platforma */}
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
                Pasul 3: Alege platforma potrivita
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Platforma pe care o alegi determina experienta cursantilor, ce
                functionalitati ai la dispozitie si cat de usor e sa scalezi.
                Iata o comparatie rapida a celor 5 platforme principale:
              </p>

              {/* Comparison Table */}
              <div style={{ overflowX: "auto", marginBottom: "32px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "700px",
                  }}
                >
                  <thead>
                    <tr>
                      {[
                        "Platforma",
                        "Ideal pentru",
                        "Functie cheie",
                        "Pret de start",
                        "Comision tranzactii?",
                      ].map((header) => (
                        <th
                          key={header}
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
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "LearnWorlds",
                        "Invatare interactiva",
                        "SCORM, quizuri, certificate",
                        "$24/luna",
                        "Nu (de la plan Pro)",
                      ],
                      [
                        "Thinkific",
                        "Incepatori",
                        "Plan gratuit generos, usor de configurat",
                        "Gratuit / $49/luna",
                        "Nu",
                      ],
                      [
                        "Teachable",
                        "Creatori mid-range",
                        "Marketing tools integrat",
                        "$59/luna",
                        "Da (plan Basic)",
                      ],
                      [
                        "Udemy",
                        "Audienta built-in",
                        "Marketplace cu milioane de utilizatori",
                        "Gratuit",
                        "Da (50-75%)",
                      ],
                      [
                        "Kajabi",
                        "All-in-one premium",
                        "Cursuri + site + email + funnels",
                        "$149/luna",
                        "Nu",
                      ],
                    ].map(([platforma, ideal, functie, pret, comision], i) => (
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
                          {platforma}
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
                          {functie}
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
                          {comision}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Platform Review Cards */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* LearnWorlds (affiliate) */}
                <div
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
                    <a
                      href="#AFFILIATE_LEARNWORLDS"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{
                        color: CATEGORY_COLOR,
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      LearnWorlds
                    </a>{" "}
                    &mdash; Cea mai buna pentru invatare interactiva
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Daca vrei sa creezi cursuri cu adevarat interactive,
                    LearnWorlds e alegerea de top. Suporta continut SCORM,
                    quizuri avansate cu feedback conditionat, certificate
                    personalizate si un player video interactiv care permite
                    adaugarea de intrebari direct in video. Ideal pentru cursuri
                    de certificare, traininguri corporate sau orice program unde
                    testarea cunostintelor e importanta. Interfata de creare e
                    intuitiva, iar site builder-ul inclus iti permite sa
                    construiesti un site complet fara sa ai nevoie de un
                    dezvoltator.
                  </p>
                  <a
                    href="#AFFILIATE_LEARNWORLDS"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "12px",
                      padding: "8px 16px",
                      background: "rgba(59,130,246,0.10)",
                      border: "1px solid rgba(59,130,246,0.18)",
                      borderRadius: "8px",
                      color: CATEGORY_COLOR,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Incearca LearnWorlds <ArrowRight size={14} />
                  </a>
                </div>

                {/* Thinkific (affiliate) */}
                <div
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
                    <a
                      href="#AFFILIATE_THINKIFIC"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{
                        color: CATEGORY_COLOR,
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      Thinkific
                    </a>{" "}
                    &mdash; Cea mai buna pentru incepatori
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Daca lansezi primul curs si vrei ceva simplu dar profesional,
                    Thinkific e greu de batut. Planul gratuit iti permite sa
                    publici un curs fara niciun cost initial, iar upgrade-ul la
                    planul platit iti debloccheaza domeniu custom, drip content
                    si integrari avansate. Interfata drag-and-drop face crearea
                    cursului extrem de intuitiva. Nu percepe comision pe
                    tranzactii pe niciun plan, ceea ce inseamna ca pastrati 100%
                    din venituri (minus taxa procesatorului de plati).
                  </p>
                  <a
                    href="#AFFILIATE_THINKIFIC"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "12px",
                      padding: "8px 16px",
                      background: "rgba(59,130,246,0.10)",
                      border: "1px solid rgba(59,130,246,0.18)",
                      borderRadius: "8px",
                      color: CATEGORY_COLOR,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Incearca Thinkific <ArrowRight size={14} />
                  </a>
                </div>

                {/* Teachable (non-affiliate) */}
                <div
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
                    Teachable &mdash; Optiunea populara mid-range
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Teachable ocupa un loc solid in mijlocul pietei. Are
                    instrumente de marketing integrate (upsells, order bumps,
                    affiliate programs), un checkout bine optimizat si suport
                    pentru coaching 1:1 pe langa cursuri. Dezavantajul e ca pe
                    planul Basic percepe un comision de 5% pe tranzactii,
                    ceea ce se acumuleaza rapid la volum mare.
                  </p>
                </div>

                {/* Udemy (non-affiliate) */}
                <div
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
                    Udemy &mdash; Audienta mare, control redus
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Udemy functioneaza ca un marketplace &mdash; publicul e deja
                    acolo, cu peste 70 de milioane de studenti. Problema e ca
                    nu ai control asupra pretului (Udemy face reduceri agresive
                    frecvent), nu ai acces la emailurile cursantilor si comisionul
                    e de 50-75% din vanzarile generate prin platforma. Poate fi
                    util ca instrument de vizibilitate, dar nu ca sursa principala
                    de venit.
                  </p>
                </div>

                {/* Kajabi (non-affiliate) */}
                <div
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
                    Kajabi &mdash; All-in-one premium
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Kajabi combina totul intr-o singura platforma: cursuri
                    online, website builder, email marketing, funnels de vanzare,
                    comunitati si podcasting. E solutia ideala daca vrei sa
                    elimini complet nevoie de integrari cu alte tool-uri.
                    Dezavantajul major e pretul &mdash; porneste de la $149/luna,
                    ceea ce il face potrivit doar pentru creatori care au deja
                    venituri constante si vor sa consolideze totul pe o singura
                    platforma.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Pasul 4: Creeaza continutul */}
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
                Pasul 4: Creeaza continutul cursului
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Nu ai nevoie de un studio profesional ca sa creezi un curs de
                calitate. Ai nevoie de echipament decent, o metoda clara si
                disciplina de a livra consistent.
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
                  Echipament esential:
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
                    "Camera: webcam-ul unui laptop modern (1080p) e suficient la inceput. Upgrade la o camera DSLR/mirrorless cand ai buget",
                    "Microfon: cea mai importanta investitie. Un microfon USB de 50-100 EUR face diferenta intre amator si profesional",
                    "Iluminare: o lampa ring light sau doua softbox-uri. Lumina naturala de la o fereastra mare functioneaza si ea",
                    "Software de inregistrare: OBS (gratuit) pentru screen recording, Loom pentru tutoriale rapide, Camtasia pentru editare",
                    "Background: un fundal curat, fara dezordine. Un perete simplu sau un fundal verde sunt suficiente",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: CATEGORY_COLOR, flexShrink: 0 }}>
                        &#9679;
                      </span>
                      {item}
                    </li>
                  ))}
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
                <strong style={{ color: "#fff" }}>Tips de inregistrare:</strong>{" "}
                Filmeaza in batch-uri &mdash; inregistreaza 3-5 lectii intr-o
                singura sesiune. Foloseste un script sau cel putin bullet points
                pentru fiecare lectie. Vorbeste direct in camera si pastreaza un
                ritm energic. Nu te perfectiona &mdash; un curs bun livrat acum
                e mai valoros decat un curs perfect livrat niciodata.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: "#fff" }}>Workflow de editare:</strong>{" "}
                Taie pauzele lungi si greselile evidente, adauga slide-uri sau
                screen recordings cand explici concepte complexe, adauga
                subtitrari (creste accesibilitatea si engagement-ul cu 40%) si
                exporta la 1080p. Nu adauga efecte inutile &mdash; continutul
                conteaza mai mult decat productia.
              </p>
            </div>
          </FadeInSection>

          {/* Pasul 5: Lanseaza si promoveaza */}
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
                Pasul 5: Lanseaza si promoveaza cursul
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Lansarea nu e un eveniment de o zi &mdash; e un proces care
                incepe cu saptamani inainte si continua luni dupa. Iata
                strategia in 3 faze:
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
                    title: "Pre-lansare (2-4 saptamani inainte)",
                    desc: "Construieste o lista de email cu continut gratuit de valoare (mini-curs, ebook, webinar gratuit). Publica continut pe social media care demonstreaza expertiza ta pe subiect. Colecteaza testimoniale de la participantii la pilot. Creeaza urgenta cu o oferta early-bird limitata in timp.",
                  },
                  {
                    title: "Saptamana de lansare",
                    desc: "Trimite secventa de email-uri (3-5 email-uri in 7 zile): anunt, beneficii, testimoniale, deadline, ultimul reminder. Ofera un pret early-bird cu un countdown real. Fa un webinar live de lansare unde oferi valoare si prezinti cursul. Activeaza-ti reteaua — cere partenerilor si prietenilor sa distribuie.",
                  },
                  {
                    title: "Promovare continua (post-lansare)",
                    desc: "SEO: creeaza articole de blog pe subiecte legate de cursul tau si include link-uri catre pagina de vanzare. Reclame platite: testeaza Facebook Ads si Google Ads cu audiente specifice. Program de afiliati: ofera 20-40% comision altor creatori care iti promoveaza cursul. Webinarii lunare: organizeaza sesiuni gratuite care se incheie cu o oferta pentru curs.",
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
                Regula de aur: nu te baza doar pe un singur canal de promovare.
                Cursurile care genereaza venituri constante combina cel putin 3
                surse de trafic &mdash; de obicei email marketing, continut
                organic (SEO + social media) si reclame platite. Diversificarea
                te protejeaza de schimbarile de algoritm sau de cresterea
                costurilor pe un singur canal.
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
                Descopera strategia digitala potrivita
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
                Ai un curs online si vrei sa-l promovezi eficient? Sau ai
                nevoie de o strategie digitala completa care sa includa si
                crearea de cursuri ca parte din funnel-ul tau? Echipa Nesco
                Digital te poate ajuta.
              </p>
              <Link href="/strategie-digitala-ro/" className="btn-primary">
                Vreau o strategie <ArrowRight size={16} />
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
                      color: CATEGORY_COLOR,
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
                    Strategie de Marketing Digital Pas cu Pas (Ghid 2026)
                  </h3>
                  <Link
                    href="/blog/strategie-marketing-digital-ghid/"
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
                      color: CATEGORY_COLOR,
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
                    Cum sa construiesti un funnel de vanzari
                  </h3>
                  <Link
                    href="/blog/cum-construiesti-funnel-vanzari/"
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

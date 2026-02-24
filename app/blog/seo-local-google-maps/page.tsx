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
                background: "rgba(20,184,166,0.10)",
                color: "#14b8a6",
                border: "1px solid rgba(20,184,166,0.18)",
              }}
            >
              SEO
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              17 Februarie 2026 &middot; 10 min citire
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
              SEO local: Cum sa apari primul pe Google in{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #14b8a6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                orasul tau
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
              Google Business Profile, recenzii, citari locale, continut
              optimizat &mdash; tot ce trebuie sa faci ca sa domini rezultatele
              Google Maps si sa atragi clienti din zona ta.
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
                <strong style={{ color: "#fff" }}>46% din toate cautarile pe Google au intentie locala.</strong>{" "}
                Cautarile de tip &bdquo;langa mine&rdquo; au crescut cu peste 200% in
                ultimii 5 ani. Daca ai o locatie fizica sau deservesti o zona
                geografica specifica, SEO-ul local este cel mai valoros canal de
                marketing pe care il poti avea.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cu toate acestea, majoritatea afacerilor locale din Romania inca
                ignora aceasta oportunitate. Un profil Google Business incomplet,
                zero recenzii si nicio strategie de continut local inseamna ca
                lasi bani pe masa &mdash; in fiecare zi. In acest ghid complet
                iti aratam exact ce trebuie sa faci ca sa apari primul in
                rezultatele locale din orasul tau.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Ce este SEO local */}
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
                Ce este SEO local si de ce conteaza?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                SEO-ul local difera fundamental de SEO-ul traditional. In timp
                ce SEO-ul organic clasic se concentreaza pe pozitionarea in
                rezultatele de cautare nationale sau globale, SEO-ul local
                urmareste sa te plaseze in <strong style={{ color: "#fff" }}>&bdquo;local pack&rdquo;</strong>{" "}
                &mdash; cele 3 rezultate cu harta care apar deasupra rezultatelor
                organice cand cineva cauta un serviciu intr-o zona specifica.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Cand cineva cauta &bdquo;dentist Bucuresti&rdquo; sau
                &bdquo;restaurant italian langa mine&rdquo;, Google afiseaza mai
                intai harta cu 3 afaceri locale, apoi rezultatele organice
                obisnuite. Acele 3 pozitii din local pack primesc{" "}
                <strong style={{ color: "#fff" }}>peste 44% din toate click-urile</strong> &mdash;
                mai mult decat toate rezultatele organice combinate.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google foloseste 3 factori principali pentru a decide cine apare
                in local pack: <strong style={{ color: "#fff" }}>proximitatea</strong> (cat de aproape
                esti de cel care cauta), <strong style={{ color: "#fff" }}>relevanta</strong> (cat de bine
                se potriveste profilul tau cu cautarea) si{" "}
                <strong style={{ color: "#fff" }}>prominenta</strong> (cat de cunoscut si de
                bine evaluat esti online). Vestea buna? Poti optimiza activ
                relevanta si prominenta, chiar daca nu poti controla proximitatea.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Google Business Profile */}
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
                Google Business Profile &mdash; baza SEO-ului local
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Profilul Google Business (fost Google My Business) este
                fundamentul intregii strategii de SEO local. Un profil complet
                si activ creste sansele de a aparea in local pack cu pana la{" "}
                <strong style={{ color: "#fff" }}>70%</strong>. Iata checklist-ul
                complet de optimizare:
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
                  Checklist optimizare Google Business Profile:
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    "Completeaza fiecare camp: nume afacere, categorie principala + secundare, adresa, telefon, program, website",
                    "Adauga minim 20 de fotografii de calitate: exterior, interior, echipa, produse/servicii",
                    "Scrie o descriere de business convingatoare cu cuvinte cheie relevante (max 750 caractere)",
                    "Adauga fiecare serviciu/produs cu descriere detaliata si pret (daca e posibil)",
                    "Activeaza mesageria si optiunile de rezervare directa",
                    "Posteaza actualizari saptamanale prin Google Posts (oferte, noutati, evenimente)",
                    "Adauga atribute relevante (Wi-Fi, parcare, acces persoane cu dizabilitati)",
                    "Raspunde la TOATE intrebarile din sectiunea Q&A",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: "#14b8a6", flexShrink: 0 }}>
                        &#10003;
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
                Un detaliu critic pe care multi il ignora:{" "}
                <strong style={{ color: "#fff" }}>consistenta NAP</strong> (Name,
                Address, Phone). Numele afacerii, adresa si telefonul trebuie sa
                fie identice pe Google Business Profile, pe website-ul tau si pe
                toate directoarele online. Orice inconsistenta &mdash; chiar si o
                prescurtare diferita a strazii &mdash; poate afecta negativ
                clasamentul local.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Factori de ranking local */}
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
                Factorii de ranking local &mdash; ce conteaza cel mai mult
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Conform studiilor Whitespark si Moz, acestia sunt factorii care
                influenteaza cel mai mult pozitionarea in rezultatele locale:
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
                      {["Factor", "Pondere", "Ce sa optimizezi"].map((h) => (
                        <th
                          key={h}
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "2px solid #14b8a6",
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Google Business Profile",
                        "32%",
                        "Completitudine, activitate, categorii corecte",
                      ],
                      [
                        "Semnale on-page",
                        "19%",
                        "NAP pe site, cuvinte cheie locale, pagini pe oras",
                      ],
                      [
                        "Recenzii",
                        "16%",
                        "Cantitate, calitate, rata de raspuns",
                      ],
                      [
                        "Semnale de link",
                        "11%",
                        "Backlink-uri locale, citatii",
                      ],
                      [
                        "Semnale comportamentale",
                        "8%",
                        "CTR, click-uri mobile, cereri directii",
                      ],
                      [
                        "Citari",
                        "7%",
                        "Consistenta NAP, directoare locale",
                      ],
                      [
                        "Personalizare",
                        "7%",
                        "Locatia utilizatorului, istoric cautari",
                      ],
                    ].map(([factor, weight, optimize], i) => (
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
                          {factor}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#14b8a6",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                          }}
                        >
                          {weight}
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
                          {optimize}
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
                Observa ca <strong style={{ color: "#fff" }}>Google Business Profile singur
                conteaza 32%</strong> din ranking. Asta inseamna ca daca nu ai
                un profil complet si activ, pierzi aproape o treime din potentialul
                tau de vizibilitate locala &mdash; indiferent cat de bun e
                website-ul tau.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Recenzii */}
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
                Recenzii &mdash; arma secreta a SEO-ului local
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Recenziile Google nu sunt doar o chestiune de imagine &mdash;
                sunt un <strong style={{ color: "#fff" }}>factor direct de ranking</strong>.
                Studiile arata ca fiecare crestere de 1 stea in rating-ul mediu
                aduce o crestere de <strong style={{ color: "#fff" }}>5-9% in venituri</strong>.
                Tinta ta: minim 50 de recenzii cu un rating de 4.5+ stele.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Cum obtii mai multe recenzii? Creeaza un link scurt direct catre
                formularul de review (il gasesti in Google Business Profile &gt;
                &bdquo;Ask for reviews&rdquo;) si trimite-l clientilor prin SMS,
                email sau WhatsApp la 24-48 de ore dupa achizitie. Rata de
                conversie medie: 10-15% din cereri devin recenzii.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
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
                    Raspuns la o recenzie pozitiva:
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    &bdquo;Multumim mult, [Nume]! Ne bucuram ca experienta a fost
                    pe placul tau. Te asteptam cu drag oricand!&rdquo;
                  </p>
                </div>
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
                    Raspuns la o recenzie negativa:
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    &bdquo;Ne pare rau sa auzim asta, [Nume]. Feedback-ul tau
                    conteaza pentru noi. Te rugam sa ne contactezi la [email/telefon]
                    ca sa putem rezolva situatia. Multumim ca ne-ai semnalat.&rdquo;
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: "#fff" }}>Regula de aur:</strong> raspunde
                la TOATE recenziile &mdash; pozitive si negative &mdash; in maxim
                24-48 de ore. Google masoara rata de raspuns si o foloseste ca
                semnal de activitate si de relevanta. Afacerile care raspund la
                recenzii au un rating perceput cu 0.12 stele mai mare decat cele
                care nu raspund.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Citari locale */}
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
                Citari locale &mdash; fundatia invizibila
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                O citare locala (local citation) este orice mentiune online a
                numelui, adresei si telefonului afacerii tale &mdash; cu sau fara
                link. Consistenta NAP pe toate platformele este{" "}
                <strong style={{ color: "#fff" }}>critica</strong> pentru SEO local.
                Chiar si o diferenta minora (ex: &bdquo;Str.&rdquo; vs.
                &bdquo;Strada&rdquo;) poate crea confuzie pentru Google.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Directoarele esentiale pentru afacerile din Romania:
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
                    gap: "10px",
                  }}
                >
                  {[
                    ["Google Business Profile", "Obligatoriu — baza #1"],
                    ["Facebook Business Page", "Al doilea cel mai important profil"],
                    ["Yelp", "Relevant pentru HoReCa si servicii"],
                    ["Yellow Pages / Pagini Aurii", "Directorul clasic, inca relevant"],
                    ["TripAdvisor", "Esential pentru turism si HoReCa"],
                    ["Firme.info / Listafirme.ro", "Directoare romanesti de afaceri"],
                    ["Directoare specifice industriei", "Ex: TopDoctors, Avocatnet, etc."],
                  ].map(([name, desc]) => (
                    <li
                      key={name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: "#fff", fontWeight: 600 }}>
                        {name}
                      </span>
                      <span>{desc}</span>
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
                Recomandarea noastra: incepe cu cele mai importante 10-15
                directoare, asigura-te ca NAP-ul e identic pe toate, apoi
                adauga treptat directoarele specifice industriei tale. Un audit
                trimestrial al citatiilor te ajuta sa identifici inconsistentele
                inainte sa afecteze ranking-ul.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Continut local */}
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
                Continut local &mdash; strategia care te diferentiaza
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Daca deservesti mai multe orase sau zone, creeaza{" "}
                <strong style={{ color: "#fff" }}>pagini dedicate pentru fiecare locatie</strong>.
                Nu duplica continutul &mdash; fiecare pagina trebuie sa aiba
                informatii unice: testimoniale locale, studii de caz din zona
                respectiva, referinte la puncte de reper locale si informatii
                specifice despre serviciile oferite acolo.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Pe langa paginile de locatie, blog-ul tau poate deveni o arma
                puternica de SEO local. Scrie despre{" "}
                <strong style={{ color: "#fff" }}>evenimente locale</strong>,
                parteneriatele cu alte afaceri din zona, ghiduri specifice
                orasului si stiri relevante din comunitate. Acest tip de continut
                atrage backlink-uri locale naturale &mdash; de la presa locala,
                bloguri din oras si parteneri de business.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Nu uita de <strong style={{ color: "#fff" }}>schema markup</strong> (LocalBusiness).
                Adauga date structurate pe website cu tipul afacerii, adresa,
                programul de functionare, rating-ul si coordonatele GPS. Asta
                ajuta Google sa inteleaga exact ce esti, unde esti si cand esti
                deschis &mdash; si creste sansele de a aparea in rezultate
                imbogatite (rich results).
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: "#fff" }}>Strategia link-building local:</strong>{" "}
                inscrie-te in Camera de Comert locala, sponsorizeaza un eveniment
                local, participa la initiative comunitare. Fiecare mentiune cu
                link de pe un site local relevant este un semnal puternic pentru
                Google ca afacerea ta e o parte activa a comunitatii locale.
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
                Domina rezultatele locale
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
                Optimizam profilul tau Google Business, construim citari locale
                si cream continut care te pozitioneaza pe primul loc in orasul
                tau. Rezultate vizibile in 30-90 de zile.
              </p>
              <Link href="/solutii-seo-ro/" className="btn-primary">
                Vezi solutiile SEO <ArrowRight size={16} />
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
                    GEO: Optimizare pentru AI Search &mdash; Noul SEO
                  </h3>
                  <Link
                    href="/blog/geo-optimizare-ai-search/"
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

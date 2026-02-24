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
              3 Februarie 2026 &middot; 8 min citire
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
              De ce nu functioneaza{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                marketingul digital al afacerii tale?
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
              10 motive reale pentru care campaniile esueaza si cum sa
              diagnostichezi si rezolvi fiecare problema &mdash; pas cu pas.
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
                &bdquo;Am incercat Google Ads si nu a mers.&rdquo; &bdquo;Am
                investit in SEO 3 luni si nu s-a intamplat nimic.&rdquo;
                &bdquo;Social media e o pierdere de bani.&rdquo; Suna cunoscut?
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Problema nu e de obicei canalul &mdash; ci executia. Dupa ani de
                lucru cu zeci de companii care veneau &bdquo;arse&rdquo; de
                experienta anterioara cu marketingul digital, am identificat un
                pattern clar: aceleasi 10 greseli apar in mod repetat,
                indiferent de industrie sau buget.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest articol analizam fiecare motiv in detaliu si iti dam
                solutia concreta pentru fiecare. Daca te regasesti in cel putin
                3 din cele de mai jos, ai gasit de ce marketingul tau digital nu
                functioneaza.
              </p>
            </div>
          </FadeInSection>

          {/* 10 motive reale */}
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
                10 motive reale pentru care marketingul digital nu functioneaza
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Fiecare motiv vine cu o problema specifica si o solutie
                actionabila. Citeste-le pe toate &mdash; s-ar putea sa te
                regasesti in mai multe decat crezi.
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
                    title: "1. Nu ai o strategie clara",
                    problem:
                      "Rulezi reclame fara o strategie documentata. E ca si cum ai conduce fara GPS &mdash; ajungi undeva, dar rareori acolo unde trebuie. Fara un plan clar, bugetul se risipeste pe actiuni disparate care nu se leaga intre ele.",
                    solution:
                      "Incepe cu obiective SMART, defineste publicul tinta, alege canalele pe baza datelor si creeaza un calendar editorial. O strategie nu trebuie sa fie un document de 50 de pagini &mdash; dar trebuie sa existe si sa fie respectata.",
                  },
                  {
                    title: "2. Targetezi pe toata lumea",
                    problem:
                      "\"Toti barbatii si femeile intre 18 si 65 de ani\" nu e targeting. Cand incerci sa vinzi tuturor, nu vinzi nimanui. Mesajul devine generic, CTR-ul e slab si costul per conversie explodeaza.",
                    solution:
                      "Creeaza 2-3 buyer personas cu demografice specifice, interese, dureri si motivatii. Segmenteaza campaniile pe aceste profiluri si adapteaza mesajul pentru fiecare. Un mesaj relevant pentru 1.000 de oameni bate un mesaj generic pentru 100.000.",
                  },
                  {
                    title: "3. Site-ul tau nu converteste",
                    problem:
                      "Reclame excelente care duc la un landing page slab = buget irosit. Daca site-ul se incarca greu, nu e optimizat pe mobil sau nu are CTA-uri clare, vizitatorii pleaca in 3 secunde. Rata de bounce de 80%+ e un semn clar.",
                    solution:
                      "Optimizeaza landing page-urile inainte de a scala bugetul de ads. Verifica viteza de incarcare (sub 3 secunde), responsive design, mesaj consistent cu reclama si CTA-uri vizibile above the fold. Testeaza cu Google PageSpeed Insights.",
                  },
                  {
                    title: "4. Nu ai tracking corect",
                    problem:
                      "Daca nu poti masura, nu poti imbunatati. Multe companii ruleaza campanii fara Google Analytics 4 configurat corect, fara conversion tracking sau fara UTM parameters. Practic, arunci bani in intuneric.",
                    solution:
                      "Configureaza Google Analytics 4 cu evenimente personalizate, instaleaza pixelii de conversie pe toate platformele, foloseste UTM parameters pentru fiecare campanie si creeaza un dashboard de raportare. Datele corecte sunt fundatia oricarei optimizari.",
                  },
                  {
                    title: "5. Buget prea mic",
                    problem:
                      "200 EUR/luna pe Google Ads nu genereaza suficiente date ca sa inveti ce functioneaza. Cu un buget mic impartit pe 5 canale, niciunul nu primeste suficient combustibil ca sa produca rezultate masurabile.",
                    solution:
                      "Concentreaza bugetul pe un singur canal, atinge semnificanta statistica, optimizeaza, apoi scaleaza. E mai bine sa investesti 500 EUR/luna pe un canal care functioneaza decat 100 EUR/luna pe 5 canale care nu au date suficiente.",
                  },
                  {
                    title: "6. Asteptari nerealiste",
                    problem:
                      "SEO produce rezultate in 6-12 luni, nu in 2 saptamani. Google Ads are nevoie de 2-4 saptamani de learning phase. Construirea unui brand dureaza ani. Cand asteptarile nu se aliniaza cu realitatea, orice canal pare ca \"nu functioneaza\".",
                    solution:
                      "Seteaza timeline-uri realiste pentru fiecare canal: Google Ads (2-4 saptamani learning + 2-3 luni optimizare), SEO (6-12 luni pentru rezultate semnificative), Social Media organic (3-6 luni pentru tractiune). Compara cu benchmark-uri din industrie, nu cu asteptari fictive.",
                  },
                  {
                    title: "7. Continut generic",
                    problem:
                      "\"Suntem cea mai buna agentie\" sau \"Calitate la cel mai bun pret\" nu rezoneza cu nimeni. Continutul generic nu adreseaza durerile specifice ale publicului tau si nu te diferentiaza de competitie. Rezultatul? Scroll infinit si zero engagement.",
                    solution:
                      "Creeaza continut care adreseaza probleme specifice cu date si exemple concrete. Foloseste limbajul publicului tau, nu jargon corporatist. Spune povesti reale, arata studii de caz si ofera valoare inainte de a cere ceva in schimb.",
                  },
                  {
                    title: "8. Nu faci A/B testing",
                    problem:
                      "Ghicesti in loc sa testezi. Rulezi o singura varianta de headline, un singur CTA, o singura audienta &mdash; si daca nu merge, schimbi tot. Fara testare sistematica, optimizarea e imposibila.",
                    solution:
                      "Testeaza un element pe rand: headline-uri, CTA-uri, audiente, creative-uri. Lasa testele sa ruleze pana ating semnificanta statistica (minim 100 conversii per varianta). Documenteaza rezultatele si aplica invatamintele in campaniile viitoare.",
                  },
                  {
                    title: "9. Ignori datele",
                    problem:
                      "Deciziile bazate pe sentimente in loc de analytics. \"Mie imi place creative-ul asta\" sau \"Simt ca Facebook e mai bun decat Google\" nu sunt argumente valide. Bias-urile subiective sunt inamicul #1 al performantei.",
                    solution:
                      "Implementeaza review-uri saptamanale ale datelor. Analizeaza CTR, CPC, rata de conversie, ROAS si CPA per canal, audienta si creative. Ia decizii bazate pe date, nu pe pareri. Un dashboard clar si KPI-uri definite fac diferenta.",
                  },
                  {
                    title: "10. Schimbi strategia prea des",
                    problem:
                      "Luna asta Google Ads, luna viitoare TikTok, peste 2 saptamani SEO. Cand schimbi canalul sau strategia in fiecare luna, niciuna nu are timp sa produca rezultate. E echivalentul digital al plantarii unui copac si dezgroparii lui dupa o saptamana ca sa vezi daca a crescut.",
                    solution:
                      "Angajeaza-te la o strategie pentru minim 3 luni inainte de a pivota. Defineste KPI-uri intermediare (nu doar vanzari finale) si evalueaza progresul lunar. Daca dupa 3 luni datele arata ca nu functioneaza, pivoteaza bazat pe ce ai invatat, nu pe frustrare.",
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
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        marginBottom: "12px",
                      }}
                    >
                      <strong style={{ color: "rgba(255,255,255,0.6)" }}>
                        Problema:
                      </strong>{" "}
                      {item.problem}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      <strong style={{ color: "#3b82f6" }}>
                        Solutia:
                      </strong>{" "}
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Diagnostic rapid */}
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
                Diagnostic rapid: checklist in 2 minute
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Raspunde cu Da sau Nu la fiecare intrebare. Fiecare
                &bdquo;Nu&rdquo; indica o zona cu probleme care trebuie
                rezolvata prioritar.
              </p>

              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                }}
              >
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
                    "Ai o strategie de marketing documentata cu obiective clare?",
                    "Ai definit 2-3 buyer personas specifice?",
                    "Landing page-urile tale se incarca in sub 3 secunde si sunt optimizate pe mobil?",
                    "Ai Google Analytics 4 configurat cu conversion tracking activ?",
                    "Bugetul tau de ads e concentrat pe 1-2 canale principale?",
                    "Ai asteptari realiste aliniate cu timeline-urile fiecarui canal?",
                    "Continutul tau adreseaza dureri specifice ale publicului tinta?",
                    "Faci A/B testing sistematic pe campanii?",
                    "Ai review-uri saptamanale ale datelor si KPI-urilor?",
                    "Strategia ta actuala are minim 3 luni de implementare consecventa?",
                  ].map((question, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "12px",
                        borderBottom:
                          i < 9
                            ? "1px solid rgba(255,255,255,0.04)"
                            : "none",
                      }}
                    >
                      <span
                        style={{
                          color: "#3b82f6",
                          fontWeight: 700,
                          flexShrink: 0,
                          minWidth: "24px",
                        }}
                      >
                        {i + 1}.
                      </span>
                      {question}
                    </li>
                  ))}
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginTop: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>8-10 Da:</strong> Strategia ta
                e solida &mdash; cauta optimizari granulare.{" "}
                <strong style={{ color: "#fff" }}>5-7 Da:</strong> Ai fundatia,
                dar sunt gap-uri importante de rezolvat.{" "}
                <strong style={{ color: "#fff" }}>Sub 5 Da:</strong> Marketingul
                tau digital are nevoie de o restructurare completa inainte de a
                investi mai mult.
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
                Vrei un diagnostic gratuit?
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
                Echipa noastra analizeaza campaniile tale actuale, identifica
                problemele si iti ofera un plan de actiune concret &mdash;
                gratuit, fara obligatii.
              </p>
              <Link href="/contact/" className="btn-primary">
                Contacteaza-ne <ArrowRight size={16} />
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
                    Cum sa alegi agentia de marketing potrivita: checklist in 10
                    pasi
                  </h3>
                  <Link
                    href="/blog/cum-alegi-agentie-marketing/"
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
                    Strategie de marketing digital: ghidul complet pentru 2026
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
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="ro" />
    </>
  );
}

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
                "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
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
                background: "rgba(245,158,11,0.10)",
                color: "#f59e0b",
                border: "1px solid rgba(245,158,11,0.18)",
              }}
            >
              E-commerce
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              8 Februarie 2026 &middot; 13 min citire
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
              15 strategii testate sa cresti{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #f59e0b 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                vanzarile in magazinul online
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
              Nu exista o singura reteta magica pentru a creste vanzarile. Secretul
              sta in a combina mai multe imbunatatiri mici care, impreuna, genereaza
              un impact masiv. Iata 15 strategii pe care le-am testat pe zeci de
              clienti e-commerce.
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
                Cresterea unui magazin online nu tine de un singur hack viral sau de
                o singura campanie &bdquo;perfecta&rdquo;. Cele mai performante
                magazine pe care le-am gestionat cresc consistent pentru ca
                optimizeaza simultan pe trei axe: achizitie, conversie si retentie.
                Daca ignori una dintre ele, celelalte doua nu pot compensa.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In acest ghid am adunat 15 strategii pe care le-am aplicat si
                validat pe magazinele clientilor nostri &mdash; de la branduri
                romanesti aflate la inceput pana la e-commerce-uri cu milioane de
                lei vanzari lunare. Fiecare strategie vine cu un nivel de efort si
                un impact estimat, ca sa stii de unde sa incepi.
              </p>
            </div>
          </FadeInSection>

          {/* ── ACHIZITIE (1-5) ── */}
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
                Achizitie: Atrage mai multi clienti potentiali
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Fara trafic relevant, niciun magazin nu poate creste. Dar nu orice
                trafic conteaza &mdash; conteaza sa aduci oameni cu intentie de
                cumparare. Iata cele mai eficiente canale de achizitie:
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
                    num: "1",
                    title: "Google Shopping Ads cu feed de produs optimizat",
                    desc: "Google Shopping este canalul cu cel mai mare intent de cumparare. Utilizatorii care cauta un produs specific si vad pretul, poza si ratingul direct in rezultate sunt gata sa cumpere. Cheia e un feed de produs impecabil: titluri cu cuvinte cheie relevante, descrieri complete, imagini de calitate si preturi actualizate in timp real. Un feed optimizat poate reduce CPC-ul cu 20-30% si creste CTR-ul cu 40%+.",
                  },
                  {
                    num: "2",
                    title: "Meta Dynamic Product Ads cu retargeting",
                    desc: "Reclamele dinamice pe Meta (Facebook si Instagram) arata fiecarui utilizator exact produsele pe care le-a vazut pe site-ul tau. E cel mai simplu mod de a recupera vizitatorii care au plecat fara sa cumpere. Seteaza audienta de retargeting pe 7, 14 si 30 de zile cu mesaje diferite (reminder, oferta, social proof). ROAS-ul mediu pe retargeting e de 5-10x.",
                  },
                  {
                    num: "3",
                    title: "SEO pentru pagini de produs si categorii",
                    desc: "Optimizarea SEO a paginilor de categorii si produse aduce trafic organic cu intentie de cumparare ridicata, fara cost pe click. Concentreaza-te pe titluri H1 cu cuvinte cheie de volum mare, meta descrieri persuasive, continut unic pe fiecare pagina de categorie (min. 300 cuvinte), schema markup pentru produse (pret, disponibilitate, review-uri) si URL-uri curate si descriptive.",
                  },
                  {
                    num: "4",
                    title: "Parteneriate cu influenceri si UGC",
                    desc: "Continutul generat de utilizatori (UGC) si parteneriatele cu micro-influenceri (5k-50k urmaritori) ofera social proof autentic la costuri mult mai mici decat productiile clasice. Un video de unboxing sau un review real converteste de 3-5x mai bine decat o reclama de studio. Negociaza pe baza de comision per vanzare ca sa minimizezi riscul.",
                  },
                  {
                    num: "5",
                    title: "Construirea listei de email cu lead magnets",
                    desc: "Un popup cu 10% discount la prima comanda pare simplu, dar functioneaza. Rata medie de conversie a unui popup bine optimizat e de 3-5% din vizitatori. Daca ai 10.000 vizitatori/luna, inseamna 300-500 emailuri noi lunar. Acesti abonati au o valoare pe termen lung de 3-5x mai mare decat un vizitator anonim, pentru ca poti sa-i recontactezi gratuit.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#f59e0b",
                          background: "rgba(245,158,11,0.10)",
                          borderRadius: "8px",
                          padding: "4px 10px",
                        }}
                      >
                        #{item.num}
                      </span>
                      <h3
                        className="font-bold text-white"
                        style={{
                          fontSize: "1rem",
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
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

          {/* ── CONVERSIE (6-10) ── */}
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
                Conversie: Transforma vizitatorii in cumparatori
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Cel mai scump trafic din lume nu valoreaza nimic daca site-ul tau nu
                converteste. Rata medie de conversie in e-commerce e de 2-3%, dar
                magazinele optimizate ajung constant la 4-6%. Iata cum:
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
                    num: "6",
                    title: "Optimizeaza paginile de produs",
                    desc: "Pagina de produs e unde se ia decizia de cumparare. Investeste in fotografii profesionale din mai multe unghiuri, video de produs (creste conversiile cu 20-40%), descrieri care vand beneficii nu doar specificatii, informatii clare despre livrare si retur, si un buton de CTA vizibil fara scroll. Fiecare element de pe pagina trebuie sa raspunda la intrebarea: De ce sa cumpar de la tine?",
                  },
                  {
                    num: "7",
                    title: "Adauga social proof (review-uri, rating-uri, foto UGC)",
                    desc: "92% dintre consumatori citesc review-urile inainte sa cumpere. Afiseaza review-uri cu stele direct sub titlul produsului, permite clientilor sa incarce foto cu produsul primit, arata numarul de produse vandute sau numarul de clienti multumiti. Un produs cu 5+ review-uri are o rata de conversie cu 270% mai mare decat unul fara review-uri.",
                  },
                  {
                    num: "8",
                    title: "Simplifica checkout-ul (max 3 pasi, guest checkout)",
                    desc: "Fiecare pas in plus in checkout pierde 10-15% dintre cumparatori. Ofera guest checkout (nu forta crearea unui cont), limiteaza formularul la campurile esentiale, afiseaza un progress bar clar (Pas 1 din 3), ofera mai multe metode de plata (card, ramburs, rate) si pastreaza costurile de livrare vizibile din cos, nu ca surpriza la final.",
                  },
                  {
                    num: "9",
                    title: "Pragul de livrare gratuita (setat 20% peste AOV)",
                    desc: "Livrarea gratuita e cel mai puternic stimulent de conversie. Seteaza pragul cu 20% peste valoarea medie a comenzii (AOV). Daca AOV-ul tau e 200 lei, seteaza livrare gratuita de la 240 lei. Afiseaza un progress bar in cos: Mai ai 40 lei pana la livrare gratuita. Aceasta strategie creste AOV-ul cu 10-15% in medie si reduce rata de abandon cos.",
                  },
                  {
                    num: "10",
                    title: "Urgenta si scarcity (stoc limitat, countdown la oferte)",
                    desc: "Urgenta psihologica functioneaza cand e autentica. Afiseaza stocul real cand e sub 10 unitati (Mai sunt doar 3 bucati!), adauga un countdown timer pentru promotii cu data de expirare reala, si arata cati oameni vizualizeaza produsul in timp real. Nu fabrica urgenta falsa &mdash; clientii o detecteaza si pierzi incredere.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#f59e0b",
                          background: "rgba(245,158,11,0.10)",
                          borderRadius: "8px",
                          padding: "4px 10px",
                        }}
                      >
                        #{item.num}
                      </span>
                      <h3
                        className="font-bold text-white"
                        style={{
                          fontSize: "1rem",
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
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

          {/* ── RETENTIE (11-15) ── */}
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
                Retentie: Fidelizeaza si creste valoarea pe client
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Achizitia unui client nou costa de 5-7 ori mai mult decat
                pastrarea unuia existent. Magazinele cu o rata de retentie de 5%
                mai mare genereaza cu 25-95% mai mult profit. Retentia e unde se
                construieste profitabilitatea reala:
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
                    num: "11",
                    title: "Flow de email post-cumparare",
                    desc: "Dupa fiecare comanda, trimite un flow automat: email de confirmare si multumire (imediat), email cu sfaturi de utilizare a produsului (ziua 3), cerere de review cu link direct (ziua 7-10), recomandari de produse complementare cross-sell (ziua 14), oferta de re-cumparare daca produsul e consumabil (ziua 30). Acest flow singur poate genera 15-25% din venitul total pe email.",
                  },
                  {
                    num: "12",
                    title: "Program de loialitate si recompense",
                    desc: "Un program de puncte sau niveluri (Bronze, Silver, Gold) creste frecventa de cumparare cu 20-30%. Ofera puncte pentru fiecare comanda, review, referral si share pe social media. Clientii din programul de loialitate au un lifetime value de 3-5x mai mare decat clientii obisnuiti si sunt cei mai buni ambasadori ai brandului tau.",
                  },
                  {
                    num: "13",
                    title: "Campanii win-back pentru clienti inactivi",
                    desc: "Clientii care nu au mai cumparat de 60-90 de zile nu sunt pierduti &mdash; sunt doar adormiti. Trimite un flow win-back cu: un email de reconectare (Ne-a fost dor de tine), un email cu cele mai vandute produse noi, o oferta exclusiva cu deadline (10% discount valabil 48h). Rata de recuperare medie e de 5-10% din clientii inactivi, ceea ce inseamna venituri practic gratuite.",
                  },
                  {
                    num: "14",
                    title: "Abonamente si auto-replenish pentru produse consumabile",
                    desc: "Daca vinzi produse consumabile (suplimente, cosmetice, cafea, hrana animale), ofera optiunea de abonament cu 10-15% discount. Modelul de subscriptie creste predictibilitatea veniturilor, reduce costul de achizitie pe termen lung la aproape zero si creste dramatic lifetime value-ul fiecarui client. Clientii cu abonament au o retentie de 3-4x mai mare.",
                  },
                  {
                    num: "15",
                    title: "Recomandari personalizate de produse",
                    desc: "Recomandarile personalizate (Clientii care au cumparat X au cumparat si Y) genereaza in medie 10-30% din veniturile unui magazin online. Implementeaza-le pe pagina de produs, in cos, in emailurile post-cumparare si pe homepage. Algoritmii de recomandare cresc AOV-ul, rata de conversie si satisfactia clientilor simultan.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#f59e0b",
                          background: "rgba(245,158,11,0.10)",
                          borderRadius: "8px",
                          padding: "4px 10px",
                        }}
                      >
                        #{item.num}
                      </span>
                      <h3
                        className="font-bold text-white"
                        style={{
                          fontSize: "1rem",
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
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

          {/* ── Impact estimat ── */}
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
                Impact estimat per strategie
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Nu toate strategiile au acelasi raport efort/impact. Iata un
                overview ca sa stii cu ce sa incepi:
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
                      {["Strategie", "Efort", "Impact estimat", "Timeline"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #f59e0b",
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
                        "Google Shopping",
                        "Mediu",
                        "+20-40% venit",
                        "1-2 luni",
                      ],
                      [
                        "Meta retargeting",
                        "Scazut",
                        "+10-20% venit",
                        "2-4 saptamani",
                      ],
                      [
                        "Optimizare pagini produs",
                        "Mediu",
                        "+15-30% conversie",
                        "2-4 saptamani",
                      ],
                      [
                        "Email flows",
                        "Mediu",
                        "+15-25% venit",
                        "1-2 luni",
                      ],
                      [
                        "Prag livrare gratuita",
                        "Scazut",
                        "+10-15% AOV",
                        "Imediat",
                      ],
                    ].map(([strategie, efort, impact, timeline], i) => (
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
                          {strategie}
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
                          {efort}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#f59e0b",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {impact}
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
                Creste vanzarile magazinului tau
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
                Implementam strategiile potrivite pentru magazinul tau online
                &mdash; de la Google Shopping si Meta Ads pana la email flows si
                optimizare conversii.
              </p>
              <Link href="/magazine-online-ro/" className="btn-primary">
                Vezi solutiile pentru e-commerce <ArrowRight size={16} />
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
                      color: "#f59e0b",
                    }}
                  >
                    E-commerce
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    De ce iti abandoneaza clientii cosul (si cum repari)
                  </h3>
                  <Link
                    href="/blog/abandon-cos-cumparaturi/"
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
                    Email marketing pentru e-commerce: ghid complet
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
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="ro" />
    </>
  );
}

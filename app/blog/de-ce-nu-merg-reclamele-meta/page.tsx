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
                background: "rgba(86,219,132,0.10)",
                color: "#56db84",
                border: "1px solid rgba(86,219,132,0.18)",
              }}
            >
              Paid Ads
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              18 Februarie 2026 &middot; 10 min citire
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
              De Ce Nu-ti Merg{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Reclamele pe Meta?
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
              Daca arunci bani pe Facebook si Instagram Ads fara rezultate,
              problema nu e platforma. Descopera cele 7 greseli care iti
              saboteaza campaniile &mdash; si cum le repari.
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
                Meta Ads (Facebook + Instagram) ramane una dintre cele mai
                puternice platforme de publicitate digitala, cu peste 3 miliarde
                de utilizatori activi lunar. Dar din ce in ce mai multi
                antreprenori ne spun acelasi lucru: &bdquo;Am incercat, nu
                merge, am pierdut bani.&rdquo;
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In 95% din cazuri, problema nu e platforma &mdash; ci modul in
                care sunt configurate campaniile. Dupa auditarea a peste 200 de
                conturi de Meta Ads, am identificat 7 greseli care apar
                constant. Le-am documentat aici, impreuna cu solutiile concrete.
              </p>
            </div>
          </FadeInSection>

          {/* Mistake 1 */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(86,219,132,0.10)",
                    color: "#56db84",
                    fontWeight: 800,
                    fontSize: "0.9375rem",
                    flexShrink: 0,
                  }}
                >
                  1
                </span>
                <h2
                  className="font-bold text-white"
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Targetezi prea larg
                </h2>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                &bdquo;Barbati si femei, 18-65, Romania&rdquo; &mdash; daca
                asa arata audienta ta, arunci bani pe fereastra. Meta are nevoie
                de semnale clare ca sa-si optimizeze algoritmul. Cand targetezi
                toata populatia, algoritmul nu stie cui sa arate reclama si
                cheltuie bugetul pe afisari inutile.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Solutia:</strong> Incepe cu
                audiente specifice bazate pe interese, comportamente sau
                lookalike audiences din lista ta de clienti existenti. O audienta
                de 500.000 &ndash; 2.000.000 de persoane e ideal pentru
                majoritatea business-urilor din Romania. Apoi, dupa ce ai
                suficiente date de conversie (50+ conversii/saptamana), poti
                largi treptat.
              </p>
            </div>
          </FadeInSection>

          {/* Mistake 2 */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(86,219,132,0.10)",
                    color: "#56db84",
                    fontWeight: 800,
                    fontSize: "0.9375rem",
                    flexShrink: 0,
                  }}
                >
                  2
                </span>
                <h2
                  className="font-bold text-white"
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Creative-urile sunt generice
                </h2>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Stock photos cu oameni zambind, text generic suprapus, niciun
                hook in primele 3 secunde ale video-ului. In 2026, utilizatorii
                scrolleaza prin feed cu o viteza medie de 1.7 secunde per post.
                Daca nu captezi atentia instant, reclama ta e invizibila.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Solutia:</strong> Primele 3
                secunde conteaza cel mai mult. Incepe cu o intrebare provocatoare,
                un numar surprinzator sau o imagine care intrerupe scroll-ul.
                Foloseste UGC (user-generated content) &mdash; continut care
                arata ca un post organic, nu ca o reclama. Testimonialele video
                de la clienti reali au CTR de 2-3x mai mare decat creative-urile
                de studio.
              </p>
            </div>
          </FadeInSection>

          {/* Mistake 3 */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(86,219,132,0.10)",
                    color: "#56db84",
                    fontWeight: 800,
                    fontSize: "0.9375rem",
                    flexShrink: 0,
                  }}
                >
                  3
                </span>
                <h2
                  className="font-bold text-white"
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Nu ai Pixel-ul configurat corect
                </h2>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Meta Pixel e &bdquo;creierul&rdquo; din spatele campaniilor
                tale. Fara el, algoritmul zboara orb &mdash; nu stie cine a
                cumparat, cine a adaugat in cos, cine s-a uitat la pagina de
                pret. Fara aceste date, optimizarea campaniei e imposibila.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Am vazut conturi cu buget de 5.000+ EUR/luna care aveau Pixel-ul
                instalat, dar <strong style={{ color: "#fff" }}>fara niciun
                eveniment configurat</strong> dincolo de PageView. Asta
                inseamna ca Meta nu stie daca traficul generat a fost calificat
                sau nu.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Solutia:</strong> Configureaza
                minim aceste evenimente: ViewContent, AddToCart, InitiateCheckout,
                Purchase (sau Lead/Contact pentru servicii). Foloseste
                Conversions API (server-side tracking) pe langa Pixel pentru
                acuratete maxima, mai ales dupa restrictiile iOS 14.5+. Verifica
                evenimentele in Events Manager &mdash; daca vezi &bdquo;No
                activity yet&rdquo;, ai o problema.
              </p>
            </div>
          </FadeInSection>

          {/* Mistake 4 */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(86,219,132,0.10)",
                    color: "#56db84",
                    fontWeight: 800,
                    fontSize: "0.9375rem",
                    flexShrink: 0,
                  }}
                >
                  4
                </span>
                <h2
                  className="font-bold text-white"
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Buget prea mic pentru faza de learning
                </h2>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Algoritmul Meta are nevoie de aproximativ <strong style={{ color: "#fff" }}>50 de conversii
                pe saptamana</strong> per ad set ca sa iasa din faza de learning
                si sa optimizeze eficient. Daca bugetul tau e de 30 RON/zi si
                costul per conversie e 50 RON, matematica nu functioneaza
                &mdash; nu vei obtine niciodata suficiente conversii pentru
                optimizare.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Solutia:</strong> Calculeaza
                bugetul minim: CPA estimat &times; 50 &divide; 7 = buget zilnic
                per ad set. Daca CPA-ul tau e 40 RON, ai nevoie de minim 285
                RON/zi per ad set. Daca nu ai acest buget, optimizeaza pentru un
                eveniment mai sus in funnel (ex: AddToCart in loc de Purchase)
                care genereaza mai multe conversii la un cost mai mic.
              </p>
            </div>
          </FadeInSection>

          {/* Mistake 5 */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(86,219,132,0.10)",
                    color: "#56db84",
                    fontWeight: 800,
                    fontSize: "0.9375rem",
                    flexShrink: 0,
                  }}
                >
                  5
                </span>
                <h2
                  className="font-bold text-white"
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Nu testezi variante
                </h2>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                O singura varianta de creative, un singur copy, o singura
                audienta. Multi antreprenori lanseaza o campanie si asteapta
                rezultate fara sa testeze nimic. Dar fara A/B testing, nu stii
                ce functioneaza si ce nu &mdash; doar ghicesti.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Solutia:</strong> Testeaza
                sistematic: minim 3-4 variante de creative (imagine, video,
                carousel), 2-3 variante de copy (hook diferit, CTA diferit) si
                2-3 audiente. Foloseste campanii CBO (Campaign Budget
                Optimization) si lasa algoritmul sa aloce bugetul catre cele
                mai performante combinatii. Analizeaza rezultatele dupa minim
                1.000 de afisari per varianta inainte sa tragi concluzii.
              </p>
            </div>
          </FadeInSection>

          {/* Mistake 6 */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(86,219,132,0.10)",
                    color: "#56db84",
                    fontWeight: 800,
                    fontSize: "0.9375rem",
                    flexShrink: 0,
                  }}
                >
                  6
                </span>
                <h2
                  className="font-bold text-white"
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Landing page-ul nu converteste
                </h2>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Poti avea cea mai buna reclama din lume &mdash; daca trimiti
                traficul pe o pagina care se incarca in 8 secunde, nu e
                optimizata pe mobil si nu are legatura cu mesajul din ad, rata
                de conversie va fi sub 1%. Am auditat landing page-uri cu bounce
                rate de 85%+ pentru ca mesajul din reclama promitea un lucru, iar
                pagina livra altceva.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Solutia:</strong> Asigura-te
                ca landing page-ul se incarca in sub 3 secunde (testeaza cu
                Google PageSpeed Insights). Mesajul din hero trebuie sa continue
                exact promisiunea din reclama &mdash; aceeasi oferta, acelasi
                ton. Include social proof (testimoniale, numere de clienti,
                rating-uri), un singur CTA clar si elimina orice distractie
                (meniu de navigare complet, sidebar, link-uri externe).
              </p>
            </div>
          </FadeInSection>

          {/* Mistake 7 */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(86,219,132,0.10)",
                    color: "#56db84",
                    fontWeight: 800,
                    fontSize: "0.9375rem",
                    flexShrink: 0,
                  }}
                >
                  7
                </span>
                <h2
                  className="font-bold text-white"
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Nu ai rabdare cu algoritmul
                </h2>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Aceasta e greseala pe care o vedem cel mai des: lansezi campania
                luni, verifici marti dimineata, vezi ca CPM-ul e mare si
                CTR-ul e mic, pui pe pauza si modifici totul. Apoi miercuri faci
                la fel. Vineri ai rescratchuit totul. Algoritmul nu a avut
                niciun moment sa invete.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Algoritmul Meta are nevoie de <strong style={{ color: "#fff" }}>3-7 zile de faza de
                learning</strong> pentru a-si optimiza delivery-ul. De fiecare
                data cand faci o modificare semnificativa (buget, audienta,
                creative, bid strategy), contorul se reseteaza. Rezultatul:
                performanta instabila si costuri ridicate.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Solutia:</strong> Seteaza
                campania corect de la inceput (audienta, buget, creative-uri
                testate) si apoi &mdash; nu te atinge de ea minim 5-7 zile.
                Analizeaza performanta pe perioade de 7 zile, nu zilnic.
                Modificarile de buget sa fie de maxim 20% odata. Daca trebuie
                sa schimbi audienta sau creative-ul, creeaza un ad set nou in
                loc sa-l modifici pe cel existent.
              </p>
            </div>
          </FadeInSection>

          {/* Checklist */}
          <FadeInSection>
            <div
              style={{
                padding: "32px",
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                marginBottom: "48px",
              }}
            >
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.375rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Checklist rapid &mdash; Reclamele tale Meta sunt setate corect?
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {[
                  "Audienta are intre 500K - 2M persoane (nu toata Romania)",
                  "Creative-urile au hook in primele 3 secunde",
                  "Ai minim 3 variante de creative in testare",
                  "Meta Pixel e instalat cu evenimentele corecte (ViewContent, AddToCart, Purchase/Lead)",
                  "Conversions API (server-side) e activ langa Pixel",
                  "Bugetul zilnic permite minim 50 conversii/saptamana per ad set",
                  "Landing page-ul se incarca in sub 3 secunde pe mobil",
                  "Mesajul din landing page continua promisiunea din reclama",
                  "Nu modifici campaniile mai des de o data pe saptamana",
                  "Analizezi performanta pe perioade de 7+ zile, nu zilnic",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "22px",
                        height: "22px",
                        borderRadius: "6px",
                        border: "1.5px solid rgba(86,219,132,0.4)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.3)",
                  marginTop: "20px",
                  lineHeight: 1.6,
                }}
              >
                Daca ai bifat mai putin de 7 puncte, campaniile tale pierd bani.
                Repara aceste fundamente inainte sa maresti bugetul.
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
                Vrei un audit gratuit al campaniilor Meta?
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
                Analizam contul tau de Meta Ads si iti aratam exact unde pierzi
                bani si ce poti imbunatati. Fara obligatii, fara cost.
              </p>
              <Link href="/contact/" className="btn-primary">
                Solicita auditul gratuit <ArrowRight size={16} />
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

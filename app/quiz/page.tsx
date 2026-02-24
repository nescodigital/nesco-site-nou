// @ts-nocheck
'use client';

export default function QuizPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0d0f;
          --bg2: #111518;
          --bg3: #181d21;
          --border: #1e2428;
          --accent: #56db84;
          --accent2: #3db868;
          --text: #e8eaeb;
          --muted: #6b7880;
          --danger: #ff4d4d;
          --card-bg: #13181c;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Background handled by global ArrowPattern component */

        .wrapper {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
          padding: 60px 24px 120px;
        }

        .logo {
          margin-bottom: 60px;
          display: flex;
          align-items: center;
        }
        .logo img {
          height: 28px;
          width: auto;
        }

        .progress-wrap { margin-bottom: 48px; }
        .progress-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .progress-label {
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .progress-count {
          font-family: 'Satoshi', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--accent);
        }
        .progress-bar {
          height: 2px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 2px;
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 12px rgba(86,219,132,0.4);
        }

        .question-block { display: none; animation: fadeUp 0.4s ease forwards; }
        .question-block.active { display: block; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .question-tag {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 16px;
        }

        .question-text {
          font-family: 'Satoshi', sans-serif;
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 700;
          line-height: 1.2;
          color: var(--text);
          margin-bottom: 8px;
        }

        .question-sub {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 36px;
        }

        .options { display: flex; flex-direction: column; gap: 12px; }

        .option {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .option::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(86,219,132,0.04), transparent);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .option:hover { border-color: rgba(86,219,132,0.3); transform: translateX(4px); }
        .option:hover::before { opacity: 1; }

        .option.selected { border-color: var(--accent); background: rgba(86,219,132,0.06); }
        .option.selected::before { opacity: 1; }

        .option-marker {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--bg3);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Satoshi', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--muted);
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .option.selected .option-marker {
          background: var(--accent);
          border-color: var(--accent);
          color: #0a0d0f;
        }

        .option-text { font-size: 15px; line-height: 1.4; color: var(--text); font-weight: 400; }
        .option-sub { font-size: 13px; color: var(--muted); margin-top: 2px; }

        .nav {
          margin-top: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .btn-back {
          background: none;
          border: 1px solid var(--border);
          color: var(--muted);
          padding: 12px 20px;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-back:hover { border-color: var(--muted); color: var(--text); }
        .btn-back.hidden { visibility: hidden; }

        .btn-next {
          background: var(--accent);
          border: none;
          color: #0a0d0f;
          padding: 14px 28px;
          border-radius: 8px;
          font-family: 'Satoshi', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.4;
          pointer-events: none;
        }
        .btn-next.enabled { opacity: 1; pointer-events: all; }
        .btn-next.enabled:hover { background: #6ee89a; transform: translateX(2px); }

        .result-block { display: none; animation: fadeUp 0.5s ease forwards; }
        .result-block.active { display: block; }

        .result-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .tag-a { background: rgba(86,219,132,0.1); color: var(--accent); border: 1px solid rgba(86,219,132,0.2); }
        .tag-b { background: rgba(255,165,0,0.1); color: #ffa500; border: 1px solid rgba(255,165,0,0.2); }
        .tag-c { background: rgba(255,77,77,0.1); color: var(--danger); border: 1px solid rgba(255,77,77,0.2); }

        .result-title {
          font-family: 'Satoshi', sans-serif;
          font-size: clamp(26px, 5vw, 40px);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 16px;
          color: var(--text);
        }
        .result-title em { color: var(--accent); font-style: normal; }

        .result-desc {
          font-size: 16px;
          line-height: 1.7;
          color: #9aaab3;
          margin-bottom: 32px;
          max-width: 580px;
        }

        .result-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          margin-bottom: 24px;
        }

        .result-card-title {
          font-family: 'Satoshi', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
        }

        .result-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }

        .result-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          line-height: 1.5;
          color: var(--text);
        }

        .result-list li::before {
          content: '\u2192';
          color: var(--accent);
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .result-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--accent);
          color: #0a0d0f;
          padding: 16px 32px;
          border-radius: 10px;
          font-family: 'Satoshi', sans-serif;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
          margin-top: 8px;
          cursor: pointer;
          border: none;
        }
        .result-cta:hover {
          background: #6ee89a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(86,219,132,0.2);
        }

        .result-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: var(--muted);
          padding: 16px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
          margin-top: 8px;
          cursor: pointer;
          border: 1px solid var(--border);
        }
        .result-cta-secondary:hover { color: var(--text); border-color: var(--muted); }

        .cta-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-top: 12px; }

        .disclaimer { font-size: 13px; color: var(--muted); margin-top: 16px; line-height: 1.5; }

        .score-row { display: flex; gap: 6px; margin-bottom: 28px; }
        .score-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border); }
        .score-dot.lit { background: var(--accent); box-shadow: 0 0 8px rgba(86,219,132,0.5); }
        .score-dot.mid { background: #ffa500; }
        .score-dot.low { background: var(--danger); }

        .restart-btn {
          background: none;
          border: none;
          color: var(--muted);
          font-size: 13px;
          cursor: pointer;
          margin-top: 32px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .restart-btn:hover { color: var(--text); }

        @media (max-width: 480px) {
          .wrapper { padding: 40px 16px 80px; }
          .option { padding: 14px 16px; }
        }
      `}</style>

      <div className="wrapper">
        <div className="logo">
          <img src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png" alt="Nesco Digital" />
        </div>

        <div className="quiz-intro" style={{ marginBottom: '32px' }}>
          <div className="question-text" style={{ marginBottom: '8px' }}>Diagnostic rapid</div>
          <div className="question-sub" style={{ marginBottom: '0' }}>7 întrebări · sub 2 minute · rezultat personalizat instant</div>
        </div>

        <div className="progress-wrap" id="progressWrap">
          <div className="progress-info">
            <span className="progress-label">Diagnostic</span>
            <span className="progress-count" id="progressCount">1 / 7</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" id="progressFill" style={{ width: '14%' }}></div>
          </div>
        </div>

        {/* Q1 */}
        <div className="question-block active" id="q1">
          <div className="question-tag">Intrebarea 01</div>
          <div className="question-text">Cât face businessul tău lunar, în prezent?</div>
          <div className="question-sub">Aproximativ — ne ajută să înțelegem contextul și să îți dăm un răspuns relevant.</div>
          <div className="options">
            <div className="option" onClick={(e) => selectOpt(e, 1, 'A')}><div className="option-marker">A</div><div><div className="option-text">Sub 50.000 lei/luna</div><div className="option-sub">Încă în faza de creștere</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 1, 'B')}><div className="option-marker">B</div><div><div className="option-text">50.000 — 200.000 lei/luna</div><div className="option-sub">Business funcțional, în dezvoltare</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 1, 'C')}><div className="option-marker">C</div><div><div className="option-text">200.000 — 500.000 lei/luna</div><div className="option-sub">Business solid, vrei să scalezi</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 1, 'D')}><div className="option-marker">D</div><div><div className="option-text">Peste 500.000 lei/luna</div><div className="option-sub">Business matur, focus pe optimizare și profit</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back hidden">{'\u2190'} Inapoi</button>
            <button className="btn-next" id="next1" onClick={() => nextQ(1)}>Continua <span>{'\u2192'}</span></button>
          </div>
        </div>

        {/* Q2 */}
        <div className="question-block" id="q2">
          <div className="question-tag">Intrebarea 02</div>
          <div className="question-text">Ce tip de business ai?</div>
          <div className="question-sub">Lucrăm cu profiluri specifice — vrem să ne asigurăm că avem experiență relevantă pentru tine.</div>
          <div className="options">
            <div className="option" onClick={(e) => selectOpt(e, 2, 'A')}><div className="option-marker">A</div><div><div className="option-text">E-commerce — produse fizice</div><div className="option-sub">Magazin online, brand propriu sau dropshipping avansat</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 2, 'B')}><div className="option-marker">B</div><div><div className="option-text">Educație online / cursuri / coaching</div><div className="option-sub">Programe, cohort-uri, 1-to-1, mastermind</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 2, 'C')}><div className="option-marker">C</div><div><div className="option-text">SaaS sau produs digital</div><div className="option-sub">Software, tool, abonament digital</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 2, 'D')}><div className="option-marker">D</div><div><div className="option-text">Servicii / consultanță</div><div className="option-sub">Vinzi timp sau expertiză</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => backQ(2)}>{'\u2190'} Inapoi</button>
            <button className="btn-next" id="next2" onClick={() => nextQ(2)}>Continua <span>{'\u2192'}</span></button>
          </div>
        </div>

        {/* Q3 */}
        <div className="question-block" id="q3">
          <div className="question-tag">Intrebarea 03</div>
          <div className="question-text">Care e principala ta problemă acum?</div>
          <div className="question-sub">Alege ce descrie cel mai bine situația reală — nu cea pe care ți-ar plăcea să o ai.</div>
          <div className="options">
            <div className="option" onClick={(e) => selectOpt(e, 3, 'A')}><div className="option-marker">A</div><div><div className="option-text">Cheltuiesc pe marketing dar nu văd rezultate clare</div><div className="option-sub">ROAS slab, CPL mare, nu știu ce funcționează</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 3, 'B')}><div className="option-marker">B</div><div><div className="option-text">Am trafic dar nu convertește suficient</div><div className="option-sub">Oamenii vin pe site dar nu cumpără</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 3, 'C')}><div className="option-marker">C</div><div><div className="option-text">Venitul crește dar profitul nu ține pasul</div><div className="option-sub">Marjele scad, costurile cresc mai repede decât veniturile</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 3, 'D')}><div className="option-marker">D</div><div><div className="option-text">Sunt blocat la același nivel de 6+ luni</div><div className="option-sub">Stagnare — nu știu exact de ce și cum să ies din ea</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => backQ(3)}>{'\u2190'} Inapoi</button>
            <button className="btn-next" id="next3" onClick={() => nextQ(3)}>Continua <span>{'\u2192'}</span></button>
          </div>
        </div>

        {/* Q4 */}
        <div className="question-block" id="q4">
          <div className="question-tag">Intrebarea 04</div>
          <div className="question-text">Ai o echipă sau rulezi singur?</div>
          <div className="question-sub">Ne ajută să înțelegem complexitatea situației și ce tip de intervenție are sens.</div>
          <div className="options">
            <div className="option" onClick={(e) => selectOpt(e, 4, 'A')}><div className="option-marker">A</div><div><div className="option-text">Rulez singur — eu fac tot</div><div className="option-sub">Solopreneur, poate cu un freelancer ocazional</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 4, 'B')}><div className="option-marker">B</div><div><div className="option-text">Am 1-3 oameni in echipa</div><div className="option-sub">Mică echipă, încă implicat în execuție</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 4, 'C')}><div className="option-marker">C</div><div><div className="option-text">Am o echipa de 4-10 oameni</div><div className="option-sub">Am delegat operațiunile, mă ocup de strategie</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 4, 'D')}><div className="option-marker">D</div><div><div className="option-text">Peste 10 oameni sau complet delegat</div><div className="option-sub">Business matur cu management separat</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => backQ(4)}>{'\u2190'} Inapoi</button>
            <button className="btn-next" id="next4" onClick={() => nextQ(4)}>Continua <span>{'\u2192'}</span></button>
          </div>
        </div>

        {/* Q5 */}
        <div className="question-block" id="q5">
          <div className="question-tag">Intrebarea 05</div>
          <div className="question-text">Ce ai încercat deja să rezolvi situația?</div>
          <div className="question-sub">Onestitatea te ajută — ne spune unde suntem și ce are sens să facem diferit.</div>
          <div className="options">
            <div className="option" onClick={(e) => selectOpt(e, 5, 'A')}><div className="option-marker">A</div><div><div className="option-text">Am colaborat cu un partener extern — nu a mers</div><div className="option-sub">Rapoarte frumoase, rezultate slabe</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 5, 'B')}><div className="option-marker">B</div><div><div className="option-text">Am încercat să rezolv intern — nu am reușit</div><div className="option-sub">Am angajat un specialist sau am făcut eu, fără rezultat</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 5, 'C')}><div className="option-marker">C</div><div><div className="option-text">Nu am încercat încă nimic serios</div><div className="option-sub">Știu că e o problemă dar nu am acționat</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 5, 'D')}><div className="option-marker">D</div><div><div className="option-text">Am rezultate bune dar vreau să scalez mai departe</div><div className="option-sub">Sistemul merge, vreau mai mult</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => backQ(5)}>{'\u2190'} Inapoi</button>
            <button className="btn-next" id="next5" onClick={() => nextQ(5)}>Continua <span>{'\u2192'}</span></button>
          </div>
        </div>

        {/* Q6 */}
        <div className="question-block" id="q6">
          <div className="question-tag">Intrebarea 06</div>
          <div className="question-text">Ce așteptări ai de la un partener de marketing?</div>
          <div className="question-sub">Răspunsul tău ne ajută să înțelegem dacă putem livra ce cauți cu adevărat.</div>
          <div className="options">
            <div className="option" onClick={(e) => selectOpt(e, 6, 'A')}><div className="option-marker">A</div><div><div className="option-text">Să implementeze direct — nu vreau rapoarte, vreau rezultate</div><div className="option-sub">Intră, identifică, rezolvă. Fără ședințe interminabile.</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 6, 'B')}><div className="option-marker">B</div><div><div className="option-text">Să îmi dea o strategie clară pe care să o execut eu</div><div className="option-sub">Vreau direcție, nu execuție</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 6, 'C')}><div className="option-marker">C</div><div><div className="option-text">Să gestioneze reclamele lunar pe bază de retainer</div><div className="option-sub">O echipă externă care rulează campaniile</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 6, 'D')}><div className="option-marker">D</div><div><div className="option-text">Nu sunt sigur încă ce am nevoie</div><div className="option-sub">Mă aflu încă în faza de cercetare</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => backQ(6)}>{'\u2190'} Inapoi</button>
            <button className="btn-next" id="next6" onClick={() => nextQ(6)}>Continua <span>{'\u2192'}</span></button>
          </div>
        </div>

        {/* Q7 */}
        <div className="question-block" id="q7">
          <div className="question-tag">Intrebarea 07</div>
          <div className="question-text">Cât ești dispus să investești pentru a rezolva problema?</div>
          <div className="question-sub">Nu e un prag de calificare — e o întrebare de aliniere. Vrem să nu-ți pierdem timpul cu o ofertă nepotrivită.</div>
          <div className="options">
            <div className="option" onClick={(e) => selectOpt(e, 7, 'A')}><div className="option-marker">A</div><div><div className="option-text">Sub 1.000&euro;</div><div className="option-sub">Buget limitat momentan</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 7, 'B')}><div className="option-marker">B</div><div><div className="option-text">1.000&euro; — 3.000&euro;</div><div className="option-sub">Buget mediu, caut raport bun calitate-preț</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 7, 'C')}><div className="option-marker">C</div><div><div className="option-text">3.000&euro; — 6.000&euro;</div><div className="option-sub">Investesc serios dacă văd valoare clară</div></div></div>
            <div className="option" onClick={(e) => selectOpt(e, 7, 'D')}><div className="option-marker">D</div><div><div className="option-text">Peste 6.000&euro;</div><div className="option-sub">Bugetul nu e problema — rezultatele contează</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => backQ(7)}>{'\u2190'} Inapoi</button>
            <button className="btn-next" id="next7" onClick={() => showResult()}>Vezi rezultatul <span>{'\u2192'}</span></button>
          </div>
        </div>

        {/* RESULT A — FIT PERFECT */}
        <div className="result-block" id="resultA">
          <div className="result-tag tag-a">{'\u2713'} Fit confirmat</div>
          <div className="score-row" id="scoreA"></div>
          <div className="result-title">Ești exact<br /><em>profilul cu care lucrăm.</em></div>
          <div className="result-desc">
            Bazat pe răspunsurile tale, businessul tău are toate caracteristicile unui client Growth Sprint — nivel de venit relevant, problemă reală și claritate că vrei implementare, nu consultanță.
            <br /><br />
            Următorul pas e un apel de diagnostic de 30 de minute. Nu e un pitch — e o analiză a situației tale specifice. Îți spunem ce vedem și ce s-ar putea schimba în 6 săptămâni.
          </div>
          <div className="result-card">
            <div className="result-card-title">Ce se întâmplă în apel</div>
            <ul className="result-list">
              <li>Identificăm TOP 3 scurgeri de venituri din businessul tău</li>
              <li>Estimăm cât te costă fiecare pe lună</li>
              <li>Îți explicăm cum arată intervenția concretă</li>
              <li>Dacă nu găsim nimic relevant — îți spunem sincer</li>
            </ul>
          </div>
          <div className="cta-row">
            <a href="/perfect-fit" className="result-cta">Rezervă apelul gratuit {'\u2192'} 30 min</a>
          </div>
          <p className="disclaimer">Lucrăm cu maximum 3 clienți simultan. Dacă nu avem slot disponibil în această săptămână, îți confirmăm prin email următoarea dată liberă.</p>
          <button className="restart-btn" onClick={() => restart()}>{'\u21BA'} Încearcă din nou</button>
        </div>

        {/* RESULT B — APROAPE */}
        <div className="result-block" id="resultB">
          <div className="result-tag tag-b">{'\u2192'} Aproape — dar nu încă</div>
          <div className="score-row" id="scoreB"></div>
          <div className="result-title">Ești pe drumul cel bun.<br /><em>Dar nu e momentul potrivit</em> pentru Growth Sprint.</div>
          <div className="result-desc">
            Businessul tău are potențial real — dar la nivelul actual, o intervenție de tipul Growth Sprint ar costa mai mult decât valoarea pe care ar genera-o. Nu are sens să plătești pentru ceva ce nu îți poate da ROI clar acum.
            <br /><br />
            În schimb, ți-am pregătit ceva mai util pentru etapa ta: un ghid gratuit cu cele mai frecvente scurgeri de venituri și cum le identifici singur.
          </div>
          <div className="result-card">
            <div className="result-card-title">Ce primești gratuit</div>
            <ul className="result-list">
              <li>Ghidul complet: &ldquo;Unde se pierd banii in businessurile de 500k+/luna&rdquo;</li>
              <li>Lista de 7 scurgeri cu semnalele de alarmă exacte</li>
              <li>Ce poți face singur vs ce necesită un operator extern</li>
              <li>Când are sens să lucrezi cu cineva ca Nesco Digital</li>
            </ul>
          </div>
          <div className="cta-row">
            <button className="result-cta" style={{ background: '#ffa500' }}>Vreau ghidul gratuit {'\u2192'}</button>
            <a href="/blog" className="result-cta-secondary">Vezi resursele gratuite</a>
          </div>
          <p className="disclaimer">Vei primi ghidul pe email instant. Fără spam — doar conținut relevant pentru businessul tău.</p>
          <button className="restart-btn" onClick={() => restart()}>{'\u21BA'} Încearcă din nou</button>
        </div>

        {/* RESULT C — NOT A FIT */}
        <div className="result-block" id="resultC">
          <div className="result-tag tag-c">{'\u2715'} Nu e potrivit acum</div>
          <div className="score-row" id="scoreC"></div>
          <div className="result-title">Sincer: <em>nu suntem<br />potriviți unul pentru celălalt</em> acum.</div>
          <div className="result-desc">
            Apreciem că ai completat diagnosticul — și tocmai de aceea îți spunem direct: serviciile noastre nu sunt calibrate pentru etapa în care te afli. O colaborare acum nu ți-ar aduce ROI real și nu vrem să pierdem nici tu, nici noi timp.
            <br /><br />
            Asta nu înseamnă că nu există resurse utile pentru tine chiar acum.
          </div>
          <div className="result-card">
            <div className="result-card-title">Ce recomandăm în schimb</div>
            <ul className="result-list">
              <li>Concentrează-te pe validarea produsului și primii clienți plătitori</li>
              <li>Investește în conținut organic înainte de paid ads</li>
              <li>Descarcă ghidul nostru gratuit — are informații aplicabile la orice nivel</li>
              <li>Revino când businessul tău depășește pragul de 200.000 lei/lună</li>
            </ul>
          </div>
          <div className="cta-row">
            <button className="result-cta" style={{ background: '#333', color: 'var(--text)' }}>Descarcă ghidul gratuit {'\u2192'}</button>
          </div>
          <p className="disclaimer">Îți mulțumim pentru onestitate. Succes cu businessul tău — când ești pregătit, știi unde să ne găsești.</p>
          <button className="restart-btn" onClick={() => restart()}>{'\u21BA'} Încearcă din nou</button>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          const answers = {};
          const totalQ = 7;

          function selectOpt(e, q, val) {
            answers[q] = val;
            document.querySelectorAll('#q' + q + ' .option').forEach(o => o.classList.remove('selected'));
            e.currentTarget.classList.add('selected');
            const btn = document.getElementById('next' + q);
            if (btn) btn.classList.add('enabled');
          }

          function nextQ(q) {
            if (!answers[q]) return;
            document.getElementById('q' + q).classList.remove('active');
            const nextNum = q + 1;
            if (nextNum <= totalQ) {
              document.getElementById('q' + nextNum).classList.add('active');
              updateProgress(nextNum);
            }
          }

          function backQ(q) {
            document.getElementById('q' + q).classList.remove('active');
            const prev = q - 1;
            if (prev >= 1) {
              document.getElementById('q' + prev).classList.add('active');
              updateProgress(prev);
            }
          }

          function updateProgress(q) {
            const pct = Math.round((q / totalQ) * 100);
            document.getElementById('progressFill').style.width = pct + '%';
            document.getElementById('progressCount').textContent = q + ' / ' + totalQ;
          }

          function showResult() {
            if (!answers[7]) return;

            for (let i = 1; i <= totalQ; i++) {
              const qEl = document.getElementById('q' + i);
              if (qEl) qEl.classList.remove('active');
            }
            document.getElementById('progressWrap').style.display = 'none';

            let score = 0;
            if (answers[1] === 'D') score += 3;
            else if (answers[1] === 'C') score += 2;
            else if (answers[1] === 'B') score += 1;

            if (['A','B','C'].includes(answers[2])) score += 2;
            else score += 1;

            score += 2;

            if (answers[4] === 'C' || answers[4] === 'D') score += 2;
            else if (answers[4] === 'B') score += 1;

            if (answers[5] === 'A' || answers[5] === 'B') score += 2;
            else if (answers[5] === 'D') score += 2;
            else score += 1;

            if (answers[6] === 'A') score += 3;
            else if (answers[6] === 'D') score += 0;
            else score += 1;

            if (answers[7] === 'C' || answers[7] === 'D') score += 3;
            else if (answers[7] === 'B') score += 1;

            const maxScore = 17;
            const pct = score / maxScore;

            let resultId, dotClass;
            if (pct >= 0.65) { resultId = 'resultA'; dotClass = 'lit'; }
            else if (pct >= 0.38) { resultId = 'resultB'; dotClass = 'mid'; }
            else { resultId = 'resultC'; dotClass = 'low'; }

            // META PIXEL — fire Lead event only for Perfect Fit
            if (resultId === 'resultA' && typeof fbq !== 'undefined') {
              fbq('track', 'Lead', {
                content_name: 'Growth Sprint Quiz — Perfect Fit',
                content_category: 'quiz_result'
              });
            }

            const dots = Math.round(pct * 10);
            const scoreEl = document.getElementById('score' + resultId.replace('result',''));
            if (scoreEl) {
              for (let i = 0; i < 10; i++) {
                const d = document.createElement('div');
                d.className = 'score-dot' + (i < dots ? ' ' + dotClass : '');
                scoreEl.appendChild(d);
              }
            }

            document.getElementById(resultId).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }

          function restart() {
            Object.keys(answers).forEach(k => delete answers[k]);
            document.querySelectorAll('.question-block, .result-block').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            document.querySelectorAll('.btn-next').forEach(b => b.classList.remove('enabled'));
            document.querySelectorAll('.score-row').forEach(s => s.innerHTML = '');
            document.getElementById('progressWrap').style.display = 'block';
            document.getElementById('q1').classList.add('active');
            updateProgress(1);
          }
        `
      }} />
    </>
  );
}

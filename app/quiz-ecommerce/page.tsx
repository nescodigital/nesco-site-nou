'use client';

export default function QuizEcommercePage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0d0f;
          --bg2: #111518;
          --bg3: #13181c;
          --border: #1e2428;
          --accent: #56db84;
          --accent2: #3db868;
          --text: #e8eaeb;
          --muted: #6b7880;
          --card: #111518;
          --red: #ff6b6b;
          --orange: #ffa500;
          --green: #4ade80;
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
          margin-bottom: 48px;
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
          transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 0 12px rgba(86,219,132,0.4);
        }

        .question-block { display: none; animation: fadeUp 0.4s ease forwards; }
        .question-block.active { display: block; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
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
          font-size: clamp(20px, 4vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          color: var(--text);
          margin-bottom: 8px;
        }

        .question-sub {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .options { display: flex; flex-direction: column; gap: 10px; }

        .option {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .option:hover { border-color: rgba(86,219,132,0.3); transform: translateX(4px); }
        .option.selected { border-color: var(--accent); background: rgba(86,219,132,0.05); }

        .option-marker {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--bg3);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Satoshi', sans-serif;
          font-size: 12px;
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

        .option-text { font-size: 15px; color: var(--text); }
        .option-sub { font-size: 12px; color: var(--muted); margin-top: 2px; }

        .nav {
          margin-top: 32px;
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

        .score-display { margin-bottom: 32px; }
        .score-number {
          font-family: 'Satoshi', sans-serif;
          font-size: 72px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
        }
        .score-label {
          font-size: 14px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .score-bar-wrap { margin: 20px 0 32px; }
        .score-bar-bg {
          height: 6px;
          background: var(--border);
          border-radius: 6px;
          overflow: hidden;
          position: relative;
        }
        .score-bar-fill {
          height: 100%;
          border-radius: 6px;
          transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        .score-zones {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
        }
        .score-zone {
          font-size: 11px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

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
          margin-bottom: 20px;
        }
        .tag-critical { background: rgba(255,107,107,0.1); color: var(--red); border: 1px solid rgba(255,107,107,0.2); }
        .tag-warning  { background: rgba(255,165,0,0.1); color: var(--orange); border: 1px solid rgba(255,165,0,0.2); }
        .tag-good     { background: rgba(74,222,128,0.1); color: var(--green); border: 1px solid rgba(74,222,128,0.2); }
        .tag-excellent { background: rgba(86,219,132,0.1); color: var(--accent); border: 1px solid rgba(86,219,132,0.2); }

        .result-title {
          font-family: 'Satoshi', sans-serif;
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .result-title em { color: var(--accent); font-style: normal; }

        .result-desc {
          font-size: 15px;
          color: #9aaab3;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .issues-title {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted);
          margin-bottom: 16px;
        }

        .issue-item {
          display: flex;
          gap: 14px;
          padding: 16px;
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: 8px;
          margin-bottom: 10px;
          align-items: flex-start;
        }
        .issue-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .issue-dot.red { background: var(--red); box-shadow: 0 0 6px rgba(255,107,107,0.4); }
        .issue-dot.orange { background: var(--orange); box-shadow: 0 0 6px rgba(255,165,0,0.4); }
        .issue-dot.green { background: var(--green); box-shadow: 0 0 6px rgba(74,222,128,0.4); }

        .issue-text {
          font-size: 14px;
          color: var(--text);
          line-height: 1.5;
        }
        .issue-text span {
          color: var(--muted);
          font-size: 13px;
          display: block;
          margin-top: 2px;
        }

        .cta-box {
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          margin-top: 28px;
        }
        .cta-box-title {
          font-family: 'Satoshi', sans-serif;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .cta-box-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent);
          color: #0a0d0f;
          padding: 14px 28px;
          border-radius: 8px;
          font-family: 'Satoshi', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          text-decoration: none;
        }
        .cta-btn:hover { background: #6ee89a; transform: translateY(-1px); }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--muted);
          padding: 14px 20px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid var(--border);
          transition: all 0.2s;
          text-decoration: none;
          margin-left: 10px;
        }
        .cta-secondary:hover { color: var(--text); border-color: var(--muted); }

        .restart-btn {
          background: none;
          border: none;
          color: var(--muted);
          font-size: 13px;
          cursor: pointer;
          margin-top: 24px;
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
          <span style={{color:'var(--muted)',fontWeight:400,fontSize:'14px',marginLeft:'8px'}}>/ diagnostic e-commerce</span>
        </div>

        <div className="quiz-intro" style={{ marginBottom: '32px' }}>
          <div className="question-text" style={{ marginBottom: '8px' }}>Diagnostic e-commerce</div>
          <div className="question-sub" style={{ marginBottom: '0' }}>{`8 întrebări · sub 3 minute · scor de sănătate instant`}</div>
        </div>

        <div className="progress-wrap" id="progressWrap">
          <div className="progress-info">
            <span className="progress-label">Diagnostic magazin</span>
            <span className="progress-count" id="progressCount">1 / 8</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" id="progressFill" style={{ width: '12.5%' }}></div>
          </div>
        </div>

        {/* Q1: rata conversie */}
        <div className="question-block active" id="q1">
          <div className="question-tag">01 / 08</div>
          <div className="question-text">Care e rata de conversie a magazinului tău?</div>
          <div className="question-sub">Vizitatori unici împărțit la comenzi. Găsești în Google Analytics sau platforma ta.</div>
          <div className="options">
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(1,'A',0)`; eval(s); void(t); }}><div className="option-marker">A</div><div><div className="option-text">Sub 0.5%</div><div className="option-sub">Problemă critică de conversie</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(1,'B',1)`; eval(s); void(t); }}><div className="option-marker">B</div><div><div className="option-text">0.5% — 1.2%</div><div className="option-sub">Sub medie pentru e-commerce</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(1,'C',2)`; eval(s); void(t); }}><div className="option-marker">C</div><div><div className="option-text">1.2% — 2.5%</div><div className="option-sub">În jurul mediei industriei</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(1,'D',3)`; eval(s); void(t); }}><div className="option-marker">D</div><div><div className="option-text">Peste 2.5%</div><div className="option-sub">Performanță bună</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(1,'E',1)`; eval(s); void(t); }}><div className="option-marker">E</div><div><div className="option-text">Nu știu / nu am verificat</div><div className="option-sub">Lipsă de vizibilitate</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back hidden">{'\u2190'} Înapoi</button>
            <button className="btn-next" id="next1" onClick={() => { eval('nxt(1)'); }}>Continuă {'\u2192'}</button>
          </div>
        </div>

        {/* Q2: abandon coș */}
        <div className="question-block" id="q2">
          <div className="question-tag">02 / 08</div>
          <div className="question-text">Rata de abandon coș — știi cât e?</div>
          <div className="question-sub">Procentul de oameni care adaugă în coș dar nu finalizează comanda.</div>
          <div className="options">
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(2,'A',0)`; eval(s); void(t); }}><div className="option-marker">A</div><div><div className="option-text">Peste 80%</div><div className="option-sub">Critică — mii de comenzi pierdute</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(2,'B',1)`; eval(s); void(t); }}><div className="option-marker">B</div><div><div className="option-text">65% — 80%</div><div className="option-sub">În medie pentru industrie — loc de optimizare</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(2,'C',2)`; eval(s); void(t); }}><div className="option-marker">C</div><div><div className="option-text">50% — 65%</div><div className="option-sub">Bun — sub media industriei</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(2,'D',3)`; eval(s); void(t); }}><div className="option-marker">D</div><div><div className="option-text">Sub 50%</div><div className="option-sub">Excelent</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(2,'E',0)`; eval(s); void(t); }}><div className="option-marker">E</div><div><div className="option-text">Nu urmăresc abandonment</div><div className="option-sub">Scurgere nemăsurată</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => { eval('bck(2)'); }}>{'\u2190'} Înapoi</button>
            <button className="btn-next" id="next2" onClick={() => { eval('nxt(2)'); }}>Continuă {'\u2192'}</button>
          </div>
        </div>

        {/* Q3: email marketing */}
        <div className="question-block" id="q3">
          <div className="question-tag">03 / 08</div>
          <div className="question-text">Cât generează email marketing-ul din venitul total?</div>
          <div className="question-sub">Include automatizări + campanii manuale trimise la listă.</div>
          <div className="options">
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(3,'A',0)`; eval(s); void(t); }}><div className="option-marker">A</div><div><div className="option-text">Sub 5% sau nu am email marketing activ</div><div className="option-sub">Scurgere majoră</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(3,'B',1)`; eval(s); void(t); }}><div className="option-marker">B</div><div><div className="option-text">5% — 12%</div><div className="option-sub">Sub potențial</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(3,'C',2)`; eval(s); void(t); }}><div className="option-marker">C</div><div><div className="option-text">12% — 20%</div><div className="option-sub">Bun — aproape de benchmark</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(3,'D',3)`; eval(s); void(t); }}><div className="option-marker">D</div><div><div className="option-text">Peste 20%</div><div className="option-sub">Excelent — email funcționează bine</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => { eval('bck(3)'); }}>{'\u2190'} Înapoi</button>
            <button className="btn-next" id="next3" onClick={() => { eval('nxt(3)'); }}>Continuă {'\u2192'}</button>
          </div>
        </div>

        {/* Q4: ROAS */}
        <div className="question-block" id="q4">
          <div className="question-tag">04 / 08</div>
          <div className="question-text">Care e ROAS-ul mediu al campaniilor tale plătite?</div>
          <div className="question-sub">Revenue generat / buget reclame cheltuit. Ex: 10.000 lei revenue / 3.000 lei ads = ROAS 3.3x</div>
          <div className="options">
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(4,'A',0)`; eval(s); void(t); }}><div className="option-marker">A</div><div><div className="option-text">Sub 2x</div><div className="option-sub">Probabil pe pierdere netă</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(4,'B',1)`; eval(s); void(t); }}><div className="option-marker">B</div><div><div className="option-text">2x — 3x</div><div className="option-sub">La limita profitabilității</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(4,'C',2)`; eval(s); void(t); }}><div className="option-marker">C</div><div><div className="option-text">3x — 5x</div><div className="option-sub">Profitabil — loc de scalare</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(4,'D',3)`; eval(s); void(t); }}><div className="option-marker">D</div><div><div className="option-text">Peste 5x</div><div className="option-sub">Performanță excelentă</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(4,'E',0)`; eval(s); void(t); }}><div className="option-marker">E</div><div><div className="option-text">Nu calculez ROAS</div><div className="option-sub">Lipsă de vizibilitate critică</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => { eval('bck(4)'); }}>{'\u2190'} Înapoi</button>
            <button className="btn-next" id="next4" onClick={() => { eval('nxt(4)'); }}>Continuă {'\u2192'}</button>
          </div>
        </div>

        {/* Q5: retenție */}
        <div className="question-block" id="q5">
          <div className="question-tag">05 / 08</div>
          <div className="question-text">Rata de achiziție repetată — câți clienți cumpără din nou?</div>
          <div className="question-sub">Din totalul comenzilor lunare, câte provin de la clienți existenți?</div>
          <div className="options">
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(5,'A',0)`; eval(s); void(t); }}><div className="option-marker">A</div><div><div className="option-text">Sub 10%</div><div className="option-sub">Retenție foarte slabă</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(5,'B',1)`; eval(s); void(t); }}><div className="option-marker">B</div><div><div className="option-text">10% — 20%</div><div className="option-sub">Sub potențial</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(5,'C',2)`; eval(s); void(t); }}><div className="option-marker">C</div><div><div className="option-text">20% — 35%</div><div className="option-sub">Bun — retenție funcțională</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(5,'D',3)`; eval(s); void(t); }}><div className="option-marker">D</div><div><div className="option-text">Peste 35%</div><div className="option-sub">Excelent — bază loială</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(5,'E',0)`; eval(s); void(t); }}><div className="option-marker">E</div><div><div className="option-text">Nu urmăresc retenția</div><div className="option-sub">Scurgere nemăsurată</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => { eval('bck(5)'); }}>{'\u2190'} Înapoi</button>
            <button className="btn-next" id="next5" onClick={() => { eval('nxt(5)'); }}>Continuă {'\u2192'}</button>
          </div>
        </div>

        {/* Q6: automatizări */}
        <div className="question-block" id="q6">
          <div className="question-tag">06 / 08</div>
          <div className="question-text">Ai secvențe de email automatizate active?</div>
          <div className="question-sub">Abandon coș, welcome series, post-cumpărare, win-back.</div>
          <div className="options">
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(6,'A',0)`; eval(s); void(t); }}><div className="option-marker">A</div><div><div className="option-text">Nicio automatizare activă</div><div className="option-sub">Oportunitate majoră neexploatată</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(6,'B',1)`; eval(s); void(t); }}><div className="option-marker">B</div><div><div className="option-text">1-2 automatizări (welcome sau abandon coș)</div><div className="option-sub">Start bun, dar incomplete</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(6,'C',2)`; eval(s); void(t); }}><div className="option-marker">C</div><div><div className="option-text">3-4 automatizări active</div><div className="option-sub">Sistem parțial</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(6,'D',3)`; eval(s); void(t); }}><div className="option-marker">D</div><div><div className="option-text">5+ automatizări inclusive post-cumpărare și win-back</div><div className="option-sub">Sistem complet</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => { eval('bck(6)'); }}>{'\u2190'} Înapoi</button>
            <button className="btn-next" id="next6" onClick={() => { eval('nxt(6)'); }}>Continuă {'\u2192'}</button>
          </div>
        </div>

        {/* Q7: marja */}
        <div className="question-block" id="q7">
          <div className="question-tag">07 / 08</div>
          <div className="question-text">Marja netă — cât rămâne după toate costurile?</div>
          <div className="question-sub">Revenue minus produse, livrare, retur, reclame, salarii, platform fees.</div>
          <div className="options">
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(7,'A',0)`; eval(s); void(t); }}><div className="option-marker">A</div><div><div className="option-text">Sub 5% sau pe zero / pierdere</div><div className="option-sub">Nesustenabil</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(7,'B',1)`; eval(s); void(t); }}><div className="option-marker">B</div><div><div className="option-text">5% — 12%</div><div className="option-sub">Mic — vulnerabil la fluctuații</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(7,'C',2)`; eval(s); void(t); }}><div className="option-marker">C</div><div><div className="option-text">12% — 20%</div><div className="option-sub">Sănătos — loc de optimizare</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(7,'D',3)`; eval(s); void(t); }}><div className="option-marker">D</div><div><div className="option-text">Peste 20%</div><div className="option-sub">Excelent</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(7,'E',0)`; eval(s); void(t); }}><div className="option-marker">E</div><div><div className="option-text">Nu calculez marja netă real</div><div className="option-sub">Problemă critică de vizibilitate</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => { eval('bck(7)'); }}>{'\u2190'} Înapoi</button>
            <button className="btn-next" id="next7" onClick={() => { eval('nxt(7)'); }}>Continuă {'\u2192'}</button>
          </div>
        </div>

        {/* Q8: venit */}
        <div className="question-block" id="q8">
          <div className="question-tag">08 / 08</div>
          <div className="question-text">Venitul lunar al magazinului tău?</div>
          <div className="question-sub">Ne ajută să calibrăm recomandările la nivelul tău real.</div>
          <div className="options">
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(8,'A',1)`; eval(s); void(t); }}><div className="option-marker">A</div><div><div className="option-text">Sub 50.000 lei/lună</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(8,'B',2)`; eval(s); void(t); }}><div className="option-marker">B</div><div><div className="option-text">50.000 — 200.000 lei/lună</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(8,'C',3)`; eval(s); void(t); }}><div className="option-marker">C</div><div><div className="option-text">200.000 — 500.000 lei/lună</div></div></div>
            <div className="option" onClick={(e) => { const t = e.currentTarget; const s = `sel(8,'D',3)`; eval(s); void(t); }}><div className="option-marker">D</div><div><div className="option-text">Peste 500.000 lei/lună</div></div></div>
          </div>
          <div className="nav">
            <button className="btn-back" onClick={() => { eval('bck(8)'); }}>{'\u2190'} Înapoi</button>
            <button className="btn-next" id="next8" onClick={() => { eval('showRes()'); }}>Vezi scorul {'\u2192'}</button>
          </div>
        </div>

        {/* RESULT */}
        <div className="result-block" id="result">
          <div className="result-tag" id="resultTag"></div>
          <div className="score-display">
            <div className="score-number" id="scoreNum" style={{ color: 'var(--accent)' }}>0</div>
            <div className="score-label">din 100 — Scorul de sănătate al magazinului tău</div>
          </div>
          <div className="score-bar-wrap">
            <div className="score-bar-bg">
              <div className="score-bar-fill" id="scoreBarFill" style={{ width: '0%' }}></div>
            </div>
            <div className="score-zones">
              <span className="score-zone" style={{ color: 'var(--red)' }}>Critic 0-40</span>
              <span className="score-zone" style={{ color: 'var(--orange)' }}>Atenție 40-65</span>
              <span className="score-zone" style={{ color: 'var(--green)' }}>Bun 65-80</span>
              <span className="score-zone" style={{ color: 'var(--accent)' }}>Excelent 80+</span>
            </div>
          </div>
          <div className="result-title" id="resultTitle"></div>
          <div className="result-desc" id="resultDesc"></div>
          <div className="issues-title">Zonele care trag scorul în jos:</div>
          <div id="issuesList"></div>
          <div className="cta-box">
            <div className="cta-box-title" id="ctaTitle"></div>
            <div className="cta-box-desc" id="ctaDesc"></div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              <button className="cta-btn" id="ctaBtn"></button>
              <a href="/ghid-gratuit" className="cta-secondary">Ghid gratuit {'\u2192'}</a>
            </div>
          </div>
          <button className="restart-btn" onClick={() => { eval('restart()'); }}>{'\u21BA'} Refă diagnosticul</button>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          var answers = {};
          var scores = {};
          var totalQ = 8;

          function sel(q, letter, pts) {
            answers[q] = letter;
            scores[q] = pts;
            document.querySelectorAll('#q' + q + ' .option').forEach(function(o) { o.classList.remove('selected'); });
            // find the clicked option by letter
            var opts = document.querySelectorAll('#q' + q + ' .option');
            var idx = {'A':0,'B':1,'C':2,'D':3,'E':4}[letter];
            if (opts[idx]) opts[idx].classList.add('selected');
            var btn = document.getElementById('next' + q);
            if (btn) btn.classList.add('enabled');
          }

          function nxt(q) {
            if (!answers[q]) return;
            document.getElementById('q' + q).classList.remove('active');
            var nextNum = q + 1;
            if (nextNum <= totalQ) {
              document.getElementById('q' + nextNum).classList.add('active');
              updProg(nextNum);
            }
          }

          function bck(q) {
            document.getElementById('q' + q).classList.remove('active');
            var prev = q - 1;
            if (prev >= 1) {
              document.getElementById('q' + prev).classList.add('active');
              updProg(prev);
            }
          }

          function updProg(q) {
            var pct = Math.round((q / totalQ) * 100);
            document.getElementById('progressFill').style.width = pct + '%';
            document.getElementById('progressCount').textContent = q + ' / ' + totalQ;
          }

          function showRes() {
            if (!answers[totalQ]) return;

            for (var i = 1; i <= totalQ; i++) {
              var qEl = document.getElementById('q' + i);
              if (qEl) qEl.classList.remove('active');
            }
            document.getElementById('progressWrap').style.display = 'none';

            // Hide the intro
            var introEl = document.querySelector('.quiz-intro');
            if (introEl) introEl.style.display = 'none';

            // Calculate total score
            var total = 0;
            var maxPts = totalQ * 3; // max 3 per question
            for (var j = 1; j <= totalQ; j++) {
              total += (scores[j] || 0);
            }
            var pct = Math.round((total / maxPts) * 100);

            // Determine tier
            var tier, tierClass, tierLabel, barColor, scoreColor;
            if (pct < 40) {
              tier = 'critical'; tierClass = 'tag-critical'; tierLabel = '\\u26A0 Critic'; barColor = 'var(--red)'; scoreColor = 'var(--red)';
            } else if (pct < 65) {
              tier = 'warning'; tierClass = 'tag-warning'; tierLabel = '\\u26A0 Atenție necesară'; barColor = 'var(--orange)'; scoreColor = 'var(--orange)';
            } else if (pct < 80) {
              tier = 'good'; tierClass = 'tag-good'; tierLabel = '\\u2713 Bun'; barColor = 'var(--green)'; scoreColor = 'var(--green)';
            } else {
              tier = 'excellent'; tierClass = 'tag-excellent'; tierLabel = '\\u2713 Excelent'; barColor = 'var(--accent)'; scoreColor = 'var(--accent)';
            }

            // Fire Meta Pixel Lead for critical & warning
            if (pct < 65 && typeof fbq !== 'undefined') {
              fbq('track', 'Lead', {
                content_name: 'E-commerce Diagnostic \\u2014 Score ' + pct,
                content_category: 'quiz_ecommerce_result'
              });
            }

            // Set result tag
            var tagEl = document.getElementById('resultTag');
            tagEl.className = 'result-tag ' + tierClass;
            tagEl.textContent = tierLabel;

            // Set score number
            var scoreNum = document.getElementById('scoreNum');
            scoreNum.textContent = pct;
            scoreNum.style.color = scoreColor;

            // Animate score bar
            var barFill = document.getElementById('scoreBarFill');
            barFill.style.background = barColor;
            setTimeout(function() { barFill.style.width = pct + '%'; }, 100);

            // Set result title & description based on tier
            var titleEl = document.getElementById('resultTitle');
            var descEl = document.getElementById('resultDesc');

            if (tier === 'critical') {
              titleEl.innerHTML = 'Magazinul tău are <em>probleme serioase</em> de performanță.';
              descEl.textContent = 'Scorul indică scurgeri majore de venituri în mai multe zone. Fără intervenție, pierzi bani în fiecare zi — pe conversie, pe retenție, pe email, pe ads. Vestea bună: majoritatea problemelor se pot rezolva în 4-6 săptămâni cu un plan clar.';
            } else if (tier === 'warning') {
              titleEl.innerHTML = 'Magazinul tău <em>funcționează, dar pierde bani</em> în zone cheie.';
              descEl.textContent = 'Ai o bază funcțională, dar câteva zone critice trag performanța în jos. Cu îmbunătățirile potrivite, poți crește semnificativ fără să mărești bugetul de ads. Focusul corect pe 2-3 zone poate debloca 20-40% creștere.';
            } else if (tier === 'good') {
              titleEl.innerHTML = 'Magazinul tău e <em>pe drumul cel bun</em> — loc de optimizare fină.';
              descEl.textContent = 'Ai metrici sănătoase în majoritatea zonelor. Focusul acum ar trebui să fie pe optimizarea fină — automatizări avansate, segmentare email, și maximizarea profitabilității per client. Ești în poziția ideală pentru a scala.';
            } else {
              titleEl.innerHTML = 'Magazinul tău e <em>într-o formă excelentă</em>.';
              descEl.textContent = 'Felicitări — scorul tău arată un magazin bine optimizat pe toate fronturile. Focusul de aici înainte: menține ce funcționează, testează idei noi, și continuă să îmbunătățești marja netă.';
            }

            // Generate issues list
            var issuesEl = document.getElementById('issuesList');
            issuesEl.innerHTML = '';

            var issueMap = {
              1: { label: 'Rată de conversie', low: 'Rata de conversie e sub medie — pierzi vizitatori care ar putea cumpăra.', mid: 'Rata de conversie e în medie — dar poți optimiza pagina de produs și checkout.', high: 'Rata de conversie e bună — continuă să testezi.' },
              2: { label: 'Abandon coș', low: 'Rata de abandon e critică — implementează email-uri de recuperare și simplifică checkout-ul.', mid: 'Abandonul e în medie — optimizează experiența de checkout și adaugă urgency.', high: 'Abandonul e sub medie — bună treabă.' },
              3: { label: 'Revenue din email', low: 'Email marketing-ul e sub potențial — automatizările pot genera 15-30% din venit.', mid: 'Email-ul contribuie decent — dar poți crește cu segmentare și mai multe fluxuri.', high: 'Email marketing-ul funcționează bine — optimizează conținutul și frecvența.' },
              4: { label: 'ROAS reclame', low: 'ROAS-ul e sub profitabilitate — verifică targetarea, creativele și landing pages.', mid: 'ROAS-ul e la limită — optimizează funnel-ul și testează audiențe noi.', high: 'ROAS-ul e solid — scalează ce funcționează.' },
              5: { label: 'Retenție clienți', low: 'Retenția e foarte slabă — costul de achiziție te mănâncă fără clienți recurenți.', mid: 'Retenția e sub potențial — implementează programe de loialitate și email post-cumpărare.', high: 'Retenția e funcțională — continuă cu segmentare avansată.' },
              6: { label: 'Automatizări email', low: 'Nu ai automatizări — pierzi venituri pe pilot automat. Începe cu abandon coș și welcome.', mid: 'Ai câteva automatizări — adaugă post-cumpărare, win-back și browse abandonment.', high: 'Sistem complet de automatizări — optimizează conținutul și timing-ul.' },
              7: { label: 'Marjă netă', low: 'Marja e nesustenabilă — trebuie să reduci costurile sau să crești AOV.', mid: 'Marja e mică — vulnerabilă la creșteri de costuri. Optimizează pricing și reduce return rate.', high: 'Marja e sănătoasă — focusează-te pe menținere și scalare.' },
              8: { label: 'Venit lunar', low: 'Venitul e modest — focusează-te pe fundamentele de conversie înainte de scalare.', mid: 'Venit decent — ești în poziție bună pentru optimizare.', high: 'Venit solid — ești pregătit pentru optimizări avansate.' }
            };

            for (var k = 1; k <= totalQ; k++) {
              var pts = scores[k] || 0;
              var issue = issueMap[k];
              var dotClass, text;
              if (pts <= 1) { dotClass = 'red'; text = issue.low; }
              else if (pts === 2) { dotClass = 'orange'; text = issue.mid; }
              else { dotClass = 'green'; text = issue.high; }

              var item = document.createElement('div');
              item.className = 'issue-item';
              item.innerHTML = '<div class="issue-dot ' + dotClass + '"></div><div class="issue-text">' + issue.label + '<span>' + text + '</span></div>';
              issuesEl.appendChild(item);
            }

            // Set CTA based on tier
            var ctaTitle = document.getElementById('ctaTitle');
            var ctaDesc = document.getElementById('ctaDesc');
            var ctaBtn = document.getElementById('ctaBtn');

            if (tier === 'critical' || tier === 'warning') {
              ctaTitle.textContent = 'Hai să reparăm asta împreună.';
              ctaDesc.textContent = 'Programează o conversație gratuită de 30 de minute. Analizăm scurgările tale specifice și îți arătăm un plan concret de îmbunătățire.';
              ctaBtn.textContent = 'Programează conversația gratuită \\u2192';
              ctaBtn.onclick = function() { window.open('https://tidycal.com/1y0qx6o/30-minute-meeting', '_blank'); };
            } else if (tier === 'good') {
              ctaTitle.textContent = 'Vrei să treci la nivelul următor?';
              ctaDesc.textContent = 'Magazinul tău e pe drumul bun. O sesiune de strategie de 30 de minute te poate ajuta să identifici următoarele 2-3 pârghii de creștere.';
              ctaBtn.textContent = 'Rezervă sesiunea de strategie \\u2192';
              ctaBtn.onclick = function() { window.open('https://tidycal.com/1y0qx6o/30-minute-meeting', '_blank'); };
            } else {
              ctaTitle.textContent = 'Ești într-o formă excelentă.';
              ctaDesc.textContent = 'Descarcă ghidul nostru avansat pentru a menține performanța și a descoperi oportunități noi de creștere a profitabilității.';
              ctaBtn.textContent = 'Descarcă ghidul avansat \\u2192';
              ctaBtn.onclick = function() { window.location.href = '/ghid-gratuit'; };
            }

            // Show result
            document.getElementById('result').classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }

          function restart() {
            answers = {};
            scores = {};
            document.querySelectorAll('.question-block, .result-block').forEach(function(el) { el.classList.remove('active'); });
            document.querySelectorAll('.option').forEach(function(o) { o.classList.remove('selected'); });
            document.querySelectorAll('.btn-next').forEach(function(b) { b.classList.remove('enabled'); });
            document.getElementById('progressWrap').style.display = 'block';
            var introEl = document.querySelector('.quiz-intro');
            if (introEl) introEl.style.display = 'block';
            document.getElementById('q1').classList.add('active');
            document.getElementById('scoreBarFill').style.width = '0%';
            updProg(1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        `
      }} />
    </>
  );
}

'use client';

export default function CalculatorPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0a0d0f; --bg2: #111518; --bg3: #13181c;
          --border: #1e2428; --accent: #56db84;
          --text: #e8eaeb; --muted: #6b7880;
          --red: #ff6b6b; --orange: #ffa500; --green: #4ade80;
        }
        body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; min-height: 100vh; overflow-x: hidden; }
        /* Background handled by global ArrowPattern component */
        .wrapper { position: relative; z-index: 1; max-width: 760px; margin: 0 auto; padding: 60px 24px 120px; }
        .logo { margin-bottom: 48px; display: flex; align-items: center; }
        .logo img { height: 28px; width: auto; }
        .hero-tag { display: inline-flex; align-items: center; gap: 8px; background: rgba(86,219,132,0.08); border: 1px solid rgba(86,219,132,0.15); color: var(--accent); padding: 6px 14px; border-radius: 100px; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 20px; width: fit-content; }
        .hero-title { font-family: 'Satoshi', sans-serif; font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.15; margin-bottom: 12px; letter-spacing: -0.5px; }
        .hero-title em { color: var(--accent); font-style: normal; }
        .hero-sub { font-size: 16px; color: var(--muted); line-height: 1.6; margin-bottom: 48px; max-width: 520px; }
        .calc-section { margin-bottom: 48px; }
        .section-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
        .section-label::after { content: ''; flex: 1; height: 1px; background: var(--border); }
        .input-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 560px) { .input-grid { grid-template-columns: 1fr; } }
        .input-wrap { display: flex; flex-direction: column; gap: 8px; }
        .input-label { font-size: 13px; color: var(--muted); font-weight: 500; }
        .input-label strong { color: var(--text); }
        .input-field { background: var(--bg3); border: 1px solid var(--border); border-radius: 8px; padding: 14px 16px; color: var(--text); font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 600; width: 100%; transition: all 0.2s; outline: none; -moz-appearance: textfield; }
        .input-field::-webkit-outer-spin-button, .input-field::-webkit-inner-spin-button { -webkit-appearance: none; }
        .input-field:focus { border-color: rgba(86,219,132,0.4); background: rgba(86,219,132,0.03); }
        .input-field::placeholder { color: var(--muted); font-size: 16px; }
        .input-unit { font-size: 13px; color: var(--muted); margin-top: 4px; }
        .slider-wrap { display: flex; flex-direction: column; gap: 10px; }
        .slider-top { display: flex; justify-content: space-between; align-items: center; }
        .slider-val { font-family: 'Satoshi', sans-serif; font-size: 20px; font-weight: 800; color: var(--accent); }
        input[type=range] { -webkit-appearance: none; width: 100%; height: 4px; border-radius: 4px; background: var(--border); outline: none; cursor: pointer; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: var(--accent); cursor: pointer; box-shadow: 0 0 8px rgba(86,219,132,0.4); }
        input[type=range]::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: var(--accent); cursor: pointer; border: none; box-shadow: 0 0 8px rgba(86,219,132,0.4); }
        .results-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 32px; }
        @media (max-width: 560px) { .results-grid { grid-template-columns: 1fr; } }
        .result-card { background: var(--bg3); border: 1px solid var(--border); border-radius: 10px; padding: 20px; transition: all 0.3s; }
        .result-card.highlight { border-color: rgba(255,107,107,0.3); background: rgba(255,107,107,0.05); }
        .result-card-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 8px; }
        .result-card-value { font-family: 'Satoshi', sans-serif; font-size: 28px; font-weight: 800; line-height: 1; }
        .result-card-sub { font-size: 12px; color: var(--muted); margin-top: 6px; }
        .breakdown { background: var(--bg3); border: 1px solid var(--border); border-radius: 12px; padding: 28px; margin-bottom: 32px; }
        .breakdown-title { font-family: 'Satoshi', sans-serif; font-size: 16px; font-weight: 700; margin-bottom: 20px; color: var(--text); }
        .leak-row { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .leak-row:last-child { margin-bottom: 0; }
        .leak-row-label { font-size: 13px; color: var(--muted); width: 200px; flex-shrink: 0; }
        .leak-bar-wrap { flex: 1; height: 6px; background: var(--border); border-radius: 6px; overflow: hidden; }
        .leak-bar { height: 100%; border-radius: 6px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }
        .leak-amount { font-family: 'Satoshi', sans-serif; font-size: 13px; font-weight: 700; width: 90px; text-align: right; flex-shrink: 0; }
        .potential-box { background: rgba(86,219,132,0.04); border: 1px solid rgba(86,219,132,0.12); border-radius: 12px; padding: 28px; margin-bottom: 32px; }
        .potential-title { font-family: 'Satoshi', sans-serif; font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .potential-title em { color: var(--accent); font-style: normal; }
        .potential-sub { font-size: 14px; color: var(--muted); line-height: 1.6; margin-bottom: 20px; }
        .potential-number { font-family: 'Satoshi', sans-serif; font-size: 48px; font-weight: 800; color: var(--accent); line-height: 1; margin-bottom: 4px; }
        .potential-label { font-size: 13px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }
        .cta-section { background: var(--bg3); border: 1px solid var(--border); border-radius: 12px; padding: 32px; text-align: center; }
        .cta-title { font-family: 'Satoshi', sans-serif; font-size: 22px; font-weight: 800; margin-bottom: 10px; }
        .cta-title em { color: var(--accent); font-style: normal; }
        .cta-sub { font-size: 15px; color: var(--muted); line-height: 1.6; margin-bottom: 24px; max-width: 440px; margin-left: auto; margin-right: auto; }
        .cta-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--accent); color: #0a0d0f; padding: 16px 32px; border-radius: 10px; font-family: 'Satoshi', sans-serif; font-size: 16px; font-weight: 700; cursor: pointer; border: none; transition: all 0.2s; text-decoration: none; }
        .cta-btn:hover { background: #6ee89a; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(86,219,132,0.2); }
        .cta-note { font-size: 12px; color: var(--muted); margin-top: 12px; }
      `}</style>

      <div className="wrapper">
        <div className="logo">
          <img src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png" alt="Nesco Digital" />
        </div>

        <div className="hero-tag">Calculator gratuit</div>
        <h1 className="hero-title">Cât pierde businessul tău<br /><em>în fiecare lună?</em></h1>
        <p className="hero-sub">Introdu cifrele reale ale businessului tău. Calculatorul estimează valoarea scurgerilor de venituri bazat pe benchmarks din industrie.</p>

        {/* INPUT SECTION */}
        <div className="calc-section">
          <div className="section-label">Date de bază</div>
          <div className="input-grid">
            <div className="input-wrap">
              <label className="input-label"><strong>Venit lunar</strong></label>
              <input className="input-field" type="number" id="revenue" placeholder="500000" onInput={() => {}} />
              <div className="input-unit">lei / lună</div>
            </div>
            <div className="input-wrap">
              <label className="input-label"><strong>Buget reclame lunar</strong></label>
              <input className="input-field" type="number" id="adspend" placeholder="15000" onInput={() => {}} />
              <div className="input-unit">lei / lună</div>
            </div>
            <div className="input-wrap">
              <label className="input-label"><strong>Marjă brută</strong></label>
              <input className="input-field" type="number" id="margin" placeholder="35" onInput={() => {}} />
              <div className="input-unit">% din venit</div>
            </div>
            <div className="input-wrap">
              <label className="input-label"><strong>Vizitatori lunari</strong></label>
              <input className="input-field" type="number" id="visitors" placeholder="50000" onInput={() => {}} />
              <div className="input-unit">sesiuni unice</div>
            </div>
          </div>
        </div>

        {/* SLIDERS */}
        <div className="calc-section">
          <div className="section-label">Performanță curentă</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div className="slider-wrap">
              <div className="slider-top">
                <div className="input-label"><strong>Rata de conversie</strong></div>
                <div className="slider-val" id="crVal">1.2%</div>
              </div>
              <input type="range" id="cr" min="0.1" max="5" step="0.1" defaultValue="1.2" onInput={() => {}} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)' }}><span>0.1%</span><span>Medie industrie: 1.5-2%</span><span>5%</span></div>
            </div>
            <div className="slider-wrap">
              <div className="slider-top">
                <div className="input-label"><strong>Abandon coș</strong></div>
                <div className="slider-val" id="cartVal">72%</div>
              </div>
              <input type="range" id="cart" min="30" max="95" step="1" defaultValue="72" onInput={() => {}} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)' }}><span>30%</span><span>Medie industrie: 65-72%</span><span>95%</span></div>
            </div>
            <div className="slider-wrap">
              <div className="slider-top">
                <div className="input-label"><strong>Venit din email marketing</strong></div>
                <div className="slider-val" id="emailVal">5%</div>
              </div>
              <input type="range" id="emailpct" min="0" max="35" step="1" defaultValue="5" onInput={() => {}} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)' }}><span>0%</span><span>Potențial: 15-25%</span><span>35%</span></div>
            </div>
            <div className="slider-wrap">
              <div className="slider-top">
                <div className="input-label"><strong>Rata retenție clienți</strong></div>
                <div className="slider-val" id="retVal">15%</div>
              </div>
              <input type="range" id="retention" min="5" max="60" step="1" defaultValue="15" onInput={() => {}} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)' }}><span>5%</span><span>Benchmark bun: 25-35%</span><span>60%</span></div>
            </div>
          </div>
        </div>

        <div className="section-label" style={{ marginBottom: '20px' }}>Rezultatele calculului</div>

        <div className="results-grid">
          <div className="result-card highlight">
            <div className="result-card-label">Pierdere lunară estimată</div>
            <div className="result-card-value" id="totalLoss" style={{ color: 'var(--red)' }}>{'\u2014'}</div>
            <div className="result-card-sub">lei/lună din scurgeri identificate</div>
          </div>
          <div className="result-card">
            <div className="result-card-label">Pierdere anuală</div>
            <div className="result-card-value" id="annualLoss" style={{ color: 'var(--orange)' }}>{'\u2014'}</div>
            <div className="result-card-sub">lei dacă nu schimbi nimic</div>
          </div>
          <div className="result-card">
            <div className="result-card-label">Potențial recuperabil</div>
            <div className="result-card-value" id="potential" style={{ color: 'var(--accent)' }}>{'\u2014'}</div>
            <div className="result-card-sub">lei/lună realist recuperabil</div>
          </div>
        </div>

        <div className="breakdown" id="breakdownBox" style={{ display: 'none' }}>
          <div className="breakdown-title">Unde se duc banii — detaliat</div>
          <div id="leakRows"></div>
        </div>

        <div className="potential-box" id="potentialBox" style={{ display: 'none' }}>
          <div className="potential-title">Dacă recuperezi <em>70% din scurgeri:</em></div>
          <div className="potential-sub">Aceasta e o estimare conservatoare a ce se poate recupera într-un engagement de 6 săptămâni, bazată pe rezultatele obținute cu clienți similari.</div>
          <div className="potential-number" id="potentialNum">{'\u2014'}</div>
          <div className="potential-label">lei / lună în plus — fără să crești bugetul de reclame</div>
        </div>

        <div className="cta-section" id="ctaBox" style={{ display: 'none' }}>
          <div className="cta-title">Cifrele spun totul.<br /><em>Hai să le reparăm.</em></div>
          <p className="cta-sub">Un apel de 30 de minute pentru a valida calculul cu datele reale ale businessului tău — și a stabili care scurgere se repară prima.</p>
          <button className="cta-btn" id="ctaBtn">Rezervă apelul de diagnostic {'\u2192'} 30 min</button>
          <p className="cta-note">Fără obligații. Dacă calculul e mai optimist decât realitatea — îți spunem sincer.</p>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Attach oninput handlers after DOM is ready
          (function() {
            var fields = ['revenue', 'adspend', 'margin', 'visitors'];
            fields.forEach(function(id) {
              var el = document.getElementById(id);
              if (el) el.addEventListener('input', calc);
            });

            var cr = document.getElementById('cr');
            if (cr) cr.addEventListener('input', function() { updSlider('cr','crVal', function(v){ return v+'%'; }); calc(); });

            var cart = document.getElementById('cart');
            if (cart) cart.addEventListener('input', function() { updSlider('cart','cartVal', function(v){ return v+'%'; }); calc(); });

            var emailpct = document.getElementById('emailpct');
            if (emailpct) emailpct.addEventListener('input', function() { updSlider('emailpct','emailVal', function(v){ return v+'%'; }); calc(); });

            var retention = document.getElementById('retention');
            if (retention) retention.addEventListener('input', function() { updSlider('retention','retVal', function(v){ return v+'%'; }); calc(); });

            var ctaBtn = document.getElementById('ctaBtn');
            if (ctaBtn) ctaBtn.addEventListener('click', function() { window.open('https://tidycal.com/1y0qx6o/30-minute-meeting', '_blank'); });
          })();

          function updSlider(id, valId, fmt) {
            var v = parseFloat(document.getElementById(id).value);
            document.getElementById(valId).textContent = fmt(v);
          }

          function fmt(n) {
            if (n >= 1000000) return (n/1000000).toFixed(1) + 'M';
            if (n >= 1000) return Math.round(n/1000) + 'K';
            return Math.round(n).toString();
          }

          function fmtFull(n) {
            return new Intl.NumberFormat('ro-RO').format(Math.round(n));
          }

          function calc() {
            var revenue  = parseFloat(document.getElementById('revenue').value) || 0;
            var adspend  = parseFloat(document.getElementById('adspend').value) || 0;
            var margin   = parseFloat(document.getElementById('margin').value) || 35;
            var visitors = parseFloat(document.getElementById('visitors').value) || 0;
            var cr       = parseFloat(document.getElementById('cr').value) || 1.2;
            var cart     = parseFloat(document.getElementById('cart').value) || 72;
            var emailPct = parseFloat(document.getElementById('emailpct').value) || 5;
            var retention= parseFloat(document.getElementById('retention').value) || 15;

            if (revenue === 0) return;

            var targetCR = 2.2;
            var targetCart = 62;
            var targetEmail = 18;
            var targetRetention = 28;
            var marginFactor = margin / 100;

            var crLeak = 0;
            if (cr < targetCR && visitors > 0) {
              var currentOrders = visitors * (cr / 100);
              var targetOrders  = visitors * (targetCR / 100);
              var avgOrderVal   = revenue / Math.max(currentOrders, 1);
              var missedRevenue = (targetOrders - currentOrders) * avgOrderVal;
              crLeak = missedRevenue * marginFactor * 0.5;
            }

            var cartLeak = 0;
            if (cart > targetCart) {
              var excessAbandonment = (cart - targetCart) / 100;
              var recoverable = revenue * excessAbandonment * 0.15;
              cartLeak = recoverable * marginFactor;
            }

            var emailLeak = 0;
            if (emailPct < targetEmail) {
              var missedEmailRevenue = revenue * ((targetEmail - emailPct) / 100);
              emailLeak = missedEmailRevenue * marginFactor;
            }

            var retentionLeak = 0;
            if (retention < targetRetention) {
              var extraRetention = (targetRetention - retention) / 100;
              var additionalRevenue = revenue * extraRetention * 0.8;
              retentionLeak = additionalRevenue * marginFactor * 0.6;
            }

            var adLeak = 0;
            if (adspend > 0) {
              var roas = revenue / adspend;
              if (roas < 4) {
                var potentialRevenue = adspend * 4;
                adLeak = (potentialRevenue - revenue) * marginFactor * 0.3;
                adLeak = Math.min(adLeak, adspend * 0.4);
              }
            }

            var total = crLeak + cartLeak + emailLeak + retentionLeak + adLeak;
            var annual = total * 12;
            var potentialRecovery = total * 0.70;

            document.getElementById('totalLoss').textContent = fmtFull(total) + ' lei';
            document.getElementById('annualLoss').textContent = fmtFull(annual) + ' lei';
            document.getElementById('potential').textContent = fmtFull(potentialRecovery) + ' lei';
            document.getElementById('potentialNum').textContent = fmtFull(potentialRecovery) + ' lei';

            var leaks = [
              { label: 'Conversie slabă', val: crLeak, color: '#ff6b6b' },
              { label: 'Abandon coș nerecuperat', val: cartLeak, color: '#ff8c42' },
              { label: 'Email marketing sub potențial', val: emailLeak, color: '#ffa500' },
              { label: 'Retenție clienți slabă', val: retentionLeak, color: '#4ade80' },
              { label: 'Reclame ineficiente', val: adLeak, color: '#56db84' },
            ].filter(function(l) { return l.val > 0; }).sort(function(a,b) { return b.val - a.val; });

            var maxLeak = Math.max.apply(null, leaks.map(function(l) { return l.val; }).concat([1]));
            var rowsEl = document.getElementById('leakRows');
            rowsEl.innerHTML = '';
            leaks.forEach(function(l) {
              var barWidth = Math.round((l.val / maxLeak) * 100);
              rowsEl.innerHTML += '<div class="leak-row"><div class="leak-row-label">' + l.label + '</div><div class="leak-bar-wrap"><div class="leak-bar" style="width:' + barWidth + '%;background:' + l.color + '"></div></div><div class="leak-amount" style="color:' + l.color + '">' + fmtFull(l.val) + '</div></div>';
            });

            document.getElementById('breakdownBox').style.display = total > 0 ? 'block' : 'none';
            document.getElementById('potentialBox').style.display = total > 0 ? 'block' : 'none';
            document.getElementById('ctaBox').style.display = total > 500 ? 'block' : 'none';

            // Meta Pixel Lead event when significant loss detected
            if (total > 10000 && typeof fbq !== 'undefined' && !window._pixelFired) {
              window._pixelFired = true;
              fbq('track', 'Lead', { content_name: 'ROI Calculator', value: Math.round(total), currency: 'RON' });
            }
          }
        `
      }} />
    </>
  );
}

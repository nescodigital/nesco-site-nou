'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface DailyStats {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
}

interface AnalyticsData {
  daily: DailyStats[];
  totalPageViews: number;
  totalUniqueVisitors: number;
  avgPageViewsPerDay: number;
  todayPageViews: number;
  todayUniqueVisitors: number;
  topPages: { path: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
}

// ─── SVG Line Chart ──────────────────────────────────────────

function LineChart({
  data,
  width = 800,
  height = 260,
}: {
  data: DailyStats[];
  width?: number;
  height?: number;
}) {
  if (!data.length) return null;

  const padL = 48;
  const padR = 16;
  const padT = 16;
  const padB = 40;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;

  const pvValues = data.map((d) => d.pageViews);
  const uvValues = data.map((d) => d.uniqueVisitors);
  const maxVal = Math.max(...pvValues, ...uvValues, 1);
  const yMax = Math.ceil(maxVal / 10) * 10 || 10;

  const xStep = data.length > 1 ? chartW / (data.length - 1) : chartW;

  const toPath = (values: number[]) =>
    values
      .map((v, i) => {
        const x = padL + i * xStep;
        const y = padT + chartH - (v / yMax) * chartH;
        return `${i === 0 ? 'M' : 'L'}${x},${y}`;
      })
      .join(' ');

  const toArea = (values: number[]) => {
    const path = values
      .map((v, i) => {
        const x = padL + i * xStep;
        const y = padT + chartH - (v / yMax) * chartH;
        return `${i === 0 ? 'M' : 'L'}${x},${y}`;
      })
      .join(' ');
    const lastX = padL + (values.length - 1) * xStep;
    return `${path} L${lastX},${padT + chartH} L${padL},${padT + chartH} Z`;
  };

  // Y-axis labels (5 steps)
  const yLabels = Array.from({ length: 5 }, (_, i) => Math.round((yMax / 4) * i));

  // X-axis labels (show ~6 dates)
  const step = Math.max(1, Math.floor(data.length / 6));
  const xLabels = data.filter((_, i) => i % step === 0 || i === data.length - 1);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: '100%', height: 'auto' }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="pvGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#56db84" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#56db84" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="uvGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {yLabels.map((val) => {
        const y = padT + chartH - (val / yMax) * chartH;
        return (
          <g key={val}>
            <line x1={padL} y1={y} x2={padL + chartW} y2={y} stroke="#1a1a1a" strokeWidth="1" />
            <text x={padL - 8} y={y + 4} textAnchor="end" fill="#5a6872" fontSize="10" fontFamily="'DM Mono', monospace">
              {val}
            </text>
          </g>
        );
      })}

      {/* Areas */}
      <path d={toArea(pvValues)} fill="url(#pvGrad)" />
      <path d={toArea(uvValues)} fill="url(#uvGrad)" />

      {/* Lines */}
      <path d={toPath(pvValues)} fill="none" stroke="#56db84" strokeWidth="2" strokeLinejoin="round" />
      <path d={toPath(uvValues)} fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 3" />

      {/* Dots for PV */}
      {pvValues.map((v, i) => {
        const x = padL + i * xStep;
        const y = padT + chartH - (v / yMax) * chartH;
        return <circle key={i} cx={x} cy={y} r="2.5" fill="#56db84" />;
      })}

      {/* X-axis labels */}
      {xLabels.map((d) => {
        const i = data.indexOf(d);
        const x = padL + i * xStep;
        const label = d.date.slice(5); // MM-DD
        return (
          <text key={d.date} x={x} y={padT + chartH + 20} textAnchor="middle" fill="#5a6872" fontSize="10" fontFamily="'DM Mono', monospace">
            {label}
          </text>
        );
      })}
    </svg>
  );
}

// ─── Stats Card ──────────────────────────────────────────────

function StatCard({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div style={{
      background: '#0a0a0a',
      border: '1px solid #1a1a1a',
      borderRadius: '12px',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '2px',
        background: `linear-gradient(90deg, ${color}, ${color}33)`,
      }} />
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '10px',
        color: '#5a6872',
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        marginBottom: '8px',
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: "'Satoshi', sans-serif",
        fontSize: '28px',
        fontWeight: 800,
        color: '#dce4e8',
      }}>
        {typeof value === 'number' ? value.toLocaleString('ro-RO') : value}
      </div>
    </div>
  );
}

// ─── Page Component ──────────────────────────────────────────

export default function AnalyticsPage() {
  const router = useRouter();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [days, setDays] = useState(30);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/admin/analytics?days=${days}`)
      .then((r) => {
        if (!r.ok) throw new Error('not configured');
        return r.json();
      })
      .then((d) => { setData(d); setError(''); })
      .catch(() => setError('GA4 nu e configurat. Adauga GA4_PROPERTY_ID, GA_CLIENT_EMAIL si GA_PRIVATE_KEY in env vars.'))
      .finally(() => setLoading(false));
  }, [days]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background: #050505;
          color: #dce4e8;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
        }
        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }
      ` }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: '48px 40px 100px',
        maxWidth: '960px',
        margin: '0 auto',
      }}>

        {/* HEADER */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '40px',
          paddingBottom: '24px',
          borderBottom: '1px solid #1a1a1a',
        }}>
          <div
            onClick={() => router.push('/admin')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              color: '#5a6872',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#dce4e8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#5a6872'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '0.04em' }}>
              Inapoi la Dashboard
            </span>
          </div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            color: '#5a6872',
            background: '#0a0a0a',
            border: '1px solid #1a1a1a',
            padding: '5px 10px',
            borderRadius: '4px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase' as const,
          }}>
            Admin Panel
          </div>
        </div>

        {/* TITLE */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            color: '#5a6872',
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            marginBottom: '8px',
          }}>
            ANALYTICS
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: '28px',
              fontWeight: 800,
              color: '#dce4e8',
              letterSpacing: '-0.5px',
              margin: 0,
            }}>
              Site Analytics
            </h1>

            {/* Period selector */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {[7, 30, 60].map((d) => (
                <button
                  key={d}
                  onClick={() => setDays(d)}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '11px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: `1px solid ${days === d ? 'rgba(86,219,132,0.3)' : '#1a1a1a'}`,
                    background: days === d ? 'rgba(86,219,132,0.1)' : '#0a0a0a',
                    color: days === d ? '#56db84' : '#5a6872',
                    cursor: 'pointer',
                    letterSpacing: '0.04em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {d}d
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
            <div style={{
              width: '24px',
              height: '24px',
              border: '2px solid rgba(86,219,132,0.2)',
              borderTopColor: '#56db84',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
            <style dangerouslySetInnerHTML={{ __html: `@keyframes spin { to { transform: rotate(360deg); } }` }} />
          </div>
        ) : error ? (
          <div style={{
            background: '#0a0a0a',
            border: '1px solid rgba(241,74,74,0.2)',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(241,74,74,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f14a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: '16px',
              fontWeight: 700,
              color: '#dce4e8',
              marginBottom: '8px',
            }}>
              Analytics neconfigurat
            </div>
            <div style={{
              fontSize: '13px',
              color: '#5a6872',
              lineHeight: 1.6,
              maxWidth: '400px',
              margin: '0 auto',
            }}>
              {error}
            </div>
            <div style={{
              marginTop: '24px',
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              color: '#5a6872',
              background: '#111',
              border: '1px solid #1a1a1a',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left',
              lineHeight: 1.8,
            }}>
              <div style={{ color: '#56db84', marginBottom: '4px' }}># .env.local</div>
              GA4_PROPERTY_ID=123456789<br />
              GA_CLIENT_EMAIL=...@...iam.gserviceaccount.com<br />
              GA_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----...
            </div>
          </div>
        ) : data ? (
          <>
            {/* STATS CARDS */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
              marginBottom: '24px',
            }}>
              <StatCard label="Page Views" value={data.totalPageViews} color="#56db84" />
              <StatCard label="Vizitatori unici" value={data.totalUniqueVisitors} color="#60a5fa" />
              <StatCard label="Media / zi" value={data.avgPageViewsPerDay} color="#fb923c" />
              <StatCard label="Azi" value={data.todayPageViews} color="#a78bfa" />
            </div>

            {/* CHART */}
            <div style={{
              background: '#0a0a0a',
              border: '1px solid #1a1a1a',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '24px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '11px',
                  color: '#5a6872',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                }}>
                  Trafic ultimele {days} zile
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '12px', height: '2px', background: '#56db84', borderRadius: '1px' }} />
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#5a6872' }}>Page Views</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '12px', height: '2px', background: '#60a5fa', borderRadius: '1px', borderTop: '1px dashed #60a5fa' }} />
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#5a6872' }}>Vizitatori</span>
                  </div>
                </div>
              </div>
              <LineChart data={data.daily} />
            </div>

            {/* TOP PAGES & REFERRERS */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}>
              {/* Top Pages */}
              <div style={{
                background: '#0a0a0a',
                border: '1px solid #1a1a1a',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '11px',
                  color: '#5a6872',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  marginBottom: '16px',
                }}>
                  Top Pagini (7 zile)
                </div>
                {data.topPages.length === 0 ? (
                  <div style={{ fontSize: '13px', color: '#3a3a3a' }}>Inca nu sunt date</div>
                ) : (
                  data.topPages.map((p, i) => (
                    <div key={p.path} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                      borderBottom: i < data.topPages.length - 1 ? '1px solid #111' : 'none',
                    }}>
                      <div style={{
                        fontSize: '12px',
                        color: '#dce4e8',
                        fontFamily: "'DM Mono', monospace",
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '200px',
                      }}>
                        {p.path}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#56db84',
                        fontFamily: "'DM Mono', monospace",
                        fontWeight: 500,
                        flexShrink: 0,
                        marginLeft: '12px',
                      }}>
                        {p.count}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Top Referrers */}
              <div style={{
                background: '#0a0a0a',
                border: '1px solid #1a1a1a',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '11px',
                  color: '#5a6872',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  marginBottom: '16px',
                }}>
                  Top Referreri (7 zile)
                </div>
                {data.topReferrers.length === 0 ? (
                  <div style={{ fontSize: '13px', color: '#3a3a3a' }}>Inca nu sunt date</div>
                ) : (
                  data.topReferrers.map((r, i) => (
                    <div key={r.referrer} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                      borderBottom: i < data.topReferrers.length - 1 ? '1px solid #111' : 'none',
                    }}>
                      <div style={{
                        fontSize: '12px',
                        color: '#dce4e8',
                        fontFamily: "'DM Mono', monospace",
                      }}>
                        {r.referrer}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#60a5fa',
                        fontFamily: "'DM Mono', monospace",
                        fontWeight: 500,
                        flexShrink: 0,
                        marginLeft: '12px',
                      }}>
                        {r.count}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

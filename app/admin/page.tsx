'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

/* ─── Types ───────────────────────────────────────────────── */

interface DailyStats { date: string; pageViews: number; uniqueVisitors: number; }

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

interface Lead {
  id: string;
  type: 'contact' | 'newsletter' | 'growth-sprint';
  name: string;
  email: string;
  company?: string;
  phone?: string;
  source?: string;
  services?: string;
  date: string;
}

interface LeadsData {
  leads: Lead[];
  stats: { total: number; today: number; thisWeek: number };
}

/* ─── SVG Line Chart ──────────────────────────────────────── */

function LineChart({ data, width = 800, height = 220 }: { data: DailyStats[]; width?: number; height?: number }) {
  const [hovered, setHovered] = useState<number | null>(null);

  if (!data.length) return null;

  const padL = 48, padR = 16, padT = 24, padB = 36;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;

  const pvValues = data.map((d) => d.pageViews);
  const uvValues = data.map((d) => d.uniqueVisitors);
  const maxVal = Math.max(...pvValues, ...uvValues, 1);
  const yMax = Math.ceil(maxVal / 10) * 10 || 10;
  const xStep = data.length > 1 ? chartW / (data.length - 1) : chartW;

  const toPath = (values: number[]) =>
    values.map((v, i) => {
      const x = padL + i * xStep;
      const y = padT + chartH - (v / yMax) * chartH;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    }).join(' ');

  const toArea = (values: number[]) => {
    const path = values.map((v, i) => {
      const x = padL + i * xStep;
      const y = padT + chartH - (v / yMax) * chartH;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    }).join(' ');
    const lastX = padL + (values.length - 1) * xStep;
    return `${path} L${lastX},${padT + chartH} L${padL},${padT + chartH} Z`;
  };

  const yLabels = Array.from({ length: 5 }, (_, i) => Math.round((yMax / 4) * i));
  const step = Math.max(1, Math.floor(data.length / 6));
  const xLabels = data.filter((_, i) => i % step === 0 || i === data.length - 1);

  // Show small labels on every point when <= 14 days, else every Nth
  const labelStep = data.length <= 7 ? 1 : data.length <= 14 ? 2 : Math.ceil(data.length / 10);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: '100%', height: 'auto', cursor: 'crosshair' }}
      preserveAspectRatio="xMidYMid meet"
      onMouseLeave={() => setHovered(null)}
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
      {yLabels.map((val) => {
        const y = padT + chartH - (val / yMax) * chartH;
        return (
          <g key={val}>
            <line x1={padL} y1={y} x2={padL + chartW} y2={y} stroke="#1a1a1a" strokeWidth="1" />
            <text x={padL - 8} y={y + 4} textAnchor="end" fill="#5a6872" fontSize="10" fontFamily="'DM Mono', monospace">{val}</text>
          </g>
        );
      })}
      <path d={toArea(pvValues)} fill="url(#pvGrad)" />
      <path d={toArea(uvValues)} fill="url(#uvGrad)" />
      <path d={toPath(pvValues)} fill="none" stroke="#56db84" strokeWidth="2" strokeLinejoin="round" />
      <path d={toPath(uvValues)} fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 3" />

      {/* Small permanent value labels */}
      {pvValues.map((v, i) => {
        if (i % labelStep !== 0 && i !== data.length - 1) return null;
        const x = padL + i * xStep;
        const y = padT + chartH - (v / yMax) * chartH;
        return (
          <text key={`lbl-${i}`} x={x} y={y - 8} textAnchor="middle" fill="#56db84" fontSize="8" fontFamily="'DM Mono', monospace" opacity={hovered === i ? 0 : 0.7}>
            {v}
          </text>
        );
      })}

      {/* Data point circles */}
      {pvValues.map((v, i) => {
        const x = padL + i * xStep;
        const y = padT + chartH - (v / yMax) * chartH;
        return <circle key={i} cx={x} cy={y} r={hovered === i ? 4 : 2.5} fill="#56db84" style={{ transition: 'r 0.15s' }} />;
      })}
      {uvValues.map((v, i) => {
        const x = padL + i * xStep;
        const y = padT + chartH - (v / yMax) * chartH;
        return <circle key={`uv-${i}`} cx={x} cy={y} r={hovered === i ? 3.5 : 0} fill="#60a5fa" style={{ transition: 'r 0.15s' }} />;
      })}

      {/* X-axis labels */}
      {xLabels.map((d) => {
        const i = data.indexOf(d);
        const x = padL + i * xStep;
        return (
          <text key={d.date} x={x} y={padT + chartH + 18} textAnchor="middle" fill="#5a6872" fontSize="10" fontFamily="'DM Mono', monospace">
            {d.date.slice(5)}
          </text>
        );
      })}

      {/* Hover vertical line + tooltip */}
      {hovered !== null && (() => {
        const i = hovered;
        const x = padL + i * xStep;
        const d = data[i];
        const pvY = padT + chartH - (pvValues[i] / yMax) * chartH;
        // Tooltip box
        const boxW = 110;
        const boxH = 44;
        let boxX = x + 10;
        if (boxX + boxW > width - padR) boxX = x - boxW - 10;
        const boxY = Math.max(4, pvY - boxH / 2);
        return (
          <g>
            <line x1={x} y1={padT} x2={x} y2={padT + chartH} stroke="#5a687244" strokeWidth="1" strokeDasharray="3 3" />
            <rect x={boxX} y={boxY} width={boxW} height={boxH} rx="6" fill="#111" stroke="#2a2a2a" strokeWidth="1" />
            <text x={boxX + 8} y={boxY + 14} fill="#8a9aa4" fontSize="9" fontFamily="'DM Mono', monospace">{d.date}</text>
            <circle cx={boxX + 8} cy={boxY + 26} r="3" fill="#56db84" />
            <text x={boxX + 16} y={boxY + 29} fill="#dce4e8" fontSize="10" fontFamily="'DM Mono', monospace" fontWeight="500">{d.pageViews} views</text>
            <circle cx={boxX + 8} cy={boxY + 38} r="3" fill="#60a5fa" />
            <text x={boxX + 16} y={boxY + 41} fill="#dce4e8" fontSize="10" fontFamily="'DM Mono', monospace" fontWeight="500">{d.uniqueVisitors} vizitatori</text>
          </g>
        );
      })()}

      {/* Invisible hit areas for each data point */}
      {data.map((_, i) => {
        const x = padL + i * xStep;
        const hitW = Math.max(xStep * 0.9, 12);
        return (
          <rect
            key={`hit-${i}`}
            x={x - hitW / 2}
            y={padT}
            width={hitW}
            height={chartH}
            fill="transparent"
            onMouseEnter={() => setHovered(i)}
            onTouchStart={() => setHovered(i)}
          />
        );
      })}
    </svg>
  );
}

/* ─── Helpers ─────────────────────────────────────────────── */

const navItems = [
  { title: 'Status', href: '/admin/status', color: '#56db84', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  { title: 'Editor', href: '/admin/editor', color: '#e879f9', icon: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7 M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z' },
  { title: 'Leads CRM', href: '/admin/leads-crm', color: '#60a5fa', icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 8v4l3 3' },
  { title: 'Roadmap', href: '/admin/roadmap', color: '#fb923c', icon: 'M9 11l3 3L22 4 M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
  { title: 'Links', href: '/admin/links', color: '#a78bfa', icon: 'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71 M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71' },
  { title: 'SEO', href: '/admin/seo', color: '#facc15', icon: 'M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.35-4.35' },
  { title: 'Blog Img', href: '/admin/blog-images', color: '#f472b6', icon: 'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z M12 17a4 4 0 100-8 4 4 0 000 8z' },
  { title: 'Funnels', href: '/admin/funnels', color: '#22d3ee', icon: 'M6 3v12 M18 9a3 3 0 100-6 3 3 0 000 6z M6 21a3 3 0 100-6 3 3 0 000 6z M18 9a9 9 0 01-9 9' },
  { title: 'Affiliate', href: '/admin/affiliates', color: '#4ade80', icon: 'M12 1v22 M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' },
];

const TYPE_LABELS: Record<string, { label: string; color: string }> = {
  contact: { label: 'Contact', color: '#60a5fa' },
  newsletter: { label: 'Newsletter', color: '#a78bfa' },
  'growth-sprint': { label: 'Growth Sprint', color: '#56db84' },
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'acum';
  if (mins < 60) return `${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

/* ─── Alerts Generator ───────────────────────────────────── */

interface Alert {
  type: 'success' | 'warning' | 'info';
  text: string;
  color: string;
}

function generateAlerts(analytics: AnalyticsData | null, leadsData: LeadsData | null): Alert[] {
  const alerts: Alert[] = [];

  if (analytics) {
    // Traffic trend
    const recent3 = analytics.daily.slice(-3);
    const prev3 = analytics.daily.slice(-6, -3);
    if (recent3.length >= 3 && prev3.length >= 3) {
      const recentAvg = recent3.reduce((s, d) => s + d.pageViews, 0) / 3;
      const prevAvg = prev3.reduce((s, d) => s + d.pageViews, 0) / 3;
      if (prevAvg > 0) {
        const change = ((recentAvg - prevAvg) / prevAvg) * 100;
        if (change > 20) {
          alerts.push({ type: 'success', text: `Trafic in crestere +${Math.round(change)}% (ultimele 3 zile)`, color: '#56db84' });
        } else if (change < -20) {
          alerts.push({ type: 'warning', text: `Trafic in scadere ${Math.round(change)}% (ultimele 3 zile)`, color: '#fb923c' });
        }
      }
    }

    // Top referrer insight
    const topRef = analytics.topReferrers.find(r => r.referrer !== '(direct)' && r.referrer !== '(not set)');
    if (topRef) {
      alerts.push({ type: 'info', text: `Sursa #1 de trafic: ${topRef.referrer} (${topRef.count} sesiuni)`, color: '#60a5fa' });
    }

    // Today vs average
    if (analytics.avgPageViewsPerDay > 0 && analytics.todayPageViews > analytics.avgPageViewsPerDay * 1.5) {
      alerts.push({ type: 'success', text: `Azi e peste medie: ${analytics.todayPageViews} views vs ${analytics.avgPageViewsPerDay} avg`, color: '#56db84' });
    }
  }

  if (leadsData) {
    if (leadsData.stats.total > 0) {
      const parts = [`${leadsData.stats.total} lead-uri captate`];
      if (leadsData.stats.thisWeek > 0) parts.push(`${leadsData.stats.thisWeek} sapt. asta`);
      if (leadsData.stats.today > 0) parts.push(`${leadsData.stats.today} azi`);
      alerts.push({ type: 'info', text: parts.join(' \u2022 '), color: '#a78bfa' });
    }
    if (leadsData.stats.today > 0) {
      alerts.push({ type: 'success', text: `${leadsData.stats.today} lead${leadsData.stats.today > 1 ? '-uri' : ''} noi azi!`, color: '#56db84' });
    }
  }

  // Static alerts for known issues
  alerts.push({ type: 'warning', text: 'Affiliate Links: 0/11 active', color: '#fb923c' });
  alerts.push({ type: 'warning', text: 'Blog Images: 66/93 lipsa', color: '#f472b6' });

  return alerts;
}

/* ─── Page ────────────────────────────────────────────────── */

export default function AdminDashboard() {
  const router = useRouter();
  const [leadsData, setLeadsData] = useState<LeadsData | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [analyticsError, setAnalyticsError] = useState(false);
  const [days, setDays] = useState(30);

  useEffect(() => {
    fetch('/api/admin/leads?limit=10')
      .then((r) => r.ok ? r.json() : null)
      .then((d) => setLeadsData(d))
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch(`/api/admin/analytics?days=${days}`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d) => { setAnalytics(d); setAnalyticsError(false); })
      .catch(() => setAnalyticsError(true));
  }, [days]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    window.location.reload();
  };

  const alerts = generateAlerts(analytics, leadsData);

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
        @keyframes spin { to { transform: rotate(360deg); } }
        .admin-wrap { padding: 48px 40px 100px; max-width: 960px; margin: 0 auto; position: relative; z-index: 1; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px; }
        .tables-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .leads-header-stats { display: flex; gap: 12px; }
        .lead-row { display: flex; align-items: center; gap: 12px; }
        .lead-company, .lead-source { display: block; }
        @media (max-width: 640px) {
          .admin-wrap { padding: 20px 16px 60px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .tables-grid { grid-template-columns: 1fr; }
          .leads-header-stats { gap: 8px; flex-wrap: wrap; }
          .lead-row { gap: 8px; }
          .lead-company, .lead-source { display: none; }
        }
      `}} />

      <div className="admin-wrap">

        {/* HEADER */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
          paddingBottom: '16px',
          borderBottom: '1px solid #1a1a1a',
        }}>
          <img
            src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png"
            alt="Nesco Digital"
            style={{ height: '18px', width: 'auto' }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleLogout}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                color: '#f14a4a',
                background: 'rgba(241,74,74,0.08)',
                border: '1px solid rgba(241,74,74,0.2)',
                padding: '5px 10px',
                borderRadius: '4px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(241,74,74,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(241,74,74,0.08)'; }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* ═══ NAV BUTTONS ═══ */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '20px',
        }}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: `${item.color}0a`,
                border: `1px solid ${item.color}25`,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                fontFamily: "'DM Mono', monospace",
                fontSize: '12px',
                fontWeight: 500,
                color: '#c0ccd4',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${item.color}66`;
                e.currentTarget.style.background = `${item.color}18`;
                e.currentTarget.style.color = item.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${item.color}25`;
                e.currentTarget.style.background = `${item.color}0a`;
                e.currentTarget.style.color = '#c0ccd4';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d={item.icon} />
              </svg>
              {item.title}
            </button>
          ))}
        </div>

        {/* ═══ ALERTS ═══ */}
        {alerts.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
            {alerts.map((alert, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                background: '#0a0a0a',
                border: `1px solid ${alert.color}22`,
                borderLeft: `3px solid ${alert.color}`,
                borderRadius: '8px',
                fontSize: '12px',
                color: '#dce4e8',
                fontFamily: "'DM Mono', monospace",
              }}>
                <span style={{ color: alert.color, fontSize: '14px', flexShrink: 0 }}>
                  {alert.type === 'success' ? '\u2191' : alert.type === 'warning' ? '!' : '\u2192'}
                </span>
                {alert.text}
              </div>
            ))}
          </div>
        )}

        {/* ═══ ANALYTICS INLINE ═══ */}
        <div style={{
          background: '#0a0a0a',
          border: '1px solid #1a1a1a',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '16px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #56db84, #3b82f6)',
          }} />

          {/* Header row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              color: '#5a6872',
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
            }}>
              Site Analytics
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ display: 'flex', gap: '3px' }}>
                {[7, 30, 60].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDays(d)}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      border: `1px solid ${days === d ? 'rgba(86,219,132,0.3)' : '#1a1a1a'}`,
                      background: days === d ? 'rgba(86,219,132,0.1)' : 'transparent',
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
              <div
                onClick={() => router.push('/admin/analytics')}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  color: '#5a6872',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  padding: '3px 6px',
                  borderRadius: '4px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#56db84'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#5a6872'; }}
              >
                Detalii
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {analyticsError ? (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: '#5a6872', marginBottom: '12px' }}>
                GA4 nu e configurat. Adauga env vars pentru a activa analytics.
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: '#5a6872',
                background: '#111',
                border: '1px solid #1a1a1a',
                borderRadius: '8px',
                padding: '12px 16px',
                textAlign: 'left',
                lineHeight: 1.8,
                display: 'inline-block',
              }}>
                <div style={{ color: '#56db84', marginBottom: '2px' }}># .env.local / Vercel</div>
                GA4_PROPERTY_ID=123456789<br />
                GA_CLIENT_EMAIL=...@...iam.gserviceaccount.com<br />
                GA_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----...
              </div>
            </div>
          ) : analytics ? (
            <>
              {/* Stats row */}
              <div className="stats-grid">
                {[
                  { label: 'Page Views', value: analytics.totalPageViews, color: '#56db84' },
                  { label: 'Vizitatori', value: analytics.totalUniqueVisitors, color: '#60a5fa' },
                  { label: 'Media / zi', value: analytics.avgPageViewsPerDay, color: '#fb923c' },
                  { label: 'Azi', value: analytics.todayPageViews, color: '#a78bfa' },
                ].map((stat) => (
                  <div key={stat.label} style={{
                    background: '#111',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    borderLeft: `2px solid ${stat.color}`,
                  }}>
                    <div style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '9px',
                      color: '#5a6872',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase' as const,
                      marginBottom: '4px',
                    }}>
                      {stat.label}
                    </div>
                    <div style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#dce4e8',
                    }}>
                      {stat.value.toLocaleString('ro-RO')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '6px', justifyContent: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '10px', height: '2px', background: '#56db84', borderRadius: '1px' }} />
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: '#5a6872' }}>Page Views</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '10px', height: '2px', background: '#60a5fa', borderRadius: '1px' }} />
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: '#5a6872' }}>Vizitatori</span>
                  </div>
                </div>
                <LineChart data={analytics.daily} />
              </div>

              {/* Top pages + referrers */}
              <div className="tables-grid">
                <div style={{ background: '#111', borderRadius: '8px', padding: '14px' }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '9px',
                    color: '#5a6872',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase' as const,
                    marginBottom: '8px',
                  }}>
                    Top Pagini
                  </div>
                  {analytics.topPages.length === 0 ? (
                    <div style={{ fontSize: '12px', color: '#333' }}>Inca nu sunt date</div>
                  ) : analytics.topPages.slice(0, 6).map((p, i) => (
                    <div key={p.path} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '4px 0',
                      borderBottom: i < Math.min(analytics.topPages.length, 6) - 1 ? '1px solid #1a1a1a' : 'none',
                    }}>
                      <div style={{
                        fontSize: '11px', color: '#dce4e8', fontFamily: "'DM Mono', monospace",
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        flex: 1, minWidth: 0, marginRight: '8px',
                      }}>{p.path}</div>
                      <div style={{ fontSize: '11px', color: '#56db84', fontFamily: "'DM Mono', monospace", fontWeight: 500, flexShrink: 0 }}>{p.count}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#111', borderRadius: '8px', padding: '14px' }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '9px',
                    color: '#5a6872',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase' as const,
                    marginBottom: '8px',
                  }}>
                    Surse trafic
                  </div>
                  {analytics.topReferrers.length === 0 ? (
                    <div style={{ fontSize: '12px', color: '#333' }}>Inca nu sunt date</div>
                  ) : analytics.topReferrers.slice(0, 6).map((r, i) => (
                    <div key={r.referrer} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '4px 0',
                      borderBottom: i < Math.min(analytics.topReferrers.length, 6) - 1 ? '1px solid #1a1a1a' : 'none',
                    }}>
                      <div style={{ fontSize: '11px', color: '#dce4e8', fontFamily: "'DM Mono', monospace" }}>{r.referrer}</div>
                      <div style={{ fontSize: '11px', color: '#60a5fa', fontFamily: "'DM Mono', monospace", fontWeight: 500, flexShrink: 0 }}>{r.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '30px 0' }}>
              <div style={{
                width: '18px', height: '18px',
                border: '2px solid rgba(86,219,132,0.2)',
                borderTopColor: '#56db84',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
              }} />
            </div>
          )}
        </div>

        {/* ═══ RECENT LEADS ═══ */}
        {leadsData && (leadsData.stats.total > 0 || leadsData.leads.length > 0) && (
          <div style={{
            background: '#0a0a0a',
            border: '1px solid #1a1a1a',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '16px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              flexWrap: 'wrap',
              gap: '8px',
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: '#5a6872',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
              }}>
                Formulare primite
              </div>
              <div className="leads-header-stats">
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#60a5fa' }}>
                  Azi: <span style={{ fontWeight: 500 }}>{leadsData.stats.today}</span>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#a78bfa' }}>
                  Sapt: <span style={{ fontWeight: 500 }}>{leadsData.stats.thisWeek}</span>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#5a6872' }}>
                  Total: <span style={{ fontWeight: 500 }}>{leadsData.stats.total}</span>
                </div>
              </div>
            </div>

            {leadsData.leads.length === 0 ? (
              <div style={{ fontSize: '13px', color: '#3a3a3a', padding: '8px 0' }}>
                Inca nu sunt lead-uri inregistrate. Vor aparea dupa prima trimitere de formular.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {leadsData.leads.map((lead, i) => {
                  const typeInfo = TYPE_LABELS[lead.type] || TYPE_LABELS.contact;
                  return (
                    <div key={lead.id} className="lead-row" style={{
                      padding: '10px 0',
                      borderBottom: i < leadsData.leads.length - 1 ? '1px solid #111' : 'none',
                    }}>
                      <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '9px',
                        color: typeInfo.color,
                        background: `${typeInfo.color}15`,
                        border: `1px solid ${typeInfo.color}30`,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase' as const,
                        flexShrink: 0,
                        minWidth: '70px',
                        textAlign: 'center' as const,
                      }}>
                        {typeInfo.label}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: '12px', color: '#dce4e8', fontWeight: 500,
                          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        }}>
                          {lead.name || lead.email}
                        </div>
                        {lead.name && (
                          <div style={{ fontSize: '10px', color: '#5a6872', fontFamily: "'DM Mono', monospace" }}>
                            {lead.email}
                          </div>
                        )}
                      </div>
                      {lead.company && (
                        <div className="lead-company" style={{ fontSize: '11px', color: '#5a6872', flexShrink: 0 }}>{lead.company}</div>
                      )}
                      {lead.source && (
                        <div className="lead-source" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#3a3a3a', flexShrink: 0 }}>{lead.source}</div>
                      )}
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#3a3a3a', flexShrink: 0 }}>
                        {timeAgo(lead.date)}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

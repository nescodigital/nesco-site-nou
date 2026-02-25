'use client';

import Link from 'next/link';
import { useState } from 'react';

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

type Status = 'urgent' | 'todo' | 'done';

interface TodoItem {
  label: string;
  detail?: string;
  status: Status;
}

interface Section {
  id: string;
  title: string;
  description: string;
  items: TodoItem[];
  defaultOpen?: boolean;
}

const sections: Section[] = [
  {
    id: 'p1',
    title: 'Prioritate 1 \u2014 Probleme critice',
    description: 'Probleme active care afecteaza conversiile si vizibilitatea site-ului.',
    defaultOpen: true,
    items: [
      { label: 'Affiliate Links \u2014 0 active din 11', detail: '0 linkuri functionale, 8 pending, 3 fara URL. Niciun link de afiliat nu genereaza venituri acum.', status: 'urgent' },
      { label: 'Blog Images \u2014 66 lipsa din 93', detail: 'Articolele fara imagini arata slab in Google si scad CTR-ul. Vezi admin/blog-images pentru lista completa.', status: 'urgent' },
      { label: 'Thank You page (/multumim)', detail: 'Pagina de confirmare dupa optin \u2014 lipseste complet, userii nu primesc confirmare', status: 'urgent' },
      { label: 'ActiveCampaign affiliate link', detail: 'Inlocuieste placeholder in articolele de blog', status: 'urgent' },
      { label: 'Unbounce affiliate link', status: 'todo' },
      { label: 'Supermetrics affiliate link', status: 'todo' },
      { label: 'Landbot affiliate link', status: 'todo' },
      { label: 'AdCreative affiliate link', status: 'todo' },
      { label: 'Sender affiliate link', status: 'todo' },
      { label: 'Kit (ConvertKit) affiliate link', status: 'todo' },
      { label: 'Thinkific affiliate link', status: 'todo' },
    ],
  },
  {
    id: 'p2',
    title: 'Prioritate 2 \u2014 Imbunatatiri',
    description: 'Optimizari si features noi pentru cresterea performantei.',
    defaultOpen: true,
    items: [
      { label: 'Email marketing integration', detail: 'Optin forms \u2192 email provider', status: 'todo' },
      { label: 'A/B testing pe landing pages', status: 'todo' },
      { label: 'More blog articles for SEO', status: 'todo' },
      { label: 'Performance optimization', detail: 'Image lazy loading, bundle size', status: 'todo' },
      { label: 'Upstash Redis setup', detail: 'Configureaza UPSTASH_REDIS_REST_URL + TOKEN pentru analytics si leads', status: 'todo' },
    ],
  },
  {
    id: 'done',
    title: 'Completate',
    description: 'Tot ce s-a finalizat pana acum.',
    defaultOpen: false,
    items: [
      { label: 'Structured data (GEO)', detail: 'Article, FAQ, HowTo, Review schema + og:image pe toate paginile', status: 'done' },
      { label: 'Self-hosted analytics dashboard', detail: 'Page views, unique visitors, top pages, referrers cu grafice SVG', status: 'done' },
      { label: 'Lead forms storage in admin', detail: 'Formulare de contact si newsletter stocate in Redis cu widget pe dashboard', status: 'done' },
      { label: 'Admin username + password login', status: 'done' },
      { label: 'Admin logout button', status: 'done' },
      { label: 'Disable popups on admin pages', status: 'done' },
      { label: 'Pagini principale (Homepage RO/EN/DE)', status: 'done' },
      { label: 'Growth Sprint Educatie (RO/EN/DE)', status: 'done' },
      { label: 'Growth Sprint E-commerce (RO/EN/DE)', status: 'done' },
      { label: 'Service pages (Google Ads, Facebook Ads, etc.)', status: 'done' },
      { label: 'Quiz diagnostic (/quiz)', status: 'done' },
      { label: 'Quiz e-commerce (/quiz-ecommerce)', status: 'done' },
      { label: 'Calculator ROI (/calculator)', status: 'done' },
      { label: 'Ghid gratuit (/ghid-gratuit)', status: 'done' },
      { label: 'Perfect-fit booking page', status: 'done' },
      { label: 'Blog articles (31 articles RO/EN/DE)', status: 'done' },
      { label: '404 page with arrow animation', status: 'done' },
      { label: 'Cookie consent', status: 'done' },
      { label: 'Exit popup', status: 'done' },
      { label: 'Admin dashboard', status: 'done' },
      { label: 'Sitemap + redirects WordPress', status: 'done' },
      { label: 'Arrow background pattern', status: 'done' },
    ],
  },
];

const statusConfig: Record<Status, { label: string; color: string; bg: string; border: string; indicator: string }> = {
  urgent: {
    label: 'Urgent',
    color: '#f14a4a',
    bg: 'rgba(241,74,74,0.08)',
    border: 'rgba(241,74,74,0.2)',
    indicator: '\u25cf',
  },
  todo: {
    label: 'De facut',
    color: '#facc15',
    bg: 'rgba(250,204,21,0.08)',
    border: 'rgba(250,204,21,0.2)',
    indicator: '\u25cf',
  },
  done: {
    label: 'Completat',
    color: '#56db84',
    bg: 'rgba(86,219,132,0.08)',
    border: 'rgba(86,219,132,0.2)',
    indicator: '\u25cf',
  },
};

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                        */
/* ------------------------------------------------------------------ */

function StatusBadge({ status }: { status: Status }) {
  const cfg = statusConfig[status];
  return (
    <span
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '10px',
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        borderRadius: '4px',
        padding: '2px 8px',
        letterSpacing: '0.04em',
        textTransform: 'uppercase' as const,
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: '8px' }}>{cfg.indicator}</span>
      {cfg.label}
    </span>
  );
}

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <div
      style={{
        width: '18px',
        height: '18px',
        borderRadius: '4px',
        border: checked ? '1px solid rgba(86,219,132,0.4)' : '1px solid #333',
        background: checked ? 'rgba(86,219,132,0.1)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {checked && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#56db84" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
}

function SectionCard({ section }: { section: Section }) {
  const [open, setOpen] = useState(section.defaultOpen ?? true);
  const accent = '#fb923c';

  const totalItems = section.items.length;
  const doneItems = section.items.filter((i) => i.status === 'done').length;
  const urgentItems = section.items.filter((i) => i.status === 'urgent').length;

  return (
    <div
      style={{
        background: '#0a0a0a',
        border: '1px solid #1a1a1a',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '16px',
        position: 'relative',
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background:
            section.id === 'done'
              ? 'linear-gradient(90deg, #56db84, rgba(86,219,132,0.2))'
              : `linear-gradient(90deg, ${accent}, ${accent}33)`,
        }}
      />

      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <h3
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: '16px',
              fontWeight: 700,
              color: '#dce4e8',
              margin: 0,
            }}
          >
            {section.title}
          </h3>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              color: '#5a6872',
              background: '#111113',
              border: '1px solid #1a1a1a',
              borderRadius: '4px',
              padding: '3px 8px',
              letterSpacing: '0.04em',
            }}
          >
            {doneItems}/{totalItems}
          </span>
          {urgentItems > 0 && (
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                color: '#f14a4a',
                background: 'rgba(241,74,74,0.08)',
                border: '1px solid rgba(241,74,74,0.2)',
                borderRadius: '4px',
                padding: '3px 8px',
                letterSpacing: '0.04em',
              }}
            >
              {urgentItems} urgent
            </span>
          )}
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5a6872"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.2s',
            flexShrink: 0,
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Description */}
      {open && (
        <div style={{ padding: '0 24px 8px' }}>
          <p style={{ fontSize: '13px', color: '#5a6872', lineHeight: 1.5, margin: 0 }}>
            {section.description}
          </p>
        </div>
      )}

      {/* Items */}
      {open && (
        <div style={{ padding: '8px 24px 20px' }}>
          {/* Progress bar */}
          <div
            style={{
              height: '3px',
              background: '#1a1a1a',
              borderRadius: '2px',
              marginBottom: '16px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${totalItems > 0 ? (doneItems / totalItems) * 100 : 0}%`,
                background: section.id === 'done' ? '#56db84' : accent,
                borderRadius: '2px',
                transition: 'width 0.3s',
              }}
            />
          </div>

          {section.items.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                background: i % 2 === 0 ? 'transparent' : '#0c0c0e',
                borderRadius: '6px',
              }}
            >
              <Checkbox checked={item.status === 'done'} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: '13px',
                    color: item.status === 'done' ? '#5a6872' : '#dce4e8',
                    textDecoration: item.status === 'done' ? 'line-through' : 'none',
                    fontWeight: item.status === 'urgent' ? 500 : 400,
                  }}
                >
                  {item.label}
                </div>
                {item.detail && (
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '11px',
                      color: '#444c54',
                      marginTop: '2px',
                    }}
                  >
                    {item.detail}
                  </div>
                )}
              </div>
              <StatusBadge status={item.status} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */

export default function AdminRoadmapPage() {
  const accent = '#fb923c';

  // Compute stats
  const allItems = sections.flatMap((s) => s.items);
  const totalItems = allItems.length;
  const doneItems = allItems.filter((i) => i.status === 'done').length;
  const todoItems = allItems.filter((i) => i.status === 'todo').length;
  const urgentItems = allItems.filter((i) => i.status === 'urgent').length;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '48px 40px 100px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* Back to dashboard */}
        <Link
          href="/admin"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '12px',
            color: '#5a6872',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '40px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6872')}
        >
          &larr; Dashboard
        </Link>

        {/* Title */}
        <div style={{ marginBottom: '32px' }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              color: '#5a6872',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              marginBottom: '8px',
            }}
          >
            TODO / ROADMAP
          </div>
          <h1
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: '28px',
              fontWeight: 800,
              color: '#dce4e8',
              letterSpacing: '-0.5px',
              margin: 0,
            }}
          >
            Todo / Roadmap
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: '#5a6872',
              marginTop: '8px',
              lineHeight: 1.6,
            }}
          >
            Overview of all tasks, features, and content to be completed.
          </p>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          {[
            { label: 'Total', value: totalItems, color: accent },
            { label: 'Completate', value: doneItems, color: '#56db84' },
            { label: 'De facut', value: todoItems, color: '#facc15' },
            { label: 'Urgent', value: urgentItems, color: '#f14a4a' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: '#0a0a0a',
                border: '1px solid #1a1a1a',
                borderRadius: '8px',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: '24px',
                  fontWeight: 800,
                  color: stat.color,
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  color: '#5a6872',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase' as const,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Overall progress */}
        <div
          style={{
            background: '#0a0a0a',
            border: '1px solid #1a1a1a',
            borderRadius: '8px',
            padding: '16px 20px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              color: '#5a6872',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            OVERALL PROGRESS
          </div>
          <div
            style={{
              flex: 1,
              height: '6px',
              background: '#1a1a1a',
              borderRadius: '3px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${totalItems > 0 ? (doneItems / totalItems) * 100 : 0}%`,
                background: `linear-gradient(90deg, #56db84, ${accent})`,
                borderRadius: '3px',
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '12px',
              color: '#56db84',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            {totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0}%
          </div>
        </div>

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '24px',
            flexWrap: 'wrap',
          }}
        >
          {(Object.entries(statusConfig) as [Status, typeof statusConfig[Status]][]).map(([key, cfg]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: '#5a6872',
              }}
            >
              <span style={{ color: cfg.color, fontSize: '10px' }}>{cfg.indicator}</span>
              {cfg.label}
            </div>
          ))}
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>
    </>
  );
}

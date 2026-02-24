'use client';

import Link from 'next/link';
import { useState } from 'react';

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

interface FunnelStep {
  label: string;
  path?: string;
  pixelEvent?: string;
  notBuilt?: boolean;
  branch?: {
    condition: string;
    steps: FunnelStep[];
  }[];
}

interface Funnel {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  steps: FunnelStep[];
}

const funnels: Funnel[] = [
  {
    id: 'quiz-diagnostic',
    title: 'Quiz Diagnostic Flow',
    badge: 'Primary Funnel',
    badgeColor: '#22d3ee',
    steps: [
      { label: 'Homepage', path: '/', pixelEvent: 'PageView' },
      { label: 'Quiz Diagnostic', path: '/quiz', pixelEvent: 'ViewContent' },
      {
        label: 'Score Branch',
        branch: [
          {
            condition: 'Score < 60',
            steps: [
              { label: 'Perfect Fit', path: '/perfect-fit', pixelEvent: 'Lead' },
              { label: 'TidyCal Booking', path: 'https://tidycal.com', pixelEvent: 'Schedule' },
            ],
          },
          {
            condition: 'Score >= 60',
            steps: [
              { label: 'Tips shown, soft CTA', pixelEvent: 'CompleteRegistration' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'quiz-ecommerce',
    title: 'E-commerce Quiz Flow',
    badge: 'E-commerce',
    badgeColor: '#a78bfa',
    steps: [
      { label: 'Homepage', path: '/', pixelEvent: 'PageView' },
      { label: 'Quiz E-commerce', path: '/quiz-ecommerce', pixelEvent: 'ViewContent' },
      {
        label: 'Score Branch',
        branch: [
          {
            condition: 'Critical / Warning',
            steps: [
              { label: 'CTA: TidyCal 30min', path: 'https://tidycal.com', pixelEvent: 'Lead' },
            ],
          },
          {
            condition: 'Score Good',
            steps: [
              { label: 'Tips shown' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'calculator',
    title: 'Calculator \u2192 Booking',
    badge: 'ROI Calculator',
    badgeColor: '#facc15',
    steps: [
      { label: 'Homepage', path: '/', pixelEvent: 'PageView' },
      { label: 'ROI Calculator', path: '/calculator', pixelEvent: 'ViewContent' },
      { label: 'See projected ROI', pixelEvent: 'Lead' },
      { label: 'CTA: TidyCal 30min', path: 'https://tidycal.com', pixelEvent: 'Schedule' },
    ],
  },
  {
    id: 'content-optin',
    title: 'Content \u2192 Optin',
    badge: 'Email Capture',
    badgeColor: '#f472b6',
    steps: [
      { label: 'Blog Articles', path: '/blog', pixelEvent: 'PageView' },
      { label: 'Ghid Gratuit', path: '/ghid-gratuit', pixelEvent: 'ViewContent' },
      { label: 'Email Optin', pixelEvent: 'Lead' },
      { label: 'Thank You Page', path: '/multumim', notBuilt: true },
    ],
  },
  {
    id: 'growth-sprint',
    title: 'Growth Sprint Direct',
    badge: 'Direct Sales',
    badgeColor: '#56db84',
    steps: [
      { label: 'Homepage', path: '/', pixelEvent: 'PageView' },
      {
        label: 'Sprint Branch',
        branch: [
          {
            condition: 'Educatie',
            steps: [
              { label: 'Growth Sprint Educatie', path: '/growth-sprint-educatie', pixelEvent: 'ViewContent' },
              { label: 'Contact Popup', pixelEvent: 'Lead' },
              { label: 'Follow Up' },
            ],
          },
          {
            condition: 'E-commerce',
            steps: [
              { label: 'Growth Sprint E-commerce', path: '/growth-sprint-ecommerce', pixelEvent: 'ViewContent' },
              { label: 'Contact Popup', pixelEvent: 'Lead' },
              { label: 'Follow Up' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'organic',
    title: 'Organic / Direct',
    badge: 'SEO & Social',
    badgeColor: '#60a5fa',
    steps: [
      { label: 'Google / Social', pixelEvent: 'PageView' },
      {
        label: 'Entry Branch',
        branch: [
          {
            condition: 'Service Pages',
            steps: [
              { label: 'Service Pages', path: '/google-ads', pixelEvent: 'ViewContent' },
              { label: 'CTA Banner' },
              { label: 'Contact Popup', pixelEvent: 'Lead' },
              { label: 'Follow Up' },
            ],
          },
          {
            condition: 'Blog Content',
            steps: [
              { label: 'Blog Articles', path: '/blog', pixelEvent: 'PageView' },
              { label: 'Internal Links' },
              { label: 'Service Pages', path: '/google-ads' },
              { label: 'CTA', pixelEvent: 'Lead' },
            ],
          },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                        */
/* ------------------------------------------------------------------ */

function StepBox({ step, accent }: { step: FunnelStep; accent: string }) {
  const inner = (
    <div
      style={{
        background: step.notBuilt ? 'transparent' : '#111113',
        border: step.notBuilt ? `1px dashed #333` : `1px solid #1a1a1a`,
        borderRadius: '8px',
        padding: '12px 16px',
        minWidth: '150px',
        maxWidth: '200px',
        textAlign: 'center',
        position: 'relative',
        cursor: step.path ? 'pointer' : 'default',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => {
        if (step.path) e.currentTarget.style.borderColor = `${accent}66`;
      }}
      onMouseLeave={(e) => {
        if (step.path) e.currentTarget.style.borderColor = step.notBuilt ? '#333' : '#1a1a1a';
      }}
    >
      <div
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: '12px',
          fontWeight: 600,
          color: step.notBuilt ? '#5a6872' : '#dce4e8',
          marginBottom: step.path || step.pixelEvent ? '6px' : '0',
        }}
      >
        {step.label}
      </div>
      {step.path && (
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            color: '#5a6872',
            marginBottom: step.pixelEvent ? '8px' : '0',
          }}
        >
          {step.path}
        </div>
      )}
      {step.notBuilt && (
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '9px',
            color: '#f14a4a',
            background: 'rgba(241,74,74,0.1)',
            border: '1px solid rgba(241,74,74,0.2)',
            borderRadius: '3px',
            padding: '2px 6px',
            display: 'inline-block',
            marginTop: '4px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase' as const,
          }}
        >
          NOT BUILT
        </div>
      )}
      {step.pixelEvent && (
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '9px',
            color: accent,
            background: `${accent}15`,
            border: `1px solid ${accent}33`,
            borderRadius: '3px',
            padding: '2px 6px',
            display: 'inline-block',
            letterSpacing: '0.04em',
          }}
        >
          Pixel: {step.pixelEvent}
        </div>
      )}
    </div>
  );

  if (step.path && !step.path.startsWith('http')) {
    return (
      <Link href={step.path} target="_blank" style={{ textDecoration: 'none' }}>
        {inner}
      </Link>
    );
  }
  if (step.path && step.path.startsWith('http')) {
    return (
      <a href={step.path} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {inner}
      </a>
    );
  }
  return inner;
}

function Arrow({ accent }: { accent: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 4px',
        flexShrink: 0,
      }}
    >
      <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
        <line x1="0" y1="6" x2="22" y2="6" stroke={accent} strokeWidth="1.5" strokeDasharray="3 2" />
        <polygon points="22,2 28,6 22,10" fill={accent} />
      </svg>
    </div>
  );
}

function BranchDiagram({
  branches,
  accent,
}: {
  branches: NonNullable<FunnelStep['branch']>;
  accent: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {branches.map((branch, bi) => (
        <div key={bi} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
          {/* Condition badge */}
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              color: accent,
              background: `${accent}15`,
              border: `1px solid ${accent}33`,
              borderRadius: '4px',
              padding: '4px 10px',
              whiteSpace: 'nowrap',
              minWidth: '100px',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            {branch.condition}
          </div>
          <Arrow accent={accent} />
          {/* Branch steps */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
            {branch.steps.map((s, si) => (
              <div key={si} style={{ display: 'flex', alignItems: 'center' }}>
                <StepBox step={s} accent={accent} />
                {si < branch.steps.length - 1 && <Arrow accent={accent} />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FunnelCard({ funnel }: { funnel: Funnel }) {
  const [collapsed, setCollapsed] = useState(false);
  const accent = funnel.badgeColor;

  // Split steps into linear steps (before any branch) and the branch step
  const linearSteps: FunnelStep[] = [];
  let branchStep: FunnelStep | null = null;

  for (const step of funnel.steps) {
    if (step.branch) {
      branchStep = step;
    } else {
      linearSteps.push(step);
    }
  }

  return (
    <div
      style={{
        background: '#0a0a0a',
        border: '1px solid #1a1a1a',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '20px',
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
          background: `linear-gradient(90deg, ${accent}, ${accent}33)`,
        }}
      />

      {/* Header */}
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h3
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: '16px',
              fontWeight: 700,
              color: '#dce4e8',
              margin: 0,
            }}
          >
            {funnel.title}
          </h3>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              color: accent,
              background: `${accent}15`,
              border: `1px solid ${accent}33`,
              borderRadius: '4px',
              padding: '3px 8px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
            }}
          >
            {funnel.badge}
          </span>
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
            transform: collapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Flow diagram */}
      {!collapsed && (
        <div
          style={{
            padding: '0 24px 24px',
            overflowX: 'auto',
          }}
        >
          {/* Linear steps */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: branchStep ? '16px' : '0', flexWrap: 'wrap' }}>
            {linearSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <StepBox step={step} accent={accent} />
                {(i < linearSteps.length - 1 || branchStep) && <Arrow accent={accent} />}
              </div>
            ))}
          </div>

          {/* Branch steps */}
          {branchStep && branchStep.branch && (
            <div style={{ paddingLeft: '20px', borderLeft: `2px solid ${accent}33` }}>
              <BranchDiagram branches={branchStep.branch} accent={accent} />
            </div>
          )}

          {/* Secondary note for Growth Sprint */}
          {funnel.id === 'growth-sprint' && (
            <div
              style={{
                marginTop: '16px',
                padding: '10px 14px',
                background: '#0f0f11',
                border: '1px dashed #1a1a1a',
                borderRadius: '8px',
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: '#5a6872',
              }}
            >
              Secondary: &quot;Nu esti sigur?&quot; &rarr;{' '}
              <Link href="/quiz" style={{ color: accent, textDecoration: 'none' }}>
                /quiz
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */

export default function AdminFunnelsPage() {
  const accent = '#22d3ee';

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
          maxWidth: '1100px',
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
        <div style={{ marginBottom: '40px' }}>
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
            CONVERSION FUNNELS
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
            Conversion Funnels
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: '#5a6872',
              marginTop: '8px',
              lineHeight: 1.6,
            }}
          >
            Visual flow diagrams showing how users convert on the site. Click any step box to visit the actual page.
          </p>
        </div>

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '32px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Active page', border: '1px solid #1a1a1a', bg: '#111113' },
            { label: 'Not built', border: '1px dashed #333', bg: 'transparent' },
            { label: 'Pixel event', border: `1px solid ${accent}33`, bg: `${accent}15`, color: accent },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: '#5a6872',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '14px',
                  borderRadius: '3px',
                  border: item.border,
                  background: item.bg,
                }}
              />
              <span style={{ color: item.color || '#5a6872' }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Funnel cards */}
        {funnels.map((funnel) => (
          <FunnelCard key={funnel.id} funnel={funnel} />
        ))}

        {/* Summary */}
        <div
          style={{
            background: '#0a0a0a',
            border: '1px solid #1a1a1a',
            borderRadius: '12px',
            padding: '24px',
            marginTop: '12px',
          }}
        >
          <h3
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: '14px',
              fontWeight: 700,
              color: '#dce4e8',
              marginBottom: '16px',
            }}
          >
            Summary
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '12px',
            }}
          >
            {[
              { label: 'Total Funnels', value: '6', color: accent },
              { label: 'Pixel Events Used', value: '5', color: '#a78bfa' },
              { label: 'Pages Not Built', value: '1', color: '#f14a4a' },
              { label: 'TidyCal Endpoints', value: '3', color: '#56db84' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: '#0f0f11',
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
        </div>
      </div>
    </>
  );
}

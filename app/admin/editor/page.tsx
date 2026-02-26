'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type ContentData = Record<string, Record<string, string>>;

export default function EditorPage() {
  const router = useRouter();
  const [content, setContent] = useState<ContentData | null>(null);
  const [originalContent, setOriginalContent] = useState<ContentData | null>(null);
  const [selectedPage, setSelectedPage] = useState<string>('');
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [translating, setTranslating] = useState(false);
  const [translateMsg, setTranslateMsg] = useState('');
  const [host, setHost] = useState('LOCAL');
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [promptModalOpen, setPromptModalOpen] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => { setHost(window.location.host); }, []);

  useEffect(() => {
    fetch('/api/admin/content')
      .then((r) => r.json())
      .then((d) => {
        setContent(d);
        setOriginalContent(JSON.parse(JSON.stringify(d)));
        // Auto-select first Romanian non-blog page
        const roKeys = Object.keys(d).filter((k) => !isExcluded(k));
        const firstNonBlog = roKeys.find((k) => !k.startsWith('blog-')) || roKeys[0];
        if (firstNonBlog) setSelectedPage(firstNonBlog);
      })
      .catch(() => {});
  }, []);

  // Filter out EN/DE pages
  function isExcluded(key: string): boolean {
    return key.startsWith('en-') || key.startsWith('en/') ||
           key.startsWith('ge-') || key.startsWith('ge/') ||
           key.startsWith('de-') || key.startsWith('de/') ||
           key.endsWith('-en') || key.endsWith('-de');
  }

  const allPages = content ? Object.keys(content).filter((k) => !isExcluded(k)) : [];

  // Group definitions matching main site nav
  const MAIN_PAGES = new Set(['homepage', 'contact']);
  const GROWTH_SPRINT_KEYS = new Set(['growth-sprint-ecommerce', 'growth-sprint-educatie']);
  const RECLAME_KEYS = new Set(['reclame-platite', 'reclame-platite-instagram-ads', 'reclame-platite-linkedin-ads', 'reclame-platite-tiktok-ads']);
  const WEBDESIGN_KEYS = new Set(['webdesign', 'website-lead-generation-ro', 'website-companie-ro', 'magazine-online-ro', 'mentenanta-website-ro']);
  const MARKETING_KEYS = new Set(['marketing-digital', 'strategie-digitala-ro', 'solutii-email-marketing-ro', 'solutii-crm-ro', 'solutii-cro-ro', 'solutii-seo-ro', 'solutii-social-media-ro', 'geo-optimization']);
  const COMPANIE_KEYS = new Set(['despre-nesco-digital', 'proiecte', 'proiecte-[slug]', 'cum-lucram', 'cu-cine-nu-lucram', 'calculator']);

  const mainPages = allPages.filter((k) => MAIN_PAGES.has(k));
  const growthSprintPages = allPages.filter((k) => GROWTH_SPRINT_KEYS.has(k));
  const reclamePages = allPages.filter((k) => RECLAME_KEYS.has(k));
  const webdesignPages = allPages.filter((k) => WEBDESIGN_KEYS.has(k));
  const marketingPages = allPages.filter((k) => MARKETING_KEYS.has(k));
  const companiePages = allPages.filter((k) => COMPANIE_KEYS.has(k));
  const blogPages = allPages.filter((k) => k.startsWith('blog'));

  const assignedKeys = new Set([
    ...mainPages, ...growthSprintPages, ...reclamePages,
    ...webdesignPages, ...marketingPages, ...companiePages, ...blogPages,
  ]);
  const extraPages = allPages.filter((k) => !assignedKeys.has(k));

  const toggleGroup = (name: string) => {
    setOpenGroups((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  type SidebarGroup = { name: string; pages: string[]; color?: string };
  const groups: SidebarGroup[] = [
    { name: 'Growth Sprint', pages: growthSprintPages, color: '#56db84' },
    { name: 'Reclame Platite', pages: reclamePages, color: '#fb923c' },
    { name: 'Webdesign', pages: webdesignPages, color: '#60a5fa' },
    { name: 'Marketing Digital', pages: marketingPages, color: '#a78bfa' },
    { name: 'Companie', pages: companiePages, color: '#facc15' },
    { name: 'Blog', pages: blogPages, color: '#f472b6' },
    { name: 'Extra', pages: extraPages, color: '#5a6872' },
  ].filter((g) => g.pages.length > 0);
  const fields = content && selectedPage ? content[selectedPage] : {};

  const updateField = (key: string, value: string) => {
    if (!content || !selectedPage) return;
    setContent({
      ...content,
      [selectedPage]: { ...content[selectedPage], [key]: value },
    });
  };

  const addField = () => {
    const key = prompt('Numele campului (ex: hero_title, cta_text):');
    if (!key || !content || !selectedPage) return;
    setContent({
      ...content,
      [selectedPage]: { ...content[selectedPage], [key]: '' },
    });
  };

  const removeField = (key: string) => {
    if (!content || !selectedPage) return;
    const updated = { ...content[selectedPage] };
    delete updated[key];
    setContent({ ...content, [selectedPage]: updated });
  };

  const addPage = () => {
    const key = prompt('Numele paginii (ex: servicii, blog):');
    if (!key || !content) return;
    setContent({ ...content, [key]: {} });
    setSelectedPage(key);
  };

  const handleSave = async () => {
    if (!content) return;
    setSaving(true);
    setSaveMsg('');
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (!res.ok) throw new Error();
      setSaveMsg('Salvat cu succes!');
      setTimeout(() => setSaveMsg(''), 3000);
    } catch {
      setSaveMsg('Eroare la salvare');
    } finally {
      setSaving(false);
    }
  };

  const handleTranslate = async () => {
    if (!content || !selectedPage) return;
    const pageFields = content[selectedPage];
    if (Object.keys(pageFields).length === 0) {
      setTranslateMsg('Adauga campuri mai intai');
      setTimeout(() => setTranslateMsg(''), 3000);
      return;
    }
    setTranslating(true);
    setTranslateMsg('');
    try {
      const res = await fetch('/api/admin/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageKey: selectedPage,
          fields: pageFields,
          targetLanguages: ['en', 'de'],
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setTranslateMsg(`Tradus in: ${data.translated?.join(', ')}`);
      setTimeout(() => setTranslateMsg(''), 5000);
    } catch (err) {
      setTranslateMsg(err instanceof Error ? err.message : 'Eroare la traducere');
    } finally {
      setTranslating(false);
    }
  };

  function pageKeyToFilePath(pageKey: string): string {
    if (pageKey === 'homepage') return 'app/page.tsx';
    if (pageKey === 'layout') return 'app/layout.tsx';
    if (pageKey === 'not-found') return 'app/not-found.tsx';
    // blog-[slug] or blog-xxx
    if (pageKey.startsWith('blog-[')) return 'app/blog/[slug]/page.tsx';
    if (pageKey.startsWith('blog-')) return `app/blog/${pageKey.replace('blog-', '')}/page.tsx`;
    if (pageKey === 'blog') return 'app/blog/page.tsx';
    // proiecte-[slug]
    if (pageKey === 'proiecte-[slug]') return 'app/proiecte/[slug]/page.tsx';
    // Nested paths with dashes → directory separators
    const parts = pageKey.split('-');
    // Try common patterns: reclame-platite-xxx → app/reclame-platite/xxx/page.tsx
    const knownPrefixes = [
      'reclame-platite', 'growth-sprint', 'marketing-digital',
      'despre-nesco-digital', 'solutii-email-marketing', 'solutii-crm',
      'solutii-cro', 'solutii-seo', 'solutii-social-media',
    ];
    for (const prefix of knownPrefixes) {
      if (pageKey.startsWith(prefix + '-')) {
        const rest = pageKey.slice(prefix.length + 1);
        return `app/${prefix}/${rest}/page.tsx`;
      }
      if (pageKey === prefix) return `app/${prefix}/page.tsx`;
    }
    // Default: replace dashes with path separators for multi-segment, otherwise direct
    if (parts.length > 2) {
      return `app/${pageKey}/page.tsx`;
    }
    return `app/${pageKey.replace(/-/g, '/')}/page.tsx`;
  }

  function getChangedFields(): { page: string; filePath: string; changes: { key: string; oldVal: string; newVal: string }[] }[] {
    if (!content || !originalContent) return [];
    const result: { page: string; filePath: string; changes: { key: string; oldVal: string; newVal: string }[] }[] = [];

    for (const pageKey of Object.keys(content)) {
      if (isExcluded(pageKey)) continue;
      const currentFields = content[pageKey] || {};
      const originalFields = originalContent[pageKey] || {};
      const changes: { key: string; oldVal: string; newVal: string }[] = [];

      for (const [fieldKey, newVal] of Object.entries(currentFields)) {
        const oldVal = originalFields[fieldKey] || '';
        if (newVal !== oldVal && oldVal !== '') {
          changes.push({ key: fieldKey, oldVal, newVal });
        }
      }
      if (changes.length > 0) {
        result.push({ page: pageKey, filePath: pageKeyToFilePath(pageKey), changes });
      }
    }
    return result;
  }

  function handleGeneratePrompt() {
    const allChanges = getChangedFields();
    if (allChanges.length === 0) {
      setGeneratedPrompt('Nu exista modificari fata de continutul original.');
      setPromptModalOpen(true);
      return;
    }

    let prompt = `TASK: Update text content in the following files.\n\n`;
    prompt += `For each file below, find the OLD text and replace it with the NEW text.\n\n`;

    for (const { page, filePath, changes } of allChanges) {
      prompt += `---\n\n`;
      prompt += `FILE: ${filePath}\n`;
      prompt += `PAGE KEY: ${page}\n\n`;
      for (const { key, oldVal, newVal } of changes) {
        prompt += `FIELD: ${key}\n`;
        prompt += `FIND:\n${oldVal}\n\n`;
        prompt += `REPLACE WITH:\n${newVal}\n\n`;
      }
    }

    prompt += `---\n\n`;
    prompt += `IMPORTANT RULES:\n`;
    prompt += `- ONLY modify the files listed above\n`;
    prompt += `- ONLY change the exact strings specified — do not touch anything else\n`;
    prompt += `- Do NOT add, remove, or reformat any other code\n`;
    prompt += `- After all changes, run: npm run build && say "gata"\n`;

    setGeneratedPrompt(prompt);
    setPromptModalOpen(true);
    setCopied(false);
  }

  const pendingChangesCount = getChangedFields().reduce((sum, p) => sum + p.changes.length, 0);

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
        .editor-wrap { padding: 48px 40px 100px; max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .editor-layout { display: grid; grid-template-columns: 220px 1fr; gap: 16px; }
        @media (max-width: 768px) {
          .editor-wrap { padding: 20px 16px 60px; }
          .editor-layout { grid-template-columns: 1fr; }
        }
      `}} />

      <div className="editor-wrap">

        {/* HEADER */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
          paddingBottom: '16px',
          borderBottom: '1px solid #1a1a1a',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src="https://i0.wp.com/nescodigital.com/wp-content/uploads/2024/09/nescodigital-logo-invert.png"
              alt="Nesco Digital"
              style={{ height: '18px', width: 'auto' }}
            />
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              color: '#5a6872',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {host} - CONTENT EDITOR
            </span>
          </div>
          <button
            onClick={() => router.push('/admin')}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              color: '#5a6872',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid #1a1a1a',
              padding: '5px 10px',
              borderRadius: '4px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#dce4e8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.color = '#5a6872'; }}
          >
            &larr; Dashboard
          </button>
        </div>

        {/* WARNING NOTICE */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 14px',
          background: '#0a0a0a',
          border: '1px solid rgba(251,146,60,0.22)',
          borderLeft: '3px solid #fb923c',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#dce4e8',
          fontFamily: "'DM Mono', monospace",
          marginBottom: '20px',
        }}>
          <span style={{ color: '#fb923c', fontSize: '14px', flexShrink: 0 }}>!</span>
          Modificarile sunt salvate LOCAL. Fa git commit + push pe GitHub pentru a actualiza site-ul live.
        </div>

        {content === null ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
            <div style={{
              width: '18px', height: '18px',
              border: '2px solid rgba(86,219,132,0.2)',
              borderTopColor: '#56db84',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
            <style dangerouslySetInnerHTML={{ __html: '@keyframes spin { to { transform: rotate(360deg); } }' }} />
          </div>
        ) : (
          <div className="editor-layout">

            {/* SIDEBAR */}
            <div style={{
              background: '#0a0a0a',
              border: '1px solid #1a1a1a',
              borderRadius: '12px',
              padding: '16px',
              alignSelf: 'start',
              position: 'sticky',
              top: '20px',
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '9px',
                color: '#5a6872',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>
                Pagini
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {/* Main pages (flat) */}
                {mainPages.map((page) => (
                  <button
                    key={page}
                    onClick={() => setSelectedPage(page)}
                    style={{
                      textAlign: 'left',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: 'none',
                      background: selectedPage === page ? 'rgba(86,219,132,0.1)' : 'transparent',
                      color: selectedPage === page ? '#56db84' : '#8a9aa4',
                      fontSize: '13px',
                      fontWeight: selectedPage === page ? 500 : 400,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      if (selectedPage !== page) e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    }}
                    onMouseLeave={(e) => {
                      if (selectedPage !== page) e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {page}
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px',
                      color: '#3a3a3a',
                      marginLeft: '8px',
                    }}>
                      {Object.keys(content[page] || {}).length}
                    </span>
                  </button>
                ))}

                {/* Separator */}
                {mainPages.length > 0 && groups.length > 0 && (
                  <div style={{ height: '1px', background: '#1a1a1a', margin: '4px 0' }} />
                )}

                {/* Collapsible groups */}
                {groups.map((group) => (
                  <div key={group.name}>
                    <button
                      onClick={() => toggleGroup(group.name)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        background: 'transparent',
                        color: '#8a9aa4',
                        fontSize: '13px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        fontFamily: "'Inter', sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '10px', color: group.color }}>{openGroups[group.name] ? '\u25BC' : '\u25B6'}</span>
                        <span style={{ borderLeft: `2px solid ${group.color}`, paddingLeft: '8px' }}>{group.name}</span>
                      </span>
                      <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '10px',
                        color: '#3a3a3a',
                      }}>
                        {group.pages.length}
                      </span>
                    </button>
                    {openGroups[group.name] && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '12px' }}>
                        {group.pages.map((page) => (
                          <button
                            key={page}
                            onClick={() => setSelectedPage(page)}
                            style={{
                              textAlign: 'left',
                              padding: '6px 10px',
                              borderRadius: '6px',
                              border: 'none',
                              background: selectedPage === page ? 'rgba(86,219,132,0.1)' : 'transparent',
                              color: selectedPage === page ? '#56db84' : '#6a7a84',
                              fontSize: '12px',
                              fontWeight: selectedPage === page ? 500 : 400,
                              cursor: 'pointer',
                              transition: 'all 0.15s ease',
                              fontFamily: "'Inter', sans-serif",
                            }}
                            onMouseEnter={(e) => {
                              if (selectedPage !== page) e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                            }}
                            onMouseLeave={(e) => {
                              if (selectedPage !== page) e.currentTarget.style.background = 'transparent';
                            }}
                          >
                            {page.startsWith('blog-') ? page.replace('blog-', '') : page}
                            <span style={{
                              fontFamily: "'DM Mono', monospace",
                              fontSize: '9px',
                              color: '#3a3a3a',
                              marginLeft: '6px',
                            }}>
                              {Object.keys(content[page] || {}).length}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={addPage}
                style={{
                  width: '100%',
                  marginTop: '8px',
                  padding: '8px',
                  borderRadius: '6px',
                  border: '1px dashed #222',
                  background: 'transparent',
                  color: '#5a6872',
                  fontSize: '12px',
                  cursor: 'pointer',
                  fontFamily: "'DM Mono', monospace",
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#56db84'; e.currentTarget.style.color = '#56db84'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#5a6872'; }}
              >
                + Pagina noua
              </button>
            </div>

            {/* MAIN PANEL */}
            <div style={{
              background: '#0a0a0a',
              border: '1px solid #1a1a1a',
              borderRadius: '12px',
              padding: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #56db84, #60a5fa)',
              }} />

              {/* Panel header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '11px',
                  color: '#5a6872',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {selectedPage || 'Selecteaza o pagina'}
                </div>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  {translateMsg && (
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px',
                      color: translateMsg.startsWith('Tradus') ? '#56db84' : '#fb923c',
                    }}>
                      {translateMsg}
                    </span>
                  )}
                  <button
                    onClick={handleTranslate}
                    disabled={translating || !selectedPage}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px',
                      color: '#60a5fa',
                      background: 'rgba(96,165,250,0.08)',
                      border: '1px solid rgba(96,165,250,0.2)',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      letterSpacing: '0.06em',
                      cursor: translating ? 'not-allowed' : 'pointer',
                      opacity: translating ? 0.5 : 1,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => { if (!translating) e.currentTarget.style.background = 'rgba(96,165,250,0.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(96,165,250,0.08)'; }}
                  >
                    {translating ? 'Se traduce...' : 'Traduce automat'}
                  </button>
                </div>
              </div>

              {/* Fields */}
              {selectedPage && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {Object.keys(fields).length === 0 ? (
                    <div style={{
                      fontSize: '13px',
                      color: '#3a3a3a',
                      padding: '20px 0',
                      textAlign: 'center',
                    }}>
                      Niciun camp. Adauga primul camp.
                    </div>
                  ) : (
                    Object.entries(fields).map(([key, value]) => (
                      <div key={key}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '4px',
                        }}>
                          <label style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: '10px',
                            color: '#5a6872',
                            letterSpacing: '0.06em',
                          }}>
                            {key}
                          </label>
                          <button
                            onClick={() => removeField(key)}
                            style={{
                              fontFamily: "'DM Mono', monospace",
                              fontSize: '9px',
                              color: '#5a6872',
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              padding: '2px 4px',
                              borderRadius: '3px',
                              transition: 'color 0.15s ease',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = '#f14a4a'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = '#5a6872'; }}
                          >
                            sterge
                          </button>
                        </div>
                        <textarea
                          value={value}
                          onChange={(e) => updateField(key, e.target.value)}
                          rows={value.length > 100 ? 4 : 2}
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            background: '#111',
                            border: '1px solid #1a1a1a',
                            borderRadius: '8px',
                            color: '#dce4e8',
                            fontSize: '13px',
                            fontFamily: "'Inter', sans-serif",
                            outline: 'none',
                            resize: 'vertical',
                            lineHeight: 1.6,
                            transition: 'border-color 0.2s ease',
                          }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(86,219,132,0.3)'; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; }}
                        />
                      </div>
                    ))
                  )}

                  <button
                    onClick={addField}
                    style={{
                      padding: '8px',
                      borderRadius: '6px',
                      border: '1px dashed #222',
                      background: 'transparent',
                      color: '#5a6872',
                      fontSize: '12px',
                      cursor: 'pointer',
                      fontFamily: "'DM Mono', monospace",
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#56db84'; e.currentTarget.style.color = '#56db84'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#5a6872'; }}
                  >
                    + Camp nou
                  </button>
                </div>
              )}

              {/* Save button */}
              <div style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid #1a1a1a',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#56db84',
                    background: 'rgba(86,219,132,0.1)',
                    border: '1px solid rgba(86,219,132,0.25)',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    cursor: saving ? 'not-allowed' : 'pointer',
                    opacity: saving ? 0.5 : 1,
                    letterSpacing: '0.04em',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { if (!saving) { e.currentTarget.style.background = 'rgba(86,219,132,0.18)'; e.currentTarget.style.borderColor = 'rgba(86,219,132,0.4)'; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(86,219,132,0.1)'; e.currentTarget.style.borderColor = 'rgba(86,219,132,0.25)'; }}
                >
                  {saving ? 'Se salveaza...' : 'Salveaza'}
                </button>
                {saveMsg && (
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '11px',
                    color: saveMsg.includes('succes') ? '#56db84' : '#f14a4a',
                  }}>
                    {saveMsg}
                  </span>
                )}
                <button
                  onClick={handleGeneratePrompt}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '10px',
                    color: pendingChangesCount > 0 ? '#e879f9' : '#5a6872',
                    background: pendingChangesCount > 0 ? 'rgba(232,121,249,0.08)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${pendingChangesCount > 0 ? 'rgba(232,121,249,0.25)' : '#1a1a1a'}`,
                    padding: '5px 10px',
                    borderRadius: '4px',
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginLeft: 'auto',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = pendingChangesCount > 0 ? 'rgba(232,121,249,0.15)' : 'rgba(255,255,255,0.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = pendingChangesCount > 0 ? 'rgba(232,121,249,0.08)' : 'rgba(255,255,255,0.04)'; }}
                >
                  {pendingChangesCount > 0 ? `Prompt Claude Code (${pendingChangesCount})` : 'Prompt Claude Code'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PROMPT MODAL */}
      {promptModalOpen && (
        <div
          onClick={() => setPromptModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#0a0a0a',
              border: '1px solid #1a1a1a',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '720px',
              maxHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Modal header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              borderBottom: '1px solid #1a1a1a',
            }}>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: '#e879f9',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                Prompt Claude Code
              </span>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedPrompt);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '10px',
                    color: copied ? '#56db84' : '#e879f9',
                    background: copied ? 'rgba(86,219,132,0.1)' : 'rgba(232,121,249,0.1)',
                    border: `1px solid ${copied ? 'rgba(86,219,132,0.25)' : 'rgba(232,121,249,0.25)'}`,
                    padding: '5px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {copied ? 'Copiat!' : 'Copy to clipboard'}
                </button>
                <button
                  onClick={() => setPromptModalOpen(false)}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '14px',
                    color: '#5a6872',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px 6px',
                  }}
                >
                  &times;
                </button>
              </div>
            </div>
            {/* Modal body */}
            <div style={{ padding: '16px 20px', overflowY: 'auto', flex: 1 }}>
              <pre style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: '#dce4e8',
                lineHeight: 1.7,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                background: '#111',
                border: '1px solid #1a1a1a',
                borderRadius: '8px',
                padding: '16px',
              }}>
                {generatedPrompt}
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

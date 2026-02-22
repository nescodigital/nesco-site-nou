const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
        <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
        <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z" />
        <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" />
        <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
      </svg>
    ),
    label: "Google Partner",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: "Meta Business Partner",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
        <path fill="white" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
    label: "TikTok Marketing Partner",
  },
  { icon: null, label: "ani experiență", stat: "15" },
  { icon: null, label: "bugete gestionate", stat: "36M€+" },
];

export function GoogleAdsTrustBar() {
  return (
    <div
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "18px 0",
      }}
    >
      <div className="page-container">
        <div
          className="hidden md:flex flex-wrap items-center justify-center"
          style={{ gap: "28px" }}
        >
          {ITEMS.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              {i > 0 && (
                <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.08)", flexShrink: 0 }} />
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                {item.icon}
                {item.stat && (
                  <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#56db84" }}>
                    {item.stat}
                  </span>
                )}
                <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "rgba(255,255,255,0.38)", letterSpacing: "0.01em" }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

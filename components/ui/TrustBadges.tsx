"use client";

type Locale = "ro" | "en" | "de";

interface TrustBadgesProps {
  locale?: Locale;
}

const BADGE_STYLE: React.CSSProperties = {
  background: "#111111",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  padding: "6px 12px",
  fontSize: "0.75rem",
  color: "#fff",
};

function hoverIn(e: React.MouseEvent) {
  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(86,219,132,0.3)";
}
function hoverOut(e: React.MouseEvent) {
  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
}

export function TrustBadges({ locale = "ro" }: TrustBadgesProps) {
  return (
    <div className="flex flex-wrap gap-5 justify-center" style={{ paddingTop: "24px" }}>
      {/* Clutch */}
      <div
        className="inline-flex items-center gap-2 transition-colors"
        style={BADGE_STYLE}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        <span style={{ fontWeight: 700, color: "#ff3d2e", fontSize: "0.8125rem" }}>clutch</span>
        <span style={{ color: "rgba(255,255,255,0.5)" }}>|</span>
        <span>
          {locale === "ro"
            ? "Top Digital Agency România"
            : locale === "en"
              ? "Top Digital Agency Romania"
              : "Top Digitalagentur Rumänien"}
        </span>
        <span style={{ color: "#f59e0b", letterSpacing: "1px" }}>★★★★★</span>
      </div>

      {/* Google Reviews */}
      <div
        className="inline-flex items-center gap-2 transition-colors"
        style={BADGE_STYLE}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        <svg viewBox="0 0 24 24" width="14" height="14" style={{ flexShrink: 0 }}>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        <span>{locale === "de" ? "Google-Bewertungen" : "Google Reviews"}</span>
        <span style={{ color: "#f59e0b", letterSpacing: "1px" }}>★★★★★</span>
        <span style={{ color: "rgba(255,255,255,0.4)" }}>
          {locale === "de" ? "5,0 · 12 Bewertungen" : locale === "en" ? "5.0 · 12 reviews" : "5.0 · 12 recenzii"}
        </span>
      </div>

      {/* GoodFirms */}
      <div
        className="inline-flex items-center gap-2 transition-colors"
        style={BADGE_STYLE}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        <svg viewBox="0 0 16 16" width="14" height="14" style={{ flexShrink: 0 }}>
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z" fill="#2B85FF" />
          <path d="M5.5 8.5l2 2 3.5-4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>GoodFirms</span>
        <span style={{ color: "rgba(255,255,255,0.5)" }}>|</span>
        <span>
          {locale === "de" ? "Top-Webentwicklung" : "Top Web Development"}
        </span>
      </div>
    </div>
  );
}

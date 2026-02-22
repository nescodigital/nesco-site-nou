"use client";

const CONTENT = {
  ro: {
    center: "Brand\nTău",
    planets: ["SEO", "Paid Ads", "Email", "Social", "CRO", "Strategie"],
    pills: ["6 servicii integrate", "Un singur partener", "ROI măsurabil"],
    card: "De la 6 furnizori la 1 partener",
    cardSub: "Economie: 3.500€/lună",
  },
  en: {
    center: "Your\nBrand",
    planets: ["SEO", "Paid Ads", "Email", "Social", "CRO", "Strategy"],
    pills: ["6 integrated services", "Single partner", "Measurable ROI"],
    card: "From 6 vendors to 1 partner",
    cardSub: "Saving: €3,500/month",
  },
  de: {
    center: "Ihre\nMarke",
    planets: ["SEO", "Paid Ads", "E-Mail", "Social", "CRO", "Strategie"],
    pills: ["6 integrierte Services", "Ein Partner", "Messbarer ROI"],
    card: "Von 6 Anbietern zu 1 Partner",
    cardSub: "Ersparnis: 3.500€/Monat",
  },
};

const PLANET_COLORS = [
  "#2dd4bf",
  "#56db84",
  "#a78bfa",
  "#f472b6",
  "#fb923c",
  "#facc15",
];

const ORBITS = [
  { radius: 90, duration: 20 },
  { radius: 90, duration: 20 },
  { radius: 140, duration: 30 },
  { radius: 140, duration: 30 },
  { radius: 185, duration: 45 },
  { radius: 185, duration: 45 },
];

const START_ANGLES = [0, 180, 90, 270, 45, 225];

function Planet({
  label,
  color,
  orbitRadius,
  orbitDuration,
  startAngle,
}: {
  label: string;
  color: string;
  orbitRadius: number;
  orbitDuration: number;
  startAngle: number;
}) {
  const delay = `${(-startAngle / 360) * orbitDuration}s`;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 0,
        height: 0,
        animation: `moOrbit ${orbitDuration}s linear infinite`,
        animationDelay: delay,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -orbitRadius,
          left: 0,
          width: 48,
          height: 48,
          marginLeft: -24,
          animation: `moCounterOrbit ${orbitDuration}s linear infinite`,
          animationDelay: delay,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "#0a0a0a",
            border: `1px solid ${color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.6rem",
            fontWeight: 700,
            color,
            textAlign: "center",
            lineHeight: 1.2,
            boxShadow: `0 0 10px ${color}30`,
            whiteSpace: "pre-line",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export function MarketingOrbitMockup({ locale }: { locale: "ro" | "en" | "de" }) {
  const c = CONTENT[locale];

  const keyframes = `
    @keyframes moOrbit {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes moCounterOrbit {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    @keyframes moPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(86,219,132,0.4); }
      50% { box-shadow: 0 0 0 12px rgba(86,219,132,0); }
    }
    @keyframes moFloat {
      0%, 100% { transform: rotate(-2deg) translateY(0); }
      50% { transform: rotate(-2deg) translateY(-6px); }
    }
  `;

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 420, margin: "0 auto" }}>
      <style>{keyframes}</style>

      {/* Main orbit container */}
      <div
        style={{
          position: "relative",
          width: 380,
          height: 380,
          margin: "0 auto",
          transform: "rotate(1deg)",
        }}
      >
        {/* Orbit rings */}
        {[90, 140, 185].map((r, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: r * 2,
              height: r * 2,
              marginTop: -r,
              marginLeft: -r,
              borderRadius: "50%",
              border: "1px dashed rgba(255,255,255,0.12)",
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Center circle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 80,
            height: 80,
            marginTop: -40,
            marginLeft: -40,
            borderRadius: "50%",
            background: "rgba(86,219,132,0.1)",
            border: "1px solid rgba(86,219,132,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "moPulse 3s ease-in-out infinite",
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              color: "#56db84",
              textAlign: "center",
              lineHeight: 1.3,
              whiteSpace: "pre-line",
            }}
          >
            {c.center}
          </span>
        </div>

        {/* 6 planets */}
        {c.planets.map((label, i) => (
          <Planet
            key={i}
            label={label}
            color={PLANET_COLORS[i]}
            orbitRadius={ORBITS[i].radius}
            orbitDuration={ORBITS[i].duration}
            startAngle={START_ANGLES[i]}
          />
        ))}
      </div>

      {/* Stat pills */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 16,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {c.pills.map((pill, i) => (
          <div
            key={i}
            style={{
              background: "rgba(86,219,132,0.08)",
              border: "1px solid rgba(86,219,132,0.2)",
              borderRadius: 99,
              padding: "6px 14px",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 500,
            }}
          >
            {pill}
          </div>
        ))}
      </div>

      {/* Floating card */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: -10,
          zIndex: 2,
          background: "#0d0d0d",
          border: "1px solid rgba(86,219,132,0.2)",
          borderRadius: 14,
          padding: "12px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
          animation: "moFloat 4s ease-in-out infinite",
          minWidth: 190,
        }}
      >
        <div
          style={{
            fontSize: "0.8125rem",
            fontWeight: 700,
            color: "#56db84",
            marginBottom: 4,
          }}
        >
          {c.card}
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
          {c.cardSub}
        </div>
      </div>
    </div>
  );
}

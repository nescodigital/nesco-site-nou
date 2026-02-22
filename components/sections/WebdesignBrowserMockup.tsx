"use client";

import { useState, useEffect } from "react";

const LABELS = {
  ro: {
    before: "Inainte",
    after: "Dupa Nesco",
    pills: ["PageSpeed 96+", "Mobile-first", "Livrare 5 sapt"],
    card: "+70% programari in prima luna",
    cardSub: "Clinica medicala, Romania",
  },
  en: {
    before: "Before",
    after: "After Nesco",
    pills: ["PageSpeed 96+", "Mobile-first", "Delivery 5 wks"],
    card: "+70% bookings in first month",
    cardSub: "Medical clinic, Romania",
  },
  de: {
    before: "Vorher",
    after: "Nach Nesco",
    pills: ["PageSpeed 96+", "Mobile-first", "Lieferung 5 Wo."],
    card: "+70% Buchungen im ersten Monat",
    cardSub: "Privatklinik, Rumanien",
  },
};

interface Props {
  locale: "ro" | "en" | "de";
}

export function WebdesignBrowserMockup({ locale }: Props) {
  const l = LABELS[locale];
  const [dividerPos, setDividerPos] = useState(100);

  useEffect(() => {
    let pos = 100;
    let dir = -1;
    let pauseFrames = 0;

    const interval = setInterval(() => {
      if (pauseFrames > 0) {
        pauseFrames--;
        return;
      }
      pos += dir * 1.2;
      if (pos <= 0) {
        pos = 0;
        dir = 1;
        pauseFrames = 60;
      }
      if (pos >= 100) {
        pos = 100;
        dir = -1;
        pauseFrames = 120;
      }
      setDividerPos(pos);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const particles = [
    { top: "15%", left: "8%", size: 4, delay: "0s" },
    { top: "70%", left: "5%", size: 3, delay: "0.8s" },
    { top: "40%", left: "92%", size: 5, delay: "1.4s" },
    { top: "80%", left: "88%", size: 3, delay: "0.3s" },
    { top: "20%", left: "85%", size: 4, delay: "1.1s" },
    { top: "55%", left: "95%", size: 3, delay: "0.6s" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 440, margin: "0 auto" }}>
      <style>{`
        @keyframes wdParticle {
          0%   { transform: translateY(0); opacity: 0; }
          10%  { opacity: 0.5; }
          90%  { opacity: 0.2; }
          100% { transform: translateY(-90px) translateX(10px); opacity: 0; }
        }
        @keyframes wdPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(86,219,132,0.4); }
          50%     { box-shadow: 0 0 0 6px rgba(86,219,132,0); }
        }
        @keyframes wdFloat {
          0%,100% { transform: rotate(-2deg) translateY(0px); }
          50%     { transform: rotate(-2deg) translateY(-6px); }
        }
      `}</style>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "#56db84",
            animation: `wdParticle 3s ease-in-out infinite`,
            animationDelay: p.delay,
            zIndex: 0,
          }}
        />
      ))}

      {/* Browser card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "#111111",
          border: "1px solid rgba(86,219,132,0.2)",
          borderRadius: 20,
          boxShadow: "0 0 40px rgba(86,219,132,0.06), 0 20px 60px rgba(0,0,0,0.6)",
          transform: "rotate(2deg)",
          overflow: "hidden",
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            padding: "12px 14px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* 3 dots */}
          <div style={{ display: "flex", gap: 5 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28ca41", display: "block" }} />
          </div>
          {/* URL bar */}
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 6,
              padding: "4px 10px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {/* Green padlock */}
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <rect x="2" y="5" width="6" height="6" rx="1" fill="#56db84" opacity="0.8" />
              <path d="M3 5V3.5a2 2 0 0 1 4 0V5" stroke="#56db84" strokeWidth="1.2" strokeOpacity="0.8" fill="none" />
            </svg>
            <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
              nescodigital.com/client-site
            </span>
          </div>
        </div>

        {/* Split screen content */}
        <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
          {/* BEFORE side */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#1a0a0a",
              display: "flex",
              flexDirection: "column",
              padding: "14px 16px",
              gap: 8,
            }}
          >
            <div style={{ height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 4, width: "70%" }} />
            <div style={{ height: 6, background: "rgba(255,255,255,0.05)", borderRadius: 4, width: "90%" }} />
            <div style={{ height: 6, background: "rgba(255,255,255,0.05)", borderRadius: 4, width: "60%" }} />
            <div style={{ height: 28, background: "rgba(255,255,255,0.05)", borderRadius: 6, width: "40%", marginTop: 4 }} />
            {/* PageSpeed badge */}
            <div style={{ position: "absolute", bottom: 12, left: 14, display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#ef4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#fff" }}>32</span>
              </div>
              <span style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.3)" }}>6.8s</span>
            </div>
            {/* Before label */}
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 14,
                fontSize: "0.625rem",
                color: "#ef4444",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {l.before}
            </div>
          </div>

          {/* AFTER side */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#050505",
              clipPath: `inset(0 0 0 ${dividerPos}%)`,
              display: "flex",
              flexDirection: "column",
              padding: "14px 16px",
              gap: 8,
            }}
          >
            <div style={{ height: 8, background: "rgba(86,219,132,0.3)", borderRadius: 4, width: "65%" }} />
            <div style={{ height: 6, background: "rgba(255,255,255,0.12)", borderRadius: 4, width: "85%" }} />
            <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 4, width: "55%" }} />
            <div style={{ height: 28, background: "#56db84", borderRadius: 6, width: "38%", marginTop: 4 }} />
            {/* PageSpeed badge */}
            <div style={{ position: "absolute", bottom: 12, left: 14, display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#56db84",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "wdPulse 2s ease-in-out infinite",
                }}
              >
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#000" }}>96</span>
              </div>
              <span style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.5)" }}>1.1s</span>
            </div>
            {/* After label */}
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 14,
                fontSize: "0.625rem",
                color: "#56db84",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {l.after}
            </div>
          </div>

          {/* Divider line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${dividerPos}%`,
              width: 2,
              background: "#56db84",
              boxShadow: "0 0 8px #56db84",
              zIndex: 10,
              transition: "left 0.05s linear",
            }}
          />
        </div>
      </div>

      {/* 3 stat pills */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 20,
          justifyContent: "center",
          flexWrap: "wrap",
          transform: "rotate(2deg)",
        }}
      >
        {l.pills.map((pill, i) => (
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

      {/* Floating second card */}
      <div
        style={{
          position: "absolute",
          bottom: -10,
          right: -20,
          zIndex: 2,
          background: "#0d0d0d",
          border: "1px solid rgba(86,219,132,0.2)",
          borderRadius: 14,
          padding: "12px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
          animation: "wdFloat 4s ease-in-out infinite",
          minWidth: 200,
        }}
      >
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#56db84", marginBottom: 4 }}>{l.card}</div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{l.cardSub}</div>
      </div>
    </div>
  );
}

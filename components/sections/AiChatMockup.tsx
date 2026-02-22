"use client";
import { useState, useEffect } from "react";

interface AiChatMockupProps {
  locale: "ro" | "en" | "de";
}

const CONTENT = {
  ro: {
    userMsg: "Care sunt cele mai bune agentii de marketing digital din Romania?",
    aiIntro: "Bazat pe prezenta online si recenzii verificate, ",
    aiBrand: "Nesco Digital",
    aiPoints: ["Checkmark 15 ani experienta", "Checkmark 36M+ bugete gestionate", "Checkmark Specialist Google, Meta & TikTok"],
    aiSuffix: " se remarca prin:",
    sources: "Surse citate: nescodigital.com · clutch.co · digitalagencynetwork.com",
    chatLabel: "Perplexity AI",
    card2Line1: "ChatGPT Search",
    card2Line2: "Nesco Digital — recomandat",
  },
  en: {
    userMsg: "What are the best digital marketing agencies in Romania?",
    aiIntro: "Based on online presence and verified reviews, ",
    aiBrand: "Nesco Digital",
    aiPoints: ["Checkmark 15 years experience", "Checkmark 36M+ budgets managed", "Checkmark Google, Meta & TikTok Specialist"],
    aiSuffix: " stands out with:",
    sources: "Sources cited: nescodigital.com · clutch.co · digitalagencynetwork.com",
    chatLabel: "Perplexity AI",
    card2Line1: "ChatGPT Search",
    card2Line2: "Nesco Digital — recommended",
  },
  de: {
    userMsg: "Welche sind die besten Digital-Marketing-Agenturen in Rumanien?",
    aiIntro: "Basierend auf Online-Prasenz und verifizierten Bewertungen zeichnet sich ",
    aiBrand: "Nesco Digital",
    aiPoints: ["Checkmark 15 Jahre Erfahrung", "Checkmark 36M+ verwaltete Budgets", "Checkmark Google, Meta & TikTok Spezialist"],
    aiSuffix: " aus:",
    sources: "Zitierte Quellen: nescodigital.com · clutch.co · digitalagencynetwork.com",
    chatLabel: "Perplexity AI",
    card2Line1: "ChatGPT Search",
    card2Line2: "Nesco Digital — empfohlen",
  },
};

export function AiChatMockup({ locale }: AiChatMockupProps) {
  const [cycle, setCycle] = useState(0);
  const c = CONTENT[locale];

  useEffect(() => {
    const t = setInterval(() => setCycle((n) => n + 1), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 460,
        margin: "0 auto",
      }}
    >
      <style>{`
        @keyframes geoParticleFloat {
          0%   { transform: translateY(0px) translateX(0px); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-120px) translateX(20px); opacity: 0; }
        }
        @keyframes geoMsgIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes geoDot1 { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }
        @keyframes geoDot2 { 0%,60%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }
        @keyframes geoDot3 { 0%,60%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes geoSourceIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes geoFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes geoChatPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%     { opacity:0.5; transform:scale(1.15); }
        }
        @keyframes geoCardFloat {
          0%,100% { transform: rotate(-2deg) translateY(0px); }
          50%     { transform: rotate(-2deg) translateY(-6px); }
        }
      `}</style>

      {/* Floating particles */}
      {[
        { left: "10%", top: "60%", color: "#56db84", size: 3, dur: 5, delay: 0 },
        { left: "25%", top: "70%", color: "#3b82f6", size: 2, dur: 7, delay: 1 },
        { left: "70%", top: "75%", color: "#56db84", size: 2, dur: 6, delay: 2 },
        { left: "85%", top: "65%", color: "#3b82f6", size: 3, dur: 8, delay: 0.5 },
        { left: "50%", top: "80%", color: "#56db84", size: 2, dur: 5.5, delay: 1.5 },
        { left: "40%", top: "72%", color: "#3b82f6", size: 2, dur: 7, delay: 3 },
      ].map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            animation: `geoParticleFloat ${p.dur}s ease-in-out ${p.delay}s infinite`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      {/* Main chat card */}
      <div
        key={cycle}
        style={{
          position: "relative",
          zIndex: 1,
          background: "#111111",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 20,
          boxShadow: "0 0 40px rgba(59,130,246,0.08), 0 0 20px rgba(86,219,132,0.05), 0 20px 60px rgba(0,0,0,0.6)",
          transform: "rotate(2deg)",
          overflow: "hidden",
          animation: `geoFadeOut 0.4s ease 7.6s forwards`,
        }}
      >
        {/* Header */}
        <div style={{ padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28ca41", display: "inline-block" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3b82f6", display: "inline-block", animation: "geoChatPulse 2s ease-in-out infinite" }} />
            {c.chatLabel}
          </div>
        </div>

        {/* Messages */}
        <div style={{ padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10, minHeight: 200 }}>

          {/* User message */}
          <div style={{ display: "flex", justifyContent: "flex-end", animation: `geoMsgIn 0.4s ease 0.3s both` }}>
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "14px 14px 2px 14px", padding: "10px 14px", maxWidth: "85%", fontSize: "0.8125rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
              {c.userMsg}
            </div>
          </div>

          {/* AI typing dots visible 0.8s to 2.3s then hidden */}
          <div style={{ display: "flex", gap: 5, padding: "10px 14px", animation: `geoMsgIn 0.3s ease 0.8s both, geoFadeOut 0.2s ease 2.3s forwards` }}>
            {[0, 0.15, 0.3].map((d, i) => (
              <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#3b82f6", display: "inline-block", animation: `${["geoDot1","geoDot2","geoDot3"][i]} 1s ease-in-out ${d}s infinite` }} />
            ))}
          </div>

          {/* AI response */}
          <div style={{ animation: `geoMsgIn 0.4s ease 2.4s both` }}>
            <div style={{ background: "rgba(0,0,0,0.3)", borderLeft: "3px solid #56db84", borderRadius: "2px 14px 14px 14px", padding: "12px 14px", fontSize: "0.8125rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}>
              <span>{c.aiIntro}</span>
              <span style={{ color: "#56db84", fontWeight: 700 }}>{c.aiBrand}</span>
              <span>{c.aiSuffix}</span>
              <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
                {c.aiPoints.map((pt, i) => (
                  <div key={i} style={{ animation: `geoMsgIn 0.3s ease ${2.8 + i * 0.25}s both`, color: "rgba(255,255,255,0.85)" }}>{pt}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Source bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: 4, paddingTop: 10, animation: `geoSourceIn 0.4s ease 4.2s both`, fontSize: "0.6875rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.5 }}>
            {c.sources}
          </div>
        </div>
      </div>

      {/* Floating second card ChatGPT */}
      <div
        style={{
          position: "absolute",
          bottom: -24,
          right: -16,
          zIndex: 2,
          background: "#0d0d0d",
          border: "1px solid rgba(86,219,132,0.25)",
          borderRadius: 14,
          padding: "12px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
          animation: "geoCardFloat 4s ease-in-out infinite",
          minWidth: 200,
        }}
      >
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>{c.card2Line1}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8125rem", color: "#fff", fontWeight: 600 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#56db84", display: "inline-block", animation: "geoChatPulse 2s ease-in-out infinite" }} />
          {c.card2Line2}
        </div>
      </div>
    </div>
  );
}

"use client";

export function GeometricAnimation() {
  return (
    <div
      className="hidden lg:flex items-center justify-center"
      style={{ position: "relative", width: 380, height: 380, flexShrink: 0 }}
    >
      <style>{`
        @keyframes orbMorph {
          0%   { border-radius: 42% 58% 62% 38% / 45% 55% 45% 55%; transform: rotate(0deg) scale(1); }
          25%  { border-radius: 55% 45% 38% 62% / 58% 42% 58% 42%; transform: rotate(90deg) scale(1.04); }
          50%  { border-radius: 38% 62% 55% 45% / 42% 58% 42% 58%; transform: rotate(180deg) scale(0.97); }
          75%  { border-radius: 62% 38% 45% 55% / 55% 45% 55% 45%; transform: rotate(270deg) scale(1.02); }
          100% { border-radius: 42% 58% 62% 38% / 45% 55% 45% 55%; transform: rotate(360deg) scale(1); }
        }
        @keyframes orbGlow {
          0%, 100% { opacity: 0.35; filter: blur(60px); }
          50%      { opacity: 0.55; filter: blur(50px); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-14px); }
        }
        @keyframes orbInnerPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%      { opacity: 0.3;  transform: scale(1.08); }
        }
      `}</style>

      {/* Outer glow */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(86,219,132,0.4) 0%, rgba(86,219,132,0.1) 40%, transparent 70%)",
          animation: "orbGlow 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Float wrapper */}
      <div style={{ animation: "orbFloat 8s ease-in-out infinite" }}>
        {/* Main orb */}
        <div
          style={{
            width: 220,
            height: 220,
            background: "radial-gradient(circle at 35% 35%, rgba(86,219,132,0.25) 0%, rgba(86,219,132,0.08) 50%, rgba(86,219,132,0.02) 80%, transparent 100%)",
            border: "1px solid rgba(86,219,132,0.15)",
            animation: "orbMorph 20s ease-in-out infinite",
            willChange: "border-radius, transform",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Inner highlight */}
          <div
            style={{
              position: "absolute",
              inset: "15%",
              borderRadius: "50%",
              background: "radial-gradient(circle at 40% 30%, rgba(86,219,132,0.2) 0%, transparent 60%)",
              animation: "orbInnerPulse 5s ease-in-out infinite",
            }}
          />

          {/* Subtle glass reflection */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "15%",
              width: "40%",
              height: "25%",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 100%)",
              transform: "rotate(-20deg)",
            }}
          />
        </div>
      </div>

      {/* Orbiting dots */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i * 72) * (Math.PI / 180);
        const radius = 155;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const size = i % 2 === 0 ? 4 : 3;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              background: i % 2 === 0 ? "rgba(86,219,132,0.5)" : "rgba(255,255,255,0.2)",
              left: `calc(50% + ${x}px - ${size / 2}px)`,
              top: `calc(50% + ${y}px - ${size / 2}px)`,
              animation: `orbFloat ${6 + i * 1.5}s ${i * 0.8}s ease-in-out infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

"use client";
import { useRef } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { orgSchema } from "@/lib/seo";
import { CheckCircle, Zap, TrendingUp, Users } from "lucide-react";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { GeometricAnimation } from "@/components/sections/GeometricAnimation";

const stats = [
  { value: "+15 yrs", label: "Experience" },
  { value: "+€36M", label: "Budget managed" },
  { value: "+23,000", label: "Campaigns executed" },
  { value: "+500", label: "Satisfied clients" },
];

const values = [
  { icon: Zap,         title: "Innovation",    desc: "We think differently and propose modern solutions adapted to the digital reality." },
  { icon: TrendingUp,  title: "Performance",   desc: "We focus exclusively on tangible, measurable, real results." },
  { icon: Users,       title: "Collaboration", desc: "We build authentic, long-term partnerships with our clients." },
  { icon: CheckCircle, title: "Transparency",  desc: "We clearly communicate every step, every decision, every result." },
];

const team = [
  {
    photo: "/team/markus.png",
    name: "Markus",
    role: "The Strategist",
    bio: "Takes the objective and turns it into an actionable plan. Sets priorities, distributes tasks and validates every output before delivery. Thinks and controls the direction, does not execute.",
  },
  {
    photo: "/team/sofia.png",
    name: "Sofia",
    role: "The Curator",
    bio: "Monitors trends, filters relevant information and prepares the raw material for communication. Without Sofia, the team would work with incomplete data and missing context.",
  },
  {
    photo: "/team/bogdan.png",
    name: "George",
    role: "The Copywriter",
    bio: "Writes emails, ad copy and posts that convert. Works in a structured way, with clear hooks and tested CTAs, and requests strategic validation when the context calls for it.",
  },
  {
    photo: "/team/paula.png",
    name: "Paula",
    role: "The Prospector",
    bio: "Identifies new opportunities and builds clean, qualified outreach lists. Does not negotiate, does not close. Prepares the ground for conversations with real chances.",
  },
  {
    photo: "/team/diana.png",
    name: "Diana",
    role: "The Ops Manager",
    bio: "Keeps all the threads in hand: monitors progress, flags blockers and makes sure deliverables arrive on time. The nervous system of the team, as we like to say.",
  },
  {
    photo: "/team/alex.png",
    name: "Alex",
    role: "Head of Performance",
    bio: "Tracks ROAS, CPA and LTV with surgical precision. Decides where budgets grow and where they stop, continuously optimizing for real profit, not just traffic.",
  },
];

const steps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We deeply analyze your business, market and competitors to fully understand the context before taking any action.",
  },
  {
    step: "02",
    title: "Build",
    desc: "Detailed, meticulous implementation: strategy, campaigns, assets, tracking, everything set for performance.",
  },
  {
    step: "03",
    title: "Scale",
    desc: "Continuous optimization and sustainable scaling based on real data, not intuition.",
  },
];

const PARTICLES = [
  { left: "8%",  top: "15%", size: 3, duration: 7,  delay: 0,   color: "rgba(86,219,132,0.35)" },
  { left: "18%", top: "60%", size: 2, duration: 9,  delay: 1.2, color: "rgba(86,219,132,0.2)" },
  { left: "32%", top: "30%", size: 4, duration: 11, delay: 0.5, color: "rgba(86,219,132,0.25)" },
  { left: "52%", top: "75%", size: 2, duration: 8,  delay: 2,   color: "rgba(100,180,255,0.2)" },
  { left: "68%", top: "20%", size: 3, duration: 10, delay: 0.8, color: "rgba(86,219,132,0.3)" },
  { left: "78%", top: "55%", size: 2, duration: 12, delay: 1.5, color: "rgba(100,180,255,0.15)" },
  { left: "88%", top: "40%", size: 3, duration: 9,  delay: 0.3, color: "rgba(86,219,132,0.2)" },
  { left: "92%", top: "70%", size: 2, duration: 11, delay: 1.8, color: "rgba(86,219,132,0.15)" },
];

function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-2px)`;
  };
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)";
  };
  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease", ...style }}>
      {children}
    </div>
  );
}

export default function AboutEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0px) scale(1);   opacity: 1; }
          100% { transform: translateY(-80px) scale(0.5); opacity: 0; }
        }
      `}</style>
      <Header locale="en" />
      <main style={{ backgroundColor: "#050505" }}>

        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#050505", paddingTop: "140px", paddingBottom: "100px" }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%", right: "-10%",
              width: 700, height: 700, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #050505, transparent)" }}
          />

          {/* Floating particles */}
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="pointer-events-none"
              style={{
                position: "absolute",
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                background: p.color,
                animation: `floatUp ${p.duration}s ${p.delay}s ease-in infinite`,
              }}
            />
          ))}

          <div className="relative page-container">
            <div className="flex items-start justify-between gap-12">
              {/* Left: existing content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <span className="badge mb-6">About Us</span>
                <h1
                  className="font-black text-white"
                  style={{
                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.03em",
                    fontFeatureSettings: '"kern" 1, "liga" 1',
                    marginTop: "16px",
                    marginBottom: "28px",
                    maxWidth: "800px",
                    paddingBottom: "0.12em",
                    overflow: "visible",
                  }}
                >
                  <span className="block">About</span>
                  <span
                    className="block"
                    style={{
                      background: "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Nesco Digital.
                  </span>
                </h1>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    maxWidth: "560px",
                    letterSpacing: "0.01em",
                  }}
                >
                  We are not just an agency. We are your premium execution partner, from strategy to campaigns that generate real revenue.
                </p>
              </div>

              <GeometricAnimation />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative" style={{ backgroundColor: "#050505", padding: "80px 0" }}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <StatsCounter stats={stats} columns={4} />
          </div>
        </section>

        <ClientLogos label="Trusted by leading brands" />

        {/* Mission */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div style={{ maxWidth: "680px" }}>
              <span className="badge mb-6">Our Mission</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  fontFeatureSettings: '"kern" 1, "liga" 1',
                  marginTop: "20px",
                  marginBottom: "24px",
                }}
              >
                Efficient digital strategies that build an online presence with real results.
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
                At Nesco Digital, we provide customized digital marketing solutions for businesses of all sizes. From startups to established enterprises, we build strategies that generate sustainable growth, combining data, creativity and flawless execution.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="text-center" style={{ marginBottom: "64px" }}>
              <span className="badge mb-6">Our Team</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  fontFeatureSettings: '"kern" 1, "liga" 1',
                  marginTop: "20px",
                }}
              >
                The people behind the results
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {team.map((member) => (
                <TiltCard key={member.name}>
                  <div
                    className="group"
                    style={{
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      height: "100%",
                    }}
                  >
                    {/* Photo */}
                    <div
                      style={{
                        position: "relative",
                        background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(86,219,132,0.07) 0%, transparent 70%)",
                      }}
                    >
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={1024}
                        height={1536}
                        style={{
                          display: "block",
                          width: "75%",
                          height: "auto",
                          margin: "0 auto",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "55%",
                          height: "1px",
                          background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.35), transparent)",
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div style={{ padding: "20px 22px 24px" }}>
                      <h3
                        className="font-black text-white"
                        style={{ fontSize: "1.0625rem", letterSpacing: "-0.015em", marginBottom: "3px" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.6875rem",
                          color: "#56db84",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "12px",
                        }}
                      >
                        {member.role}
                      </p>
                      <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.65 }}>
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="text-center mb-16">
              <span className="badge mb-6">Our Values</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                }}
              >
                Why choose us?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="group card-hover"
                    style={{
                      padding: "32px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        background: "rgba(86,219,132,0.08)",
                        border: "1px solid rgba(86,219,132,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <Icon size={20} style={{ color: "#56db84" }} />
                    </div>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "10px" }}
                    >
                      {v.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
          <div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
          />
          <div className="page-container">
            <div className="text-center mb-16">
              <span className="badge mb-6">Our Process</span>
              <h2
                className="font-black text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginTop: "20px",
                  marginBottom: "12px",
                }}
              >
                Our approach
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}>
                There are no magic solutions, only a well-thought-out process.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="group card-hover"
                  style={{
                    padding: "36px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Step number watermark */}
                  <div
                    className="font-black"
                    style={{
                      fontSize: "5rem",
                      lineHeight: 1,
                      color: "rgba(255,255,255,0.04)",
                      letterSpacing: "-0.04em",
                      marginBottom: "8px",
                      fontFeatureSettings: '"tnum"',
                    }}
                  >
                    {s.step}
                  </div>
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "1.125rem", letterSpacing: "-0.01em", marginBottom: "12px" }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}

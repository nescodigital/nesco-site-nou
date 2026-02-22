import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CalculatorTeaser() {
  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      {/* Green glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(86,219,132,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative page-container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="badge mb-6" style={{ display: "inline-flex" }}>Calculator</span>
          <h2
            className="font-black text-white"
            style={{
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Cât te costă cu adevărat marketingul intern?
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
            Calculează costul real al unui specialist intern față de o agenție cu toate costurile ascunse incluse.
          </p>
        </div>

        {/* Preview cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          style={{ maxWidth: "860px", margin: "0 auto 48px" }}
        >
          {/* Card 1 Intern */}
          <div
            style={{
              padding: "28px 24px",
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Specialist Paid Ads intern
            </div>
            <div
              className="font-black tabular-nums"
              style={{ fontSize: "2rem", color: "#fff", letterSpacing: "-0.02em", marginBottom: "10px" }}
            >
              ~4.800€
            </div>
            <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>
              /lună incluzând brut, echipament, training, birou și risc rotație
            </div>
          </div>

          {/* Card 2 Nesco */}
          <div
            style={{
              padding: "28px 24px",
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Nesco Digital
            </div>
            <div
              className="font-black tabular-nums"
              style={{ fontSize: "2rem", color: "#fff", letterSpacing: "-0.02em", marginBottom: "10px" }}
            >
              de la 1.500€
            </div>
            <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>
              /lună include strategie, execuție și raportare pe toate canalele
            </div>
          </div>

          {/* Card 3 Savings (highlighted) */}
          <div
            style={{
              padding: "28px 24px",
              background: "rgba(86,219,132,0.06)",
              border: "1px solid rgba(86,219,132,0.25)",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#56db84", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Economie potențială
            </div>
            <div
              className="font-black tabular-nums"
              style={{ fontSize: "2rem", color: "#56db84", letterSpacing: "-0.02em", marginBottom: "10px" }}
            >
              ~3.300€
            </div>
            <div style={{ fontSize: "0.8125rem", color: "rgba(86,219,132,0.5)", lineHeight: 1.6 }}>
              /lună fără risc de rotație sau perioadă de onboarding
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/calculator"
            className="group inline-flex items-center gap-3 btn-primary"
            style={{ fontSize: "1rem", padding: "18px 40px" }}
          >
            Calculează costul tău real
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

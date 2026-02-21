import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowGrid404 } from "@/components/ui/ArrowGrid404";

export default function NotFound() {
  return (
    <>
      <Header locale="ro" />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated arrow grid — square cells, Nesco green */}
        <ArrowGrid404 />

        {/* Subtle radial glow over the grid */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(5,5,5,0.55) 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "540px",
          }}
        >
          <span
            className="badge"
            style={{ display: "inline-flex", marginBottom: "24px" }}
          >
            Eroare 404
          </span>

          <h1
            className="font-black text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Pagina nu a fost găsită
          </h1>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
              marginBottom: "48px",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Se pare că pagina pe care o cauți nu există sau a fost mutată.
          </p>

          <Link
            href="/"
            className="group inline-flex items-center gap-3 btn-primary"
            style={{ fontSize: "1rem", padding: "16px 36px" }}
          >
            Înapoi acasă
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </main>
      <Footer locale="ro" />
    </>
  );
}

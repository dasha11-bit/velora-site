export default function Home() {
  return (
    <main
      style={{
        background: "radial-gradient(circle at top, #161616 0%, #050505 70%)",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
            letterSpacing: "3px",
            color: "#b8963f",
            fontWeight: 600,
            textShadow: "0 0 12px rgba(184, 150, 63, 0.18)",
          }}
        >
          VELORA AI
        </h1>

        <p
          style={{
            opacity: 0.82,
            marginBottom: "2.2rem",
            fontSize: "1.05rem",
            letterSpacing: "0.2px",
            color: "#e8e8e8",
          }}
        >
          Luxury automation systems for modern businesses.
        </p>

        <a
          href="https://calendly.com/veloraai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "14px 34px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #b8963f, #d2b56b)",
            color: "#111",
            textDecoration: "none",
            fontWeight: 600,
            letterSpacing: "0.3px",
            boxShadow: "0 8px 24px rgba(184, 150, 63, 0.22)",
          }}
        >
          Get Started →
        </a>
      </div>
    </main>
  );
}
export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#0a0a0a",
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
      <div>
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
            letterSpacing: "2px",
            color: "#d4af37",
            fontWeight: 700,
          }}
        >
          VELORA AI
        </h1>

        <p
          style={{
            opacity: 0.85,
            marginBottom: "2rem",
            fontSize: "1.1rem",
            letterSpacing: "0.3px",
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
            padding: "14px 30px",
            borderRadius: "999px",
            backgroundColor: "#d4af37",
            color: "#000",
            textDecoration: "none",
            fontWeight: 600,
            boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)",
          }}
        >
          Get Started →
        </a>
      </div>
    </main>
  );
}
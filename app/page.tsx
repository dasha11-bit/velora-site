export default function Home() {
  return (
    <main
      style={{
        background: "radial-gradient(circle at center, #111 0%, #000 100%)",
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
            color: "#c6a85a",
            fontWeight: 600,
            textShadow: "0 0 20px rgba(198,168,90,0.25)",
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
            background: "linear-gradient(135deg, #c6a85a, #e6c878)",
            color: "#000",
            textDecoration: "none",
            fontWeight: 600,
            boxShadow: "0 10px 30px rgba(198,168,90,0.25)",
            transition: "0.3s ease",
          }}
        >
          Get Started →
        </a>
      </div>
    </main>
  );
}
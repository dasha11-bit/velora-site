export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "white",
        color: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Helvetica, sans-serif"
      }}
    >
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Velora AI LIVE
        </h1>

        <p style={{ opacity: 0.7, marginBottom: "2rem" }}>
          Luxury automation systems for modern businesses.
        </p>

        <a
          href="/book"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: "999px",
            backgroundColor: "white",
            color: "black",
            textDecoration: "none",
            border: "1px solid black",
            cursor: "pointer"
          }}
        >
          Get Started →
        </a>
      </div>
    </main>
  );
}
export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
        backgroundColor: "#111111",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          marginBottom: "12px",
          fontWeight: "700",
          letterSpacing: "2px",
          color: "white",
        }}
      >
        Velora AI
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#cfcfcf",
          maxWidth: "600px",
          lineHeight: "1.6",
          marginBottom: "30px",
        }}
      >
        Luxury automation for modern business. Build, scale, and operate with
        AI-powered precision.
      </p>

      <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}>
        <button
          style={{
            padding: "14px 28px",
            background: "linear-gradient(to right, #ffffff, #dcdcdc)",
            color: "#111",
            border: "none",
            borderRadius: "999px",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>

        <button
          style={{
            padding: "14px 28px",
            background: "transparent",
            color: "white",
            border: "1px solid #666",
            borderRadius: "999px",
            fontWeight: "600",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Explore
        </button>
      </div>
    </main>
  );
}


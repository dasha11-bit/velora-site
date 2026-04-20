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
        fontFamily: "Helvetica, sans-serif",
      }}
    >
      <div>
<img 
  src="/velora-logo.png" 
  alt="Velora AI Logo" 
  style={{ width: "220px", marginBottom: "20px" }} 
/>

         <p style={{ opacity: 0.7, marginBottom: "2rem" }}>
          Luxury automation systems for modern businesses.
        </p>

        <a
          href="https://calendly.com/veloraai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: "999px",
            backgroundColor: "white",
            color: "black",
            textDecoration: "none",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          Get Started →
        </a>
      </div>
    </main>
  );
}
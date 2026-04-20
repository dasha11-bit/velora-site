export default function Book() {
  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Book a Private Consultation
        </h1>

        <p style={{ opacity: 0.7, marginBottom: "2rem", lineHeight: "1.6" }}>
          Let’s walk through how Velora AI can automate leads, follow-ups,
          and client booking for your business.
        </p>

        <div
          style={{
            borderRadius: "24px",
            padding: "20px",
          }}
        >
          <iframe
            src="https://calendly.com/veloraai" 
            width="100%"
            height="700"
            style={{ border: "none", borderRadius: "16px" }}
          />
        </div>
      </div>
    </main>
  );
}
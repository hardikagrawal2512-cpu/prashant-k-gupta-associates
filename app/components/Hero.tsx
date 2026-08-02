export default function Hero() {
  return (
<section
  id="home"
  style={{
    background:
      "linear-gradient(135deg, #123B73 0%, #0B2C59 100%)",
    color: "white",
    padding: "100px 20px",
  }}
>
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1, minWidth: "320px" }}>
          <p
            style={{
              color: "#FFD700",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            TRUSTED CHARTERED ACCOUNTANTS SINCE 2018
          </p>

          <h1
            style={{
              fontSize: "54px",
              margin: "20px 0",
              lineHeight: "1.2",
            }}
          >
            Prashant K Gupta
            <br />
            & Associates
          </h1>

          <p
            style={{
              fontSize: "22px",
              opacity: 0.9,
              lineHeight: "1.7",
            }}
          >
            Income Tax • GST • Audit • Accounting • Company Registration
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "35px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/919111702111"
              style={{
                background: "#25D366",
                color: "white",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              WhatsApp Now
            </a>

            <a
              href="tel:+919111702111"
              style={{
                background: "white",
                color: "#123B73",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Call Now
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "45px",
              flexWrap: "wrap",
            }}
          >
            <div>⭐ 5.0 Google Rating</div>
            <div>👥 1500+ Happy Clients</div>
            <div>📅 Since 2018</div>
          </div>
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: 1,
            minWidth: "320px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              padding: "70px",
              borderRadius: "20px",
              border: "2px dashed rgba(255,255,255,0.3)",
            }}
          >
            <h2 style={{ fontSize: "36px" }}>Our Core Services</h2>

<div
  style={{
    textAlign: "left",
    marginTop: "25px",
    lineHeight: "2",
    fontSize: "18px",
  }}
>
  <p>✅ Income Tax Return Filing</p>
  <p>✅ GST Registration & Returns</p>
  <p>✅ Accounting & Bookkeeping</p>
  <p>✅ Company Registration</p>
  <p>✅ Audit & Assurance</p>
  <p>✅ Trademark Registration</p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
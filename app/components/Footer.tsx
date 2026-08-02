export default function Footer() {
  return (
    <footer
      style={{
        background: "#0B2C59",
        color: "white",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "30px",
        }}
      >
        <div>
          <h2>Prashant K Gupta & Associates</h2>

          <p style={{ lineHeight: "1.8" }}>
            Chartered Accountants providing Income Tax,
            GST, Accounting, Audit and Business Consultancy
            services since 2018.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <a href="#home" style={{ color: "white", textDecoration: "none", display: "block", marginBottom: "10px" }}>Home</a>

<a href="#about" style={{ color: "white", textDecoration: "none", display: "block", marginBottom: "10px" }}>About</a>

<a href="#services" style={{ color: "white", textDecoration: "none", display: "block", marginBottom: "10px" }}>Services</a>

<a href="#contact" style={{ color: "white", textDecoration: "none", display: "block" }}>Contact</a>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📞 +91 9111702111</p>

          <p>✉️ caprashantgupta18@gmail.com</p>

          <p>Neemuch, Madhya Pradesh</p>
          <a
  href="https://wa.me/919111702111"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginTop: "15px",
    background: "#25D366",
    color: "white",
    padding: "10px 18px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  WhatsApp Us
</a>
        </div>
      </div>

      <hr
        style={{
          margin: "35px 0",
          borderColor: "#355C8C",
        }}
      />

      <p
        style={{
          textAlign: "center",
        }}
      >
        © 2026 Prashant K Gupta & Associates | All Rights Reserved | Designed with ❤️ in India
      </p>
    </footer>
  );
}
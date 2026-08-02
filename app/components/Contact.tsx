export default function Contact() {
  return (
    <section
  id="contact"
  style={{
    padding: "80px 20px",
    background: "#f8f9fc",
  }}
>
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#123B73",
            fontSize: "38px",
            marginBottom: "15px",
          }}
        >
          Contact Us
        </h2>

        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#123B73",
            margin: "0 auto 50px",
            borderRadius: "10px",
          }}
        ></div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          {/* Left Side */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                color: "#123B73",
                marginBottom: "25px",
              }}
            >
              Prashant K Gupta & Associates
            </h3>

            <p><strong>📍 Address</strong><br />
            1st Floor, Above Swarndeep Jewellers,<br />
            Kamal Chowk, Neemuch Chhawni,<br />
            Neemuch, Madhya Pradesh - 458441</p>

            <br />

            <p><strong>📞 Phone</strong><br />
            <a
              href="tel:+919111702111"
              style={{ color: "#123B73", textDecoration: "none" }}
            >
              +91 9111702111
            </a>
            </p>

            <br />

            <p><strong>✉️ Email</strong><br />
            <a
              href="mailto:caprashantgupta18@gmail.com"
              style={{ color: "#123B73", textDecoration: "none" }}
            >
              caprashantgupta18@gmail.com
            </a>
            </p>

            <br />

            <p><strong>🕙 Office Hours</strong><br />
            Monday - Saturday<br />
            10:00 AM - 8:00 PM</p>

            <br />

            <a
              href="https://wa.me/919111702111"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#25D366",
                color: "white",
                padding: "14px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Right Side */}
          <div
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Prashant+K+Gupta+%26+Associates+Neemuch&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
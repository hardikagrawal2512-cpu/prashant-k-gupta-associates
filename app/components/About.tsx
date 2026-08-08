export default function About() {
  return (
    <section
    id="about-us"
    style={{
    padding: "80px 40px",
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
            color: "#123B73",
            fontSize: "38px",
            marginBottom: "20px",
          }}
        >
          About Our Firm
        </h2>
        <div
  style={{
    width: "80px",
    height: "4px",
    background: "#123B73",
    borderRadius: "5px",
    marginBottom: "30px",
  }}
></div>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#555",
            maxWidth: "900px",
            textAlign: "justify",
          }}
        >
          Established in 2018, Prashant K Gupta & Associates is a trusted
          Chartered Accountancy firm in Neemuch providing Income Tax,
          GST, Accounting, Audit, Company Registration and Business
          Consultancy services. Our mission is to provide accurate,
          transparent and timely financial solutions to individuals,
          businesses and startups.
        </p>
      </div>
    </section>
  );
}
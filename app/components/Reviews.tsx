export default function Reviews() {
  return (
    <section
      style={{
        background: "#123B73",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "38px",
          marginBottom: "15px",
        }}
      >
        What Our Clients Say
      </h2>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "40px",
        }}
      >
        ⭐⭐⭐⭐⭐ 5.0 Google Rating (114+ Reviews)
      </p>

      <div
        style={{
          background: "white",
          color: "#333",
          maxWidth: "800px",
          margin: "auto",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
        }}
      >
        <div
  style={{
    fontSize: "50px",
    color: "#D4AF37",
    marginBottom: "15px",
  }}
>
  ❝
</div>

<h3
  style={{
    color: "#123B73",
    marginBottom: "5px",
    fontSize: "28px",
  }}
>
  Mukesh Agrawal
</h3>

<p
  style={{
    color: "#777",
    marginBottom: "20px",
  }}
>
  Verified Google Review
</p>

        <p
          style={{
            lineHeight: "1.8",
          }}
        >
          Excellent professional services. Highly recommended for GST,
          Income Tax, Accounting and Business Consultancy.
          Very supportive team with timely guidance.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#f4b400",
            fontSize: "22px",
          }}
        >
          ⭐⭐⭐⭐⭐
        </p>
      </div>

      <a
  href="https://maps.app.goo.gl/PR2iuctRXEibvQUt6"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginTop: "35px",
    background: "#D4AF37",
    color: "#123B73",
    padding: "15px 35px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
  }}
>
  🗺️ View All Google Reviews
</a>
    </section>
  );
}
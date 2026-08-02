export default function Counter() {
  const stats = [
    {
      number: "1500+",
      title: "Happy Clients",
    },
    {
      number: "5000+",
      title: "ITR Filed",
    },
    {
      number: "3000+",
      title: "GST Returns",
    },
    {
      number: "Since 2018",
      title: "Trusted CA Firm",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              background: "#F8FAFC",
              padding: "35px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                color: "#123B73",
                fontSize: "42px",
                marginBottom: "10px",
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                color: "#666",
                fontSize: "18px",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
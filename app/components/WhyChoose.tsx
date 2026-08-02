export default function WhyChoose() {
  const items = [
  {
    icon: "🏆",
    title: "Trusted Since 2018",
    text: "Serving businesses and individuals with reliable financial solutions.",
  },
  {
    icon: "⚡",
    title: "Fast & Accurate Service",
    text: "Timely GST, Income Tax and Accounting services with complete accuracy.",
  },
  {
    icon: "👨‍💼",
    title: "Experienced Professionals",
    text: "Dedicated experts committed to quality and compliance.",
  },
  {
    icon: "🤝",
    title: "Client First Approach",
    text: "We focus on long-term relationships and practical business advice.",
  },
];

  return (
    <section
      style={{
        padding: "80px 40px",
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#123B73",
            fontSize: "38px",
            marginBottom: "50px",
          }}
        >
          Why Choose Us?
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
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "30px",
                borderRadius: "12px",
                background: "#f8f9fc",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
transition: "0.3s",
cursor: "pointer",
              }}
            >
                <div
  style={{
    fontSize: "42px",
    marginBottom: "15px",
  }}
>
  {item.icon}
</div>
              <h3 style={{ color: "#123B73" }}>{item.title}</h3>

              <p style={{ color: "#666", lineHeight: "1.7" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
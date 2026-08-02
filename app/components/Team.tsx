export default function Team() {
  const team = [
    {
      name: "CA Prashant Kumar Gupta",
      role: "Founder & Owner",
      image: "/prashant.jpg",
    },
    {
      name: "Hardik Agrawal",
      role: "Business Manager ",
      image: "/hardik.jpg",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#f8f9fc",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#123B73",
            fontSize: "38px",
            marginBottom: "50px",
          }}
        >
          Meet Our Team
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "30px",
                width: "320px",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
  src={member.image}
  alt={member.name}
  style={{
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto",
    border: "5px solid #D4AF37",
  }}
/>

              <h3
                style={{
                  marginTop: "20px",
                  color: "#123B73",
                }}
              >
                {member.name}
              </h3>

              <p
                style={{
                  color: "#D4AF37",
                  fontWeight: "bold",
                }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
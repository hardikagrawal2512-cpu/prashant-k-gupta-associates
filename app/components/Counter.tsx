"use client";

import { useState } from "react";

export default function Counter() {
const stats = [
  {
    number: "3000+",
    title: "Happy Clients",
  },
  {
    number: "1500+",
    title: "ITR Filed",
  },
  {
    number: "500+",
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
          <CounterCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

function CounterCard({ item }: any) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textAlign: "center",
        background: hover ? "#123B73" : "#F8FAFC",
        padding: "35px",
        borderRadius: "15px",
        boxShadow: hover
          ? "0 15px 35px rgba(0,0,0,0.25)"
          : "0 5px 15px rgba(0,0,0,0.08)",
        transform: hover ? "translateY(-10px)" : "translateY(0)",
        transition: "all 0.35s ease",
        cursor: "pointer",
      }}
    >
      <h2
        style={{
          color: hover ? "#D4AF37" : "#123B73",
          fontSize: "42px",
          marginBottom: "10px",
          transition: "0.3s",
        }}
      >
        {item.number}
      </h2>

      <p
        style={{
          color: hover ? "white" : "#666",
          fontSize: "18px",
          transition: "0.3s",
        }}
      >
        {item.title}
      </p>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Top Bar */}
      <div
        style={{
          background: "#0B2C59",
          color: "white",
          padding: "10px 40px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          fontSize: "14px",
        }}
      >
        <span>📞 +91 9111702111</span>
        <span>✉ caprashantgupta18@gmail.com</span>
        <span>🕙 Mon - Sat | 10 AM - 8 PM</span>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          background: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div>
          <h2
  style={{
    color: "#123B73",
    margin: 0,
    fontSize: "28px",
  }}
>
            Prashant K Gupta & Associates
          </h2>

          <small style={{ color: "#666" }}>
            Chartered Accountants
          </small>
        </div>

<button
  onClick={() => setMenuOpen(!menuOpen)}
  style={{
    display: "none",
    fontSize: "30px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#123B73",
  }}
>
  ☰
</button>

<div
  style={{
    display: menuOpen ? "flex" : "flex",
    flexDirection: "row",
    gap: "25px",
    alignItems: "center",
  }}
>
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#contact">Contact</a>

          <a
            href="https://wa.me/919111702111"
            target="_blank"
            style={{
              background: "#25D366",
              color: "white",
              padding: "10px 14px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </>
  );
}
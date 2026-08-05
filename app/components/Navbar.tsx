"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
     
    
    <>
    


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
        <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "20px",
  }}
>
  <Image
    src="/images/logo.png"
    alt="Prashant K Gupta & Associates Logo"
    width={100}
    height={100}
  />

  <div>
    <h2
      style={{
        color: "#123B73",
        margin: 0,
        fontSize: "28px",
        lineHeight: "1.2",
      }}
    >
      Prashant K Gupta & Associates
    </h2>

    <small
      style={{
        color: "#666",
        fontSize: "20px",
        fontWeight: "600",
        letterSpacing: "0.5px",
        display: "block",
marginTop: "4px",
      }}
    >
      Chartered Accountants
    </small>
  </div>
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
    display: "flex",
    flexDirection: "row",
    gap: "35px",
    alignItems: "center",
  }}
>
  <a
  href="#home"
  style={{
    textDecoration: "none",
    color: "#123B73",
    fontSize: "19px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    padding: "10px 18px",
    borderRadius: "8px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#123B73";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(18,59,115,0.30)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#123B73";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  Home
</a>

  <a
  href="#about"
  style={{
    textDecoration: "none",
    color: "#123B73",
    fontSize: "19px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    padding: "10px 18px",
    borderRadius: "8px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#123B73";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(18,59,115,0.30)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#123B73";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  About
</a>

  <a
  href="#services"
  style={{
    textDecoration: "none",
    color: "#123B73",
    fontSize: "19px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    padding: "10px 18px",
    borderRadius: "8px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#123B73";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(18,59,115,0.30)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#123B73";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  Services
</a>

  <a
  href="#contact"
  style={{
    textDecoration: "none",
    color: "#123B73",
    fontSize: "19px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    padding: "10px 18px",
    borderRadius: "8px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#123B73";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(18,59,115,0.30)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#123B73";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  Contact
</a>

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
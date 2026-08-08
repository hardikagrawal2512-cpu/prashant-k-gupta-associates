import Image from "next/image";
import {CALogoImage} from '../assets/index'

export default function Navbar() {
  return (
    <header
      style={{
        background: "#ffffff",
        borderRadius: "0 0 18px 18px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          height: "95px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
        }}
      >
                {/* Left Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {/* Logo */}
          <Image
            src="/images/newlogo.png"
            alt="Prashant K Gupta & Associates"
            width={95}
            height={95}
            style={{
              width: "95px",
              height: "auto",
            }}
          />
          {/* <Image
            src={CALogoImage}
            alt="Prashant K Gupta & Associates"
            width={95}
            style={{
              width: "95px",
              height: "auto",
            }}
          /> */}
          {/* Gold Vertical Line */}
          <div
            style={{
              width: "2px",
              height: "60px",
              background: "#C89B2D",
            }}
          />

          {/* Firm Name */}
          <div>
            <h1
              style={{
                margin: 0,
                color: "#0B2C59",
                fontSize: "26px",
                fontWeight: 700,
                lineHeight: "1.1",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontFamily: "Georgia, serif",
              }}
            >
              PRASHANT K GUPTA
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginTop: "2px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  background: "#C89B2D",
                }}
              />

              <span
                style={{
                  color: "#0B2C59",
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "4px",
                  fontFamily: "Georgia, serif",
                }}
              >
                & ASSOCIATES
              </span>

              <div
                style={{
                  width: "50px",
                  height: "2px",
                  background: "#C89B2D",
                }}
              />
            </div>

            <p
              style={{
                margin: "8px 0 0",
                color: "#B8860B",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "5px",
                textTransform: "uppercase",
              }}
            >
              Chartered Accountants
            </p>
          </div>
          </div>

        {/* Right Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <a
            href="#"
            style={{
              color: "#0B2C59",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Home
          </a>

          <a
            href="#about-us"
            style={{
              color: "#0B2C59",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            About Us
          </a>

          <a
            href="#services"
            style={{
              color: "#0B2C59",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Services
          </a>

          <a
            href="#contact"
            style={{
              color: "#0B2C59",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Contact
          </a>

          <a
            href="tel:+919111702111"
            style={{
              background: "rgb(37, 219, 71)",
              color: "#ffffff",
              padding: "12px 22px",
              borderRadius: "30px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            Whatsapp
          </a>
                  </div>
      </div>
    </header>
  );
}
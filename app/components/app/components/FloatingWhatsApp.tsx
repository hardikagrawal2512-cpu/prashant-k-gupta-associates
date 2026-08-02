export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919111702111"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "25px",
        bottom: "25px",
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        fontSize: "34px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        zIndex: 9999,
      }}
    >
      💬
    </a>
  );
}
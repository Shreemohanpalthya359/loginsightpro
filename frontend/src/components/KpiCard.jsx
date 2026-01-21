export default function KpiCard({ title, value }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)",
        border: "2px solid #000000",
        padding: "32px",
        borderRadius: "16px",
        minWidth: "260px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.15)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <p style={{ color: "#4b5563", fontSize: "14px", fontWeight: "900", margin: "0", textTransform: "uppercase", letterSpacing: "0.08em" }}>{title}</p>
      <h2 style={{ fontSize: "42px", marginTop: "16px", marginBottom: "0", color: "#000000", fontWeight: "900", letterSpacing: "-0.02em" }}>{value}</h2>
    </div>
  );
}
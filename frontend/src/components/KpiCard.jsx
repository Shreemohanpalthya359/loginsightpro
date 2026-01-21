export default function KpiCard({ title, value }) {
  return (
    <div
      style={{
        background: "#020617",
        padding: "25px",
        borderRadius: "12px",
        minWidth: "220px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      }}
    >
      <p style={{ color: "#94a3b8", fontSize: "16px" }}>{title}</p>
      <h2 style={{ fontSize: "32px", marginTop: "10px" }}>{value}</h2>
    </div>
  );
}

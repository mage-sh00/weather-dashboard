const Icon = ({ d, size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const icons = {
  search:   "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  chat:     "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  bell:     "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0",
};

export default function TopBar() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "14px 24px",
      background: "white",
      borderBottom: "1px solid #eef0f3",
    }}>

      {/* Avatar + Name */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 160 }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%",
          background: "linear-gradient(135deg,#667eea,#764ba2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontWeight: 800, fontSize: 15, flexShrink: 0,
        }}>
          U
        </div>
        <div>
          <div style={{ fontSize: 11, color: "#aaa", lineHeight: 1 }}>Hello,</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e" }}>Your Name</div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{
        flex: 1,
        display: "flex", alignItems: "center", gap: 8,
        background: "#f7f8fa",
        borderRadius: 24,
        padding: "8px 16px",
        border: "1.5px solid #eef0f3",
      }}>
        <Icon d={icons.search} size={15} color="#aaa" />
        <input
          placeholder="Search Here..."
          style={{
            border: "none", background: "transparent",
            outline: "none", fontSize: 13, color: "#555", width: "100%",
          }}
        />
      </div>

      {/* Action Icons */}
      <div style={{ display: "flex", gap: 8 }}>
        {[icons.calendar, icons.chat, icons.bell].map((d, i) => (
          <div key={i} style={{
            width: 36, height: 36, borderRadius: 10,
            background: "#f7f8fa",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            border: "1.5px solid #eef0f3",
          }}>
            <Icon d={d} size={16} color="#666" />
          </div>
        ))}
      </div>

    </div>
  );
}
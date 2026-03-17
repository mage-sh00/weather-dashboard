export default function Sidebar() {
  return (
    <div style={{
      width: 64,
      background: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      borderRight: "1px solid #eef0f3",
    }}>

      {/* Logo - only this stays */}
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: "linear-gradient(135deg,#ff8c42,#e87722)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 12px rgba(232,119,34,0.35)",
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C8 2 5 5 5 9c0 3 2 6 7 11 5-5 7-8 7-11 0-4-3-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        </svg>
      </div>

    </div>
  );
}
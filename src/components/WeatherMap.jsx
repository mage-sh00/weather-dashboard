// Map card — shows a world map with temperature labels and a location pin

export default function WeatherMap() {
  // 👉 Later: swap this with a real map library like Leaflet or Google Maps
  const tempLabels = [
    { x: "8%",  y: "15%", temp: "22°C" },
    { x: "42%", y: "20%", temp: "21°C" },
    { x: "22%", y: "28%", temp: "25°C" },
    { x: "62%", y: "15%", temp: "23°C" },
    { x: "12%", y: "60%", temp: "27°C" },
    { x: "70%", y: "58%", temp: "23°C" },
  ];

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg,#4ec9c9 0%,#2db3b3 40%,#3bbfbf 70%,#5acece 100%)",
      borderRadius: 16,
      overflow: "hidden",
      minHeight: 200,
    }}>

      {/* SVG Landmass Shapes */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 500 260"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M60 20 Q120 10 180 30 Q200 50 190 80 Q170 100 140 90 Q100 110 80 90 Q50 70 60 20Z"
          fill="#e8d5a3" opacity="0.9"/>
        <path d="M180 15 Q260 5 310 40 Q330 60 320 90 Q290 120 250 110 Q210 100 195 70 Q175 45 180 15Z"
          fill="#dfc890" opacity="0.85"/>
        <path d="M310 25 Q370 10 420 35 Q440 55 430 85 Q400 100 370 90 Q340 80 320 60 Q305 45 310 25Z"
          fill="#e8d5a3" opacity="0.8"/>
        <path d="M200 150 Q280 135 330 165 Q345 190 320 210 Q280 225 240 210 Q205 195 200 165Z"
          fill="#dfc890" opacity="0.75"/>
      </svg>

      {/* Temperature Labels */}
      {tempLabels.map((label, i) => (
        <div key={i} style={{
          position: "absolute", left: label.x, top: label.y,
          fontSize: 11, fontWeight: 600, color: "#1a5f7a",
          background: "rgba(255,255,255,0.5)",
          padding: "1px 5px", borderRadius: 4,
        }}>
          {label.temp}
        </div>
      ))}

      {/* Location Pin */}
      <div style={{ position: "absolute", left: "35%", top: "48%", transform: "translate(-50%,-100%)" }}>
        <div style={{
          width: 14, height: 14,
          background: "#e74c3c",
          borderRadius: "50% 50% 50% 0",
          transform: "rotate(-45deg)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }} />
      </div>

      {/* Info Bubble */}
      <div style={{
        position: "absolute", left: "38%", top: "52%",
        background: "white", borderRadius: 10,
        padding: "6px 12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        minWidth: 130,
      }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#1a1a2e", display: "flex", alignItems: "baseline", gap: 6 }}>
          25°C <span style={{ fontSize: 12, fontWeight: 600, color: "#555" }}>Monday</span>
        </div>
        <div style={{ fontSize: 11, color: "#888", marginTop: 1 }}>Mostly Sunny</div>
      </div>

      {/* Zoom Controls */}
      <div style={{ position: "absolute", right: 12, top: 12, display: "flex", flexDirection: "column", gap: 6 }}>
        {["+", "−"].map((sign, i) => (
          <div key={i} style={{
            width: 28, height: 28,
            background: "#e87722",
            borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            fontSize: 16, fontWeight: 700, color: "white",
            boxShadow: "0 2px 8px rgba(232,119,34,0.4)",
          }}>
            {sign}
          </div>
        ))}
      </div>

    </div>
  );
}

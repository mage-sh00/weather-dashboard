const SunnyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="7" fill="#FFD94A"/>
  </svg>
);

const cities = [
  { name: "New York", condition: "Sunny",  high: "22°C", low: "19°C" },
  { name: "London",   condition: "Bright", high: "24°C", low: "26°C" },
];

export function CityList() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {cities.map((city, i) => (
        <div key={i} style={{
          background: "white", borderRadius: 14, padding: "12px 14px",
          display: "flex", alignItems: "center", gap: 10,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}>
          <SunnyIcon />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{city.name}</div>
            <div style={{ fontSize: 11, color: "#aaa" }}>{city.condition}</div>
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#e87722" }}>
            {city.high} / {city.low}
          </div>
        </div>
      ))}
    </div>
  );
}

export function HumidityCard() {
  return (
    <div style={{
      borderRadius: 14, padding: "14px 16px",
      background: "linear-gradient(135deg,#1a1a2e,#2c3e50)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div>
        <div style={{ fontSize: 15, fontWeight: 800, color: "white", marginBottom: 4 }}>Humidity</div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} />
          <div style={{ fontSize: 11, color: "#8aff8a" }}>Good Air Quality</div>
        </div>
        <div style={{ fontSize: 20, fontWeight: 900, color: "white", marginTop: 4 }}>45%</div>
      </div>
    </div>
  );
}
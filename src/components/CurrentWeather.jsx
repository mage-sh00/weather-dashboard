// The big weather card — shows city, temperature, visibility, humidity

const SunCloudy = () => (
  <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
    <circle cx="70" cy="28" r="22" fill="#FFD94A" opacity="0.9"/>
    <circle cx="70" cy="28" r="16" fill="#FFE566"/>
    <ellipse cx="42" cy="58" rx="22" ry="14" fill="white" opacity="0.95"/>
    <ellipse cx="28" cy="62" rx="16" ry="12" fill="white"/>
    <ellipse cx="58" cy="56" rx="18" ry="13" fill="white" opacity="0.9"/>
    <ellipse cx="72" cy="62" rx="14" ry="11" fill="#e8f4fd"/>
    {[38, 48, 58, 44, 54].map((x, i) => (
      <line key={i}
        x1={x} y1={74 + i % 2 * 4}
        x2={x - 3} y2={82 + i % 2 * 4}
        stroke="#74b3e8" strokeWidth="2" strokeLinecap="round"
      />
    ))}
  </svg>
);

export default function CurrentWeather() {
  // 👉 Later: replace these with real API data
  const weather = {
    city: "Chennai, India",
    condition: "Now",
    temp: "25°C",
    feelsLike: "26°C",
    visibility: "4.3 Km",
    humidity: "87%",
  };

  return (
    <div style={{
      borderRadius: 20,
      padding: 20,
      background: "linear-gradient(135deg,#fff9f0 0%,#fff3e0 50%,#fde8cc 100%)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      position: "relative",
      overflow: "hidden",
      minHeight: 200,
    }}>

      {/* City Name */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#888", fontWeight: 600 }}>
        📍 {weather.city}
      </div>

      {/* Title */}
      <div style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginTop: 2 }}>Weather</div>
      <div style={{ fontSize: 12, color: "#aaa" }}>{weather.condition}</div>

      {/* Illustration */}
      <div style={{ position: "absolute", right: 16, top: 16 }}>
        <SunCloudy />
      </div>

      {/* Temperature */}
      <div style={{ fontSize: 52, fontWeight: 900, color: "#1a1a2e", lineHeight: 1, marginTop: 8 }}>
        {weather.temp}
      </div>
      <div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>
        Feels like {weather.feelsLike}
      </div>

      {/* Stats Row */}
      <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
        <div style={{
          background: "#b8e994", borderRadius: 10, padding: "6px 12px",
          fontSize: 11, fontWeight: 700, color: "#3a7a1a",
        }}>
          <div style={{ fontSize: 10, fontWeight: 500, color: "#5a9a3a", marginBottom: 1 }}>Visibility</div>
          {weather.visibility}
        </div>
        <div style={{
          background: "#f0f0f0", borderRadius: 10, padding: "6px 12px",
          fontSize: 11, fontWeight: 700, color: "#444",
        }}>
          <div style={{ fontSize: 10, fontWeight: 500, color: "#888", marginBottom: 1 }}>Humidity</div>
          {weather.humidity}
        </div>
      </div>

    </div>
  );
}

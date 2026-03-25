// The big weather card — shows city, temperature, visibility, humidity
export default function CurrentWeather({ weather }) {
const iconCode = weather?.weather?.[0]?.icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
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
        📍 {weather?.name}
      </div>

      {/* Title */}
      <div style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginTop: 2 }}>Weather</div>
      <div style={{ fontSize: 12, color: "#aaa" }}>{weather?.weather?.[0]?.main}</div>

      {/* Illustration */}
      <div style={{ position: "absolute", right: 16, top: 16 }}>
{iconUrl && (
  <img
    src={iconUrl}
    alt="weather icon"
    style={{ width: 80, filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.2))" }}
  />
)}
      </div>

     {/* Temperature */}
<div style={{ fontSize: 52, fontWeight: 900, color: "#1a1a2e", lineHeight: 1, marginTop: 8 }}>
  {Math.round(weather?.main?.temp)}°C
</div>

<div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>
  Feels like {Math.round(weather?.main?.feels_like)}°C
</div>
      {/* Stats Row */}
      <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
        <div style={{
          background: "#b8e994", borderRadius: 10, padding: "6px 12px",
          fontSize: 11, fontWeight: 700, color: "#3a7a1a",
        }}>
          <div style={{ fontSize: 10, fontWeight: 500, color: "#5a9a3a", marginBottom: 1 }}>Visibility</div>
         {weather?.visibility ? weather.visibility / 1000 : 0} Km
        </div>
        <div style={{
          background: "#f0f0f0", borderRadius: 10, padding: "6px 12px",
          fontSize: 11, fontWeight: 700, color: "#444",
        }}>
          <div style={{ fontSize: 10, fontWeight: 500, color: "#888", marginBottom: 1 }}>Humidity</div>
        {weather?.main?.humidity}%
        </div>
      </div>

    </div>
  );
}

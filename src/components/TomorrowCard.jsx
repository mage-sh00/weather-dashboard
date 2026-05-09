const RainyPersonIllustration = () => (
  <svg width="90" height="110" viewBox="0 0 90 110" fill="none">
    {[10,20,30,40,50,60,70,80].map((x, i) => (
      <line key={i} x1={x} y1={10 + i * 5} x2={x - 8} y2={40 + i * 5}
        stroke="#a8d4a8" strokeWidth="1.5" opacity="0.6"/>
    ))}
    <circle cx="52" cy="40" r="8" fill="#2d2d2d"/>
    <rect x="38" y="50" width="28" height="22" rx="4" fill="#e87722"/>
    <rect x="30" y="72" width="12" height="18" rx="3" fill="#333"/>
    <rect x="48" y="72" width="12" height="18" rx="3" fill="#333"/>
    <path d="M30 38 Q52 15 74 38" fill="#7b4f2e" stroke="#5a3a20" strokeWidth="2"/>
    <line x1="52" y1="38" x2="52" y2="60" stroke="#5a3a20" strokeWidth="2.5"/>
    <rect x="62" y="70" width="18" height="22" rx="3" fill="#666"/>
    <rect x="66" y="67" width="10" height="5" rx="2" fill="#888"/>
    <line x1="62" y1="82" x2="80" y2="82" stroke="#555" strokeWidth="1.5"/>
    <line x1="20" y1="92" x2="80" y2="92" stroke="#5a8a5a" strokeWidth="2" opacity="0.5"/>
  </svg>
);

export default function TomorrowCard({ forecast, city }) {
  const tomorrow = (() => {
    if (!forecast?.list) return null;
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowStr = tomorrowDate.toISOString().split("T")[0];
    const items = forecast.list.filter(item =>
      item.dt_txt.startsWith(tomorrowStr)
    );
    if (items.length === 0) return null;
    const temps = items.map(i => i.main.temp);
    const avgTemp = Math.round(temps.reduce((a, b) => a + b, 0) / temps.length);
    const condition = items[0].weather[0].main;
    return { temp: `${avgTemp}°C`, condition, city: city || "Your City" };
  })();

  const display = tomorrow || {
    temp: "--°C",
    condition: "Loading...",
    city: city || "Your City",
  };

  return (
    <div style={{
      borderRadius: 18, padding: 16, overflow: "hidden",
      background: "linear-gradient(160deg,#c8e86a 0%,#a8d840 60%,#90c030 100%)",
      boxShadow: "0 4px 16px rgba(144,192,48,0.25)",
      display: "flex", flexDirection: "column",
      position: "relative", minHeight: 200,
    }}>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: 4 }}>
        Tomorrow
      </div>
      <div style={{ fontSize: 18, fontWeight: 900, color: "#1a3a00", lineHeight: 1.2 }}>
        {display.city}, India
      </div>
      <div style={{ position: "absolute", right: 0, bottom: 40, opacity: 0.9 }}>
        <RainyPersonIllustration />
      </div>
      <div style={{ marginTop: "auto", zIndex: 1, paddingTop: 60 }}>
        <div style={{ fontSize: 26, fontWeight: 900, color: "#1a3a00" }}>
          {display.temp}
        </div>
        <div style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.35)",
          borderRadius: 20, padding: "2px 10px",
          fontSize: 11, fontWeight: 700, color: "#1a3a00", marginTop: 4,
        }}>
          {display.condition}
        </div>
      </div>
    </div>
  );
}
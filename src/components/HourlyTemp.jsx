// HourlyTemp — shows Morning / Afternoon / Evening / Night temperatures
import { useState } from "react";

const SunnyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="7" fill="#FFD94A"/>
    {[0,45,90,135,180,225,270,315].map((deg,i) => (
      <line key={i}
        x1={16 + 10 * Math.cos(deg * Math.PI / 180)}
        y1={16 + 10 * Math.sin(deg * Math.PI / 180)}
        x2={16 + 13 * Math.cos(deg * Math.PI / 180)}
        y2={16 + 13 * Math.sin(deg * Math.PI / 180)}
        stroke="#FFD94A" strokeWidth="2" strokeLinecap="round"
      />
    ))}
  </svg>
);

const CloudyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <circle cx="12" cy="14" r="5" fill="#cce4f4"/>
    <circle cx="18" cy="12" r="6" fill="#b8d9f0"/>
    <ellipse cx="15" cy="18" rx="9" ry="6" fill="#d0e8f8"/>
  </svg>
);

// 👉 Later: replace with real hourly forecast from API
const hourlyData = [
  { label: "Morning",   temp: "20°", icon: "cloudy" },
  { label: "Afternoon", temp: "24°", icon: "sunny"  },
  { label: "Evening",   temp: "28°", icon: "sunny"  },
  { label: "Night",     temp: "22°", icon: "cloudy" },
];

export default function HourlyTemp() {
  const [activeSlot, setActiveSlot] = useState(1); // Afternoon is default

  return (
    <div style={{
      background: "white",
      borderRadius: 18,
      padding: "16px 18px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
    }}>

      {/* Header */}
      <div style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e" }}>
        How is the<br />temperature today?
      </div>

      {/* Time Slots */}
      <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
        {hourlyData.map((slot, i) => (
          <div
            key={i}
            onClick={() => setActiveSlot(i)}
            style={{
              flex: 1,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              padding: "10px 6px",
              borderRadius: 14,
              background: activeSlot === i
                ? "linear-gradient(135deg,#1a1a2e,#2c3e50)"
                : "#f8f9fb",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {slot.icon === "sunny" ? <SunnyIcon /> : <CloudyIcon />}
            <div style={{ fontSize: 16, fontWeight: 800, color: activeSlot === i ? "white" : "#1a1a2e" }}>
              {slot.temp}
            </div>
            <div style={{ fontSize: 10, color: activeSlot === i ? "#aaa" : "#bbb" }}>
              {slot.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

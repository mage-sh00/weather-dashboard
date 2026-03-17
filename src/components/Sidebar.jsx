import { useState } from "react";

const Icon = ({ d, size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const icons = {
  home:     "M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z",
  map:      "M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z",
  chat:     "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  pin:      "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  layers:   "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  settings: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  logout:   "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
};

const navItems = [
  { icon: "home",     id: 0 },
  { icon: "map",      id: 1 },
  { icon: "chat",     id: 2 },
  { icon: "pin",      id: 3 },
  { icon: "calendar", id: 4 },
  { icon: "layers",   id: 5 },
  { icon: "settings", id: 6 },
];

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <div style={{
      width: 64,
      background: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      gap: 8,
      borderRight: "1px solid #eef0f3",
    }}>
      {/* Logo */}
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: "linear-gradient(135deg,#ff8c42,#e87722)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 12,
        boxShadow: "0 4px 12px rgba(232,119,34,0.35)",
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C8 2 5 5 5 9c0 3 2 6 7 11 5-5 7-8 7-11 0-4-3-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        </svg>
      </div>

      {/* Nav Items */}
      {navItems.map(({ icon, id }) => (
        <div
          key={id}
          onClick={() => setActiveNav(id)}
          style={{
            width: 40, height: 40, borderRadius: 12, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: activeNav === id
              ? "linear-gradient(135deg,#ff8c42,#e87722)"
              : "transparent",
            boxShadow: activeNav === id
              ? "0 4px 12px rgba(232,119,34,0.3)"
              : "none",
            transition: "all 0.2s",
          }}
        >
          <Icon d={icons[icon]} size={16} color={activeNav === id ? "white" : "#aab"} />
        </div>
      ))}

      {/* Spacer pushes logout to bottom */}
      <div style={{ flex: 1 }} />

      {/* Logout */}
      <div style={{
        width: 40, height: 40, borderRadius: 12, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon d={icons.logout} size={16} color="#ddd" />
      </div>
    </div>
  );
}
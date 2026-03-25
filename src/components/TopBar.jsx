import { useState, useEffect } from "react";

const Icon = ({ d, size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

const icons = {
  search:   "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  chat:     "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  bell:     "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0",
};

export default function TopBar({ onSearch, darkMode, setDarkMode }) {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        gap: 16,
        padding: isMobile ? "12px 16px" : "14px 24px",
        background: darkMode ? "#1e293b" : "white",
        borderBottom: "1px solid #eef0f3",
      }}
    >

      {/* TOP ROW */}
      <div style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}>

        {/* Avatar + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

          <div style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #f093fb, #f5576c)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 800,
            fontSize: 14,
          }}>
            MB
          </div>

          <div>
            <div style={{ fontSize: 11, color: darkMode ? "#ccc" : "#aaa" }}>Hello,</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: darkMode ? "white" : "#1a1a2e" }}>
              Mageshwari
            </div>
          </div>
        </div>

        {/* Right Section */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>

            {/* Dark Mode Toggle */}
            <div
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: "6px 12px",
                borderRadius: 20,
                background: darkMode ? "#334155" : "#e5e7eb",
                color: darkMode ? "white" : "#333",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {darkMode ? "Light" : "Dark"}
            </div>

            <div style={iconBox}>
              <Icon d={icons.calendar} size={16} color="#666" />
            </div>

            <div style={iconBox}>
              <Icon d={icons.chat} size={16} color="#666" />
            </div>

            <div style={{ ...iconBox, position: "relative" }}>
              <Icon d={icons.bell} size={16} color="#666" />
              <div style={badge}>3</div>
            </div>

          </div>
        )}
      </div>

      {/* SEARCH BAR */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: darkMode ? "#334155" : "#f7f8fa",
          borderRadius: 24,
          padding: "8px 16px",
          border: "1.5px solid #eef0f3",
        }}
      >
        <Icon d={icons.search} size={15} color="#aaa" />

        <input
          placeholder="Search Here..."
          style={{
            border: "none",
            background: "transparent",
            outline: "none",
            fontSize: 13,
            color: darkMode ? "#eee" : "#555",
            width: "100%",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              onSearch(e.target.value);
            }
          }}
        />
      </div>
    </div>
  );
}

/* reusable styles */
const iconBox = {
  width: 36,
  height: 36,
  borderRadius: 10,
  background: "#f7f8fa",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "1.5px solid #eef0f3",
};

const badge = {
  position: "absolute",
  top: -4,
  right: -4,
  width: 16,
  height: 16,
  background: "#e74c3c",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 9,
  fontWeight: 800,
  color: "white",
  border: "2px solid white",
};
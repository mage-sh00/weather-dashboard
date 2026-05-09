import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherMap from "./components/WeatherMap";
import { CityList } from "./components/CityList";
import HourlyTemp from "./components/HourlyTemp";
import TomorrowCard from "./components/TomorrowCard";
import SkeletonLoader from "./components/SkeletonLoader";
import { useWeather } from "./hooks/useWeather";
import { useIsMobile } from "./hooks/useIsMobile";

export default function WeatherDashboard() {
  const savedCity = localStorage.getItem("lastCity") || "Chennai";
  const [city, setCity] = useState(savedCity);
  const [darkMode, setDarkMode] = useState(false);
  const isMobile = useIsMobile();

  const { weather, forecast, loading, error } = useWeather(city);

  const getStyles = () => ({
    app: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      background: darkMode
        ? "linear-gradient(135deg, #0f172a, #1e293b)"
        : "linear-gradient(135deg, #b2dde0, #c8dfc0, #d4c8b8)",
      transition: "0.3s ease",
    },
    container: {
      width: "100%",
      maxWidth: isMobile ? "100%" : 960,
      padding: isMobile ? 10 : 20,
    },
    card: {
      width: "100%",
      borderRadius: isMobile ? 16 : 28,
      padding: 10,
      background: darkMode ? "rgba(30, 41, 59, 0.7)" : "#f4f6f8",
      backdropFilter: darkMode ? "blur(12px)" : "none",
      boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.1)"
        : "3px solid #2c3e50",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    row: {
      display: "flex",
      flex: 1,
      flexDirection: isMobile ? "column" : "row",
    },
    main: {
      flex: 1,
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 14,
    },
    grid1: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "2fr 3fr",
      gap: 14,
    },
    grid2: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "2fr 3fr 2fr",
      gap: 14,
    },
  });

  const styles = getStyles();

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <div style={styles.card}>
          <TopBar
            onSearch={(val) => setCity(val)}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <div style={styles.row}>
            {!isMobile && <Sidebar />}
            <div style={styles.main}>

              {/* ERROR */}
              {error && (
                <div style={{
                  background: "#fff0f0",
                  border: "1px solid #ffcccc",
                  borderRadius: 12,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}>
                  <span style={{ fontSize: 20 }}>⚠️</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#cc0000" }}>
                      {error}
                    </div>
                    <div style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>
                      Try searching for another city
                    </div>
                  </div>
                </div>
              )}

              {/* LOADING */}
              {loading ? (
                <SkeletonLoader />
              ) : (
                <>
                  <div style={styles.grid1}>
                    <CurrentWeather weather={weather} />
                    <WeatherMap weather={weather} />
                  </div>
                  <div style={styles.grid2}>
                    <CityList />
                    <HourlyTemp forecast={forecast} />
                    <TomorrowCard forecast={forecast} city={weather?.name} />
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
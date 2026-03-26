import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherMap from "./components/WeatherMap";
import { CityList } from "./components/CityList";
import HourlyTemp from "./components/HourlyTemp";
import TomorrowCard from "./components/TomorrowCard";

export default function WeatherDashboard() {
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getStyles = (darkMode, isMobile) => ({
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
      background: darkMode
        ? "rgba(30, 41, 59, 0.7)"
        : "#f4f6f8",
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

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
console.log("API KEY FROM ENV:", apiKey);
        const formattedCity =
          city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

        const res = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=${apiKey}&units=metric`
);
        const data = await res.json();

        if (data.cod !== 200) {
          setError("City not found");
          setWeather(null); // ✅ important fix
          return;
        }

        setWeather(data);
      } catch (err) {
        setError("Something went wrong");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const styles = getStyles(darkMode, isMobile);

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <div style={styles.card}>

          <TopBar
            onSearch={(city) => setCity(city)}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <div style={styles.row}>
            {!isMobile && <Sidebar />}

            <div style={styles.main}>

              {/* ERROR */}
              {error && (
                <div style={{ textAlign: "center", color: "red" }}>
                  <p>{error}</p>
                </div>
              )}

              {/* LOADING */}
              {loading ? (
                <div style={{ textAlign: "center", padding: 20 }}>
                  <p>Loading weather data...</p>
                </div>
              ) : (
                <>
                  <div style={styles.grid1}>
                    <CurrentWeather weather={weather} />
                    <WeatherMap />
                  </div>

                  <div style={styles.grid2}>
                    <CityList />
                    <HourlyTemp />
                    <TomorrowCard />
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
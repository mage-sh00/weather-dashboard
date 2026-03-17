import Sidebar          from "./components/Sidebar";
import TopBar           from "./components/TopBar";
import CurrentWeather   from "./components/CurrentWeather";
import WeatherMap       from "./components/WeatherMap";
import { CityList, HumidityCard } from "./components/CityList";
import HourlyTemp       from "./components/HourlyTemp";
import TomorrowCard     from "./components/TomorrowCard";

export default function WeatherDashboard() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg, #b2dde0 0%, #c8dfc0 50%, #d4c8b8 100%)",
      fontFamily: "'Nunito', 'Segoe UI', sans-serif",
      padding: 24,
    }}>
      <div style={{
        width: "100%", maxWidth: 960,
        background: "#f4f6f8",
        borderRadius: 28,
        boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
        overflow: "hidden",
        border: "3px solid #2c3e50",
        display: "flex", flexDirection: "column",
      }}>

        <TopBar />

        <div style={{ display: "flex", flex: 1 }}>
          <Sidebar />

          <div style={{ flex: 1, padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>

            {/* ROW 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <CurrentWeather />
              <WeatherMap />
            </div>

            {/* ROW 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.3fr 1fr", gap: 14 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <CityList />
                <HumidityCard />
              </div>
              <HourlyTemp />
              <TomorrowCard />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
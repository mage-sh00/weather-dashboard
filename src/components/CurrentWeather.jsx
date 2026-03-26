import "../styles/currentWeather.css";

export default function CurrentWeather({ weather }) {
  const iconCode = weather?.weather?.[0]?.icon;

  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : null;

  // safe values
  const temp = weather?.main?.temp;
  const feelsLike = weather?.main?.feels_like;
  const humidity = weather?.main?.humidity;
  const visibility = weather?.visibility;

  return (
    <div className="weather-card">

      {/* City */}
      <div className="weather-city">
        📍 {weather?.name || "--"}
      </div>

      {/* Title */}
      <div className="weather-title">Weather</div>

      {/* Description */}
      <div className="weather-desc">
        {weather?.weather?.[0]?.main || "--"}
      </div>

      {/* Icon */}
      <div className="weather-icon">
        {iconUrl && <img src={iconUrl} alt="weather icon" />}
      </div>

      {/* Temperature */}
      <div className="weather-temp">
        {temp !== undefined ? `${Math.round(temp)}°C` : "--"}
      </div>

      {/* Feels like */}
      <div className="weather-feels">
        Feels like{" "}
        {feelsLike !== undefined ? `${Math.round(feelsLike)}°C` : "--"}
      </div>

      {/* Stats */}
      <div className="weather-stats">

        <div className="weather-box green">
          <span>Visibility</span>
          {visibility ? `${visibility / 1000} Km` : "--"}
        </div>

        <div className="weather-box gray">
          <span>Humidity</span>
          {humidity !== undefined ? `${humidity}%` : "--"}
        </div>

      </div>

    </div>
  );
}
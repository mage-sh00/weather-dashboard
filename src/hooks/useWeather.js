import { useState, useEffect } from "react";

export function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const formatted =
          city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

        const [weatherRes, forecastRes] = await Promise.all([
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formatted}&appid=${apiKey}&units=metric`),
          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${formatted}&appid=${apiKey}&units=metric`)
        ]);

        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();

        if (weatherData.cod !== 200) {
          setError("City not found. Please try again.");
          setWeather(null);
          setForecast(null);
          return;
        }

        setWeather(weatherData);
        setForecast(forecastData);
        localStorage.setItem("lastCity", city);

      } catch (err) {
        setError("Something went wrong. Check your connection.");
        setWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, forecast, loading, error };
}
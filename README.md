# Weather Dashboard

A responsive weather dashboard built with React, 
fetching real-time data from the OpenWeatherMap API.

## Live Demo
https://weather-dashboard-omega-ecru.vercel.app

## Features
- Real-time weather via OpenWeatherMap REST API
- Custom useWeather hook for async data fetching
- Custom useIsMobile hook for responsive layout
- Hourly forecast from /forecast endpoint
- Tomorrow's forecast with real API data
- localStorage persists last searched city
- Animated skeleton loader for loading state
- Styled error handling for invalid cities
- Dark mode toggle
- Deployed on Vercel with CI/CD

## Tech Stack
- React.js
- OpenWeatherMap API
- Custom Hooks
- CSS
- Vercel

## Getting Started
git clone https://github.com/mage-sh00/weather-dashboard.git
cd weather-dashboard
npm install
npm start

## Environment Variables
Create a .env file and add:
REACT_APP_WEATHER_API_KEY=your_api_key_here

## Author
Mageshwari

import React, { useEffect, useState } from 'react'
import { Search } from '../components/Search'
import PostService from '../api/PostService';
import { ICity, ICoord } from '../types/city';
import { WeatherCard } from '../components/WeatherCard';
import { IDaily } from '../types/forecast';
import { DaysList } from '../components/DaysList';


export const MainPage: React.FC = () => {
  // название города
  const [city, setCity] = useState<string>('');
  // погода на текущий момент
  const [weatherNow, setWeatherNow] = useState<ICity | null>(null);
  // координаты города
  const [coords, setCoords] = useState<ICoord | null>(null);
  // прогноз на неделю
  const [forecast, setForecast] = useState<IDaily[] | null>(null);

  // получение данных о погоде на текущий момент
  async function getCity(location: string) {
    try {
      const response = await PostService.getCityData(location);
      setWeatherNow(response.data);
      setCoords(response.data.coord);
    } catch (error) {
      console.log(error);
    }
  }

  // получение прогноза погоды на неделю
  async function getForecast(lat: number, lon: number) {
    try {
      const response = await PostService.getWeatherByDays(lat, lon);
      setForecast(response.data.daily.slice(1, 8));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (coords) {
      getForecast(+coords.lat.toFixed(0), +coords.lon.toFixed(0));
    }
  }, [coords]);

  return (
    <div>
      <h1>Weather App</h1>
      <Search location={city} setLocation={setCity} getLocation={getCity}/>
      {weatherNow?.name && <WeatherCard weather={weatherNow}/>}
      {forecast?.length && <DaysList days={forecast}/>}
    </div>
  )
}

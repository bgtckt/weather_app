import React from 'react'
import { ICity } from '../types/city'
import { getWindDirection } from '../utils'

// типы данных пропсов компонента
interface WeatherCardProps {
  weather: ICity;
}

// карточка с информацией о погоде на текущий момент
export const WeatherCard: React.FC<WeatherCardProps> = ({weather}) => {
  return (
    <div>
      <h2>Прогноз на сегодня</h2>
      <div style={{border: '2px solid tomato'}}>
        <p>{new Date(Date.now()).toLocaleString()}</p>
        <h3>{weather.name}, {weather.sys.country}</h3>
        <div>
          <img src='' alt='Погода'/>
          <h4>{Math.round(weather.main.temp)}°C</h4>
        </div>
        <p>Ощущается как: {Math.round(weather.main.feels_like)}°C</p>
        <p>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</p>
        {weather.wind.speed && 
          <span>Ветер: {weather.wind.speed} м/с {getWindDirection(weather?.wind.deg)}</span>
        }
        <p>Влажность: {weather.main.humidity}%</p>
        <p>Давление: {(weather.main.pressure / 1.33).toFixed(1)} мм рт. ст.</p>
      </div>
    </div>
  )
}

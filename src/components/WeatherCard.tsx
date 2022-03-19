import React from 'react'
import { ICity } from '../types/city'
import { getWindDirection, getIconName } from '../utils'

// типы данных пропсов компонента
interface WeatherCardProps {
  weather: ICity;
}

// карточка с информацией о погоде на текущий момент
export const WeatherCard: React.FC<WeatherCardProps> = ({weather}) => {
  return (
    <div className='weather_card'>
      <h3 className='weather_card__title'>Погода сейчас</h3>
      <div className='weather_card__content'>
        <p className='weather_card__date'>{new Date(Date.now()).toLocaleString()}</p>
        <h3 className='weather_card__name'>{weather.name}, {weather.sys.country}</h3>
        <div className='weather_card__block'>
          <i className={`icon-${getIconName(weather.weather[0].description)}`}/>
          <p className='weather_card__temp'>{Math.round(weather.main.temp)}°C</p>
        </div>
        <div className='weather_card__block'>
          <p className='weather_card__description'>
            {weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}.
          </p>
          <p className='weather_card__feels'>Ощущается как: <span>{Math.round(weather.main.feels_like)}°C</span></p>
        </div>
        {weather.wind.speed && 
          <div className='weather_card__wind'>Ветер: <span>{weather.wind.speed} м/с, {getWindDirection(weather?.wind.deg)}</span></div>
        }
        <p className='weather_card__humidity'>Влажность: <span>{weather.main.humidity}%</span></p>
        <p className='weather_card__pressure'>
          Давление: <span>{(weather.main.pressure / 1.33).toFixed(1)} мм рт. ст.</span>
        </p>
      </div>
    </div>
  )
}

import React from 'react'
import { IDaily } from '../types/forecast';
import { getIconName } from '../utils'

// типы данных пропсов компонента
interface DayItemProps {
  day: IDaily;
}

// карточка с данными о погоде на конкретный день для недельного прогноза 
export const DayItem: React.FC<DayItemProps> = ({day}) => {
  return (
    <div className='day_item'>
      <p className='day_item__date'>{new Date(day.dt * 1000).toLocaleDateString().slice(0, 6)}</p>
      <div className='day_item__block'>
        <i className={`icon-${getIconName(day.weather[0].description)}`}/>
        <span className='day_item__temp'>{Math.round(day.temp.day)}/{Math.round(day.temp.night)}°C</span>
      </div>
      <p className='day_item__description'>
        {day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1)}
      </p>
    </div>
  )
}

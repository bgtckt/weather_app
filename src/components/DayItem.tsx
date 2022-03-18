import React from 'react'
import { IDaily } from '../types/forecast';

// типы данных пропсов компонента
interface DayItemProps {
  day: IDaily;
}

// карточка с данными о погоде на конкретный день для недельного прогноза 
export const DayItem: React.FC<DayItemProps> = ({day}) => {
  return (
    <div style={{border: '2px solid blue'}}>
      <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
      <div>
        <img src='' alt='Погода'/>
        <p>{Math.round(day.temp.day)} / {Math.round(day.temp.night)}°C</p>
      </div>
      <p>{day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1)}</p>
    </div>
  )
}

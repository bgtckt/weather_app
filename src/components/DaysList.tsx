import React from 'react'
import { IDaily } from '../types/forecast'
import { DayItem } from './DayItem';

// типы данных пропсов компонента
interface DaysListProps {
  days: IDaily[];
}

// список карточек с прогнозом по дням недели
export const DaysList: React.FC<DaysListProps> = ({days}) => {
  return (
    <div>
      <h2>Прогноз на неделю</h2>
      <div style={{display: 'flex'}}>
        {days.map(day =>
          <DayItem day={day} key={day.dt}/>
        )}
      </div>
    </div>
  )
}

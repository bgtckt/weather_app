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
    <div className='days_list'>
      <h3 className='days_list__title'>Прогноз на неделю</h3>
      <div className='days_list__content'>
        {days.map(day =>
          <DayItem day={day} key={day.dt}/>
        )}
      </div>
    </div>
  )
}

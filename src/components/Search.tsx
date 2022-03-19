import React from 'react'

// типы данных пропсов компонента
interface searchProps {
  location: string;
  setLocation: (loc: string) => void;
  getLocation: (loc: string) => void;
}

// поиск данных о погоде по названию города
export const Search: React.FC<searchProps> = ({location, setLocation, getLocation}) => {
  return (
    <div className='search'>
      <label className='search__label'>Узнать погоду</label>
      <input 
        className='search__input'
        type='text' 
        placeholder='Введите название города' 
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setLocation(evt.target.value)}
      />
      <button className='search__button' onClick={() => getLocation(location)}>Найти</button>
    </div>
  )
}

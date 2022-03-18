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
    <div>
      <label style={{display: 'block'}}>Поиск города</label>
      <input 
        type='text' 
        placeholder='Введите название города' 
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setLocation(evt.target.value)}
      />
      <button onClick={() => getLocation(location)}>Найти</button>
    </div>
  )
}

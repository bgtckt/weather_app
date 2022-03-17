import React, { useState } from 'react'
import '../styles/main.scss'

export default function App() {
  const [city, setCity] = useState('');

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <label style={{display: 'block'}}>Поиск города</label>
        <input type='text' placeholder='Введите название города' onChange={(evt) => setCity(evt.target.value)}/>
        <button>Найти</button>
      </div>
    </div>
  )
}

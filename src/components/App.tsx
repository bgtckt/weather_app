import React from 'react'
import '../styles/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

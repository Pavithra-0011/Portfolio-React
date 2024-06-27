import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Contact from './Pages/Contact'
import HomePage from './Pages/Home'
import About from './Pages/About'
import './App.css'

function App() {

  return (
    <>
       <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
       </Routes>
    </>
  )
}

export default App

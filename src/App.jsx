import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Contact from './Pages/Contact'
import HomePage from './Pages/Home'
import About from './Pages/About'
import './App.css'

function App() {

  return (
    <>
    <div className='Main-content'>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
       </Routes>
    </div>

      <div className='Error-Block m-60'>
        <h3 className=' text-white text-2xl font-bold'>Cannot be Viewed in Smaller Screens!</h3>
      </div>
    </>
  )
}

export default App

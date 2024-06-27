import React from 'react'
import { useNavigate } from "react-router-dom";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

function NavigationBar() {
  const navigate = useNavigate();

  const handleHomePageClick = () =>
    {
      navigate('/')
    }
  const handleAboutClick = () =>
    {
       navigate('/about')
    }
    const handleContactClick = () =>
      {
         navigate('/contact')
      }
  return (
    <>
    <div className='flex text-white m-8 justify-between'>
        <div className='flex w-44 justify-between'>
            <AutoFixHighIcon/>
            <p className='text'>Made With React</p>
        </div>
            <nav>
              <li onClick={handleHomePageClick}>HOME</li>
              <li onClick={handleAboutClick}>ABOUT</li>
              <li onClick={handleContactClick}>CONTACT</li>
            </nav>
      </div>
    </>
  )
}

export default NavigationBar
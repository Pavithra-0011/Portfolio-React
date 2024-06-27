import {React, useState} from 'react'
import { useNavigate } from "react-router-dom";
import ButtonComponent from '../../components/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigationBar from '../Navigationbar'
import ModalComponent from '../../components/Modal'
import './style.scss'
import { Button } from '@mui/material';

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = ()=>
    {
      navigate('/contact')
    }
  return (
    <>
    <div className='Container static mt-0'>
      <div className='Part1 m-5'>
         <NavigationBar />
       </div>
          <div className='Home-Intro text-white mt-56 ml-16 h-40 w-1/2'>
            <h1 className='text-6xl'>HI, I'm Pavithra FrontEnd Developer</h1>
            <h6 className=''>Specialized in crafting engaging and User-friendly Websites, 
              with hands-on experience in popular front-end frameworks like React and Angular.</h6>
              <ButtonComponent
               className='Common-Button' 
               ButtonName="Get In Touch"
               endIcon={<NavigateNextIcon/>}
               onClick={handleButtonClick}
             />  
          </div>
    </div>
    </>
  )
}

export default HomePage

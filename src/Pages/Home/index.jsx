import {React, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import ButtonComponent from '../../components/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigationBar from '../Navigationbar'
import { motion } from "framer-motion";
// import CounterComponent from '../../components/Counter';
import './style.scss'
import { Button, Hidden } from '@mui/material';

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = ()=>
    {
      navigate('/contact')
    }

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < 100) {
      const timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 10);
      return () => clearInterval(timer); // Clean up the interval on component unmount
    }
  }, [count]);
  return (
    <>
    <div className='Container static mt-0'>
      <div className='Part1 m-5'>
         <NavigationBar />
       </div>
          <motion.div 
          variants={{
            hidden : {opacity: 0, y: -30},
            visible : {opacity: 1, y: 0}
          }}
          initial = "hidden" 
          animate = "visible"
          transition={{duration: 0.60, delay:0.25}}
          className='Home-Intro text-white mt-48 ml-16 h-40 w-1/2'>
            <h1 className='text-6xl'>HI, I'm Pavithra FrontEnd Developer</h1>
            <h6 className=''>Specialized in crafting engaging and User-friendly Websites, 
              with hands-on experience in popular front-end frameworks like React and Angular.</h6>
              <ButtonComponent
               className='Common-Button' 
               ButtonName="Get In Touch"
               endIcon={<NavigateNextIcon/>}
               onClick={handleButtonClick}
               />  
             
          </motion.div>
    </div>
    </>
  )
}

export default HomePage

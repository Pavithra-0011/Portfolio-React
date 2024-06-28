import React from 'react'
import { useNavigate } from "react-router-dom";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { motion } from "framer-motion";

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
    <div className='Navigation flex text-white m-8 justify-between'>
        <div className='flex w-44 justify-between'>
            <AutoFixHighIcon/>
            <p className='text'>Made With React</p>
        </div>
            <nav>
              <motion.li 
              whileTap={{ scale: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleHomePageClick}>HOME</motion.li>
              <motion.li 
               whileTap={{ scale: 2 }}
               transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleAboutClick}>ABOUT</motion.li>
              <motion.li 
               whileTap={{ scale: 2 }}
               transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleContactClick}>CONTACT</motion.li>
            </nav>
      </div>
    </>
  )
}

export default NavigationBar
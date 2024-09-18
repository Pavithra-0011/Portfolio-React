import React from 'react'
import { useNavigate } from "react-router-dom";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
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
            <p className='text'>Pavithra Sivakumar</p>
        </div>
            <nav className='w-40'>
              <motion.div 
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className='Icons w-10 h-10 border-2 border-pink-800 rounded-3xl flex justify-center items-center border-x-4'>
              <a href='https://github.com/Pavithra-0011' target='blank'>
              <GitHubIcon style={{color:"rgb(236, 54, 91)"}}/>
              </a>
              </motion.div>
            <motion.div 
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className='Icons w-10 h-10 border-2 border-pink-800 rounded-3xl flex justify-center items-center border-x-4'>
                <a href='https://www.linkedin.com/in/pavithra-s-a67ba3247' target='blank'>
                <LinkedInIcon style={{color:"rgb(236, 54, 91)"}}/>
                </a>
              </motion.div>
              <motion.div 
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className='Icons w-10 h-10 border-2 border-pink-800 rounded-3xl flex justify-center items-center border-x-4'>
              <a href='https://www.instagram.com/__miss__virgo?igsh=MWJteHB6aWtyeWRwNA==' target='blank'>
              <InstagramIcon style={{color:"rgb(236, 54, 91)"}}/>
              </a>
              </motion.div>
              {/* <motion.li 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleHomePageClick}>HOME</motion.li>
              <motion.li 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleAboutClick}>ABOUT</motion.li>
              <motion.li 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleContactClick}>CONTACT</motion.li> */}
            </nav>
      </div>
    </>
  )
}

export default NavigationBar
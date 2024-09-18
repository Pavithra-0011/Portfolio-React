import {React, useState, useEffect, useRef} from 'react'
import { useNavigate } from "react-router-dom";
import ButtonComponent from '../../components/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DownloadIcon from '@mui/icons-material/Download';
import NavigationBar from '../Navigationbar'
import Resume from '../../../public/assets/PAVITHRA-SIVAKUMAR-RESUME.pdf'
import InputComponent from '../../components/Input/index'
import { motion } from "framer-motion";
import About from '../About/index'
import Contact from '../Contact/index'
// import CounterComponent from '../../components/Counter';
import './style.scss'
import { Button, Hidden } from '@mui/material';

function HomePage() {
  const navigate = useNavigate();
  const targetRef = useRef(null);

  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          className='Home-Intro text-white mt-40 ml-16 h-40 w-1/2'>
            <h1 className='text-6xl'>Hi, I'm Pavithra Software Developer</h1>
            <h6 className='mt-2'>Specialized in crafting engaging and User-friendly Websites, 
               with a knack for problem-solving and a passion for creating seamless web experiences,
              with hands-on experience in popular front-end frameworks like React and Angular.</h6>
              <ButtonComponent
               className='Common-Button' 
               ButtonName="Hire ME"
               endIcon={<NavigateNextIcon/>}
               onClick={handleClick}
               />   
               <a href={Resume} download style={{ textDecoration: 'none' }} />
               <ButtonComponent
               className='Common-Button' 
               ButtonName = "Download CV"
               endIcon={<DownloadIcon/>}
               href={Resume}
               download
               />   
          </motion.div>
          <div className='mt-80'>
            <About/>
          </div>
          <div className='mt-72' ref={targetRef}>
            <Contact />
          </div>
    </div>
    </>
  )
}

export default HomePage

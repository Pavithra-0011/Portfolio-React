import {React, useEffect, useState, useRef} from 'react'
import NavigationBar from '../Navigationbar'
import SchoolIcon from '@mui/icons-material/School';
import html from '../../../public/assets/html.png'
import css from '../../../public/assets/css.png'
import javascript from '../../../public/assets/javascript.png'
import bootstrap from '../../../public/assets/bootstrap.png'
import wind from '../../../public/assets/wind.png'
import angularjs from '../../../public/assets/angularjs.svg'
import atom from '../../../public/assets/atom.png'
import haircut from '../../../public/assets/haircut.png'
import music from '../../../public/assets/music.png'
import linkedin from '../../../public/assets/linkedin.png'
import instagram from '../../../public/assets/instagram.png'
import gmail from '../../../public/assets/gmail.png'
import facebook from '../../../public/assets/facebook.png'
import document from '../../../public/assets/document.png'
import { motion, useInView, useAnimation, useScroll,useMotionValue, useTransform,animate} from "framer-motion";
import './style.scss'

function About() {
  const [Value, setValue] = useState('')
  const ref = useRef(null);
  const isView = useInView(ref, {once : false});
  const animation = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() =>
  {
 
   if(isView)
    {
      console.log("true")
      animation.start("visible")
    }
  
  },[isView]);
  
  return (
    <>
       <div className='Container static mt-0'>
         <div className='Part1 m-5'>
           <NavigationBar className='fixed' />
           <motion.div className='progress-bar'
             style={{ scaleX: scrollYProgress }}
           >
           </motion.div>
         </div>
         <motion.div 
         variants={{
          hidden : {opacity: 0, y: -30},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden" 
        animate = {"visible"}
        transition={{duration: 0.60, delay:0.25}}
         className='text-common w-1/2 ml-10 mt-48'>
            {/* <h1 className='text-white text-6xl'>Hello</h1>  */}
            <h1 className='text-white text-6xl'>A 'BE Graduate' from Vels University 
            <SchoolIcon style={{ fontSize: 70, margin:10 }}/>
            </h1>
            <div className='w-2/3'>
            <p className='text-white text-2xl mt-0 text-center'>Computer Science and Engineering</p>
            <p className='fade-in-text text-gray-100 font-semibold text-xl mt-6 text-center'>Scroll Down!</p>
            </div>
         </motion.div>
       </div>
       
       <motion.div ref={ref}
        variants={{
          hidden : {opacity: 0, y: 75},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden" 
        animate = {animation}
        transition={{duration: 0.60, delay:0.25}}
       >
         <motion.div 
          ref={ref}
         variants={{
          hidden : {opacity: 0, y: 75},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden" 
        animate = {animation}
        transition={{duration: 0.60, delay:0.25}}
         className='Container-2 m-auto w-3/4  mt-40 py-4 h-80 text-white'>
           <h2 className='text-center text-4xl'>Technical Skills</h2>
           <div className='flex flex-row justify-between w-90 px-3 py-2 mx-5 mt-20 font-semibold text-center'>
            <div className='flex flex-col w-fit px-2'>
            <img src={html} className='m-auto' alt='html-img' height='40px' width='40px'/>
             <h4 className='Tech-text mt-3'>HTML</h4>
             
            </div>
            <div className='flex flex-col'>
            <img src={css} alt='html-img' className='m-auto' height='40px' width='40px'/>
             <h4 className='Tech-text mt-3'>CSS</h4>       
            </div>
            <div className='flex flex-col'>
            <img src={javascript} className='m-auto' alt='html-img' height='40px' width='40px'/>
             <h4 className='Tech-text mt-3'>JS</h4>             
            </div>
            <div className='flex flex-col'>
            <img src={bootstrap} className='m-auto' alt='html-img' height='40px' width='40px'/>
             <h4 className='Tech-text mt-3'>BS</h4>             
            </div>
            <div className='flex flex-col'>
            <img src={wind} className='m-auto' alt='html-img' height='40px' width='40px'/>
             <h4 className='Tech-text mt-3'>TW</h4>
            </div>
            <div className='flex flex-col'>
            <img src={atom} className='m-auto' alt='html-img' height='40px' width='40px'/>
             <h4 className='Tech-text mt-3'>REACT</h4>
             
            </div>
            <div className='flex flex-col w-fit px-2'>
             <img src={angularjs} className='m-auto' alt='html-img' height='40px' width='40px'/>
             <h4 className='Tech-text mt-3'>ANGULAR</h4>
            </div>
           </div>
         </motion.div>

         <motion.div 
          ref={ref}
         variants={{
          hidden : {opacity: 0, y: 75},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden" 
        animate = {animation}
        transition={{duration: 0.60, delay:0.25}}
         className='Container-3 m-auto w-3/4 mt-44 py-10 px-10 text-4xl  text-center h-80 text-white'>
           <h1>Hands on Experience on Real Time Projects</h1>
           <div className='flex mt-14 justify-evenly'>
           <div className='flex flex-col'>
            <img src={haircut} className='m-auto' alt='html-img' height='40px' width='40px'/>
             <h4 className='mt-3 text-xl'>TONI INTERNATIONAL</h4>
             <p className='text-sm'>(A React based project)</p>
           </div>
           <div className='flex flex-col'>
            <img src={music} className='m-auto' alt='html-img' height='80px' width='80px'/>
             <h4 className='text-xl mt-3'>ICON</h4>
             <p className='text-sm'>(An Angular based project)</p>
            </div>
           </div>
         </motion.div>

         <motion.div 
          ref={ref}
         variants={{
          hidden : {opacity: 0, y: 75},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden" 
        animate = {animation}
        transition={{duration: 0.60, delay:0.25}}
         className='Container-4 m-auto w-3/4 mt-44 py-10 px-10 text-4xl h-fit text-white'>           
             <h1 className='text-center'>Certifications</h1>
          <div className='flex justify-between w-10/12'>
          <div>
           <img src={document} alt='Contact' height="180px" width="150px"/>
           </div>
           <div className='mt-10 leading-5'>
             <p className='text-white text-2xl'>1.Data Science for Engineers (NPTEL - IIT Madras).</p>
             <p className='text-white text-2xl'>2.Database Management (NPTEL - IIT Khagrapur).</p>
             <p className='text-white text-2xl'>3.Frontend web development.</p>
           </div>
           {/* <div>
           <img src='src/assets/document.png' alt='Contact' height="180px" width="150px"/>
           </div> */}
           </div>
         </motion.div>
         
         <motion.div 
          ref={ref}
         variants={{
          hidden : {opacity: 0, y: 75},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden" 
        animate = {animation}
        transition={{duration: 0.60, delay:0.25}}
          className='Container-4 m-auto w-3/4 mt-44 py-10 px-10 mb-10 text-2xl h-fit text-white'>
            {/* <div className='text-white text-center mb-5'>
              <PlaceIcon fontSize="large" style={{marginRight :10 }}/>
              <p className='text-white text-1xl mt-0 text-center'>--------- Lives in Chennai ---------</p>
            </div> */}
            <div className='text-white text-center mb-5'>
              <p>Get in Touch via</p>
            </div>
            <div className='Contact'>
             <div className='flex justify-evenly text-white mt-10'>
              <a href='https://www.linkedin.com/in/pavithra-s-a67ba3247' target='blank'>
               <img src={linkedin} alt='html-img' height='30px' width='30px'/>
              </a>
              <a href='https://www.instagram.com/__miss__virgo?igsh=MWJteHB6aWtyeWRwNA==' target='blank'>
               <img src={instagram} alt='html-img' height='30px' width='30px'/>
              </a>
              <a href='https://www.facebook.com/profile.php?id=100017325847000' target='blank'>
               <img src={facebook} alt='html-img' height='30px' width='30px'/>
              </a>
              <a href='https://g.co/kgs/x2xUaQ1' target='blank'>
                 <img src={gmail} alt='html-img' height='30px' width='30px'/>
              </a>
             </div>
            </div>
         </motion.div>
         </motion.div>
    </>
  )
}

export default About
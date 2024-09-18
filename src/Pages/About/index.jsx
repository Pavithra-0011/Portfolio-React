import {React, useEffect, useState, useRef} from 'react'
import SchoolIcon from '@mui/icons-material/School'
import DataObjectIcon from '@mui/icons-material/DataObject';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Toni from '../../../public/assets/Toni.jpeg'
import Icon from '../../../public/assets/Icon.png'
import 'react-tabs/style/react-tabs.css';
import CircularProgress from '@mui/material/CircularProgress';
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
import CardComponent from '../../components/Card/index'
import CodeIcon from '@mui/icons-material/Code';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import LinearProgress from '@mui/material/LinearProgress';
import TextTransition, { presets } from 'react-text-transition';
import ProgressBar from "@ramonak/react-progress-bar";
import { Carousel } from 'react-responsive-carousel';
import { motion, useInView, useAnimation, useScroll, useMotionValue, useTransform,animate, inView, progress} from "framer-motion";
import './style.scss'
import { Loop } from '@mui/icons-material';
import { easeInOut } from 'framer-motion/dom';

function About() {
  const [value, setValue] = useState(0)
  const [index, setIndex] = useState(0)
  const texts = ['Projects', 'and' , 'Experiences', 'and']
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1000, 
    );
    return () => clearTimeout(intervalId);
  }, []);


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
  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgressBar(true);
    }, 2000); 

    return () => clearTimeout(timer); // Cleanup
  }, []);

   
  return (
    <>
       <div className='Container1 static'>
         {/* <motion.div  */}
         {/* variants={{
          hidden : {opacity: 0, y: 20},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden" 
        animate = {animation}
        transition={{duration: 0.60, delay:0.2}}
         className='text-common w-1/2 ml-10 mt-48'>
            <h1 className='text-white text-6xl'>A 'BE Graduate' from Vels University 
            <SchoolIcon style={{ fontSize: 70, margin:10 }}/>
            </h1> */}
            {/* <div className='w-2/3'>
            <p className='text-white text-2xl mt-0 text-center'>Computer Science and Engineering</p>
            <p className='fade-in-text text-gray-100 font-semibold text-xl mt-6 text-center'>Scroll Down!</p>
            </div> */}
         {/* </motion.div> */}
       </div>
       <motion.div ref={ref}
        variants={{
          hidden : {opacity: 0, y: 75},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden" 
        animate = "visible"
        transition={{duration: 0.60, delay:0.25}}
       >


        <motion.div
        variants={{
          hidden: {opacity: 0, y: 60},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden"
        animate = {animation}
        transition={{duration: 0.60, delay:0.25}}
        className='flex flex-col'>
          <div className='text-white text-center font-black text-4xl'><span className='text-pink-700 text-5xl'>My</span> Services</div>
          <div className='Services w-5/6 h-fit mx-auto my-10 p-4 flex flex-row justify-center align-middle items-center'>
            <Carousel className='w-3/5'
             autoPlay = {true} infiniteLoop={true} interval={2000} centerMode={true} centerSlidePercentage={50}>
            <div>
              <CardComponent 
            Icon = {<CodeIcon className='text-white' style={{ fontSize: 70}}/>}
            Title = 'Web Development'
            Subtext={'I specialize in crafting responsive, user-friendly websites that elevate business presence online. From front-end design to seamless functionality, I deliver tailored web solutions to meet your needs'}
            />
            </div>
            <div>
            <CardComponent
            Icon = {<DataObjectIcon className='text-white' style={{ fontSize: 70}}/>}
            Title = 'Software Dev.'
            Subtext={'I provide end-to-end software development solutions, crafting robust and scalable applications tailored to your business needs, ensuring seamless performance and user satisfaction through innovative coding and design practices."'}
            />
            </div>
            <div>
            <CardComponent
            Icon = {<DataObjectIcon className='text-white' style={{ fontSize: 70}}/>}
            Title = 'Web Designing'
            Subtext={'I create intuitive and visually compelling user interfaces that enhance user experience. My designs focus on usability, accessibility, and delivering a seamless digital journey for users.'}
            />
            </div>
            </Carousel>
          </div> 
        </motion.div>
     

     <motion.div
     ref={ref}
     variants={{
      hidden: {opacity:0, y:60},
      visible : {opacity:1, y:0}
     }}
     initial = "hidden"
     animate ="visible"
     transition={{duration: 0.60, delay:2}}
     >
        <div className='text-white text-center font-black text-4xl'><span className='text-pink-700 text-5xl'>My</span> Skills</div>
        <div className='skills h-8/12 w-5/6 mx-auto my-5 py-4 px-3 flex justify-around align-middle'>
    
           <div className='card1 h-96 w-3/5 rounded-xl flex flex-wrap justify-around'>
              
              <div className='flex h-10 w-fit justify-between items-center flex-col mx-6'>
                 <div className='text-white font-bold mx-2'>HTML</div>
                {showProgressBar && (
                 <div className='w-60 mx-2'>
                    <ProgressBar
                    completed={90}
                    maxCompleted={100}
                    bgColor = {"linear-gradient(90deg, rgba(177,58,180,1) 0%, rgba(253,29,48,1) 50%)"}
                    baseBgColor = {"#151515"}
                    transitionDuration="2s"
                    labelSize = {"13px"}
                    transitionTimingFunction='ease-in-out'
                    animateOnRender={true}
                    height='10px'
                    />
                </div>
                   )}
             </div>

             <div className='flex h-10 w-fit justify-between items-center flex-col mx-6'>
                 <div className='text-white font-bold mx-2'>CSS</div>
                 <div className='w-60 mx-2'>
                    {showProgressBar && (
                    <ProgressBar
                    completed={75}
                    maxCompleted={100}
                    bgColor = {"linear-gradient(90deg, rgba(177,58,180,1) 0%, rgba(253,29,48,1) 50%)"}
                    baseBgColor = {"#151515"}
                    transitionDuration="2s"
                    labelSize = {"13px"}
                    transitionTimingFunction='ease-in-out'
                    animateOnRender={true}
                    height='10px'
                    />
                   )}
                </div>
             </div>

             <div className='flex h-10 w-fit justify-between items-center flex-col mx-6'>
                 <div className='text-white font-bold mx-2'>JS</div>
                 <div className='w-60 mx-2'>
                    {showProgressBar && (
                    <ProgressBar
                    completed={70}
                    maxCompleted={100}
                    bgColor = {"linear-gradient(90deg, rgba(177,58,180,1) 0%, rgba(253,29,48,1) 50%)"}
                    baseBgColor = {"#151515"}
                    transitionDuration="2s"
                    labelSize = {"13px"}
                    transitionTimingFunction='ease-in-out'
                    animateOnRender={true}
                    height='10px'
                    />
                   )}
                </div>
             </div>

             <div className='flex h-10 w-fit justify-between items-center flex-col mx-6'>
                 <div className='text-white font-bold mx-2'>BOOTSTRAP</div>
                 <div className='w-60 mx-2'>
                    {showProgressBar && (
                    <ProgressBar
                    completed={60}
                    maxCompleted={100}
                    bgColor = {"linear-gradient(90deg, rgba(177,58,180,1) 0%, rgba(253,29,48,1) 50%)"}
                    baseBgColor = {"#151515"}
                    transitionDuration="2s"
                    labelSize = {"13px"}
                    transitionTimingFunction='ease-in-out'
                    animateOnRender={true}
                    height='10px'
                    />
                   )}
                </div>
             </div>
             <div className='flex h-10 w-fit justify-between items-center flex-col mx-6'>
                 <div className='text-white font-bold mx-2'>TAILWIND</div>
                 <div className='w-60 mx-2'>
                    {showProgressBar && (
                    <ProgressBar
                    completed={90}
                    maxCompleted={100}
                    bgColor = {"linear-gradient(90deg, rgba(177,58,180,1) 0%, rgba(253,29,48,1) 50%)"}
                    baseBgColor = {"#151515"}
                    transitionDuration="2s"
                    labelSize = {"13px"}
                    transitionTimingFunction='ease-in-out'
                    animateOnRender={true}
                    height='10px'
                    />
                   )}
                </div>
             </div>

             <div className='flex h-10 w-fit justify-between items-center flex-col mx-6'>
                 <div className='text-white font-bold mx-2'>REACT</div>
                 <div className='w-60 mx-2'>
                    {showProgressBar && (
                    <ProgressBar
                    completed={85}
                    maxCompleted={100}
                    bgColor = {"linear-gradient(90deg, rgba(177,58,180,1) 0%, rgba(253,29,48,1) 50%)"}
                    baseBgColor = {"#151515"}
                    transitionDuration="2s"
                    labelSize = {"13px"}
                    transitionTimingFunction='ease-in-out'
                    animateOnRender={true}
                    height='10px'
                    />
                   )}
                </div>
             </div>

             <div className='flex h-10 w-fit justify-between items-center flex-col mx-6'>
                 <div className='text-white font-bold mx-2'>ANGULAR</div>
                 <div className='w-60 mx-2'>
                    {showProgressBar && (
                    <ProgressBar
                    completed={45}
                    maxCompleted={100}
                    bgColor = {"linear-gradient(90deg, rgba(177,58,180,1) 0%, rgba(253,29,48,1) 50%)"}
                    baseBgColor = {"#151515"}
                    transitionDuration="2s"
                    labelSize = {"13px"}
                    transitionTimingFunction='ease-in-out'
                    animateOnRender={true}
                    height='10px'
                    />
                   )}
                </div>
             </div>

             <div className='flex h-10 w-fit justify-between items-center flex-col mx-6'>
                 <div className='text-white font-bold mx-2'>SQL</div>
                 <div className='w-60 mx-2'>
                    {showProgressBar && (
                    <ProgressBar
                    completed={50}
                    maxCompleted={100}
                    bgColor = {"linear-gradient(90deg, rgba(177,58,180,1) 0%, rgba(253,29,48,1) 50%)"}
                    baseBgColor = {"#151515"}
                    transitionDuration="2s"
                    labelSize = {"13px"}
                    transitionTimingFunction='ease-in-out'
                    animateOnRender={true}
                    height='10px'
                    />
                   )}
                </div>
             </div>
          
          </div>

          <div className='card2 h-96 w-2/6 bg-slate-900 rounded-xl flex flex-wrap justify-between'>
          <div className='infinite-slide flex flex-col'>
            <img src={css} alt='html-img' className='m-auto' height='40px' width='40px'/>
             {/* <h4 className='Tech-text mt-3'>CSS</h4>        */}
            </div>
            <div className='infinite-slide flex flex-col'>
            <img src={javascript} className='m-auto' alt='html-img' height='40px' width='40px'/>
             {/* <h4 className='Tech-text mt-3'>JS</h4>              */}
            </div>
            <div className='infinite-slide flex flex-col'>
            <img src={bootstrap} className='m-auto' alt='html-img' height='40px' width='40px'/>
             {/* <h4 className='Tech-text mt-3'>BS</h4>              */}
            </div>
            <div className='infinite-slide flex flex-col'>
            <img src={wind} className='m-auto' alt='html-img' height='40px' width='40px'/>
             {/* <h4 className='Tech-text mt-3'>TW</h4> */}
            </div>
            <div className='infinite-slide flex flex-col'>
            <img src={atom} className='m-auto' alt='html-img' height='40px' width='40px'/>
             {/* <h4 className='Tech-text mt-3'>REACT</h4> */}
             
            </div>
            <div className='infinite-slide flex flex-col'>
             <img src={angularjs} className='m-auto' alt='html-img' height='40px' width='40px'/>
             {/* <h4 className='Tech-text mt-3'>ANGULAR</h4> */}
            </div>
           </div>
          </div>
     </motion.div>

     <motion.div
      variants={{
        hidden: {opacity:0, y:60},
        visible : {opacity:1, y:0}
       }}
       initial = "hidden"
       animate ="visible"
       transition={{duration: 0.60, delay:2}}
       className='portfolio w-10/12 h-8/12 p-4 mx-auto mt-44 rounded-lg flex justify-evenly'
     >
          <div className='w-80 h-96 text-white font-black text-5xl flex justify-start items-center'>
               <TextTransition springConfig={presets.molasses} style={{color:"deeppink"}}>{texts[index % texts.length]}</TextTransition>
          </div>
          <div className='sec-2 w-4/6 h-96'>
          <Tabs focusTabOnClick={false}>
            <TabList className='h-10 text-gray-300 font-semibold text-lg mb-2'>
              <Tab>Projects</Tab>
              <Tab>Experiences</Tab>
            </TabList>
             <TabPanel className='px-4 py-4 flex justify-around'>
               <div className='cards1 h-72 w-80 bg-yellow-400'>
                 <div className='parent h-72 w-80'>
                   <img src={Toni} className='h-72 w-80'/>
                 </div> 
                 <div className='child text-white font-semibold h-72 w-80 text-xl'>
                    Toni International
                 </div>
               </div>
               <div className='cards1 h-72 w-80 bg-yellow-400'>
               <div className='parent h-72 w-80'>
                   <img src={Icon} className='h-72 w-80'/>
                 </div> 
                 <div className='child text-white font-semibold h-72 w-80 text-xl'>
                    Icon
                </div>
               </div>
             </TabPanel>
             <TabPanel>
             <div className='exp text-white text-xl px-4'>
              Junior Software Developer - Intern<br/>
              <span className='text-lg font-mono'>Coderz Vision Technology - Jun (2024)</span>
              <ul className=''>
                <li className='font-serif mx-10'>React Js</li>
                <li className='font-serif'>Angular</li>
              </ul>
             </div>
             <div className='exp text-white text-xl px-4 mt-12'>
                Open to Developer Roles
                <ul className=''>
                <li className='font-serif mx-10'>Software Development</li>
                <li className='font-serif'>Frontend Development</li>
                </ul>
             </div>
             </TabPanel>
           </Tabs>
          </div>
     </motion.div>

         {/* <motion.div 
          ref={ref}
         variants={{
          hidden : {opacity: 0, y: 75},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden" 
        animate = {animation}
        transition={{duration: 0.60, delay:0.50}}
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
           {/* </div>
         </motion.div> */}
         
         {/* <motion.div 
          ref={ref}
         variants={{
          hidden : {opacity: 0, y: 75},
          visible : {opacity: 1, y: 0}
        }}
        initial = "hidden" 
        animate = {animation}
        transition={{duration: 0.60, delay:0.25}}
          className='Container-4 m-auto w-3/4 mt-44 py-10 px-10 mb-10 text-2xl h-fit text-white'> */}
            {/* <div className='text-white text-center mb-5'>
              <PlaceIcon fontSize="large" style={{marginRight :10 }}/>
              <p className='text-white text-1xl mt-0 text-center'>--------- Lives in Chennai ---------</p>
            </div> */}
            {/* <div className='text-white text-center mb-5'>
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
         {/* </motion.div> */}
         </motion.div> 

         
    </>
  )
}

export default About
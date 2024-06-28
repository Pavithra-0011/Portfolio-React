import React from 'react'
import NavigationBar from '../Navigationbar'
import InputComponent from '../../components/Input'
import Lottie from 'lottie-react'
import Communicate from  '../../../Communicate.json'
import { motion } from "framer-motion";
import './style.scss'

function Contact() {
  return (
    <>
      <div className='Container static mt-0'>
         <div className='Part1 m-5'>
           <NavigationBar />
         </div>
            {/* <div className='text-white text-center mb-5'>
              <PlaceIcon fontSize="large" style={{marginRight :10 }}/>
              <p className='text-white text-1xl mt-0 text-center'>--------- Lives in Chennai ---------</p>
            </div> */}
            <motion.div 
            variants={{
              hidden : {opacity: 0, y: -30},
              visible : {opacity: 1, y: 0}
            }}
            initial = "hidden" 
            animate = "visible"
            transition={{duration: 0.60, delay:0.25}}
            className='wrap'>
            {/* <div className='cont text-white text-xl font-semibold ml-14 mt-44'>GET IN TOUCH</div> */}
            <div className='ml-14 text-3xl font-semibold mt-44 text-white'>
             <div className='texts-in'>
             {/* < img src='src/assets/chat.png' alt='Contact' height="70px" width="70px"/> */}
             <motion.div
                className="box"
                animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
                }}
                />
              <p className='mt-10'>Drop a Mail to:</p>
              <p className='mt-3'>pavithrapavioffc21@gmail.com</p>
            </div>
             </div>
             <div className='flex justify-between align-middle mt-10 ml-14 w-60 h-fit'>
              <motion.div 
              whileHover={{scale : [null, 2, 1.4]}}
              transition={{duration : 0.3}}
              className=''>
              <a href='https://www.linkedin.com/in/pavithra-s-a67ba3247' target='blank'>
               <img src='public/assets/linkedin.png' alt='html-img' height='30px' width='30px'/>
              </a>
              {/* <p className='text-white text-sm'>Pavithra S</p> */}
              </motion.div>
              <motion.div 
              whileHover={{scale : [null, 2, 1.4]}}
              transition={{duration : 0.3}}
              className=''>
              <a href='https://www.instagram.com/__miss__virgo?igsh=MWJteHB6aWtyeWRwNA==' target='blank'>
               <img src='public/assets/instagram.png' alt='html-img' height='30px' width='30px'/>
              </a>
              </motion.div>
              <motion.div 
              whileHover={{scale : [null, 2, 1.4]}}
              transition={{duration : 0.3}}
              className=''>
              <a href='https://www.facebook.com/profile.php?id=100017325847000' target='blank'>
               <img src='public/assets/facebook.png' alt='html-img' height='30px' width='30px'/>
              </a>
              </motion.div>
              <motion.div 
              whileHover={{scale : [null, 2, 1.4]}}
              transition={{duration : 0.3}}
              className=''>
                <a href='https://g.co/kgs/x2xUaQ1' target='blank'>
                 <img src='public/assets/gmail.png' alt='html-img' height='30px' width='30px'/>
                </a>
              </motion.div>
             </div>
             {/* <Lottie animationData={Communicate} loop height={40} width={40}/> */}
             </motion.div>
            </div>
   </>
  )
}

export default Contact
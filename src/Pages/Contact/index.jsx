import React from 'react'
import NavigationBar from '../Navigationbar'
import './style.scss'
import InputComponent from '../../components/Input'

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
            <div className='wrap'>
            {/* <div className='cont text-white text-xl font-semibold ml-14 mt-44'>GET IN TOUCH</div> */}
            <div className='ml-14 text-3xl font-semibold mt-44 text-white'>
            <img src='src/assets/chat.png' alt='Contact' height="70px" width="70px"/>
              <p className='mt-4'>Drop a Mail to:</p>
              <p className='mt-3'>pavithrapavioffc21@gmail.com</p>
            </div>
             <div className='flex justify-between align-middle mt-10 ml-14 w-60 h-fit'>
              <div className=''>
              <a href='https://www.linkedin.com/in/pavithra-s-a67ba3247' target='blank'>
               <img src='src/assets/linkedin.png' alt='html-img' height='30px' width='30px'/>
              </a>
              {/* <p className='text-white text-sm'>Pavithra S</p> */}
              </div>
              <div>
              <a href='https://www.instagram.com/__miss__virgo?igsh=MWJteHB6aWtyeWRwNA==' target='blank'>
               <img src='src/assets/instagram.png' alt='html-img' height='30px' width='30px'/>
              </a>
              </div>
              <div>
              <a href='https://www.facebook.com/profile.php?id=100017325847000' target='blank'>
               <img src='src/assets/facebook.png' alt='html-img' height='30px' width='30px'/>
              </a>
              </div>
              <div>
                <a href='https://g.co/kgs/x2xUaQ1' target='blank'>
                 <img src='src/assets/gmail.png' alt='html-img' height='30px' width='30px'/>
                </a>
              </div>
             </div>
             </div>
            </div>
   </>
  )
}

export default Contact
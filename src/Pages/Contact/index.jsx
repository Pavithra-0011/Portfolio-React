import {useState} from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import Postdata from '../../Redux/Action/Action.jsx'
import InputComponent from '../../components/Input'
import linkedin from '../../../public/assets/linkedin.png'
import instagram from '../../../public/assets/instagram.png'
import gmail from '../../../public/assets/gmail.png'
import facebook from '../../../public/assets/facebook.png'
import TextArea from '../../components/TextArea/index'
import ButtonComponent from '../../components/Button'
import { motion } from "framer-motion";
import './style.scss'

function Contact() {
 const dispatch = useDispatch()
 const [details, setDetails] = useState({
  Name : '',
  Email : '',
  Message : ''
 })
  
 const validationSchema = Yup.object({
  Name: Yup.string().required('Name is required'),
  Email: Yup.string().email('Invalid email').required('Email is required'),
  Message: Yup.string().required('Message is required')
});

 const HandleChange = (e)=>
 {
    setDetails({
      ...details,
      [e.target.name] : [e.target.value]
    })
    console.log(e.target.value)
 }

 const HandleSendMessage = ()=>
 {
    dispatch(Postdata(details))
    .then(() => {
      setDetails({
        Name: '',
        Email: '',
        Message: ''
      });
      alert('Your Message Has been Sent!')
    })
    .catch(error => {
      console.error("Submission error:", error);
    });
 }
  return (
    <>
      <div className='Container-1 static mt-0 h-96 w-5/6 mx-auto p-4 flex'>
       <div className='w-72 h-full text-pink-700 font-black text-4xl text-start flex flex-col justify-center mr-10'>Contact Me!
         <div className='text-white font-semibold text-lg mt-7'>Feel free to get in touch, will get back to you shortly !!! </div>
         <div className='text-pink-400 font-semibold text-lg mt-2'>drop a mail at <br/> pavithrapavioffc21@gmail.com</div>
       </div>
       <div className='w-2/5 h-full ml-10 mr-16'>
       <Formik
            initialValues={details}
            validationSchema={validationSchema}
            onSubmit={(details) => {
              HandleSendMessage(details);
            }}
          >
{({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
          <InputComponent
          placeholder={"Name"} 
          name = {"Name"}
          value = {details.Name}
          onChange={HandleChange}
          className='mb-3'
          />
          <ErrorMessage name="Name" component="div" className="text-red-500" />
          <InputComponent
          placeholder={"Mail"} 
          type={"email"}
          name={"Email"}
          value = {details.Email}
          onChange={HandleChange}
          className='mb-3'
          />
          <ErrorMessage name="Email" component="div" className="text-red-500" />
          <TextArea
          placeholder={"Your Message"} 
          type="text"
          name = {"Message"}
          value = {details.Message}
          onChange={HandleChange}
          className="h-44 flex justify-start items-start"
          />
           <ErrorMessage name="Message" component="div" className="text-red-500" />
          <ButtonComponent 
          className='Mui-button'
          ButtonName="Send" 
          onClick={(details) => HandleSendMessage(details) }
          />
           </Form>
            )}
          </Formik>
          </div>
       <div className='w-72 h-full text-pink-700 font-black text-2xl text-start flex flex-col justify-center'>Drop your queries!
         <div className='text-white font-semibold text-lg mt-2'>or Provide a suggestion</div>
         {/* <div className='text-pink-400 font-semibold text-lg mt-2'>drop a mail at <br/> pavithrapavioffc21@gmail.com</div> */}
       </div>
       </div>
   </>
  )
}

export default Contact
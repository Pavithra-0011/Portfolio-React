import React from 'react'
import { Input } from '@mui/base/Input';
import './style.scss'

function InputComponent({placeholder,Text}) {
  return (
    <>
    <Input placeholder={placeholder}/>
    </>
  )
}

export default InputComponent
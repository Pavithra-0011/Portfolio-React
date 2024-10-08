import React from 'react'
import { Input } from '@mui/base/Input';
import './style.scss'
import { ClassNames } from '@emotion/react';

function InputComponent({placeholder,className,name,value, onChange}) {
  return (
    <div>
    <input
    name = {name}
    value = {value}
    onChange={onChange}
    placeholder={placeholder}
    style={{fontSize: "12px", paddingLeft:"10px", color:"chocolate"}}
    className={className}
    />
    </div>
  )
}

export default InputComponent
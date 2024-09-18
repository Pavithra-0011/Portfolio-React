import { Input } from '@mui/base/Input';
import './styles.scss'
import { ClassNames } from '@emotion/react';

function TextArea({placeholder,className,name,value, onChange}) {
  return (
    <div>
    <textarea
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

export default TextArea
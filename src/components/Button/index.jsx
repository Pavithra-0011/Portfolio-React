import React from 'react'
import Button from '@mui/material/Button';

function ButtonComponent({ButtonName, className, startIcon, endIcon, onClick, href, download}) {
  return (
    <>
    <Button className={className} onClick={onClick} startIcon={startIcon} endIcon={endIcon} href={href}
      download={download ? true : undefined} style ={{fontFamily: "Mulish !important", color:"white !important"}}>{ButtonName}</Button>
    </>
  )
}

export default ButtonComponent

// const ButtonComponent = ({className,buttonName, startIcon ,endIcon, route, onClick, disabled,title,type="button",lablestyle}) => {
//   const navigate = useNavigate()
//   return(
//       <Button type={type} disabled={disabled} title={title} className={`${className} toni_btn_comp mulishFont ${disabled && " !bg-[#0000001F] !text-[#00000042]"}`} style = {{fontFamily: "Mulish !important"}}  startIcon={startIcon} onClick={onClick} endIcon={endIcon} >{buttonName}</Button>
//   )
// }
import React from 'react';
import './style.scss'

function ModalComponent({ModalHeading, show, ModalBody,ButtonName, onClick}) {
    if (!show) {
        return null;
      }
    return (
     <>
     <div className='Modal-container'>
        <div className='Modal-Content'>
            <div className='Modal-Heading'>{ModalHeading}</div>
            <div className='Modal-Body'>{ModalBody}</div>
        </div>
        <div className='Buttons'>
            <button onClick={onClick}>{ButtonName}</button>
        </div>
     </div>
     </>
  )
}

export default ModalComponent

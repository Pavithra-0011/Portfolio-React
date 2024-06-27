import React from 'react'

function TechnicalComponent({CustomIcon,CustomText}) {
  return (
    <>
     <div className='flex flex-col text-2xl text-white w-fit h-fit p-3'>
        {CustomIcon}
        {CustomText}
     </div>
    </>
  )
}

export default TechnicalComponent
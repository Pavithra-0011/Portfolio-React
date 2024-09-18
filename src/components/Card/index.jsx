import React from 'react'
import SchoolIcon from '@mui/icons-material/School';

function CardComponent({Icon, Title, Subtext}) {
  return (
    <div className='Card h-80 w-72 p-3 mx-10 mb-20 border-2 mt-10 border-white flex flex-col items-center rounded-lg'>
       <div className='my-4'>{Icon}
        {/* <SchoolIcon className='text-white' style={{ fontSize: 70}}/> */}
        </div>
       <div className='text-white text-2xl font-bold my-3'>{Title}</div>
       <div className='text-wrap text-white text-xs text-center'>{Subtext}</div>
    </div>
  )
}

export default CardComponent
import {React, useState, useEffect} from 'react'

function CounterComponent({value, timer}) 
{
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (count < {value}) {
        const timer = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 10);
        return () => clearInterval(timer); // Clean up the interval on component unmount
      }
    }, [count]);
  return (
    <>
    <h1 className='text-white'>Counter: {timer}</h1>
    </>
  )
}

export default CounterComponent
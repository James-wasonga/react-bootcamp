import React from 'react'
import { useState } from 'react'

const UseState = () => {
  //useState is used to make a count of 
  //events for examples how many times a button is clicked
    const[count, setCount] = useState(0);//count is the current value
 
    function handleClick(){
       console.log(setCount(count+1));
    }
  return (
    <>
   <button onClick={handleClick}>STATE</button>
    </>
  )
}

export default UseState
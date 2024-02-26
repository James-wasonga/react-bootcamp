import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const UseEffect = () => {
   const[data,setData] = useState("");
   const[count, setCount] = useState(0);

   //creating a function that enables fetching
   function handleClick(){
    axios.get("paste the url here").then((response) =>{
        setData(response.data[0].password)
    },[]) 
   }
  

  return (


    <>
    <button onClick={handleClick} > EFFECT </button>

    </>
  )
}

export default UseEffect
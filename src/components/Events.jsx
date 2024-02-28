import React from 'react'

const Events = () => {

    function handleClick(){
        console.log("Hello you clicked me well");
    }
function handle (){
  console.log("welcome");
}
  return (
    <>
    <button className='event' onClick={handleClick}>Click</button>
    <button onClick={handle}>Check click</button>
    </>
  )
}

export default Events
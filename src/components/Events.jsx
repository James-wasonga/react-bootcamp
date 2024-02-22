import React from 'react'

const Events = () => {

    function handleClick(){
        console.log("Hello you clicked me well");
    }

  return (
    <>
    <button className='event' onClick={handleClick}>Click</button>
    </>
  )
}

export default Events
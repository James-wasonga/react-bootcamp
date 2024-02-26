import React from 'react'

const Condition = () => {
    let name = "";

    if(name)
  return (
    <div>
        {name} is keyed 
   </div>
  )
  return (
    <div>
        your name is not keyed 
   </div>
  )

  
}

export default Condition
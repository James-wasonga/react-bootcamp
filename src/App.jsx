import Best from "./components/Best"
import Button from "./components/Button"
import Greet from "./components/Greet"
import React from 'react'
import Props from "./components/Props"
import Events from "./components/Events"
import Condition from "./components/Condition"
import UseState from "./components/UseState"
import UseEffect from "./components/UseEffect"

function App(){
return(
  <>
   <Best/>
     <Greet name="Jack"/>
     <br/>
  <Button/>
  <Props name="red"/>
  <Events/>
  <Condition/>
  <UseState/>
  <UseEffect/>
 
  </>
 
)

}

export default App

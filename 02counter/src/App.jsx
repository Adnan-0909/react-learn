import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //hook returns two things, 1 is the value (here its counter)
  //second is function which reacts with the variable/value
  let [counter,setCounter] = useState(0)//hook
// let counter = 15
const addvalue=()=>{
  console.log('value added,',Math.random())
  if (counter==20) {
    setCounter(counter)
  }else
  setCounter(counter+1)  
}
const decreaseValue=()=>{
  if (counter==0) {
    setCounter(counter)
  }
  else setCounter(counter-1)
}
  return (
    <>
    <h1>React</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick={addvalue}>Add Value</button>
    <br />
    <button onClick={decreaseValue}
    >Decrease Value</button>

    </>
  )
}

export default App

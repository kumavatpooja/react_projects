import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
let [Counter,setCounter] = useState(15)
//let Counter= 15
const addValue =()=>{
  //Counter = Counter +1
  if(Counter<20){
  setCounter(Counter +1)
}
  
  }
  const RemoveValue =()=>{
    if(Counter>0){
    setCounter(Counter -1)
  }
}

  return (
    <>
  
      <h1> Chai Aur React</h1>
      <h2>Counter value : {Counter}</h2>
      <div style={{display:"flex", gap:"20px"}}>
      <button
      onClick={addValue}
      >Add value</button>
      <button onClick={RemoveValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App

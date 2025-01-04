import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(20);


  // let counter = 15;
  const addValue= () => {
    // console.log("Add Before",counter);
    counter = counter + 1;
    setCounter(counter);
    // console.log("Add After",counter);
    if(counter >= 21 ){
      setCounter(0);
    }
  }

  const subValue= () => {
    // console.log("Sub Before",counter)
    counter = counter - 1;
    setCounter(counter);
    // console.log("Sub After",counter)
  if(counter <= 0){
    setCounter(0);
  }
  }

  

  
  return (
    <>
      <h1>Chai aur react</h1>
      <div>Counter Value : {counter}</div>
      <br />
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={subValue}>Subtract Value {counter}</button>


    </>
  )
}

export default App

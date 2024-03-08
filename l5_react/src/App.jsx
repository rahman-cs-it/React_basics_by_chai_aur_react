import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);


  // let counter = 15;

  let addValue = () => {

    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)

    if (counter > 20) {
      setCounter(0);
    }

  }

  let removeValue = () => {
    setCounter(--counter)
    if (counter < 0) {
      setCounter(0);
    }

  }
  return (
    <>
      <h1>Lets learn to code {counter} </h1>
      <h2>counter value {counter} </h2>
      <button onClick={addValue} >add value {counter} </button>
      <br />
      <button onClick={removeValue} >remove value {counter} </button>
    </>
  )
}

export default App

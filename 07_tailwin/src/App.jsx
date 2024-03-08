import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componets/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username:"rahman",
    age:50
  }

  let newarr = [1,2,3];
  return (
    <>
      <h1 className="text-3xl font-bold underline ">
        Hello world!
      </h1>
      <Card userName="Rahman"  />
      <br />
      <Card userName="Khalid" />
      <br />
      <Card userName="Mustakim" />
    </>
  )
}

export default App

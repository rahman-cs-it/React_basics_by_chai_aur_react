import { useState } from 'react'
import Details from './Details'
import Chai from './chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Details/>
    <h1>This is rahman</h1>
    <Chai/>
    </>
  )
}

export default App

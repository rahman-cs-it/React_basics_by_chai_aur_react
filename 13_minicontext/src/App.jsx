
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Hello world this is rahman here</h1>
    </UserContextProvider>
    
  )
}

export default App

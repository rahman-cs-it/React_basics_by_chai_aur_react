
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Hello world this is rahman here</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    
  )
}

export default App

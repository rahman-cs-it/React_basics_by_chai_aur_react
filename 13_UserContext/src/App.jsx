import Login from "./Component/Login"
import Profile from "./Component/Profile"
import UserContext from "./Context/UserContext"
import UserContextProvider from "./Context/UserContextProvider"

function App() {
  

  return (
    <UserContextProvider>
      <h1>THis is my first Context api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

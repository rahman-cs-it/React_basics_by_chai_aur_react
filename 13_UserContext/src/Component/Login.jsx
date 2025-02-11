import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} =useContext(UserContext)
    const handlesubmit = (e) =>{
      e.preventDefault()
      setUser({username,password})
      console.log('success')
    }
  return (
    <>
    <h2>Login</h2>
    <input type="text" placeholder='UserName'
    value={username} onChange={(e)=> setUsername(e.target.value)} />
    <input type="password" placeholder='password' 
    value={password} onChange={(e)=> setPassword(e.target.value)}/>
    <button onClick={handlesubmit}>Submit</button>
    </>
  )
}

export default Login

import { useEffect, useState } from 'react'
import './App.css'
import Card from './Componet/Card'
import ThemeBtn from './Componet/ThemeBtn'
import { ThemeContextProvider } from './Context/ThemeContext'

function App() {
  const [themeMode,setthemeMode] =useState('light')

  const lighttheme = () =>{
    setthemeMode('light')
  }

  const darktheme = () => {
    setthemeMode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
      <ThemeContextProvider value={{themeMode,lighttheme,darktheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
      </ThemeContextProvider>

    </>
  )
}

export default App

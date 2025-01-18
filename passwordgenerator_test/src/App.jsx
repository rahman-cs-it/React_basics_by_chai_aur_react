import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState('8')
  const [isNumberAllowed,setisNumberAllowed] = useState(false)
  const [isCharAllowed,setisCharAllowed] = useState(false)
  const [password,setpassword] = useState('')

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(isNumberAllowed) str+= '1234567890'
    if(isCharAllowed)  str+= '`~!@#$%^&*()_{}+-=[]\|'

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length +1)

      pass +=str.charAt(char);
    }
    setpassword(pass)

  },[length,isNumberAllowed,isCharAllowed,setpassword])

  const copytoclipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,isNumberAllowed,isCharAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-lg mx-auto px-7  py-4 my-10 rounded-lg text-orange-500 shadow-md bg-gray-700'>

        <h1 className='text-white text-center my-5 text-4xl '>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-6'>
          <input type="text"
          placeholder='password'
          value={password}
          className='w-full outline-none py-2 px-4'
          ref={passwordRef}
          readOnly 
          
          />

          <button className='outline-none bg-blue-700 text-white px-4 py-1 shrink-0 hover:bg-green-700'
          onClick={copytoclipboard}
          >
            Copy
          </button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>

            <input type="range" 
            value={length}
            min={8}
            max={40}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >Length : {length} </label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox" 
            defaultChecked={isNumberAllowed}
            onChange={()=>{
              setisNumberAllowed((prev) =>  !prev)
            }}
             />
             <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox" 
            defaultChecked={isCharAllowed}
            onChange={()=>{
              setisCharAllowed((prev) => !prev)
            }}
             />
             <label htmlFor="charInput">Characters</label>
          </div>
        </div>




      </div>
    </>
  )
}

export default App

import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState('')

// ref hook

const passwordRef = useRef(null)


const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed){
    str += "1234567890"
  }
  if(charAllowed){
    str += "!@#$%^&*()_+,.<>-+~`"
  }

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char)
  }
  setPassword(pass)


}, [numberAllowed, charAllowed, length, setPassword])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  const copyPasswordToClibboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
   
    <div className='w-full h-40 max-w-md mx-auto shadow-md px-4 my-4 rounded-lg bg-gray-700 text-center text-white'>

    <h1 className='text-white text-center pt-3'>Password Generator</h1>

    <div className='flex w-full shadow-md rounded-lg bg-white text-gray-800 mt-4 mb-3 '>
      <input 
        type="text"
        value={password}
        className="outline-none w-full py-2 px-3  bg-white text-gray-800 rounded-lg"
        placeholder="Password"
        readOnly
        ref = {passwordRef}
      />
      <button 
      onClick={copyPasswordToClibboard}
      className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 rounded-lg'
      >Copy</button>
    </div>
    
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
          min = {6}
          max = {100}
          values = {length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
        />
        <label htmlFor="">Length: {length}</label>
      </div>
        <div className='flex items-center gap-x-1'>
           <input 
           type="checkbox"
           defaultChecked={numberAllowed}
           id="numberInput"
           onChange={() => {
            setNumberAllowed((prev) => !prev)
           }}
           />
        </div>
        <label htmlFor="numberInput">Numbers</label>
    </div>
           <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="characterInput">Characters</label>
           </div>
  
  </div>
  
  
   
  )
}

export default App

// how to make div above on a div in tailwind css?
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div style={{backgroundColor:color}} className='w-full h-screen duration-200' >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo atque aut corrupti saepe magni magnam ut, sunt quia, eos, optio eaque expedita minima unde.</p>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className=' flex flex-wrap px-3 py-2 gap-3 shadow-lg bg-white rounded-3xl'>

          <button onClick={() => setColor("red")} className='rounded-full outline-none px-4 py-1 text-white' style={{backgroundColor: "red"}}>Red</button>

          <button onClick={() => setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "green"}}>Green</button>

          <button onClick={() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor: "blue"}}>Blue</button>

          <button onClick={() => setColor("crimson")}
          className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "crimson"}}>crimson</button>

          <button onClick={() => setColor("olive")}
          className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "olive"}}>olive</button>

          <button onClick={() => setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "purple"}}>Purple</button>

          <button onClick={() => setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "yellow"}}>yellow</button>

          <button onClick={() => setColor("gray")}
          className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "gray"}}>Gray</button>

          <button onClick={() => setColor("white")}
          className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor: "whitesmoke"}}>White</button>

          <button onClick={() => setColor("lavender")}
          className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor: "lavender"}}>Lavender</button>


          <button onClick={() => setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "black"}}>Black</button>

          
        </div>
        </div>
    </div>
  )
}

export default App

// which property is used for border radius
//  in tailwindcss?
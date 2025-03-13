import { useState } from 'react'
import './App.css'



function App(){

   let [counter, setCounter] = useState(5)

  const addValue = () => {
    // counter = counter + 1
    // setCounter(counter)

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  
  }


  const removeValue = () => {
    if(counter === 0){
      alert("counter is already at 0")
      return
    }
    counter = counter - 1
    setCounter(counter)
  
  }

  return(
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>

      <footer><h3>Footer: {counter}</h3></footer>
    </>
  )
}

export default App

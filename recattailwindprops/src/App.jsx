import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = 'bg-green-400 text-black p-d rounded-xl'>Tailwind test</h1>
      <Card username="Tulsi" btnText= "Click me" />
      <Card username="Ganga" btnText= "Explore me"/>
    </>
  )
}

export default App

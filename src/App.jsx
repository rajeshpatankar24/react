import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("")
  function handleName()
  {
    return setName ("I'm Rajesh")
  }
  function increment()
  {
    setCount((prevcount)=> prevcount+1)
    setCount((prevcount)=> prevcount+1)
  }
   function decrement()
  {
    return setCount(count-1)
  }
  return (
    <>
      <div>
        <h1>Hello {name}</h1>
        <button onClick={handleName}>Click Me</button>
        <hr></hr>
        <button onClick={increment}> +</button>
         <h1> {count}</h1>
        <button onClick={decrement}>-</button>
      </div>
    </>
  )
}

export default App

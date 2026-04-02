import { useState } from 'react'
import './App.css'
import UsersTables from './components/UsersTables';

function App() {
  const [count, setCount] = useState(0);
  const [dec,setDec]=useState(65);


  return (
    <>
    <h1>{count}</h1>
    <h2>{dec}</h2>
    <button onClick={() => setCount(count+1)}>++</button>
    <button onClick={() => setDec(dec-1)}>Minus</button>

    <div>
    <UsersTables/>
    </div>
    </>
  )
}

export default App

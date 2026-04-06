import { useState } from 'react'
import './App.css'
import UsersTables from './components/UsersTables';
import SansUseMemo from './components/SansUseMemo';
import AvecUseMemo from './components/AvecUseMemo';
import WithCallbackExample from './components/WithCallbackExample';
import WithoutCallbackExample from './components/WithoutCallbackExample';
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
    <SansUseMemo/>
    <AvecUseMemo/>
    <h2>usecalbck</h2>
    <WithoutCallbackExample/>
    <h2>usecalbck</h2>
    <WithCallbackExample/>
    </div>
    </>
  )
}

export default App

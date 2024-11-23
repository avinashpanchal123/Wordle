import { useState } from 'react';
import './App.css';
import WordleBoard from "./WordleBoard.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <WordleBoard/>
    </>
  )
}

export default App

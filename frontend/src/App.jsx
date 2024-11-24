import { useState } from 'react';
import './App.css';
import WordleGame from "./Wordle.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <WordleGame/>
    </>
  )
}

export default App

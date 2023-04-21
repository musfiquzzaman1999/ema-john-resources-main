import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Header/Shop'
import Home from './Components/Header/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Home></Home>
     
    </div>
  )
}

export default App

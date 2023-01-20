import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Product />
    </div>
  )
}

export default App

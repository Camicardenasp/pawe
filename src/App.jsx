import { useState } from 'react'
import './App.css'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Pawe</h1>
      <Product />
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <h3><i>Hechos especialmente para ti ...</i> </h3>
      <Products/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Products/>
      {/* <Product /> */}
    </div>
  )
}

export default App

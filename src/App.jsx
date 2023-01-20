import { useState } from 'react'
import './App.css'
import Product from './components/Product'

import Pawe from './assets/BlancoPawe.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={Pawe} alt="Pawe" />
      <Product />
    </div>
  )
}

export default App

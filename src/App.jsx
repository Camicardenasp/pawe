import './App.css'
import Navbar from './components/Navbar'
// import Products from './components/Products'
import CheckoutPage from './components/CheckoutPage'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h3><i>Hechos especialmente para ti ...</i> </h3>
      <CheckoutPage/>
      {/* <Products/> */}
    </div>
  )
}

export default App

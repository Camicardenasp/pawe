import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import CheckoutPage from './components/CheckoutPage'
import Root from './components/Root'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Checkout from './components/CheckoutForm/Checkout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/checkout-page' element={<CheckoutPage/>}/>
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    )
  )

  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  )
}

export default App

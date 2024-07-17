import './App.css'
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements
} from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import HomeLayout from './HomeLayout'
import Checkout from './pages/Checkout'
import { useState, useEffect, useContext } from 'react'
import { ProductsContext } from './context/ProductsContext'
import ShopContextProvider, { ShopContext } from './context/ShopContext'
import ProductDetails from './components/ProductDetails'

function App() {

  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  const getProducts = () => {
    fetch(`/api/products?organization_id=bc5b290b3e3a4d5d90426466523defa5&reverse_sort=false&Appid=6HVJ5A7MUNX2B2K&Apikey=70c333f3d3f64b32a9a03d81fe2e183e20240713081007078314`)
    .then(res => res.json())
        .then((data) => {
            setProducts(data.items)
            setLoading(false)
        })
        .catch((error) => console.error(error))
}

    useEffect(() => {
        getProducts();
    }, [loading])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />}/>
          <Route path='cart' element={<Cart />}>
          </Route>
          <Route 
              path=':id'
              element={<ProductDetails />}
          />
        </Route>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    )
  )

  return (!loading)?(
    <div>
      <ProductsContext.Provider value={{products, loading}}>
        <ShopContextProvider value={ShopContext}>
          <RouterProvider router={router}/>
        </ShopContextProvider>
      </ProductsContext.Provider>
    </div>
  ):null
}

export default App

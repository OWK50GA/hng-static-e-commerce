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
import { useState, useEffect } from 'react'
import { ProductsContext } from './context/ProductsContext'
import ShopContextProvider, { ShopContext } from './context/ShopContext'
import ProductDetails from './components/ProductDetails'

function App() {

  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const getProducts = () => {
    fetch(`/api/products?organization_id=9e8f9b0562ff49a8a24c8551faae5ea4&reverse_sort=false&Appid=PMYZMYVRTD3H7EI&Apikey=ec0b4d961b784772ae431c2d8f6d4b9120240925004337018696`)
    // https://shopee-api.p.rapidapi.com/shopee/v2/tw/shop/493265569/item/21725369961
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }
    )
        .then((data) => {
            setProducts(data.items)
            setLoading(false)
        })
        .catch(err => {
          console.error('Error fetching data: ', err);
          setError(err.message)
          setLoading(false)
        })
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

  if (loading) {
    return (
      <div className='text-blue-600 text-3xl mt-20 grid place-items-center'>Loading...</div>
    )
  }

  if (error) {
    return (
      <div className='text-blue-600 text-3xl mt-20 grid place-items-center w-fit mx-auto max-w-[50%] text-center'>
        An Error has occured. {error} <br />
        This is probably due to an API issue
      </div>
    )
  }

  return (!loading)?(
    <div>
      <ProductsContext.Provider value={{products, loading}}>
        <ShopContextProvider>
          <RouterProvider router={router}/>
        </ShopContextProvider>
      </ProductsContext.Provider>
    </div>
  ):(null)
}

export default App

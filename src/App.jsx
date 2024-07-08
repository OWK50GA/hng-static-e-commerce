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

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />}/>
          <Route path='cart' element={<Cart />}/>
        </Route>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

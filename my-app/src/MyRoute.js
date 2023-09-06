import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layouts from './pages/Layout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import NewCart from './redux/NewCart'
import Student from './redux/Student'

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Signup />} />
          <Route path='products' element={<Products />} />
          <Route path='productdetails/:productId' element={<ProductDetails />} /> 
          <Route path='cart' element={<Cart/>}/>
          {/* :productId will contain the id of the product, the value is placed with the help of params in ProductDetails.js */}
        </Route>
        <Route path='/redux/cart' element={<NewCart/>}/>
        <Route path='/redux/student' element={<Student/>}/>
      </Routes>
      


    </Router>
  )
}

export default MyRoute
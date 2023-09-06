import React, { useState, useEffect } from 'react'

import Slider from '../components/Slider'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))

  }, [])
  return (
    <>

      <Slider />
      <div class="container-fluid">
        <div class="row row-cols-1 row-cols-md-4 g-4">
      {products.slice(0,8).map((product,i)=>(
        // <Card name={product.title} img={product.image} price={product.price} />
        <Card item={product} key={i}/>


      ))}
      </div>
      </div>
      
{/* react toastify
react icons */}
    </>
  )
}

export default Home
// useEffect works when the browser loads
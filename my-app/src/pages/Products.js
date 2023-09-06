import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import axios from 'axios'

import IncrementDecrement from '../hooks/IncrementDecrement'



const Products = () => {
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(12)


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    })
    return (
        <>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-evenly'>
                    <div className='col-md-3'>
                        <h3>Departments</h3>
                        <a href='#'>Select All</a>
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Amazon Devices
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Appliances
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Arts,Crafts and Sewing
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Automobile
                            </label>
                        </div>
                        <h3>Deal Type</h3>
                        <ul className='list-unstyle'>
                            <li>  <a href='#' className='fw-bold text-decortation-none'>All deals</a> </li>
                            <li>  <a href='#' className=' text-decortation-none'>top deals</a> </li>
                            <li>  <a href='#' className=' text-decortation-none'>Best deals</a> </li>

                        </ul>


                    </div>
                    <div className='col-md-8'>
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {products.slice(0, limit).map((product,i) => (
                                // <Card name={product.title} img={product.image} price={product.price} />
                                <Card item={product} key={i}/>
                            ))}

                        </div>
                        <div className='d-flex justify-content-center my-3'>
                            <div className='col-6'>
                                {limit<products.lengt &&
                                <button className='btn btn-warning' onClick={()=>setLimit(limit+3)}>Load more</button>}

                                {limit>12 &&
                                <button className='btn btn-danger ms-2' onClick={()=>setLimit(limit-3)}>Show Less</button>}
                            </div>
                        </div>

                        <IncrementDecrement />
                    </div>
                </div>
            </div>
        </>
    )
}










/*
return (
  <>
  <div className="product-page">
      <div className="product-filter">
          <div className="product-link">
              <p><Link to="#">All deals</Link></p>
              <p><Link to="#">Available</Link></p>
              <p><Link to="#">Upcoming</Link></p>
              <p><Link to="#">Watchlist</Link></p>
          </div>
          <div className="product-filter-main">
              <p>Departments</p>
              <Link to='#'>Select All</Link>
              <div className="product-filter-select">
                  <input type="checkbox" name="" id=""/>
                  <label for="">as</label>
              </div>
              <div className="product-filter-select">
                  <input type="checkbox" name="" id=""/>
                  <label for="">as</label>
              </div>
              <div className="product-filter-select">
                  <input type="checkbox" name="" id=""/>
                  <label for="">as</label>
              </div>
              <div className="product-filter-select">
                  <input type="checkbox" name="" id=""/>
                  <label for="">as</label>
              </div>
              <div className="product-filter-select">
                  <input type="checkbox" name="" id=""/>
                  <label for="">as</label>
              </div>
              <div className="product-filter-select">
                  <input type="checkbox" name="" id=""/>
                  <label for="">as</label>
              </div>
              <div className="product-filter-select">
                  <input type="checkbox" name="" id=""/>
                  <label for="">as</label>
              </div>
              <div className="product-filter-select">
                  <input type="checkbox" name="" id=""/>
                  <label for="">as</label>
              </div>
          </div>

      </div>





      <div className="product-view">
          <div className="product-card">
              <div className="product-image">
                  <img src="/images/d.jpg" alt=""/>
              </div>
              <div className="product-detail">
                  <p>Sunset with a man in middle</p>
              </div>
          </div>
          <div className="product-card"></div>
          <div className="product-card"></div>
          <div className="product-card"></div>
          <div className="product-card"></div>
          <div className="product-card"></div>
          <div className="product-card"></div>
          <div className="product-card"></div>
      </div>
  </div>
  </>
)
}
*/
export default Products

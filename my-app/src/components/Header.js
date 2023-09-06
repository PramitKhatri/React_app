import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className="py-2 bg-body-tertiary border-bottom custom-nav">
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto">
        <li className="nav-item"><Link to="/" className="nav-link link-dark px-2 active" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to="/products" className="nav-link link-dark px-2">Products</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link link-dark px-2">Pricing</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link link-dark px-2">FAQs</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link link-dark px-2">About</Link></li>
      </ul>
      <ul className="nav">
        <li className="nav-item me-2"><Link to="/login" className="btn btn-primary px-2">Login</Link></li>
        <li className="nav-item ms-2"><Link to="/register" className="btn btn-warning px-2">Sign up</Link></li>
        <li className="nav-item ms-2"><Link to="/cart" className="btn btn-danger px-2">Cart</Link></li>
        <li className="nav-item ms-2"><Link to="/redux/cart" className="btn btn-light px-2">redux/cart</Link></li>
      </ul>
    </div>
  </nav>
  <header className="py-3 border-bottom">
    <div className="container d-flex flex-wrap justify-content-center">
      <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
        
        <span className="fs-4">Mero Store</span>
      </Link>
      <form className="col-8  mb-3 mb-lg-0" role="search">
        <input type="search" className="form-control border-2 border-grey" placeholder="Search..." aria-label="Search"/>
      </form>
    </div>
  </header>
    </>
  )
}

export default Header
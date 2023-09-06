import React, { useState, useEffect, Fragment } from 'react'
import { FaTrash } from 'react-icons/fa';  // this deletes the item import it by writing fatrash
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const cartData = localStorage.getItem('cartItems')
        setProducts(JSON.parse(cartData))
    }, [])

    //decrease the quantiuty of product

    const decreaseQty = (id) => {
        const updateproducts = products.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }  // ...item = item value doesnot changes only quantity
            }
            return item
        })
        setProducts(updateproducts)
        localStorage.setItem('cartitems', JSON.stringify(updateproducts))
    }

    //increasing the quantuty of product
    const increaseQty = (id) => {
        const updateproducts = products.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }  // ...item = item value doesnot changes only quantity
            }
            return item
        })
        setProducts(updateproducts) //this changes the data in the view and not only in the local storage. works like a constant update
        localStorage.setItem('cartitems', JSON.stringify(updateproducts)) // this updates the local storage

    }

    //remove of product
    const removeCartHandler = (id, name) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))
        const filterCart = cartItems.filter((item) => item.id !== id)
        localStorage.setItem('cartItems', JSON.stringify(filterCart))
        setProducts(filterCart)
        toast.success(`${name} is removed from the cart`)

    }

    return (
        <>
            <ToastContainer theme='colored' position='top-center' />
            <div className='container'>
                <div className='row d-flex justify-content-between my-4'>
                    {products.length == 0 ?
                    <><div className='d-flex justify-content-center'>
                        <h2 className='my-2 text-danger text-center'>Your Cart is Empty</h2>
                        <Link to="/products" className='btn btn-outline-danger col-2 mx-3 text-center'>Shop Now</Link>
                        </div>
                        </>
                        : (
                            <>


                                <div className='col-md-8'>
                                    {products.map((item, i) => (
                                        <Fragment key={i}>
                                            <hr />
                                            <div className='row d-flex align-items-center'>
                                                <div className='col-2'>
                                                    <img src={item.image} alt={item.title} width='50' />
                                                </div>
                                                <div className='col-3'>
                                                    <strong>{item.title}</strong>
                                                </div>
                                                <div className='col-2 text-warning'>
                                                    ${item.price}
                                                </div>
                                                <div className='col-3'>
                                                    <div className='d-flex'>
                                                        <button className='btn btn-danger' onClick={() => decreaseQty(item.id)}>-</button>
                                                        &nbsp;
                                                        <input type='number' className='form-control border-0 text-center' readOnly value={item.quantity} />
                                                        &nbsp;
                                                        <button className='btn btn-primary' onClick={() => increaseQty(item.id)}>+</button>

                                                    </div>
                                                </div>
                                                <div className='col-1'>
                                                    <button className='btn btn-danger' onClick={() => removeCartHandler(item.id, item.title)}><FaTrash /></button>
                                                </div>
                                            </div>

                                        </Fragment>
                                    ))}

                                </div>
                                <div className='col-md-3'>
                                    <h5>Cart Summary</h5>
                                    <hr />
                                    <span><strong>Units:  </strong> {products.reduce((ac, item) => (ac + Number(item.quantity)), 0)} (Units)
                                    </span>
                                    <hr />
                                    <span><strong>Total:  </strong> ${products.reduce((ac, item) => (ac + item.quantity * item.price), 0)}</span>
                                    <hr />
                                    <button className='btn btn-warning'>CheckOut</button>
                                </div>

                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Cart


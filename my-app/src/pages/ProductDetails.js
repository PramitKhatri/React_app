import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RatingStar from '../components/RatingStar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//the two imports are form the github page of react-toastify

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(() => {
        const pid = params.productId
        axios.get(`https://fakestoreapi.com/products/${pid}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    })

    //handling add to cart
    const addToCart=()=>{
        // fetching data from local storage of exists otherwise it will assign empty array
        const cartItems=JSON.parse(localStorage.getItem('cartItems')) || []

        //assign product information in an object variable
        const productItem={
            //key:value   key can be named anything
            id:product.id,
            title:product.title,
            price:product.price,
            description:product.description,
            rating:product.rating,
            image:product.image,
            quantity:1
        }
        // check if the product is already exists in the cart
        const existingItem=cartItems.find((item)=>item.id===product.id)
        if(existingItem){
            toast.error('product is already in the cart')
        }
        else{
            cartItems.push(productItem)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            toast.success(`${productItem.title} is added to cart`)
        }
    }
    return (
        <>
        <ToastContainer theme='colored' position='top-center'/>
            <div className='container my-3'>
                <div className='row d-flex justify-content-evenly align-items-center shadow'>
                    <div className='col-md-5'>
                        <img src={product.image} alt={product.title} className='img-fluid' />
                    </div>
                    <div className='col-md-5'>
                        <h2>{product.title}</h2>
                        <h3>${product.price}</h3>
                        <p>{product.description}</p>
                        <p><b>Category</b>: {product.category}</p>
                        {product.rating && <RatingStar rating={product.rating.rate} />
                        }
                        <br />
                        <button className='btn btn-warning' onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
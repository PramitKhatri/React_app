import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import { Link } from 'react-router-dom'

const NewCart = () => {
    const data = useSelector(store => store.cart)
    return (
        <>
        <h2 className='text-primary'>The cart Number is {data.cart}</h2>
        <Item/>
        <Link to="/redux/student" className='btn btn-info'>Student name</Link>

        </>
    )
}

export default NewCart
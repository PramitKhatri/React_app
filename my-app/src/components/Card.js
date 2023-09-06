import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <>
      <div class="col">
        <div class="card shadow">
          <img src={props.item.image} class="card-img-top" alt={props.item.title} />
          <div class="card-body">
            <h5 class="card-title">{props.item.title.slice(0, 19)}...</h5>
            <h6>${props.item.price}</h6>
            <Link className='btn btn-success' to={`/productdetails/${props.item.id}`}>View Details</Link>
          </div>
        </div>
      </div>

      {/* <div class="col">
            <div class="card shadow">
              <img src={props.img} class="card-img-top" alt={props.name} />
              <div class="card-body">
                <h5 class="card-title">{props.name.slice(0,19)}...</h5>
                <h6>${props.price}</h6>
                <button className='btn btn-success'>View Details</button>
              </div>
            </div>
          </div> */}



    </>
  )
}

export default Card
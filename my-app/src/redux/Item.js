import React from "react";
import { useDispatch } from "react-redux";

const Item=()=>{
    const dispatch=useDispatch()

    //add
    const add=()=>(
        dispatch({type:"ADD_TO_CART"})//type has no special meaning and is just a key to pass values through. name it anything
        
    )
    //remove
    const remove=()=>(
        dispatch({type:"REMOVE_FROM_CART"})  
    )

return(
    <>
    <button className="btn btn-primary" onClick={add}>Add to cart</button>
    &nbsp;&nbsp;&nbsp;
    <button className="btn btn-danger" onClick={remove}>Remove from cart</button>
    

    </>
)
}

export default Item
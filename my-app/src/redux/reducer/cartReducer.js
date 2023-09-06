const initialData={
    cart:0
}

const cartReducer=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return{
                cart:++state.cart
            }

            case "REMOVE_FROM_CART":
                return{
                    cart:--state.cart
                }
            
        default:
            return state
    }

}

export default cartReducer  //this is exporting the function and not the actual file 
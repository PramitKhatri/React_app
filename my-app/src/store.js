import { combineReducers, createStore } from "redux";
import cartReducer from './redux/reducer/cartReducer'
import studentReducer from "./redux/reducer/studentReducer";


const reducer=combineReducers({
    cart:cartReducer,
    student:studentReducer
})

const dataStore=createStore(reducer)

export default dataStore
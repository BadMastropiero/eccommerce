import {combineReducers} from 'redux';


// reducers
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


export default combineReducers({
    user: userReducer,
    cart: cartReducer
})
import { UPDATE_CART } from "./Types";

const CartReducer = (state, {type, payload}) => {
    switch(type){
        case UPDATE_CART:
            return {
                ...state,
                cart: payload
            }
        default:
            return state;
    }
};

export default CartReducer;
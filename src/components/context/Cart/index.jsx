import * as CartActionTypes from './Types';
import CartContext from './Context';
import { useReducer, useContext } from 'react';
import CartReducer from './Reducer';

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const initialState = () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    }) ;
    
    const [state, dispatch] = useReducer(CartReducer, initialState());

    const addProduct = (prod) => {
        let updatedCart = [];
        const isBookInCart = state.cart.some((product) => product._id === prod._id);
        if (!isBookInCart){
            updatedCart = [ ...state.cart, { ...prod,  qty: 1}];
        } else {
            updatedCart = state.cart.map( product => {
                if(product._id === prod._id){
                    product.qty++
                }
                return product;
            })
        }
        dispatch({
            type: CartActionTypes.UPDATE_CART,
            payload: updatedCart,

        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeProduct = (prod) => {
        let updatedCart = [];
        const produ = state.cart.find((product) => product._id === prod._id );  
        if (produ.qty === 1) {
            updatedCart = state.cart.filter((product) => product._id !== prod._id)
        } else {
            updatedCart = state.cart.map( product => {
                if(product._id === prod._id){
                    product.qty--
                }
                return product;
            })
        }
        dispatch({
            type: CartActionTypes.UPDATE_CART,
            payload: updatedCart,

        })
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        let updatedCart = [];
        dispatch({
            type: CartActionTypes.UPDATE_CART,
            payload: [],  
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart));        
    };

    return (
    <CartContext.Provider value={{ ...state, addProduct, removeProduct, clearCart }}>{ children }</CartContext.Provider>
    )
};

export default CartProvider
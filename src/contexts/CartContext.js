import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './CartReducer';

export const CartContext = createContext()

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const user = localStorage.getItem('loggeduser') ? JSON.parse(localStorage.getItem('loggeduser')) : null;
const initialState = { cartItems: storage, ...sumItems(storage), checkout: false, user: user };

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const increaseCount = payload => {
        dispatch({type: 'INCREASE', payload})
    }

    const decreaseCount = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProductCart = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const removeProductCart = payload => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }

    const emptyCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const handleCheckout = () => {
        console.log('CHECKOUT', state);
        dispatch({type: 'CHECKOUT'})
    }

    const logUser = payload => {
      localStorage.setItem('loggeduser', JSON.stringify(payload));
      dispatch({type: 'LOG_USER', payload});
    }

    const logOut = () => {
      localStorage.removeItem('loggeduser');
      dispatch({type: 'LOGOUT_USER'});
    }

    const contextValues = {
        removeProductCart,
        addProductCart,
        increaseCount,
        decreaseCount,
        emptyCart,
        handleCheckout,
        logUser,
        logOut,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}

export default CartContextProvider;

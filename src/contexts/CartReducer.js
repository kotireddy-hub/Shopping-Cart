
const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const sumItems = cartItems => {
    Storage(cartItems);
    let totalItems = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + (product.price.replaceAll("$", "")) * product.quantity, 0).toFixed(2);
    let user;
    return { totalItems, total, user }
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            console.log(action.payload);
            return {
                ...state,
                storeproducts: action.payload
            }
        case "ADD_ITEM":
            if (!state.cartItems.find(item => item.code === action.payload.code)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems],
                checkout: false,
                user: state.user
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item.code !== action.payload.code)),
                cartItems: [...state.cartItems.filter(item => item.code !== action.payload.code)],
                user: state.user
            }
        case "INCREASE":
            state.cartItems[state.cartItems.findIndex(item => item.code === action.payload.code)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems],
                user: state.user
            }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item.code === action.payload.code)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems],
                user: state.user
            }
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
                user: state.user
            }
        case "CLEAR":
                return {
                    cartItems: [],
                    ...sumItems([]),
                    user: state.user
                }
        case "LOG_USER":
                return {
                  ...state,
                    user: action.payload
                }
        case "LOGOUT_USER":
                return {
                  ...state,
                    user: null
                }
        default:
            return state

    }
}

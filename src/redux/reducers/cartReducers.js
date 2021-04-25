import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {name: "HP Laptop", id: 1},
        {name: "Asus Laptop", id: 2},
        {name: "Lenovo Laptop", id: 3},
        {name: "Mac Laptop", id: 4},
        {name: "Dell Laptop", id: 5}
    ]
}

const cartReducers = ( state=initialState, action ) => {
    switch(action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newAddedCart = [...state.cart, newItem];
            return { ...state, cart: newAddedCart }
        case REMOVE_FROM_CART:
            const id = action.id;
            const newCart = state.cart.filter(item => id !== item.cartId );
            return { ...state, cart: newCart }
        default: return state;
    }
}

export default cartReducers;
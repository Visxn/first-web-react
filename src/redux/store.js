import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';


const initialState = {
    carritoItems: []
};

function carritoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log("Añadiendo al carrito:", action.payload);
            return {
                ...state,
                carritoItems: [...state.carritoItems, action.payload]
            };

        case 'REMOVE_FROM_CART':
            console.log("Eliminando del carrito:", action.payload);
            const indexToRemove = state.carritoItems.findIndex(item => item.id === action.payload.id);
            if (indexToRemove !== -1) {
                const newCarritoItems = [...state.carritoItems.slice(0, indexToRemove), ...state.carritoItems.slice(indexToRemove + 1)];
                return {
                ...state,
                carritoItems: newCarritoItems
                };
            }


        default:
            return state;
    }
}


const store = configureStore ({
    reducer: {
        carrito: carritoReducer,
        cart: cartSlice
    }
});

export default store;
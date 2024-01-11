export const addToCart = (producto) => ({
    type: 'ADD_TO_CART',
    payload: producto
});

export const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART', 
        payload: item
    }
}
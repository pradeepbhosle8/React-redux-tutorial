

export const addToCart = (product, quantity) => (dispatch, getState) => {
    console.log(quantity)
    const cartItem = {
        id: product.id,
        name: product.title,
        price: product.price,
        countInstack: product.rating.count,
        quantity: quantity
    }

    dispatch({type:'ADD_TO_CART', payload:cartItem})

    localStorage.setItem('cartItems', JSON.stringify(getState().addToCartReducer.cartItems))

}
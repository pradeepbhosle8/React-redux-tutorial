


export const addToCartReducer = (state={cartItems: []}, action) => {
    switch(action.type)
    {
        case 'ADD_TO_CART':

        const alreadyExists = state.cartItems.find(item => item.id === action.payload.id)
        if(alreadyExists)
            {
                return {
                    ...state,
                    cartItems :state.cartItems.map(item => item.id === action.payload.id ? action.payload : item)
                }
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }   
           
        default:
            return state    
    }
}
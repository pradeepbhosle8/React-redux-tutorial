import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED,
    // id
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAILED
} from '../constants';


/*********************************
 * Get All Product
 */
export const getAllProductsReducer = (state={products: []},  action ) =>{

    switch(action.type)
        {
            case GET_PRODUCTS_REQUEST:
                return {
                    loading: true,
                }
            case GET_PRODUCTS_SUCCESS:
                return {
                    loading: false,
                    products: action.payload
                }
            case GET_PRODUCTS_FAILED:
                return {
                    loading: false,
                    error : action.payload
                }
            default :
                return state            
        }

}


/*********************************
 * Get Single Product using ID
 */
 export const getProductByIdReducer = (state={product: []},  action ) =>{

    switch(action.type)
        {
            case GET_PRODUCT_BY_ID_REQUEST:
                return {
                    loading: true,
                }
            case GET_PRODUCT_BY_ID_SUCCESS:
                return {
                    loading: false,
                    product: action.payload
                }
            case GET_PRODUCT_BY_ID_FAILED:
                return {
                    loading: false,
                    error : action.payload
                }
            default :
                return state            
        }

}

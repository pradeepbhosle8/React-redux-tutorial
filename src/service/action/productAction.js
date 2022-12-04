
import axios from "axios";
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED,
    //
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAILED
} from '../constants';



/*********************************
 * Get All Products 
 */
export const getAllProducts =() => dispatch => {

    dispatch({
        type: GET_PRODUCTS_REQUEST
    })

    axios.get('https://fakestoreapi.com/products')
    .then((res) => {
        // console.log(res.data);

        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: res.data
        })
       })
       .catch(
        err =>{ 
        console.error(err);
        dispatch({
            type: GET_PRODUCTS_FAILED,
            payload:err
        })    
    })  


}


/*********************************
 * Get Single Product using ID
 */

 export const getProductById =(productId) => dispatch => {

    dispatch({
        type: GET_PRODUCT_BY_ID_REQUEST,
    })
    // console.log(productId)
    // console.log(`https://fakestoreapi.com/products/${productId.id}}`);
    axios.get(`https://fakestoreapi.com/products/${productId.id}`)
    .then((res) => {
        // console.log(res.data);

        dispatch({
            type: GET_PRODUCT_BY_ID_SUCCESS,
            payload: res.data
        })
       })
       .catch(
        err =>{ 
        console.error(err);
        dispatch({
            type: GET_PRODUCT_BY_ID_FAILED,
            payload:err
        })    
    })  


}
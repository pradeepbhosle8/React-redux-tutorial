
import axios from "axios";
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED
} from '../constants';

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
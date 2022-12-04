
import {combineReducers} from 'redux';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
 import thunk from 'redux-thunk';
import { 
  getAllProductsReducer,
  getProductByIdReducer,
  
 } from "./reducer/productReducer";
 import {
  addToCartReducer
 } from './reducer/cartReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { json } from 'react-router-dom';


const finalReducer = combineReducers({
    
    getAllProductsReducer : getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    addToCartReducer: addToCartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
  addToCartReducer : {cartItems:cartItems}
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsDenylist, actionsCreators and other options
  });

const store = createStore(
    finalReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk )
        // other store enhancers if any
      ) 
    )

export default store    

# Getting Started with React+Redux Implementation

```
npm i redux react-redux --save
```

Folder Structure


  - src
    * service
       * action
         * productAction.js
       * reducer
         * productReducer.js
      * constant.js
      * store.js
      
> **redux devtools extension How to create**
```
npm i @redux-devtools/extension

```
> Service folder > action Folder
> productAction.js
```
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

    axios.get('https://localhost:8080/products')
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
```

> Service folder > reducer Folder
> productReducer.js 

```
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED
} from '../constants';


export const getAllProductsReducer = (state={},  action ) =>{

    switch(action.type)
        {
            case GET_PRODUCTS_REQUEST:
                return {
                    loading: true,
                }
            case GET_PRODUCTS_SUCCESS:
                return {
                    loading: false,
                    product: action.payload
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

```

> Service folder > 
> constants.js

```
export const  GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const  GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';
```
> Service folder > 
> store.js

```
import {combineReducers} from 'redux';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
***Note: createStore Decripted so use this type ***
import thunk from 'redux-thunk';
import { getAllProductsReducer } from "./reducer/productReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
***Note: composeWithDevTools react devtool extenstion ***
const finalReducer = combineReducers({
    
    getAllProductsReducer : getAllProductsReducer

})


const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsDenylist, actionsCreators and other options
  });

const store = createStore(
    finalReducer,
    composeWithDevTools(
        applyMiddleware(thunk )
        // other store enhancers if any
      ) 
    )

export default store    

```
> Root folder > 
> index.js

```
import { Provider } from 'react-redux';
import store from '../src/service/store';

    <Provider store={store}>
      <App />
    </Provider>
```

> pages folder > Home.js
> Home.js

```
import { getAllProducts } from '../../service/action/productAction';
import {useEffect, useState} from 'react';

import { useDispatch } from 'react-redux';

export default function Home() {
const [products, setproducts] = useState([]);
    const dispatch = useDispatch()
    
        useEffect(  () =>{
       axios.get('https://fakestoreapi.com/products')
           .then((res) => {
            // console.log(res.data);
            setproducts(res.data);
           })
           .catch(err => console.error(err))  

           dispatch(getAllProducts())
    },[])
}
```



  

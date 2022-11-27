
import {combineReducers} from 'redux';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
 import thunk from 'redux-thunk';
import { getAllProductsReducer } from "./reducer/productReducer";
import { composeWithDevTools } from '@redux-devtools/extension';


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

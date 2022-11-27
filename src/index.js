import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import jQuery  from 'jquery'; 
// import Popper from 'popper.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import '../src/assets/js/lightslider.js';
// import '../src/assets/css/lightslider.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/assets/css/style.css';

import { Provider } from 'react-redux';
import store from '../src/service/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
 
);



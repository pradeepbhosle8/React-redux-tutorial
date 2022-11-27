import React from 'react'
// import Products from '../../assets/api/Product'; 
import Product from '../Screens/product';

import axios from 'axios';
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

  return (
    <>
 
    <section id="breadcrumb" className="m-0 pt-2 pb-2">
        <div className="container">
            <div className="">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Bookmark store</li>
                    </ol>
                  </nav>
            </div>
        </div>
    </section>

    <section id="vendorBookmarkstore">
        <div className="container">
            <div className="row">

                
                <div className="col-xl-12 col-sm-12">
                <div className="Rightsecton p-3 mb-4 mt-0 pt-2 row product" >

                  {
                    products.length > 0  && (products.map((product, i)=>{
                      return  <Product product={product} key={i} />
                    }))
                  }
                  {/* {
                    (products.length > 0 && products.map((product, i) => {
                      return  <Product product={product} key={i} />
                    }) )
                  } */}
                
					

                </div>  
                </div>
                
                
            </div>
        </div>
    </section>
    
    </>
  )
}

import React from 'react'
// import Products from '../../assets/api/Product'; 
import Product from '../Screens/product';

import axios from 'axios';
import { getAllProducts } from '../../service/action/productAction';
import {useEffect, useState} from 'react';

import { useDispatch , useSelector } from 'react-redux';

export default function Home() {

    const getAllProductsState = useSelector(state => state.getAllProductsReducer)

    const {loading, products, error} = getAllProductsState;

    
    const dispatch = useDispatch()
    
    useEffect(  () =>{


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
                  loading ? <div className="spinner-border text-primary m-auto" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div> : 
                  error  ? <div> <h1>Something Wrong</h1> </div> : 
                  (products ? 
                    products.map((products ,i) => {
                      // console.log(product ,i );  
                    return  <Product products={products} key={i} />
                    })
                    :
                  <div><h1>No Data Found</h1> </div>    )
                }
                
					

                </div>  
                </div>
                
                
            </div>
        </div>
    </section>
    
    </>
  )
}

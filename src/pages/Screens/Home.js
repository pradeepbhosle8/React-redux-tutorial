import React from 'react'
import Products from '../../assets/api/Product'; 
import Product from '../Screens/product';


export default function Home() {
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
                    Products.map((product, i)=>{
                        return <Product product={product} key={i} />
                    })
                  }
					
					

                </div>  
                </div>
                
                
            </div>
        </div>
    </section>
    
    </>
  )
}

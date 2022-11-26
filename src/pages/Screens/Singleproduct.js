import React from 'react'
import Products from '../../assets/api/Product'
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating'


export default function Singleproduct({match}) {
    const productId = useParams();
    console.log(productId)  
    
    const product = Products.find(product => product.id == productId.id);
    console.log(product);


    return (
        <>
            <section id="breadcrumb" className="m-0 pt-2 pb-2">
                <div className="container">
                    <div className="">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{product.category}</li>
                                <li className="breadcrumb-item active" aria-current="page">{productId.id}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section id="singleProductView">


                <div className="container">
                    <div className="row">

                        <article className="col-md-12 border rounded shadow-sm">

                            <div className="col-12 img-product-gallery-wrapper">
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="lightslider-Wrapper">
                                            <ul id="image-gallery" className="gallery list-unstyled cS-hidden">
                                                <li data-thumb={product.image}>
                                                    <img src={product.image}  />
                                                </li>
                                                {/* <li data-thumb="../assets/images/slider/tv1.png">
                                                    <img src="../assets/images/slider/tv1.png" />
                                                </li>
                                                <li data-thumb="../assets/images/slider/tv2.png">
                                                    <img src="../assets/images/slider/tv2.png" />
                                                </li>
                                                <li data-thumb="../assets/images/slider/tv.png">
                                                    <img src="../assets/images/slider/tv.png" />
                                                </li>
                                                <li data-thumb="../assets/images/slider/tv1.png">
                                                    <img src="../assets/images/slider/tv1.png" />
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 imgDescWrapper">
                                        <div className="img-product-description flex justify-content-between ">
                                        <h3>{product.category}</h3>
                                            <h2>{product.title}</h2>
                                            
                                            <div className="img-product-review d-flex align-items-center">
                                                <ul className="review">
                                                    <li>
                                                        <div className="star-rating">
                                                            <span className="rating-stars">
                                                            <Rating
                                                            style={{color:'orange'}}
                                                            initialRating={product.rating.rate}
                                                            emptySymbol="fa-regular  fa-star fa-fw fa-2x"
                                                            fullSymbol="fa-solid fa-star fa-2x"
                                                            />
                                                                {product.rating.rate}
                                                                {/* <i className="fa fa-star checked"></i>
                                                                <i className="fa fa-star checked"></i>
                                                                <i className="fa fa-star checked"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i> */}

                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="p">
                                                            <span>{product.rating.count}</span>
                                                          
                                                        </div>
                                                    </li>
                                                  
                                                </ul>

                                                <div className="img-product-action ms-auto mt-3 mt-0">
                                                    <span>
                                                        <a href="">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </span>

                                                    <span className="compare">
                                                        <a href="">
                                                            <i className="fa fa-balance-scale"></i>
                                                        </a>
                                                    </span>
                                                </div>



                                            </div>
                                             <div className='text-justify'>
                                                {product.description}
                                                </div>                                                              
                                            <div className="clearfix"></div>

                                          
                                                <hr/>
                                            <button className="btn btn-danger text-center">Add To cart</button>



                                        </div>
                                    </div>

                                </div>
                            </div>

                            

                        </article>

                        



                    </div>
                </div>


            </section>

        </>
    )
}

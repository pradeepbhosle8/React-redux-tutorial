import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'

export default function Products({ products, i }) {
    return (
        <div className="col-xl-3 col-sm-6 mb-4 items" key={i}>
            <div className="custom-card shadow sm h-100">


                <div className="custom-card-img">
                    <Link to={`product/${products.id}`} >
                        <img src={products.image} alt="" />
                    </Link>
                </div>

                <div className="custom-card-body p-3">
                    <h6 className="mb-3 ">
                        <Link to={`products/${products.id}`} className="text-secondary">{products.title}</Link>
                    </h6>
                    <p className="text-secondary  mb-2">
                        <i className="fas fa-tag"></i>
                        <s>&#8377;{products.price}</s>
                        <span className="fw-bold text-danger ms-3">&#8377;{products.price}</span>
                    </p>
                    <p className="text-secondary">

                        {products.description}
                    </p>


                    <div className="rating mt-3 text-muted d-flex justify-content-between">
                    
                        <span className="rating-stars badge bg-warning text-dark ">
                        <Rating
                        style={{color:'red'}}
                        initialRating={products.rating.rate}
  emptySymbol="fa-regular  fa-star fa-fw fa-1x"
  fullSymbol="fa-solid fa-star fa-1x"
/>
                            {products.rating.rate}
                            <span className='ms-3'>Ratings</span>

                        </span>
                        <span className='badge bg-warning text-dark'>{products.rating.count}</span>


                    </div>
                    <div className="custom-card-badge mt-3 text-center ">
                        <a className="btn btn-danger btn-compaire">Add to cart</a>
                    </div>
                    <div className="new-arrivals bg-danger bottom">
                        <i className="fas fa-share-alt-square sa"></i>
                        <ul className="submenu">
                            <li><a href="#" className="facebook"><i className="fab fa-facebook-square fb"></i></a></li>
                            <li><a href="#" className="twitter"><i className="fab fa-twitter-square tw"></i></a></li>
                            <li><a href="#" className="googlePlus"><i className="fab fa-google-plus-square gp"></i></a></li>
                            <li><a href="#" className="instagram"><i className="fab fa-instagram-square"></i></a></li>
                        </ul>
                    </div>
                    <a href="#" className="heart bg-success float-end">
                        <i className="fas fa-heart sa"></i>

                    </a>
                </div>
            </div>
        </div>
    )
}

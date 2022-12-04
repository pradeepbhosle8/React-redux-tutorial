import React, { useState, useEffect } from 'react'
import Products from '../../assets/api/Product'
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../service/action/productAction';
import {addToCart} from '../../service/action/cartAction';



export default function Singleproduct({ match }) {
    const productId = useParams();
    // console.log(productId);
    // console.log()

    const products = [];

    const dispatch = useDispatch();


    const getproductbyid = useSelector(state => state.getProductByIdReducer);
    // console.log(getproductbyid)
    const { loading, product, error } = getproductbyid;
    // console.log(product)

    const [quantity, setQuantity] = useState(1);

    // add to cart funvction
    const addtoCart = () => {
        // alert(quantity)
        dispatch(addToCart(product, quantity))
        
    }

    useEffect(() => {
        dispatch(getProductById(productId));

    }, []);

    return (
        <>
            <div className="container">
                {
                    loading ? <div className="spinner-border text-primary m-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> :
                        error ? <div> <h1>Something Wrong</h1> </div> :
                            (
                                <div className='container'>
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




                                        <article className="col-md-12 border rounded shadow-sm">

                                            <div className="col-12 img-product-gallery-wrapper">
                                                <div className="row">

                                                    <div className="col-lg-6">
                                                        <div className="lightslider-Wrapper">
                                                            <ul id="image-gallery" className="gallery list-unstyled cS-hidden">
                                                                <li data-thumb={product.image}>
                                                                    <img src={product.image} />
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
                                                                                {/* {product.map(home => <div>{home.rate}</div>)} */}
                                                                                {/* <Rating
                                                                                        style={{ color: 'orange' }}
                                                                                        initialRating={product.rating.rate}
                                                                                        emptySymbol="fa-regular  fa-star fa-fw fa-2x"
                                                                                        fullSymbol="fa-solid fa-star fa-2x"
                                                                                    />
                                                                                    {product.rating.rate} */}


                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="p">
                                                                            {/* <span>{product.rating.count}</span> */}

                                                                        </div>
                                                                    </li>

                                                                </ul>

                                                                <h4 className='mt-2'><span className="fw-bold text-danger ms-3">₹  {product.price} </span></h4>

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


                                                            <hr />
                                                            <div className='d-flex '>
                                                            <select className='form-select me-5' name="qumtity" id="qumtity" onChange={(e) =>{setQuantity(e.target.value)}}>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                            <button className="btn btn-danger text-center w-100" onClick={addtoCart}>Add To cart</button>

                                                            </div>
                                                            


                                                        </div>
                                                    </div>

                                                </div>
                                            </div>



                                        </article>








                                    </section>

                                </div>
                            )
                }


            </div>
        </>
    )
}

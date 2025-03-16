import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import ReactStars from 'react-rating-stars-component';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    const props = { 
            width: 400, 
            height: 500, 
            zoomWidth: 500, 
            img: "https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1200,h=600,dpr=2.0/2023/01/Omega-2-1-1.jpg" 
    };
  return (
    <>
        <Meta title={"Single Product"}/>
        <BreadCrumb title='Product Name'/>
        <div className="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl p-3">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div><img src="https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1200,h=600,dpr=2.0/2023/01/Omega-2-1-1.jpg" alt="" className='img-fluid'/></div>
                            <div><img src="https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1200,h=600,dpr=2.0/2023/01/Omega-2-1-1.jpg" alt="" className='img-fluid'/></div>
                            <div><img src="https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1200,h=600,dpr=2.0/2023/01/Omega-2-1-1.jpg" alt="" className='img-fluid'/></div>
                            <div><img src="https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1200,h=600,dpr=2.0/2023/01/Omega-2-1-1.jpg" alt="" className='img-fluid'/></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className='border-bottom'>
                                <h3 className='title'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>
                                <div className='d-flex align-items-center gap-10'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                                    <p className='mb-0 t-review'>( 2 Reviews )</p>
                                </div>
                                <a className='review-btn' href='#review'>Write a Review</a>
                            </div>
                            <div className="border-bottom py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Type: </h3> 
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Brand: </h3> 
                                    <p className='product-data'>Havels</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Category: </h3> 
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Tags: </h3> 
                                    <p className='product-data'>Watch Havels</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Availability: </h3> 
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column my-2">
                                    <h3 className='product-heading'>Size : </h3> 
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className='product-heading'>Color : </h3> 
                                    <Color />
                                </div>
                                <div className="d-flex gap-10 flex-row my-2 align-items-center gap-15 mb-3">
                                    <h3 className='product-heading'>Quantity : </h3> 
                                    <div className="">
                                        <input 
                                            type="number" 
                                            name="" 
                                            min={1}
                                            max={16}
                                            className='form-control'
                                            style={{width: "70px"}} 
                                            id="" />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>Add To Cart</button>
                                        <button className='button signup'>Buy It Now</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15 mb-3">
                                    <div>
                                        <a href=""> <TbGitCompare className='fs-5 me-2'/> Add To Compare</a>
                                    </div>
                                    <div>
                                        <a href=""><AiOutlineHeart className='fs-5 me-2'/>  Add To Wishlist</a>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Shipping & Returns: </h3> 
                                    <p className='product-data'>Free shipping and returns available 
                                        on all orders! We ship to all US domestic orders within
                                        <b>5-10 business days!</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h4 className="description">Description</h4>
                        <div className="bg-white p-3 backshadow">
                        <p className="p-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum, placeat velit ut, culpa accusamus sed doloribus expedita reprehenderit voluptas perspiciatis magni. Quaerat repellendus tenetur nemo deserunt corporis eaque aliquid.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id='review' className="reviews-wrapper pb-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h4>Reviews</h4>
                        <div className="review-inner-wrapper backshadow">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <p className='mb-0'>Based on 2 Reviews</p>
                                </div>
                                {
                                    orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href="">
                                                Write a Review
                                            </a>
                                        </div>
                                    )
                                }
                            </div>
                            <div  className="review-form py-4">
                                <form action="" className='d-flex flex-column gap-15'>
                                   <h4>Write A Review</h4>
                                    <div>
                                        <textarea 
                                            name='' 
                                            id='' 
                                            className='w-100 form-control' 
                                            cols="30"
                                            rows="4"
                                            placeholder='Write your review here.'
                                        >
                                        </textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h6 className='mb-0'>Connor</h6>
                                    </div>
                                    <p className='mt-3'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Cupiditate nisi doloremque fugiat omnis corporis perferendis accusantium. 
                                        Pariatur voluptate, quasi incidunt ratione odio nulla, 
                                        facere doloribus officia, rerum voluptates tempore esse?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className='section-heading'>Our Popular Products</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    </>
  )
}

export default SingleProduct
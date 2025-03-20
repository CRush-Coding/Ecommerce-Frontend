import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import watch from '../images/watch.jpg'

const Checkout = () => {
  return (
    <>
        <div className="checkout-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className='website-name'>Dev Corner</h3>
                            <nav style={{"--bs-breadcrumb-divider:": ">"}} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link className='text-dark' href="/cart">Cart</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Information</li>
                                    <li className="breadcrumb-item active" aria-current="page">Shipping</li>
                                    <li className="breadcrumb-item active" aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <h4 className="title total">
                                Contact Information
                            </h4>
                            <p className="user-details">
                                Some Person (personemail@gmail.com)
                            </p>
                            <h4 className='mb-3'>Shipping Address</h4>
                            <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select name="" id="" className="form-control form-select">
                                        <option value="" selected disabled>Select Country</option>
                                        <option value="">Australia</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='First Name' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Last Name' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Address' className="form-control w-100" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Apartment, Suite, etc' className="form-control w-100" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='City' className="form-control w-100" />
                                </div>
                                <div className='flex-grow-1'>
                                    <select name="" id="" className="form-control form-select">
                                        <option value="" selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Zip Code' className="form-control w-100" />
                                </div>
                                <div className="w-100">
                                    <div className="justify-content-between align-items-center d-flex">
                                        <Link to='/cart' className='text-dark'><BiArrowBack className='me-2'/> Return to Cart</Link>
                                        <Link to='/cart' className='button'>Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 align-items-center mb-2'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative checkout1'>
                                        <span 
                                            style={{top : "-20px" , right : "-5px" }}
                                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                                            1
                                        </span>
                                        <img className='img-fluid' src={watch} alt="product" />
                                    </div>
                                    <div>
                                        <h5 className="title">This is the product title</h5>
                                        <p> Some kind of information</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5>$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>$ 100</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>$ 100</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-nav-item py-4 border-bottom'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$ 100</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout
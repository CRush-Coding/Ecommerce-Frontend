import React from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const rating = 4;
const stars = Array(5).fill(0);
const colors = {
    orange: "#F2C265",
    grey: "a9a9a9"
}


const SpecialProd = () => {
  return (
    <div className='col-6 mb-3'>
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src='images/images/watch.jpg' className='img-fluid' alt='watch'/>
                </div>
                <div className='special-product-content'>
                    <h5 className="brand">Havels</h5>
                    <h6 className="title">Samsung Galaxy Watch</h6>
                    <div>
                        {stars.map((_, index) => {
                            return (
                                <>
                                <FaStar
                                    key={index}
                                    size={24}
                                    color={(rating) > index ? colors.orange : colors.grey}
                                />
                        
                            
                                </>
                            )}
                        )}
                        <p>({rating} Stars)</p>
                    </div>
                    <p className="price">
                        <span className="red-p">$100 &nbsp; <strike>$200</strike></span>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className='mb-0 d-flex'>
                            <b>5</b> days 
                        </p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>
                        </div>
                    </div>
                    <div className="prod-count my-3">
                        <p>Products: 5</p>
                        <div className="progress">
                            <div className="progress-bar" 
                                role="progressbar" 
                                style={{"width": "25%"}} 
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100">

                            </div>
                        </div>
                    </div>
                    <Link className='button '>Add to Cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProd
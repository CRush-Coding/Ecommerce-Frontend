import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const colors = {
    orange: "#F2C265",
    grey: "a9a9a9"
}

const stars = Array(5).fill(0);

const rating = 4;

const ProductCard = () => {
  return (
    <>
        <div className="col-3">
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link><img src='images/images/wish.svg' alt='wishlist'/></Link>
                </div>
                <div className="product-image">
                    <img src='images/images/watch.jpg' alt='product image'/>
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
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
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className='d-flex flex-column gap-15'>
                        <Link><img src='images/images/prodcompare.svg' alt='compare'/></Link>

                        <Link><img src='images/images/view.svg' alt='view'/></Link>

                        <Link><img src='images/images/add-cart.svg' alt='addcart'/></Link>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard
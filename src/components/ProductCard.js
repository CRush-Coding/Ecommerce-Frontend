import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";


const colors = {
    orange: "#F2C265",
    grey: "a9a9a9"
}

const stars = Array(5).fill(0);

const rating = 4;

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    // console.log(location);
  return (
    <>
        <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
            <Link to='/product/:id' className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt='wishlist'/>
                    </button>
                </div>
                <div className="product-image">
                    <img src={watch} alt='product' className='img-fluid'/>
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
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cupiditate, dolores doloremque! Odit, 
                        obcaecati dolores hic adipisci repellat nisi quaerat reiciendis in 
                        voluptatibus, 
                        culpa temporibus sit aspernatur aliquid amet iure expedita!
                    </p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'><img src={prodcompare} alt='compare'/></button>

                        <button className='border-0 bg-transparent'><img src={view} alt='view'/></button>

                        <button className='border-0 bg-transparent'><img src={addcart} alt='addcart'/></button>

                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default ProductCard
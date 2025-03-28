import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { FaStar } from 'react-icons/fa';
import ProductCard from '../components/ProductCard'
import Container from '../components/Container';


const colors = {
    orange: "#F2C265",
    grey: "a9a9a9"
}
const stars = Array(5).fill(0);
const rating = 4;

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    // alert(grid);
  return (
    <>
        <Meta title={"Our Store"}/>
        <BreadCrumb title='Our Store'/>
        <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">
                                Shop By Categories
                            </h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">
                                Filter By
                            </h3>
                            <div>
                                <h5 className="sub-title">Availability</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" 
                                            type="checkbox" 
                                            value="" id="" 
                                        />
                                        <label className="form-check-label" 
                                            htmlFor=""> In Stock (1) 
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label className="form-check-label" 
                                            htmlFor=""> Out of Stock (0) 
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                        <input type="email" 
                                            className="form-control py-1" 
                                            id="floatingInput" 
                                            placeholder="From" />
                                        <label htmlFor="floatingInput">
                                            From
                                        </label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="email" 
                                            className="form-control py-1" 
                                            id="floatingInput1" 
                                            placeholder="To" />
                                        <label htmlFor="floatingInput1">
                                            To
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colours</h5>
                                <div>
                                    <ul className='colours ps-0'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" 
                                            type="checkbox" 
                                            value="" id="" 
                                        />
                                        <label className="form-check-label" 
                                            htmlFor=""> S (2) 
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" 
                                            type="checkbox" 
                                            value="" id="" 
                                        />
                                        <label className="form-check-label" 
                                            htmlFor=""> M (2) 
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">
                                Product Tags
                            </h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                                        Headphones
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                                        Laptop
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                                        Mobile
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                                        Wire
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">
                                Random Product
                            </h3>
                            <div>
                                <div className="random-products d-flex mb-3">
                                    <div className="w-50">
                                        <img src='images/images/watch.jpg' 
                                            className='img-fluid' 
                                            alt='watch'
                                        />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Kids headphones bulk 10 pack multi colored for students
                                        </h5>
                                        <div className='mb-2'>
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
                                        </div>
                                        <b>$ 300</b>
                                    </div>

                                </div>
                                <div className="random-products d-flex">
                                    <div className="w-50">
                                        <img src='images/images/watch.jpg' 
                                            className='img-fluid' 
                                            alt='watch'
                                        />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Kids headphones bulk 10 pack multi colored for students
                                        </h5>
                                        <div className='mb-2'>
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
                                        </div>
                                        <b>$ 300</b>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className='d-flex align-items-center gap-10'>
                                    <p className="mb-0 d-block" style={{"width":"100px"}}>Sort By:</p>
                                    <select 
                                        name='' 
                                        className='form-control form-select' 
                                        id=''
                                    >
                                        <option value='manual'>Featured Option</option>   
                                        <option value='best-selling' selected='selected'>Best Selling</option>   
                                        <option value='title-ascending'>Alphabetically, A-Z</option>   
                                        <option value='title-descending'>Alphabetically, Z-A</option>   
                                        <option value='price-ascending'>Price, Low to High</option>   
                                        <option value='price-descending'>Price, High to Low</option>   
                                        <option value='created-ascending'>Date, Old to New</option>   
                                        <option value='created-descending'>Date, New to Old</option>   
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className="totalproducts mb-0">21 Products</p>
                                    <div className="d-flex gap-10 align-items-center grid">
                                        <img  onClick={() => {
                                            setGrid(3);
                                        }}
                                            src='images/images/gr4.svg' 
                                            className='d-block img-fluid' 
                                            alt='grid'
                                        />
                                        <img  onClick={() => {
                                            setGrid(4);
                                        }}
                                            src='images/images/gr3.svg' 
                                            className='d-block img-fluid' 
                                            alt='grid'
                                        />
                                        <img  onClick={() => {
                                            setGrid(6);
                                        }}
                                            src='images/images/gr2.svg' 
                                            className='d-block img-fluid' 
                                            alt='grid'
                                        />
                                        
                                        
                                        <img  onClick={() => {
                                            setGrid(12);
                                        }}
                                            src='images/images/gr.svg' 
                                            className='d-block img-fluid' 
                                            alt='grid'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className='d-flex gap-10 flex-wrap'>
                                <ProductCard grid={grid}/>
                                <ProductCard grid={grid}/>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  );
};

export default OurStore
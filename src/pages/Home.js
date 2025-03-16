import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProd from '../components/SpecialProd';


const Home = () => {
  return (
    <>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src='images/images/main-banner-1.jpg' 
                className='img-fluid rounded-3' 
                alt='main banner' 
              />
              <div className="main-banner-content position-absolute ">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p> From $999.0 or $41.62/mo.</p>
                <Link className='button'>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img 
                  src='images/images/catbanner-01.jpg' 
                  className='img-fluid rounded-3' 
                  alt='main banner' 
                />
                <div className="small-banner-content position-absolute ">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p> From $999.0 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img 
                  src='images/images/catbanner-02.jpg' 
                  className='img-fluid rounded-3' 
                  alt='main banner' 
                />
                <div className="small-banner-content position-absolute ">
                  <h4>New Arrival</h4>
                  <h5>Buy Ipad Air</h5>
                  <p> From $999.0 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img 
                  src='images/images/catbanner-03.jpg' 
                  className='img-fluid rounded-3' 
                  alt='main banner' 
                />
                <div className="small-banner-content position-absolute ">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p> From $999.0 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img 
                  src='images/images/catbanner-04.jpg' 
                  className='img-fluid rounded-3' 
                  alt='main banner' 
                />
                <div className="small-banner-content position-absolute ">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p> From $999.0 <br /> or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className='d-flex align-items-center gap-15'>
                <img src='images/images/service.png' alt='services'/>
                <div>
                  <h6>Free Shipping</h6>
                  <p className='mb-0'>From all orders over $100</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/images/service-02.png' alt='services'/>
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className='mb-0'>Save up to 20% off</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/images/service-03.png' alt='services'/>
                <div>
                  <h6>Support 24/7</h6>
                  <p className='mb-0'>Shop with an expert</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/images/service-04.png' alt='services'/>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get Factory Default Price</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/images/service-05.png' alt='services'/>
                <div>
                  <h6>Secure Payments</h6>
                  <p className='mb-0'>100% Protected Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/camera.jpg' alt='camera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/tv.jpg' alt='camera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/tv.jpg' alt='camera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/headphone.jpg' alt='camera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/camera.jpg' alt='camera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/tv.jpg' alt='camera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/tv.jpg' alt='camera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/headphone.jpg' alt='camera'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="featured-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
			<div className="col-12">
				<h3 className='section-heading'>Featured Collection</h3>
			</div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
    <section className='special-wrapper py-5 home-wrapper-2'>
		<div className="container-xxl">
			<div className="row">
				<div className="col-12">
					<h3 className='section-heading'>Special Products</h3>
				</div>
				
			</div>
			<div className="row">
				<SpecialProd />
				<SpecialProd />
				<SpecialProd />
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
    <section className="marquee-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images/images/brand-01.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/images/brand-02.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/images/brand-03.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/images/brand-04.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/images/brand-05.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/images/brand-06.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/images/brand-07.png' alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/images/brand-08.png' alt='brand'/>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
	<section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
    
        </div>
      </div>
    </section>
    
    </>
  );
}

export default Home
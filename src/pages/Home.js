import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProd from '../components/SpecialProd';
import Container from '../components/Container';
import { services } from '../utils/Data';


const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
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
    </Container>
    <Container class1='home-wrapper-2 py-5'>
      <div className="row">
        <div className="col-12">
          <div className="services d-flex align-items-center justify-content-between">
            {
              services?.map((i,j)=>{
                return (
                  <div className='d-flex align-items-center gap-15' key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
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
    </Container>
    <Container class1='featured-wrapper py-5 home-wrapper-2'>
      <div className="row">
        <div className="col-12">
          <h3 className='section-heading'>Featured Collection</h3>
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
    <Container class1='special-wrapper py-5 home-wrapper-2'>
      <div className="row">
        <div className="col-12">
          <h3 className='section-heading'>Special Products</h3>
        </div>
      </div>
      <div className="row">
        <SpecialProd />
        <SpecialProd />
        <SpecialProd />
        <SpecialProd />
      </div>
    </Container>
	  <Container class1="popular-wrapper py-5 home-wrapper-2">
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
    </Container>
    <Container class1="marquee-wrapper py-5">
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
    </Container>
	<Container class1="blog-wrapper py-5 home-wrapper-2">
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
    </Container>
    
    </>
  );
}

export default Home
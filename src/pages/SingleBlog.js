import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import blog from "../images/blog-1.jpg"

const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Title"}/>
        <BreadCrumb title='Dynamic Blog Title'/>
        <div className="log-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowNarrowLeft className='fs-5'/> Go Back to Blogs
                            </Link>
                            <h3 className="title">
                                A Beautiful Sunday Morning Renaissance
                            </h3>
                            <img src={blog} className='img-fluid w-100 my-4' alt="blog" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Corrupti asperiores quae dolore aspernatur numquam totam expedita vel 
                                similique, iste tempora
                                 quo labore nesciunt consequuntur sunt sit iusto unde, commodi nulla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog
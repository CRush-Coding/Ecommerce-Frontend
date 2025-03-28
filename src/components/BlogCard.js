import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from "../images/blog-1.jpg"

const BlogCard = () => {
  return (
    <div className="blog-card">
        <div className="card-image">
            <img src={blog1} 
                className='img-fluid w-100' 
                alt='blog'
            />
        </div>
        <div className="blog-content">
            <p className='date'>1 Dec, 2022</p>
            <h5 className="title">A Beautiful Sunday Renaissance</h5>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Eaque amet quae debitis possimus eligendi quis ipsam vitae modi temporibus 
                asperiores ipsa voluptatum, reiciendis laborum odit.
                    Quod vitae sapiente explicabo voluptas!
            </p>
            <Link to="/blog/:id" className='button'>Read More</Link>
        </div>
    </div>
  );
}

export default BlogCard
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className="blog-card">
        <div className="card-image">
            <img src='images/images/blog-1.jpg' 
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
            <Link to="/" className='button'>Read More</Link>
        </div>
    </div>
  );
}

export default BlogCard
import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
    const {title} = props;
    return (
        <div className='breadcrumb py-4'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p className='inliner'><Link to='/' className='text-dark'>Home </Link></p>  / {title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb
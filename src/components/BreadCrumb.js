import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
    const {title} = props;
    return (
        <div className='breadcrumb py-4 mb-0'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className='inliner mb-0'>
                            <Link to='/' className='text-dark'>Home &nbsp;</Link>
                        </p> / {title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb
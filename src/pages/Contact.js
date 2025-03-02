import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiInfoCircle, BiPhoneCall } from 'react-icons/bi';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"}/>
      <BreadCrumb title='Contact'/>
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2641755840095!2d144.95845387745203!3d-37.760403430992724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65dfe0c3aff2b%3A0x78509b0b33147e43!2sOsoi!5e0!3m2!1sen!2sau!4v1740474922848!5m2!1sen!2sau" 
              width="600" 
              height="450" 
              className="border-0 w-100" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact List</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email'/>
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea 
                        name='' 
                        id='' 
                        className='w-100 form-control' 
                        cols="30"
                        rows="4"
                        placeholder='Comments'
                      >

                      </textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Get in Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5'/>
                        <address className='mb-0'>Hno: 2777 Around some place</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5'/>
                        <a href="tel:+91 8264954234">+91 8264954234</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5'/>
                        <a href="mailto:blazeboy2218@gmail.com">blazeboy2218@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5'/>
                        <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"}/>
      <BreadCrumb title='Sign Up'/>
      <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Create Account</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <CustomInput 
                            type="text" 
                            name='name' 
                            placeholder='Name' 
                        />
                        <CustomInput 
                            type="email" 
                            name='email' 
                            placeholder='Email' 
                        />
                        <CustomInput 
                            type="tel" 
                            name='mobile' 
                            placeholder='Mobile Number' 
                        />
                        <CustomInput 
                            type="password" 
                            name='password' 
                            placeholder='Password' 
                        />
                        <div>
                            <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                <button className='button border-0' type='submit'>Create</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default Signup
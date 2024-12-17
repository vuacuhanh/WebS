import React from 'react';
import { FaUser, FaLock, FaFacebook, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Register.scss'

export const RegisterForm = () => {
    return (
        <div className='register-form'>
            <div className='wrapper'>
          <form action="">
            <h1>REGISTER</h1>
            <div className='input-box'>
              <input type='text' placeholder='Full Name' required />
              <FaUser className='icon' />
            </div>
            <div className='input-box'>
              <input type='text' placeholder='UserName' required />
              <FaUser className='icon' />
            </div>
            <div className='input-box'>
              <input type='email' placeholder='Email' required />
              <FaEnvelope className='icon' />
            </div>
            <div className='input-box'>
              <input type='tel' placeholder='Phone Number' required />
              <FaPhoneAlt className='icon' />
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Password' required />
              <FaLock className='icon' />
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Confirm Password' required />
              <FaLock className='icon' />
            </div>
            <button type='submit'>Register</button>
            <div className='diff-login'>
              <ul>
                <li><a href='#'><FaFacebook className='icon-fb icon-login' /></a></li>
                <li><a href='#'><FaEnvelope className='icon-gmail icon-login' /></a></li>
              </ul>
            </div>
            <div className='register-link'>
              <p>Already have an account? <a href='/login'>Login</a></p>
            </div>
          </form>
        </div>
    </div>  
    );
};

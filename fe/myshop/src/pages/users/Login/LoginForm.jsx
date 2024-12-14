import React from 'react'
import './Login.scss'
import { FaLock, FaUser,FaFacebook,FaEnvelope } from 'react-icons/fa'
export const LoginForm = () => {
  return (
    <div className='wrapper' >
      <form action= "">
        <h1>LOGIN</h1>
        <div className='input-box'>
          <input type='text' placeholder='UserName' required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
          <label><input type='checkbox' /> Remember me</label>
          <a href='#'>Forgot password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className='diff-login'>
          <ul>
            <li><a><FaFacebook className = "icon-fb icon-login"/></a></li>
            <li><a><FaEnvelope className = "icon-gmail icon-login"/></a></li>
          </ul>
        </div>
        <div className='register-link'>
         <p>Don't have an account? <a href='#'>Register</a></p> 
        </div>
      </form>
    </div>
  )
}
export default LoginForm
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { FaLock, FaUser, FaFacebook, FaEnvelope } from 'react-icons/fa';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      username: email,
      password,
    };

    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login response:', data);  // Ghi log phản hồi nhận được
        if (data.success) {
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate('/');
        } else {
          setErrorMessage(data.message || 'Đăng nhập thất bại');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        setErrorMessage('Lỗi kết nối');
      });
  };

  return (
    <div className="login-wrapper">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1>LOGIN</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="diff-login">
            <ul>
              <li>
                <a href="#">
                  <FaFacebook className="icon-fb icon-login" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaEnvelope className="icon-gmail icon-login" />
                </a>
              </li>
            </ul>
          </div>
          <div className="register-link">
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

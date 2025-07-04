import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginSignup/LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Sign Up');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (action === 'Login') {
      navigate('/dashboard');
    } else {
      setAction('Login');
    }
  };

  const handleSignupClick = () => {
    if (action === 'Sign Up') {
      alert('Signup form submitted!');
    } else {
      setAction('Sign Up');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === 'Login' ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input placeholder="Name" type="text" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input placeholder="Email Id" type="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input placeholder="Password" type="password" />
        </div>
      </div>

      {action === 'Sign Up' ? null : (
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={handleSignupClick}
        >
          Sign Up
        </div>
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={handleLoginClick}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

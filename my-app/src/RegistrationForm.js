import React, { useState } from 'react';
import './RegistrationForm.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [isOtpVisible, setIsOtpVisible] = useState(false); // State to show OTP input

  const toggleForm = () => {
    setIsSignup(prev => !prev);
  };

  const closeForm = () => {
    document.body.classList.remove('show-popup');
  };

  const handlePhoneSubmit = () => {
    // Simulate OTP sending and show OTP input field
    setIsOtpVisible(true);
  };

  return (
    <>
      <header className="home-header">
        <div className="logo">AYUSH Startup India</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <div className={`form-popup ${isSignup ? 'show-signup' : ''}`}>
        <div className="form-box signup">
          <div className="form-details">
            <h2>Create Account</h2>
            <p>To become a part of our community, please sign up using your personal information.</p>
          </div>

          <div className="form-content">
            <h2>SIGNUP</h2>
            <form>
              <div className="input-field">
                <input type="text" required />
                <label>Name</label>
              </div>
              <div className="input-field">
                <input type="text" required />
                <label>Aadhar</label>
              </div>
              <div className="input-field">
                <input type="tel" required />
                <label>Phone</label>
              </div>

              {/* OTP Field */}
              {isOtpVisible && (
                <div className="input-field">
                  <input type="text" required />
                  <label>Enter OTP</label>
                </div>
              )}

              <div className="input-field">
                <input type="password" required />
                <label>Create Password</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Confirm Password</label>
              </div>

              <div className="policy-text">
                <input type="checkbox" id="policy" />
                <label htmlFor="policy">
                  I agree to the
                  <a href="https://www.codingnepalweb.com/website-login-registration-form-html-css-javascript/" className="option">Terms & Conditions</a>
                </label>
              </div>

              {/* Button to submit phone and show OTP field */}
              <button type="button" onClick={handlePhoneSubmit}>Send OTP</button>

              {/* Show Sign Up button only after OTP is visible */}
              {isOtpVisible && <button type="submit">Sign Up</button>}
            </form>

            <div className="bottom-link">
              Already have an account?
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;

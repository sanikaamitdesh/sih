import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the separated CSS for Header

export default function Header() {
  return (
    <>
    <section className="hero-section" id="ok">
        <h1>Welcome to Startup India</h1>
        <p>Empowering the spirit of entrepreneurship in India.</p>
      </section>
      <header className="home-header">
        <div className="logo">AYUSH Startup India</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="login-button">Login</Link>
          <Link to="/register" className="signup-button">Sign Up</Link>
        </div>
      </header>
    </>
  );
}

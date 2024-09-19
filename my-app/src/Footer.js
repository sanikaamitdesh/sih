import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/" className="footer-link">Home</a>
            <a href="/programs" className="footer-link">Programs</a>
            <a href="/resources" className="footer-link">Resources</a>
            <a href="/contact" className="footer-link">Contact Us</a>
          </div>
          <div className="footer-info">
            <p>&copy; {new Date().getFullYear()} Startup India. All rights reserved.</p>
            <p>
              <a href="/privacy-policy" className="footer-link">Privacy Policy</a> | 
              <a href="/terms" className="footer-link"> Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

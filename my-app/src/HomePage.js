import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './HomePage.css';
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo"> AYUSH Startup India</div>
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

      <section className="hero-section">
        <h1>Welcome to Startup India</h1>
        <p>Empowering the spirit of entrepreneurship in India.</p>
        {/* <Link to="/registerstartup" className="cta-button">Register Your Startup</Link> */}
      </section>

      <Carousel
        className="hero-carousel"
        autoPlay
        interval={2000} // 4 seconds interval
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        swipeable
      >
        <div>
          {/* <img src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1" /> */}
          <img src="https://assets.cntraveller.in/photos/60ba031214ea134a32b77af1/master/w_1600%2Cc_limit/opinioteam.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/02/startupculture1--1-.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://img.theweek.in/content/dam/week/magazine/theweek/business/images/2021/5/6/18-Neeraj-Singh.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/45/2022/03/PreviewImage-4-960x640.png" alt="Slide 4" />
        </div>
        <div>
          <img src="https://t3.ftcdn.net/jpg/06/48/40/66/360_F_648406683_fpR6PUMcTBFtOGK0qnbDvI65EwY2i4sR.jpg" alt="Slide 5" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Slide 6" />
        </div>
      </Carousel>

      <Footer/>
    </div>
  );
}

export default HomePage;

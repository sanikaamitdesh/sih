import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './HomePage.css'; // Import HomePage-specific styles
import Footer from "./Footer";
import Header from './Header';
function HomePage() {
  return (
    <>
    <Header />
    <div className="home-container">
      
     
      <div className='buttons'>
        <Link to="/startup"><button>Startup</button></Link>
        <button>Mentor</button>
       <Link to="/registerinvestor"> <button>Investor</button> </Link>
        <button>Gov Official</button>
        <button>Verification Centre</button>
      </div>

      <Carousel
        className="hero-carousel"
        autoPlay
        interval={2000} // 2 seconds interval
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        swipeable
      >
        <div>
          <img src="/images/sanika.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/aditi.jpeg" alt="Slide 2" />
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

      <Footer />
    </div>
    </>
  );
}

export default HomePage;

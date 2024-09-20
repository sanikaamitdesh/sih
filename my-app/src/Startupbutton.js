import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import './Startupbutton.css'; // Import your CSS file

export default function Startupbuttons() {
  return (
    <>
      <Header />
      <div className="timeline">
        <div className="timeline-container">
          <div className="timeline-item active">
            <div className="circle">1</div>
            <div className="line"></div>
            <div className="phase">Ideation Phase</div>
          </div>
          <div className="timeline-item">
            <div className="circle">2</div>
            <div className="line"></div>
            <div className="phase">Scaling Phase</div>
          </div>
        </div>
        <div className="buttons-container">
          <Link to="/ideation">
            <button className="bt">Go to Ideation</button>
          </Link>
          <Link to="/scaling">
            <button className="bt">Go to Scaling</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
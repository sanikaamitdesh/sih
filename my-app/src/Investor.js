import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import "./Investor.css";
import Header from './Header';
const Investor = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
<>
<Header />
<div className="investor-container">
      <h2>Choose your type</h2>
      <div className="button-group">
        <button className="btn" onClick={() => navigate('/indinvestor')}>
          Individual
        </button>
        <button className="btn" onClick={() => navigate('/CompanyInvestor')}>
          Company
        </button>
      </div>
    </div>
</>
   
  );
};

export default Investor;

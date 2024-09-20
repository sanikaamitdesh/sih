import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
// import "./IndInvestor.css";
import Header from './Header';
const IndInvestor = () => {
    const navigate = useNavigate(); // Hook to handle navigation
  const [formData, setFormData] = useState({
    panNumber: '',
    incomeProof: '',
    previousInvestments: '',
    address: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // You can now send the formData to the backend or process it further
  };

  return (
    <>
    <Header />
    <div className="form-container">
      <h2>Individual Investor Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="panNumber">PAN Number</label>
          <input
            type="text"
            name="panNumber"
            id="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="incomeProof">Income Proof</label>
          <input
            type="file"
            name="incomeProof"
            id="incomeProof"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="previousInvestments">Previous Investment History</label>
          <textarea
            name="previousInvestments"
            id="previousInvestments"
            value={formData.previousInvestments}
            onChange={handleChange}
            placeholder="Enter details if any"
          />
        </div>

        {/* Additional fields */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            id="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">Submit</button>
        <button className="btn" onClick={() => navigate('/CreateOppo')}>
          Create Opportunity
        </button>
      </form>
    </div>
    </>
  );
};

export default IndInvestor;

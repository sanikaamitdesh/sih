import React, { useState } from 'react';
// import "./CreateOppo.css";
import Header from './Header';
const CreateOppo = () => {
  const [formData, setFormData] = useState({
    minInvestment: '',
    themeSector: '',
    preferredLocation: '',
    expiryDate: '',
    sectorFocus: '',
    riskLevel: '',
    expectedReturn: '',
    description: '',
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
    console.log('Opportunity Data:', formData);
    // You can send formData to the backend or handle further
  };

  return (
    <>
   <Header />
   
    <div className="form-container">
      <h2>Create Investment Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="minInvestment">Minimum Investment</label>
          <input
            type="number"
            name="minInvestment"
            id="minInvestment"
            value={formData.minInvestment}
            onChange={handleChange}
            required
            placeholder="Enter the minimum amount"
          />
        </div>

        <div className="form-group">
          <label htmlFor="themeSector">Theme & Sector</label>
          <input
            type="text"
            name="themeSector"
            id="themeSector"
            value={formData.themeSector}
            onChange={handleChange}
            required
            placeholder="Enter theme and sector"
          />
        </div>

        <div className="form-group">
          <label htmlFor="preferredLocation">Preferred Location</label>
          <input
            type="text"
            name="preferredLocation"
            id="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            required
            placeholder="Enter preferred location"
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            id="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sectorFocus">Sector Focus</label>
          <input
            type="text"
            name="sectorFocus"
            id="sectorFocus"
            value={formData.sectorFocus}
            onChange={handleChange}
            required
            placeholder="Enter focus sector"
          />
        </div>

        {/* Additional fields */}
        <div className="form-group">
          <label htmlFor="riskLevel">Risk Level</label>
          <select
            name="riskLevel"
            id="riskLevel"
            value={formData.riskLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select risk level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="text"
            name="expectedReturn"
            id="expectedReturn"
            value={formData.expectedReturn}
            onChange={handleChange}
            placeholder="Enter expected return percentage"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter any additional details about the opportunity"
            rows="5"
          />
        </div>

        <button type="submit" className="btn">Create Opportunity</button>
      </form>
    </div>
    </>
  );
};

export default CreateOppo;

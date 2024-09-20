import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
// import "./CompanyInvestor.css";
import Header from './Header';
const CompanyInvestor = () => {
    const navigate = useNavigate(); // Hook to handle navigation
  const [formData, setFormData] = useState({
    companyName: '',
    itrFile: '',
    quarterlyReport: '',
    stakeholderInfo: '',
    previousInvestments: '',
    contactNumber: '',
    companyAddress: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Handle file inputs
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Company Data:', formData);
    // You can send formData to the backend or handle further
  };

  return (<>
  <Header />
    <div className="form-container">
      <h2>Company Investor Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="itrFile">ITR (Income Tax Returns)</label>
          <input
            type="file"
            name="itrFile"
            id="itrFile"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quarterlyReport">Quarterly Report of Profits</label>
          <input
            type="file"
            name="quarterlyReport"
            id="quarterlyReport"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stakeholderInfo">Stakeholder Information</label>
          <textarea
            name="stakeholderInfo"
            id="stakeholderInfo"
            value={formData.stakeholderInfo}
            onChange={handleChange}
            placeholder="Enter names and details of stakeholders"
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
          <label htmlFor="companyAddress">Company Address</label>
          <input
            type="text"
            name="companyAddress"
            id="companyAddress"
            value={formData.companyAddress}
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

export default CompanyInvestor;

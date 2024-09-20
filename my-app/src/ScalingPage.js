import React, { useState } from 'react';
import './ScalingPage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ScalingPage() {
  const [problemStatement, setProblemStatement] = useState('');
  const [solution, setSolution] = useState('');
  const [domain, setDomain] = useState('');
  const [startupName, setStartupName] = useState('');
  const [landLocation, setLandLocation] = useState('');
  const [workforce, setWorkforce] = useState('');
  const [uploadedDocs, setUploadedDocs] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedDocs([...uploadedDocs, ...files]);
  };

  const navigate = useNavigate();

  const handleButton = (e) => {
    e.preventDefault();  // Prevent form submission
    navigate('/dashboard');
  };

  return (
    <div className="dashboard-container">
      <h1>Scaling Phase Dashboard</h1>
      <p>Welcome to the Scaling Phase. Please provide information about your startup's scaling plans.</p>
      
      <form className="scaling-form">
        {/* Problem Statement */}
        <div className="form-group">
          <label htmlFor="problemStatement">Problem Statement</label>
          <textarea 
            id="problemStatement" 
            className="form-input"
            value={problemStatement}
            onChange={(e) => setProblemStatement(e.target.value)}
            placeholder="Describe the problem you aim to solve"
          />
        </div>

        {/* Solution */}
        <div className="form-group">
          <label htmlFor="solution">Proposed Solution</label>
          <textarea 
            id="solution" 
            className="form-input"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            placeholder="Describe the solution you propose"
          />
        </div>

        {/* Domain */}
        <div className="form-group">
          <label htmlFor="domain">Startup Domain</label>
          <input 
            type="text" 
            id="domain" 
            className="form-input"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter the domain (e.g., Healthcare, Fintech, AI)"
          />
        </div>

        {/* Startup Name */}
        <div className="form-group">
          <label htmlFor="startupName">Startup Name</label>
          <input 
            type="text" 
            id="startupName" 
            className="form-input"
            value={startupName}
            onChange={(e) => setStartupName(e.target.value)}
            placeholder="Enter the name of your startup"
          />
        </div>

        {/* Land Location */}
        <div className="form-group">
          <label htmlFor="landLocation">Land Location</label>
          <input 
            type="text" 
            id="landLocation" 
            className="form-input"
            value={landLocation}
            onChange={(e) => setLandLocation(e.target.value)}
            placeholder="Enter the land location for expansion"
          />
        </div>

        {/* Workforce */}
        <div className="form-group">
          <label htmlFor="workforce">Workforce</label>
          <input 
            type="number" 
            id="workforce" 
            className="form-input"
            value={workforce}
            onChange={(e) => setWorkforce(e.target.value)}
            placeholder="Enter the total number of workforce"
          />
        </div>

        {/* Upload Documents */}
        <div className="form-group">
          <label htmlFor="documentUpload">Upload Documents</label>
          <input 
            type="file" 
            id="documentUpload" 
            className="form-input" 
            multiple 
            onChange={handleFileUpload}
          />
          {uploadedDocs.length > 0 && (
            <div className="uploaded-docs">
              <h3>Uploaded Documents:</h3>
              <ul>
                {uploadedDocs.map((doc, index) => (
                  <li key={index}>{doc.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button type="submit" className="submit-button" onClick={handleButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ScalingPage;
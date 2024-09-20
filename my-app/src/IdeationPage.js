import React, { useState } from 'react';
import './IdeationPage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./IdeationPage.css"
function IdeationPage() {
  const [problemStatement, setProblemStatement] = useState('');
  const [solution, setSolution] = useState('');
  const [domain, setDomain] = useState('');
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
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission, such as sending data to a backend server or saving it in state
  //   console.log('Problem Statement:', problemStatement);
  //   console.log('Solution:', solution);
  //   console.log('Domain:', domain);
  //   console.log('Uploaded Documents:', uploadedDocs);
  // };

  return (
    <div className="dashboard-container">
      <h1>Ideation Phase Dashboard</h1>
      <p>Welcome to the Ideation Phase. Begin by outlining your problem statement, proposed solution, and the domain of your startup.</p>
      
      {/* <form onSubmit={handleSubmit} className="ideation-form"> */}
      <form  className="ideation-form">
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

export default IdeationPage;
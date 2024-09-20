import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import "./StartupRegistration.css"
const StartupRegistration = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    aadharNumber: '',
    phoneNumber: '',
    email: '',
    panNumber: '',
    educationDetails: [{ degree: '', institution: '', year: '' }],
    documents: null,
  });

  // Handler for form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for education field changes
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.educationDetails];
    updatedEducation[index][name] = value;
    setFormData({ ...formData, educationDetails: updatedEducation });
  };

  // Add new education section
  const addEducation = () => {
    setFormData({
      ...formData,
      educationDetails: [...formData.educationDetails, { degree: '', institution: '', year: '' }],
    });
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    setFormData({ ...formData, documents: e.target.files });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <Header />
  
    <div className="container">
    
      <form onSubmit={handleSubmit}>
      <h2 className='thorat'>Startup Registration</h2>
        <div>
          <label>Name:     </label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>

        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </div>

        <div>
          <label>Aadhar Number:</label>
          <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleInputChange} />
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
        </div>

        <div>
          <label>Email:      </label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>

        <div>
          <label>PAN Number:</label>
          <input type="text" name="panNumber" value={formData.panNumber} onChange={handleInputChange} />
        </div>

        <h3>Educational Details</h3>
        {formData.educationDetails.map((education, index) => (
          <div key={index}>
            <div>
              <label>Degree:</label>
              <input
                type="text"
                name="degree"
                value={education.degree}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </div>

            <div>
              <label>Institution:</label>
              <input
                type="text"
                name="institution"
                value={education.institution}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </div>

            <div>
              <label>Year of Graduation:</label>
              <input
                type="text"
                name="year"
                value={education.year}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </div>
          </div>
        ))}

        <button type="button" onClick={addEducation}>Add Education</button>

        <div>
          <label>Upload Documents:</label>
          <input type="file" onChange={handleFileUpload} multiple />
        </div>

       <Link to="/startupbutton"> <button type="submit">Register Startup</button> </Link>
      </form>
    </div>
    </>
  );
};

export default StartupRegistration;
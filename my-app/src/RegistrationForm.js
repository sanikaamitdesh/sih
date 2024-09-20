import React, { useState } from 'react';
import './RegistrationForm.css';
import Header from './Header';
function StartupRegistration() {
  const [educations, setEducations] = useState([{ degree: '', institution: '', startDate: '', endDate: '', description: '' }]);

  const handleAddEducation = () => {
    setEducations([...educations, { degree: '', institution: '', startDate: '', endDate: '', description: '' }]);
  };

  const handleRemoveEducation = (index) => {
    const newEducations = educations.filter((_, i) => i !== index);
    setEducations(newEducations);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newEducations = educations.map((education, i) =>
      i === index ? { ...education, [name]: value } : education
    );
    setEducations(newEducations);
  };

  return (
    <>
    <Header />
    <div className="startup-registration-container">
      <h2>Startup Registration</h2>

      {/* Other registration fields... */}

      <h3>Education</h3>
      {educations.map((education, index) => (
        <div key={index} className="education-entry">
          <input
            type="text"
            name="degree"
            value={education.degree}
            onChange={(e) => handleChange(index, e)}
            placeholder="Degree"
          />
          <input
            type="text"
            name="institution"
            value={education.institution}
            onChange={(e) => handleChange(index, e)}
            placeholder="Institution"
          />
          <input
            type="date"
            name="startDate"
            value={education.startDate}
            onChange={(e) => handleChange(index, e)}
            placeholder="Start Date"
          />
          <input
            type="date"
            name="endDate"
            value={education.endDate}
            onChange={(e) => handleChange(index, e)}
            placeholder="End Date"
          />
          <textarea
            name="description"
            value={education.description}
            onChange={(e) => handleChange(index, e)}
            placeholder="Description"
          />
          <button onClick={() => handleRemoveEducation(index)} className="remove-education-button">
            Remove
          </button>
        </div>
      ))}

      <button onClick={handleAddEducation} className="add-education-button">
        Add Education
      </button>

      {/* Submit button and other form components */}
      <button type="submit" className="submit-button">Submit Registration</button>
    </div>
    </>
  );
}

export default StartupRegistration;
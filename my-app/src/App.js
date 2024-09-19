import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm'; // Ensure this path is correct
import './App.css'; // Optional: for custom styles
import HomePage from './HomePage';
import Login from './login';
import RegisterStartUp from './RegisterStartUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/registerstartup" element={<RegisterStartUp />} />      */}
      </Routes>
    </Router>
  );
}

export default App;

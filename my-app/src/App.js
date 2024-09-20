import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm'; // Ensure this path is correct
import './App.css'; // Optional: for custom styles
import HomePage from './HomePage';
import Login from './login';
import RegisterStartUp from './RegisterStartUp';
import StartupRegistration from './StartupRegistration';
import Startupbuttons from './Startupbutton';
import IdeationPage from './IdeationPage';
import DashBoard from './DashBoard';
import Investor from "./Investor";
import IndInvestor from "./IndInvestor";
import CompanyInvestor from "./CompanyInvestor";
import CreateOppo from './CreateOppo';
import ScalingPage from './ScalingPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/registerstartup" element={<RegisterStartUp />} />      */}
        <Route path="/startup" element={<StartupRegistration />} />
        <Route path="/startupbutton" element={<Startupbuttons />}/>
        <Route path="/ideation" element={<IdeationPage />}/>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/registerinvestor" element={<Investor />} /> 
        <Route path="/IndInvestor" element={<IndInvestor />} />   
        <Route path="/CompanyInvestor" element={<CompanyInvestor />} />     
        <Route path="/CreateOppo" element={<CreateOppo />} />    
        <Route path="/scaling" element={<ScalingPage/>} />

      </Routes>
    </Router>
  );
}

export default App;

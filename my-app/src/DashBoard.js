import React from 'react';
import './DashBoard.css'; // Import your CSS file
import Header from './Header';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        {/* <TopNav /> */}
        <div className="content">
          {/* <Card title="Startup Registrations" content="Manage your startup registrations here." /> */}
          <ApplicationStatus />
          {/* <Card title="Notifications" content="View recent notifications." />
          <Card title="Reports" content="Access various reports and statistics." /> */}
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <>
      <Header />
      <div className="sidebar">
        <h2>Dashboard</h2>
        {/* <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a> */}
      </div>
    </>
  );
};

// const TopNav = () => {
//   return (
//     <div className="top-nav">
//       <h1>Welcome to the Dashboard</h1>
//       <div className="user-info">
//         <span>User Name</span>
//         <img src="profile.jpg" alt="Profile" className="profile-img" />
//       </div>
//     </div>
//   );
// };

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const ApplicationStatus = () => {
  const stages = [
    { title: 'Submitted', status: 'completed' },
    { title: 'Under Review', status: 'in-progress' },
    { title: 'Approved', status: 'pending' },
    { title: 'Completed', status: 'upcoming' },
  ];

  return (
    <div className="application-status">
      <h2>Application Status</h2>
      <div className="timeline">
        {stages.map((stage, index) => (
          <div className="timeline-item" key={index}>
            <div className={`circle ${stage.status}`}>{index + 1}</div>
            {index < stages.length - 1 && <div className="line"></div>}
            <div className="phase">{stage.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

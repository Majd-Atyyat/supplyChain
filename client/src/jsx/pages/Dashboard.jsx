// Dashboard.js

import React from 'react';
import LogoutPage from './Logout'; // Adjust the import path based on your file structure

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <LogoutPage /> {/* Render the LogoutPage component for logout */}
      {/* Add other dashboard content here */}
    </div>
  );
};

export default Dashboard;

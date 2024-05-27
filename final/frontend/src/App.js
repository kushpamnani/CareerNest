/*
Author: Kush Pamnani
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobBrowsingPage from './JobBrowsingPage';
import UserProfile from './UserProfile';
import JobDetailPage from './JobDetailPage';
import PersonalInfoPage from './PersonalInfoPage';  // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobBrowsingPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="/info" element={<PersonalInfoPage />} />  // Add new route for personal info
      </Routes>
    </Router>
  );
}

export default App;

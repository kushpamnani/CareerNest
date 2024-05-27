/*
Author: Kush Pamnani
*/

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Homepage</h1>
      <Link to="/profile" className="btn btn-primary">Profile</Link>
    </div>
  );
};

export default HomePage;

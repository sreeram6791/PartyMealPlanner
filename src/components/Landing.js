import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Welcome to PartyPlanner!</h1>

      <p>Create the perfect dish to satisfy your guests, even the pickiest of eaters!</p>
      <Link to="/guest-list">Get started</Link>

    </div>
  )
}

export default Landing;
